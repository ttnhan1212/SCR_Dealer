(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*************************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicPwaElementsDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./pwa-action-sheet.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-action-sheet.entry.js", 43],
        "./pwa-camera-modal-instance.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal-instance.entry.js", 44],
        "./pwa-camera-modal.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera-modal.entry.js", 45],
        "./pwa-camera.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-camera.entry.js", 46],
        "./pwa-toast.entry.js": ["./node_modules/@ionic/pwa-elements/dist/esm/pwa-toast.entry.js", 47]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/pwa-elements/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
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


      __webpack_exports__["default"] = "<ion-app>\n\t<ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dealdetail/dealdetail.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dealdetail/dealdetail.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDealdetailDealdetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-item *ngIf=\"detail\">\n\t\t<ion-grid class=\"container\">\n\t\t\t<ion-row class=\"row\">\n\t\t\t\t<ion-col class=\"col-xl-8 col-lg-8 col-md-12\">\n\t\t\t\t\t<!--Classified Description-->\n\t\t\t\t\t<div class=\"card overflow-hidden\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"item-det mb-4\">\n\t\t\t\t\t\t\t\t<a class=\"text-dark\">\n\t\t\t\t\t\t\t\t\t<h3>Car Model, Year, {{detail.plateNum}}</h3>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t<ul class=\"d-flex mb-0\">\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-car text-muted mr-1 fs-18\"></i> Cars</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-location-pin text-muted mr-1\"></i\n\t\t\t\t\t\t\t\t\t\t\t\t>{{detail.location}}</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-calendar text-muted mr-1\"></i\n\t\t\t\t\t\t\t\t\t\t\t\t>{{detail.effectedTime}}</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-eye text-muted mr-1 fs-15\"></i> 765</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class=\"rating-stars d-flex mr-5\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"person-outline\" class=\"mr-1\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t<ion-label>{{detail.name}}</ion-label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ion-slides class=\"item-slides\" pager=\"true\" [options]=\"slideOpts\">\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<ion-img src=\"../../../assets/images/photos/car_01.png\" alt=\"img\"></ion-img>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<img src=\"../../../assets/images/photos/car_02.png\" alt=\"img\" />\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<img src=\"../../../assets/images/photos/car_01.png\" alt=\"img\" />\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t</ion-slides>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<ion-button class=\"mt-2 mb-5\" expand=\"block\" color=\"tertiary\" size=\"medium\">\n\t\t\t\t\t\t{{'home_deal_detail.see_insurance_history' | translate}}\n\t\t\t\t\t</ion-button>\n\n\t\t\t\t\t<ion-item-group class=\"mb-5\">\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t\t<i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong>{{'home_deal_detail.location' | translate}}</strong>\n\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t<ion-card-content>{{detail.location}}</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header><i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong>{{'home_deal_detail.mileages' | translate}}</strong></ion-card-header>\n\t\t\t\t\t\t\t<ion-card-content>{{detail.miles | number}} Km</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t\t<i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong>{{'home_deal_detail.vehicle' | translate}} 특이 사항</strong>\n\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t<ion-card-content> {{detail.other}} </ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t\t<ion-card class=\"card-body\">\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t<div [hidden]=\"!participant\">\n\t\t\t\t\t\t\t\t<ion-button expand=\"full\" color=\"tertiary\" size=\"large\" shape=\"round\"\n\t\t\t\t\t\t\t\t\t[routerLink]=\"['/','home','ongoing', id]\">\n\t\t\t\t\t\t\t\t\t{{'home_deal_detail.ongoing_phase' | translate}}\n\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div [hidden]=\"participant\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control text-center\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{'home_deal_detail.input_bidding_price' | translate}}\" [(ngModel)]=\"price\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ion-button expand=\"full\" color=\"tertiary\" size=\"large\" shape=\"round\" (click)=\"addDealerToDeal()\">\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"wallet\"></ion-icon>\n\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-item>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/errors.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/errors.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesErrorsErrorsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>404 Not Found</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-button\n\t\t(click)=\"navigateHome()\"\n\t\texpand=\"block\"\n\t\tfill=\"clear\"\n\t\tshape=\"round\"\n\t>\n\t\tGo to Homepage\n\t</ion-button>\n</ion-content>\n";
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


      var _pages_dealdetail_dealdetail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/dealdetail/dealdetail.page */
      "./src/app/pages/dealdetail/dealdetail.page.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _pages_errors_errors_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/errors/errors.page */
      "./src/app/pages/errors/errors.page.ts");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-index-index-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-index-index-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/index/index.module */
          "./src/app/pages/index/index.module.ts")).then(function (m) {
            return m.IndexPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-navigation-navigation-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-navigation-navigation-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/navigation/navigation.module */
          "./src/app/pages/navigation/navigation.module.ts")).then(function (m) {
            return m.NavigationPageModule;
          });
        }
      }, {
        path: 'home/deal/:id',
        component: _pages_dealdetail_dealdetail_page__WEBPACK_IMPORTED_MODULE_1__["DealdetailPage"],
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-dealdetail-dealdetail-module */
          [__webpack_require__.e("default~infor-infor-module~login-login-module~pages-dealdetail-dealdetail-module~pages-navigation-on~4f8d46a7"), __webpack_require__.e("default~infor-infor-module~pages-dealdetail-dealdetail-module~pages-navigation-ongoing-ongoing-detai~a398aa76"), __webpack_require__.e("pages-dealdetail-dealdetail-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/dealdetail/dealdetail.module */
          "./src/app/pages/dealdetail/dealdetail.module.ts")).then(function (m) {
            return m.DealdetailPageModule;
          });
        }
      }, {
        path: 'home/ongoing/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-navigation-ongoing-ongoing-detail-ongoing-detail-module */
          [__webpack_require__.e("default~infor-infor-module~login-login-module~pages-dealdetail-dealdetail-module~pages-navigation-on~4f8d46a7"), __webpack_require__.e("default~infor-infor-module~pages-dealdetail-dealdetail-module~pages-navigation-ongoing-ongoing-detai~a398aa76"), __webpack_require__.e("pages-navigation-ongoing-ongoing-detail-ongoing-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/navigation/ongoing/ongoing-detail/ongoing-detail.module */
          "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.module.ts")).then(function (m) {
            return m.OngoingDetailPageModule;
          });
        }
      }, {
        path: 'home/ongoing/cancel/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-navigation-ongoing-cancel-cancel-module */
          "cancel-cancel-module").then(__webpack_require__.bind(null,
          /*! ./pages/navigation/ongoing/cancel/cancel.module */
          "./src/app/pages/navigation/ongoing/cancel/cancel.module.ts")).then(function (m) {
            return m.CancelPageModule;
          });
        }
      }, {
        path: 'home/settings/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-navigation-settings-user-detail-user-detail-module */
          [__webpack_require__.e("default~infor-infor-module~login-login-module~pages-dealdetail-dealdetail-module~pages-navigation-on~4f8d46a7"), __webpack_require__.e("default~login-login-module~pages-navigation-settings-user-detail-user-detail-module~pages-visit-paym~a04f54a6"), __webpack_require__.e("common"), __webpack_require__.e("pages-navigation-settings-user-detail-user-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/navigation/settings/user-detail/user-detail.module */
          "./src/app/pages/navigation/settings/user-detail/user-detail.module.ts")).then(function (m) {
            return m.UserDetailPageModule;
          });
        }
      }, {
        path: 'home/visit/result/revisit/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-visit-revisit-revisit-module */
          [__webpack_require__.e("default~pages-visit-paymentcancel-paymentcancel-module~pages-visit-paymentcomplete-certificationuplo~d850730b"), __webpack_require__.e("common"), __webpack_require__.e("pages-visit-revisit-revisit-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/visit/revisit/revisit.module */
          "./src/app/pages/visit/revisit/revisit.module.ts")).then(function (m) {
            return m.RevisitPageModule;
          });
        }
      }, {
        path: 'home/visit/result/paymentcomplete/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-visit-paymentcomplete-paymentcomplete-module */
          [__webpack_require__.e("default~infor-infor-module~login-login-module~pages-dealdetail-dealdetail-module~pages-navigation-on~4f8d46a7"), __webpack_require__.e("default~login-login-module~pages-navigation-settings-user-detail-user-detail-module~pages-visit-paym~a04f54a6"), __webpack_require__.e("default~pages-visit-paymentcancel-paymentcancel-module~pages-visit-paymentcomplete-certificationuplo~d850730b"), __webpack_require__.e("common"), __webpack_require__.e("pages-visit-paymentcomplete-paymentcomplete-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/visit/paymentcomplete/paymentcomplete.module */
          "./src/app/pages/visit/paymentcomplete/paymentcomplete.module.ts")).then(function (m) {
            return m.PaymentcompletePageModule;
          });
        }
      }, {
        path: 'certificationupload/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-visit-paymentcomplete-certificationupload-certificationupload-module */
          [__webpack_require__.e("default~pages-visit-paymentcancel-paymentcancel-module~pages-visit-paymentcomplete-certificationuplo~d850730b"), __webpack_require__.e("pages-visit-paymentcomplete-certificationupload-certificationupload-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/visit/paymentcomplete/certificationupload/certificationupload.module */
          "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.module.ts")).then(function (m) {
            return m.CertificationuploadPageModule;
          });
        }
      }, {
        path: 'home/visit/result/paymentcancel/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-visit-paymentcancel-paymentcancel-module */
          [__webpack_require__.e("default~pages-visit-paymentcancel-paymentcancel-module~pages-visit-paymentcomplete-certificationuplo~d850730b"), __webpack_require__.e("common"), __webpack_require__.e("pages-visit-paymentcancel-paymentcancel-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/visit/paymentcancel/paymentcancel.module */
          "./src/app/pages/visit/paymentcancel/paymentcancel.module.ts")).then(function (m) {
            return m.PaymentcancelPageModule;
          });
        }
      }, {
        path: 'home/visit/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-visit-visit-module */
          "pages-visit-visit-module").then(__webpack_require__.bind(null,
          /*! ./pages/visit/visit.module */
          "./src/app/pages/visit/visit.module.ts")).then(function (m) {
            return m.VisitPageModule;
          });
        }
      }, {
        path: 'home/visit/result/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-visit-result-result-module */
          "pages-visit-result-result-module").then(__webpack_require__.bind(null,
          /*! ./pages/visit/result/result.module */
          "./src/app/pages/visit/result/result.module.ts")).then(function (m) {
            return m.ResultPageModule;
          });
        }
      }, {
        path: 'home/payment/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-visit-payment-payment-module */
          "pages-visit-payment-payment-module").then(__webpack_require__.bind(null,
          /*! ./pages/visit/payment/payment.module */
          "./src/app/pages/visit/payment/payment.module.ts")).then(function (m) {
            return m.PaymentPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }, {
        path: '**',
        component: _pages_errors_errors_page__WEBPACK_IMPORTED_MODULE_4__["ErrorsPage"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, translate) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.initializeApp();
          translate.addLangs(['en', 'kr']); // this language will be used as a fallback when a translation isn't found in the current language

          translate.setDefaultLang("en"); // the lang to use, if the lang isn't available, it will use the current loader to get them

          translate.use("en");
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: HttpLoaderFactory, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _pipes_mainPipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pipes/mainPipe.module */
      "./src/app/pipes/mainPipe.module.ts");
      /* harmony import */


      var _services_routerext_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/routerext.service */
      "./src/app/services/routerext.service.ts");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_21__["TranslateHttpLoader"](http);
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"]]
          }
        }), _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _pipes_mainPipe_module__WEBPACK_IMPORTED_MODULE_1__["MainPipe"]],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_routerext_service__WEBPACK_IMPORTED_MODULE_2__["RouterExtService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_11__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/pages/dealdetail/dealdetail.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/pages/dealdetail/dealdetail.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDealdetailDealdetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".breadcrumb-item a {\n  color: #3f80ff;\n}\n\n.page-header {\n  margin-top: 0.7rem;\n}\n\n.card-body {\n  padding: 0 !important;\n}\n\n.card-body > .item-det {\n  padding: 1.5rem;\n}\n\n.card-body > .item-slides {\n  margin-top: -1rem;\n  border-radius: 0.3rem;\n}\n\n@media only screen and (max-width: 800px) {\n  .arrow-ribbon2 {\n    font-size: 22px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .arrow-ribbon2:before {\n    left: 100%;\n    width: unset;\n    border-top: 15px solid transparent;\n    border-bottom: 15px solid transparent;\n    border-left: 15px solid #e72a1a;\n  }\n}\n\nion-item {\n  --inner-padding-end: 0.4rem;\n  --padding-start: 0.4rem;\n  --background: var(\n  \t--ion-item-background,\n  \tvar(--ion-background-color, #f1f5fd)\n  );\n}\n\nion-content {\n  --background: #f1f5fd;\n}\n\n.mat-expansion-panel-header-title,\n.mat-expansion-panel-header-description {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVhbGRldGFpbC9kZWFsZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxxQkFBQTtBQUNEOztBQUFDO0VBQ0MsZUFBQTtBQUVGOztBQUFDO0VBQ0MsaUJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUVBO0VBQ0M7SUFDQyxlQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBQ0E7RUFBQTtJQUNDLFVBQUE7SUFDQSxZQUFBO0lBQ0Esa0NBQUE7SUFDQSxxQ0FBQTtJQUNBLCtCQUFBO0VBRUQ7QUFDRjs7QUFFQTtFQUNDLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQTs7O0dBQUE7QUFHRDs7QUFHQTtFQUNDLHFCQUFBO0FBQUQ7O0FBR0E7O0VBRUMseUJBQUE7QUFBRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlYWxkZXRhaWwvZGVhbGRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYi1pdGVtIGEge1xuXHRjb2xvcjogIzNmODBmZjtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcblx0bWFyZ2luLXRvcDogMC43cmVtO1xufVxuXG4uY2FyZC1ib2R5IHtcblx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHQmID4gLml0ZW0tZGV0IHtcblx0XHRwYWRkaW5nOiAxLjVyZW07XG5cdH1cblx0JiA+IC5pdGVtLXNsaWRlcyB7XG5cdFx0bWFyZ2luLXRvcDogLTFyZW07XG5cdFx0Ym9yZGVyLXJhZGl1czogMC4zcmVtO1xuXHR9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcblx0LmFycm93LXJpYmJvbjIge1xuXHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGxlZnQ6IDEwMCU7XG5cdFx0XHR3aWR0aDogdW5zZXQ7XG5cdFx0XHRib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRcdGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNlNzJhMWE7XG5cdFx0fVxuXHR9XG59XG5cbmlvbi1pdGVtIHtcblx0LS1pbm5lci1wYWRkaW5nLWVuZDogMC40cmVtO1xuXHQtLXBhZGRpbmctc3RhcnQ6IDAuNHJlbTtcblx0LS1iYWNrZ3JvdW5kOiB2YXIoXG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kLFxuXHRcdHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjFmNWZkKVxuXHQpO1xufVxuXG5pb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogI2YxZjVmZDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/dealdetail/dealdetail.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dealdetail/dealdetail.page.ts ***!
      \*****************************************************/

    /*! exports provided: DealdetailPage */

    /***/
    function srcAppPagesDealdetailDealdetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealdetailPage", function () {
        return DealdetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../services/loader.service */
      "./src/app/services/loader.service.ts");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _services_noti_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/noti.service */
      "./src/app/services/noti.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/deals.service */
      "./src/app/services/deals.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var DealdetailPage = /*#__PURE__*/function () {
        function DealdetailPage(dealsService, router, route, notiService, afAuth, loader, translate) {
          _classCallCheck(this, DealdetailPage);

          this.dealsService = dealsService;
          this.router = router;
          this.route = route;
          this.notiService = notiService;
          this.afAuth = afAuth;
          this.loader = loader;
          this.slideOpts = {
            initialSlide: 1,
            speed: 400
          };
          this.bidTime = Math.floor(new Date().getTime() / 1000.0);
          this.detail = {};
          this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

          translate.addLangs(['en', 'kr']); // this language will be used as a fallback when a translation isn't found in the current language

          translate.setDefaultLang('kr'); // the lang to use, if the lang isn't available, it will use the current loader to get them

          translate.use('kr');
        }

        _createClass(DealdetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUser();
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.afAuth.currentUser.then(function (val) {
                        if (val) {
                          _this2.userId = val.uid;

                          _this2.getDealDetail(_this2.id);

                          _this2.getDealerInParticipant(_this2.id);
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loader.showLoader();

                    case 2:
                      _context2.next = 4;
                      return this.dealsService.getDealDetail(id).subscribe(function (val) {
                        _this3.detail = Object.assign({}, val.payload.data());

                        _this3.loader.hideLoader();
                      });

                    case 4:
                      this.dealSub = _context2.sent;

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getDealerInParticipant",
          value: function getDealerInParticipant(id) {
            var _this4 = this;

            this.dealsService.getDealerInParticipant(id).subscribe(function (val) {
              if (val.length === 0) {
                return _this4.participant = !Boolean(val);
              } else {
                return _this4.participant = Boolean(val);
              }
            });
          }
        }, {
          key: "addDealerToDeal",
          value: function addDealerToDeal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.dealer = {
                        price: this.price,
                        userId: this.userId,
                        bidTime: this.bidTime,
                        selected: false
                      };
                      _context3.next = 3;
                      return this.dealsService.dealerToDeal(this.id, this.dealer);

                    case 3:
                      _context3.next = 5;
                      return this.dealsService.addDealToDealer(this.id, {
                        dealId: this.id,
                        price: this.price,
                        bidTime: this.bidTime,
                        canceled: false
                      });

                    case 5:
                      _context3.next = 7;
                      return this.dealsService.updateDeal(this.id, {
                        status: 2
                      });

                    case 7:
                      _context3.next = 9;
                      return this.notiService.createNoti({
                        requestId: this.id,
                        status: 2,
                        updateDate: Math.floor(new Date().getTime() / 1000.0),
                        user: this.userId
                      });

                    case 9:
                      this.router.navigate(['/', 'home', 'ongoing']);

                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.dealSub) {
              this.dealSub.unsubscribe();
            }
          }
        }]);

        return DealdetailPage;
      }();

      DealdetailPage.ctorParameters = function () {
        return [{
          type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_6__["DealsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_noti_service__WEBPACK_IMPORTED_MODULE_3__["NotiService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      };

      DealdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-dealdetail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./dealdetail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dealdetail/dealdetail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./dealdetail.page.scss */
        "./src/app/pages/dealdetail/dealdetail.page.scss"))["default"]]
      })], DealdetailPage);
      /***/
    },

    /***/
    "./src/app/pages/errors/errors.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/errors/errors.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesErrorsErrorsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9ycy9lcnJvcnMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/errors/errors.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/errors/errors.page.ts ***!
      \*********************************************/

    /*! exports provided: ErrorsPage */

    /***/
    function srcAppPagesErrorsErrorsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorsPage", function () {
        return ErrorsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ErrorsPage = /*#__PURE__*/function () {
        function ErrorsPage(router) {
          var _this5 = this;

          _classCallCheck(this, ErrorsPage);

          this.router = router;

          this.navigateHome = function () {
            _this5.router.navigate(['home', 'deal']);
          };
        }

        _createClass(ErrorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ErrorsPage;
      }();

      ErrorsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      ErrorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-errors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./errors.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/errors/errors.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./errors.page.scss */
        "./src/app/pages/errors/errors.page.scss"))["default"]]
      })], ErrorsPage);
      /***/
    },

    /***/
    "./src/app/pipes/date-ago.pipe.ts":
    /*!****************************************!*\
      !*** ./src/app/pipes/date-ago.pipe.ts ***!
      \****************************************/

    /*! exports provided: DateAgoPipe */

    /***/
    function srcAppPipesDateAgoPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function () {
        return DateAgoPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DateAgoPipe = /*#__PURE__*/function () {
        function DateAgoPipe() {
          _classCallCheck(this, DateAgoPipe);
        }

        _createClass(DateAgoPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (value) {
              var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);

              if (seconds < 29) {
                return 'Just now';
              }

              var intervals = {
                year: 31536000,
                month: 2592000,
                week: 604800,
                day: 86400,
                hour: 3600,
                minute: 60,
                second: 1
              };
              var counter;

              for (var i in intervals) {
                counter = Math.floor(seconds / intervals[i]);

                if (counter > 0) {
                  if (counter == 0) {
                    return counter + ' ' + i + ' ago';
                  } else {
                    return counter + ' ' + i + 's ago';
                  }
                }
              }
            }

            return value;
          }
        }]);

        return DateAgoPipe;
      }();

      DateAgoPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'dateAgo',
        pure: true
      })], DateAgoPipe);
      /***/
    },

    /***/
    "./src/app/pipes/mainPipe.module.ts":
    /*!******************************************!*\
      !*** ./src/app/pipes/mainPipe.module.ts ***!
      \******************************************/

    /*! exports provided: MainPipe */

    /***/
    function srcAppPipesMainPipeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainPipe", function () {
        return MainPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./date-ago.pipe */
      "./src/app/pipes/date-ago.pipe.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MainPipe = function MainPipe() {
        _classCallCheck(this, MainPipe);
      };

      MainPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__["DateAgoPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__["DateAgoPipe"]]
      })], MainPipe);
      /***/
    },

    /***/
    "./src/app/services/auth.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./toast.service */
      "./src/app/services/toast.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(afAuth, router, toast, fireStore) {
          _classCallCheck(this, AuthService);

          this.afAuth = afAuth;
          this.router = router;
          this.toast = toast;
          this.fireStore = fireStore;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.afAuth.signInWithEmailAndPassword(email, password);

                    case 2:
                      this.router.navigate(['home', 'deal']);

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "signup",
          value: function signup(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.afAuth.createUserWithEmailAndPassword(email, password);

                    case 2:
                      _context5.next = 4;
                      return this.toast.showToast('Your account have been created, Please login!');

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "registerDealer",
          value: function registerDealer(content) {
            return this.fireStore.collection('register_request').add(content);
          }
        }, {
          key: "updateRegisterDealer",
          value: function updateRegisterDealer(id, content) {
            this.fireStore.collection('register_request').doc(id).collection('image').add(content);
          }
        }, {
          key: "logout",
          value: function logout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.afAuth.signOut();

                    case 2:
                      this.router.navigate(['login']);

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "./src/app/services/deals.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/deals.service.ts ***!
      \*******************************************/

    /*! exports provided: DealsService */

    /***/
    function srcAppServicesDealsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealsService", function () {
        return DealsService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DealsService = /*#__PURE__*/function () {
        function DealsService(fireStore, afAuth) {
          var _this6 = this;

          _classCallCheck(this, DealsService);

          this.fireStore = fireStore;
          this.afAuth = afAuth;
          this.now = Math.floor(new Date().getTime() / 1000.0);
          this.afAuth.authState.subscribe(function (user) {
            if (user) {
              _this6.loggedUser = user;
            }
          });
        }

        _createClass(DealsService, [{
          key: "getDeal",
          value: function getDeal() {
            var _this7 = this;

            return this.fireStore.collection('requests', function (ref) {
              return ref.where('expiredTime', '>=', _this7.now).orderBy('expiredTime', 'desc');
            }).snapshotChanges();
          }
        }, {
          key: "getDealerInParticipant",
          value: function getDealerInParticipant(id) {
            var _this8 = this;

            return this.fireStore.collection('requests').doc(id).collection('participants', function (ref) {
              return ref.where('userId', '==', _this8.loggedUser.uid);
            }).valueChanges();
          }
        }, {
          key: "getSelectedDealer",
          value: function getSelectedDealer(id) {
            var _this9 = this;

            return this.fireStore.collection('requests').doc(id).collection('participants', function (ref) {
              return ref.where('userId', '==', _this9.loggedUser.uid).where('selected', '==', true);
            }).valueChanges();
          }
        }, {
          key: "getOngoingDeal",
          value: function getOngoingDeal(id) {
            return this.fireStore.collection('Dealer').doc(id).collection('Deals', function (ref) {
              return ref.where('canceled', '==', false).orderBy('bidTime', 'desc');
            }).snapshotChanges();
          }
        }, {
          key: "getDealDetail",
          value: function getDealDetail(id) {
            return this.fireStore.collection('requests').doc(id).snapshotChanges();
          }
        }, {
          key: "getPlateNum",
          value: function getPlateNum(id) {
            return this.fireStore.collection('vehicles').doc(id).snapshotChanges();
          }
        }, {
          key: "dealerToDeal",
          value: function dealerToDeal(id, dealer) {
            return this.fireStore.collection('requests').doc(id).collection('participants').add(dealer);
          }
        }, {
          key: "addDealToDealer",
          value: function addDealToDealer(dealId, deal) {
            return this.fireStore.collection('Dealer').doc(this.loggedUser.uid).collection('Deals').doc(dealId).set(deal);
          }
        }, {
          key: "updateDealInDealer",
          value: function updateDealInDealer(id, val) {
            this.fireStore.collection('Dealer').doc(this.loggedUser.uid).collection('Deals').doc(id).update(val);
          }
        }, {
          key: "updateDeal",
          value: function updateDeal(id, update) {
            return this.fireStore.collection('requests').doc(id).update(update);
          }
        }, {
          key: "createCancelDeal",
          value: function createCancelDeal(content) {
            return this.fireStore.collection('Result').add(content);
          }
        }, {
          key: "createPayment",
          value: function createPayment(id, content) {
            this.fireStore.collection('Payment').doc(id).set(content);
          }
        }, {
          key: "getParticipant",
          value: function getParticipant(id) {
            return this.fireStore.collection('requests').doc(id).collection('participants').snapshotChanges();
          }
        }, {
          key: "getParticipantById",
          value: function getParticipantById(id, userId) {
            return this.fireStore.collection('requests').doc(id).collection('participants', function (ref) {
              return ref.where('userId', '==', userId);
            }).snapshotChanges();
          }
        }, {
          key: "deleteParticipant",
          value: function deleteParticipant(id, partId) {
            this.fireStore.collection('requests').doc(id).collection('participants').doc(partId)["delete"]();
          }
        }, {
          key: "getUnselectParticipant",
          value: function getUnselectParticipant(id) {
            return this.fireStore.collection('requests').doc(id).collection('participants', function (ref) {
              return ref.where('selected', '==', false);
            }).snapshotChanges();
          }
        }, {
          key: "getSelectedParticipant",
          value: function getSelectedParticipant(id) {
            return this.fireStore.collection('requests').doc(id).collection('participants', function (ref) {
              return ref.where('selected', '==', true);
            }).snapshotChanges();
          }
        }]);

        return DealsService;
      }();

      DealsService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }];
      };

      DealsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      })], DealsService);
      /***/
    },

    /***/
    "./src/app/services/loader.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/loader.service.ts ***!
      \********************************************/

    /*! exports provided: LoaderService */

    /***/
    function srcAppServicesLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
        return LoaderService;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LoaderService = /*#__PURE__*/function () {
        function LoaderService(loadingController) {
          _classCallCheck(this, LoaderService);

          this.loadingController = loadingController;
        }

        _createClass(LoaderService, [{
          key: "showLoader",
          value: function showLoader() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        showBackdrop: true
                      }).then(function (res) {
                        res.present();
                      });

                    case 2:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "hideLoader",
          value: function hideLoader() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.loadingController.dismiss().then(function (res) {
                        console.log('Loading dismissed!', res);
                      })["catch"](function (err) {
                        console.log('error', err);
                      });

                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return LoaderService;
      }();

      LoaderService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }];
      };

      LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], LoaderService);
      /***/
    },

    /***/
    "./src/app/services/noti.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/noti.service.ts ***!
      \******************************************/

    /*! exports provided: NotiService */

    /***/
    function srcAppServicesNotiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotiService", function () {
        return NotiService;
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

      var NotiService = /*#__PURE__*/function () {
        function NotiService(firestore) {
          _classCallCheck(this, NotiService);

          this.firestore = firestore;
        }

        _createClass(NotiService, [{
          key: "getNoti",
          value: function getNoti(id) {
            return this.firestore.collection('notifications', function (ref) {
              return ref.where('user', '==', id);
            }).snapshotChanges();
          }
        }, {
          key: "createNoti",
          value: function createNoti(noti) {
            return this.firestore.collection('notifications').add(noti);
          }
        }]);

        return NotiService;
      }();

      NotiService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      };

      NotiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], NotiService);
      /***/
    },

    /***/
    "./src/app/services/routerext.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/routerext.service.ts ***!
      \***********************************************/

    /*! exports provided: RouterExtService */

    /***/
    function srcAppServicesRouterextServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RouterExtService", function () {
        return RouterExtService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var RouterExtService = /*#__PURE__*/function () {
        function RouterExtService(router) {
          var _this10 = this;

          _classCallCheck(this, RouterExtService);

          this.router = router;
          this.previousUrl = undefined;
          this.currentUrl = undefined;
          this.currentUrl = this.router.url;
          router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this10.previousUrl = _this10.currentUrl;
              _this10.currentUrl = event.url;
            }
          });
        }

        _createClass(RouterExtService, [{
          key: "getPreviousUrl",
          value: function getPreviousUrl() {
            return this.previousUrl;
          }
        }]);

        return RouterExtService;
      }();

      RouterExtService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      RouterExtService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], RouterExtService);
      /***/
    },

    /***/
    "./src/app/services/toast.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/toast.service.ts ***!
      \*******************************************/

    /*! exports provided: ToastService */

    /***/
    function srcAppServicesToastServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastService", function () {
        return ToastService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ToastService = /*#__PURE__*/function () {
        function ToastService(toast) {
          _classCallCheck(this, ToastService);

          this.toast = toast;
        }

        _createClass(ToastService, [{
          key: "showToast",
          value: function showToast(message) {
            this.myToast = this.toast.create({
              message: message,
              duration: 2500
            }).then(function (toastData) {
              toastData.present();
            });
          }
        }, {
          key: "HideToast",
          value: function HideToast() {
            this.myToast = this.toast.dismiss();
          }
        }]);

        return ToastService;
      }();

      ToastService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastService);
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
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: 'AIzaSyBiolRGAMjx9lYbaKd9mitcgqLlXKkg4sw',
          authDomain: 'scr-test-a0adf.firebaseapp.com',
          databaseURL: 'https://scr-test-a0adf.firebaseio.com',
          projectId: 'scr-test-a0adf',
          storageBucket: 'scr-test-a0adf.appspot.com',
          messagingSenderId: '1039917914523',
          appId: '1:1039917914523:web:17af795f3b903f51de293e',
          measurementId: 'G-T1WP8TF7Z9'
        }
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/pwa-elements/loader */
      "./node_modules/@ionic/pwa-elements/loader/index.es2017.mjs");

      Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
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
      /*! /Users/trannhan/Downloads/Source/Project/SCRoadsFinal/SCRoad_Dealer/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map