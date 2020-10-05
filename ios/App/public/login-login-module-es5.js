(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLogoLogoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-img [src]=\"logo\" class=\"smllogo p-1\"></ion-img>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsStartStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button expand=\"block\" color=\"tertiary\" (click)=\"navigateToLogin()\">\n\t시작하려면 여기를 클릭하십시오\n</ion-button>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/login/login.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/login/login.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesIndexLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<!-- Header/Banner section -->\n\t<ion-item>\n\t\t<div class=\"bannerimg cover-image bg-background3\">\n\t\t\t<div class=\"header-text\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"text-center text-white\">\n\t\t\t\t\t\t<h1 class=\"fs-25\">{{'login.welcome' | translate}}</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ion-item>\n\t<!-- End of Header/Banner section -->\n\n\t<!-- Login content section -->\n\t<ion-card class=\"m-5\">\n\t\t<ion-card-header class=\"text-center mt-3 mb-5 login_title\">\n\t\t\t<ion-title class=\"fs-30\">{{'login.login_as' | translate}}</ion-title>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t<mat-label>{{'login.email' | translate}}</mat-label>\n\t\t\t\t<input type=\"email\" matInput [(ngModel)]=\"email\" />\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t<mat-label>{{'login.password' | translate}}</mat-label>\n\t\t\t\t<input type=\"password\" matInput [(ngModel)]=\"password\" />\n\t\t\t</mat-form-field>\n\t\t\t<!-- <ion-item class=\"mail\" lines=\"none\">\n\t\t\t\t<ion-label position=\"stacked\"\n\t\t\t\t\t>{{'login.password' | translate}}</ion-label\n\t\t\t\t>\n\t\t\t\t<ion-input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tname=\"password\"\n\t\t\t\t\tplaceholder=\"{{'login.password' | translate}}\"\n\t\t\t\t\t[(ngModel)]=\"password\"\n\t\t\t\t\tstyle=\"color: #080e1b\"\n\t\t\t\t></ion-input>\n\t\t\t</ion-item> -->\n\t\t\t<ion-button expand=\"block\" color=\"tertiary\" (click)=\"login()\">\n\t\t\t\t{{'login.proceed' | translate}}\n\t\t\t</ion-button>\n\t\t\t<ion-button\n\t\t\t\tfill=\"clear\"\n\t\t\t\texpand=\"block\"\n\t\t\t\tclass=\"text-dark mb-2\"\n\t\t\t\trouterLink=\"/signup\"\n\t\t\t>\n\t\t\t\t{{'login.ask_for_signup' | translate}}\n\t\t\t</ion-button>\n\t\t</ion-card-content>\n\t</ion-card>\n\t<!-- End of Login content section -->\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./start/start.component */
      "./src/app/components/start/start.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./logo/logo.component */
      "./src/app/components/logo/logo.component.ts");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"]],
        exports: [_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/components/logo/logo.component.scss":
    /*!*****************************************************!*\
      !*** ./src/app/components/logo/logo.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLogoLogoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".smllogo {\n  width: 7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWxsb2dvIHtcblx0d2lkdGg6IDdyZW07XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/logo/logo.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/components/logo/logo.component.ts ***!
      \***************************************************/

    /*! exports provided: LogoComponent */

    /***/
    function srcAppComponentsLogoLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
        return LogoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LogoComponent = /*#__PURE__*/function () {
        function LogoComponent() {
          _classCallCheck(this, LogoComponent);

          this.logo = "assets/images/banners/scroadslight.svg";
        }

        _createClass(LogoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LogoComponent;
      }();

      LogoComponent.ctorParameters = function () {
        return [];
      };

      LogoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./logo.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./logo.component.scss */
        "./src/app/components/logo/logo.component.scss"))["default"]]
      })], LogoComponent);
      /***/
    },

    /***/
    "./src/app/components/start/start.component.scss":
    /*!*******************************************************!*\
      !*** ./src/app/components/start/start.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsStartStartComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/start/start.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/start/start.component.ts ***!
      \*****************************************************/

    /*! exports provided: StartComponent */

    /***/
    function srcAppComponentsStartStartComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
        return StartComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var StartComponent = /*#__PURE__*/function () {
        function StartComponent(router) {
          _classCallCheck(this, StartComponent);

          this.router = router;
        }

        _createClass(StartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateToLogin",
          value: function navigateToLogin() {
            this.router.navigate(['login']);
          }
        }]);

        return StartComponent;
      }();

      StartComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      StartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./start.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./start.component.scss */
        "./src/app/components/start/start.component.scss"))["default"]]
      })], StartComponent);
      /***/
    },

    /***/
    "./src/app/pages/index/login/login-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/index/login/login-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppPagesIndexLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/index/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/index/login/login.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/index/login/login.module.ts ***!
      \***************************************************/

    /*! exports provided: HttpLoaderFactory, LoginPageModule */

    /***/
    function srcAppPagesIndexLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/pages/index/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/pages/index/login/login.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
      }

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/pages/index/login/login.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/index/login/login.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesIndexLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".smllogo__img {\n  height: 2.6rem;\n}\n\n.bannerimg {\n  padding: 2rem 0 2rem 0;\n  background-size: cover;\n}\n\n.login_title {\n  line-height: normal;\n}\n\n.container {\n  width: 100%;\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.mat-form-field {\n  display: inline !important;\n}\n\n.mat-form-field input.mat-input-element {\n  line-height: normal !important;\n}\n\n.cover-image {\n  background-size: cover !important;\n  width: 100%;\n  background-image: url('banner2.jpg');\n}\n\n.bg-background3:before {\n  background: linear-gradient(to right, rgba(141, 11, 183, 0.8), rgba(33, 63, 148, 0.8));\n}\n\n.bg-background3:before {\n  background: linear-gradient(to right, rgba(106, 17, 203, 0.8), rgba(37, 117, 252, 0.8));\n}\n\n.bg-background3 .header-text {\n  position: relative;\n  z-index: 10;\n}\n\n.header-md::after {\n  width: 0 !important;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsY0FBQTtBQUFGOztBQUlBO0VBQ0Msc0JBQUE7RUFDQSxzQkFBQTtBQUREOztBQUlBO0VBQ0MsbUJBQUE7QUFERDs7QUFJQTtFQUNDLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUREOztBQUlBO0VBQ0MsMEJBQUE7QUFERDs7QUFFQztFQUNDLDhCQUFBO0FBQUY7O0FBSUE7RUFDQyxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQUREOztBQUlBO0VBQ0Msc0ZBQUE7QUFERDs7QUFRQTtFQUNDLHVGQUFBO0FBTEQ7O0FBYUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7QUFWRDs7QUF3QkE7RUFDQyxtQkFBQTtBQXJCRDs7QUF3QkE7RUFDQyx3QkFBQTtFQUNBLG9CQUFBO0FBckJEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5kZXgvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtbGxvZ28ge1xuXHQmX19pbWcge1xuXHRcdGhlaWdodDogMi42cmVtO1xuXHR9XG59XG5cbi5iYW5uZXJpbWcge1xuXHRwYWRkaW5nOiAycmVtIDAgMnJlbSAwO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubG9naW5fdGl0bGUge1xuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uY29udGFpbmVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG5cdHBhZGRpbmctbGVmdDogMC43NXJlbTtcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcblx0ZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG5cdCYgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuXHRcdGxpbmUtaGVpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcblx0fVxufVxuXG4uY292ZXItaW1hZ2Uge1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVycy9iYW5uZXIyLmpwZycpO1xufVxuXG4uYmctYmFja2dyb3VuZDM6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIHJpZ2h0LFxuXHRcdHJnYmEoMTQxLCAxMSwgMTgzLCAwLjgpLFxuXHRcdHJnYmEoMzMsIDYzLCAxNDgsIDAuOClcblx0KTtcbn1cblxuLmJnLWJhY2tncm91bmQzOmJlZm9yZSB7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byByaWdodCxcblx0XHRyZ2JhKDEwNiwgMTcsIDIwMywgMC44KSxcblx0XHRyZ2JhKDM3LCAxMTcsIDI1MiwgMC44KVxuXHQpO1xuXHQvL2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAlKTtcbn1cblxuLmJnLWJhY2tncm91bmQzIC5oZWFkZXItdGV4dCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMTA7XG59XG5cbi8vIC5zaW5nbGUtcGFnZSAud3JhcHBlci53cmFwcGVyMiB7XG4vLyBcdGJhY2tncm91bmQ6ICNmZmY7XG4vLyBcdHdpZHRoOiAxMDAlO1xuLy8gXHRiYWNrZ3JvdW5kOiAjZmZmO1xuLy8gXHR0cmFuc2l0aW9uOiBhbGwgMC41cztcbi8vIFx0Y29sb3I6ICNmZmY7XG4vLyBcdG92ZXJmbG93OiBoaWRkZW47XG4vLyBcdGJvcmRlci1yYWRpdXM6IDRweDtcbi8vIFx0dGV4dC1hbGlnbjogY2VudGVyO1xuLy8gfVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG5cdHdpZHRoOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcblx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/index/login/login.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/index/login/login.page.ts ***!
      \*************************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppPagesIndexLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(afAuth, loadingController, toast, authService, translate) {
          _classCallCheck(this, LoginPage);

          this.afAuth = afAuth;
          this.loadingController = loadingController;
          this.toast = toast;
          this.authService = authService;
          translate.addLangs(["en", "kr"]); // this language will be used as a fallback when a translation isn't found in the current language

          translate.setDefaultLang("kr"); // the lang to use, if the lang isn't available, it will use the current loader to get them

          translate.use("kr");
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var email, password, loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      email = this.email, password = this.password;
                      _context.next = 3;
                      return this.loadingController.create({
                        message: "Please wait...",
                        showBackdrop: true
                      });

                    case 3:
                      loading = _context.sent;
                      _context.prev = 4;
                      _context.next = 7;
                      return loading.present();

                    case 7:
                      _context.next = 9;
                      return this.authService.login(email, password);

                    case 9:
                      _context.next = 11;
                      return loading.dismiss();

                    case 11:
                      _context.next = 18;
                      break;

                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context["catch"](4);
                      this.toast.showToast(_context.t0.message);
                      _context.next = 18;
                      return loading.dismiss();

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[4, 13]]);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: "app-login",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/pages/index/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map