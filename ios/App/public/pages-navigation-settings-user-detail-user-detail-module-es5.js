(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-navigation-settings-user-detail-user-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/settings/user-detail/user-detail.page.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/settings/user-detail/user-detail.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationSettingsUserDetailUserDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar style=\"padding: 8px !important\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"/home/deal\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title\n\t\t\t>{{'home_edit_account.account_infor_header' | translate}}</ion-title\n\t\t>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"m-0 p-0\">\n\t<!-- Login content section -->\n\t<ion-card *ngIf=\"dealer\">\n\t\t<ion-card-content>\n\t\t\t<form [formGroup]=\"editForm\">\n\t\t\t\t<ion-list>\n\t\t\t\t\t<div class=\"avt-view\">\n\t\t\t\t\t\t<img [src]=\"imagePreview\" alt=\"\" class=\"img-fluid\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-label>{{'home_edit_account.email' | translate}}</mat-label>\n\t\t\t\t\t\t<input type=\"email\" matInput formControlName=\"email\" />\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-label>{{'home_edit_account.org_name' | translate}}</mat-label>\n\t\t\t\t\t\t<input type=\"text\" matInput formControlName=\"orgName\" />\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-label>{{'home_edit_account.ceo_name' | translate}}</mat-label>\n\t\t\t\t\t\t<input type=\"text\" matInput formControlName=\"ceoName\" />\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-label\n\t\t\t\t\t\t\t>{{'home_edit_account.phone_number' | translate}}</mat-label\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<input type=\"number\" matInput formControlName=\"phone\" />\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-label>{{'home_edit_account.address' | translate}}</mat-label>\n\t\t\t\t\t\t<input type=\"text\" matInput formControlName=\"address\" />\n\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t<div class=\"mb-8\"></div>\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-label>{{'home_edit_account.password' | translate}}</mat-label>\n\t\t\t\t\t\t<input type=\"password\" matInput formControlName=\"password\" />\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field appearance=\"outline\">\n\t\t\t\t\t\t<mat-label>{{'home_edit_account.password' | translate}}</mat-label>\n\t\t\t\t\t\t<input type=\"password\" matInput formControlName=\"cPassword\" />\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</ion-list>\n\t\t\t</form>\n\t\t</ion-card-content>\n\t</ion-card>\n\t<!-- End of Login content section -->\n</ion-content>\n\n<ion-footer class=\"ion-padding\">\n\t<ion-button expand=\"block\" color=\"tertiary\" [disabled]=\"!editForm.valid\">\n\t\t{{'home_edit_account.update_infor' | translate}}\n\t</ion-button>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/pages/navigation/settings/user-detail/user-detail-routing.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/navigation/settings/user-detail/user-detail-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: UserDetailPageRoutingModule */

    /***/
    function srcAppPagesNavigationSettingsUserDetailUserDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDetailPageRoutingModule", function () {
        return UserDetailPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _user_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-detail.page */
      "./src/app/pages/navigation/settings/user-detail/user-detail.page.ts");

      var routes = [{
        path: '',
        component: _user_detail_page__WEBPACK_IMPORTED_MODULE_3__["UserDetailPage"]
      }];

      var UserDetailPageRoutingModule = function UserDetailPageRoutingModule() {
        _classCallCheck(this, UserDetailPageRoutingModule);
      };

      UserDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/settings/user-detail/user-detail.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/navigation/settings/user-detail/user-detail.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: HttpLoaderFactory, UserDetailPageModule */

    /***/
    function srcAppPagesNavigationSettingsUserDetailUserDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDetailPageModule", function () {
        return UserDetailPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-detail-routing.module */
      "./src/app/pages/navigation/settings/user-detail/user-detail-routing.module.ts");
      /* harmony import */


      var _user_detail_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-detail.page */
      "./src/app/pages/navigation/settings/user-detail/user-detail.page.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
      }

      var UserDetailPageModule = function UserDetailPageModule() {
        _classCallCheck(this, UserDetailPageModule);
      };

      UserDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _user_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserDetailPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"]],
        declarations: [_user_detail_page__WEBPACK_IMPORTED_MODULE_7__["UserDetailPage"]]
      })], UserDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/settings/user-detail/user-detail.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/navigation/settings/user-detail/user-detail.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNavigationSettingsUserDetailUserDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".avt-view {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 6rem !important;\n  height: 6rem !important;\n  border: 1px solid #d8dde6;\n  overflow: hidden;\n  position: relative;\n  margin: auto;\n  border-radius: 16px;\n  margin-bottom: 2rem;\n}\n\n.mat-form-field {\n  display: inline !important;\n}\n\n.mat-form-field input.mat-input-element {\n  line-height: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9zZXR0aW5ncy91c2VyLWRldGFpbC91c2VyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtBQUFEOztBQUdBO0VBQ0MsMEJBQUE7QUFBRDs7QUFFQztFQUNDLDhCQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uYXZpZ2F0aW9uL3NldHRpbmdzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdnQtdmlldyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogNnJlbSAhaW1wb3J0YW50O1xuXHRoZWlnaHQ6IDZyZW0gIWltcG9ydGFudDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2Q4ZGRlNjtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW46IGF1dG87XG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cblx0bWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcblx0ZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG5cblx0JiBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG5cdFx0bGluZS1oZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuXHR9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/navigation/settings/user-detail/user-detail.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/navigation/settings/user-detail/user-detail.page.ts ***!
      \***************************************************************************/

    /*! exports provided: UserDetailPage */

    /***/
    function srcAppPagesNavigationSettingsUserDetailUserDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDetailPage", function () {
        return UserDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../services/loader.service */
      "./src/app/services/loader.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _services_dealer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../services/dealer.service */
      "./src/app/services/dealer.service.ts");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");

      var IMG_AVT_DEFAULT = '/assets/images/brand/add-photo.png';

      var UserDetailPage = /*#__PURE__*/function () {
        function UserDetailPage(router, route, afAuth, fb, storage, dealerService, loader, translate) {
          _classCallCheck(this, UserDetailPage);

          this.router = router;
          this.route = route;
          this.afAuth = afAuth;
          this.fb = fb;
          this.storage = storage;
          this.dealerService = dealerService;
          this.loader = loader;
          this.imagePreview = IMG_AVT_DEFAULT;
          this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])),
            cPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            orgName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(10)])),
            ceoName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
          });
          this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

          translate.addLangs(['en', 'kr']); // this language will be used as a fallback when a translation isn't found in the current language

          translate.setDefaultLang('kr'); // the lang to use, if the lang isn't available, it will use the current loader to get them

          translate.use('kr');
        }

        _createClass(UserDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUser();
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loader.showLoader();

                    case 2:
                      _context.next = 4;
                      return this.afAuth.currentUser.then(function (user) {
                        if (user) {
                          _this.userId = user.uid;
                          console.log(user.uid);

                          _this.getDealer(_this.userId);
                        }
                      });

                    case 4:
                      _context.next = 6;
                      return this.loader.hideLoader();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getDealer",
          value: function getDealer(id) {
            var _this2 = this;

            this.dealerService.getDealer(id).subscribe(function (val) {
              _this2.dealer = val.data();

              _this2.editForm.patchValue({
                email: _this2.dealer.email,
                orgName: _this2.dealer.orgName,
                ceoName: _this2.dealer.ceoName,
                phone: _this2.dealer.phone,
                address: _this2.dealer.address
              });
            });
          }
        }]);

        return UserDetailPage;
      }();

      UserDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"]
        }, {
          type: _services_dealer_service__WEBPACK_IMPORTED_MODULE_3__["DealerService"]
        }, {
          type: _services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      };

      UserDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-user-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/settings/user-detail/user-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-detail.page.scss */
        "./src/app/pages/navigation/settings/user-detail/user-detail.page.scss"))["default"]]
      })], UserDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-navigation-settings-user-detail-user-detail-module-es5.js.map