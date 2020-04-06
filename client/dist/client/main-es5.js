(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin/admin.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin/admin.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar>\n  <button mat-flat-button color=\"primary\" (click)=\"disableUsers()\">Disable</button>\n  <button mat-flat-button color=\"accent\" (click)=\"enableUsers()\">Enable</button>\n  <button mat-flat-button color=\"warn\" (click)=\"deleteUsers()\">Delete</button>\n  <button mat-flat-button color=\"basic\" (click)=\"makeAdmin()\">Make an admin</button>\n  <button mat-flat-button color=\"basic\" (click)=\"disableAdmin()\">Disable an admin</button>\n</mat-toolbar>\n<table mat-table [dataSource]=\"users\">\n  <ng-container matColumnDef=\"select\">\n    <th mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n      </mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\">\n      </mat-checkbox>\n    </td>\n  </ng-container>\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> User name </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.name}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"email\">\n    <th mat-header-cell *matHeaderCellDef> User email </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.email}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"page\">\n    <th mat-header-cell *matHeaderCellDef> User page </th>\n    <td mat-cell *matCellDef=\"let user\"> <a [routerLink]=\"['/user-page', user._id]\">page</a> </td>\n  </ng-container>\n  <ng-container matColumnDef=\"isActive\">\n    <th mat-header-cell *matHeaderCellDef>User status </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.isActive | userStatus}} </td>\n  </ng-container>\n  <ng-container matColumnDef=\"isAdmin\">\n    <th mat-header-cell *matHeaderCellDef>User is admin </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.isAdmin | admin}} </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let myRowData; columns: columnsToDisplay\"></tr>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/no-access/no-access.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/no-access/no-access.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminNoAccessNoAccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Sorry, you have no access to admin area! :(</h3>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login-page/login-page.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login-page/login-page.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginPageLoginPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h1>Log in</h1>\n  <p>Not a member? Please <a routerLink=\"/register\">register</a> instead.</p>\n  <div class=\"form-container\">\n    <p *ngIf=\"errorMessage\">{{errorMessage}}</p>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Email address</mat-label>\n      <input matInput type=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n    </mat-form-field>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Password</mat-label>\n      <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n    </mat-form-field>\n    <button mat-raised-button class=\"sign-btn\" color=\"primary\" (click)=\"login()\">Log in!</button>\n  </div>\n</div>\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register-page/register-page.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register-page/register-page.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthRegisterPageRegisterPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h1>Register</h1>\n  <p>Already a member? Please <a routerLink=\"/login\">log in</a> instead.</p>\n  <div class=\"form-container\">\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Full name</mat-label>\n      <input matInput type=\"text\" placeholder=\"Enter your name\" [(ngModel)]=\"credentials.name\">\n    </mat-form-field>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Email address</mat-label>\n      <input matInput type=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n    </mat-form-field>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Password</mat-label>\n      <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n    </mat-form-field>\n    <button mat-raised-button class=\"reg-btn\" color=\"primary\" (click)=\"register()\">Register!</button>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav>\n  <div class=\"logo-container\">\n    <a routerLink=\"/main\">Logo</a>\n  </div>\n  <div class=\"search-container\">\n    <input matInput type=\"search\" [(ngModel)]=\"searchValue\">\n    <button mat-button color=\"primary\" (click)=\"search()\">Search</button>\n  </div>\n  <div class=\"login-container\" *ngIf=\"!auth.isLoggedIn()\">\n    <button mat-stroked-button color=\"primary\" routerLink=\"/login\">Login</button>\n    <button mat-stroked-button color=\"primary\" routerLink=\"/register\">Register</button>\n  </div>\n  <div class=\"user-container\" *ngIf=\"auth.isLoggedIn()\">\n    <button mat-button color=\"primary\" [matMenuTriggerFor]=\"menu\">{{auth.getUserDetails().name | titlecase}}</button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item *ngIf=\"this.auth.isLoggedIn() && this.auth.getUserDetails().isAdmin\" routerLink='/admin'>Admin</button>\n      <button mat-menu-item routerLink='/user-page'>Page</button>\n      <button mat-menu-item (click)=\"auth.logout()\">Logout</button>\n    </mat-menu>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/main-page/main-page.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/main-page/main-page.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreMainPageMainPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"collections-container\">\n  <mat-card *ngFor=\"let collection of collections\">\n    <mat-card-title>{{collection.fullName}}</mat-card-title>\n    <img *ngIf=\"collection.isMale\" mat-card-image src=\"https://tricityescaperooms.com/wp-content/uploads/2018/01/person-placeholder-male-5.jpg\" alt=\"person placeholder\">\n    <img *ngIf=\"!collection.isMale\" mat-card-image src=\"https://www.hopkinsusfhp.org/wp-content/uploads/2018/02/person-placeholder-300x275.jpg\" alt=\"person placeholder\">\n    <mat-card-content>\n      <p>{{collection.dateOfBirth | date}}</p>\n    </mat-card-content>\n    <mat-card-footer>Physician: {{collection.doctorInCharge}}</mat-card-footer>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" [routerLink]=\"['/collections', collection._id]\">Show</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/search/search.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/search/search.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"items-container\">\n  <mat-card *ngFor=\"let item of items\" [routerLink]=\"['/items/' + item._id + '/comments']\">\n    <mat-card-title>{{item.name}}</mat-card-title>\n    <mat-card-subtitle *ngIf=\"item.isGeneric\">Generic</mat-card-subtitle>\n    <mat-card-subtitle *ngIf=\"!item.isGeneric\">Brand name</mat-card-subtitle>\n    <mat-card-content>\n      <p>Medicine form: {{item.form}}</p>\n      <p>Medicine class: {{item.description}}</p>\n    </mat-card-content>\n    <mat-card-footer>By: {{item.authorName}}</mat-card-footer>\n  </mat-card>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/items/collection/collection.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/items/collection/collection.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppItemsCollectionCollectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav *ngIf=\"patient\">\n  <h3 *ngIf=\"patient.isMale\">Mr. {{patient.fullName}} prescriptions</h3>\n  <h3 *ngIf=\"!patient.isMale\">Mrs. {{patient.fullName}} prescriptions</h3>\n  <button mat-icon-button class=\"add-btn\" *ngIf=\"hasAccess()\" [routerLink]=\"['/collections/' + collectionId + '/items/new']\">\n    <i class=\"material-icons\">add_box</i>\n  </button>\n</nav>\n<div class=\"collection-container\" *ngIf=\"patient\">\n  <mat-card *ngFor=\"let item of items\" [style.background-color]=\"item.isDrug ? 'pink' : item.isPsycho ? 'yellow' : 'gray'\"  [routerLink]=\"['/items/' + item._id + '/comments']\" [queryParams]=\"{ patientName: patient.fullName}\">\n    <mat-card-title>Prescription, {{item.payment}} payment</mat-card-title>\n    <mat-card-subtitle>Doctor: {{item.authorName}}</mat-card-subtitle>\n    <mat-card-subtitle>Patient: {{patient.fullName}}</mat-card-subtitle>\n    <mat-card-content>\n      <div>\n        <span>Rp.: </span>\n        <span> {{item.form | titlecase}}</span>\n        <span> {{item.name}}</span>\n        <span> {{item.dose}}</span>\n      </div>\n      <div>\n        <span>D.t.d. N.: </span>\n        <span>{{item.amount}}</span>\n      </div>\n      <div>\n        <span>S.: </span>\n        <span>{{item.prescription}}</span>\n      </div>\n    </mat-card-content>\n    <mat-divider></mat-divider>\n    <button mat-icon-button class=\"edit-btn\" *ngIf=\"hasAccess()\" [routerLink]=\"['/collections/' + collectionId + '/items/' + item._id]\">\n      <i class=\"material-icons edit\">edit</i>\n    </button>\n    <button mat-icon-button class=\"delete-btn\" *ngIf=\"hasAccess()\" (click)=\"deleteItem(item._id)\">\n      <i class=\"material-icons delete\">delete</i>\n    </button>\n  </mat-card>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/items/create-collection/create-collection.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/items/create-collection/create-collection.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppItemsCreateCollectionCreateCollectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"collection-form-container\">\n  <p>Patient</p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Full name:</mat-label>\n    <input matInput [(ngModel)]=\"newPatient.fullName\">\n  </mat-form-field>\n  <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"newPatient.isMale\">\n    <mat-radio-button value=\"true\">Male</mat-radio-button>\n    <mat-radio-button value=\"false\">Female</mat-radio-button>\n  </mat-radio-group>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Date of birth:</mat-label>\n    <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"newPatient.dateOfBirth\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Address:</mat-label>\n    <input matInput [(ngModel)]=\"newPatient.address\">\n  </mat-form-field>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Phone number:</mat-label>\n    <span matPrefix>+375 &nbsp;</span>\n    <input type=\"tel\" matInput placeholder=\"29-333-22-11\" [(ngModel)]=\"newPatient.number\">\n  </mat-form-field>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" *ngIf=\"isCreationMode\" (click)=\"addCollection()\">\n      Add patient\n    </button>\n    <button mat-raised-button color=\"primary\" *ngIf=\"!isCreationMode\" (click)=\"editCollection()\">\n      Edit patient\n    </button>\n  </mat-card-actions>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/items/create-item/create-item.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/items/create-item/create-item.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppItemsCreateItemCreateItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"item-form-container\">\n  <h4>Prescription</h4>\n  <mat-form-field appearance=\"standard\" class=\"payment\">\n    <mat-label>Payment</mat-label>\n    <mat-select matInput [(ngModel)]=\"newItem.payment\">\n      <mat-option *ngFor=\"let payment of payments\" [value]=\"payment.value\">\n        {{payment.value}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <div class=\"row\">\n    <mat-checkbox matInput [(ngModel)]=\"newItem.isDrug\">Drug</mat-checkbox>\n    <mat-checkbox matInput [(ngModel)]=\"newItem.isPsycho\">Psycho</mat-checkbox>\n  </div>\n  <table cellspacing=\"0\">\n    <tr>\n      <td>\n        <mat-form-field appearance=\"standard\" class=\"form\">\n          <span matPrefix>Rp.: &nbsp;</span>\n          <mat-label>Form</mat-label>\n          <mat-select matInput [(ngModel)]=\"newItem.form\">\n            <mat-option *ngFor=\"let form of medicineForms\" [value]=\"form.value\">\n              {{form.value | titlecase}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </td>\n      <td>\n        <mat-form-field appearance=\"standard\">\n          <mat-label>Name</mat-label>\n          <input matInput [(ngModel)]=\"newItem.name\">\n        </mat-form-field>\n      </td>\n      <td>\n        <mat-form-field appearance=\"standard\" class=\"dose\">\n          <mat-label>Dose</mat-label>\n          <input matInput [(ngModel)]=\"newItem.dose\">\n        </mat-form-field>\n      </td>\n    </tr>\n  </table>\n  <mat-form-field appearance=\"standard\" class=\"amount\">\n    <span matPrefix>D.t.d. N.: &nbsp;</span>\n    <mat-label>Amount</mat-label>\n    <input matInput [(ngModel)]=\"newItem.amount\">\n  </mat-form-field>\n  <mat-form-field appearance=\"standard\" class=\"prescription\">\n    <span matPrefix>S.: &nbsp;</span>\n    <mat-label>Prescription</mat-label>\n    <input matInput [(ngModel)]=\"newItem.prescription\">\n  </mat-form-field>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" *ngIf=\"isCreationMode\" (click)=\"addItem()\">Create prescription</button>\n    <button mat-raised-button color=\"primary\" *ngIf=\"!isCreationMode\" (click)=\"editItem()\">Edit prescription</button>\n  </mat-card-actions>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/items/item-with-comments/item-with-comments.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/items/item-with-comments/item-with-comments.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppItemsItemWithCommentsItemWithCommentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"item-container\">\n  <mat-card *ngIf=\"item\" [style.background-color]=\"item.isDrug ? 'pink' : item.isPsycho ? 'yellow' : 'gray'\">\n    <mat-card-title>Prescription, {{item.payment}} payment</mat-card-title>\n    <mat-card-subtitle>Doctor: {{item.authorName}}</mat-card-subtitle>\n    <mat-card-subtitle>Patient: {{patientName}}</mat-card-subtitle>\n    <mat-card-content>\n      <div class=\"row\">\n        <span>Rp.: </span>\n        <span> {{item.form | titlecase}}</span>\n        <span> {{item.name}}</span>\n        <span> {{item.dose}}</span>\n      </div>\n      <div>\n        <span>D.t.d. N.: </span>\n        <span>{{item.amount}}</span>\n      </div>\n      <div>\n        <span>S.: </span>\n        <span>{{item.prescription}}</span>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n<div class=\"comment-textarea\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Leave a comment</mat-label>\n    <textarea matInput [(ngModel)]=\"comment\"></textarea>\n    <button mat-raised-button color=\"primary\" class=\"send-btn\" (click)=\"addComment()\">\n      Send\n    </button>\n  </mat-form-field>\n</div>\n<div class=\"comments-container\" *ngIf=\"item\">\n  <div class=\"comment\" *ngFor=\"let comment of item.comments\">\n    <p class=\"text\">{{comment.comment}}</p>\n    <p class=\"author\">By: {{comment.author}}</p>\n  </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/items/user-page.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/items/user-page.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppItemsUserPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <h2>Doctor {{userName | titlecase}} patients</h2>\n  <button mat-raised-button color=\"primary\" routerLink=\"/collections/new\" [queryParams]=\"{ userId: userId, userName: userName }\">\n    Add patient\n  </button>\n</div>\n<div class=\"collections-container\">\n  <mat-card *ngFor=\"let collection of collections\">\n    <button mat-icon-button class=\"edit-btn\" [routerLink]=\"['/collections/edit', collection._id]\">\n      <i class=\"material-icons edit\">edit</i>\n    </button>\n    <button mat-icon-button class=\"delete-btn\" (click)=\"deleteCollection(collection._id)\">\n      <i class=\"material-icons delete\">delete</i>\n    </button>\n    <mat-card-title>{{collection.fullName}}</mat-card-title>\n    <mat-card-content>\n      <p>{{collection.dateOfBirth | date}}</p>\n      <p>Address: {{collection.address}}</p>\n      <p>Phone number: +375 {{collection.number}}</p>\n      <p>Physician: {{collection.doctorInCharge}}</p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" [routerLink]=\"['/collections', collection._id]\">\n        Show\n      </button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin/admin.component.ts");
    /* harmony import */


    var _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./no-access/no-access.component */
    "./src/app/admin/no-access/no-access.component.ts");
    /* harmony import */


    var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guards/admin.guard */
    "./src/app/admin/guards/admin.guard.ts");

    const routes = [{
      path: 'admin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
      canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_5__["AdminGuard"]]
    }, {
      path: 'no-access',
      component: _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_4__["NoAccessComponent"]
    }];
    let AdminRoutingModule = class AdminRoutingModule {};
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin/admin.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _admin_pipes_user_status_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin/pipes/user-status.pipe */
    "./src/app/admin/admin/pipes/user-status.pipe.ts");
    /* harmony import */


    var _admin_pipes_admin_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin/pipes/admin.pipe */
    "./src/app/admin/admin/pipes/admin.pipe.ts");
    /* harmony import */


    var _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./no-access/no-access.component */
    "./src/app/admin/no-access/no-access.component.ts");

    let AdminModule = class AdminModule {};
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], _admin_pipes_user_status_pipe__WEBPACK_IMPORTED_MODULE_6__["UserStatusPipe"], _admin_pipes_admin_pipe__WEBPACK_IMPORTED_MODULE_7__["AdminPipe"], _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_8__["NoAccessComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/admin/admin.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/admin/admin/admin.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.logo-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-header-cell {\n  font-size: 1rem;\n  text-align: center;\n}\n\ntr {\n  text-align: center;\n}\n\n.mat-column-select {\n  overflow: initial;\n}\n\nmat-toolbar button {\n  margin-right: 15px;\n}\n\na {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4vQzpcXFByb2plY3RzXFxpdHJhXFxjb2xsZWN0aW9uc1xcY2xpZW50L3NyY1xcYXBwXFxhZG1pblxcYWRtaW5cXGFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTtFQUNFLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtBQ01GOztBREpBO0VBQ0Usa0JBQUE7QUNPRjs7QURMQTtFQUNFLFlBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudHIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWF0LWNvbHVtbi1zZWxlY3Qge1xyXG4gIG92ZXJmbG93OiBpbml0aWFsO1xyXG59XHJcbm1hdC10b29sYmFyIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iLCJuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1jb2x1bW4tc2VsZWN0IHtcbiAgb3ZlcmZsb3c6IGluaXRpYWw7XG59XG5cbm1hdC10b29sYmFyIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin/admin.component.ts":
  /*!************************************************!*\
    !*** ./src/app/admin/admin/admin.component.ts ***!
    \************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _auth_services_users_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth/services/users-management.service */
    "./src/app/auth/services/users-management.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AdminComponent = class AdminComponent {
      constructor(auth, usersManagement, router) {
        this.auth = auth;
        this.usersManagement = usersManagement;
        this.router = router;
        this.columnsToDisplay = ['select', 'name', 'email', 'page', 'isActive', 'isAdmin'];
      }

      isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.users.length;
        return numSelected === numRows;
      }

      masterToggle() {
        this.isAllSelected() ? this.selection.clear() : this.users.forEach(row => this.selection.select(row));
      }

      reloadGrid() {
        this.usersManagement.users().subscribe(users => {
          this.selection.clear();
          this.users = users;
        });
      }

      disableUsers() {
        const selectedUsersId = this.selection.selected.map(user => user._id);
        const currentUserId = selectedUsersId.find(id => id === this.auth.getUserDetails()._id);
        this.usersManagement.postSelectedId(selectedUsersId, 'disable').subscribe(() => {
          currentUserId ? this.auth.logout() : this.reloadGrid();
        });
      }

      enableUsers() {
        const selectedUsersId = this.selection.selected.map(user => user._id);
        this.usersManagement.postSelectedId(selectedUsersId, 'enable').subscribe(() => this.reloadGrid());
      }

      deleteUsers() {
        const selectedUsersId = this.selection.selected.map(user => user._id);
        const currentUserId = selectedUsersId.find(id => id === this.auth.getUserDetails()._id);
        this.usersManagement.postSelectedId(selectedUsersId, 'delete').subscribe(() => {
          currentUserId ? this.auth.logout() : this.reloadGrid();
        });
      }

      makeAdmin() {
        const selectedUsersId = this.selection.selected.map(user => user._id);
        this.usersManagement.postSelectedId(selectedUsersId, 'new-admin').subscribe(() => this.reloadGrid());
      }

      disableAdmin() {
        const selectedUsersId = this.selection.selected.map(user => user._id);
        const currentUserId = selectedUsersId.find(id => id === this.auth.getUserDetails()._id);
        this.usersManagement.postSelectedId(selectedUsersId, 'not-admin').subscribe(() => {
          currentUserId ? this.auth.logout() : this.reloadGrid();
        });
      }

      ngOnInit() {
        this.usersManagement.users().subscribe(users => this.users = users);
        const initialSelection = [];
        const allowMultiSelect = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](allowMultiSelect, initialSelection);
      }

    };

    AdminComponent.ctorParameters = () => [{
      type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _auth_services_users_management_service__WEBPACK_IMPORTED_MODULE_4__["UsersManagementService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }];

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin/admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.scss */
      "./src/app/admin/admin/admin.component.scss")).default]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin/pipes/admin.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/admin/admin/pipes/admin.pipe.ts ***!
    \*************************************************/

  /*! exports provided: AdminPipe */

  /***/
  function srcAppAdminAdminPipesAdminPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPipe", function () {
      return AdminPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AdminPipe = class AdminPipe {
      transform(value) {
        return value ? 'Yes' : 'No';
      }

    };
    AdminPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'admin'
    })], AdminPipe);
    /***/
  },

  /***/
  "./src/app/admin/admin/pipes/user-status.pipe.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin/admin/pipes/user-status.pipe.ts ***!
    \*******************************************************/

  /*! exports provided: UserStatusPipe */

  /***/
  function srcAppAdminAdminPipesUserStatusPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserStatusPipe", function () {
      return UserStatusPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UserStatusPipe = class UserStatusPipe {
      transform(value) {
        return value ? 'User is active' : 'User is blocked';
      }

    };
    UserStatusPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'userStatus'
    })], UserStatusPipe);
    /***/
  },

  /***/
  "./src/app/admin/guards/admin.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/admin/guards/admin.guard.ts ***!
    \*********************************************/

  /*! exports provided: AdminGuard */

  /***/
  function srcAppAdminGuardsAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
      return AdminGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");

    let AdminGuard = class AdminGuard {
      constructor(auth, router) {
        this.auth = auth;
        this.router = router;
      }

      canActivate(next, state) {
        if (this.auth.getUserDetails().isAdmin) {
          return true;
        }

        this.router.navigateByUrl('/no-access');
        return false;
      }

    };

    AdminGuard.ctorParameters = () => [{
      type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminGuard);
    /***/
  },

  /***/
  "./src/app/admin/no-access/no-access.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/admin/no-access/no-access.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminNoAccessNoAccessComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL25vLWFjY2Vzcy9uby1hY2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/admin/no-access/no-access.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/no-access/no-access.component.ts ***!
    \********************************************************/

  /*! exports provided: NoAccessComponent */

  /***/
  function srcAppAdminNoAccessNoAccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoAccessComponent", function () {
      return NoAccessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NoAccessComponent = class NoAccessComponent {
      constructor() {}

      ngOnInit() {}

    };
    NoAccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-no-access',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./no-access.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/no-access/no-access.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./no-access.component.scss */
      "./src/app/admin/no-access/no-access.component.scss")).default]
    })], NoAccessComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/main-page/main-page.component */
    "./src/app/core/main-page/main-page.component.ts");
    /* harmony import */


    var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/guards/auth.guard */
    "./src/app/auth/guards/auth.guard.ts");

    const routes = [{
      path: '',
      component: _core_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
      canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");

    let AppComponent = class AppComponent {
      constructor(auth) {
        this.auth = auth;
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }];

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts");
    /* harmony import */


    var _items_user_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./items/user-page.module */
    "./src/app/items/user-page.module.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin/admin.module */
    "./src/app/admin/admin.module.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_8__["AdminModule"], _items_user_page_module__WEBPACK_IMPORTED_MODULE_7__["UserPageModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/auth/login-page/login-page.component.ts");
    /* harmony import */


    var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register-page/register-page.component */
    "./src/app/auth/register-page/register-page.component.ts");

    const routes = [{
      path: 'login',
      component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]
    }, {
      path: 'register',
      component: _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__["RegisterPageComponent"]
    }];
    let AuthRoutingModule = class AuthRoutingModule {};
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register-page/register-page.component */
    "./src/app/auth/register-page/register-page.component.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/auth/login-page/login-page.component.ts");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    let AuthModule = class AuthModule {};
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__["RegisterPageComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/auth/guards/auth.guard.ts":
  /*!*******************************************!*\
    !*** ./src/app/auth/guards/auth.guard.ts ***!
    \*******************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/auth/services/auth.service.ts");

    let AuthGuard = class AuthGuard {
      constructor(auth, router) {
        this.auth = auth;
        this.router = router;
      }

      canActivate(next, state) {
        if (this.auth.isLoggedIn()) {
          return true;
        }

        this.router.navigateByUrl('/login');
        return false;
      }

    };

    AuthGuard.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/login-page/login-page.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/auth/login-page/login-page.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginPageLoginPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.form-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: gray;\n  width: 100%;\n  max-width: 400px;\n}\n\n.sign-btn {\n  width: 100px;\n  margin: 0px auto 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi1wYWdlL0M6XFxQcm9qZWN0c1xcaXRyYVxcY29sbGVjdGlvbnNcXGNsaWVudC9zcmNcXGFwcFxcYXV0aFxcbG9naW4tcGFnZVxcbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG4uc2lnbi1idG4ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW46IDBweCBhdXRvIDEwcHg7XHJcbn1cclxuXHJcbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLnNpZ24tYnRuIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDBweCBhdXRvIDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/auth/login-page/login-page.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/auth/login-page/login-page.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppAuthLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let LoginPageComponent = class LoginPageComponent {
      constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
          email: '',
          password: ''
        };
        this.errorMessage = '';
      }

      ngOnInit() {}

      login() {
        this.auth.login(this.credentials).subscribe(() => {
          this.router.navigateByUrl('/main');
        }, err => {
          this.errorMessage = err.error.message;
        });
      }

    };

    LoginPageComponent.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login-page/login-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-page.component.scss */
      "./src/app/auth/login-page/login-page.component.scss")).default]
    })], LoginPageComponent);
    /***/
  },

  /***/
  "./src/app/auth/register-page/register-page.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/auth/register-page/register-page.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthRegisterPageRegisterPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.form-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: gray;\n  width: 100%;\n  max-width: 400px;\n}\n\n.reg-btn {\n  width: 100px;\n  margin: 0px auto 10px;\n}\n\na {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci1wYWdlL0M6XFxQcm9qZWN0c1xcaXRyYVxcY29sbGVjdGlvbnNcXGNsaWVudC9zcmNcXGFwcFxcYXV0aFxccmVnaXN0ZXItcGFnZVxccmVnaXN0ZXItcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9yZWdpc3Rlci1wYWdlL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FDR0Y7O0FEREE7RUFDRSxxQkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZWdpc3Rlci1wYWdlL3JlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuLnJlZy1idG4ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW46IDBweCBhdXRvIDEwcHg7XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLnJlZy1idG4ge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG8gMTBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/auth/register-page/register-page.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/auth/register-page/register-page.component.ts ***!
    \***************************************************************/

  /*! exports provided: RegisterPageComponent */

  /***/
  function srcAppAuthRegisterPageRegisterPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function () {
      return RegisterPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let RegisterPageComponent = class RegisterPageComponent {
      constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
          email: '',
          name: '',
          password: ''
        };
      }

      ngOnInit() {}

      register() {
        this.auth.register(this.credentials).subscribe(() => {
          this.router.navigateByUrl('/main');
        }, err => {
          console.error(err);
        });
      }

    };

    RegisterPageComponent.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    RegisterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register-page/register-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register-page.component.scss */
      "./src/app/auth/register-page/register-page.component.scss")).default]
    })], RegisterPageComponent);
    /***/
  },

  /***/
  "./src/app/auth/services/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/services/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AuthService = class AuthService {
      constructor(http, router) {
        this.http = http;
        this.router = router;
      }

      saveToken(token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
      }

      getToken() {
        if (!this.token) {
          this.token = localStorage.getItem('mean-token');
        }

        return this.token;
      }

      logout() {
        this.token = '';
        localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/main');
      }

      getUserDetails() {
        const token = this.getToken();

        if (token) {
          let payload = token.split('.')[1];
          payload = window.atob(payload);
          return JSON.parse(payload);
        } else {
          return null;
        }
      }

      isLoggedIn() {
        const user = this.getUserDetails();

        if (user) {
          return user.exp > Date.now() / 1000;
        } else {
          return false;
        }
      }

      register(user) {
        return this.http.post('/api/register', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
          if (data.token) {
            this.saveToken(data.token);
          }

          return data;
        }));
      }

      login(user) {
        return this.http.post('/api/login', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
          if (data.token) {
            this.saveToken(data.token);
          }

          return data;
        }));
      }

    };

    AuthService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthService);
    /***/
  },

  /***/
  "./src/app/auth/services/users-management.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/auth/services/users-management.service.ts ***!
    \***********************************************************/

  /*! exports provided: UsersManagementService */

  /***/
  function srcAppAuthServicesUsersManagementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersManagementService", function () {
      return UsersManagementService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let UsersManagementService = class UsersManagementService {
      constructor(http) {
        this.http = http;
      }

      users() {
        return this.http.get('/api/users');
      }

      getUserById(userId) {
        return this.http.get('api/users/' + userId);
      }

      postSelectedId(selectedId, action) {
        return this.http.post("/api/users/".concat(action), {
          selectedId
        });
      }

    };

    UsersManagementService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    UsersManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsersManagementService);
    /***/
  },

  /***/
  "./src/app/core/core-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/core-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: CoreRoutingModule */

  /***/
  function srcAppCoreCoreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreRoutingModule", function () {
      return CoreRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/core/main-page/main-page.component.ts");
    /* harmony import */


    var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/guards/auth.guard */
    "./src/app/auth/guards/auth.guard.ts");
    /* harmony import */


    var _items_user_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../items/user-page.component */
    "./src/app/items/user-page.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/core/search/search.component.ts");

    const routes = [{
      path: '',
      component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]
    }, {
      path: 'main',
      component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"]
    }, {
      path: 'user-page',
      component: _items_user_page_component__WEBPACK_IMPORTED_MODULE_5__["UserPageComponent"],
      canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'user-page/:userId',
      component: _items_user_page_component__WEBPACK_IMPORTED_MODULE_5__["UserPageComponent"],
      canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'search',
      component: _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]
    }];
    let CoreRoutingModule = class CoreRoutingModule {};
    CoreRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CoreRoutingModule);
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/core/main-page/main-page.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _core_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core-routing.module */
    "./src/app/core/core-routing.module.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/core/header/header.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/core/search/search.component.ts");

    let CoreModule = class CoreModule {};
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _core_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoreRoutingModule"]],
      exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/core/header/header.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/core/header/header.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 50px;\n}\n\n.search-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.search-container input {\n  border: 1px solid gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvQzpcXFByb2plY3RzXFxpdHJhXFxjb2xsZWN0aW9uc1xcY2xpZW50L3NyY1xcYXBwXFxjb3JlXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0VGOztBRERFO0VBQ0Usc0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIH1cclxufVxyXG4iLCJuYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaC1jb250YWluZXIgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/header/header.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/header/header.component.ts ***!
    \*************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppCoreHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let HeaderComponent = class HeaderComponent {
      constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.searchValue = '';
      }

      ngOnInit() {}

      search() {
        if (this.searchValue) {
          this.router.navigateByUrl('search');
        }
      }

    };

    HeaderComponent.ctorParameters = () => [{
      type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/core/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/core/main-page/main-page.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/core/main-page/main-page.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreMainPageMainPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".collections-container {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\nmat-card {\n  width: 300px;\n  max-width: 300px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  position: relative;\n  padding-right: 30px;\n}\n\nmat-card img {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n\n.mat-card-image {\n  width: calc(25% + 32px);\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9tYWluLXBhZ2UvQzpcXFByb2plY3RzXFxpdHJhXFxjb2xsZWN0aW9uc1xcY2xpZW50L3NyY1xcYXBwXFxjb3JlXFxtYWluLXBhZ2VcXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREFBO0VBQ0UsdUJBQUE7RUFDQSxTQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGVjdGlvbnMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5tYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gIH1cclxufVxyXG4ubWF0LWNhcmQtaW1hZ2Uge1xyXG4gIHdpZHRoOiBjYWxjKDI1JSArIDMycHgpO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iLCIuY29sbGVjdGlvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxubWF0LWNhcmQgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuXG4ubWF0LWNhcmQtaW1hZ2Uge1xuICB3aWR0aDogY2FsYygyNSUgKyAzMnB4KTtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/main-page/main-page.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/main-page/main-page.component.ts ***!
    \*******************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppCoreMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_items_services_collections_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/items/services/collections-management.service */
    "./src/app/items/services/collections-management.service.ts");
    /* harmony import */


    var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");

    let MainPageComponent = class MainPageComponent {
      constructor(auth, collManagement) {
        this.auth = auth;
        this.collManagement = collManagement;
        this.collections = [];
      }

      ngOnInit() {
        this.collManagement.getCollections().subscribe(coll => this.collections = coll);
      }

    };

    MainPageComponent.ctorParameters = () => [{
      type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: src_app_items_services_collections_management_service__WEBPACK_IMPORTED_MODULE_2__["CollectionsManagementService"]
    }];

    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/main-page/main-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-page.component.scss */
      "./src/app/core/main-page/main-page.component.scss")).default]
    })], MainPageComponent);
    /***/
  },

  /***/
  "./src/app/core/search/search.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/core/search/search.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".items-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nmat-card {\n  width: 300px;\n  max-width: 300px;\n  margin-right: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zZWFyY2gvQzpcXFByb2plY3RzXFxpdHJhXFxjb2xsZWN0aW9uc1xcY2xpZW50L3NyY1xcYXBwXFxjb3JlXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbXMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiIsIi5pdGVtcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/search/search.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/search/search.component.ts ***!
    \*************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppCoreSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_items_services_items_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/items/services/items-management.service */
    "./src/app/items/services/items-management.service.ts");

    let SearchComponent = class SearchComponent {
      constructor(itemsManagement) {
        this.itemsManagement = itemsManagement;
        this.items = [];
      }

      ngOnInit() {
        this.itemsManagement.getAllItems().subscribe(items => this.items = items);
      }

    };

    SearchComponent.ctorParameters = () => [{
      type: src_app_items_services_items_management_service__WEBPACK_IMPORTED_MODULE_2__["ItemsManagementService"]
    }];

    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/search/search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.scss */
      "./src/app/core/search/search.component.scss")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/items/collection/collection.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/items/collection/collection.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppItemsCollectionCollectionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 30px;\n}\n\n.collection-container {\n  display: -webkit-box;\n  display: flex;\n}\n\nmat-card {\n  width: 300px;\n  max-width: 300px;\n  margin-right: 20px;\n  color: black;\n  cursor: pointer;\n}\n\nmat-card-subtitle {\n  color: black;\n}\n\nmat-divider {\n  border-top-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvY29sbGVjdGlvbi9DOlxcUHJvamVjdHNcXGl0cmFcXGNvbGxlY3Rpb25zXFxjbGllbnQvc3JjXFxhcHBcXGl0ZW1zXFxjb2xsZWN0aW9uXFxjb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGVtcy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0FDSUY7O0FERkE7RUFDRSx1QkFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvaXRlbXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5jb2xsZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5tYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5tYXQtZGl2aWRlciB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbiIsIm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY29sbGVjdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWF0LWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbm1hdC1kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/items/collection/collection.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/items/collection/collection.component.ts ***!
    \**********************************************************/

  /*! exports provided: CollectionComponent */

  /***/
  function srcAppItemsCollectionCollectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectionComponent", function () {
      return CollectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_items_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/items-management.service */
    "./src/app/items/services/items-management.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _services_collections_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/collections-management.service */
    "./src/app/items/services/collections-management.service.ts");

    let CollectionComponent = class CollectionComponent {
      constructor(itemsManagement, collManagement, route, auth) {
        this.itemsManagement = itemsManagement;
        this.collManagement = collManagement;
        this.route = route;
        this.auth = auth;
        this.items = [];
        this.collectionId = this.route.snapshot.paramMap.get('id');
      }

      ngOnInit() {
        this.itemsManagement.getItems(this.collectionId).subscribe(items => this.items = items);

        if (this.auth.isLoggedIn()) {
          this.collManagement.getCollectionById(this.collectionId).subscribe(coll => this.patient = coll);
        }
      }

      hasAccess() {
        return this.auth.isLoggedIn() && (this.auth.getUserDetails().isAdmin || this.auth.getUserDetails()._id === this.patient.authorId);
      }

      deleteItem(id) {
        this.itemsManagement.deleteItem(id).subscribe(() => this.itemsManagement.getItems(this.collectionId).subscribe(items => this.items = items));
      }

    };

    CollectionComponent.ctorParameters = () => [{
      type: _services_items_management_service__WEBPACK_IMPORTED_MODULE_2__["ItemsManagementService"]
    }, {
      type: _services_collections_management_service__WEBPACK_IMPORTED_MODULE_5__["CollectionsManagementService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }];

    CollectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-collection',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./collection.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/items/collection/collection.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./collection.component.scss */
      "./src/app/items/collection/collection.component.scss")).default]
    })], CollectionComponent);
    /***/
  },

  /***/
  "./src/app/items/create-collection/create-collection.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/items/create-collection/create-collection.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppItemsCreateCollectionCreateCollectionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".collection-form-container {\n  background-color: gray;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 400px;\n  margin: 0 auto;\n}\n\nmat-card-actions {\n  text-align: center;\n}\n\n.mat-card-actions .mat-raised-button:first-child {\n  margin-bottom: 10px;\n}\n\np {\n  text-align: center;\n}\n\n.mat-card-actions .mat-raised-button:first-child {\n  margin-left: 20px;\n}\n\n.mat-radio-button ~ .mat-radio-button {\n  margin-left: 15px;\n}\n\nmat-radio-group {\n  margin: 0px 0px 20px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvY3JlYXRlLWNvbGxlY3Rpb24vQzpcXFByb2plY3RzXFxpdHJhXFxjb2xsZWN0aW9uc1xcY2xpZW50L3NyY1xcYXBwXFxpdGVtc1xcY3JlYXRlLWNvbGxlY3Rpb25cXGNyZWF0ZS1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGVtcy9jcmVhdGUtY29sbGVjdGlvbi9jcmVhdGUtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxtQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7QUNJRjs7QURGQTtFQUNFLGlCQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2NyZWF0ZS1jb2xsZWN0aW9uL2NyZWF0ZS1jb2xsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGxlY3Rpb24tZm9ybS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1yYWlzZWQtYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbnAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LXJhaXNlZC1idXR0b246Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbm1hdC1yYWRpby1ncm91cCB7XHJcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMTBweDtcclxufVxyXG4iLCIuY29sbGVjdGlvbi1mb3JtLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbm1hdC1jYXJkLWFjdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiB+IC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbm1hdC1yYWRpby1ncm91cCB7XG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/items/create-collection/create-collection.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/items/create-collection/create-collection.component.ts ***!
    \************************************************************************/

  /*! exports provided: CreateCollectionComponent */

  /***/
  function srcAppItemsCreateCollectionCreateCollectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCollectionComponent", function () {
      return CreateCollectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _services_collections_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/collections-management.service */
    "./src/app/items/services/collections-management.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let CreateCollectionComponent = class CreateCollectionComponent {
      constructor(auth, collManagement, route, router) {
        this.auth = auth;
        this.collManagement = collManagement;
        this.route = route;
        this.router = router;
        this.newPatient = {
          _id: '',
          fullName: '',
          isMale: true,
          dateOfBirth: '',
          address: '',
          number: '',
          doctorInCharge: null,
          authorId: null
        };
        this.isCreationMode = true;
      }

      ngOnInit() {
        this.newPatient.authorId = this.auth.getUserDetails()._id;
        this.newPatient.doctorInCharge = this.auth.getUserDetails().name;
        this.route.queryParamMap.subscribe(params => {
          if (params.get('userId')) {
            this.newPatient.authorId = params.get('userId');
            this.newPatient.doctorInCharge = params.get('userName');
          }
        });

        if (this.route.snapshot.paramMap.get('id')) {
          this.isCreationMode = false;
          this.collManagement.getCollectionById(this.route.snapshot.paramMap.get('id')).subscribe(currentCollection => this.newPatient = currentCollection);
        }
      }

      addCollection() {
        this.collManagement.addCollection(this.newPatient).subscribe(() => {
          this.router.navigateByUrl('/user-page');
          this.route.queryParamMap.subscribe(params => {
            if (params.get('userId')) {
              this.router.navigateByUrl('/user-page/' + params.get('userId'));
            }
          });
        });
      }

      editCollection() {
        this.collManagement.editCollection(this.newPatient._id, this.newPatient).subscribe(() => {
          this.router.navigateByUrl('/user-page');
        });
      }

    };

    CreateCollectionComponent.ctorParameters = () => [{
      type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _services_collections_management_service__WEBPACK_IMPORTED_MODULE_3__["CollectionsManagementService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    CreateCollectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-collection',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-collection.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/items/create-collection/create-collection.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-collection.component.scss */
      "./src/app/items/create-collection/create-collection.component.scss")).default]
    })], CreateCollectionComponent);
    /***/
  },

  /***/
  "./src/app/items/create-item/create-item.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/items/create-item/create-item.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppItemsCreateItemCreateItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-form-container {\n  background-color: gray;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 500px;\n  margin: 0 auto;\n  padding: 0px 0px 15px 15px;\n}\n\n.row {\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nmat-checkbox {\n  margin-right: 30px;\n}\n\nh4 {\n  text-align: center;\n  margin-bottom: 0px;\n}\n\nmat-label {\n  font-size: 14px;\n}\n\n.form,\n.dose {\n  width: 130px;\n}\n\n.payment,\n.amount,\n.prescription {\n  width: 200px;\n}\n\ninput {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvY3JlYXRlLWl0ZW0vQzpcXFByb2plY3RzXFxpdHJhXFxjb2xsZWN0aW9uc1xcY2xpZW50L3NyY1xcYXBwXFxpdGVtc1xcY3JlYXRlLWl0ZW1cXGNyZWF0ZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGVtcy9jcmVhdGUtaXRlbS9jcmVhdGUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7O0VBRUUsWUFBQTtBQ01GOztBREpBOzs7RUFHRSxZQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9pdGVtcy9jcmVhdGUtaXRlbS9jcmVhdGUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWZvcm0tY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMHB4IDBweCAxNXB4IDE1cHg7XHJcbn1cclxuLnJvdyB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5tYXQtY2hlY2tib3gge1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5oNCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5tYXQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uZm9ybSxcclxuLmRvc2Uge1xyXG4gIHdpZHRoOiAxMzBweDtcclxufVxyXG4ucGF5bWVudCxcclxuLmFtb3VudCxcclxuLnByZXNjcmlwdGlvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbmlucHV0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIiwiLml0ZW0tZm9ybS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwcHggMHB4IDE1cHggMTVweDtcbn1cblxuLnJvdyB7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWF0LWNoZWNrYm94IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG5oNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5tYXQtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb3JtLFxuLmRvc2Uge1xuICB3aWR0aDogMTMwcHg7XG59XG5cbi5wYXltZW50LFxuLmFtb3VudCxcbi5wcmVzY3JpcHRpb24ge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbmlucHV0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/items/create-item/create-item.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/items/create-item/create-item.component.ts ***!
    \************************************************************/

  /*! exports provided: CreateItemComponent */

  /***/
  function srcAppItemsCreateItemCreateItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateItemComponent", function () {
      return CreateItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _services_items_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/items-management.service */
    "./src/app/items/services/items-management.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let CreateItemComponent = class CreateItemComponent {
      constructor(auth, itemsManagement, route, router) {
        this.auth = auth;
        this.itemsManagement = itemsManagement;
        this.route = route;
        this.router = router;
        this.payments = [{
          value: '100%'
        }, {
          value: '50%'
        }, {
          value: '0%'
        }];
        this.medicineForms = [{
          value: 'aer.'
        }, {
          value: 'caps.'
        }, {
          value: 'crem.'
        }, {
          value: 'emuls.'
        }, {
          value: 'gel.'
        }, {
          value: 'gran.'
        }, {
          value: 'gtt.'
        }, {
          value: 'pulv.'
        }, {
          value: 'tab.'
        }, {
          value: 'sir.'
        }, {
          value: 'sol.'
        }, {
          value: 'supp.'
        }, {
          value: 'ung.'
        }];
        this.collectionId = this.route.snapshot.paramMap.get('id');
        this.currentItemId = this.route.snapshot.paramMap.get('itemId');
        this.newItem = {
          _id: '',
          payment: '',
          isDrug: false,
          isPsycho: false,
          form: '',
          name: '',
          dose: '',
          amount: '',
          prescription: '',
          authorId: this.auth.getUserDetails()._id,
          authorName: this.auth.getUserDetails().name,
          collectionId: this.collectionId,
          comments: null
        };
        this.isCreationMode = true;
      }

      ngOnInit() {
        if (this.currentItemId) {
          this.isCreationMode = false;
          this.itemsManagement.getItemById(this.currentItemId).subscribe(currentItem => this.newItem = currentItem);
        }
      }

      addItem() {
        this.itemsManagement.addItem(this.newItem).subscribe(() => this.router.navigateByUrl('/collections/' + this.collectionId));
      }

      editItem() {
        this.itemsManagement.editItem(this.newItem._id, this.newItem).subscribe(() => this.router.navigateByUrl('/collections/' + this.collectionId));
      }

    };

    CreateItemComponent.ctorParameters = () => [{
      type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _services_items_management_service__WEBPACK_IMPORTED_MODULE_3__["ItemsManagementService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    CreateItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/items/create-item/create-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-item.component.scss */
      "./src/app/items/create-item/create-item.component.scss")).default]
    })], CreateItemComponent);
    /***/
  },

  /***/
  "./src/app/items/item-with-comments/item-with-comments.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/items/item-with-comments/item-with-comments.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppItemsItemWithCommentsItemWithCommentsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: 75px;\n}\n\nmat-card {\n  width: 300px;\n  max-width: 300px;\n  color: black;\n}\n\nmat-card mat-card-subtitle {\n  color: black;\n}\n\n.comment-textarea {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\nmat-form-field {\n  background-color: gray;\n  width: 335px;\n  max-width: 340px;\n  height: 150px;\n}\n\n.send-btn {\n  position: absolute;\n  right: 20px;\n  bottom: -46px;\n}\n\n.comments-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 50px;\n}\n\n.comment {\n  width: 340px;\n  height: 100px;\n  border: 2px solid gray;\n  border-radius: 5px;\n  margin: 5px 0px;\n}\n\n.comment .text {\n  text-align: center;\n}\n\n.comment .author {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvaXRlbS13aXRoLWNvbW1lbnRzL0M6XFxQcm9qZWN0c1xcaXRyYVxcY29sbGVjdGlvbnNcXGNsaWVudC9zcmNcXGFwcFxcaXRlbXNcXGl0ZW0td2l0aC1jb21tZW50c1xcaXRlbS13aXRoLWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGVtcy9pdGVtLXdpdGgtY29tbWVudHMvaXRlbS13aXRoLWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUU7RUFDRSxZQUFBO0FDRUo7O0FEQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0lGOztBREZBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTUY7O0FETEU7RUFDRSxrQkFBQTtBQ09KOztBRExFO0VBQ0UsZUFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvaXRlbXMvaXRlbS13aXRoLWNvbW1lbnRzL2l0ZW0td2l0aC1jb21tZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA3NXB4O1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcblxyXG4gIG1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuLmNvbW1lbnQtdGV4dGFyZWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIHdpZHRoOiAzMzVweDtcclxuICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuLnNlbmQtYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgYm90dG9tOiAtNDZweDtcclxufVxyXG4uY29tbWVudHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5jb21tZW50IHtcclxuICB3aWR0aDogMzQwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbiAgLnRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYXV0aG9yIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCIuaXRlbS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNzVweDtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbm1hdC1jYXJkIG1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY29tbWVudC10ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgd2lkdGg6IDMzNXB4O1xuICBtYXgtd2lkdGg6IDM0MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uc2VuZC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IC00NnB4O1xufVxuXG4uY29tbWVudHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmNvbW1lbnQge1xuICB3aWR0aDogMzQwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuLmNvbW1lbnQgLnRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29tbWVudCAuYXV0aG9yIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/items/item-with-comments/item-with-comments.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/items/item-with-comments/item-with-comments.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ItemWithCommentsComponent */

  /***/
  function srcAppItemsItemWithCommentsItemWithCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemWithCommentsComponent", function () {
      return ItemWithCommentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_items_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/items-management.service */
    "./src/app/items/services/items-management.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");

    let ItemWithCommentsComponent = class ItemWithCommentsComponent {
      constructor(itemsManagement, route, auth) {
        this.itemsManagement = itemsManagement;
        this.route = route;
        this.auth = auth;
        this.itemId = this.route.snapshot.paramMap.get('itemId');
        this.comment = '';
      }

      ngOnInit() {
        this.itemsManagement.getItemById(this.itemId).subscribe(item => this.item = item);
        this.route.queryParamMap.subscribe(params => {
          if (params.get('patientName')) {
            this.patientName = params.get('patientName');
          }
        });
      }

      addComment() {
        this.item.comments.push(this.comment);
        this.itemsManagement.addComment(this.itemId, this.comment, this.auth.getUserDetails().name).subscribe(() => this.itemsManagement.getItemById(this.itemId).subscribe(item => {
          this.item = item;
          this.comment = '';
        }));
      }

    };

    ItemWithCommentsComponent.ctorParameters = () => [{
      type: _services_items_management_service__WEBPACK_IMPORTED_MODULE_2__["ItemsManagementService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }];

    ItemWithCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-with-comments',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item-with-comments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/items/item-with-comments/item-with-comments.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item-with-comments.component.scss */
      "./src/app/items/item-with-comments/item-with-comments.component.scss")).default]
    })], ItemWithCommentsComponent);
    /***/
  },

  /***/
  "./src/app/items/services/collections-management.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/items/services/collections-management.service.ts ***!
    \******************************************************************/

  /*! exports provided: CollectionsManagementService */

  /***/
  function srcAppItemsServicesCollectionsManagementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectionsManagementService", function () {
      return CollectionsManagementService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let CollectionsManagementService = class CollectionsManagementService {
      constructor(http) {
        this.http = http;
      }

      getCollections() {
        return this.http.get('/api/collections');
      }

      getUserCollections(userId) {
        return this.http.get('/api/collections/user/' + userId);
      }

      getCollectionById(collectionId) {
        return this.http.get('/api/collections/' + collectionId);
      }

      addCollection(collection) {
        return this.http.post('/api/collections', collection);
      }

      deleteCollection(collectionId) {
        return this.http.delete('/api/collections/' + collectionId);
      }

      editCollection(collectionId, collection) {
        return this.http.post('/api/collections/' + collectionId, collection);
      }

    };

    CollectionsManagementService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    CollectionsManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CollectionsManagementService);
    /***/
  },

  /***/
  "./src/app/items/services/items-management.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/items/services/items-management.service.ts ***!
    \************************************************************/

  /*! exports provided: ItemsManagementService */

  /***/
  function srcAppItemsServicesItemsManagementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsManagementService", function () {
      return ItemsManagementService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let ItemsManagementService = class ItemsManagementService {
      constructor(http) {
        this.http = http;
      }

      getItems(collectionId) {
        return this.http.get('/api/items', {
          params: {
            collectionId
          }
        });
      }

      getAllItems() {
        return this.http.get('/api/search-items');
      }

      getItemById(itemId) {
        return this.http.get('/api/items/' + itemId);
      }

      addItem(item) {
        return this.http.post('/api/items', item);
      }

      deleteItem(id) {
        return this.http.delete('/api/items/' + id);
      }

      editItem(id, item) {
        return this.http.post('/api/items/' + id, item);
      }

      addComment(id, comment, name) {
        return this.http.post('/api/items/' + id + '/comments', {
          comment,
          name
        });
      }

    };

    ItemsManagementService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    ItemsManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ItemsManagementService);
    /***/
  },

  /***/
  "./src/app/items/user-page-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/items/user-page-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: UserPageRoutingModule */

  /***/
  function srcAppItemsUserPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function () {
      return UserPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _collection_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./collection/collection.component */
    "./src/app/items/collection/collection.component.ts");
    /* harmony import */


    var _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-item/create-item.component */
    "./src/app/items/create-item/create-item.component.ts");
    /* harmony import */


    var _create_collection_create_collection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-collection/create-collection.component */
    "./src/app/items/create-collection/create-collection.component.ts");
    /* harmony import */


    var _item_with_comments_item_with_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./item-with-comments/item-with-comments.component */
    "./src/app/items/item-with-comments/item-with-comments.component.ts");

    const routes = [{
      path: 'collections/new',
      component: _create_collection_create_collection_component__WEBPACK_IMPORTED_MODULE_5__["CreateCollectionComponent"]
    }, {
      path: 'collections/edit/:id',
      component: _create_collection_create_collection_component__WEBPACK_IMPORTED_MODULE_5__["CreateCollectionComponent"]
    }, {
      path: 'collections/:id',
      component: _collection_collection_component__WEBPACK_IMPORTED_MODULE_3__["CollectionComponent"]
    }, {
      path: 'collections/:id/items/new',
      component: _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_4__["CreateItemComponent"]
    }, {
      path: 'collections/:id/items/:itemId',
      component: _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_4__["CreateItemComponent"]
    }, {
      path: 'items/:itemId/comments',
      component: _item_with_comments_item_with_comments_component__WEBPACK_IMPORTED_MODULE_6__["ItemWithCommentsComponent"]
    }];
    let UserPageRoutingModule = class UserPageRoutingModule {};
    UserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/items/user-page.component.scss":
  /*!************************************************!*\
    !*** ./src/app/items/user-page.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppItemsUserPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 50px;\n}\n\n.collections-container {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\nmat-card {\n  width: 300px;\n  max-width: 300px;\n  margin-right: 20px;\n  position: relative;\n  padding-right: 30px;\n}\n\n.delete-btn {\n  position: absolute;\n  right: 0px;\n  top: 30px;\n}\n\n.edit-btn {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvQzpcXFByb2plY3RzXFxpdHJhXFxjb2xsZWN0aW9uc1xcY2xpZW50L3NyY1xcYXBwXFxpdGVtc1xcdXNlci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pdGVtcy91c2VyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNkJBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvaXRlbXMvdXNlci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG4uY29sbGVjdGlvbnMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuLmRlbGV0ZS1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG4gIHRvcDogMzBweDtcclxufVxyXG4uZWRpdC1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG59XHJcbiIsIi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmNvbGxlY3Rpb25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5kZWxldGUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDMwcHg7XG59XG5cbi5lZGl0LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/items/user-page.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/items/user-page.component.ts ***!
    \**********************************************/

  /*! exports provided: UserPageComponent */

  /***/
  function srcAppItemsUserPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageComponent", function () {
      return UserPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");
    /* harmony import */


    var _services_collections_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/collections-management.service */
    "./src/app/items/services/collections-management.service.ts");
    /* harmony import */


    var _auth_services_users_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/services/users-management.service */
    "./src/app/auth/services/users-management.service.ts");

    let UserPageComponent = class UserPageComponent {
      constructor(auth, collManagement, usersManagement, route) {
        this.auth = auth;
        this.collManagement = collManagement;
        this.usersManagement = usersManagement;
        this.route = route;
        this.collections = [];
        this.userId = this.route.snapshot.paramMap.get('userId');
      }

      ngOnInit() {
        if (this.userId) {
          this.collManagement.getUserCollections(this.userId).subscribe(coll => this.collections = coll);
          this.usersManagement.getUserById(this.userId).subscribe(user => this.userName = user.name);
        } else {
          this.collManagement.getUserCollections(this.auth.getUserDetails()._id).subscribe(coll => this.collections = coll);
          this.userName = this.auth.getUserDetails().name;
        }
      }

      deleteCollection(id) {
        this.collManagement.deleteCollection(id).subscribe(() => {
          if (this.userId) {
            this.collManagement.getUserCollections(this.userId).subscribe(coll => this.collections = coll);
          } else {
            this.collManagement.getUserCollections(this.auth.getUserDetails()._id).subscribe(coll => this.collections = coll);
          }
        });
      }

    };

    UserPageComponent.ctorParameters = () => [{
      type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: _services_collections_management_service__WEBPACK_IMPORTED_MODULE_4__["CollectionsManagementService"]
    }, {
      type: _auth_services_users_management_service__WEBPACK_IMPORTED_MODULE_5__["UsersManagementService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/items/user-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-page.component.scss */
      "./src/app/items/user-page.component.scss")).default]
    })], UserPageComponent);
    /***/
  },

  /***/
  "./src/app/items/user-page.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/items/user-page.module.ts ***!
    \*******************************************/

  /*! exports provided: UserPageModule */

  /***/
  function srcAppItemsUserPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
      return UserPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _user_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-page-routing.module */
    "./src/app/items/user-page-routing.module.ts");
    /* harmony import */


    var _collection_collection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./collection/collection.component */
    "./src/app/items/collection/collection.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-item/create-item.component */
    "./src/app/items/create-item/create-item.component.ts");
    /* harmony import */


    var _user_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-page.component */
    "./src/app/items/user-page.component.ts");
    /* harmony import */


    var _create_collection_create_collection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./create-collection/create-collection.component */
    "./src/app/items/create-collection/create-collection.component.ts");
    /* harmony import */


    var _item_with_comments_item_with_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./item-with-comments/item-with-comments.component */
    "./src/app/items/item-with-comments/item-with-comments.component.ts");

    let UserPageModule = class UserPageModule {};
    UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_user_page_component__WEBPACK_IMPORTED_MODULE_7__["UserPageComponent"], _collection_collection_component__WEBPACK_IMPORTED_MODULE_4__["CollectionComponent"], _create_item_create_item_component__WEBPACK_IMPORTED_MODULE_6__["CreateItemComponent"], _create_collection_create_collection_component__WEBPACK_IMPORTED_MODULE_8__["CreateCollectionComponent"], _item_with_comments_item_with_comments_component__WEBPACK_IMPORTED_MODULE_9__["ItemWithCommentsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], UserPageModule);
    /***/
  },

  /***/
  "./src/app/shared/auth-interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/auth-interceptor.ts ***!
    \********************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppSharedAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/services/auth.service */
    "./src/app/auth/services/auth.service.ts");

    let AuthInterceptor = class AuthInterceptor {
      constructor(auth) {
        this.auth = auth;
      }

      intercept(req, next) {
        const authToken = this.auth.getToken();

        if (authToken) {
          const authReq = req.clone({
            headers: req.headers.set('Authorization', "Bearer ".concat(authToken))
          });
          return next.handle(authReq);
        } else {
          return next.handle(req);
        }
      }

    };

    AuthInterceptor.ctorParameters = () => [{
      type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }];

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth-interceptor */
    "./src/app/shared/auth-interceptor.ts");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");

    let SharedModule = class SharedModule {};
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
      exports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
        useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
        multi: true
      }]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Projects\itra\collections\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map