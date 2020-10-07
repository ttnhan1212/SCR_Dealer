(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-visit-paymentcomplete-paymentcomplete-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/paymentcomplete/paymentcomplete.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/paymentcomplete/paymentcomplete.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button slot=\"end\" fill=\"clear\" [routerLink]=\"['/','home','deal']\">\n\t\t\t<ion-icon name=\"log-out-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card>\n\t\t<ion-card-content *ngIf=\"deal\">\n\t\t\t<form [formGroup]=\"completeForm\">\n\t\t\t\t<ion-item class=\"form-group\">\n\t\t\t\t\t<ion-label position=\"floating\" style=\"font-size: 14pt\"\n\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.visit_result' |\n\t\t\t\t\t\ttranslate}}</ion-label\n\t\t\t\t\t>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tplaceholder=\"{{'home_visit_result_paymentcomplete.purchase_confirm' | translate}}\"\n\t\t\t\t\t\treadonly\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-group\">\n\t\t\t\t\t<ion-label position=\"floating\" style=\"font-size: 14pt\"\n\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.bid_amount' |\n\t\t\t\t\t\ttranslate}}</ion-label\n\t\t\t\t\t>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tdisabled\n\t\t\t\t\t\treadonly=\"true\"\n\t\t\t\t\t\tplaceholder=\"{{deal.participants[1] | number}}\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-group\">\n\t\t\t\t\t<ion-label position=\"floating\" style=\"font-size: 14pt\"\n\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.final_amount' |\n\t\t\t\t\t\ttranslate}}</ion-label\n\t\t\t\t\t>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\tplaceholder=\"{{'home_visit_result_paymentcomplete.input_desire_amount' | translate}}\"\n\t\t\t\t\t\t[formControl]=\"finalAmount\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<br />\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<ngx-dropzone (change)=\"onSelect($event)\">\n\t\t\t\t\t\t<ngx-dropzone-label\n\t\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.upload_instruction' |\n\t\t\t\t\t\t\ttranslate}}</ngx-dropzone-label\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<ngx-dropzone-image-preview\n\t\t\t\t\t\t\tngProjectAs=\"ngx-dropzone-preview\"\n\t\t\t\t\t\t\t*ngFor=\"let f of files\"\n\t\t\t\t\t\t\t[file]=\"f\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t\t\t</ngx-dropzone>\n\t\t\t\t</div>\n\t\t\t\t<ion-item class=\"form-group\">\n\t\t\t\t\t<ion-label position=\"floating\" style=\"font-size: 14pt\"\n\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.other' |\n\t\t\t\t\t\ttranslate}}</ion-label\n\t\t\t\t\t>\n\t\t\t\t\t<ion-textarea\n\t\t\t\t\t\trows=\"5\"\n\t\t\t\t\t\tplaceholder=\"{{'home_visit_result_paymentcomplete.write_notes_hate' | translate}}\"\n\t\t\t\t\t\t[formControl]=\"other\"\n\t\t\t\t\t></ion-textarea>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-button expand=\"block\" color=\"tertiary\" (click)=\"completeRequest()\"\n\t\t\t\t\t>{{'home_visit_result_paymentcomplete.confirm' |\n\t\t\t\t\ttranslate}}</ion-button\n\t\t\t\t>\n\t\t\t</form>\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/visit/paymentcomplete/paymentcomplete-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/visit/paymentcomplete/paymentcomplete-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PaymentcompletePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentcompletePageRoutingModule", function() { return PaymentcompletePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _paymentcomplete_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymentcomplete.page */ "./src/app/pages/visit/paymentcomplete/paymentcomplete.page.ts");




const routes = [
    {
        path: '',
        component: _paymentcomplete_page__WEBPACK_IMPORTED_MODULE_3__["PaymentcompletePage"],
    },
];
let PaymentcompletePageRoutingModule = class PaymentcompletePageRoutingModule {
};
PaymentcompletePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentcompletePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/visit/paymentcomplete/paymentcomplete.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/visit/paymentcomplete/paymentcomplete.module.ts ***!
  \***********************************************************************/
/*! exports provided: HttpLoaderFactory, PaymentcompletePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentcompletePageModule", function() { return PaymentcompletePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/__ivy_ngcc__/fesm2015/ngx-dropzone.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _paymentcomplete_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paymentcomplete-routing.module */ "./src/app/pages/visit/paymentcomplete/paymentcomplete-routing.module.ts");
/* harmony import */ var _paymentcomplete_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paymentcomplete.page */ "./src/app/pages/visit/paymentcomplete/paymentcomplete.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");














function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http);
}
let PaymentcompletePageModule = class PaymentcompletePageModule {
};
PaymentcompletePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _paymentcomplete_routing_module__WEBPACK_IMPORTED_MODULE_9__["PaymentcompletePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_3__["NgxDropzoneModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]],
                },
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ],
        declarations: [_paymentcomplete_page__WEBPACK_IMPORTED_MODULE_10__["PaymentcompletePage"]],
    })
], PaymentcompletePageModule);



/***/ }),

