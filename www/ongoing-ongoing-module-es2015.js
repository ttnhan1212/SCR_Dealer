(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ongoing-ongoing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button fill=\"clear\" slot=\"end\" [routerLink]=\"['/','home','infor']\">\n\t\t\t<ion-icon name=\"information-circle-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button\n\t\t\tfill=\"clear\"\n\t\t\tslot=\"end\"\n\t\t\t[routerLink]=\"['/','home','notifications']\"\n\t\t>\n\t\t\t<ion-icon name=\"notifications-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-card *ngFor=\"let item of ongoing\">\n\t\t<ion-item [routerLink]=\"[item.dealId]\">\n\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t<img\n\t\t\t\t\tsrc=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"\n\t\t\t\t/>\n\t\t\t</ion-thumbnail>\n\t\t\t<ion-grid class=\"p-0 m-0\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-header style=\"background: gray;\" class=\"m-0 p-0\">\n\t\t\t\t\t\t<p class=\"fs-20 text-center mt-2 text-dark\">{{item.deal.status}}</p>\n\t\t\t\t\t</ion-header>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>2009</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>K-5</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>12가1234</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>{{item.deal.miles}}</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>${{item.price}}</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-label>{{item.id}}</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/navigation/ongoing/ongoing-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/ongoing-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: OngoingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngoingPageRoutingModule", function() { return OngoingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ongoing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ongoing.page */ "./src/app/pages/navigation/ongoing/ongoing.page.ts");




const routes = [
    {
        path: '',
        component: _ongoing_page__WEBPACK_IMPORTED_MODULE_3__["OngoingPage"]
    }
];
let OngoingPageRoutingModule = class OngoingPageRoutingModule {
};
OngoingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OngoingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/navigation/ongoing/ongoing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/ongoing.module.ts ***!
  \************************************************************/
/*! exports provided: OngoingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngoingPageModule", function() { return OngoingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ongoing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ongoing-routing.module */ "./src/app/pages/navigation/ongoing/ongoing-routing.module.ts");
/* harmony import */ var _ongoing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ongoing.page */ "./src/app/pages/navigation/ongoing/ongoing.page.ts");








let OngoingPageModule = class OngoingPageModule {
};
OngoingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _ongoing_routing_module__WEBPACK_IMPORTED_MODULE_6__["OngoingPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
        ],
        declarations: [_ongoing_page__WEBPACK_IMPORTED_MODULE_7__["OngoingPage"]],
    })
], OngoingPageModule);



/***/ }),

/***/ "./src/app/pages/navigation/ongoing/ongoing.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/ongoing.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vb25nb2luZy9vbmdvaW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/navigation/ongoing/ongoing.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/ongoing.page.ts ***!
  \**********************************************************/
/*! exports provided: OngoingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngoingPage", function() { return OngoingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/deals.service */ "./src/app/services/deals.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let OngoingPage = class OngoingPage {
    constructor(dealService) {
        this.dealService = dealService;
        this.logo = '../../../assets/images/logo/scroadslight.svg';
        if (localStorage.getItem('user')) {
            this.id = JSON.parse(localStorage.getItem('user')).uid;
        }
    }
    ngOnInit() {
        this.dealService.getOngoingDeal(this.id).subscribe((val) => {
            this.ongoing = val.map((e) => {
                return Object.assign({}, e.payload.doc.data());
            });
            this.ongoing.forEach((val) => {
                this.dealService.getDealDetail(val.dealId).subscribe((m) => {
                    val.deal = Object.assign({}, m.payload.data());
                });
            });
            console.log(this.ongoing);
        });
    }
};
OngoingPage.ctorParameters = () => [
    { type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_1__["DealsService"] }
];
OngoingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-ongoing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ongoing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ongoing.page.scss */ "./src/app/pages/navigation/ongoing/ongoing.page.scss")).default]
    })
], OngoingPage);



/***/ })

}]);
//# sourceMappingURL=ongoing-ongoing-module-es2015.js.map