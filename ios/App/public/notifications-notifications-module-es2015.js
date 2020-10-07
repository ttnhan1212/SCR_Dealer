(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/notifications/notifications.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/notifications/notifications.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n\t<ion-toolbar>\n\t\t<ion-title>{{'home_notifications.title' | translate}}</ion-title>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"/home/deal\"></ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<div style=\"display: flex; justify-content: center\">\n\t\t<ion-spinner *ngIf=\"!noti\"></ion-spinner>\n\t</div>\n\t<ion-list *ngIf=\"noti\">\n\t\t<ion-item\n\t\t\t*ngFor=\"let item of noti\"\n\t\t\tlines=\"none\"\n\t\t\t[routerLink]=\"['/','home','ongoing', item.requestId]\"\n\t\t\tclass=\"item-card\"\n\t\t>\n\t\t\t<ion-thumbnail slot=\"start\" class=\"m-0\">\n\t\t\t\t<img src=\"../../../../assets/images/photos/car_02.png\" />\n\t\t\t</ion-thumbnail>\n\t\t\t<ion-grid class=\"p-0 m-0 mt-1\">\n\t\t\t\t<ion-row class=\"m-0 p-0\">\n\t\t\t\t\t<ion-col size=\"8\" [ngSwitch]=\"item.deal?.status\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"background: #bdc3c7; border-radius: 5px\"\n\t\t\t\t\t\t\tclass=\"m-0 p-0\"\n\t\t\t\t\t\t\t*ngSwitchCase=\"1\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\">Quote in progress</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"background: #bdc3c7; border-radius: 5px\"\n\t\t\t\t\t\t\t*ngSwitchCase=\"2\"\n\t\t\t\t\t\t\tclass=\"m-0 p-0\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\">\n\t\t\t\t\t\t\t\tWaiting for seller to select\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"background: #bdc3c7; border-radius: 5px\"\n\t\t\t\t\t\t\t*ngSwitchCase=\"3\"\n\t\t\t\t\t\t\tclass=\"m-0 p-0\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\">Confirm the auction</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"background: #bdc3c7; border-radius: 5px\"\n\t\t\t\t\t\t\t*ngSwitchCase=\"4\"\n\t\t\t\t\t\t\tclass=\"m-0 p-0\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\">Cancel the auction</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"background: #bdc3c7; border-radius: 5px\"\n\t\t\t\t\t\t\t*ngSwitchCase=\"5\"\n\t\t\t\t\t\t\tclass=\"m-0 p-0\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\">\n\t\t\t\t\t\t\t\tPlease write visit result\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"background: #bdc3c7; border-radius: 5px\"\n\t\t\t\t\t\t\t*ngSwitchCase=\"6\"\n\t\t\t\t\t\t\tclass=\"m-0 p-0\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\">Cancel the purchase</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"background: #bdc3c7; border-radius: 5px\"\n\t\t\t\t\t\t\t*ngSwitchCase=\"9\"\n\t\t\t\t\t\t\tclass=\"m-0 p-0\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\">\n\t\t\t\t\t\t\t\tPlease upload the certification\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"background: #bdc3c7; border-radius: 5px\"\n\t\t\t\t\t\t\t*ngSwitchCase=\"10\"\n\t\t\t\t\t\t\tclass=\"m-0 p-0\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\">\n\t\t\t\t\t\t\t\tPlease complete the payment\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"background: #bdc3c7; border-radius: 5px\"\n\t\t\t\t\t\t\t*ngSwitchCase=\"11\"\n\t\t\t\t\t\t\tclass=\"m-0 p-0\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\">Trade complete</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"background: #bdc3c7; border-radius: 5px\"\n\t\t\t\t\t\t\t*ngSwitchDefault=\"\"\n\t\t\t\t\t\t\tclass=\"m-0 p-0\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\">N/A</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\" class=\"mt-1 fs-10\">\n\t\t\t\t\t\t{{item.updateDate * 1000 | dateAgo}}\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<div>\n\t\t\t\t\t<p>2009, K-5 <span class=\"fs-10\">12가1234</span></p>\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t{{item.request?.miles | number}} Km\n\t\t\t\t\t\t<span class=\"pull-right\"\n\t\t\t\t\t\t\t>￦{{item.request?.price || 0 | number}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/navigation/notifications/notifications-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/navigation/notifications/notifications-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: NotificationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function() { return NotificationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.page */ "./src/app/pages/navigation/notifications/notifications.page.ts");




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/navigation/notifications/notifications.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/navigation/notifications/notifications.module.ts ***!
  \************************************************************************/
/*! exports provided: HttpLoaderFactory, NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_mainPipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../pipes/mainPipe.module */ "./src/app/pipes/mainPipe.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifications-routing.module */ "./src/app/pages/navigation/notifications/notifications-routing.module.ts");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notifications.page */ "./src/app/pages/navigation/notifications/notifications.page.ts");











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__["TranslateHttpLoader"](http);
}
let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_9__["NotificationsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]],
                },
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _pipes_mainPipe_module__WEBPACK_IMPORTED_MODULE_1__["MainPipe"],
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_10__["NotificationsPage"]],
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/pages/navigation/notifications/notifications.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/navigation/notifications/notifications.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item ion-thumbnail {\n  width: 7.5rem;\n  height: 7.5rem;\n}\n.item ion-thumbnail img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: -1rem;\n}\n.title {\n  line-height: normal;\n}\n.item-card {\n  border: 0.5px solid black;\n  border-radius: 10px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLGNBQUE7QUFDRDtBQUNDO0VBQ0Msb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFHQTtFQUNDLG1CQUFBO0FBQUQ7QUFHQTtFQUNDLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtBQUREIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0gaW9uLXRodW1ibmFpbCB7XG5cdHdpZHRoOiA3LjVyZW07XG5cdGhlaWdodDogNy41cmVtO1xuXG5cdGltZyB7XG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0bWFyZ2luLWxlZnQ6IC0xcmVtO1xuXHR9XG59XG5cbi50aXRsZSB7XG5cdGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5pdGVtLWNhcmQge1xuXHRib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXG5cdG1hcmdpbi1ib3R0b206IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/navigation/notifications/notifications.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/navigation/notifications/notifications.page.ts ***!
  \**********************************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _services_noti_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/noti.service */ "./src/app/services/noti.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/deals.service */ "./src/app/services/deals.service.ts");






let NotificationsPage = class NotificationsPage {
    constructor(notiService, dealsService, afAuth, translate) {
        this.notiService = notiService;
        this.dealsService = dealsService;
        this.afAuth = afAuth;
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
            yield this.afAuth.currentUser.then((user) => {
                if (user) {
                    this.sellerId = user.uid;
                }
                this.getNoti(this.sellerId);
            });
        });
    }
    getNoti(id) {
        this.notiSub = this.notiService.getNoti(id).subscribe((data) => {
            this.noti = data.map((e) => {
                return Object.assign({}, e.payload.doc.data());
            });
            this.noti.forEach((val) => {
                this.dealsService.getDealDetail(val.requestId).subscribe((m) => {
                    val.request = Object.assign({}, m.payload.data());
                });
            });
        });
    }
    ngOnDestroy() {
        if (this.notiSub) {
            this.notiSub.unsubscribe();
        }
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _services_noti_service__WEBPACK_IMPORTED_MODULE_3__["NotiService"] },
    { type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_5__["DealsService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
];
NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/notifications/notifications.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notifications.page.scss */ "./src/app/pages/navigation/notifications/notifications.page.scss")).default]
    })
], NotificationsPage);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map