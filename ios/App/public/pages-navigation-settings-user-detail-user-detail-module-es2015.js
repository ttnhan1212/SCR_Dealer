(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-navigation-settings-user-detail-user-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/settings/user-detail/user-detail.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/settings/user-detail/user-detail.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"/home/deal\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title\n\t\t\t>{{'home_edit_account.account_infor_header' | translate}}</ion-title\n\t\t>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<!-- Login content section -->\n\t<ion-card>\n\t\t<div class=\"container customerpage\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"single-page\">\n\t\t\t\t\t<div class=\"col-lg-5 col-xl-4 col-md-6 d-block mx-auto\">\n\t\t\t\t\t\t<div class=\"wrapper wrapper2\">\n\t\t\t\t\t\t\t<form class=\"card-body p-4 pb-4\" [formGroup]=\"editForm\">\n\t\t\t\t\t\t\t\t<div class=\"avt-view\">\n\t\t\t\t\t\t\t\t\t<img [src]=\"imagePreview\" alt=\"\" class=\"img-fluid\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mail\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"email\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"email\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"dealer.email\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: #080e1b\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<label>{{'home_edit_account.email' | translate}}</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mail\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"orgName\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"dealer.orgName\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: #080e1b\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<label>{{'home_edit_account.org_name' | translate}}</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mail\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"ceoName\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"dealer.ceoName\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: #080e1b\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<label>{{'home_edit_account.ceo_name' | translate}}</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mail\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"phone\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"dealer.phone\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: #080e1b\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<label\n\t\t\t\t\t\t\t\t\t\t>{{'home_edit_account.phone_number' | translate}}</label\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mb-8\"></div>\n\t\t\t\t\t\t\t\t<div class=\"passwd\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: #080e1b\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<label>{{'home_edit_account.password' | translate}}</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"passwd\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"cPassword\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: #080e1b\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<label\n\t\t\t\t\t\t\t\t\t\t>{{'home_edit_account.confirm_password' | translate}}</label\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\texpand=\"block\"\n\t\t\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\t\t\tclass=\"mr-3 ml-3\"\n\t\t\t\t\t\t\t\t[disabled]=\"!editForm.valid\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t{{'home_edit_account.update_infor' | translate}}\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t<div class=\"mb-5\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ion-card>\n\t<!-- End of Login content section -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/navigation/settings/user-detail/user-detail-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/navigation/settings/user-detail/user-detail-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: UserDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailPageRoutingModule", function() { return UserDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-detail.page */ "./src/app/pages/navigation/settings/user-detail/user-detail.page.ts");




const routes = [
    {
        path: '',
        component: _user_detail_page__WEBPACK_IMPORTED_MODULE_3__["UserDetailPage"]
    }
];
let UserDetailPageRoutingModule = class UserDetailPageRoutingModule {
};
UserDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/navigation/settings/user-detail/user-detail.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/navigation/settings/user-detail/user-detail.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HttpLoaderFactory, UserDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailPageModule", function() { return UserDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-detail-routing.module */ "./src/app/pages/navigation/settings/user-detail/user-detail-routing.module.ts");
/* harmony import */ var _user_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-detail.page */ "./src/app/pages/navigation/settings/user-detail/user-detail.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");










function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
let UserDetailPageModule = class UserDetailPageModule {
};
UserDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserDetailPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]],
                }
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        declarations: [_user_detail_page__WEBPACK_IMPORTED_MODULE_6__["UserDetailPage"]],
    })
], UserDetailPageModule);



/***/ }),

/***/ "./src/app/pages/navigation/settings/user-detail/user-detail.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/navigation/settings/user-detail/user-detail.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avt-view {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 6rem !important;\n  height: 6rem !important;\n  border: 1px solid #d8dde6;\n  overflow: hidden;\n  position: relative;\n  margin: auto;\n  border-radius: 16px;\n}\n.avt-view ion-input[type=file] {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9zZXR0aW5ncy91c2VyLWRldGFpbC91c2VyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRDtBQUNDO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9zZXR0aW5ncy91c2VyLWRldGFpbC91c2VyLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZ0LXZpZXcge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0d2lkdGg6IDZyZW0gIWltcG9ydGFudDtcblx0aGVpZ2h0OiA2cmVtICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNkOGRkZTY7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWFyZ2luOiBhdXRvO1xuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXG5cdGlvbi1pbnB1dFt0eXBlPSdmaWxlJ10ge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0fVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/navigation/settings/user-detail/user-detail.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/navigation/settings/user-detail/user-detail.page.ts ***!
  \***************************************************************************/
/*! exports provided: UserDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailPage", function() { return UserDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_dealer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/dealer.service */ "./src/app/services/dealer.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");









const IMG_AVT_DEFAULT = '/assets/images/brand/add-photo.png';
let UserDetailPage = class UserDetailPage {
    constructor(router, route, afAuth, fb, storage, dealerService, loader, translate) {
        this.router = router;
        this.route = route;
        this.afAuth = afAuth;
        this.fb = fb;
        this.storage = storage;
        this.dealerService = dealerService;
        this.loader = loader;
        this.imagePreview = IMG_AVT_DEFAULT;
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])),
            cPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            orgName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(10)])),
            ceoName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
        });
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
            yield this.loader.showLoader();
            yield this.afAuth.currentUser.then((user) => {
                if (user) {
                    this.userId = user.uid;
                    this.getDealer(this.userId);
                }
            });
            yield this.loader.hideLoader();
        });
    }
    getDealer(id) {
        this.dealerService.getDealer(id).subscribe((val) => {
            this.dealer = val.data();
        });
    }
};
UserDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] },
    { type: _services_dealer_service__WEBPACK_IMPORTED_MODULE_3__["DealerService"] },
    { type: _services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
UserDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-user-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/settings/user-detail/user-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-detail.page.scss */ "./src/app/pages/navigation/settings/user-detail/user-detail.page.scss")).default]
    })
], UserDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-navigation-settings-user-detail-user-detail-module-es2015.js.map