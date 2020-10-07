(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-navigation-ongoing-ongoing-detail-ongoing-detail-module"], {
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
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.html":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationOngoingOngoingDetailOngoingDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<!-- <ion-title class=\"smllogo\">\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title> -->\n\t\t<ion-button slot=\"end\" fill=\"clear\" [routerLink]=\"['/','home','deal']\">\n\t\t\t<ion-icon name=\"log-out-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<!--/BreadCrumb-->\n\t<ion-item *ngIf=\"detail\">\n\t\t<ion-grid class=\"container\">\n\t\t\t<ion-row class=\"row\">\n\t\t\t\t<ion-col class=\"col-xl-8 col-lg-8 col-md-12\">\n\t\t\t\t\t<!--Classified Description-->\n\t\t\t\t\t<div class=\"card overflow-hidden\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"item-det mb-4\">\n\t\t\t\t\t\t\t\t<a class=\"text-dark\">\n\t\t\t\t\t\t\t\t\t<h3>Car Model, Year, {{detail.plateNum}}</h3>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t<ul class=\"d-flex mb-0\">\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-car text-muted mr-1 fs-18\"></i> Cars</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-location-pin text-muted mr-1\"></i\n\t\t\t\t\t\t\t\t\t\t\t\t>{{detail.location}}</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-calendar text-muted mr-1\"></i\n\t\t\t\t\t\t\t\t\t\t\t\t>{{detail.effectedTime}}</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-eye text-muted mr-1 fs-15\"></i> 765</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class=\"rating-stars d-flex mr-5\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"person-outline\" class=\"mr-1\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t<ion-label>{{detail.name}}</ion-label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"rating-stars d-flex\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars-container mr-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t135\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ion-slides\n\t\t\t\t\t\t\t\tclass=\"item-slides\"\n\t\t\t\t\t\t\t\tpager=\"true\"\n\t\t\t\t\t\t\t\t[options]=\"slideOpts\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<ion-img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/photos/car_01.png\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t></ion-img>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/photos/car_02.png\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/photos/car_01.png\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t</ion-slides>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<ion-button\n\t\t\t\t\t\tclass=\"mt-2 mb-5\"\n\t\t\t\t\t\texpand=\"block\"\n\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\tsize=\"medium\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{'home_ongoing_detail.see_insurance_history' | translate}}\n\t\t\t\t\t</ion-button>\n\n\t\t\t\t\t<ion-item-group class=\"mb-5\">\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t\t<i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong>{{'home_ongoing_detail.location' | translate}}</strong>\n\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t<ion-card-content>{{detail.location}}</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header\n\t\t\t\t\t\t\t\t><i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t>{{'home_ongoing_detail.mileages' | translate}}</strong\n\t\t\t\t\t\t\t\t></ion-card-header\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ion-card-content>{{detail.miles | number}} Km</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t\t<i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t>{{'home_ongoing_detail.vehicle' | translate}} 특이\n\t\t\t\t\t\t\t\t\t사항</strong\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t<ion-card-content> {{detail.other}} </ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t\t<ion-card class=\"card-body\">\n\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t<ion-row *ngIf=\"userExist\">\n\t\t\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\t\t\t\tsize=\"large\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"cancel()\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t{{'home_ongoing_detail.cancel' | translate}}\n\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\t\t\t\tsize=\"large\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"confirmSelect(participant[0].userId, participant[0].price)\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t{{'home_ongoing_detail.purchase' | translate}}\n\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row *ngIf=\"!userExist\">\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\t\t\t\tsize=\"large\"\n\t\t\t\t\t\t\t\t\t\tdisabled\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t{{'home_ongoing_detail.pending_confirm' | translate}}\n\t\t\t\t\t\t\t\t\t\t<ion-spinner class=\"ml-4\" name=\"crescent\"></ion-spinner>\n\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-item>\n</ion-content>\n";
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


      __webpack_exports__["default"] = ".smllogo {\n  height: 2.6rem;\n  width: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0VBQ0EsVUFBQTtBQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21sbG9nbyB7XG5cdGhlaWdodDogMi42cmVtO1xuXHR3aWR0aDogNDUlO1xufVxuIl19 */";
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
    "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail-routing.module.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: OngoingDetailPageRoutingModule */

    /***/
    function srcAppPagesNavigationOngoingOngoingDetailOngoingDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OngoingDetailPageRoutingModule", function () {
        return OngoingDetailPageRoutingModule;
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


      var _ongoing_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ongoing-detail.page */
      "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.ts");

      var routes = [{
        path: '',
        component: _ongoing_detail_page__WEBPACK_IMPORTED_MODULE_3__["OngoingDetailPage"]
      }];

      var OngoingDetailPageRoutingModule = function OngoingDetailPageRoutingModule() {
        _classCallCheck(this, OngoingDetailPageRoutingModule);
      };

      OngoingDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OngoingDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: HttpLoaderFactory, OngoingDetailPageModule */

    /***/
    function srcAppPagesNavigationOngoingOngoingDetailOngoingDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OngoingDetailPageModule", function () {
        return OngoingDetailPageModule;
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


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ongoing_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ongoing-detail-routing.module */
      "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail-routing.module.ts");
      /* harmony import */


      var _ongoing_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./ongoing-detail.page */
      "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http);
      }

      var OngoingDetailPageModule = function OngoingDetailPageModule() {
        _classCallCheck(this, OngoingDetailPageModule);
      };

      OngoingDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _ongoing_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__["OngoingDetailPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
          }
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
        declarations: [_ongoing_detail_page__WEBPACK_IMPORTED_MODULE_8__["OngoingDetailPage"]]
      })], OngoingDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.scss":
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNavigationOngoingOngoingDetailOngoingDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".breadcrumb-item a {\n  color: #3f80ff;\n}\n\n.page-header {\n  margin-top: 0.7rem;\n}\n\n.card-body {\n  padding: 0 !important;\n}\n\n.card-body > .item-det {\n  padding: 1.5rem;\n}\n\n.card-body > .item-slides {\n  margin-top: -1rem;\n  border-radius: 0.3rem;\n}\n\n@media only screen and (max-width: 800px) {\n  .arrow-ribbon2 {\n    font-size: 22px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .arrow-ribbon2:before {\n    left: 100%;\n    width: unset;\n    border-top: 15px solid transparent;\n    border-bottom: 15px solid transparent;\n    border-left: 15px solid #e72a1a;\n  }\n}\n\nion-item {\n  --inner-padding-end: 0.4rem;\n  --padding-start: 0.4rem;\n  --background: var(--ion-item-background,\n  \t\tvar(--ion-background-color, #f1f5fd));\n}\n\nion-content {\n  --background: #f1f5fd;\n}\n\n.mat-expansion-panel-header-title,\n.mat-expansion-panel-header-description {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9vbmdvaW5nL29uZ29pbmctZGV0YWlsL29uZ29pbmctZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxxQkFBQTtBQUNEOztBQUNDO0VBQ0MsZUFBQTtBQUNGOztBQUVDO0VBQ0MsaUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUlBO0VBQ0M7SUFDQyxlQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBREE7RUFHQTtJQUNDLFVBQUE7SUFDQSxZQUFBO0lBQ0Esa0NBQUE7SUFDQSxxQ0FBQTtJQUNBLCtCQUFBO0VBREQ7QUFDRjs7QUFLQTtFQUNDLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQTt5Q0FBQTtBQUZEOztBQU1BO0VBQ0MscUJBQUE7QUFIRDs7QUFNQTs7RUFFQyx5QkFBQTtBQUhEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9vbmdvaW5nL29uZ29pbmctZGV0YWlsL29uZ29pbmctZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iLWl0ZW0gYSB7XG5cdGNvbG9yOiAjM2Y4MGZmO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuXHRtYXJnaW4tdG9wOiAwLjdyZW07XG59XG5cbi5jYXJkLWJvZHkge1xuXHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cblx0Jj4uaXRlbS1kZXQge1xuXHRcdHBhZGRpbmc6IDEuNXJlbTtcblx0fVxuXG5cdCY+Lml0ZW0tc2xpZGVzIHtcblx0XHRtYXJnaW4tdG9wOiAtMXJlbTtcblx0XHRib3JkZXItcmFkaXVzOiAwLjNyZW07XG5cdH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuXHQuYXJyb3ctcmliYm9uMiB7XG5cdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdGhlaWdodDogMzBweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHQmOmJlZm9yZSB7XG5cdFx0XHRsZWZ0OiAxMDAlO1xuXHRcdFx0d2lkdGg6IHVuc2V0O1xuXHRcdFx0Ym9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRcdGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdFx0XHRib3JkZXItbGVmdDogMTVweCBzb2xpZCAjZTcyYTFhO1xuXHRcdH1cblx0fVxufVxuXG5pb24taXRlbSB7XG5cdC0taW5uZXItcGFkZGluZy1lbmQ6IDAuNHJlbTtcblx0LS1wYWRkaW5nLXN0YXJ0OiAwLjRyZW07XG5cdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCxcblx0XHRcdHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjFmNWZkKSk7XG59XG5cbmlvbi1jb250ZW50IHtcblx0LS1iYWNrZ3JvdW5kOiAjZjFmNWZkO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.ts ***!
      \********************************************************************************/

    /*! exports provided: OngoingDetailPage */

    /***/
    function srcAppPagesNavigationOngoingOngoingDetailOngoingDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OngoingDetailPage", function () {
        return OngoingDetailPage;
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _services_noti_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/noti.service */
      "./src/app/services/noti.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/deals.service */
      "./src/app/services/deals.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OngoingDetailPage = /*#__PURE__*/function () {
        function OngoingDetailPage(dealsService, router, route, notiService, afAuth, translate) {
          _classCallCheck(this, OngoingDetailPage);

          this.dealsService = dealsService;
          this.router = router;
          this.route = route;
          this.notiService = notiService;
          this.afAuth = afAuth;
          this.slideOpts = {
            initialSlide: 1,
            speed: 400
          };
          this.bidTime = Math.floor(new Date().getTime() / 1000.0);
          this.participant = {};
          this.detail = {};
          this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

          translate.addLangs(['en', 'kr']); // this language will be used as a fallback when a translation isn't found in the current language

          translate.setDefaultLang('kr'); // the lang to use, if the lang isn't available, it will use the current loader to get them

          translate.use('kr');
        }

        _createClass(OngoingDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUser();
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.afAuth.currentUser.then(function (user) {
                        if (user) {
                          _this.userId = user.uid;

                          _this.getDealDetail(_this.id);

                          _this.getSelectDealer(_this.id);
                        }
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getDealDetail",
          value: function getDealDetail(id) {
            var _this2 = this;

            this.dealSub = this.dealsService.getDealDetail(id).subscribe(function (val) {
              _this2.detail = Object.assign({}, val.payload.data());

              _this2.dealsService.getPlateNum(_this2.detail.vehiclesId).subscribe(function (m) {
                _this2.detail.plateNum = m.payload.data()['platenumber'];
              });
            });
          }
        }, {
          key: "getSelectDealer",
          value: function getSelectDealer(id) {
            var _this3 = this;

            this.dealsService.getSelectedDealer(id).subscribe(function (val) {
              if (val.length === 0) {
                _this3.participant = {};
                _this3.userExist = !Boolean(val);
              } else {
                _this3.participant = Object.assign({}, val);
                _this3.userExist = Boolean(val);
              }
            });
          }
        }, {
          key: "confirmSelect",
          value: function confirmSelect(user, price) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.dealsService.updateDeal(this.id, {
                        status: 5,
                        participants: [user, price]
                      });

                    case 2:
                      _context2.next = 4;
                      return this.notiService.createNoti({
                        requestId: this.id,
                        status: 5,
                        updateDate: Math.floor(new Date().getTime() / 1000.0),
                        user: this.userId
                      });

                    case 4:
                      // await this.dealsService.getParticipant(this.id).subscribe((val) => {
                      // 	val.forEach((part) => {
                      // 		this.dealsService.deleteParticipant(this.id, part.payload.doc.id);
                      // 	});
                      // });
                      // await this.dealsService.getUnselectParticipant(this.id).subscribe((m) => {
                      // 	m.forEach((val) => {
                      // 		this.dealsService.deleteParticipant(this.id, val.payload.doc.id);
                      // 	});
                      // });
                      this.router.navigate(['/', 'home', 'visit', this.id]);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.router.navigate(['/', 'home', 'ongoing', 'cancel', this.id]);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.dealSub) {
              this.dealSub.unsubscribe();
            }
          }
        }]);

        return OngoingDetailPage;
      }();

      OngoingDetailPage.ctorParameters = function () {
        return [{
          type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_5__["DealsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_noti_service__WEBPACK_IMPORTED_MODULE_3__["NotiService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      };

      OngoingDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-ongoing-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./ongoing-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./ongoing-detail.page.scss */
        "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.scss"))["default"]]
      })], OngoingDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-navigation-ongoing-ongoing-detail-ongoing-detail-module-es5.js.map