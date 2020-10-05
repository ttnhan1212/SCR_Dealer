(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-visit-paymentcomplete-certificationupload-certificationupload-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button slot=\"end\" fill=\"clear\" [routerLink]=\"['/','home','deal']\">\n\t\t\t<ion-icon name=\"log-out-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"deal?.status >= 7 && deal?.status < 9\" class=\"container\">\n\t<ion-card class=\"text-center vertical-center\">\n\t\t<img\n\t\t\tsrc=\"../../../../../assets/images/cars/2020_nissan_gt_r_nismo_v5-wallpaper-1920x1080.jpg\"\n\t\t\talt=\"../../../../../assets/images/admin-media/0-10.jpg\"\n\t\t/>\n\t\t<ion-card-header> Seller is making review </ion-card-header>\n\t\t<ion-card-content> Please wait.... </ion-card-content>\n\t</ion-card>\n</ion-content>\n\n<ion-content *ngIf=\"deal?.status === 9\">\n\t<ion-card>\n\t\t<ion-card-content>\n\t\t\t<form>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<ngx-dropzone (change)=\"onSelect($event)\">\n\t\t\t\t\t\t<ngx-dropzone-label\n\t\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.upload_cert_instruction' |\n\t\t\t\t\t\t\ttranslate}}</ngx-dropzone-label\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<ngx-dropzone-image-preview\n\t\t\t\t\t\t\tngProjectAs=\"ngx-dropzone-preview\"\n\t\t\t\t\t\t\t*ngFor=\"let f of files\"\n\t\t\t\t\t\t\t[file]=\"f\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t\t\t</ngx-dropzone>\n\t\t\t\t</div>\n\t\t\t\t<br />\n\t\t\t\t<ion-item class=\"form-group\" lines=\"none\">\n\t\t\t\t\t<h1>\n\t\t\t\t\t\t<span style=\"padding-right: 15px\">2009</span\n\t\t\t\t\t\t><span style=\"padding-right: 15px\">K-5</span\n\t\t\t\t\t\t><span style=\"padding-right: 15px; font-size: 11pt\">12가1234</span>\n\t\t\t\t\t</h1>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label style=\"color: #808080\"\n\t\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.purchase_amount' |\n\t\t\t\t\t\t\ttranslate}}</ion-label\n\t\t\t\t\t\t>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label style=\"font-size: 24px\">1,999,000</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label style=\"color: #808080\"\n\t\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.purchase_date' |\n\t\t\t\t\t\t\ttranslate}}</ion-label\n\t\t\t\t\t\t>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label style=\"font-size: 24px\">2020-05-01 11:30</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t<br />\n\t\t\t\t<div id=\"uploadCertBtn\" *ngIf=\"!isShow\">\n\t\t\t\t\t<ion-button\n\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\tsize=\"medium\"\n\t\t\t\t\t\tclass=\"uploadbtn\"\n\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.upload_certification' |\n\t\t\t\t\t\ttranslate}}</ion-button\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"fileExist\" *ngIf=\"isShow\">\n\t\t\t\t\t<div class=\"text-content\" style=\"color: black\">\n\t\t\t\t\t\tLorem Ipsum is simply dummy text of the printing and typesetting\n\t\t\t\t\t\tindustry. Lorem Ipsum has been the industry's standard dummy text\n\t\t\t\t\t\tever since the 1500s, when an unknown printer took a galley of type\n\t\t\t\t\t\tand scrambled it to make a type specimen book. It has survived not\n\t\t\t\t\t\tonly five centuries, but also the leap into electronic typesetting,\n\t\t\t\t\t</div>\n\t\t\t\t\t<br />\n\t\t\t\t\t<ion-button\n\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\tsize=\"medium\"\n\t\t\t\t\t\t(click)=\"paymentComplete()\"\n\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.payment_complete' |\n\t\t\t\t\t\ttranslate}}</ion-button\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CertificationuploadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationuploadPageRoutingModule", function() { return CertificationuploadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _certificationupload_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./certificationupload.page */ "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.ts");




const routes = [
    {
        path: '',
        component: _certificationupload_page__WEBPACK_IMPORTED_MODULE_3__["CertificationuploadPage"]
    }
];
let CertificationuploadPageRoutingModule = class CertificationuploadPageRoutingModule {
};
CertificationuploadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CertificationuploadPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: HttpLoaderFactory, CertificationuploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationuploadPageModule", function() { return CertificationuploadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/__ivy_ngcc__/fesm2015/ngx-dropzone.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _certificationupload_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./certificationupload-routing.module */ "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload-routing.module.ts");
/* harmony import */ var _certificationupload_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./certificationupload.page */ "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");












