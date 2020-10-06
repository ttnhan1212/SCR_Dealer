(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-visit-paymentcomplete-certificationupload-certificationupload-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.html":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesVisitPaymentcompleteCertificationuploadCertificationuploadPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t\t<ion-button slot=\"end\" fill=\"clear\" [routerLink]=\"['/','home','deal']\">\n\t\t\t<ion-icon name=\"log-out-outline\"></ion-icon>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"deal?.status >= 7 && deal?.status < 9\" class=\"container\">\n\t<ion-card class=\"text-center vertical-center\">\n\t\t<img\n\t\t\tsrc=\"../../../../../assets/images/cars/2020_nissan_gt_r_nismo_v5-wallpaper-1920x1080.jpg\"\n\t\t\talt=\"../../../../../assets/images/admin-media/0-10.jpg\"\n\t\t/>\n\t\t<ion-card-header> Seller is making review </ion-card-header>\n\t\t<ion-card-content> Please wait.... </ion-card-content>\n\t</ion-card>\n</ion-content>\n\n<ion-content *ngIf=\"deal?.status === 9\">\n\t<ion-card>\n\t\t<ion-card-content>\n\t\t\t<form>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<ngx-dropzone (change)=\"onSelect($event)\">\n\t\t\t\t\t\t<ngx-dropzone-label\n\t\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.upload_cert_instruction' |\n\t\t\t\t\t\t\ttranslate}}</ngx-dropzone-label\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<ngx-dropzone-image-preview\n\t\t\t\t\t\t\tngProjectAs=\"ngx-dropzone-preview\"\n\t\t\t\t\t\t\t*ngFor=\"let f of files\"\n\t\t\t\t\t\t\t[file]=\"f\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</ngx-dropzone-image-preview>\n\t\t\t\t\t</ngx-dropzone>\n\t\t\t\t</div>\n\t\t\t\t<br />\n\t\t\t\t<ion-item class=\"form-group\" lines=\"none\">\n\t\t\t\t\t<h1>\n\t\t\t\t\t\t<span style=\"padding-right: 15px\">2009</span\n\t\t\t\t\t\t><span style=\"padding-right: 15px\">K-5</span\n\t\t\t\t\t\t><span style=\"padding-right: 15px; font-size: 11pt\">12가1234</span>\n\t\t\t\t\t</h1>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label style=\"color: #808080\"\n\t\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.purchase_amount' |\n\t\t\t\t\t\t\ttranslate}}</ion-label\n\t\t\t\t\t\t>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label style=\"font-size: 24px\">1,999,000</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t<ion-list>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label style=\"color: #808080\"\n\t\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.purchase_date' |\n\t\t\t\t\t\t\ttranslate}}</ion-label\n\t\t\t\t\t\t>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-label style=\"font-size: 24px\">2020-05-01 11:30</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-list>\n\t\t\t\t<br />\n\t\t\t\t<div id=\"uploadCertBtn\" *ngIf=\"!isShow\">\n\t\t\t\t\t<ion-button\n\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\tsize=\"medium\"\n\t\t\t\t\t\tclass=\"uploadbtn\"\n\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.upload_certification' |\n\t\t\t\t\t\ttranslate}}</ion-button\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"fileExist\" *ngIf=\"isShow\">\n\t\t\t\t\t<div class=\"text-content\" style=\"color: black\">\n\t\t\t\t\t\tLorem Ipsum is simply dummy text of the printing and typesetting\n\t\t\t\t\t\tindustry. Lorem Ipsum has been the industry's standard dummy text\n\t\t\t\t\t\tever since the 1500s, when an unknown printer took a galley of type\n\t\t\t\t\t\tand scrambled it to make a type specimen book. It has survived not\n\t\t\t\t\t\tonly five centuries, but also the leap into electronic typesetting,\n\t\t\t\t\t</div>\n\t\t\t\t\t<br />\n\t\t\t\t\t<ion-button\n\t\t\t\t\t\texpand=\"full\"\n\t\t\t\t\t\tcolor=\"tertiary\"\n\t\t\t\t\t\tsize=\"medium\"\n\t\t\t\t\t\t(click)=\"paymentComplete()\"\n\t\t\t\t\t\t>{{'home_visit_result_paymentcomplete.payment_complete' |\n\t\t\t\t\t\ttranslate}}</ion-button\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload-routing.module.ts":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload-routing.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: CertificationuploadPageRoutingModule */

    /***/
    function srcAppPagesVisitPaymentcompleteCertificationuploadCertificationuploadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificationuploadPageRoutingModule", function () {
        return CertificationuploadPageRoutingModule;
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


      var _certificationupload_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./certificationupload.page */
      "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.ts");

      var routes = [{
        path: '',
        component: _certificationupload_page__WEBPACK_IMPORTED_MODULE_3__["CertificationuploadPage"]
      }];

      var CertificationuploadPageRoutingModule = function CertificationuploadPageRoutingModule() {
        _classCallCheck(this, CertificationuploadPageRoutingModule);
      };

      CertificationuploadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CertificationuploadPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.module.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: HttpLoaderFactory, CertificationuploadPageModule */

    /***/
    function srcAppPagesVisitPaymentcompleteCertificationuploadCertificationuploadModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificationuploadPageModule", function () {
        return CertificationuploadPageModule;
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


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-dropzone */
      "./node_modules/ngx-dropzone/__ivy_ngcc__/fesm2015/ngx-dropzone.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _certificationupload_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./certificationupload-routing.module */
      "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload-routing.module.ts");
      /* harmony import */


      var _certificationupload_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./certificationupload.page */
      "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http);
      }

      var CertificationuploadPageModule = function CertificationuploadPageModule() {
        _classCallCheck(this, CertificationuploadPageModule);
      };

      CertificationuploadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__["NgxDropzoneModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _certificationupload_routing_module__WEBPACK_IMPORTED_MODULE_7__["CertificationuploadPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
          }
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
        declarations: [_certificationupload_page__WEBPACK_IMPORTED_MODULE_8__["CertificationuploadPage"]]
      })], CertificationuploadPageModule);
      /***/
    },

    /***/
    "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.scss":
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesVisitPaymentcompleteCertificationuploadCertificationuploadPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "textarea {\n  height: 100px !important;\n}\n\nion-title {\n  padding: 0 !important;\n}\n\n.breadcrumb-item a {\n  color: #3f80ff;\n}\n\n.page-header {\n  margin-top: 0.7rem;\n}\n\n.mylabel {\n  font-family: \"Noto Sans KR\";\n  font-size: 14px;\n}\n\n.mytimepicker {\n  font-size: 14px;\n}\n\nion-item {\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n}\n\n* {\n  font-family: \"Noto Sans KR\", sans-serif !important;\n}\n\n.text-content {\n  min-height: 150px;\n  text-align: center;\n  border: 1px solid #000080;\n}\n\n.container {\n  height: 100vh;\n  position: relative;\n}\n\n.vertical-center {\n  position: absolute;\n  top: 45%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzaXQvcGF5bWVudGNvbXBsZXRlL2NlcnRpZmljYXRpb251cGxvYWQvY2VydGlmaWNhdGlvbnVwbG9hZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyx3QkFBQTtBQUFEOztBQUdBO0VBQ0MscUJBQUE7QUFBRDs7QUFHQTtFQUNDLGNBQUE7QUFBRDs7QUFHQTtFQUNDLGtCQUFBO0FBQUQ7O0FBR0E7RUFDQywyQkFBQTtFQUNBLGVBQUE7QUFBRDs7QUFHQTtFQUNDLGVBQUE7QUFBRDs7QUFHQTtFQUNDLHdCQUFBO0VBQ0Esb0JBQUE7QUFBRDs7QUFHQTtFQUNDLGtEQUFBO0FBQUQ7O0FBR0E7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRDs7QUFHQTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtBQUFEOztBQUdBO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7QUFBRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Zpc2l0L3BheW1lbnRjb21wbGV0ZS9jZXJ0aWZpY2F0aW9udXBsb2FkL2NlcnRpZmljYXRpb251cGxvYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG50ZXh0YXJlYSB7XG5cdGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRpdGxlIHtcblx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uYnJlYWRjcnVtYi1pdGVtIGEge1xuXHRjb2xvcjogIzNmODBmZjtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcblx0bWFyZ2luLXRvcDogMC43cmVtO1xufVxuXG4ubXlsYWJlbCB7XG5cdGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJztcblx0Zm9udC1zaXplOiAxNHB4O1xufVxuXG4ubXl0aW1lcGlja2VyIHtcblx0Zm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24taXRlbSB7XG5cdC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbioge1xuXHRmb250LWZhbWlseTogJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuLnRleHQtY29udGVudCB7XG5cdG1pbi1oZWlnaHQ6IDE1MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMwMDAwODA7XG59XG5cbi5jb250YWluZXIge1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi52ZXJ0aWNhbC1jZW50ZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNDUlO1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.ts ***!
      \*********************************************************************************************/

    /*! exports provided: CertificationuploadPage */

    /***/
    function srcAppPagesVisitPaymentcompleteCertificationuploadCertificationuploadPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificationuploadPage", function () {
        return CertificationuploadPage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/deals.service */
      "./src/app/services/deals.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CertificationuploadPage = /*#__PURE__*/function () {
        function CertificationuploadPage(translate, dealService, route, router, loader) {
          _classCallCheck(this, CertificationuploadPage);

          this.dealService = dealService;
          this.route = route;
          this.router = router;
          this.loader = loader;
          this.files = [];
          this.isShow = false;
          this.id = this.route.snapshot.paramMap.get('id'); //get id parameter

          translate.addLangs(['en', 'kr']); // this language will be used as a fallback when a translation isn't found in the current language

          translate.setDefaultLang('kr'); // the lang to use, if the lang isn't available, it will use the current loader to get them

          translate.use('kr');
        }

        _createClass(CertificationuploadPage, [{
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
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            var _this$files;

            console.log(event);

            (_this$files = this.files).push.apply(_this$files, _toConsumableArray(event.addedFiles));

            if (this.files) {
              this.isShow = !this.isShow;
            }
          }
        }, {
          key: "paymentComplete",
          value: function paymentComplete() {
            var content = {};
            this.dealService.createPayment(this.id, content);
            this.dealService.updateDeal(this.id, {
              status: 10
            });
            this.router.navigate(['/', 'home', 'deal']);
          }
        }]);

        return CertificationuploadPage;
      }();

      CertificationuploadPage.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: src_app_services_deals_service__WEBPACK_IMPORTED_MODULE_3__["DealsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]
        }];
      };

      CertificationuploadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-certificationupload',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./certificationupload.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./certificationupload.page.scss */
        "./src/app/pages/visit/paymentcomplete/certificationupload/certificationupload.page.scss"))["default"]]
      })], CertificationuploadPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-visit-paymentcomplete-certificationupload-certificationupload-module-es5.js.map