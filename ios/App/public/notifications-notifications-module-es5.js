(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/notifications/notifications.page.html":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/notifications/notifications.page.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>{{'home_notifications.title' | translate}}</ion-title>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"/home/deal\"></ion-back-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-list>\n\t\t<ion-item\n\t\t\t*ngFor=\"let item of noti\"\n\t\t\tlines=\"none\"\n\t\t\t[routerLink]=\"['/','home','ongoing', item.requestId]\"\n\t\t\tclass=\"item-card\"\n\t\t>\n\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t<img src=\"../../../../assets/images/photos/car_02.png\" />\n\t\t\t</ion-thumbnail>\n\t\t\t<ion-grid class=\"p-0 m-0\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col size=\"8\">\n\t\t\t\t\t\t<div\n\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\tbackground: #bdc3c7;\n\t\t\t\t\t\t\t\tbackground: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);\n\t\t\t\t\t\t\t\tbackground: linear-gradient(to right, #2c3e50, #bdc3c7);\n\t\t\t\t\t\t\t\tborder-radius: 5px;\n\t\t\t\t\t\t\t\"\n\t\t\t\t\t\t\tclass=\"m-0 p-0\"\n\t\t\t\t\t\t\t[ngSwitch]=\"item.deal?.status\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"1\">\n\t\t\t\t\t\t\t\tQuote in progress\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"2\">\n\t\t\t\t\t\t\t\tWaiting for seller to select\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"3\">\n\t\t\t\t\t\t\t\tConfirm the auction\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"4\">\n\t\t\t\t\t\t\t\tCancel the auction\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"5\">\n\t\t\t\t\t\t\t\tPlease write visit result\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"6\">\n\t\t\t\t\t\t\t\tCancel the purchase\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"9\">\n\t\t\t\t\t\t\t\tPlease upload the certification\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"10\">\n\t\t\t\t\t\t\t\tPlease complete the payment\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchCase=\"11\">\n\t\t\t\t\t\t\t\tTrade complete\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class=\"fs-15 text-center text-dark\" *ngSwitchDefault=\"\">N/A</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col size=\"4\" class=\"mt-1 fs-11\">\n\t\t\t\t\t\t{{localeDate(item.updateDate) | dateAgo}}\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\n\t\t\t\t<div>\n\t\t\t\t\t<p>2009, K-5 <span class=\"fs-10\">12가1234</span></p>\n\t\t\t\t</div>\n\n\t\t\t\t<div>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t{{item.request?.miles | number}} Km\n\t\t\t\t\t\t<span class=\"pull-right\"\n\t\t\t\t\t\t\t>￦{{item.request?.price || 0 | number}}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- <ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-label>{{item.id}}</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row> -->\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/navigation/notifications/notifications-routing.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/pages/navigation/notifications/notifications-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: NotificationsPageRoutingModule */

    /***/
    function srcAppPagesNavigationNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function () {
        return NotificationsPageRoutingModule;
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


      var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notifications.page */
      "./src/app/pages/navigation/notifications/notifications.page.ts");

      var routes = [{
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
      }];

      var NotificationsPageRoutingModule = function NotificationsPageRoutingModule() {
        _classCallCheck(this, NotificationsPageRoutingModule);
      };

      NotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotificationsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/notifications/notifications.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/pages/navigation/notifications/notifications.module.ts ***!
      \************************************************************************/

    /*! exports provided: HttpLoaderFactory, NotificationsPageModule */

    /***/
    function srcAppPagesNavigationNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
        return NotificationsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _pipes_mainPipe_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../pipes/mainPipe.module */
      "./src/app/pipes/mainPipe.module.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./notifications-routing.module */
      "./src/app/pages/navigation/notifications/notifications-routing.module.ts");
      /* harmony import */


      var _notifications_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./notifications.page */
      "./src/app/pages/navigation/notifications/notifications.page.ts");

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__["TranslateHttpLoader"](http);
      }

      var NotificationsPageModule = function NotificationsPageModule() {
        _classCallCheck(this, NotificationsPageModule);
      };

      NotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_9__["NotificationsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
          }
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _pipes_mainPipe_module__WEBPACK_IMPORTED_MODULE_1__["MainPipe"]],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_10__["NotificationsPage"]]
      })], NotificationsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/notifications/notifications.page.scss":
    /*!************************************************************************!*\
      !*** ./src/app/pages/navigation/notifications/notifications.page.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNavigationNotificationsNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".item ion-thumbnail {\n  min-width: 5rem;\n  min-height: 5rem;\n}\n.item ion-thumbnail img {\n  min-width: 5rem;\n  min-height: 5rem;\n}\n.title {\n  line-height: normal;\n}\n.item-card {\n  border: 0.5px solid black;\n  border-radius: 10px;\n  margin-bottom: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBQ0Q7QUFBQztFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQUVGO0FBRUE7RUFDQyxtQkFBQTtBQUNEO0FBRUE7RUFDQyx5QkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUFBRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIGlvbi10aHVtYm5haWwge1xuXHRtaW4td2lkdGg6IDVyZW07XG5cdG1pbi1oZWlnaHQ6IDVyZW07XG5cdGltZyB7XG5cdFx0bWluLXdpZHRoOiA1cmVtO1xuXHRcdG1pbi1oZWlnaHQ6IDVyZW07XG5cdH1cbn1cblxuLnRpdGxlIHtcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLml0ZW0tY2FyZCB7XG5cdGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cblx0bWFyZ2luLWJvdHRvbTogNnB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/navigation/notifications/notifications.page.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/navigation/notifications/notifications.page.ts ***!
      \**********************************************************************/

    /*! exports provided: NotificationsPage */

    /***/
    function srcAppPagesNavigationNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
        return NotificationsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _services_noti_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../services/noti.service */
      "./src/app/services/noti.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/deals.service */
      "./src/app/services/deals.service.ts");

      var NotificationsPage = /*#__PURE__*/function () {
        function NotificationsPage(notiService, dealsService, afAuth, translate) {
          _classCallCheck(this, NotificationsPage);

          this.notiService = notiService;
          this.dealsService = dealsService;
          this.afAuth = afAuth;
          translate.addLangs(['en', 'kr']); // this language will be used as a fallback when a translation isn't found in the current language

          translate.setDefaultLang('kr'); // the lang to use, if the lang isn't available, it will use the current loader to get them

          translate.use('kr');
        }

        _createClass(NotificationsPage, [{
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
                      return this.afAuth.authState.subscribe(function (authState) {
                        if (authState) {
                          _this.sellerId = authState.uid;
                        }

                        _this.getNoti(_this.sellerId);
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getNoti",
          value: function getNoti(id) {
            var _this2 = this;

            this.notiSub = this.notiService.getNoti(id).subscribe(function (data) {
              _this2.noti = data.map(function (e) {
                return Object.assign({}, e.payload.doc.data());
              });

              _this2.noti.forEach(function (val) {
                _this2.dealsService.getDealDetail(val.requestId).subscribe(function (m) {
                  val.request = Object.assign({}, m.payload.data());
                });
              });
            });
          }
        }, {
          key: "localeDate",
          value: function localeDate(time) {
            var myDate = new Date(time * 1000);
            return myDate.toLocaleString();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.notiSub) {
              this.notiSub.unsubscribe();
            }
          }
        }]);

        return NotificationsPage;
      }();

      NotificationsPage.ctorParameters = function () {
        return [{
          type: _services_noti_service__WEBPACK_IMPORTED_MODULE_3__["NotiService"]
        }, {
          type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_5__["DealsService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      };

      NotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-notifications',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notifications.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/notifications/notifications.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notifications.page.scss */
        "./src/app/pages/navigation/notifications/notifications.page.scss"))["default"]]
      })], NotificationsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=notifications-notifications-module-es5.js.map