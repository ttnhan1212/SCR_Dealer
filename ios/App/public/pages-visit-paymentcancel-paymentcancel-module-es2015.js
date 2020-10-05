(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-visit-paymentcancel-paymentcancel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/paymentcancel/paymentcancel.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/paymentcancel/paymentcancel.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button slot=\"end\" fill=\"clear\" [routerLink]=\"['/','home','deal']\">\n\t\t\t<ion-icon name=\"log-out-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card>\n\t\t<ion-card-content>\n\t\t\t<form [formGroup]=\"cancelForm\">\n\t\t\t\t<ion-item class=\"form-group\">\n\t\t\t\t\t<ion-label position=\"floating\"\n\t\t\t\t\t\t>{{'home_visit_result_paymentcancel.visit_result' |\n\t\t\t\t\t\ttranslate}}</ion-label\n\t\t\t\t\t>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tplaceholder=\"{{'home_visit_result_paymentcancel.visit_result_place_holder' | translate}}\"\n\t\t\t\t\t\treadonly\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-group\">\n\t\t\t\t\t<ion-label position=\"floating\"\n\t\t\t\t\t\t>{{'home_visit_result_paymentcancel.cacel_reason' |\n\t\t\t\t\t\ttranslate}}</ion-label\n\t\t\t\t\t>\n\t\t\t\t\t<ion-textarea rows=\"5\" [formControl]=\"reason\"></ion-textarea>\n\t\t\t\t</ion-item>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<ngx-dropzone (change)=\"onSelect($event)\">\n\t\t\t\t\t\t<ngx-dropzone-label\n\t\t\t\t\t\t\t>{{'home_visit_result_paymentcancel.upload_instruction' |\n\t\t\t\t\t\t\ttranslate}}</ngx-dropzone-label\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<ngx-dropzone-image-preview\n\t\t\t\t\t\t\tngProjectAs=\"ngx-dropzone-preview\"\n\t\t\t\t\t\t\t*ngFor=\"let f of files\"\n\t\t\t\t\t\t\t[file]=\"f\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t\t\t</ngx-dropzone>\n\t\t\t\t</div>\n\t\t\t\t<ion-item class=\"form-group\">\n\t\t\t\t\t<ion-label position=\"floating\"\n\t\t\t\t\t\t>{{'home_visit_result_paymentcancel.other' | translate}}</ion-label\n\t\t\t\t\t>\n\t\t\t\t\t<ion-textarea rows=\"5\" [formControl]=\"other\"></ion-textarea>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-button expand=\"block\" color=\"tertiary\" (click)=\"submitCancel()\"\n\t\t\t\t\t>{{'home_visit_result_paymentcancel.confirm' | translate}}</ion-button\n\t\t\t\t>\n\t\t\t</form>\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/visit/paymentcancel/paymentcancel-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/visit/paymentcancel/paymentcancel-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PaymentcancelPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentcancelPageRoutingModule", function() { return PaymentcancelPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _paymentcancel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymentcancel.page */ "./src/app/pages/visit/paymentcancel/paymentcancel.page.ts");




const routes = [
    {
        path: '',
        component: _paymentcancel_page__WEBPACK_IMPORTED_MODULE_3__["PaymentcancelPage"]
    }
];
let PaymentcancelPageRoutingModule = class PaymentcancelPageRoutingModule {
};
PaymentcancelPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentcancelPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/visit/paymentcancel/paymentcancel.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/visit/paymentcancel/paymentcancel.module.ts ***!
  \*******************************************************************/
/*! exports provided: HttpLoaderFactory, PaymentcancelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentcancelPageModule", function() { return PaymentcancelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _paymentcancel_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymentcancel-routing.module */ "./src/app/pages/visit/paymentcancel/paymentcancel-routing.module.ts");
/* harmony import */ var _paymentcancel_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paymentcancel.page */ "./src/app/pages/visit/paymentcancel/paymentcancel.page.ts");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/__ivy_ngcc__/fesm2015/ngx-dropzone.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");












function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http);
}
let PaymentcancelPageModule = class PaymentcancelPageModule {
};
PaymentcancelPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _paymentcancel_routing_module__WEBPACK_IMPORTED_MODULE_6__["PaymentcancelPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["NgxDropzoneModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]],
                },
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ],
        declarations: [_paymentcancel_page__WEBPACK_IMPORTED_MODULE_7__["PaymentcancelPage"]],
    })
], PaymentcancelPageModule);



/***/ }),

