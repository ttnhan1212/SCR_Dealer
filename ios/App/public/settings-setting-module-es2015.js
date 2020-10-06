(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-setting-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/settings/setting.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/settings/setting.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-label>{{'home_settings.edit_account_info' | translate}}</ion-label>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-button expand=\"block\" [routerLink]=\"[id]\" color=\"tertiary\">\n\t\t\t\t\t{{'home_settings.edit_account_info' | translate}}</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>{{'home_settings.notifications_setting' | translate}}</ion-label>\n\t\t\t\t\t<ion-toggle color=\"tertiary\"></ion-toggle>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t<ion-label>{{'home_settings.version_info' | translate}}</ion-label>\n\t\t\t\t\t<ion-badge slot=\"end\" color=\"tertiary\">v1.01</ion-badge>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-label>{{'home_settings.version_info' | translate}}</ion-label>\n\t\t\t\t<br />\n\t\t\t\t<mat-accordion class=\"mt-2 mb-2\">\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t{{'home_settings.term_conditions' | translate}}\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<br />\n\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Odio\n\t\t\t\t\t\ttempora magnam quam. Voluptate neque dignissimos eius doloremque\n\t\t\t\t\t\tvero, fuga voluptatibus laboriosam, nesciunt deserunt nostrum\n\t\t\t\t\t\tducimus. Sequi magnam esse consectetur dolorum. Dolorem voluptas,\n\t\t\t\t\t\tsequi totam accusantium quia hic molestiae inventore magnam\n\t\t\t\t\t\tdoloribus voluptates praesentium eius? Iure pariatur sapiente\n\t\t\t\t\t\tdelectus laudantium magnam consectetur. Repellat veniam atque\n\t\t\t\t\t\tincidunt officiis voluptatibus? Reprehenderit, recusandae excepturi.\n\t\t\t\t\t\tError eligendi natus iusto quod ab suscipit repudiandae mollitia\n\t\t\t\t\t\toptio eum? Dolorem illum unde voluptate minus necessitatibus, et\n\t\t\t\t\t\tfugiat eos magnam nihil enim aliquam obcaecati reiciendis\n\t\t\t\t\t\tconsequatur perspiciatis, voluptatem voluptates.\n\t\t\t\t\t</mat-expansion-panel>\n\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t{{'home_settings.privacy_policy' | translate}}\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<br />\n\t\t\t\t\t\tLorem ipsum dolor sit amet consectetur adipisicing elit. Odio\n\t\t\t\t\t\ttempora magnam quam. Voluptate neque dignissimos eius doloremque\n\t\t\t\t\t\tvero, fuga voluptatibus laboriosam, nesciunt deserunt nostrum\n\t\t\t\t\t\tducimus. Sequi magnam esse consectetur dolorum. Dolorem voluptas,\n\t\t\t\t\t\tsequi totam accusantium quia hic molestiae inventore magnam\n\t\t\t\t\t\tdoloribus voluptates praesentium eius? Iure pariatur sapiente\n\t\t\t\t\t\tdelectus laudantium magnam consectetur. Repellat veniam atque\n\t\t\t\t\t\tincidunt officiis voluptatibus? Reprehenderit, recusandae excepturi.\n\t\t\t\t\t\tError eligendi natus iusto quod ab suscipit repudiandae mollitia\n\t\t\t\t\t\toptio eum? Dolorem illum unde voluptate minus necessitatibus, et\n\t\t\t\t\t\tfugiat eos magnam nihil enim aliquam obcaecati reiciendis\n\t\t\t\t\t\tconsequatur perspiciatis, voluptatem voluptates.\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-label>{{'home_settings.contact' | translate}}</ion-label>\n\t\t\t\t<br />\n\t\t\t\t<mat-accordion class=\"mt-2 mb-2\">\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t{{'home_settings.contact_us' | translate}}\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t{{'home_settings.phone' | translate}}: 02-123-1234\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t{{'home_settings.email' | translate}}: soochulo@sochulo.com\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-label>{{'home_settings.guide' | translate}}</ion-label>\n\t\t\t\t<br />\n\t\t\t\t<mat-accordion class=\"mt-2 mb-2\">\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<br />\n\t\t\t\t\t\tLorem ipsum dolor, sit amet consectetur adipisicing elit. Rem culpa\n\t\t\t\t\t\tquis excepturi. Quisquam tenetur libero iusto beatae ipsa facere\n\t\t\t\t\t\tnulla distinctio ex praesentium! Voluptatum deserunt alias, odit\n\t\t\t\t\t\tmagni at eligendi.\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-button shape=\"round\" expand=\"block\" (click)=\"logOut()\" class=\"mt-5\" color=\"tertiary\">\n\t\t\t{{'home_settings.sign_out' | translate}}\n\t\t</ion-button>\n\t</ion-grid>\n</ion-content>");

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

/***/ "./src/app/pages/navigation/settings/setting-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/navigation/settings/setting-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SettingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageRoutingModule", function() { return SettingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.page */ "./src/app/pages/navigation/settings/setting.page.ts");




const routes = [
    {
        path: '',
        component: _setting_page__WEBPACK_IMPORTED_MODULE_3__["SettingPage"],
    },
];
let SettingPageRoutingModule = class SettingPageRoutingModule {
};
SettingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/navigation/settings/setting.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/navigation/settings/setting.module.ts ***!
  \*************************************************************/
/*! exports provided: HttpLoaderFactory, SettingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setting-routing.module */ "./src/app/pages/navigation/settings/setting-routing.module.ts");
/* harmony import */ var _setting_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./setting.page */ "./src/app/pages/navigation/settings/setting.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");












function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http);
}
let SettingPageModule = class SettingPageModule {
};
SettingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_7__["SettingPageRoutingModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]],
                },
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
        ],
        declarations: [_setting_page__WEBPACK_IMPORTED_MODULE_8__["SettingPage"]],
    })
], SettingPageModule);



/***/ }),

/***/ "./src/app/pages/navigation/settings/setting.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/navigation/settings/setting.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-expansion-panel-header.mat-expanded,\n.mat-expansion-panel-header.mat-expanded:hover {\n  background: #e4e1df;\n}\n\nion-title {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9zZXR0aW5ncy9zZXR0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vc2V0dGluZ3Mvc2V0dGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkLFxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNGUxZGY7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/navigation/settings/setting.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/navigation/settings/setting.page.ts ***!
  \***********************************************************/
/*! exports provided: SettingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPage", function() { return SettingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");







let SettingPage = class SettingPage {
    constructor(toast, router, afAuth, loadingController, translate) {
        this.toast = toast;
        this.router = router;
        this.afAuth = afAuth;
        this.loadingController = loadingController;
        this.panelOpenState = false;
        this.afAuth.authState.subscribe((user) => {
            if (user) {
                this.id = user.uid;
            }
        });
        translate.addLangs(["en", "kr"]);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang("kr");
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use("kr");
    }
    ngOnInit() { }
    logOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: "Please wait...",
                showBackdrop: true,
            });
            try {
                yield loading.present();
                yield this.afAuth.signOut();
                this.router.navigate(["login"]);
                yield loading.dismiss();
            }
            catch (error) {
                this.toast.showToast(error.message);
                yield loading.dismiss();
            }
        });
    }
};
SettingPage.ctorParameters = () => [
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
];
SettingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: "app-setting",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./setting.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/settings/setting.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./setting.page.scss */ "./src/app/pages/navigation/settings/setting.page.scss")).default]
    })
], SettingPage);



/***/ })

}]);
//# sourceMappingURL=settings-setting-module-es2015.js.map