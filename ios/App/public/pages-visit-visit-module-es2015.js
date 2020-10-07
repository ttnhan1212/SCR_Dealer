(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-visit-visit-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/visit.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/visit.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n\t\t<ion-fab-button href=\"tel:{{detail.phone}}\">\n\t\t\t<ion-icon name=\"call-outline\"></ion-icon>\n\t\t</ion-fab-button>\n\t</ion-fab>\n\t<!--BreadCrumb-->\n\t<ion-card>\n\t\t<ion-card-header>\n\t\t\t<strong>{{'home_visit.visit_seller_info' | translate}}</strong>\n\t\t</ion-card-header>\n\t\t<ion-card-content>\n\t\t\t<ion-grid>\n\t\t\t\t<ion-row class=\"mb-3\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<ion-icon name=\"person-outline\" class=\"mr-1\"></ion-icon>\n\t\t\t\t\t\t{{detail.name}}\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<ion-icon name=\"phone-portrait-outline\" class=\"mr-1\"></ion-icon>\n\t\t\t\t\t\t{{detail.phone}}\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-card-content>\n\t</ion-card>\n\t<!--/BreadCrumb-->\n\t<ion-item>\n\t\t<ion-grid class=\"container\">\n\t\t\t<ion-row class=\"row\">\n\t\t\t\t<ion-col class=\"col-xl-8 col-lg-8 col-md-12\">\n\t\t\t\t\t<!--Classified Description-->\n\t\t\t\t\t<div class=\"card overflow-hidden\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"item-det\">\n\t\t\t\t\t\t\t\t<a class=\"text-dark\">\n\t\t\t\t\t\t\t\t\t<h3>Car Model, Year, Plate Number</h3>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<!-- <div class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t<ul class=\"d-flex mb-0\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-car text-muted mr-1 fs-18\"></i> Cars</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-location-pin text-muted mr-1\"></i\n\t\t\t\t\t\t\t\t\t\t\t\t>{{detail.location}}</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-calendar text-muted mr-1\"></i\n\t\t\t\t\t\t\t\t\t\t\t\t>{{detail.effectedTime}}</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-eye text-muted mr-1 fs-15\"></i> 765</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class=\"rating-stars d-flex mr-5\">\n\t\t\t\t\t\t\t\t\t\t<ion-icon name=\"person-outline\" class=\"mr-1\"></ion-icon>\n\t\t\t\t\t\t\t\t\t\t<ion-label>{{detail.name}}</ion-label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"rating-stars d-flex\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars-container mr-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t135\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ion-slides\n\t\t\t\t\t\t\t\tclass=\"item-slides\"\n\t\t\t\t\t\t\t\tpager=\"true\"\n\t\t\t\t\t\t\t\t[options]=\"slideOpts\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<ion-img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/cars/2010-marussia-b2-2.jpg\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t></ion-img>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/cars/2010-marussia-b2-2.jpg\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/cars/2010-marussia-b2-2.jpg\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t</ion-slides>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<ion-button\n\t\t\t\t\t\tclass=\"mt-2 mb-5\"\n\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\tsize=\"medium\"\n\t\t\t\t\t>\n\t\t\t\t\t\t{{'home_visit.visit_see_insurance_history' | translate}}\n\t\t\t\t\t</ion-button>\n\n\t\t\t\t\t<ion-item-group class=\"mb-5\">\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t\t<i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong>{{'home_visit.visit_location' | translate}}</strong>\n\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t<ion-card-content>{{detail.location}}</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header\n\t\t\t\t\t\t\t\t><i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t>{{'home_visit.visit_mileages' | translate}}</strong\n\t\t\t\t\t\t\t\t></ion-card-header\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ion-card-content>{{detail.miles}}</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t\t<ion-card>\n\t\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t\t<i class=\"ti-location-pin text-muted mr-1\"></i>\n\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t>{{'home_visit.visit_vehicle' | translate}} 특이 사항</strong\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t\t출퇴근 용으로만 탔어요출퇴근 용으로만 탔어요. 출퇴근 용으로만\n\t\t\t\t\t\t\t\t탔어요\n\t\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\t</ion-card>\n\t\t\t\t\t</ion-item-group>\n\n\t\t\t\t\t<ion-card class=\"card-body\">\n\t\t\t\t\t\t<ion-card-content *ngIf=\"!detail.visitDate\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t\t\t\t{{'home_visit.confirm_date' | translate}}\n\t\t\t\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t\t\t\t\t<ion-datetime\n\t\t\t\t\t\t\t\t\t\tdisplayFormat=\"D MMM YYYY H A\"\n\t\t\t\t\t\t\t\t\t\t[min]=\"now\"\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"selectDate\"\n\t\t\t\t\t\t\t\t\t></ion-datetime>\n\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\t\tsize=\"large\"\n\t\t\t\t\t\t\t\t(click)=\"addVisitDate()\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{'home_visit.confirm_date' | translate}}\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\t<ion-card-content *ngIf=\"detail.visitDate\">\n\t\t\t\t\t\t\t<ion-title class=\"text-center mb-3\">\n\t\t\t\t\t\t\t\t{{localeDate(detail.visitDate) | date:\"medium\"}}\n\t\t\t\t\t\t\t</ion-title>\n\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\t\tsize=\"large\"\n\t\t\t\t\t\t\t\t[routerLink]=\"['/','home','visit','result', this.id]\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{'home_visit.enter_visit_result' | translate}}\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-item>\n</ion-content>\n");

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

