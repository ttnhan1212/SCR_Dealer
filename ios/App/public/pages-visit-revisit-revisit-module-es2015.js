(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-visit-revisit-revisit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/revisit/revisit.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/revisit/revisit.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button slot=\"end\" fill=\"clear\" [routerLink]=\"['/','home','deal']\">\n\t\t\t<ion-icon name=\"log-out-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card>\n\t\t<ion-card-content>\n\t\t\t<form [formGroup]=\"revisitForm\">\n\t\t\t\t<ion-item class=\"form-group\">\n\t\t\t\t\t<ion-label position=\"floating\">{{'home_visit_result_revisit.visit_result' | translate}}</ion-label>\n\t\t\t\t\t<ion-input type=\"text\" readonly value=\"{{'home_visit_result_revisit.visit_result' | translate}}\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-group\">\n\t\t\t\t\t<ion-label position=\"floating\">{{'home_visit_result_revisit.revisit_reason' |\n\t\t\t\t\t\ttranslate}}</ion-label>\n\t\t\t\t\t<ion-textarea rows=\"5\" [formControl]=\"reason\"></ion-textarea>\n\t\t\t\t</ion-item>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<ngx-dropzone (change)=\"onSelect($event)\">\n\t\t\t\t\t\t<ngx-dropzone-label>{{'home_visit_result_revisit.upload_instruction' |\n\t\t\t\t\t\t\ttranslate}}</ngx-dropzone-label>\n\t\t\t\t\t\t<ngx-dropzone-image-preview ngProjectAs=\"ngx-dropzone-preview\" *ngFor=\"let f of files\" [file]=\"f\">\n\t\t\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t\t\t</ngx-dropzone>\n\t\t\t\t</div>\n\t\t\t\t<ion-item class=\"form-group\">\n\t\t\t\t\t<ion-label position=\"floating\">{{'home_visit_result_revisit.revisit_date' | translate}}</ion-label>\n\t\t\t\t\t<ion-datetime displayFormat=\"D MMM YYYY H A\" [min]=\"now\" [formControl]=\"date\"></ion-datetime>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item class=\"form-group\">\n\t\t\t\t\t<ion-label position=\"floating\">{{'home_visit_result_revisit.other' | translate}}</ion-label>\n\t\t\t\t\t<ion-textarea rows=\"5\" [formControl]=\"other\"></ion-textarea>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-button expand=\"block\" color=\"tertiary\" (click)=\"revisitSubmit()\">\n\t\t\t\t\t{{'home_visit_result_revisit.confirm' | translate}}</ion-button>\n\t\t\t</form>\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/visit/revisit/revisit-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/visit/revisit/revisit-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: RevisitPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisitPageRoutingModule", function() { return RevisitPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _revisit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./revisit.page */ "./src/app/pages/visit/revisit/revisit.page.ts");




const routes = [
    {
        path: '',
        component: _revisit_page__WEBPACK_IMPORTED_MODULE_3__["RevisitPage"]
    }
];
let RevisitPageRoutingModule = class RevisitPageRoutingModule {
};
RevisitPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RevisitPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/visit/revisit/revisit.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/visit/revisit/revisit.module.ts ***!
  \*******************************************************/
/*! exports provided: HttpLoaderFactory, RevisitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisitPageModule", function() { return RevisitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _revisit_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./revisit-routing.module */ "./src/app/pages/visit/revisit/revisit-routing.module.ts");
/* harmony import */ var _revisit_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./revisit.page */ "./src/app/pages/visit/revisit/revisit.page.ts");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/__ivy_ngcc__/fesm2015/ngx-dropzone.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");












function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http);
}
let RevisitPageModule = class RevisitPageModule {
};
RevisitPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _revisit_routing_module__WEBPACK_IMPORTED_MODULE_6__["RevisitPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
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
        declarations: [_revisit_page__WEBPACK_IMPORTED_MODULE_7__["RevisitPage"]],
    })
], RevisitPageModule);



