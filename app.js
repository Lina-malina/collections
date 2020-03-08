const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

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

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