function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http);
}
let CertificationuploadPageModule = class CertificationuploadPageModule {
};
CertificationuploadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__["NgxDropzoneModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
            _certificationupload_routing_module__WEBPACK_IMPORTED_MODULE_7__["CertificationuploadPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]],
                }
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ],
        declarations: [_certificationupload_page__WEBPACK_IMPORTED_MODULE_8__["CertificationuploadPage"]]
    })
], CertificationuploadPageModule);



/***/ }),

/***/ "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".smllogo__img {\n  height: 2.6rem;\n}\n\ntextarea {\n  height: 100px !important;\n}\n\n.breadcrumb-item a {\n  color: #3f80ff;\n}\n\n.page-header {\n  margin-top: 0.7rem;\n}\n\n.mylabel {\n  font-family: \"Noto Sans KR\";\n  font-size: 14px;\n}\n\n.mytimepicker {\n  font-size: 14px;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\n* {\n  font-family: \"Noto Sans KR\", sans-serif !important;\n}\n\n.text-content {\n  min-height: 150px;\n  text-align: center;\n  border: 1px solid #000080;\n}\n\n.container {\n  height: 100vh;\n  position: relative;\n}\n\n.vertical-center {\n  position: absolute;\n  top: 45%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzaXQvcGF5bWVudGNvbXBsZXRlL2NlcnRpZmljYXRpb251cGxvYWQvY2VydGlmaWNhdGlvbnVwbG9hZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxjQUFBO0FBQUY7O0FBSUE7RUFDQyx3QkFBQTtBQUREOztBQUlBO0VBQ0MsY0FBQTtBQUREOztBQUlBO0VBQ0Msa0JBQUE7QUFERDs7QUFJQTtFQUNDLDJCQUFBO0VBQ0EsZUFBQTtBQUREOztBQUlBO0VBQ0MsZUFBQTtBQUREOztBQUlBO0VBQ0Msd0JBQUE7RUFDQSxvQkFBQTtBQUREOztBQUlBO0VBQ0Msa0RBQUE7QUFERDs7QUFJQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUREOztBQUlBO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0FBREQ7O0FBSUE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFFQSwyQkFBQTtBQUREIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlzaXQvcGF5bWVudGNvbXBsZXRlL2NlcnRpZmljYXRpb251cGxvYWQvY2VydGlmaWNhdGlvbnVwbG9hZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21sbG9nbyB7XG5cdCZfX2ltZyB7XG5cdFx0aGVpZ2h0OiAyLjZyZW07XG5cdH1cbn1cblxudGV4dGFyZWEge1xuXHRoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5icmVhZGNydW1iLWl0ZW0gYSB7XG5cdGNvbG9yOiAjM2Y4MGZmO1xufVxuXG4ucGFnZS1oZWFkZXIge1xuXHRtYXJnaW4tdG9wOiAwLjdyZW07XG59XG5cbi5teWxhYmVsIHtcblx0Zm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS1InO1xuXHRmb250LXNpemU6IDE0cHg7XG59XG5cbi5teXRpbWVwaWNrZXIge1xuXHRmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pdGVtIHtcblx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXHQtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuKiB7XG5cdGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jb250ZW50IHtcblx0bWluLWhlaWdodDogMTUwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwMDA4MDtcbn1cblxuLmNvbnRhaW5lciB7XG5cdGhlaWdodDogMTAwdmg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnZlcnRpY2FsLWNlbnRlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA0NSU7XG5cdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.ts ***!
  \*********************************************************************************************/
/*! exports provided: CertificationuploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationuploadPage", function() { return CertificationuploadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/deals.service */ "./src/app/services/deals.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let CertificationuploadPage = class CertificationuploadPage {
    constructor(translate, dealService, route, router, loader) {
        this.dealService = dealService;
        this.route = route;
        this.router = router;
        this.loader = loader;
        this.files = [];
        this.isShow = false;
        this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
        translate.addLangs(['en', 'kr']);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('kr');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('kr');
    }
    ngOnInit() {
        this.getDealDetail();
    }
    getDealDetail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loader.showLoader();
            yield this.dealService.getDealDetail(this.id).subscribe((val) => {
                this.deal = val.payload.data();
                this.loader.hideLoader();
                console.log(this.deal);
            });
        });
    }
    onSelect(event) {
        console.log(event);
        this.files.push(...event.addedFiles);
        if (this.files) {
            this.isShow = !this.isShow;
        }
    }
    paymentComplete() {
        let content = {};
        this.dealService.createPayment(this.id, content);
        this.dealService.updateDeal(this.id, { status: 10 });
        this.router.navigate(['/', 'home', 'deal']);
    }
};
CertificationuploadPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_3__["DealsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }
];
CertificationuploadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-certificationupload',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./certificationupload.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./certificationupload.page.scss */ "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.scss")).default]
    })
], CertificationuploadPage);



/***/ })

}]);
//# sourceMappingURL=pages-visit-paymentcomplete-certificationupload-certificationupload-module-es2015.js.map