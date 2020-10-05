(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ongoing-ongoing-module"], {
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
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationOngoingOngoingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button fill=\"clear\" slot=\"end\" [routerLink]=\"['/','home','infor']\">\n\t\t\t<ion-icon name=\"information-circle-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button\n\t\t\tfill=\"clear\"\n\t\t\tslot=\"end\"\n\t\t\t[routerLink]=\"['/','home','notifications']\"\n\t\t>\n\t\t\t<ion-icon name=\"notifications-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n\t<ion-item lines=\"none\">\n\t\t<ul class=\"fa-ul\">\n\t\t\t<li>\n\t\t\t\t<i class=\"fa-li fa fa-circle wait-status\"></i\n\t\t\t\t>{{'home_ongoing.please_wait' | translate}}\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<i class=\"fa-li fa fa-circle proceed-status\"></i\n\t\t\t\t>{{'home_ongoing.proceed' | translate}}\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<i class=\"fa-li fa fa-circle ended-status\"></i\n\t\t\t\t>{{'home_ongoing.ended_trade' | translate}}\n\t\t\t</li>\n\t\t</ul>\n\t</ion-item>\n\t<ion-item\n\t\t*ngFor=\"let item of ongoing, let i = index\"\n\t\tbutton\n\t\tlines=\"none\"\n\t\t[disabled]=\"item.status === 'Cancel' ? true : false\"\n\t\t[routerLink]=\"ongoing[i].deal?.status === 5 ? ['/','home','visit',item.dealId] : (ongoing[i].deal?.status >= 7 && ongoing[i].deal?.status <= 9 ? ['/','certificationupload',item.dealId] : (ongoing[i].deal?.status >= 10 ? ['/','home','payment',item.dealId] :  [item.dealId]))\"\n\t>\n\t\t<ion-thumbnail slot=\"start\">\n\t\t\t<img src=\"../../../../assets/images/photos/car_02.png\" />\n\t\t</ion-thumbnail>\n\t\t<ion-label style=\"margin-top: 25px\">\n\t\t\t<div\n\t\t\t\tstyle=\"\n\t\t\t\t\tbackground: #bdc3c7;\n\t\t\t\t\tbackground: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);\n\t\t\t\t\tbackground: linear-gradient(to right, #2c3e50, #bdc3c7);\n\t\t\t\t\tborder-radius: 5px;\n\t\t\t\t\"\n\t\t\t\tclass=\"m-0 p-0\"\n\t\t\t\t[ngSwitch]=\"item.deal?.status\"\n\t\t\t>\n\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"1\">\n\t\t\t\t\tQuote in progress\n\t\t\t\t</p>\n\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"2\">\n\t\t\t\t\tWaiting for seller to select\n\t\t\t\t</p>\n\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"3\">\n\t\t\t\t\t<span *ngIf=\"item.selectedId && id === item.selectedId\"\n\t\t\t\t\t\t>Confirm the auction</span\n\t\t\t\t\t>\n\t\t\t\t\t<span *ngIf=\"item.selectedId && id !== item.selectedId\"\n\t\t\t\t\t\t>Other dealer selected</span\n\t\t\t\t\t>\n\t\t\t\t</p>\n\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"4\">\n\t\t\t\t\t<span *ngIf=\"item.selectedId && id === item.selectedId\"\n\t\t\t\t\t\t>Cancel the auction</span\n\t\t\t\t\t>\n\n\t\t\t\t\t<span *ngIf=\"item.selectedId && id !== item.selectedId\"\n\t\t\t\t\t\t>Other dealer selected</span\n\t\t\t\t\t>\n\t\t\t\t</p>\n\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"5\">\n\t\t\t\t\t<span *ngIf=\"item.selectedId && id === item.selectedId\"\n\t\t\t\t\t\t>Please write visit result\n\t\t\t\t\t</span>\n\t\t\t\t\t<span *ngIf=\"item.selectedId && id !== item.selectedId\"\n\t\t\t\t\t\t>Other dealer selected</span\n\t\t\t\t\t>\n\t\t\t\t</p>\n\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"6\">\n\t\t\t\t\tCancel the purchase\n\t\t\t\t</p>\n\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"7\">\n\t\t\t\t\tWaiting for Seller Review\n\t\t\t\t</p>\n\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"8\">\n\t\t\t\t\tWaiting for Seller Review\n\t\t\t\t</p>\n\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"9\">\n\t\t\t\t\tPlease upload the certification\n\t\t\t\t</p>\n\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"10\">\n\t\t\t\t\tPlease complete the payment\n\t\t\t\t</p>\n\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"11\">\n\t\t\t\t\tTrade complete\n\t\t\t\t</p>\n\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchDefault=\"\">N/A</p>\n\t\t\t</div>\n\t\t\t<div class=\"first\">\n\t\t\t\t<p>\n\t\t\t\t\t2009\n\t\t\t\t\t<span class=\"pull-right\"\n\t\t\t\t\t\t>K-5<span style=\"font-size: 10px\">12가1234</span></span\n\t\t\t\t\t>\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t{{item.deal?.miles | number}} Km\n\t\t\t\t\t<span class=\"pull-right\">￦{{item.price | number}}</span>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</ion-label>\n\t</ion-item>\n</ion-content>\n";
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
    "./src/app/pages/navigation/ongoing/ongoing-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: OngoingPageRoutingModule */

    /***/
    function srcAppPagesNavigationOngoingOngoingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OngoingPageRoutingModule", function () {
        return OngoingPageRoutingModule;
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


      var _ongoing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ongoing.page */
      "./src/app/pages/navigation/ongoing/ongoing.page.ts");

      var routes = [{
        path: '',
        component: _ongoing_page__WEBPACK_IMPORTED_MODULE_3__["OngoingPage"]
      }, {
        path: 'cancel',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cancel-cancel-module */
          "cancel-cancel-module").then(__webpack_require__.bind(null,
          /*! ./cancel/cancel.module */
          "./src/app/pages/navigation/ongoing/cancel/cancel.module.ts")).then(function (m) {
            return m.CancelPageModule;
          });
        }
      }];

      var OngoingPageRoutingModule = function OngoingPageRoutingModule() {
        _classCallCheck(this, OngoingPageRoutingModule);
      };

      OngoingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OngoingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing.module.ts ***!
      \************************************************************/

    /*! exports provided: HttpLoaderFactory, OngoingPageModule */

    /***/
    function srcAppPagesNavigationOngoingOngoingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OngoingPageModule", function () {
        return OngoingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../components/components.module */
      "./src/app/components/components.module.ts");
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


      var _ongoing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ongoing-routing.module */
      "./src/app/pages/navigation/ongoing/ongoing-routing.module.ts");
      /* harmony import */


      var _ongoing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ongoing.page */
      "./src/app/pages/navigation/ongoing/ongoing.page.ts");
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

      var OngoingPageModule = function OngoingPageModule() {
        _classCallCheck(this, OngoingPageModule);
      };

      OngoingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ongoing_routing_module__WEBPACK_IMPORTED_MODULE_6__["OngoingPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
        declarations: [_ongoing_page__WEBPACK_IMPORTED_MODULE_7__["OngoingPage"]]
      })], OngoingPageModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNavigationOngoingOngoingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  align-self: flex-start;\n  width: 100%;\n}\n\n.item ion-thumbnail {\n  min-width: 5rem;\n  min-height: 5rem;\n}\n\n.item ion-thumbnail img {\n  max-width: 5rem;\n  min-width: 5rem;\n}\n\n.pull-right {\n  float: right;\n}\n\n.wait-status {\n  color: #ffc107;\n}\n\n.proceed-status {\n  color: #28a745;\n}\n\n.ended-status {\n  color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9vbmdvaW5nL29uZ29pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFFSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQVI7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uYXZpZ2F0aW9uL29uZ29pbmcvb25nb2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZy1yaWdodDogOHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5pdGVtIGlvbi10aHVtYm5haWwge1xuICAgIG1pbi13aWR0aDogNXJlbTsgICAgXG4gICAgbWluLWhlaWdodDogNXJlbTtcbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDVyZW07ICAgIFxuICAgICAgICBtaW4td2lkdGg6IDVyZW07XG4gICAgfVxufVxuXG4ucHVsbC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ud2FpdC1zdGF0dXMge1xuICAgIGNvbG9yOiNmZmMxMDc7XG59XG5cbi5wcm9jZWVkLXN0YXR1cyB7XG4gICAgY29sb3I6IzI4YTc0NTtcbn1cblxuLmVuZGVkLXN0YXR1cyB7XG4gICAgY29sb3I6IzZjNzU3ZDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing.page.ts ***!
      \**********************************************************/

    /*! exports provided: OngoingPage */

    /***/
    function srcAppPagesNavigationOngoingOngoingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OngoingPage", function () {
        return OngoingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/deals.service */
      "./src/app/services/deals.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var OngoingPage = /*#__PURE__*/function () {
        function OngoingPage(dealService, afAuth, loadingController, translate) {
          _classCallCheck(this, OngoingPage);

          this.dealService = dealService;
          this.afAuth = afAuth;
          this.loadingController = loadingController;
          this.logo = '../../../assets/images/logo/scroadslight.svg';
          translate.addLangs(['en', 'kr']); // this language will be used as a fallback when a translation isn't found in the current language

          translate.setDefaultLang('kr'); // the lang to use, if the lang isn't available, it will use the current loader to get them

          translate.use('kr');
        }

        _createClass(OngoingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser();
          }
        }, {
          key: "currentUser",
          value: function currentUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        showBackdrop: true
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return this.afAuth.authState.subscribe(function (authState) {
                        if (authState) {
                          loading.present();
                          _this.id = authState.uid;

                          _this.getOngoingDeal(authState.uid);

                          loading.dismiss();
                        }
                      });

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getOngoingDeal",
          value: function getOngoingDeal(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.dealService.getOngoingDeal(id).subscribe(function (val) {
                        _this2.ongoing = val.map(function (e) {
                          return Object.assign({}, e.payload.doc.data());
                        });

                        _this2.ongoing.forEach(function (val) {
                          _this2.dealService.getDealDetail(val.dealId).subscribe(function (m) {
                            val.deal = Object.assign({}, m.payload.data());
                          });

                          _this2.dealService.getSelectedParticipant(val.dealId).subscribe(function (v) {
                            if (v) {
                              v.map(function (b) {
                                val.selectedId = b.payload.doc.data()['userId'];
                              });
                            }
                          });
                        });

                        console.log(_this2.id);
                        console.log(_this2.ongoing);
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return OngoingPage;
      }();

      OngoingPage.ctorParameters = function () {
        return [{
          type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_3__["DealsService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      OngoingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-ongoing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./ongoing.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./ongoing.page.scss */
        "./src/app/pages/navigation/ongoing/ongoing.page.scss"))["default"]]
      })], OngoingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ongoing-ongoing-module-es5.js.map