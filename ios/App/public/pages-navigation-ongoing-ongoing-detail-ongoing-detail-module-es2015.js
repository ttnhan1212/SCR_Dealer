(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-navigation-ongoing-ongoing-detail-ongoing-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-img [src]=\"logo\" class=\"smllogo p-1\"></ion-img>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button expand=\"block\" color=\"tertiary\" (click)=\"navigateToLogin()\">\n\t시작하려면 여기를 클릭하십시오\n</ion-button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button slot=\"end\" fill=\"clear\" [routerLink]=\"['/','home','deal']\">\n\t\t\t<ion-icon name=\"log-out-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<!--/BreadCrumb-->\n\t<ion-item *ngIf=\"detail\">\n\t\t<ion-grid class=\"container\">\n\t\t\t<ion-row class=\"row\">\n\t\t\t\t<ion-col class=\"col-xl-8 col-lg-8 col-md-12\">\n\t\t\t\t\t<!--Classified Description-->\n\t\t\t\t\t<div class=\"card overflow-hidden\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"item-det mb-4\">\n\t\t\t\t\t\t\t\t<a class=\"text-dark\">\n\t\t\t\t\t\t\t\t\t<h3>Car Model, Year, {{detail.plateNum}}</h3>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t<ul class=\"d-flex mb-0\">\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-car text-muted mr-1 fs-18\"></i> Cars</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-location-pin text-muted mr-1\"></i\n\t\t\t\t\t\t\t\t\t\t\t\t>{{detail.location}}</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-calendar text-muted mr-1\"></i\n\t\t\t\t\t\t\t\t\t\t\t\t>{{detail.effectedTime}}</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-eye text-muted mr-1 fs-15\"></i> 765</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class=\"rating-stars d-flex mr-5\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"person-outline\" class=\"mr-1\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t<ion-label>{{detail.name}}</ion-label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"rating-stars d-flex\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars-container mr-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t135\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ion-slides\n\t\t\t\t\t\t\t\tclass=\"item-slides\"\n\t\t\t\t\t\t\t\tpager=\"true\"\n\t\t\t\t\t\t\t\t[options]=\"slideOpts\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<ion-img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/photos/car_01.png\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t></ion-img>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/photos/car_02.png\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/photos/car_01.png\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t</ion-slides>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<ion-button\n\t\t\t\t\t\tclass=\"mt-2 mb-5\"\n\t\t\t\t\t\texpand=\"block\"\n\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\tsize=\"medium\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{'home_ongoing_detail.see_insurance_history' | translate}}\n\t\t\t\t\t</ion-button>\n\n\t\t\t\t\t<ion-item-group class=\"mb-5\">\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t\t<i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong>{{'home_ongoing_detail.location' | translate}}</strong>\n\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t<ion-card-content>{{detail.location}}</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header\n\t\t\t\t\t\t\t\t><i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t>{{'home_ongoing_detail.mileages' | translate}}</strong\n\t\t\t\t\t\t\t\t></ion-card-header\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ion-card-content>{{detail.miles | number}} Km</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t\t<i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t>{{'home_ongoing_detail.vehicle' | translate}} 특이\n\t\t\t\t\t\t\t\t\t사항</strong\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t<ion-card-content> {{detail.other}} </ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t\t<ion-card class=\"card-body\">\n\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t<ion-row *ngIf=\"userExist\">\n\t\t\t\t\t\t\t\t<ion-col size=\"4\">\n\t\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\t\t\t\tsize=\"large\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"cancel()\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t{{'home_ongoing_detail.cancel' | translate}}\n\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\t\t\t\tsize=\"large\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"confirmSelect(participant[0].userId, participant[0].price)\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t{{'home_ongoing_detail.purchase' | translate}}\n\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t<ion-row *ngIf=\"!userExist\">\n\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\t\t\t\tsize=\"large\"\n\t\t\t\t\t\t\t\t\t\tdisabled\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t{{'home_ongoing_detail.pending_confirm' | translate}}\n\t\t\t\t\t\t\t\t\t\t<ion-spinner class=\"ml-4\" name=\"crescent\"></ion-spinner>\n\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start/start.component */ "./src/app/components/start/start.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/components/logo/logo.component.ts");







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"]],
        exports: [_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/logo/logo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".smllogo {\n  height: 2.6rem;\n  width: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0VBQ0EsVUFBQTtBQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21sbG9nbyB7XG5cdGhlaWdodDogMi42cmVtO1xuXHR3aWR0aDogNDUlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LogoComponent = class LogoComponent {
    constructor() {
        this.logo = "assets/images/banners/scroadslight.svg";
    }
    ngOnInit() { }
};
LogoComponent.ctorParameters = () => [];
LogoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./logo.component.scss */ "./src/app/components/logo/logo.component.scss")).default]
    })
], LogoComponent);



