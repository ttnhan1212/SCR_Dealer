(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<!-- Header/Banner section -->\n\t<ion-item>\n\t\t<div class=\"bannerimg cover-image bg-background3\">\n\t\t\t<div class=\"header-text\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"text-center text-white\">\n\t\t\t\t\t\t<h1 class=\"\">SCRoads - Registration</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ion-item>\n\t<!-- End of Header/Banner section -->\n\n\t<!-- Login content section -->\n\t<ion-card class=\"m-5\">\n\t\t<div class=\"container customerpage\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"single-page\">\n\t\t\t\t\t<div class=\"col-lg-5 col-xl-4 col-md-6 d-block mx-auto\">\n\t\t\t\t\t\t<div class=\"wrapper wrapper2\">\n\t\t\t\t\t\t\t<form id=\"login\" class=\"card-body\" tabindex=\"500\">\n\t\t\t\t\t\t\t\t<h3>Register as:</h3>\n\t\t\t\t\t\t\t\t<div class=\"mail\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"email\"\n\t\t\t\t\t\t\t\t\t\tname=\"mail\"\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"email\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: #080e1b;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"passwd\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\t\t\tname=\"password\"\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"password\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: #080e1b;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"passwd\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\t\t\tname=\"cPassword\"\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"cPassword\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: #080e1b;\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t<label>Confirm Password</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ion-button expand=\"block\" color=\"tertiary\" (click)=\"signup()\">\n\t\t\t\t\t\t\t\t\tRegister\n\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\tfill=\"clear\"\n\t\t\t\t\t\t\t\t\texpand=\"block\"\n\t\t\t\t\t\t\t\t\tclass=\"text-dark mb-0\"\n\t\t\t\t\t\t\t\t\trouterLink=\"/login\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tAlready have an account? Log In\n\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t<hr class=\"divider\" />\n\t\t\t\t\t\t\t<ion-grid class=\"card-body social-images\">\n\t\t\t\t\t\t\t\t<p class=\"text-body text-center\">\n\t\t\t\t\t\t\t\t\tContinue using Social Accounts\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\t\t\tfill=\"outline\"\n\t\t\t\t\t\t\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t\t\t\t\t\t\tcolor=\"dark\"\n\t\t\t\t\t\t\t\t\t\t\thref=\"https://www.facebook.com/\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"text-left\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t\t\t\t\t\t\tslot=\"start\"\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/svgs/facebook.svg\"\n\t\t\t\t\t\t\t\t\t\t\t></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\tFacebook\n\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t\t\t\t\t<ion-button\n\t\t\t\t\t\t\t\t\t\t\tfill=\"outline\"\n\t\t\t\t\t\t\t\t\t\t\tshape=\"round\"\n\t\t\t\t\t\t\t\t\t\t\tcolor=\"dark\"\n\t\t\t\t\t\t\t\t\t\t\thref=\"https://www.google.com/gmail/\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"text-left\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t\t\t\t\t\t\tslot=\"start\"\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/svgs/search.svg\"\n\t\t\t\t\t\t\t\t\t\t\t></ion-icon>\n\t\t\t\t\t\t\t\t\t\t\tGoogle\n\t\t\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ion-card>\n\t<!-- End of Login content section -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".smllogo__img {\n  height: 2.6rem;\n}\n\n.bannerimg {\n  padding: 2rem 0 2rem 0;\n  background-size: cover;\n}\n\n.container {\n  width: 100%;\n  padding-right: 0.75rem;\n  padding-left: 0.75rem;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.cover-image {\n  background-size: cover !important;\n  width: 100%;\n  background-image: url('banner2.jpg');\n}\n\n.bg-background3:before {\n  background: linear-gradient(to right, rgba(141, 11, 183, 0.8), rgba(33, 63, 148, 0.8));\n}\n\n.bg-background3:before {\n  background: linear-gradient(to right, rgba(106, 17, 203, 0.8), rgba(37, 117, 252, 0.8));\n}\n\n.bg-background3 .header-text {\n  position: relative;\n  z-index: 10;\n}\n\n.single-page .wrapper.wrapper2 {\n  background: #fff;\n  width: 100%;\n  background: #fff;\n  transition: all 0.5s;\n  color: #fff;\n  overflow: hidden;\n  border-radius: 4px;\n  text-align: center;\n}\n\n.sptb {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  width: 200%;\n}\n\n.header-md::after {\n  width: 0 !important;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxjQUFBO0FBQUY7O0FBSUE7RUFDQyxzQkFBQTtFQUNBLHNCQUFBO0FBREQ7O0FBSUE7RUFDQyxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFERDs7QUFJQTtFQUNDLGlDQUFBO0VBQ0EsV0FBQTtFQUVBLG9DQUFBO0FBRkQ7O0FBS0E7RUFDQyxzRkFBQTtBQUZEOztBQVNBO0VBQ0MsdUZBQUE7QUFORDs7QUFjQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtBQVhEOztBQWNBO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFYRDs7QUFjQTtFQUNDLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBWEQ7O0FBY0E7RUFDQyxtQkFBQTtBQVhEOztBQWNBO0VBQ0Msd0JBQUE7RUFDQSxvQkFBQTtBQVhEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc21sbG9nbyB7XG5cdCZfX2ltZyB7XG5cdFx0aGVpZ2h0OiAyLjZyZW07XG5cdH1cbn1cblxuLmJhbm5lcmltZyB7XG5cdHBhZGRpbmc6IDJyZW0gMCAycmVtIDA7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jb250YWluZXIge1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZy1yaWdodDogMC43NXJlbTtcblx0cGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uY292ZXItaW1hZ2Uge1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG5cdHdpZHRoOiAxMDAlO1xuXHQvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXJzL2Jhbm5lcjIuanBnJyk7XG59XG5cbi5iZy1iYWNrZ3JvdW5kMzpiZWZvcmUge1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG5cdFx0dG8gcmlnaHQsXG5cdFx0cmdiYSgxNDEsIDExLCAxODMsIDAuOCksXG5cdFx0cmdiYSgzMywgNjMsIDE0OCwgMC44KVxuXHQpO1xufVxuXG4uYmctYmFja2dyb3VuZDM6YmVmb3JlIHtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIHJpZ2h0LFxuXHRcdHJnYmEoMTA2LCAxNywgMjAzLCAwLjgpLFxuXHRcdHJnYmEoMzcsIDExNywgMjUyLCAwLjgpXG5cdCk7XG5cdC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMCUpO1xufVxuXG4uYmctYmFja2dyb3VuZDMgLmhlYWRlci10ZXh0IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAxMDtcbn1cblxuLnNpbmdsZS1wYWdlIC53cmFwcGVyLndyYXBwZXIyIHtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdHRyYW5zaXRpb246IGFsbCAwLjVzO1xuXHRjb2xvcjogI2ZmZjtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcHRiIHtcblx0cGFkZGluZy10b3A6IDNyZW07XG5cdHBhZGRpbmctYm90dG9tOiAzcmVtO1xuXHR3aWR0aDogMjAwJTtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuXHR3aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG5cdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");






let SignupPage = class SignupPage {
    constructor(afAuth, router, loadingController, toast) {
        this.afAuth = afAuth;
        this.router = router;
        this.loadingController = loadingController;
        this.toast = toast;
    }
    ngOnInit() { }
    signup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.password !== this.cPassword) {
                this.toast.showToast('Password not match, Please try again!');
            }
            else {
                const loading = yield this.loadingController.create({
                    message: 'Please wait...',
                    showBackdrop: true,
                });
                try {
                    yield loading.present();
                    yield this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
                    this.router.navigate(['home/deal']);
                    yield loading.dismiss();
                    return true;
                }
                catch (error) {
                    this.toast.showToast(error.message);
                    yield loading.dismiss();
                    return false;
                }
            }
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map