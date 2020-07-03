function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dealdetail-dealdetail-module~navigation-dealdetail-dealdetail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/dealdetail/dealdetail.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/dealdetail/dealdetail.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNavigationDealdetailDealdetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title class=\"smllogo\">\n\t\t\t<app-logo></app-logo>\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\t<!--BreadCrumb-->\n\t<ion-card>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"page-header\">\n\t\t\t\t<!-- <h4 class=\"page-title\">Cars</h4> -->\n\t\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t\t<li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n\t\t\t\t\t<li class=\"breadcrumb-item\"><a href=\"#\">Request</a></li>\n\t\t\t\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Details</li>\n\t\t\t\t</ol>\n\t\t\t</div>\n\t\t</div>\n\t</ion-card>\n\t<!--/BreadCrumb-->\n\t<ion-item>\n\t\t<ion-grid class=\"container\">\n\t\t\t<ion-row class=\"row\">\n\t\t\t\t<ion-col class=\"col-xl-8 col-lg-8 col-md-12\">\n\t\t\t\t\t<!--Classified Description-->\n\t\t\t\t\t<div class=\"card overflow-hidden\">\n\t\t\t\t\t\t<div class=\"ribbon ribbon-top-right text-danger\">\n\t\t\t\t\t\t\t<span class=\"bg-danger\">Offer</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"item-det mb-4\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"text-dark\">\n\t\t\t\t\t\t\t\t\t<h3>Harlequini Dawn</h3>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t<ul class=\"d-flex mb-0\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-car text-muted mr-1 fs-18\"></i> Cars</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-location-pin text-muted mr-1\"></i> USA</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-calendar text-muted mr-1\"></i> 5 hours\n\t\t\t\t\t\t\t\t\t\t\t\tago</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"mr-5\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"icons\"\n\t\t\t\t\t\t\t\t\t\t\t\t><i class=\"ti-eye text-muted mr-1 fs-15\"></i> 765</a\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div class=\"rating-stars d-flex mr-5\">\n\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\t\t\t\t\t\treadonly=\"readonly\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"rating-value star\"\n\t\t\t\t\t\t\t\t\t\t\tname=\"rating-stars-value\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"rating-stars-value\"\n\t\t\t\t\t\t\t\t\t\t\tvalue=\"4\"\n\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars-container mr-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t4.0\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"rating-stars d-flex\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"rating-stars-container mr-2\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating-star sm\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t135\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/cars/2010-marussia-b2-2.jpg\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/cars/2010-marussia-b2-2.jpg\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t\t<ion-slide>\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\tsrc=\"../../../assets/images/cars/2010-marussia-b2-2.jpg\"\n\t\t\t\t\t\t\t\t\t\talt=\"img\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</ion-slide>\n\t\t\t\t\t\t\t</ion-slides>\n\t\t\t\t\t\t\t<!-- <div class=\"product-slider\">\n                <div id=\"carousel\" class=\"carousel slide\" data-ride=\"carousel\">\n                  <div class=\"arrow-ribbon2 bg-primary\">$539</div>\n                  <div class=\"carousel-inner\">\n                    <div class=\"carousel-item active\"> <img src=\"../../../assets/images/cars/2010-marussia-b2-2.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/v2.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/v3.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/v4.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/v5.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/1.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/2.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/3.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/4.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/5.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/6.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/7.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/8.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/9.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/10.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/11.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/12.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/13.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/14.jpg\" alt=\"img\"> </div>\n                    <div class=\"carousel-item\"> <img src=\"../assets/images/media/gallery/v6.jpg\" alt=\"img\"> </div>\n                  </div>\n                  <a class=\"carousel-control-prev\" href=\"#carousel\" role=\"button\" data-slide=\"prev\">\n                    <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                  </a>\n                  <a class=\"carousel-control-next\" href=\"#carousel\" role=\"button\" data-slide=\"next\">\n                    <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n                  </a>\n                </div>\n                <div class=\"clearfix\">\n                  <div id=\"thumbcarousel\" class=\"carousel thumbcarousel slide\" data-interval=\"false\">\n                    <div class=\"carousel-inner\">\n                      <div class=\"carousel-item active\">\n                        <div data-target=\"#carousel\" data-slide-to=\"0\" class=\"thumb\"><img src=\"../assets/images/media/gallery/v1.png\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"1\" class=\"thumb\"><img src=\"../assets/images/media/gallery/v2.png\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"2\" class=\"thumb\"><img src=\"../assets/images/media/gallery/v3.png\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"3\" class=\"thumb\"><img src=\"../assets/images/media/gallery/v4.png\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"4\" class=\"thumb\"><img src=\"../assets/images/media/gallery/v5.png\" alt=\"img\"></div>\n                      </div>\n                      <div class=\"carousel-item \">\n                        <div data-target=\"#carousel\" data-slide-to=\"5\" class=\"thumb\"><img src=\"../assets/images/media/gallery/1.jpg\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"6\" class=\"thumb\"><img src=\"../assets/images/media/gallery/2.jpg\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"7\" class=\"thumb\"><img src=\"../assets/images/media/gallery/3.jpg\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"8\" class=\"thumb\"><img src=\"../assets/images/media/gallery/4.jpg\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"9\" class=\"thumb\"><img src=\"../assets/images/media/gallery/5.jpg\" alt=\"img\"></div>\n                      </div>\n                      <div class=\"carousel-item \">\n                        <div data-target=\"#carousel\" data-slide-to=\"10\" class=\"thumb\"><img src=\"../assets/images/media/gallery/6.jpg\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"11\" class=\"thumb\"><img src=\"../assets/images/media/gallery/7.jpg\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"12\" class=\"thumb\"><img src=\"../assets/images/media/gallery/8.jpg\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"13\" class=\"thumb\"><img src=\"../assets/images/media/gallery/9.jpg\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"14\" class=\"thumb\"><img src=\"../assets/images/media/gallery/10.jpg\" alt=\"img\"></div>\n                      </div>\n                      <div class=\"carousel-item \">\n                        <div data-target=\"#carousel\" data-slide-to=\"15\" class=\"thumb\"><img src=\"../assets/images/media/gallery/11.jpg\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"16\" class=\"thumb\"><img src=\"../assets/images/media/gallery/12.jpg\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"17\" class=\"thumb\"><img src=\"../assets/images/media/gallery/13.jpg\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"18\" class=\"thumb\"><img src=\"../assets/images/media/gallery/14.jpg\" alt=\"img\"></div>\n                        <div data-target=\"#carousel\" data-slide-to=\"19\" class=\"thumb\"><img src=\"../assets/images/media/gallery/v6.png\" alt=\"img\"></div>\n                      </div>\n  \n                    </div>\n                    <a class=\"carousel-control-prev\" href=\"#thumbcarousel\" role=\"button\" data-slide=\"prev\">\n                      <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#thumbcarousel\" role=\"button\" data-slide=\"next\">\n                      <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n                    </a>\n                  </div>\n                </div>\n              </div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"mb-4 overflow-hidden\">\n            <div class=\"\">\n              <div class=\"border-0\">\n                <div class=\"wideget-user-tab wideget-user-tab3\">\n                  <div class=\"tab-menu-heading\">\n                    <div class=\"tabs-menu1\">\n                      <ul class=\"nav\">\n                        <li class=\"\"><a href=\"#tab-1\" class=\"active\" data-toggle=\"tab\">Overview</a></li>\n                        <li><a href=\"#tab-3\" data-toggle=\"tab\" class=\"\">Features & Option</a></li>\n                        <li><a href=\"#tab-4\" data-toggle=\"tab\" class=\"\">Vehicle Information</a></li>\n                        <li><a href=\"#tab-5\" data-toggle=\"tab\" class=\"\">About Video</a></li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-content border-left border-right border-top br-tr-3 p-5 bg-white\">\n                  <div class=\"tab-pane active\" id=\"tab-1\">\n                    <h3 class=\"card-title mb-3 font-weight-semibold\">Overview</h3>\n                    <div class=\"mb-4\">\n                      <p>Killington odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atcorrupti\n                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt\n                        in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>\n                      <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled\n                        and demoraliz the charms of pleasure of the moment, so blinded by desire, that they cannot\n                        foresee the pain and trouble thena bound to ensue; and equal blame belongs to those who fail in\n                        their duty through weakness of will, which is the same as saying through shrinking from toil and\n                        pain.</p>\n                    </div>\n                    <h4 class=\"mb-4\">Specifications</h4>\n                    <div class=\"row\">\n                      <div class=\"col-xl-12 col-md-12\">\n                        <div class=\"table-responsive\">\n                          <table class=\"table table-bordered w-100 m-0 text-nowrap \">\n                            <tbody>\n                              <tr>\n                                <td><span class=\"font-weight-bold\">Fuel Type :</span> Diesel</td>\n                                <td><span class=\"font-weight-bold\">Breaks :</span> Front , Rear</td>\n                              </tr>\n                              <tr>\n                                <td><span class=\"font-weight-bold\">Seating :</span> 5 members</td>\n                                <td><span class=\"font-weight-bold\">Colors :</span> Red , pink, Gray</td>\n                              </tr>\n                              <tr>\n                                <td><span class=\"font-weight-bold\">Air Bags :</span> Available</td>\n                                <td><span class=\"font-weight-bold\">Colors :</span> Red , pink, Gray</td>\n                              </tr>\n                              <tr>\n                                <td><span class=\"font-weight-bold\">Engine :</span> F8D </td>\n                                <td><span class=\"font-weight-bold\">Power Windows :</span> Available </td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"tab-pane\" id=\"tab-3\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <div class=\"table-responsive\">\n                          <table class=\"table table-bordered border-top mb-0\">\n                            <tbody>\n                              <tr>\n                                <td>Power Steering</td>\n                                <td><i class=\"icon icon-check text-success\"></i></td>\n                              </tr>\n                              <tr>\n                                <td>Power Windows Front</td>\n                                <td><i class=\"icon icon-check text-success\"></i></td>\n                              </tr>\n                              <tr>\n                                <td>Air Conditioner</td>\n                                <td><i class=\"icon icon-check text-success\"></i></td>\n                              </tr>\n                              <tr>\n                                <td>Passenger Airbag</td>\n                                <td><i class=\"icon icon-close text-danger\"></i></td>\n                              </tr>\n                              <tr>\n                                <td>Fog Lights - Front</td>\n                                <td><i class=\"icon icon-close text-danger\"></i></td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <div class=\"table-responsive\">\n                          <table class=\"table table-bordered border-top mb-0\">\n                            <tbody>\n\n                              <tr>\n                                <td>Anti Lock Braking System</td>\n                                <td><i class=\"icon icon-check text-success\"></i></td>\n                              </tr>\n                              <tr>\n                                <td>Driver Airbag</td>\n                                <td><i class=\"icon icon-check text-success\"></i></td>\n                              </tr>\n                              <tr>\n                                <td>Wheel Covers</td>\n                                <td><i class=\"icon icon-check text-success\"></i></td>\n                              </tr>\n                              <tr>\n                                <td>Automatic Climate Control</td>\n                                <td><i class=\"icon icon-close text-danger\"></i></td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"tab-pane\" id=\"tab-4\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"table-responsive\">\n                          <table class=\"table table-bordered border-top mb-0\">\n                            <tbody>\n                              <tr>\n                                <td>ARAI Mileage</td>\n                                <td>24.7 km/kg</td>\n                              </tr>\n                              <tr>\n                                <td>Engine Displacement (cc)</td>\n                                <td>796</td>\n                              </tr>\n                              <tr>\n                                <td>Max Torque (nm@rpm)</td>\n                                <td>69Nm@3500rpm</td>\n                              </tr>\n                              <tr>\n                                <td>Seating Capacity</td>\n                                <td>5</td>\n                              </tr>\n                              <tr>\n                                <td>Boot Space (Litres)</td>\n                                <td>177</td>\n                              </tr>\n                              <tr>\n                                <td>Fuel Type</td>\n                                <td>CNG</td>\n                              </tr>\n                              <tr>\n                                <td>Max Power (bhp@rpm)</td>\n                                <td>47.3bhp@6000rpm</td>\n                              </tr>\n                              <tr>\n                                <td>TransmissionType</td>\n                                <td>Manual</td>\n                              </tr>\n                              <tr>\n                                <td>Fuel Tank Capacity</td>\n                                <td>35</td>\n                              </tr>\n                              <tr>\n                                <td>Body Type</td>\n                                <td>Hatchback</td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"tab-pane\" id=\"tab-5\">\n                    <ul class=\"list-unstyled video-list-thumbs row \">\n                      <li class=\"mb-0\">\n                        <a data-toggle=\"modal\" data-target=\"#homeVideo\">\n                          <img src=\"../assets/images/media/others/v1.jpg\" alt=\"Barca\" class=\"img-responsive\">\n                          <span class=\"mdi mdi-arrow-right-drop-circle-outline text-white\"></span>\n                        </a>\n                      </li>\n                    </ul>\n\n                  </div>\n                </div>\n                <div class=\"pt-4 pb-4 pl-5 pr-5 border-top border-left border-right bg-white\">\n                  <div class=\"list-id\">\n                    <div class=\"row\">\n                      <div class=\"col\">\n                        <a class=\"mb-0\">Classified ID : #8256358</a>\n                      </div>\n                      <div class=\"col col-auto\">\n                        Posted By <a class=\"mb-0 font-weight-bold\">Individual</a> / 21st Dec 2019\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card-footer bg-white border-left border-right border-bottom br-br-3 br-bl-3\">\n                  <div class=\"icons\">\n                    <a href=\"#\" class=\"btn btn-info icons\"><i class=\"icon icon-share mr-1\"></i> Share Ad</a>\n                    <a href=\"#\" class=\"btn btn-primary icons\"><i class=\"icon icon-heart  mr-1\"></i> 678</a>\n                    <a href=\"#\" class=\"btn btn-secondary icons\"><i class=\"icon icon-printer  mr-1\"></i> Print</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div> -->\n\t\t\t\t\t<!--/Classified Description-->\n\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<mat-accordion>\n\t\t\t\t\t\t\t<!-- <mat-expansion-panel hideToggle>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    This is the expansion title\n                  </mat-panel-title>\n                  <mat-panel-description>\n                    This is a summary of the content\n                  </mat-panel-description>\n                </mat-expansion-panel-header>\n                <p>This is the primary content of the panel.</p>\n              </mat-expansion-panel> -->\n\t\t\t\t\t\t\t<mat-expansion-panel\n\t\t\t\t\t\t\t\t(opened)=\"panelOpenState = true\"\n\t\t\t\t\t\t\t\t(closed)=\"panelOpenState = false\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t\t\tOverview\n\t\t\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\t\t\t\tShow details\n\t\t\t\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tKillington odio dignissimos ducimus qui blanditiis praesentium\n\t\t\t\t\t\t\t\t\tvoluptatum deleniti atcorrupti quos dolores et quas molestias\n\t\t\t\t\t\t\t\t\texcepturi sint occaecati cupiditate non provident, similique\n\t\t\t\t\t\t\t\t\tsunt in culpa qui officia deserunt mollitia animi, id est\n\t\t\t\t\t\t\t\t\tlaborum et dolorum fuga.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</mat-expansion-panel>\n\n\t\t\t\t\t\t\t<mat-expansion-panel\n\t\t\t\t\t\t\t\t(opened)=\"panelOpenState = true\"\n\t\t\t\t\t\t\t\t(closed)=\"panelOpenState = false\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t\t\tFeatures & Options\n\t\t\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\t\t\t\tShow details\n\t\t\t\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t<p>I'm visible because I am open</p>\n\t\t\t\t\t\t\t</mat-expansion-panel>\n\n\t\t\t\t\t\t\t<mat-expansion-panel\n\t\t\t\t\t\t\t\t(opened)=\"panelOpenState = true\"\n\t\t\t\t\t\t\t\t(closed)=\"panelOpenState = false\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t\t\tVehicle Info\n\t\t\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\t\t\t\tShow details\n\t\t\t\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t<p>I'm visible because I am open</p>\n\t\t\t\t\t\t\t</mat-expansion-panel>\n\n\t\t\t\t\t\t\t<mat-expansion-panel\n\t\t\t\t\t\t\t\t(opened)=\"panelOpenState = true\"\n\t\t\t\t\t\t\t\t(closed)=\"panelOpenState = false\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\t\t\t\tAbout video\n\t\t\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\t\t\t\tShow details\n\t\t\t\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t<p>I'm visible because I am open</p>\n\t\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t\t</mat-accordion>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ion-row style=\"height: 1rem;\"></ion-row>\n\t\t\t\t\t<ion-card class=\"card-body\">\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\tid=\"name1\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Input your bidding price\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <ion-button href=\"#\">\n                  <ion-icon name=\"cash-outline\"></ion-icon>\n                </ion-button> -->\n\t\t\t\t\t\t\t\t<ion-button expand=\"full\" color=\"tertiary\" size=\"large\">\n\t\t\t\t\t\t\t\t\t<ion-icon name=\"wallet\"></ion-icon>\n\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/navigation/dealdetail/dealdetail-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/navigation/dealdetail/dealdetail-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: DealdetailPageRoutingModule */

  /***/
  function srcAppPagesNavigationDealdetailDealdetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealdetailPageRoutingModule", function () {
      return DealdetailPageRoutingModule;
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


    var _dealdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dealdetail.page */
    "./src/app/pages/navigation/dealdetail/dealdetail.page.ts");

    var routes = [{
      path: '',
      component: _dealdetail_page__WEBPACK_IMPORTED_MODULE_3__["DealdetailPage"]
    }];

    var DealdetailPageRoutingModule = function DealdetailPageRoutingModule() {
      _classCallCheck(this, DealdetailPageRoutingModule);
    };

    DealdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DealdetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/navigation/dealdetail/dealdetail.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/navigation/dealdetail/dealdetail.module.ts ***!
    \******************************************************************/

  /*! exports provided: DealdetailPageModule */

  /***/
  function srcAppPagesNavigationDealdetailDealdetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealdetailPageModule", function () {
      return DealdetailPageModule;
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


    var _dealdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dealdetail-routing.module */
    "./src/app/pages/navigation/dealdetail/dealdetail-routing.module.ts");
    /* harmony import */


    var _dealdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dealdetail.page */
    "./src/app/pages/navigation/dealdetail/dealdetail.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");

    var DealdetailPageModule = function DealdetailPageModule() {
      _classCallCheck(this, DealdetailPageModule);
    };

    DealdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _dealdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DealdetailPageRoutingModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"]],
      declarations: [_dealdetail_page__WEBPACK_IMPORTED_MODULE_6__["DealdetailPage"]]
    })], DealdetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/navigation/dealdetail/dealdetail.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/navigation/dealdetail/dealdetail.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNavigationDealdetailDealdetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".breadcrumb-item a {\n  color: #3f80FF;\n}\n\n.page-header {\n  margin-top: 0.8rem;\n}\n\n.bg-primary {\n  background-color: #e72a1a !important;\n}\n\n.h3, h3 {\n  font-size: 1.5rem;\n  font-family: \"Poppins\", sans-serif;\n}\n\n@media only screen and (max-width: 800px) {\n  .arrow-ribbon2 {\n    font-size: 22px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .arrow-ribbon2:before {\n    left: 100%;\n    width: unset;\n    border-top: 15px solid transparent;\n    border-bottom: 15px solid transparent;\n    border-left: 15px solid #e72a1a;\n  }\n}\n\nion-item {\n  --inner-padding-end: 0.4rem;\n  --padding-start: 0.4rem;\n  --background: var(--ion-item-background, var(--ion-background-color, #f1f5fd));\n}\n\nion-content {\n  --background: #f1f5fd;\n}\n\n.mat-expansion-panel-header-title, .mat-expansion-panel-header-description {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmF2aWdhdGlvbi9kZWFsZGV0YWlsL2RlYWxkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBQ0E7RUFDSTtJQUNJLGVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUFFTjtFQURNO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxrQ0FBQTtJQUNBLHFDQUFBO0lBQ0EsK0JBQUE7RUFHVjtBQUNGOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSx1QkFBQTtFQUNBLDhFQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmlnYXRpb24vZGVhbGRldGFpbC9kZWFsZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iLWl0ZW0gYSB7XG4gICAgY29sb3I6ICMzZjgwRkY7XG59XG5cbi5wYWdlLWhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogMC44cmVtO1xufVxuXG4uYmctcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3MmExYSAhaW1wb3J0YW50O1xufVxuXG4uaDMsIGgzIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5hcnJvdy1yaWJib24ye1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogdW5zZXQ7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNlNzJhMWE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuaW9uLWl0ZW0ge1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDAuNHJlbTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNHJlbTtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjFmNWZkKSk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMWY1ZmQ7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/navigation/dealdetail/dealdetail.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/navigation/dealdetail/dealdetail.page.ts ***!
    \****************************************************************/

  /*! exports provided: DealdetailPage */

  /***/
  function srcAppPagesNavigationDealdetailDealdetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealdetailPage", function () {
      return DealdetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DealdetailPage = /*#__PURE__*/function () {
      function DealdetailPage() {
        _classCallCheck(this, DealdetailPage);

        this.slideOpts = {
          initialSlide: 1,
          speed: 400
        };
      }

      _createClass(DealdetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DealdetailPage;
    }();

    DealdetailPage.ctorParameters = function () {
      return [];
    };

    DealdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dealdetail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dealdetail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navigation/dealdetail/dealdetail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dealdetail.page.scss */
      "./src/app/pages/navigation/dealdetail/dealdetail.page.scss"))["default"]]
    })], DealdetailPage);
    /***/
  }
}]);
//# sourceMappingURL=default~dealdetail-dealdetail-module~navigation-dealdetail-dealdetail-module-es5.js.map