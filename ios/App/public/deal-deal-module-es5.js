(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deal-deal-module"], {
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
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/deal/deal.page.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/deal/deal.page.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationDealDealPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]='true'>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button fill=\"clear\" slot=\"end\" [routerLink]=\"['/','home','infor']\">\n\t\t\t<ion-icon name=\"information-circle-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button fill=\"clear\" slot=\"end\" [routerLink]=\"['/','home','notifications']\">\n\t\t\t<ion-icon name=\"notifications-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card>\n\t\t<ion-grid class=\"cover-image bg-background\">\n\t\t\t<div class=\"header-text1 mb-0\">\n\t\t\t\t<ion-grid class=\"container\">\n\t\t\t\t\t<ion-row class=\"row\">\n\t\t\t\t\t\t<ion-col class=\"col-xl-10 col-lg-12 col-md-12 d-block mx-auto\">\n\t\t\t\t\t\t\t<div class=\"text-center text-white\"></div>\n\t\t\t\t\t\t\t<div class=\"search-background bg-transparent mt-5\">\n\t\t\t\t\t\t\t\t<div class=\"form row no-gutters\">\n\t\t\t\t\t\t\t\t\t<ion-col class=\"form-group mb-0 bg-white\">\n\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"{{'home_deal.location_select' | translate}}\" interface=\"action-sheet\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"deal-select\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let item of locations\" [value]=\"item.id\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{item.city}}\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form row no-gutters\">\n\t\t\t\t\t\t\t\t\t<ion-col class=\"form-group mb-0 bg-white\">\n\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"{{'home_deal.model_select' | translate}}\" interface=\"action-sheet\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"deal-select\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option *ngFor=\"let model of models\" [value]=\"model.id\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{model.name}}\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form row no-gutters\">\n\t\t\t\t\t\t\t\t\t<ion-col class=\"form-group mb-0 bg-white\">\n\t\t\t\t\t\t\t\t\t\t<ion-select placeholder=\"{{'home_deal.order_by' | translate}}\" interface=\"action-sheet\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"deal-select\">\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t\t{{'home_deal.name' | translate}}\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t\t{{'home_deal.date' | translate}}\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t\t{{'home_deal.location' | translate}}\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<ion-col class=\"col-xl-2 col-lg-3 col-md-12 mb-0\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-lg btn-block btn-primary br-tl-md-0 br-bl-md-0 right-0 text-white\">\n\t\t\t\t\t\t\t\t\t\t{{'home_deal.search_here' | translate}}\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</ion-grid>\n\t\t\t</div>\n\t\t</ion-grid>\n\t</ion-card>\n\n\t<ion-item>\n\t\t<!--listing-->\n\t\t<ion-grid class=\"container\">\n\t\t\t<ion-row class=\"row\">\n\t\t\t\t<ion-col class=\"col-xl-9 col-lg-9 col-md-12\">\n\t\t\t\t\t<!--Lists-->\n\t\t\t\t\t<div class=\"mb-0\" *ngFor=\"let item of deals;\">\n\t\t\t\t\t\t<div class=\"item2-gl\" *ngIf=\"item.participants?.created === true\">\n\t\t\t\t\t\t\t<div class=\"ion-padding\">\n\t\t\t\t\t\t\t\t<div class=\"card overflow-hidden\" [routerLink]=\"[item.id]\">\n\t\t\t\t\t\t\t\t\t<div class=\"d-md-flex\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"item-card9-img\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../../../assets/images/photos/car_01.png\" alt=\"img\" class=\"cover-image\" />\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"card border-0 mb-0\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item-card9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" readonly=\"readonly\" class=\"rating-value star\" name=\"rating-stars-value\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"3\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item-card9-desc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"mr-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.location}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"mr-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar-o text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.effectedTime * 1000 | dateAgo}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer pr-4 pl-4 pt-4 pb-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item-card9-footer d-sm-flex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item-card9-cost\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"text-dark font-weight-bold mr-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tModel, Year\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"mr-2\" title=\"Name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"person-outline\" class=\"mr-1\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"mr-2\" title=\"Kilometers\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-road text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.miles | number}} Km\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a title=\"Fuel Type\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"fa fa-tachometer text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHybrid\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!--/Lists-->\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t\t<!--/Listing-->\n\t</ion-item>\n</ion-content>";
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
    "./src/app/pages/navigation/deal/deal-routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/pages/navigation/deal/deal-routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: DealPageRoutingModule */

    /***/
    function srcAppPagesNavigationDealDealRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealPageRoutingModule", function () {
        return DealPageRoutingModule;
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


      var _deal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./deal.page */
      "./src/app/pages/navigation/deal/deal.page.ts");

      var routes = [{
        path: '',
        component: _deal_page__WEBPACK_IMPORTED_MODULE_3__["DealPage"]
      }];

      var DealPageRoutingModule = function DealPageRoutingModule() {
        _classCallCheck(this, DealPageRoutingModule);
      };

      DealPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DealPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/deal/deal.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/navigation/deal/deal.module.ts ***!
      \******************************************************/

    /*! exports provided: HttpLoaderFactory, DealPageModule */

    /***/
    function srcAppPagesNavigationDealDealModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealPageModule", function () {
        return DealPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _pipes_mainPipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../pipes/mainPipe.module */
      "./src/app/pipes/mainPipe.module.ts");
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


      var _deal_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./deal-routing.module */
      "./src/app/pages/navigation/deal/deal-routing.module.ts");
      /* harmony import */


      var _deal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./deal.page */
      "./src/app/pages/navigation/deal/deal.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");
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

      var DealPageModule = function DealPageModule() {
        _classCallCheck(this, DealPageModule);
      };

      DealPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _deal_routing_module__WEBPACK_IMPORTED_MODULE_6__["DealPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
          }
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _pipes_mainPipe_module__WEBPACK_IMPORTED_MODULE_1__["MainPipe"]],
        declarations: [_deal_page__WEBPACK_IMPORTED_MODULE_7__["DealPage"]]
      })], DealPageModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/deal/deal.page.scss":
    /*!******************************************************!*\
      !*** ./src/app/pages/navigation/deal/deal.page.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNavigationDealDealPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".horizontal-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 4rem;\n  text-align: center;\n  transition: all 0.25s ease-in-out;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);\n  background-color: #f1f5fd;\n}\n\nion-title {\n  padding: 0 !important;\n}\n\n.deal-select {\n  min-width: 22rem;\n}\n\n.bg-background .header-text1 {\n  position: relative;\n  z-index: 10;\n}\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.location-gps {\n  cursor: pointer;\n  height: 20px;\n  line-height: 33px;\n  position: absolute;\n  right: 12px;\n  text-align: right;\n  top: 14.5px;\n  background: #fff;\n  width: 15px;\n  color: #080e1b;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.bg-background:before {\n  background: linear-gradient(to right, rgba(106, 17, 203, 0.8), rgba(37, 117, 252, 0.8));\n}\n\n.bg-background:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  display: block;\n  z-index: 1;\n  top: 0;\n}\n\n.h1,\nh1 {\n  font-size: 1.5rem;\n  font-weight: 400;\n  font-family: \"Poppins\", sans-serif;\n}\n\nselect.form-control:not([size]):not([multiple]) {\n  height: 3.4rem;\n}\n\n.cover-image {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  width: 100%;\n  position: relative;\n  background-image: url('31887.jpg');\n}\n\n.form .btn {\n  position: relative;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #e72a1a;\n  border-color: #e72a1a;\n}\n\n.right-0 {\n  right: 0 !important;\n}\n\n.btn-group-lg > .btn,\n.btn-lg {\n  font-size: 1.09rem;\n  min-width: 2.75rem;\n  font-weight: 400;\n}\n\n.btn {\n  cursor: pointer;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  font-size: 0.8125rem;\n  min-width: 2.375rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-group-lg > .btn,\n.btn-lg {\n  padding: 0.5rem 1rem;\n  font-size: 1.125rem;\n  line-height: 1.625;\n  border-radius: 3px;\n}\n\n.selectgroup-input:checked + .selectgroup-button {\n  border-color: #e72a1a;\n  z-index: 1;\n  color: #e72a1a;\n  background: #f6f7fb;\n}\n\n.item-overly-trans .rating-stars .rating-stars-container .rating-star.sm {\n  color: #f1c40f !important;\n}\n\n.card {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9kZWFsL2RlYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFFQSxrQkFBQTtFQUtBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSx5QkFBQTtBQUREOztBQUlBO0VBQ0MscUJBQUE7QUFERDs7QUFJQTtFQUNDLGdCQUFBO0FBREQ7O0FBSUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7QUFERDs7QUFJQTtFQUNDLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUREOztBQUlBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFERDs7QUFJQTtFQUNDLHdCQUFBO0VBQ0Esb0JBQUE7QUFERDs7QUFJQTtFQUNDLHVGQUFBO0FBREQ7O0FBUUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0FBTEQ7O0FBUUE7O0VBRUMsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBTEQ7O0FBUUE7RUFDQyxjQUFBO0FBTEQ7O0FBUUE7RUFDQywrQkFBQTtLQUFBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFMRDs7QUFRQTtFQUNDLGtCQUFBO0FBTEQ7O0FBUUE7RUFDQyxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQUxEOztBQVFBO0VBQ0MsbUJBQUE7QUFMRDs7QUFRQTs7RUFFQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMRDs7QUFRQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUxEOztBQVFBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7QUFMRDs7QUFRQTs7RUFFQyxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxEOztBQVFBO0VBQ0MscUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBTEQ7O0FBUUE7RUFDQyx5QkFBQTtBQUxEOztBQVFBO0VBQ0MsMkJBQUE7QUFMRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vZGVhbC9kZWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3Jpem9udGFsLWhlYWRlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0aGVpZ2h0OiA0cmVtO1xuXHQvL2JhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG5cdC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuXHQtby10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG5cdC1tcy10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG5cdHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcblx0Ym94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmMWY1ZmQ7XG59XG5cbmlvbi10aXRsZSB7XG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmRlYWwtc2VsZWN0IHtcblx0bWluLXdpZHRoOiAyMnJlbTtcbn1cblxuLmJnLWJhY2tncm91bmQgLmhlYWRlci10ZXh0MSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMTA7XG59XG5cbi5mYSB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Zm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xuXHRmb250LXNpemU6IGluaGVyaXQ7XG5cdHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmxvY2F0aW9uLWdwcyB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0aGVpZ2h0OiAyMHB4O1xuXHRsaW5lLWhlaWdodDogMzNweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMTJweDtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdHRvcDogMTQuNXB4O1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHR3aWR0aDogMTVweDtcblx0Y29sb3I6ICMwODBlMWI7XG59XG5cbmlvbi1pdGVtIHtcblx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuLmJnLWJhY2tncm91bmQ6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIHJpZ2h0LFxuXHRcdHJnYmEoMTA2LCAxNywgMjAzLCAwLjgpLFxuXHRcdHJnYmEoMzcsIDExNywgMjUyLCAwLjgpXG5cdCk7XG59XG5cbi5iZy1iYWNrZ3JvdW5kOmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRkaXNwbGF5OiBibG9jaztcblx0ei1pbmRleDogMTtcblx0dG9wOiAwO1xufVxuXG4uaDEsXG5oMSB7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuXG5zZWxlY3QuZm9ybS1jb250cm9sOm5vdChbc2l6ZV0pOm5vdChbbXVsdGlwbGVdKSB7XG5cdGhlaWdodDogMy40cmVtO1xufVxuXG4uY292ZXItaW1hZ2Uge1xuXHRvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xuXHR3aWR0aDogMTAwJTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcGhvdG9zLzMxODg3LmpwZycpO1xufVxuXG4uZm9ybSAuYnRuIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuLXByaW1hcnkge1xuXHRjb2xvcjogI2ZmZjtcblx0YmFja2dyb3VuZC1jb2xvcjogI2U3MmExYTtcblx0Ym9yZGVyLWNvbG9yOiAjZTcyYTFhO1xufVxuXG4ucmlnaHQtMCB7XG5cdHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZ3JvdXAtbGcgPiAuYnRuLFxuLmJ0bi1sZyB7XG5cdGZvbnQtc2l6ZTogMS4wOXJlbTtcblx0bWluLXdpZHRoOiAyLjc1cmVtO1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuXG4uYnRuIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xuXHRmb250LXNpemU6IDAuODEyNXJlbTtcblx0bWluLXdpZHRoOiAyLjM3NXJlbTtcbn1cblxuLmJ0bi1ibG9jayB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmJ0bi1ncm91cC1sZyA+IC5idG4sXG4uYnRuLWxnIHtcblx0cGFkZGluZzogMC41cmVtIDFyZW07XG5cdGZvbnQtc2l6ZTogMS4xMjVyZW07XG5cdGxpbmUtaGVpZ2h0OiAxLjYyNTtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uc2VsZWN0Z3JvdXAtaW5wdXQ6Y2hlY2tlZCArIC5zZWxlY3Rncm91cC1idXR0b24ge1xuXHRib3JkZXItY29sb3I6ICNlNzJhMWE7XG5cdHotaW5kZXg6IDE7XG5cdGNvbG9yOiAjZTcyYTFhO1xuXHRiYWNrZ3JvdW5kOiAjZjZmN2ZiO1xufVxuXG4uaXRlbS1vdmVybHktdHJhbnMgLnJhdGluZy1zdGFycyAucmF0aW5nLXN0YXJzLWNvbnRhaW5lciAucmF0aW5nLXN0YXIuc20ge1xuXHRjb2xvcjogI2YxYzQwZiAhaW1wb3J0YW50O1xufVxuXG4uY2FyZCB7XG5cdG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/navigation/deal/deal.page.ts":
    /*!****************************************************!*\
      !*** ./src/app/pages/navigation/deal/deal.page.ts ***!
      \****************************************************/

    /*! exports provided: DealPage */

    /***/
    function srcAppPagesNavigationDealDealPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealPage", function () {
        return DealPage;
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


      var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../services/location.service */
      "./src/app/services/location.service.ts");
      /* harmony import */


      var _services_deals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/deals.service */
      "./src/app/services/deals.service.ts");
      /* harmony import */


      var _services_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../../../services/model.service */
      "./src/app/services/model.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var DealPage = /*#__PURE__*/function () {
        function DealPage(modelService, dealService, locationService, loadingController, translate) {
          _classCallCheck(this, DealPage);

          this.modelService = modelService;
          this.dealService = dealService;
          this.locationService = locationService;
          this.loadingController = loadingController;
          this.models = [];
          this.authState = null;
          this.deals = [];
          this.locations = [];
          this.now = Math.floor(new Date().getTime() / 1000.0);
          translate.addLangs(['en', 'kr']); // this language will be used as a fallback when a translation isn't found in the current language

          translate.setDefaultLang('kr'); // the lang to use, if the lang isn't available, it will use the current loader to get them

          translate.use('kr');
        }

        _createClass(DealPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getModel();
            this.getLocation();
            this.getDeal();
          }
        }, {
          key: "getModel",
          value: function getModel() {
            var _this = this;

            this.modelSub = this.modelService.getModel().subscribe(function (data) {
              _this.models = data.map(function (e) {
                return Object.assign({
                  id: e.payload.doc.id
                }, e.payload.doc.data());
              });
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            var _this2 = this;

            this.locationSub = this.locationService.getLocation().subscribe(function (data) {
              _this2.locations = data.map(function (val) {
                return {
                  city: val.payload.doc.data()['city']
                };
              });
            });
          }
        }, {
          key: "getDeal",
          value: function getDeal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

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
                      return this.dealService.getDeal().subscribe(function (data) {
                        loading.present();
                        _this3.deals = data.map(function (e) {
                          return Object.assign({
                            id: e.payload.doc.id
                          }, e.payload.doc.data());
                        });
                        loading.dismiss();
                        console.log(_this3.deals);
                      });

                    case 5:
                      this.dealSub = _context.sent;

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.modelSub) {
              this.modelSub.unsubscribe();
            }
          }
        }]);

        return DealPage;
      }();

      DealPage.ctorParameters = function () {
        return [{
          type: _services_model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]
        }, {
          type: _services_deals_service__WEBPACK_IMPORTED_MODULE_3__["DealsService"]
        }, {
          type: _services_location_service__WEBPACK_IMPORTED_MODULE_2__["LocationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      DealPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-deal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./deal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/deal/deal.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./deal.page.scss */
        "./src/app/pages/navigation/deal/deal.page.scss"))["default"]]
      })], DealPage);
      /***/
    },

    /***/
    "./src/app/services/location.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/location.service.ts ***!
      \**********************************************/

    /*! exports provided: LocationService */

    /***/
    function srcAppServicesLocationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationService", function () {
        return LocationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LocationService = /*#__PURE__*/function () {
        function LocationService(firestore) {
          _classCallCheck(this, LocationService);

          this.firestore = firestore;
        }

        _createClass(LocationService, [{
          key: "getLocation",
          value: function getLocation() {
            return this.firestore.collection('locations').snapshotChanges();
          }
        }]);

        return LocationService;
      }();

      LocationService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      };

      LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], LocationService);
      /***/
    },

    /***/
    "./src/app/services/model.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/model.service.ts ***!
      \*******************************************/

    /*! exports provided: ModelService */

    /***/
    function srcAppServicesModelServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModelService", function () {
        return ModelService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

      var ModelService = /*#__PURE__*/function () {
        function ModelService(firestore) {
          _classCallCheck(this, ModelService);

          this.firestore = firestore;
        }

        _createClass(ModelService, [{
          key: "getModel",
          value: function getModel() {
            return this.firestore.collection('models').snapshotChanges();
          }
        }]);

        return ModelService;
      }();

      ModelService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      ModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ModelService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=deal-deal-module-es5.js.map