(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-navigation-ongoing-ongoing-detail-ongoing-detail-module"], {
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


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button slot=\"end\" fill=\"clear\" [routerLink]=\"['/','home','deal']\">\n\t\t\t<ion-icon name=\"log-out-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<!--BreadCrumb-->\n\t<ion-card>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"page-header\">\n\t\t\t\t<!-- <h4 class=\"page-title\">Cars</h4> -->\n\t\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t\t<li class=\"breadcrumb-item\"><a>Home</a></li>\n\t\t\t\t\t<li class=\"breadcrumb-item\">\n\t\t\t\t\t\t<a [routerLink]=\"['/','home','ongoing']\">Ongoing</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Details</li>\n\t\t\t\t</ol>\n\t\t\t</div>\n\t\t</div>\n\t</ion-card>\n\t<!--/BreadCrumb-->\n\t<ion-item>\n\t\t<ion-grid class=\"container\">\n\t\t\t<ion-row class=\"row\">\n\t\t\t\t<ion-col class=\"col-xl-8 col-lg-8 col-md-12\">\n\t\t\t\t\t<!--Classified Description-->\n\t\t\t\t\t<div class=\"card overflow-hidden\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"ribbon ribbon-top-right text-danger\"\n\t\t\t\t\t\t\t*ngIf=\"detail.dealerId\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<span class=\"bg-blue-light\">Selected</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tclass=\"ribbon ribbon-top-right text-danger\"\n\t\t\t\t\t\t\t*ngIf=\"!detail.dealerId\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<span class=\"bg-blue-light\">On-going</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"item-det mb-4\">\n\t\t\t\t\t\t\t\t<a class=\"text-dark\">\n\t\t\t\t\t\t\t\t\t<h3>Car Model, Year, Plate Number</h3>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t<ul class=\"d-flex mb-0\">\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-car text-muted mr-1 fs-18\"></i> Cars</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-location-pin text-muted mr-1\"></i\n\t\t\t\t\t\t\t\t\t\t\t\t>{{detail.location}}</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-calendar text-muted mr-1\"></i\n\t\t\t\t\t\t\t\t\t\t\t\t>{{detail.effectedTime}}</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-eye text-muted mr-1 fs-15\"></i> 765</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class=\"rating-stars d-flex mr-5\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"person-outline\" class=\"mr-1\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t<ion-label>{{detail.name}}</ion-label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"rating-stars d-flex\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars-container mr-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t135\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ion-slides\n\t\t\t\t\t\t\t\tclass=\"item-slides\"\n\t\t\t\t\t\t\t\tpager=\"true\"\n\t\t\t\t\t\t\t\t[options]=\"slideOpts\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<ion-img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/cars/2010-marussia-b2-2.jpg\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t></ion-img>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/cars/2010-marussia-b2-2.jpg\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/cars/2010-marussia-b2-2.jpg\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t</ion-slides>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\tclass=\"mt-2\"\n\t\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\tsize=\"medium\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tSee Insurance History\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<ion-item-group class=\"mb-5\">\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t\t<i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong>Location</strong>\n\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t<ion-card-content>{{detail.location}}</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header\n\t\t\t\t\t\t\t\t><i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong>Mileages</strong></ion-card-header\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ion-card-content>{{detail.miles}}</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t\t<i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong>Vehicle 특이 사항</strong>\n\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t\t출퇴근 용으로만 탔어요출퇴근 용으로만 탔어요. 출퇴근 용으로만\n\t\t\t\t\t\t\t\t탔어요\n\t\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t\t<ion-card class=\"card-body\">\n\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t<ion-row *ngIf=\"userExist\">\n\t\t\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\t\t\t\tsize=\"large\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"cancel()\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\t\t\t\tsize=\"large\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"confirmSelect(participant[0].userId, participant[0].price)\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\tPurchase\n\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row *ngIf=\"!userExist\">\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\t\t\t\tsize=\"large\"\n\t\t\t\t\t\t\t\t\t\tdisabled\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\tPending Confirm\n\t\t\t\t\t\t\t\t\t\t<ion-spinner class=\"ml-4\" name=\"crescent\"></ion-spinner>\n\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-item>\n</ion-content>\n";
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

    /*! exports provided: OngoingDetailPageModule */

    /***/
    function srcAppPagesNavigationOngoingOngoingDetailOngoingDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
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

      var OngoingDetailPageModule = function OngoingDetailPageModule() {
        _classCallCheck(this, OngoingDetailPageModule);
      };

      OngoingDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _ongoing_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__["OngoingDetailPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"]],
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


      __webpack_exports__["default"] = ".breadcrumb-item a {\n  color: #3f80ff;\n}\n\n.page-header {\n  margin-top: 0.7rem;\n}\n\n.card-body {\n  padding: 0 !important;\n}\n\n.card-body > .item-det {\n  padding: 1.5rem;\n}\n\n.card-body > .item-slides {\n  margin-top: -1rem;\n  border-radius: 0.3rem;\n}\n\n@media only screen and (max-width: 800px) {\n  .arrow-ribbon2 {\n    font-size: 22px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .arrow-ribbon2:before {\n    left: 100%;\n    width: unset;\n    border-top: 15px solid transparent;\n    border-bottom: 15px solid transparent;\n    border-left: 15px solid #e72a1a;\n  }\n}\n\nion-item {\n  --inner-padding-end: 0.4rem;\n  --padding-start: 0.4rem;\n  --background: var(\n  \t--ion-item-background,\n  \tvar(--ion-background-color, #f1f5fd)\n  );\n}\n\nion-content {\n  --background: #f1f5fd;\n}\n\n.mat-expansion-panel-header-title,\n.mat-expansion-panel-header-description {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9vbmdvaW5nL29uZ29pbmctZGV0YWlsL29uZ29pbmctZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxxQkFBQTtBQUNEOztBQUFDO0VBQ0MsZUFBQTtBQUVGOztBQUFDO0VBQ0MsaUJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUVBO0VBQ0M7SUFDQyxlQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBQ0E7RUFBQTtJQUNDLFVBQUE7SUFDQSxZQUFBO0lBQ0Esa0NBQUE7SUFDQSxxQ0FBQTtJQUNBLCtCQUFBO0VBRUQ7QUFDRjs7QUFFQTtFQUNDLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQTs7O0dBQUE7QUFHRDs7QUFHQTtFQUNDLHFCQUFBO0FBQUQ7O0FBR0E7O0VBRUMseUJBQUE7QUFBRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vb25nb2luZy9vbmdvaW5nLWRldGFpbC9vbmdvaW5nLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYi1pdGVtIGEge1xuXHRjb2xvcjogIzNmODBmZjtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcblx0bWFyZ2luLXRvcDogMC43cmVtO1xufVxuXG4uY2FyZC1ib2R5IHtcblx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHQmID4gLml0ZW0tZGV0IHtcblx0XHRwYWRkaW5nOiAxLjVyZW07XG5cdH1cblx0JiA+IC5pdGVtLXNsaWRlcyB7XG5cdFx0bWFyZ2luLXRvcDogLTFyZW07XG5cdFx0Ym9yZGVyLXJhZGl1czogMC4zcmVtO1xuXHR9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcblx0LmFycm93LXJpYmJvbjIge1xuXHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGxlZnQ6IDEwMCU7XG5cdFx0XHR3aWR0aDogdW5zZXQ7XG5cdFx0XHRib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRcdGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNlNzJhMWE7XG5cdFx0fVxuXHR9XG59XG5cbmlvbi1pdGVtIHtcblx0LS1pbm5lci1wYWRkaW5nLWVuZDogMC40cmVtO1xuXHQtLXBhZGRpbmctc3RhcnQ6IDAuNHJlbTtcblx0LS1iYWNrZ3JvdW5kOiB2YXIoXG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kLFxuXHRcdHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjFmNWZkKVxuXHQpO1xufVxuXG5pb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogI2YxZjVmZDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbiJdfQ== */";
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


      var _services_noti_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/noti.service */
      "./src/app/services/noti.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/deals.service */
      "./src/app/services/deals.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OngoingDetailPage = /*#__PURE__*/function () {
        function OngoingDetailPage(dealsService, router, route, notiService) {
          _classCallCheck(this, OngoingDetailPage);

          this.dealsService = dealsService;
          this.router = router;
          this.route = route;
          this.notiService = notiService;
          this.slideOpts = {
            initialSlide: 1,
            speed: 400
          };
          this.bidTime = Math.floor(new Date().getTime() / 1000.0);
          this.participant = {};
          this.detail = {};
          this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

          if (localStorage.getItem('user')) {
            this.userId = JSON.parse(localStorage.getItem('user')).uid;
          }
        }

        _createClass(OngoingDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dealSub = this.dealsService.getDealDetail(this.id).subscribe(function (val) {
              _this.detail = Object.assign({}, val.payload.data());
            });
            this.dealsService.getSelectedDealer(this.id, this.userId).subscribe(function (val) {
              if (val.length === 0) {
                _this.participant = {};
                _this.userExist = !Boolean(val);
              } else {
                _this.participant = Object.assign({}, val);
                _this.userExist = Boolean(val);
              }
            });
          }
        }, {
          key: "confirmSelect",
          value: function confirmSelect(user, price) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.dealsService.updateDeal(this.id, {
                        participants: [user, price]
                      });

                    case 2:
                      _context.next = 4;
                      return this.notiService.createNoti({
                        requestId: this.id,
                        status: 'Bidding',
                        updateDate: Math.floor(new Date().getTime() / 1000.0),
                        user: this.userId
                      });

                    case 4:
                      _context.next = 6;
                      return this.dealsService.getParticipant(this.id).subscribe(function (val) {
                        val.forEach(function (part) {
                          _this2.dealsService.deleteParticipant(_this2.id, part.payload.doc.id);
                        });
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
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
          type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_3__["DealsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_noti_service__WEBPACK_IMPORTED_MODULE_1__["NotiService"]
        }];
      };

      OngoingDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
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