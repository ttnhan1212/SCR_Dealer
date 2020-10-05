(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-visit-result-result-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/result/result.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/result/result.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button slot=\"end\" fill=\"clear\" [routerLink]=\"['/','home','deal']\">\n\t\t\t<ion-icon name=\"log-out-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-title class=\"text-center title\">{{'home_visit_result.select_visit_result' | translate}}</ion-title>\n\t<div class=\"result-button\">\n\t\t<ion-button\n\t\t\texpand=\"full\"\n\t\t\tcolor=\"tertiary\"\n\t\t\tsize=\"large\"\n\t\t\t[routerLink]=\"['/','home','visit','result','paymentcomplete',this.id]\"\n\t\t\t>{{'home_visit_result.purchase_confirm' | translate}}\n\t\t</ion-button>\n\t\t<ion-button\n\t\t\texpand=\"full\"\n\t\t\tcolor=\"tertiary\"\n\t\t\tsize=\"large\"\n\t\t\t[routerLink]=\"['/','home','visit','result','revisit',this.id]\"\n\t\t\t>{{'home_visit_result.revisit' | translate}}\n\t\t</ion-button>\n\t\t<ion-button\n\t\t\texpand=\"full\"\n\t\t\tcolor=\"tertiary\"\n\t\t\tsize=\"large\"\n\t\t\t[routerLink]=\"['/','home','visit','result','paymentcancel',this.id]\"\n\t\t\t>{{'home_visit_result.purchase_cacel' | translate}}\n\t\t</ion-button>\n\t</div>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".smllogo {\n  width: 7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWxsb2dvIHtcblx0d2lkdGg6IDdyZW07XG59XG4iXX0= */");

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

/***/ "./src/app/pages/visit/result/result-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/visit/result/result-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ResultPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageRoutingModule", function() { return ResultPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./result.page */ "./src/app/pages/visit/result/result.page.ts");




const routes = [
    {
        path: '',
        component: _result_page__WEBPACK_IMPORTED_MODULE_3__["ResultPage"]
    }
];
let ResultPageRoutingModule = class ResultPageRoutingModule {
};
ResultPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResultPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/visit/result/result.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/visit/result/result.module.ts ***!
  \*****************************************************/
/*! exports provided: HttpLoaderFactory, ResultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageModule", function() { return ResultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _result_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result-routing.module */ "./src/app/pages/visit/result/result-routing.module.ts");
/* harmony import */ var _result_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result.page */ "./src/app/pages/visit/result/result.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
}
let ResultPageModule = class ResultPageModule {
};
ResultPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _result_routing_module__WEBPACK_IMPORTED_MODULE_6__["ResultPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]],
                }
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ],
        declarations: [_result_page__WEBPACK_IMPORTED_MODULE_7__["ResultPage"]],
    })
], ResultPageModule);



/***/ }),

/***/ "./src/app/pages/visit/result/result.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/visit/result/result.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  margin-top: 5rem;\n  height: 20vh;\n  font-size: 32px;\n  line-height: normal;\n}\n\n.result-button ion-button {\n  margin-bottom: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzaXQvcmVzdWx0L3Jlc3VsdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0EsbUJBQUE7QUFBRDs7QUFJQztFQUNDLG1CQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aXNpdC9yZXN1bHQvcmVzdWx0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG5cdG1hcmdpbi10b3A6IDVyZW07XG5cdGhlaWdodDogMjB2aDtcblxuXHRmb250LXNpemU6IDMycHg7XG5cdGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5yZXN1bHQtYnV0dG9uIHtcblx0JiBpb24tYnV0dG9uIHtcblx0XHRtYXJnaW4tYm90dG9tOiAzcmVtO1xuXHR9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/visit/result/result.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/visit/result/result.page.ts ***!
  \***************************************************/
/*! exports provided: ResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPage", function() { return ResultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let ResultPage = class ResultPage {
    constructor(route, translate) {
        this.route = route;
        this.id = this.route.snapshot.paramMap.get("id"); //get id parameter
        translate.addLangs(["en", "kr"]);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang("kr");
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use("kr");
    }
    ngOnInit() { }
};
ResultPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
];
ResultPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-result",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./result.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/result/result.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./result.page.scss */ "./src/app/pages/visit/result/result.page.scss")).default]
    })
], ResultPage);



/***/ })

}]);
//# sourceMappingURL=pages-visit-result-result-module-es2015.js.map