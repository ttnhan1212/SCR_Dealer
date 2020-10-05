(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-setting-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/settings/setting.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/settings/setting.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationSettingsSettingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>메뉴</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-label>{{'home_settings.edit_account_info' | translate}}</ion-label>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-button expand=\"block\" [routerLink]=\"[id]\" color=\"tertiary\"\n\t\t\t\t\t>{{'home_settings.edit_account_info' | translate}}</ion-button\n\t\t\t\t>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>{{'home_settings.notifications_setting' | translate}}</ion-label>\n\t\t\t\t\t<ion-toggle color=\"tertiary\"></ion-toggle>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>{{'home_settings.version_info' | translate}}</ion-label>\n\t\t\t\t\t<ion-badge slot=\"end\" color=\"tertiary\">v1.01</ion-badge>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-label>{{'home_settings.version_info' | translate}}</ion-label>\n\t\t\t\t<br />\n\t\t\t\t<mat-accordion class=\"mt-2 mb-2\">\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t{{'home_settings.term_conditions' | translate}}\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<br />\n\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Odio\n\t\t\t\t\t\ttempora magnam quam. Voluptate neque dignissimos eius doloremque\n\t\t\t\t\t\tvero, fuga voluptatibus laboriosam, nesciunt deserunt nostrum\n\t\t\t\t\t\tducimus. Sequi magnam esse consectetur dolorum. Dolorem voluptas,\n\t\t\t\t\t\tsequi totam accusantium quia hic molestiae inventore magnam\n\t\t\t\t\t\tdoloribus voluptates praesentium eius? Iure pariatur sapiente\n\t\t\t\t\t\tdelectus laudantium magnam consectetur. Repellat veniam atque\n\t\t\t\t\t\tincidunt officiis voluptatibus? Reprehenderit, recusandae excepturi.\n\t\t\t\t\t\tError eligendi natus iusto quod ab suscipit repudiandae mollitia\n\t\t\t\t\t\toptio eum? Dolorem illum unde voluptate minus necessitatibus, et\n\t\t\t\t\t\tfugiat eos magnam nihil enim aliquam obcaecati reiciendis\n\t\t\t\t\t\tconsequatur perspiciatis, voluptatem voluptates.\n\t\t\t\t\t</mat-expansion-panel>\n\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t{{'home_settings.privacy_policy' | translate}}\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<br />\n\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Odio\n\t\t\t\t\t\ttempora magnam quam. Voluptate neque dignissimos eius doloremque\n\t\t\t\t\t\tvero, fuga voluptatibus laboriosam, nesciunt deserunt nostrum\n\t\t\t\t\t\tducimus. Sequi magnam esse consectetur dolorum. Dolorem voluptas,\n\t\t\t\t\t\tsequi totam accusantium quia hic molestiae inventore magnam\n\t\t\t\t\t\tdoloribus voluptates praesentium eius? Iure pariatur sapiente\n\t\t\t\t\t\tdelectus laudantium magnam consectetur. Repellat veniam atque\n\t\t\t\t\t\tincidunt officiis voluptatibus? Reprehenderit, recusandae excepturi.\n\t\t\t\t\t\tError eligendi natus iusto quod ab suscipit repudiandae mollitia\n\t\t\t\t\t\toptio eum? Dolorem illum unde voluptate minus necessitatibus, et\n\t\t\t\t\t\tfugiat eos magnam nihil enim aliquam obcaecati reiciendis\n\t\t\t\t\t\tconsequatur perspiciatis, voluptatem voluptates.\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-label>{{'home_settings.contact' | translate}}</ion-label>\n\t\t\t\t<br />\n\t\t\t\t<mat-accordion class=\"mt-2 mb-2\">\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t{{'home_settings.contact_us' | translate}}\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t{{'home_settings.phone' | translate}}: 02-123-1234\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t{{'home_settings.email' | translate}}: soochulo@sochulo.com\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-label>{{'home_settings.guide' | translate}}</ion-label>\n\t\t\t\t<br />\n\t\t\t\t<mat-accordion class=\"mt-2 mb-2\">\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<br />\n\t\t\t\t\t\tLorem ipsum dolor, sit amet consectetur adipisicing elit. Rem culpa\n\t\t\t\t\t\tquis excepturi. Quisquam tenetur libero iusto beatae ipsa facere\n\t\t\t\t\t\tnulla distinctio ex praesentium! Voluptatum deserunt alias, odit\n\t\t\t\t\t\tmagni at eligendi.\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-button\n\t\t\tshape=\"round\"\n\t\t\texpand=\"block\"\n\t\t\t(click)=\"logOut()\"\n\t\t\tclass=\"mt-5\"\n\t\t\tcolor=\"tertiary\"\n\t\t>\n\t\t{{'home_settings.sign_out' | translate}}\n\t\t</ion-button>\n\t</ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/navigation/settings/setting-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/navigation/settings/setting-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: SettingPageRoutingModule */

    /***/
    function srcAppPagesNavigationSettingsSettingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function () {
        return SettingPageRoutingModule;
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


      var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./setting.page */
      "./src/app/pages/navigation/settings/setting.page.ts");

      var routes = [{
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"]
      }];

      var SettingPageRoutingModule = function SettingPageRoutingModule() {
        _classCallCheck(this, SettingPageRoutingModule);
      };

      SettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/settings/setting.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/navigation/settings/setting.module.ts ***!
      \*************************************************************/

    /*! exports provided: HttpLoaderFactory, SettingPageModule */

    /***/
    function srcAppPagesNavigationSettingsSettingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPageModule", function () {
        return SettingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _setting_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./setting-routing.module */
      "./src/app/pages/navigation/settings/setting-routing.module.ts");
      /* harmony import */


      var _setting_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./setting.page */
      "./src/app/pages/navigation/settings/setting.page.ts");
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

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
      }

      var SettingPageModule = function SettingPageModule() {
        _classCallCheck(this, SettingPageModule);
      };

      SettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_6__["SettingPageRoutingModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_7__["SettingPage"]]
      })], SettingPageModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/settings/setting.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/navigation/settings/setting.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNavigationSettingsSettingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mat-expansion-panel-header.mat-expanded,\n.mat-expansion-panel-header.mat-expanded:hover {\n  background: #e4e1df;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9zZXR0aW5ncy9zZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9zZXR0aW5ncy9zZXR0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWQsXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogICNlNGUxZGY7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/navigation/settings/setting.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/navigation/settings/setting.page.ts ***!
      \***********************************************************/

    /*! exports provided: SettingPage */

    /***/
    function srcAppPagesNavigationSettingsSettingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingPage", function () {
        return SettingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");

      var SettingPage = /*#__PURE__*/function () {
        function SettingPage(toast, router, afAuth, loadingController, translate) {
          var _this = this;

          _classCallCheck(this, SettingPage);

          this.toast = toast;
          this.router = router;
          this.afAuth = afAuth;
          this.loadingController = loadingController;
          this.panelOpenState = false;
          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this.id = user.uid;
            }
          });
          translate.addLangs(["en", "kr"]); // this language will be used as a fallback when a translation isn't found in the current language

          translate.setDefaultLang("kr"); // the lang to use, if the lang isn't available, it will use the current loader to get them

          translate.use("kr");
        }

        _createClass(SettingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logOut",
          value: function logOut() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: "Please wait...",
                        showBackdrop: true
                      });

                    case 2:
                      loading = _context.sent;
                      _context.prev = 3;
                      _context.next = 6;
                      return loading.present();

                    case 6:
                      _context.next = 8;
                      return this.afAuth.signOut();

                    case 8:
                      this.router.navigate(["login"]);
                      _context.next = 11;
                      return loading.dismiss();

                    case 11:
                      _context.next = 18;
                      break;

                    case 13:
                      _context.prev = 13;
                      _context.t0 = _context["catch"](3);
                      this.toast.showToast(_context.t0.message);
                      _context.next = 18;
                      return loading.dismiss();

                    case 18:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[3, 13]]);
            }));
          }
        }]);

        return SettingPage;
      }();

      SettingPage.ctorParameters = function () {
        return [{
          type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      };

      SettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-setting",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./setting.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/settings/setting.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./setting.page.scss */
        "./src/app/pages/navigation/settings/setting.page.scss"))["default"]]
      })], SettingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=settings-setting-module-es5.js.map