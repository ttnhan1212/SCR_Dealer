(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deal-deal-module"], {
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


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button fill=\"clear\" slot=\"end\" [routerLink]=\"['/','home','infor']\">\n\t\t\t<ion-icon name=\"information-circle-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button\n\t\t\tfill=\"clear\"\n\t\t\tslot=\"end\"\n\t\t\t[routerLink]=\"['/','home','notifications']\"\n\t\t>\n\t\t\t<ion-icon name=\"notifications-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card>\n\t\t<ion-grid class=\"cover-image sptb-1 bg-background\">\n\t\t\t<div class=\"header-text1 mb-0\">\n\t\t\t\t<ion-grid class=\"container\">\n\t\t\t\t\t<ion-row class=\"row\">\n\t\t\t\t\t\t<ion-col class=\"col-xl-10 col-lg-12 col-md-12 d-block mx-auto\">\n\t\t\t\t\t\t\t<div class=\"text-center text-white\"></div>\n\t\t\t\t\t\t\t<div class=\"search-background bg-transparent mt-5\">\n\t\t\t\t\t\t\t\t<div class=\"form row no-gutters\">\n\t\t\t\t\t\t\t\t\t<ion-col class=\"form-group mb-0 bg-white\">\n\t\t\t\t\t\t\t\t\t\t<ion-select\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Location Select\"\n\t\t\t\t\t\t\t\t\t\t\tinterface=\"action-sheet\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"deal-select\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let item of locations\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"item.id\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t{{item.city}}\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form row no-gutters\">\n\t\t\t\t\t\t\t\t\t<ion-col class=\"form-group mb-0 bg-white\">\n\t\t\t\t\t\t\t\t\t\t<ion-select\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Model Select\"\n\t\t\t\t\t\t\t\t\t\t\tinterface=\"action-sheet\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"deal-select\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option\n\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let model of models\"\n\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"model.id\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t{{model.name}}\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form row no-gutters\">\n\t\t\t\t\t\t\t\t\t<ion-col class=\"form-group mb-0 bg-white\">\n\t\t\t\t\t\t\t\t\t\t<ion-select\n\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Order By\"\n\t\t\t\t\t\t\t\t\t\t\tinterface=\"action-sheet\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"deal-select\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t\tDate\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t<ion-select-option>\n\t\t\t\t\t\t\t\t\t\t\t\tLocation\n\t\t\t\t\t\t\t\t\t\t\t</ion-select-option>\n\t\t\t\t\t\t\t\t\t\t</ion-select>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<ion-col class=\"col-xl-2 col-lg-3 col-md-12 mb-0\">\n\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\t[routerLink]=\"['details']\"\n\t\t\t\t\t\t\t\t\t\tclass=\"btn btn-lg btn-block btn-primary br-tl-md-0 br-bl-md-0 right-0\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\tSearch Here\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</ion-grid>\n\t\t\t</div>\n\t\t</ion-grid>\n\t</ion-card>\n\n\t<ion-item>\n\t\t<!--listing-->\n\t\t<ion-grid class=\"container\">\n\t\t\t<ion-row class=\"row\">\n\t\t\t\t<ion-col class=\"col-xl-9 col-lg-9 col-md-12\">\n\t\t\t\t\t<!--Lists-->\n\t\t\t\t\t<div class=\"mb-0\" *ngFor=\"let item of deals;\">\n\t\t\t\t\t\t<div class=\"item2-gl\" *ngIf=\"item.participants?.created === true\">\n\t\t\t\t\t\t\t<!-- <div class=\"mb-0\">\n\t\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t\t<div class=\"bg-white p-5 item2-gl-nav d-flex\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-sm-flex\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"mr-2 mt-2 mb-sm-1\">Sort By:</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"selectgroup\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"selectgroup-item mb-md-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"radio\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"value\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"Price\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"selectgroup-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tchecked=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"selectgroup-button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t>Price <i class=\"fa fa-sort ml-1\"></i\n\t\t\t\t\t\t\t\t\t\t\t\t\t></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"selectgroup-item mb-md-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"radio\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"value\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"Popularity\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"selectgroup-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"selectgroup-button\">Popularity</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"selectgroup-item mb-md-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"radio\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"value\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"Latest\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"selectgroup-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"selectgroup-button\">Latest</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"selectgroup-item mb-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"radio\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"value\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"Rating\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"selectgroup-input\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"selectgroup-button\">Rating</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t<div class=\"ion-padding\">\n\t\t\t\t\t\t\t\t<div class=\"card overflow-hidden\">\n\t\t\t\t\t\t\t\t\t<div class=\"d-md-flex\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"item-card9-img\">\n\t\t\t\t\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\t\t\t\t\tid=\"carouselExampleSlidesOnly\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"carousel car-slide item-card9-imgs\"\n\t\t\t\t\t\t\t\t\t\t\t\tdata-ride=\"carousel\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"carousel-item active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/cars/pagani_huayra_speedcam-wallpaper-1920x1080.jpg\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"cover-image\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"item-overly-trans\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span><a class=\"bg-success\">New</a></span>\n\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"card border-0 mb-0\" [routerLink]=\"[item.id]\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item-card9\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\treadonly=\"readonly\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"rating-value star\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"rating-stars-value\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"3\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a class=\"text-dark\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"font-weight-semibold mt-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tTarragon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item-card9-desc\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"mr-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.location}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"mr-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar-o text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 days ago\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"card-footer pr-4 pl-4 pt-4 pb-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item-card9-footer d-sm-flex\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"item-card9-cost\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"text-dark font-weight-bold mr-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tModel, Year\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"mr-2\" title=\"Name\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tname=\"person-outline\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"mr-1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.name}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"mr-2\" title=\"Kilometers\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-road text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{item.miles}} Km\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a title=\"Fuel Type\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"fa fa-tachometer text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHybrid\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!--/Lists-->\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t\t<!--/Listing-->\n\t</ion-item>\n</ion-content>\n";
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

    /*! exports provided: DealPageModule */

    /***/
    function srcAppPagesNavigationDealDealModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealPageModule", function () {
        return DealPageModule;
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


      var _deal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./deal-routing.module */
      "./src/app/pages/navigation/deal/deal-routing.module.ts");
      /* harmony import */


      var _deal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./deal.page */
      "./src/app/pages/navigation/deal/deal.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var DealPageModule = function DealPageModule() {
        _classCallCheck(this, DealPageModule);
      };

      DealPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _deal_routing_module__WEBPACK_IMPORTED_MODULE_5__["DealPageRoutingModule"]],
        declarations: [_deal_page__WEBPACK_IMPORTED_MODULE_6__["DealPage"]]
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


      __webpack_exports__["default"] = ".horizontal-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  height: 4rem;\n  text-align: center;\n  transition: all 0.25s ease-in-out;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);\n  background-color: #f1f5fd;\n}\n\n.deal-select {\n  min-width: 22rem;\n}\n\n.cover-image {\n  background-size: cover !important;\n  width: 100%;\n  background-image: url('banner1.jpg');\n}\n\n.bg-background .header-text1 {\n  position: relative;\n  z-index: 10;\n}\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.location-gps {\n  cursor: pointer;\n  height: 20px;\n  line-height: 33px;\n  position: absolute;\n  right: 12px;\n  text-align: right;\n  top: 14.5px;\n  background: #fff;\n  width: 15px;\n  color: #080e1b;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\n.bg-background:before {\n  background: linear-gradient(to right, rgba(106, 17, 203, 0.8), rgba(37, 117, 252, 0.8));\n}\n\n.bg-background:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  display: block;\n  z-index: 1;\n  top: 0;\n}\n\n.h1,\nh1 {\n  font-size: 1.5rem;\n  font-weight: 400;\n  font-family: \"Poppins\", sans-serif;\n}\n\nselect.form-control:not([size]):not([multiple]) {\n  height: 3.4rem;\n}\n\n.cover-image {\n  background-size: cover !important;\n  width: 100%;\n  background-image: url('banner2.jpg');\n}\n\n.form .btn {\n  position: relative;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #e72a1a;\n  border-color: #e72a1a;\n}\n\n.right-0 {\n  right: 0 !important;\n}\n\n.btn-group-lg > .btn,\n.btn-lg {\n  font-size: 1.09rem;\n  min-width: 2.75rem;\n  font-weight: 400;\n}\n\n.btn {\n  cursor: pointer;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  font-size: 0.8125rem;\n  min-width: 2.375rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-group-lg > .btn,\n.btn-lg {\n  padding: 0.5rem 1rem;\n  font-size: 1.125rem;\n  line-height: 1.625;\n  border-radius: 3px;\n}\n\n.selectgroup-input:checked + .selectgroup-button {\n  border-color: #e72a1a;\n  z-index: 1;\n  color: #e72a1a;\n  background: #f6f7fb;\n}\n\n.item-overly-trans .rating-stars .rating-stars-container .rating-star.sm {\n  color: #f1c40f !important;\n}\n\n.card {\n  margin-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9kZWFsL2RlYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFFQSxrQkFBQTtFQUtBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSx5QkFBQTtBQUREOztBQUlBO0VBQ0MsZ0JBQUE7QUFERDs7QUFJQTtFQUNDLGlDQUFBO0VBQ0EsV0FBQTtFQUVBLG9DQUFBO0FBRkQ7O0FBS0E7RUFDQyxrQkFBQTtFQUNBLFdBQUE7QUFGRDs7QUFLQTtFQUNDLHFCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUZEOztBQUtBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFGRDs7QUFLQTtFQUNDLHdCQUFBO0VBQ0Esb0JBQUE7QUFGRDs7QUFLQTtFQUNDLHVGQUFBO0FBRkQ7O0FBU0E7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0FBTkQ7O0FBU0E7O0VBRUMsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBTkQ7O0FBU0E7RUFDQyxjQUFBO0FBTkQ7O0FBU0E7RUFDQyxpQ0FBQTtFQUNBLFdBQUE7RUFFQSxvQ0FBQTtBQVBEOztBQVVBO0VBQ0Msa0JBQUE7QUFQRDs7QUFVQTtFQUNDLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBUEQ7O0FBVUE7RUFDQyxtQkFBQTtBQVBEOztBQVVBOztFQUVDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVBEOztBQVVBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBUEQ7O0FBVUE7RUFDQyxjQUFBO0VBQ0EsV0FBQTtBQVBEOztBQVVBOztFQUVDLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUEQ7O0FBVUE7RUFDQyxxQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFQRDs7QUFVQTtFQUNDLHlCQUFBO0FBUEQ7O0FBVUE7RUFDQywyQkFBQTtBQVBEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9kZWFsL2RlYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvcml6b250YWwtaGVhZGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxuXHRoZWlnaHQ6IDRyZW07XG5cdC8vYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcblx0LW1vei10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG5cdC1vLXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcblx0LW1zLXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcblx0dHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuXHRib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjVmZDtcbn1cblxuLmRlYWwtc2VsZWN0IHtcblx0bWluLXdpZHRoOiAyMnJlbTtcbn1cblxuLmNvdmVyLWltYWdlIHtcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuXHR3aWR0aDogMTAwJTtcblx0Ly8gcG9zaXRpb246IHJlbGF0aXZlO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVycy9iYW5uZXIxLmpwZycpO1xufVxuXG4uYmctYmFja2dyb3VuZCAuaGVhZGVyLXRleHQxIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAxMDtcbn1cblxuLmZhIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG5cdGZvbnQtc2l6ZTogaW5oZXJpdDtcblx0dGV4dC1yZW5kZXJpbmc6IGF1dG87XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4ubG9jYXRpb24tZ3BzIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRoZWlnaHQ6IDIwcHg7XG5cdGxpbmUtaGVpZ2h0OiAzM3B4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAxMnB4O1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0dG9wOiAxNC41cHg7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdHdpZHRoOiAxNXB4O1xuXHRjb2xvcjogIzA4MGUxYjtcbn1cblxuaW9uLWl0ZW0ge1xuXHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4uYmctYmFja2dyb3VuZDpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0dG8gcmlnaHQsXG5cdFx0cmdiYSgxMDYsIDE3LCAyMDMsIDAuOCksXG5cdFx0cmdiYSgzNywgMTE3LCAyNTIsIDAuOClcblx0KTtcbn1cblxuLmJnLWJhY2tncm91bmQ6YmVmb3JlIHtcblx0Y29udGVudDogJyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR6LWluZGV4OiAxO1xuXHR0b3A6IDA7XG59XG5cbi5oMSxcbmgxIHtcblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG59XG5cbnNlbGVjdC5mb3JtLWNvbnRyb2w6bm90KFtzaXplXSk6bm90KFttdWx0aXBsZV0pIHtcblx0aGVpZ2h0OiAzLjRyZW07XG59XG5cbi5jb3Zlci1pbWFnZSB7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcblx0d2lkdGg6IDEwMCU7XG5cdC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Jhbm5lcnMvYmFubmVyMi5qcGcnKTtcbn1cblxuLmZvcm0gLmJ0biB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcblx0Y29sb3I6ICNmZmY7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlNzJhMWE7XG5cdGJvcmRlci1jb2xvcjogI2U3MmExYTtcbn1cblxuLnJpZ2h0LTAge1xuXHRyaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWdyb3VwLWxnID4gLmJ0bixcbi5idG4tbGcge1xuXHRmb250LXNpemU6IDEuMDlyZW07XG5cdG1pbi13aWR0aDogMi43NXJlbTtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmJ0biB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcblx0Zm9udC1zaXplOiAwLjgxMjVyZW07XG5cdG1pbi13aWR0aDogMi4zNzVyZW07XG59XG5cbi5idG4tYmxvY2sge1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5idG4tZ3JvdXAtbGcgPiAuYnRuLFxuLmJ0bi1sZyB7XG5cdHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuXHRmb250LXNpemU6IDEuMTI1cmVtO1xuXHRsaW5lLWhlaWdodDogMS42MjU7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnNlbGVjdGdyb3VwLWlucHV0OmNoZWNrZWQgKyAuc2VsZWN0Z3JvdXAtYnV0dG9uIHtcblx0Ym9yZGVyLWNvbG9yOiAjZTcyYTFhO1xuXHR6LWluZGV4OiAxO1xuXHRjb2xvcjogI2U3MmExYTtcblx0YmFja2dyb3VuZDogI2Y2ZjdmYjtcbn1cblxuLml0ZW0tb3Zlcmx5LXRyYW5zIC5yYXRpbmctc3RhcnMgLnJhdGluZy1zdGFycy1jb250YWluZXIgLnJhdGluZy1zdGFyLnNtIHtcblx0Y29sb3I6ICNmMWM0MGYgIWltcG9ydGFudDtcbn1cblxuLmNhcmQge1xuXHRtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
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

      var DealPage = /*#__PURE__*/function () {
        function DealPage(modelService, dealService, locationService, afAuth) {
          _classCallCheck(this, DealPage);

          this.modelService = modelService;
          this.dealService = dealService;
          this.locationService = locationService;
          this.afAuth = afAuth;
          this.models = [];
          this.authState = null;
          this.deals = [];
          this.locations = []; // this.dealerId = JSON.parse(localStorage.getItem('user')).uid;
        }

        _createClass(DealPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUser();
            this.getModel();
            this.getLocation();
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
                      return this.afAuth.authState.subscribe(function (authState) {
                        _this.authState = authState;

                        if (_this.authState) {
                          _this.dealerId = _this.authState.uid;

                          _this.getDeal();
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
          key: "getModel",
          value: function getModel() {
            var _this2 = this;

            this.modelSub = this.modelService.getModel().subscribe(function (data) {
              _this2.models = data.map(function (e) {
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
            var _this3 = this;

            this.locationSub = this.locationService.getLocation().subscribe(function (data) {
              _this3.locations = data.map(function (val) {
                return {
                  city: val.payload.doc.data()['city']
                };
              });
            });
          }
        }, {
          key: "getDeal",
          value: function getDeal() {
            var _this4 = this;

            this.dealSub = this.dealService.getDeal().subscribe(function (data) {
              _this4.deals = data.map(function (e) {
                return Object.assign({
                  id: e.payload.doc.id
                }, e.payload.doc.data());
              });
            });
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
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
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