/***/ }),

/***/ "./src/app/components/start/start.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/start/start.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/start/start.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/start/start.component.ts ***!
  \*****************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let StartComponent = class StartComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateToLogin() {
        this.router.navigate(['login']);
    }
};
StartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./start.component.scss */ "./src/app/components/start/start.component.scss")).default]
    })
], StartComponent);



/***/ }),

/***/ "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: OngoingDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngoingDetailPageRoutingModule", function() { return OngoingDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ongoing_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ongoing-detail.page */ "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.ts");




const routes = [
    {
        path: '',
        component: _ongoing_detail_page__WEBPACK_IMPORTED_MODULE_3__["OngoingDetailPage"]
    }
];
let OngoingDetailPageRoutingModule = class OngoingDetailPageRoutingModule {
};
OngoingDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OngoingDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.module.ts ***!
  \**********************************************************************************/
/*! exports provided: HttpLoaderFactory, OngoingDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngoingDetailPageModule", function() { return OngoingDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ongoing_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ongoing-detail-routing.module */ "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail-routing.module.ts");
/* harmony import */ var _ongoing_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ongoing-detail.page */ "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");












function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http);
}
let OngoingDetailPageModule = class OngoingDetailPageModule {
};
OngoingDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _ongoing_detail_routing_module__WEBPACK_IMPORTED_MODULE_7__["OngoingDetailPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]],
                }
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        declarations: [_ongoing_detail_page__WEBPACK_IMPORTED_MODULE_8__["OngoingDetailPage"]],
    })
], OngoingDetailPageModule);



/***/ }),