/***/ }),

/***/ "./src/app/pages/visit/revisit/revisit.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/visit/revisit/revisit.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  padding: 0 !important;\n}\n\ntextarea {\n  height: 100px !important;\n}\n\n.breadcrumb-item a {\n  color: #3f80ff;\n}\n\n.page-header {\n  margin-top: 0.7rem;\n}\n\n.mylabel {\n  font-family: \"Noto Sans KR\";\n  font-size: 14px;\n}\n\n.mytimepicker {\n  font-size: 14px;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzaXQvcmV2aXNpdC9yZXZpc2l0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHFCQUFBO0FBQ0Q7O0FBRUE7RUFDSSx3QkFBQTtBQUNKOztBQUVBO0VBQ0MsY0FBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7QUFDRDs7QUFFQTtFQUNDLDJCQUFBO0VBQ0EsZUFBQTtBQUNEOztBQUVBO0VBQ0MsZUFBQTtBQUNEOztBQUVBO0VBQ0Msd0JBQUE7RUFDQSxvQkFBQTtBQUNEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlzaXQvcmV2aXNpdC9yZXZpc2l0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG5cdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWEge1xuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmJyZWFkY3J1bWItaXRlbSBhIHtcblx0Y29sb3I6ICMzZjgwZmY7XG59XG5cbi5wYWdlLWhlYWRlciB7XG5cdG1hcmdpbi10b3A6IDAuN3JlbTtcbn1cblxuLm15bGFiZWwge1xuXHRmb250LWZhbWlseTogJ05vdG8gU2FucyBLUic7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm15dGltZXBpY2tlciB7XG5cdGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWl0ZW0ge1xuXHQtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cdC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/visit/revisit/revisit.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/visit/revisit/revisit.page.ts ***!
  \*****************************************************/
/*! exports provided: RevisitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevisitPage", function() { return RevisitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/deals.service */ "./src/app/services/deals.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _services_result_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/result.service */ "./src/app/services/result.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");









let RevisitPage = class RevisitPage {
    constructor(translate, result, fb, loading, afAuth, route, router, dealService) {
        this.result = result;
        this.fb = fb;
        this.loading = loading;
        this.afAuth = afAuth;
        this.route = route;
        this.router = router;
        this.dealService = dealService;
        this.now = new Date().toISOString();
        this.files = [];
        this.reason = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        this.other = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
        translate.addLangs(['en', 'kr']);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('kr');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('kr');
        this.revisitForm = this.fb.group({
            result: 'Revisit',
            reason: this.reason,
            other: this.other,
            requestId: this.id,
            date: this.date,
        });
    }
    ngOnInit() { }
    onSelect(event) {
        console.log(event);
        this.files.push(...event.addedFiles);
    }
    onRemove(event) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
    }
    revisitSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { date } = this.revisitForm.value;
            let time = new Date(date);
            time.setMinutes(0);
            time.setSeconds(0);
            let unix = Math.floor(time.getTime() / 1000.0);
            this.revisitForm.patchValue({
                date: unix,
            });
            yield this.dealService.updateDeal(this.id, { visitDate: unix });
            yield this.result.createResult(this.revisitForm.value);
            yield this.router.navigate(['/', 'home', 'ongoing']);
        });
    }
    localeDate(time) {
        const myDate = new Date(time * 1000);
        return myDate.toLocaleString();
    }
};
RevisitPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _services_result_service__WEBPACK_IMPORTED_MODULE_5__["ResultService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_1__["DealsService"] }
];
RevisitPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-revisit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./revisit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/revisit/revisit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./revisit.page.scss */ "./src/app/pages/visit/revisit/revisit.page.scss")).default]
    })
], RevisitPage);



/***/ })

}]);
//# sourceMappingURL=pages-visit-revisit-revisit-module-es2015.js.map