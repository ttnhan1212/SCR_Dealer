(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
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


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<!-- Header/Banner section -->\n\t<ion-item>\n\t\t<div class=\"bannerimg cover-image bg-background3\">\n\t\t\t<div class=\"header-text\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"text-center text-white\">\n\t\t\t\t\t\t<h1 class=\"\">Hello! Welcome to SCRoads</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ion-item>\n\t<!-- End of Header/Banner section -->\n\n\t<!-- Login content section -->\n\t<ion-card class=\"m-5\">\n\t\t<div class=\"container customerpage\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"single-page\">\n\t\t\t\t\t<div class=\"col-lg-5 col-xl-4 col-md-6 d-block mx-auto\">\n\t\t\t\t\t\t<div class=\"wrapper wrapper2\">\n\t\t\t\t\t\t\t<form id=\"login\" class=\"card-body\" tabindex=\"500\">\n\t\t\t\t\t\t\t\t<h3>Login as:</h3>\n\t\t\t\t\t\t\t\t<div class=\"mail\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"email\"\n\t\t\t\t\t\t\t\t\t\tname=\"mail\"\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"email\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: #080e1b;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mail\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\t\t\tname=\"password\"\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"password\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: #080e1b;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ion-button expand=\"block\" color=\"tertiary\" (click)=\"login()\">\n\t\t\t\t\t\t\t\t\tPROCEED\n\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\tfill=\"clear\"\n\t\t\t\t\t\t\t\t\texpand=\"block\"\n\t\t\t\t\t\t\t\t\tclass=\"text-dark mb-0\"\n\t\t\t\t\t\t\t\t\trouterLink=\"/signup\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tWant to be a dealer? Sign UP\n\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ion-card>\n\t<!-- End of Login content section -->\n</ion-content>\n";
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

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppPagesIndexLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
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

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
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


      __webpack_exports__["default"] = ".smllogo__img {\n  height: 2.6rem;\n}\n\n.bannerimg {\n  padding: 2rem 0 2rem 0;\n  background-size: cover;\n}\n\n.container {\n  width: 100%;\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.cover-image {\n  background-size: cover !important;\n  width: 100%;\n  background-image: url('banner2.jpg');\n}\n\n.bg-background3:before {\n  background: linear-gradient(to right, rgba(141, 11, 183, 0.8), rgba(33, 63, 148, 0.8));\n}\n\n.bg-background3:before {\n  background: linear-gradient(to right, rgba(106, 17, 203, 0.8), rgba(37, 117, 252, 0.8));\n}\n\n.bg-background3 .header-text {\n  position: relative;\n  z-index: 10;\n}\n\n.single-page .wrapper.wrapper2 {\n  background: #fff;\n  width: 100%;\n  background: #fff;\n  transition: all 0.5s;\n  color: #fff;\n  overflow: hidden;\n  border-radius: 4px;\n  text-align: center;\n}\n\n.sptb {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  width: 200%;\n}\n\n.header-md::after {\n  width: 0 !important;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsY0FBQTtBQUFGOztBQUlBO0VBQ0Msc0JBQUE7RUFDQSxzQkFBQTtBQUREOztBQUlBO0VBQ0MsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBREQ7O0FBSUE7RUFDQyxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQUREOztBQUlBO0VBQ0Msc0ZBQUE7QUFERDs7QUFRQTtFQUNDLHVGQUFBO0FBTEQ7O0FBYUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7QUFWRDs7QUFhQTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBVkQ7O0FBYUE7RUFDQyxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQVZEOztBQWFBO0VBQ0MsbUJBQUE7QUFWRDs7QUFhQTtFQUNDLHdCQUFBO0VBQ0Esb0JBQUE7QUFWRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWxsb2dvIHtcblx0Jl9faW1nIHtcblx0XHRoZWlnaHQ6IDIuNnJlbTtcblx0fVxufVxuXG4uYmFubmVyaW1nIHtcblx0cGFkZGluZzogMnJlbSAwIDJyZW0gMDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNvbnRhaW5lciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuXHRwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG5cdG1hcmdpbi1yaWdodDogYXV0bztcblx0bWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5jb3Zlci1pbWFnZSB7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXJzL2Jhbm5lcjIuanBnJyk7XG59XG5cbi5iZy1iYWNrZ3JvdW5kMzpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0dG8gcmlnaHQsXG5cdFx0cmdiYSgxNDEsIDExLCAxODMsIDAuOCksXG5cdFx0cmdiYSgzMywgNjMsIDE0OCwgMC44KVxuXHQpO1xufVxuXG4uYmctYmFja2dyb3VuZDM6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIHJpZ2h0LFxuXHRcdHJnYmEoMTA2LCAxNywgMjAzLCAwLjgpLFxuXHRcdHJnYmEoMzcsIDExNywgMjUyLCAwLjgpXG5cdCk7XG5cdC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMCUpO1xufVxuXG4uYmctYmFja2dyb3VuZDMgLmhlYWRlci10ZXh0IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAxMDtcbn1cblxuLnNpbmdsZS1wYWdlIC53cmFwcGVyLndyYXBwZXIyIHtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdHRyYW5zaXRpb246IGFsbCAwLjVzO1xuXHRjb2xvcjogI2ZmZjtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcHRiIHtcblx0cGFkZGluZy10b3A6IDNyZW07XG5cdHBhZGRpbmctYm90dG9tOiAzcmVtO1xuXHR3aWR0aDogMjAwJTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuXHR3aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG5cdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4iXX0= */";
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

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(afAuth, loadingController, toast, authService) {
          _classCallCheck(this, LoginPage);

          this.afAuth = afAuth;
          this.loadingController = loadingController;
          this.toast = toast;
          this.authService = authService;
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
                        message: 'Please wait...',
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
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-login',
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