/***/ "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".breadcrumb-item a {\n  color: #3f80ff;\n}\n\n.page-header {\n  margin-top: 0.7rem;\n}\n\n.card-body {\n  padding: 0 !important;\n}\n\n.card-body > .item-det {\n  padding: 1.5rem;\n}\n\n.card-body > .item-slides {\n  margin-top: -1rem;\n  border-radius: 0.3rem;\n}\n\n@media only screen and (max-width: 800px) {\n  .arrow-ribbon2 {\n    font-size: 22px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .arrow-ribbon2:before {\n    left: 100%;\n    width: unset;\n    border-top: 15px solid transparent;\n    border-bottom: 15px solid transparent;\n    border-left: 15px solid #e72a1a;\n  }\n}\n\nion-item {\n  --inner-padding-end: 0.4rem;\n  --padding-start: 0.4rem;\n  --background: var(\n  \t--ion-item-background,\n  \tvar(--ion-background-color, #f1f5fd)\n  );\n}\n\nion-content {\n  --background: #f1f5fd;\n}\n\n.mat-expansion-panel-header-title,\n.mat-expansion-panel-header-description {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9vbmdvaW5nL29uZ29pbmctZGV0YWlsL29uZ29pbmctZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxxQkFBQTtBQUNEOztBQUFDO0VBQ0MsZUFBQTtBQUVGOztBQUFDO0VBQ0MsaUJBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUVBO0VBQ0M7SUFDQyxlQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBQ0E7RUFBQTtJQUNDLFVBQUE7SUFDQSxZQUFBO0lBQ0Esa0NBQUE7SUFDQSxxQ0FBQTtJQUNBLCtCQUFBO0VBRUQ7QUFDRjs7QUFFQTtFQUNDLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQTs7O0dBQUE7QUFHRDs7QUFHQTtFQUNDLHFCQUFBO0FBQUQ7O0FBR0E7O0VBRUMseUJBQUE7QUFBRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vb25nb2luZy9vbmdvaW5nLWRldGFpbC9vbmdvaW5nLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYi1pdGVtIGEge1xuXHRjb2xvcjogIzNmODBmZjtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcblx0bWFyZ2luLXRvcDogMC43cmVtO1xufVxuXG4uY2FyZC1ib2R5IHtcblx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHQmID4gLml0ZW0tZGV0IHtcblx0XHRwYWRkaW5nOiAxLjVyZW07XG5cdH1cblx0JiA+IC5pdGVtLXNsaWRlcyB7XG5cdFx0bWFyZ2luLXRvcDogLTFyZW07XG5cdFx0Ym9yZGVyLXJhZGl1czogMC4zcmVtO1xuXHR9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcblx0LmFycm93LXJpYmJvbjIge1xuXHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGxlZnQ6IDEwMCU7XG5cdFx0XHR3aWR0aDogdW5zZXQ7XG5cdFx0XHRib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRcdGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNlNzJhMWE7XG5cdFx0fVxuXHR9XG59XG5cbmlvbi1pdGVtIHtcblx0LS1pbm5lci1wYWRkaW5nLWVuZDogMC40cmVtO1xuXHQtLXBhZGRpbmctc3RhcnQ6IDAuNHJlbTtcblx0LS1iYWNrZ3JvdW5kOiB2YXIoXG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kLFxuXHRcdHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjFmNWZkKVxuXHQpO1xufVxuXG5pb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogI2YxZjVmZDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.ts ***!
  \********************************************************************************/
/*! exports provided: OngoingDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OngoingDetailPage", function() { return OngoingDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _services_noti_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/noti.service */ "./src/app/services/noti.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/deals.service */ "./src/app/services/deals.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");







let OngoingDetailPage = class OngoingDetailPage {
    constructor(dealsService, router, route, notiService, afAuth, translate) {
        this.dealsService = dealsService;
        this.router = router;
        this.route = route;
        this.notiService = notiService;
        this.afAuth = afAuth;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
        };
        this.bidTime = Math.floor(new Date().getTime() / 1000.0);
        this.participant = {};
        this.detail = {};
        this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
        translate.addLangs(['en', 'kr']);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('kr');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('kr');
    }
    ngOnInit() {
        this.getUser();
    }
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.authState.subscribe((authState) => {
                if (authState) {
                    this.userId = authState.uid;
                    this.getDealDetail(this.id);
                    this.getSelectDealer(this.id);
                }
            });
        });
    }
    getDealDetail(id) {
        this.dealSub = this.dealsService.getDealDetail(id).subscribe((val) => {
            this.detail = Object.assign({}, val.payload.data());
            this.dealsService.getPlateNum(this.detail.vehiclesId).subscribe((m) => {
                this.detail.plateNum = m.payload.data()['platenumber'];
            });
        });
    }
    getSelectDealer(id) {
        this.dealsService.getSelectedDealer(id).subscribe((val) => {
            if (val.length === 0) {
                this.participant = {};
                this.userExist = !Boolean(val);
            }
            else {
                this.participant = Object.assign({}, val);
                this.userExist = Boolean(val);
            }
        });
    }
    confirmSelect(user, price) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dealsService.updateDeal(this.id, {
                status: 5,
                participants: [user, price],
            });
            yield this.notiService.createNoti({
                requestId: this.id,
                status: 5,
                updateDate: Math.floor(new Date().getTime() / 1000.0),
                user: this.userId,
            });
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
        });
    }
    cancel() {
        this.router.navigate(['/', 'home', 'ongoing', 'cancel', this.id]);
    }
    ngOnDestroy() {
        if (this.dealSub) {
            this.dealSub.unsubscribe();
        }
    }
};
OngoingDetailPage.ctorParameters = () => [
    { type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_5__["DealsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_noti_service__WEBPACK_IMPORTED_MODULE_3__["NotiService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
];
OngoingDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-ongoing-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ongoing-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ongoing-detail.page.scss */ "./src/app/pages/navigation/ongoing/ongoing-detail/ongoing-detail.page.scss")).default]
    })
], OngoingDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-navigation-ongoing-ongoing-detail-ongoing-detail-module-es2015.js.map