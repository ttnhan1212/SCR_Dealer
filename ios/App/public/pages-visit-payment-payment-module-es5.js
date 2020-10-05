(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-visit-payment-payment-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLogoLogoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-img [src]=\"logo\" class=\"smllogo p-1\"></ion-img>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsStartStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-button expand=\"block\" color=\"tertiary\" (click)=\"navigateToLogin()\">\n\t시작하려면 여기를 클릭하십시오\n</ion-button>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/payment/payment.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/payment/payment.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesVisitPaymentPaymentPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button slot=\"end\" fill=\"clear\" [routerLink]=\"['/','home','deal']\">\n\t\t\t<ion-icon name=\"log-out-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"container\" *ngIf=\"deal?.status === 10\">\n\t<ion-card class=\"text-center vertical-center\">\n\t\t<img\n\t\t\tsrc=\"../../../../../assets/images/cars/2020_nissan_gt_r_nismo_v5-wallpaper-1920x1080.jpg\"\n\t\t\talt=\"../../../../../assets/images/admin-media/0-10.jpg\"\n\t\t/>\n\t\t<ion-card-header> Payment request have been made </ion-card-header>\n\t\t<ion-card-content> SCRoad is checking for your payment </ion-card-content>\n\t</ion-card>\n</ion-content>\n\n<ion-content class=\"container\" *ngIf=\"deal?.status === 11\">\n\t<ion-card class=\"text-center vertical-center\">\n\t\t<img\n\t\t\tsrc=\"../../../../../assets/images/cars/2020_nissan_gt_r_nismo_v5-wallpaper-1920x1080.jpg\"\n\t\t\talt=\"../../../../../assets/images/admin-media/0-10.jpg\"\n\t\t/>\n\t\t<ion-card-header> Payment had been complete </ion-card-header>\n\t\t<ion-card-content> Thank you for choosing SCRoad </ion-card-content>\n\t</ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./start/start.component */
      "./src/app/components/start/start.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./logo/logo.component */
      "./src/app/components/logo/logo.component.ts");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"]],
        exports: [_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/components/logo/logo.component.scss":
    /*!*****************************************************!*\
      !*** ./src/app/components/logo/logo.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLogoLogoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".smllogo {\n  width: 7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWxsb2dvIHtcblx0d2lkdGg6IDdyZW07XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/logo/logo.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/components/logo/logo.component.ts ***!
      \***************************************************/

    /*! exports provided: LogoComponent */

    /***/
    function srcAppComponentsLogoLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
        return LogoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LogoComponent = /*#__PURE__*/function () {
        function LogoComponent() {
          _classCallCheck(this, LogoComponent);

          this.logo = "assets/images/banners/scroadslight.svg";
        }

        _createClass(LogoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LogoComponent;
      }();

      LogoComponent.ctorParameters = function () {
        return [];
      };

      LogoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./logo.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./logo.component.scss */
        "./src/app/components/logo/logo.component.scss"))["default"]]
      })], LogoComponent);
      /***/
    },

    /***/
    "./src/app/components/start/start.component.scss":
    /*!*******************************************************!*\
      !*** ./src/app/components/start/start.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsStartStartComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/start/start.component.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/start/start.component.ts ***!
      \*****************************************************/

    /*! exports provided: StartComponent */

    /***/
    function srcAppComponentsStartStartComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
        return StartComponent;
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

      var StartComponent = /*#__PURE__*/function () {
        function StartComponent(router) {
          _classCallCheck(this, StartComponent);

          this.router = router;
        }

        _createClass(StartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateToLogin",
          value: function navigateToLogin() {
            this.router.navigate(['login']);
          }
        }]);

        return StartComponent;
      }();

      StartComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      StartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./start.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./start.component.scss */
        "./src/app/components/start/start.component.scss"))["default"]]
      })], StartComponent);
      /***/
    },

    /***/
    "./src/app/pages/visit/payment/payment-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/visit/payment/payment-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: PaymentPageRoutingModule */

    /***/
    function srcAppPagesVisitPaymentPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function () {
        return PaymentPageRoutingModule;
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


      var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment.page */
      "./src/app/pages/visit/payment/payment.page.ts");

      var routes = [{
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
      }];

      var PaymentPageRoutingModule = function PaymentPageRoutingModule() {
        _classCallCheck(this, PaymentPageRoutingModule);
      };

      PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PaymentPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/visit/payment/payment.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/visit/payment/payment.module.ts ***!
      \*******************************************************/

    /*! exports provided: PaymentPageModule */

    /***/
    function srcAppPagesVisitPaymentPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function () {
        return PaymentPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/components.module */
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


      var _payment_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./payment-routing.module */
      "./src/app/pages/visit/payment/payment-routing.module.ts");
      /* harmony import */


      var _payment_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./payment.page */
      "./src/app/pages/visit/payment/payment.page.ts");

      var PaymentPageModule = function PaymentPageModule() {
        _classCallCheck(this, PaymentPageModule);
      };

      PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_6__["PaymentPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_7__["PaymentPage"]]
      })], PaymentPageModule);
      /***/
    },

    /***/
    "./src/app/pages/visit/payment/payment.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/pages/visit/payment/payment.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesVisitPaymentPaymentPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  height: 100vh;\n  position: relative;\n}\n\n.vertical-center {\n  position: absolute;\n  top: 45%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzaXQvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7QUFDRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Zpc2l0L3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcblx0aGVpZ2h0OiAxMDB2aDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udmVydGljYWwtY2VudGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDQ1JTtcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/visit/payment/payment.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/visit/payment/payment.page.ts ***!
      \*****************************************************/

    /*! exports provided: PaymentPage */

    /***/
    function srcAppPagesVisitPaymentPaymentPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaymentPage", function () {
        return PaymentPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../services/loader.service */
      "./src/app/services/loader.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/deals.service */
      "./src/app/services/deals.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PaymentPage = /*#__PURE__*/function () {
        function PaymentPage(dealService, route, router, loader) {
          _classCallCheck(this, PaymentPage);

          this.dealService = dealService;
          this.route = route;
          this.router = router;
          this.loader = loader;
          this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
        }

        _createClass(PaymentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDealDetail();
          }
        }, {
          key: "getDealDetail",
          value: function getDealDetail() {
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
                      return this.dealService.getDealDetail(this.id).subscribe(function (val) {
                        _this.deal = val.payload.data();

                        _this.loader.hideLoader();

                        console.log(_this.deal);
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return PaymentPage;
      }();

      PaymentPage.ctorParameters = function () {
        return [{
          type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_3__["DealsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]
        }];
      };

      PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./payment.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/payment/payment.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./payment.page.scss */
        "./src/app/pages/visit/payment/payment.page.scss"))["default"]]
      })], PaymentPage);
      /***/
    },

    /***/
    "./src/app/services/loader.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/loader.service.ts ***!
      \********************************************/

    /*! exports provided: LoaderService */

    /***/
    function srcAppServicesLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
        return LoaderService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LoaderService = /*#__PURE__*/function () {
        function LoaderService(loadingController) {
          _classCallCheck(this, LoaderService);

          this.loadingController = loadingController;
        }

        _createClass(LoaderService, [{
          key: "showLoader",
          value: function showLoader() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        message: 'Please wait...',
                        showBackdrop: true
                      }).then(function (res) {
                        res.present();
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "hideLoader",
          value: function hideLoader() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.loadingController.dismiss().then(function (res) {
                        console.log('Loading dismissed!', res);
                      })["catch"](function (err) {
                        console.log('error', err);
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return LoaderService;
      }();

      LoaderService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }];
      };

      LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], LoaderService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-visit-payment-payment-module-es5.js.map