/***/ "./src/app/pages/visit/paymentcomplete/paymentcomplete.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/visit/paymentcomplete/paymentcomplete.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  padding: 0 !important;\n}\n\ntextarea {\n  height: 100px !important;\n}\n\n.breadcrumb-item a {\n  color: #3f80ff;\n}\n\n.page-header {\n  margin-top: 0.7rem;\n}\n\n.mylabel {\n  font-family: \"Noto Sans KR\";\n  font-size: 14px;\n}\n\n.mytimepicker {\n  font-size: 14px;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\n* {\n  font-family: \"Noto Sans KR\", sans-serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzaXQvcGF5bWVudGNvbXBsZXRlL3BheW1lbnRjb21wbGV0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxxQkFBQTtBQUNEOztBQUVBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNDLGNBQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0FBQ0Q7O0FBRUE7RUFDQywyQkFBQTtFQUNBLGVBQUE7QUFDRDs7QUFFQTtFQUNDLGVBQUE7QUFDRDs7QUFFQTtFQUNDLHdCQUFBO0VBQ0Esb0JBQUE7QUFDRDs7QUFFQTtFQUNDLGtEQUFBO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aXNpdC9wYXltZW50Y29tcGxldGUvcGF5bWVudGNvbXBsZXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWEge1xuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSBhIHtcblx0Y29sb3I6ICMzZjgwZmY7XG59XG5cbi5wYWdlLWhlYWRlciB7XG5cdG1hcmdpbi10b3A6IDAuN3JlbTtcbn1cblxuLm15bGFiZWwge1xuXHRmb250LWZhbWlseTogJ05vdG8gU2FucyBLUic7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm15dGltZXBpY2tlciB7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWl0ZW0ge1xuXHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4qIHtcblx0Zm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS1InLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/visit/paymentcomplete/paymentcomplete.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/visit/paymentcomplete/paymentcomplete.page.ts ***!
  \*********************************************************************/
/*! exports provided: PaymentcompletePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentcompletePage", function() { return PaymentcompletePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_deals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/deals.service */ "./src/app/services/deals.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_result_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/result.service */ "./src/app/services/result.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










let PaymentcompletePage = class PaymentcompletePage {
    constructor(dealService, route, router, translate, payment, result, fb, loading, afAuth) {
        this.dealService = dealService;
        this.route = route;
        this.router = router;
        this.translate = translate;
        this.payment = payment;
        this.result = result;
        this.fb = fb;
        this.loading = loading;
        this.afAuth = afAuth;
        this.now = new Date().toISOString();
        this.files = [];
        this.finalAmount = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](null);
        this.other = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.dateObj = new Date();
        this.purchaseDate = null;
        this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
        this.translate.addLangs(['en', 'kr']);
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('kr');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('kr');
        this.dateObj.setMinutes(0);
        this.dateObj.setSeconds(0);
        this.purchaseDate = Math.floor(this.dateObj.getTime() / 1000.0);
    }
    ngOnInit() {
        this.getUser();
    }
    getUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.authState.subscribe((authState) => {
                if (authState) {
                    this.userId = authState.uid;
                    this.getDealDetail();
                    this.completeForm = this.fb.group({
                        result: 'Purchase Confirm',
                        final_amount: this.finalAmount,
                        other: this.other,
                        requestId: this.id,
                        dealerId: this.userId,
                    });
                }
                console.log(this.completeForm.value);
            });
        });
    }
    getDealDetail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loading.showLoader();
            yield this.dealService.getDealDetail(this.id).subscribe((val) => {
                this.deal = val.payload.data();
            });
            yield this.loading.hideLoader();
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
    console() {
        const { final_amount } = this.completeForm.value;
        console.log(final_amount);
        console.log(this.completeForm.value);
    }
    completeRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { final_amount } = this.completeForm.value;
            let content = {
                request_id: this.id,
                dealer_id: this.userId,
                purchase_date: this.purchaseDate,
                status: 1,
                amount: 50000,
            };
            yield this.result.createResult(this.completeForm.value);
            yield this.dealService.updateDeal(this.id, {
                finalPrice: final_amount ? final_amount : 0,
                status: 7,
            });
            yield this.dealService.updateDealInDealer(this.id, {
                final_price: final_amount ? final_amount : 0,
                status: 'Waiting',
            });
            yield this.payment.createPayment(content);
            yield this.router.navigate(['certificationupload', this.id]);
        });
    }
    localeDate(time) {
        const myDate = new Date(time * 1000);
        return myDate.toLocaleString();
    }
};
PaymentcompletePage.ctorParameters = () => [
    { type: _services_deals_service__WEBPACK_IMPORTED_MODULE_6__["DealsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _services_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"] },
    { type: src_app_services_result_service__WEBPACK_IMPORTED_MODULE_8__["ResultService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }
];
PaymentcompletePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-paymentcomplete',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./paymentcomplete.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/paymentcomplete/paymentcomplete.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./paymentcomplete.page.scss */ "./src/app/pages/visit/paymentcomplete/paymentcomplete.page.scss")).default]
    })
], PaymentcompletePage);



/***/ }),

/***/ "./src/app/services/payment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let PaymentService = class PaymentService {
    constructor(fireStore) {
        this.fireStore = fireStore;
    }
    createPayment(content) {
        this.fireStore.collection('Payment').add(content);
    }
};
PaymentService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }
];
PaymentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], PaymentService);



/***/ })

}]);
//# sourceMappingURL=pages-visit-paymentcomplete-paymentcomplete-module-es2015.js.map