/***/ "./src/app/pages/visit/visit-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/visit/visit-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: VisitPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitPageRoutingModule", function() { return VisitPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _visit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visit.page */ "./src/app/pages/visit/visit.page.ts");




const routes = [
    {
        path: '',
        component: _visit_page__WEBPACK_IMPORTED_MODULE_3__["VisitPage"],
    },
];
let VisitPageRoutingModule = class VisitPageRoutingModule {
};
VisitPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VisitPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/visit/visit.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/visit/visit.module.ts ***!
  \*********************************************/
/*! exports provided: HttpLoaderFactory, VisitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitPageModule", function() { return VisitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _visit_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visit-routing.module */ "./src/app/pages/visit/visit-routing.module.ts");
/* harmony import */ var _visit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visit.page */ "./src/app/pages/visit/visit.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
}
let VisitPageModule = class VisitPageModule {
};
VisitPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _visit_routing_module__WEBPACK_IMPORTED_MODULE_6__["VisitPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]],
                },
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ],
        declarations: [_visit_page__WEBPACK_IMPORTED_MODULE_7__["VisitPage"]],
    })
], VisitPageModule);



/***/ }),

/***/ "./src/app/pages/visit/visit.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/visit/visit.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".breadcrumb-item a {\n  color: #3f80ff;\n}\n\n.page-header {\n  margin-top: 0.7rem;\n  margin-bottom: 0.7rem;\n}\n\n.card-body {\n  padding: 0 !important;\n}\n\n.card-body > .item-det {\n  padding: 1.5rem;\n}\n\n.card-body > .item-slides {\n  margin-top: -1rem;\n  border-radius: 0.3rem;\n}\n\n@media only screen and (max-width: 800px) {\n  .arrow-ribbon2 {\n    font-size: 22px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .arrow-ribbon2:before {\n    left: 100%;\n    width: unset;\n    border-top: 15px solid transparent;\n    border-bottom: 15px solid transparent;\n    border-left: 15px solid #e72a1a;\n  }\n}\n\nion-item {\n  --inner-padding-end: 0.4rem;\n  --padding-start: 0.4rem;\n  --background: var(\n  \t--ion-item-background,\n  \tvar(--ion-background-color, #f1f5fd)\n  );\n}\n\nion-content {\n  --background: #f1f5fd;\n}\n\nion-title {\n  padding: 0 !important;\n}\n\n.mat-expansion-panel-header-title,\n.mat-expansion-panel-header-description {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzaXQvdmlzaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxxQkFBQTtBQUNEOztBQUVBO0VBQ0MscUJBQUE7QUFDRDs7QUFBQztFQUNDLGVBQUE7QUFFRjs7QUFBQztFQUNDLGlCQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFFQTtFQUNDO0lBQ0MsZUFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQUNBO0VBQUE7SUFDQyxVQUFBO0lBQ0EsWUFBQTtJQUNBLGtDQUFBO0lBQ0EscUNBQUE7SUFDQSwrQkFBQTtFQUVEO0FBQ0Y7O0FBRUE7RUFDQywyQkFBQTtFQUNBLHVCQUFBO0VBQ0E7OztHQUFBO0FBR0Q7O0FBR0E7RUFDQyxxQkFBQTtBQUFEOztBQUdBO0VBQ0MscUJBQUE7QUFBRDs7QUFHQTs7RUFFQyx5QkFBQTtBQUFEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlzaXQvdmlzaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWItaXRlbSBhIHtcblx0Y29sb3I6ICMzZjgwZmY7XG59XG5cbi5wYWdlLWhlYWRlciB7XG5cdG1hcmdpbi10b3A6IDAuN3JlbTtcblx0bWFyZ2luLWJvdHRvbTogMC43cmVtO1xufVxuXG4uY2FyZC1ib2R5IHtcblx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHQmID4gLml0ZW0tZGV0IHtcblx0XHRwYWRkaW5nOiAxLjVyZW07XG5cdH1cblx0JiA+IC5pdGVtLXNsaWRlcyB7XG5cdFx0bWFyZ2luLXRvcDogLTFyZW07XG5cdFx0Ym9yZGVyLXJhZGl1czogMC4zcmVtO1xuXHR9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcblx0LmFycm93LXJpYmJvbjIge1xuXHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGxlZnQ6IDEwMCU7XG5cdFx0XHR3aWR0aDogdW5zZXQ7XG5cdFx0XHRib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0XHRcdGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNlNzJhMWE7XG5cdFx0fVxuXHR9XG59XG5cbmlvbi1pdGVtIHtcblx0LS1pbm5lci1wYWRkaW5nLWVuZDogMC40cmVtO1xuXHQtLXBhZGRpbmctc3RhcnQ6IDAuNHJlbTtcblx0LS1iYWNrZ3JvdW5kOiB2YXIoXG5cdFx0LS1pb24taXRlbS1iYWNrZ3JvdW5kLFxuXHRcdHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjFmNWZkKVxuXHQpO1xufVxuXG5pb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogI2YxZjVmZDtcbn1cblxuaW9uLXRpdGxlIHtcblx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/visit/visit.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/visit/visit.page.ts ***!
  \*******************************************/
/*! exports provided: VisitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitPage", function() { return VisitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _services_noti_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/noti.service */ "./src/app/services/noti.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_deals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/deals.service */ "./src/app/services/deals.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");







let VisitPage = class VisitPage {
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
        this.now = new Date().toISOString();
        this.detail = {};
        this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
        this.afAuth.authState.subscribe((val) => {
            if (val) {
                this.userId = val;
            }
        });
        translate.addLangs(['en', 'kr']);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('kr');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('kr');
    }
    ngOnInit() {
        this.getDealDetail(this.id);
        this.getDealerInParticipant(this.id);
    }
    getDealDetail(id) {
        this.dealSub = this.dealsService.getDealDetail(id).subscribe((val) => {
            this.detail = Object.assign({}, val.payload.data());
        });
    }
    getDealerInParticipant(id) {
        this.dealsService.getDealerInParticipant(id).subscribe((val) => {
            if (val.length === 0) {
                return (this.participant = !Boolean(val));
            }
            else {
                return (this.participant = Boolean(val));
            }
        });
    }
    addVisitDate() {
        let time = new Date(this.selectDate);
        time.setMinutes(0);
        time.setSeconds(0);
        let unix = Math.floor(time.getTime() / 1000.0);
        this.dealsService.updateDeal(this.id, { visitDate: unix });
    }
    localeDate(time) {
        const myDate = new Date(time * 1000);
        return myDate.toLocaleString();
    }
    ngOnDestroy() {
        if (this.dealSub) {
            this.dealSub.unsubscribe();
        }
    }
};
VisitPage.ctorParameters = () => [
    { type: _services_deals_service__WEBPACK_IMPORTED_MODULE_5__["DealsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_noti_service__WEBPACK_IMPORTED_MODULE_3__["NotiService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
];
VisitPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-visit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./visit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/visit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./visit.page.scss */ "./src/app/pages/visit/visit.page.scss")).default]
    })
], VisitPage);



/***/ })

}]);
//# sourceMappingURL=pages-visit-visit-module-es2015.js.map