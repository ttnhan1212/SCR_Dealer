(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modals-privatepolicy-privatepolicy-module"],{

/***/ "./src/app/pages/index/modals/privatepolicy/privatepolicy-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/index/modals/privatepolicy/privatepolicy-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PrivatepolicyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatepolicyPageRoutingModule", function() { return PrivatepolicyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _privatepolicy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privatepolicy.page */ "./src/app/pages/index/modals/privatepolicy/privatepolicy.page.ts");




const routes = [
    {
        path: '',
        component: _privatepolicy_page__WEBPACK_IMPORTED_MODULE_3__["PrivatepolicyPage"],
    },
];
let PrivatepolicyPageRoutingModule = class PrivatepolicyPageRoutingModule {
};
PrivatepolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrivatepolicyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/index/modals/privatepolicy/privatepolicy.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/index/modals/privatepolicy/privatepolicy.module.ts ***!
  \**************************************************************************/
/*! exports provided: PrivatepolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatepolicyPageModule", function() { return PrivatepolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _privatepolicy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privatepolicy-routing.module */ "./src/app/pages/index/modals/privatepolicy/privatepolicy-routing.module.ts");
/* harmony import */ var _privatepolicy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privatepolicy.page */ "./src/app/pages/index/modals/privatepolicy/privatepolicy.page.ts");







let PrivatepolicyPageModule = class PrivatepolicyPageModule {
};
PrivatepolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _privatepolicy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivatepolicyPageRoutingModule"],
        ],
        declarations: [_privatepolicy_page__WEBPACK_IMPORTED_MODULE_6__["PrivatepolicyPage"]],
    })
], PrivatepolicyPageModule);



/***/ })

}]);
//# sourceMappingURL=modals-privatepolicy-privatepolicy-module-es2015.js.map