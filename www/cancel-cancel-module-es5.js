(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cancel-cancel-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/cancel/cancel.page.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/cancel/cancel.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationOngoingCancelCancelPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Cancel</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<ion-item class=\"mt-10\">\n\t\t<ion-label position=\"floating\">Cancel Reason</ion-label>\n\t\t<ion-textarea [(ngModel)]=\"message\" class=\"cancel-input\"></ion-textarea>\n\t</ion-item>\n\t<ion-button\n\t\tclass=\"mt-5\"\n\t\texpand=\"block\"\n\t\tcolor=\"primary\"\n\t\t(click)=\"submitCancel()\"\n\t>\n\t\tSubmit\n\t</ion-button>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/cancel/cancel-routing.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/cancel/cancel-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: CancelPageRoutingModule */

    /***/
    function srcAppPagesNavigationOngoingCancelCancelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancelPageRoutingModule", function () {
        return CancelPageRoutingModule;
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


      var _cancel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cancel.page */
      "./src/app/pages/navigation/ongoing/cancel/cancel.page.ts");

      var routes = [{
        path: '',
        component: _cancel_page__WEBPACK_IMPORTED_MODULE_3__["CancelPage"]
      }];

      var CancelPageRoutingModule = function CancelPageRoutingModule() {
        _classCallCheck(this, CancelPageRoutingModule);
      };

      CancelPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CancelPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/cancel/cancel.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/cancel/cancel.module.ts ***!
      \******************************************************************/

    /*! exports provided: CancelPageModule */

    /***/
    function srcAppPagesNavigationOngoingCancelCancelModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancelPageModule", function () {
        return CancelPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _cancel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cancel-routing.module */
      "./src/app/pages/navigation/ongoing/cancel/cancel-routing.module.ts");
      /* harmony import */


      var _cancel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cancel.page */
      "./src/app/pages/navigation/ongoing/cancel/cancel.page.ts");

      var CancelPageModule = function CancelPageModule() {
        _classCallCheck(this, CancelPageModule);
      };

      CancelPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cancel_routing_module__WEBPACK_IMPORTED_MODULE_5__["CancelPageRoutingModule"]],
        declarations: [_cancel_page__WEBPACK_IMPORTED_MODULE_6__["CancelPage"]]
      })], CancelPageModule);
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/cancel/cancel.page.scss":
    /*!******************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/cancel/cancel.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesNavigationOngoingCancelCancelPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cancel-input > div > textarea {\n  min-height: 15rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9vbmdvaW5nL2NhbmNlbC9jYW5jZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0MsNEJBQUE7QUFESCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vb25nb2luZy9jYW5jZWwvY2FuY2VsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW5jZWwtaW5wdXQge1xuXHQmID4gZGl2IHtcblx0XHQmID4gdGV4dGFyZWEge1xuXHRcdFx0bWluLWhlaWdodDogMTVyZW0gIWltcG9ydGFudDtcblx0XHR9XG5cdH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/navigation/ongoing/cancel/cancel.page.ts":
    /*!****************************************************************!*\
      !*** ./src/app/pages/navigation/ongoing/cancel/cancel.page.ts ***!
      \****************************************************************/

    /*! exports provided: CancelPage */

    /***/
    function srcAppPagesNavigationOngoingCancelCancelPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CancelPage", function () {
        return CancelPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _services_noti_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../services/noti.service */
      "./src/app/services/noti.service.ts");
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

      var CancelPage = /*#__PURE__*/function () {
        function CancelPage(dealService, notiService, route) {
          _classCallCheck(this, CancelPage);

          this.dealService = dealService;
          this.notiService = notiService;
          this.route = route;
          this.date = Math.floor(new Date().getTime() / 1000.0);
          this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

          if (localStorage.getItem('user')) {
            this.userId = JSON.parse(localStorage.getItem('user')).uid;
          }
        }

        _createClass(CancelPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submitCancel",
          value: function submitCancel() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.dealService.updateDeal(this.id, {
                        cancelMessage: this.message,
                        status: 'Canceled',
                        updateDate: this.date,
                        user: this.userId
                      });

                    case 2:
                      _context.next = 4;
                      return this.notiService.createNoti({
                        requestId: this.id,
                        status: 'Canceled',
                        updateDate: this.userId
                      });

                    case 4:
                      _context.next = 6;
                      return this.dealService.getParticipant(this.id).subscribe(function (val) {
                        val.forEach(function (part) {
                          _this.dealService.deleteParticipant(_this.id, part.payload.doc.id);
                        });
                      });

                    case 6:
                      _context.next = 8;
                      return this.dealService.updateDeal(this.id, {
                        participants: {
                          created: false
                        }
                      });

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return CancelPage;
      }();

      CancelPage.ctorParameters = function () {
        return [{
          type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_3__["DealsService"]
        }, {
          type: _services_noti_service__WEBPACK_IMPORTED_MODULE_1__["NotiService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      CancelPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-cancel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cancel.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/ongoing/cancel/cancel.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cancel.page.scss */
        "./src/app/pages/navigation/ongoing/cancel/cancel.page.scss"))["default"]]
      })], CancelPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cancel-cancel-module-es5.js.map