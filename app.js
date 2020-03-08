const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');

require('./models/db');
require('./config/passport');

const routesApi = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(passport.initialize());
app.use('/api', routesApi);

app.use(express.static(__dirname + '/client/dist/client'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(process.env.PORT || 8080, function () {
    console.log('Example app listening on port 3000!');
});
