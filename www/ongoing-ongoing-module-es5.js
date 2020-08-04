(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ongoing-ongoing-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationOngoingOngoingPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button fill=\"clear\" slot=\"end\" [routerLink]=\"['/','home','infor']\">\n\t\t\t<ion-icon name=\"information-circle-outline\"></ion-icon>\n\t\t</ion-button>\n\t\t<ion-button\n\t\t\tfill=\"clear\"\n\t\t\tslot=\"end\"\n\t\t\t[routerLink]=\"['/','home','notifications']\"\n\t\t>\n\t\t\t<ion-icon name=\"notifications-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"!ongoing\">\n\t<ion-card>\n\t\t<ion-item>\n\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t</ion-thumbnail>\n\t\t\t<ion-grid class=\"p-0 m-0\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-header style=\"background: gray;\" class=\"m-0 p-0\">\n\t\t\t\t\t\t<p class=\"fs-20 text-center mt-2 text-dark\">\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ion-header>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t<ion-skeleton-text animated></ion-skeleton-text>\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-card>\n</ion-content>\n\n<ion-content class=\"ion-padding\" *ngIf=\"ongoing\">\n\t<ion-card *ngFor=\"let item of ongoing, let i = index\">\n\t\t<ion-item [routerLink]=\"[item.dealId]\">\n\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t<img\n\t\t\t\t\tsrc=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"\n\t\t\t\t/>\n\t\t\t</ion-thumbnail>\n\t\t\t<ion-grid class=\"p-0 m-0\">\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-header style=\"background: gray;\" class=\"m-0 p-0\">\n\t\t\t\t\t\t<p class=\"fs-20 text-center mt-2 text-dark\">\n\t\t\t\t\t\t\t{{item.deal['status']}}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ion-header>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>2009</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>K-5</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>12가1234</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>{{item.deal.miles}}</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<p>${{item.price}}</p>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row>\n\t\t\t\t\t<ion-col>\n\t\t\t\t\t\t<ion-label>{{item.id}}</ion-label>\n\t\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-grid>\n\t\t</ion-item>\n\t</ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing-routing.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: OngoingPageRoutingModule */

    /***/
    function srcAppPagesNavigationOngoingOngoingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OngoingPageRoutingModule", function () {
        return OngoingPageRoutingModule;
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


      var _ongoing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ongoing.page */
      "./src/app/pages/navigation/ongoing/ongoing.page.ts");

      var routes = [{
        path: '',
        component: _ongoing_page__WEBPACK_IMPORTED_MODULE_3__["OngoingPage"]
      }, {
        path: 'cancel',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cancel-cancel-module */
          "cancel-cancel-module").then(__webpack_require__.bind(null,
          /*! ./cancel/cancel.module */
          "./src/app/pages/navigation/ongoing/cancel/cancel.module.ts")).then(function (m) {
            return m.CancelPageModule;
          });
        }
      }];

      var OngoingPageRoutingModule = function OngoingPageRoutingModule() {
        _classCallCheck(this, OngoingPageRoutingModule);
      };

      OngoingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OngoingPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing.module.ts":
    /*!************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing.module.ts ***!
      \************************************************************/

    /*! exports provided: OngoingPageModule */

    /***/
    function srcAppPagesNavigationOngoingOngoingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OngoingPageModule", function () {
        return OngoingPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../components/components.module */
      "./src/app/components/components.module.ts");
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


      var _ongoing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ongoing-routing.module */
      "./src/app/pages/navigation/ongoing/ongoing-routing.module.ts");
      /* harmony import */


      var _ongoing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./ongoing.page */
      "./src/app/pages/navigation/ongoing/ongoing.page.ts");

      var OngoingPageModule = function OngoingPageModule() {
        _classCallCheck(this, OngoingPageModule);
      };

      OngoingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ongoing_routing_module__WEBPACK_IMPORTED_MODULE_6__["OngoingPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]],
        declarations: [_ongoing_page__WEBPACK_IMPORTED_MODULE_7__["OngoingPage"]]
      })], OngoingPageModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing.page.scss":
    /*!************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNavigationOngoingOngoingPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vb25nb2luZy9vbmdvaW5nLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/ongoing.page.ts":
    /*!**********************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/ongoing.page.ts ***!
      \**********************************************************/

    /*! exports provided: OngoingPage */

    /***/
    function srcAppPagesNavigationOngoingOngoingPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OngoingPage", function () {
        return OngoingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/deals.service */
      "./src/app/services/deals.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OngoingPage = /*#__PURE__*/function () {
        function OngoingPage(dealService, afAuth) {
          _classCallCheck(this, OngoingPage);

          this.dealService = dealService;
          this.afAuth = afAuth;
          this.authState = null;
          this.logo = '../../../assets/images/logo/scroadslight.svg';
        }

        _createClass(OngoingPage, [{
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
                        _this.authState = authState;

                        if (_this.authState) {
                          _this.id = _this.authState.uid;

                          _this.getOngoingDeal(_this.id);
                        }
                      });

                    case 2:
                      this.userSub = _context.sent;

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getOngoingDeal",
          value: function getOngoingDeal(id) {
            var _this2 = this;

            this.dealService.getOngoingDeal(id).subscribe(function (val) {
              _this2.ongoing = val.map(function (e) {
                return Object.assign({}, e.payload.doc.data());
              });

              _this2.ongoing.forEach(function (val) {
                _this2.dealService.getDealDetail(val.dealId).subscribe(function (m) {
                  val.deal = Object.assign({}, m.payload.data());
                });
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.userSub) {
              this.userSub.unsubscribe();
            }
          }
        }]);

        return OngoingPage;
      }();

      OngoingPage.ctorParameters = function () {
        return [{
          type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_2__["DealsService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }];
      };

      OngoingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ongoing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./ongoing.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/ongoing.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./ongoing.page.scss */
        "./src/app/pages/navigation/ongoing/ongoing.page.scss"))["default"]]
      })], OngoingPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ongoing-ongoing-module-es5.js.map