function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-navigation-navigation-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/navigation.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/navigation.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\t<ion-tab-bar slot=\"bottom\">\n\t\t<ion-tab-button tab=\"deal\">\n\t\t\t<ion-icon name=\"car-outline\"></ion-icon>\n\t\t\t<ion-label>Home</ion-label>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"ongoing\">\n\t\t\t<ion-icon name=\"logo-stackoverflow\"></ion-icon>\n\t\t\t<ion-label>On-going</ion-label>\n\t\t</ion-tab-button>\n\n\t\t<ion-tab-button tab=\"settings\">\n\t\t\t<ion-icon name=\"settings-outline\"></ion-icon>\n\t\t\t<ion-label>Menu</ion-label>\n\t\t</ion-tab-button>\n\t</ion-tab-bar>\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/pages/navigation/navigation.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/navigation/navigation.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/navigation/navigation.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/navigation/navigation.component.ts ***!
    \**********************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppPagesNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ctorParameters = function () {
      return [];
    };

    NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/navigation.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/pages/navigation/navigation.component.scss"))["default"]]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/pages/navigation/navigation.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/navigation/navigation.module.ts ***!
    \*******************************************************/

  /*! exports provided: NavigationModule */

  /***/
  function srcAppPagesNavigationNavigationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
      return NavigationModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navigation.component */
    "./src/app/pages/navigation/navigation.component.ts");
    /* harmony import */


    var _navigation_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navigation.router */
    "./src/app/pages/navigation/navigation.router.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var NavigationModule = function NavigationModule() {
      _classCallCheck(this, NavigationModule);
    };

    NavigationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _navigation_router__WEBPACK_IMPORTED_MODULE_2__["NavigationRouter"]]
    })], NavigationModule);
    /***/
  },

  /***/
  "./src/app/pages/navigation/navigation.router.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/navigation/navigation.router.ts ***!
    \*******************************************************/

  /*! exports provided: NavigationRouter */

  /***/
  function srcAppPagesNavigationNavigationRouterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationRouter", function () {
      return NavigationRouter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navigation.component */
    "./src/app/pages/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth-guard */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js");

    var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["redirectUnauthorizedTo"])(['login']);
    };

    var routes = [Object.assign({
      path: '',
      component: _navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"],
      children: [{
        path: 'deal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | deal-deal-module */
          [__webpack_require__.e("common"), __webpack_require__.e("deal-deal-module")]).then(__webpack_require__.bind(null,
          /*! ./deal/deal.module */
          "./src/app/pages/navigation/deal/deal.module.ts")).then(function (m) {
            return m.DealPageModule;
          });
        }
      }, {
        path: 'details',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | navigation-dealdetail-dealdetail-module */
          [__webpack_require__.e("default~dealdetail-dealdetail-module~navigation-dealdetail-dealdetail-module~settings-setting-module"), __webpack_require__.e("default~dealdetail-dealdetail-module~navigation-dealdetail-dealdetail-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
          /*! ../navigation/dealdetail/dealdetail.module */
          "./src/app/pages/navigation/dealdetail/dealdetail.module.ts")).then(function (m) {
            return m.DealdetailPageModule;
          });
        }
      }, {
        path: 'notifications',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | notifications-notifications-module */
          "notifications-notifications-module").then(__webpack_require__.bind(null,
          /*! ./notifications/notifications.module */
          "./src/app/pages/navigation/notifications/notifications.module.ts")).then(function (m) {
            return m.NotificationsPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | settings-setting-module */
          [__webpack_require__.e("default~dealdetail-dealdetail-module~navigation-dealdetail-dealdetail-module~settings-setting-module"), __webpack_require__.e("common"), __webpack_require__.e("settings-setting-module")]).then(__webpack_require__.bind(null,
          /*! ./settings/setting.module */
          "./src/app/pages/navigation/settings/setting.module.ts")).then(function (m) {
            return m.SettingPageModule;
          });
        }
      }, {
        path: 'ongoing',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | ongoing-ongoing-module */
          "ongoing-ongoing-module").then(__webpack_require__.bind(null,
          /*! ./ongoing/ongoing.module */
          "./src/app/pages/navigation/ongoing/ongoing.module.ts")).then(function (m) {
            return m.OngoingPageModule;
          });
        }
      }]
    }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_4__["canActivate"])(redirectUnauthorizedToLogin))];

    var NavigationRouter = function NavigationRouter() {
      _classCallCheck(this, NavigationRouter);
    };

    NavigationRouter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], NavigationRouter);
    /***/
  }
}]);
//# sourceMappingURL=pages-navigation-navigation-module-es5.js.map