/***/ "./src/app/pages/visit/paymentcancel/paymentcancel.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/visit/paymentcancel/paymentcancel.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".smllogo__img {\n  height: 2.6rem;\n}\n\ntextarea {\n  height: 100px !important;\n}\n\n.breadcrumb-item a {\n  color: #3f80ff;\n}\n\n.page-header {\n  margin-top: 0.7rem;\n}\n\n.mylabel {\n  font-family: \"Noto Sans KR\";\n  font-size: 14px;\n}\n\n.mytimepicker {\n  font-size: 14px;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzaXQvcGF5bWVudGNhbmNlbC9wYXltZW50Y2FuY2VsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGNBQUE7QUFBRjs7QUFJQTtFQUNJLHdCQUFBO0FBREo7O0FBSUE7RUFDQyxjQUFBO0FBREQ7O0FBSUE7RUFDQyxrQkFBQTtBQUREOztBQUlBO0VBQ0MsMkJBQUE7RUFDQSxlQUFBO0FBREQ7O0FBSUE7RUFDQyxlQUFBO0FBREQ7O0FBSUE7RUFDQyx3QkFBQTtFQUNBLG9CQUFBO0FBREQiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aXNpdC9wYXltZW50Y2FuY2VsL3BheW1lbnRjYW5jZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNtbGxvZ28ge1xuXHQmX19pbWcge1xuXHRcdGhlaWdodDogMi42cmVtO1xuXHR9XG59XG5cbnRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0gYSB7XG5cdGNvbG9yOiAjM2Y4MGZmO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuXHRtYXJnaW4tdG9wOiAwLjdyZW07XG59XG5cbi5teWxhYmVsIHtcblx0Zm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS1InO1xuXHRmb250LXNpemU6IDE0cHg7XG59XG5cbi5teXRpbWVwaWNrZXIge1xuXHRmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pdGVtIHtcblx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/pages/visit/paymentcancel/paymentcancel.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/visit/paymentcancel/paymentcancel.page.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentcancelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentcancelPage", function() { return PaymentcancelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_deals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/deals.service */ "./src/app/services/deals.service.ts");
/* harmony import */ var _services_result_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/result.service */ "./src/app/services/result.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









let PaymentcancelPage = class PaymentcancelPage {
    constructor(translate, router, route, fb, result, dealService, loading, afAuth) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.result = result;
        this.dealService = dealService;
        this.loading = loading;
        this.afAuth = afAuth;
        this.authState = null;
        this.now = new Date().toISOString();
        this.date = Math.floor(new Date().getTime() / 1000.0);
        this.files = [];
        this.reason = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
        this.other = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required);
        this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
        translate.addLangs(['en', 'kr']);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('kr');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('kr');
        this.cancelForm = this.fb.group({
            result: 'Cancel',
            reason: this.reason,
            other: this.other,
            cancelDate: this.date,
            dealerId: this.userId,
            requestId: this.id,
        });
        this.afAuth.authState.subscribe((authState) => {
            this.authState = authState;
            if (this.authState) {
                this.userId = this.authState.uid;
            }
        });
    }
    ngOnInit() { }
    submitCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading.showLoader();
            yield this.result.createResult(this.cancelForm.value);
            yield this.dealService.updateDeal(this.id, {
                visitDate: null,
                participants: { created: false },
                status: 6,
            });
            yield this.dealService
                .getParticipantById(this.id, this.userId)
                .subscribe((val) => {
                val.forEach((part) => {
                    this.dealService.deleteParticipant(this.id, part.payload.doc.id);
                });
            });
            yield this.dealService.updateDealInDealer(this.id, { status: 'Cancel' });
            this.loading.hideLoader();
            yield this.router.navigate(['/', 'home', 'deal']);
        });
    }
    onSelect(event) {
        console.log(event);
        this.files.push(...event.addedFiles);
    }
    onRemove(event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }
    localeDate(time) {
        const myDate = new Date(time * 1000);
        return myDate.toLocaleString();
    }
};
PaymentcancelPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _services_result_service__WEBPACK_IMPORTED_MODULE_4__["ResultService"] },
    { type: _services_deals_service__WEBPACK_IMPORTED_MODULE_3__["DealsService"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }
];
PaymentcancelPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-paymentcancel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./paymentcancel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/paymentcancel/paymentcancel.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./paymentcancel.page.scss */ "./src/app/pages/visit/paymentcancel/paymentcancel.page.scss")).default]
    })
], PaymentcancelPage);



/***/ })

}]);
//# sourceMappingURL=pages-visit-paymentcancel-paymentcancel-module-es2015.js.map