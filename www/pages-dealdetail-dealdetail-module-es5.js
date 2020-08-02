(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dealdetail-dealdetail-module"], {
    /***/
    "./src/app/pages/dealdetail/dealdetail-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/dealdetail/dealdetail-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: DealdetailPageRoutingModule */

    /***/
    function srcAppPagesDealdetailDealdetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealdetailPageRoutingModule", function () {
        return DealdetailPageRoutingModule;
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


      var _dealdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dealdetail.page */
      "./src/app/pages/dealdetail/dealdetail.page.ts");

      var routes = [{
        path: '',
        component: _dealdetail_page__WEBPACK_IMPORTED_MODULE_3__["DealdetailPage"]
      }];

      var DealdetailPageRoutingModule = function DealdetailPageRoutingModule() {
        _classCallCheck(this, DealdetailPageRoutingModule);
      };

      DealdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DealdetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/dealdetail/dealdetail.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/dealdetail/dealdetail.module.ts ***!
      \*******************************************************/

    /*! exports provided: DealdetailPageModule */

    /***/
    function srcAppPagesDealdetailDealdetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DealdetailPageModule", function () {
        return DealdetailPageModule;
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


      var _dealdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dealdetail-routing.module */
      "./src/app/pages/dealdetail/dealdetail-routing.module.ts");
      /* harmony import */


      var _dealdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dealdetail.page */
      "./src/app/pages/dealdetail/dealdetail.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");

      var DealdetailPageModule = function DealdetailPageModule() {
        _classCallCheck(this, DealdetailPageModule);
      };

      DealdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _dealdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DealdetailPageRoutingModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"]],
        declarations: [_dealdetail_page__WEBPACK_IMPORTED_MODULE_6__["DealdetailPage"]]
      })], DealdetailPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-dealdetail-dealdetail-module-es5.js.map