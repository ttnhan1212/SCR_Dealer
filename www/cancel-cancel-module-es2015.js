(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cancel-cancel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/cancel/cancel.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/cancel/cancel.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Cancel</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-item class=\"mt-10\">\n\t\t<ion-label position=\"floating\">Cancel Reason</ion-label>\n\t\t<ion-textarea [(ngModel)]=\"message\" class=\"cancel-input\"></ion-textarea>\n\t</ion-item>\n\t<ion-button\n\t\tclass=\"mt-5\"\n\t\texpand=\"block\"\n\t\tcolor=\"primary\"\n\t\t(click)=\"submitCancel()\"\n\t>\n\t\tSubmit\n\t</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/navigation/ongoing/cancel/cancel-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/cancel/cancel-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: CancelPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelPageRoutingModule", function() { return CancelPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cancel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancel.page */ "./src/app/pages/navigation/ongoing/cancel/cancel.page.ts");




const routes = [
    {
        path: '',
        component: _cancel_page__WEBPACK_IMPORTED_MODULE_3__["CancelPage"]
    }
];
let CancelPageRoutingModule = class CancelPageRoutingModule {
};
CancelPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CancelPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/navigation/ongoing/cancel/cancel.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/cancel/cancel.module.ts ***!
  \******************************************************************/
/*! exports provided: CancelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelPageModule", function() { return CancelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cancel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel-routing.module */ "./src/app/pages/navigation/ongoing/cancel/cancel-routing.module.ts");
/* harmony import */ var _cancel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel.page */ "./src/app/pages/navigation/ongoing/cancel/cancel.page.ts");







let CancelPageModule = class CancelPageModule {
};
CancelPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cancel_routing_module__WEBPACK_IMPORTED_MODULE_5__["CancelPageRoutingModule"]],
        declarations: [_cancel_page__WEBPACK_IMPORTED_MODULE_6__["CancelPage"]],
    })
], CancelPageModule);



/***/ }),

/***/ "./src/app/pages/navigation/ongoing/cancel/cancel.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/cancel/cancel.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cancel-input > div > textarea {\n  min-height: 15rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9vbmdvaW5nL2NhbmNlbC9jYW5jZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0MsNEJBQUE7QUFESCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vb25nb2luZy9jYW5jZWwvY2FuY2VsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW5jZWwtaW5wdXQge1xuXHQmID4gZGl2IHtcblx0XHQmID4gdGV4dGFyZWEge1xuXHRcdFx0bWluLWhlaWdodDogMTVyZW0gIWltcG9ydGFudDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/navigation/ongoing/cancel/cancel.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/navigation/ongoing/cancel/cancel.page.ts ***!
  \****************************************************************/
/*! exports provided: CancelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelPage", function() { return CancelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_noti_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/noti.service */ "./src/app/services/noti.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/deals.service */ "./src/app/services/deals.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





let CancelPage = class CancelPage {
    constructor(dealService, notiService, route) {
        this.dealService = dealService;
        this.notiService = notiService;
        this.route = route;
        this.date = Math.floor(new Date().getTime() / 1000.0);
        this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
        if (localStorage.getItem('user')) {
            this.userId = JSON.parse(localStorage.getItem('user')).uid;
        }
    }
    ngOnInit() { }
    submitCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dealService.updateDeal(this.id, {
                cancelMessage: this.message,
                status: 'Canceled',
                updateDate: this.date,
                user: this.userId,
            });
            yield this.notiService.createNoti({
                requestId: this.id,
                status: 'Canceled',
                updateDate: this.userId,
            });
            yield this.dealService.getParticipant(this.id).subscribe((val) => {
                val.forEach((part) => {
                    this.dealService.deleteParticipant(this.id, part.payload.doc.id);
                });
            });
            yield this.dealService.updateDeal(this.id, {
                participants: { created: false },
            });
        });
    }
};
CancelPage.ctorParameters = () => [
    { type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_3__["DealsService"] },
    { type: _services_noti_service__WEBPACK_IMPORTED_MODULE_1__["NotiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CancelPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-cancel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cancel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/cancel/cancel.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cancel.page.scss */ "./src/app/pages/navigation/ongoing/cancel/cancel.page.scss")).default]
    })
], CancelPage);



/***/ })

}]);
//# sourceMappingURL=cancel-cancel-module-es2015.js.map