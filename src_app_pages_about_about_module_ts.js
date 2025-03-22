(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 73794:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./about.component.html */ 45467);
/* harmony import */ var _about_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.scss */ 40865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);





let AboutComponent = class AboutComponent {
    constructor(appService) {
        this.appService = appService;
        this.config = {};
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true
        };
    }
    ngOnInit() {
        this.imageNosotros = this.appService.getImagesNosotros();
        this.achievements = this.appService.getAchievements();
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 1,
            keyboard: false,
            navigation: true,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            pagination: this.pagination,
            autoHeight: true,
            autoplay: true,
            updateOnWindowResize: true
        };
    }
};
AboutComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-about',
        template: _raw_loader_about_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutComponent);



/***/ }),

/***/ 18114:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ 73794);






const routes = [
    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, pathMatch: 'full' }
];
let AboutModule = class AboutModule {
};
AboutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], AboutModule);



/***/ }),

/***/ 40865:
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".testimonials-carousel .swiper-container {\n  padding-bottom: 30px;\n  height: auto;\n}\n.testimonials-carousel .swiper-container .content {\n  max-width: 650px;\n  margin: auto;\n  height: auto;\n}\n.testimonials-carousel .swiper-container .content img {\n  width: 100%;\n  height: auto;\n}\n.banner-bg img {\n  width: 100%;\n}\n.imgs-height {\n  max-height: 450px !important;\n  width: auto !important;\n}\n.right {\n  margin-right: 20px;\n}\n.left {\n  margin-left: 20px;\n}\n.text-box {\n  flex: 1;\n  min-width: 50%;\n  /* Set a minimum width for the text container */\n}\n.order-1 {\n  order: -1;\n  /* Move the text container to the top on smaller screens */\n}\n.order1 {\n  order: 1;\n  /* Move the text container to the top on smaller screens */\n}\n.video-box,\n.img-box {\n  min-width: 300px;\n  margin-bottom: 16px;\n}\n.img-box img {\n  width: 300px;\n}\n.img-box img:hover {\n  transform: scale(1.1);\n  transition: all 0.3s ease;\n}\n.d-flex {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n}\n@media screen and (min-width: 320px) and (max-width: 759px) {\n  .imgs-height {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FBQUo7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDTjtBQUFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFUjtBQUdBO0VBQ0UsV0FBQTtBQUFGO0FBRUE7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDQTtFQUNFLGtCQUFBO0FBRUY7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7QUFEQTtFQUNFLE9BQUE7RUFDQSxjQUFBO0VBQWdCLCtDQUFBO0FBS2xCO0FBSEE7RUFDRSxTQUFBO0VBQVcsMERBQUE7QUFPYjtBQUxBO0VBQ0UsUUFBQTtFQUFVLDBEQUFBO0FBU1o7QUFQQTs7RUFFRSxnQkFBQTtFQUNBLG1CQUFBO0FBVUY7QUFSQTtFQUNFLFlBQUE7QUFXRjtBQVZFO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQVlKO0FBUkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFXRjtBQVJBO0VBQ0U7SUFDRSxzQkFBQTtFQVdGO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdGltb25pYWxzLWNhcm91c2VsIHtcbiAgLnN3aXBlci1jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICAuY29udGVudCB7XG4gICAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5iYW5uZXItYmcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW1ncy1oZWlnaHR7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG4ucmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLnRleHQtYm94IHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7IC8qIFNldCBhIG1pbmltdW0gd2lkdGggZm9yIHRoZSB0ZXh0IGNvbnRhaW5lciAqL1xufVxuLm9yZGVyLTEge1xuICBvcmRlcjogLTE7IC8qIE1vdmUgdGhlIHRleHQgY29udGFpbmVyIHRvIHRoZSB0b3Agb24gc21hbGxlciBzY3JlZW5zICovXG59XG4ub3JkZXIxIHtcbiAgb3JkZXI6IDE7IC8qIE1vdmUgdGhlIHRleHQgY29udGFpbmVyIHRvIHRoZSB0b3Agb24gc21hbGxlciBzY3JlZW5zICovXG59XG4udmlkZW8tYm94LFxuLmltZy1ib3gge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmltZy1ib3ggaW1nIHtcbiAgd2lkdGg6IDMwMHB4O1xuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgfVxufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NTlweCl7XG4gIC5pbWdzLWhlaWdodHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ 45467:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-video\n  [backgroundVideo]=\"'assets/Videos/atlanta22s.mp4'\"\n  [contentOffsetToTop]=\"true\"\n  [title]=\"'ABOUT.ABOUT_TITLE' | translate\"\n  [desc]=\"'ABOUT.ABOUT_DESC' | translate\"\n>\n</app-header-video>\n\n<div class=\"px-4 mb-2\">\n  <div class=\"theme-container\">\n    <mat-card class=\"main-content-header\">\n      <div class=\"section pt-2\">\n        <div class=\"px-3\">\n          <div class=\"theme-container\">\n            <h1 class=\"section-title\">{{ \"ABOUT.OUR_HISTORY\" | translate }}</h1>\n            <div class=\"container d-flex mb-3 mt-3\">\n              <div class=\"text-box right order-1\">\n                <p class=\"px-3\" style=\"text-align: justify\">\n                  {{ \"ABOUT.HISTORY\" | translate }}\n                </p>\n\n                <p class=\"px-3\" style=\"text-align: justify\">\n                  {{ \"ABOUT.HISTORY_2\" | translate }}\n                </p>\n              </div>\n              <div class=\"rounded overflow-hidden shadow video-box\">\n                <youtube-player\n                  videoId=\"gxygTPby0F0\"\n                  suggestedQuality=\"highres\"\n                  [height]=\"280\"\n                  [width]=\"400\"\n                  fxLayoutAlign=\"center\"\n                ></youtube-player>\n              </div>\n            </div>\n\n            <p class=\"px-3\" style=\"text-align: justify\">\n              {{ \"ABOUT.HISTORY_3\" | translate }}\n            </p>\n\n            <p class=\"px-3\" style=\"text-align: justify\">\n              {{ \"ABOUT.HISTORY_4\" | translate }}\n            </p>\n\n            <p class=\"px-3\" style=\"text-align: justify\">\n              {{ \"ABOUT.HISTORY_5\" | translate }}\n            </p>\n\n            <p class=\"px-3\" style=\"text-align: justify\">\n              {{ \"ABOUT.HISTORY_6\" | translate }}\n            </p>\n          </div>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n</div>\n<div class=\"banner-bg\">\n  <img src=\"assets/images/fotosContact/portada_fb.jpg\" alt=\"\" />\n</div>\n<div class=\"px-4 mb-4\">\n  <div class=\"theme-container justify-content-between\" fxLayout=\"row wrap\">\n    <mat-card\n      class=\"main-content-header mt-3\"\n      fxFlex=\"100\"\n      fxFlex.gt-xs=\"48\"\n      fxFlex.gt-sm=\"48\"\n    >\n      <div class=\"section pt-2\">\n        <div class=\"px-3\">\n          <div class=\"theme-container\">\n            <div class=\"section testimonials\">\n              <div class=\"px-3\">\n                <div class=\"theme-container\">\n                  <div fxLayout=\"row wrap\">\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                      <mat-icon class=\"mat-icon-xlg\" color=\"primary\"\n                        >business</mat-icon\n                      >\n                      <h2 class=\"capitalize fw-600 mx-2\">\n                        {{ \"ABOUT.OUR_MISSION\" | translate }}\n                      </h2>\n                    </div>\n                    <p class=\"mt-2\">{{ \"ABOUT.MISSION\" | translate }}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-card>\n\n    <mat-card\n      class=\"main-content-header mt-3\"\n      fxFlex=\"100\"\n      fxFlex.gt-xs=\"48\"\n      fxFlex.gt-sm=\"48\"\n    >\n      <div class=\"section pt-2\">\n        <div class=\"px-3\">\n          <div class=\"theme-container\">\n            <div class=\"section testimonials\">\n              <div class=\"px-3\">\n                <div class=\"theme-container\">\n                  <div fxLayout=\"row wrap\">\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                      <mat-icon class=\"mat-icon-xlg\" color=\"primary\"\n                        >list_alt</mat-icon\n                      >\n                      <h2 class=\"capitalize fw-600 mx-2\">\n                        {{ \"ABOUT.OUR_VISION\" | translate }}\n                      </h2>\n                    </div>\n                    <p class=\"mt-2\">{{ \"ABOUT.VISION\" | translate }}</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n</div>\n<div class=\"px-4 mb-3\">\n  <div class=\"theme-container\">\n    <mat-card class=\"main-content-header mt-3\">\n      <div class=\"section pt-2\">\n        <div class=\"px-3\">\n          <div class=\"theme-container mt-2\">\n            <p class=\"px-3\" style=\"text-align: justify\">\n              {{ \"ABOUT.HISTORY_7\" | translate }}\n            </p>\n\n            <ul style=\"margin-left: 50px; margin-right: 50px\">\n              <li class=\"px-3\" style=\"text-align: justify\">\n                {{ \"ABOUT.HISTORY_8\" | translate }}\n              </li>\n              <li class=\"px-3\" style=\"text-align: justify\">\n                {{ \"ABOUT.HISTORY_9\" | translate }}\n              </li>\n            </ul>\n            <br />\n\n            <div class=\"container d-flex\">\n              <div class=\"img-box p-3\">\n                <img\n                  src=\"assets/images/fotosContact/FLYER.png\"\n                  class=\"rounded\"\n                  alt=\"\"\n                  srcset=\"\"\n                />\n              </div>\n              <div class=\"text-box left\">\n                <p class=\"px-3\" style=\"text-align: justify\">\n                  {{ \"ABOUT.HISTORY_10\" | translate }}\n                </p>\n\n                <ul style=\"margin-left: 50px; margin-right: 50px\">\n                  <li class=\"px-3\" style=\"text-align: justify\">\n                    {{ \"ABOUT.HISTORY_11\" | translate }}\n                  </li>\n                  <li class=\"px-3\" style=\"text-align: justify\">\n                    {{ \"ABOUT.HISTORY_12\" | translate }}\n                  </li>\n                  <li class=\"px-3\" style=\"text-align: justify\">\n                    {{ \"ABOUT.HISTORY_13\" | translate }}\n                  </li>\n                  <li class=\"px-3\" style=\"text-align: justify\">\n                    {{ \"ABOUT.HISTORY_14\" | translate }}\n                  </li>\n                  <li class=\"px-3\" style=\"text-align: justify\">\n                    {{ \"ABOUT.HISTORY_15\" | translate }}\n                  </li>\n                  <li class=\"px-3\" style=\"text-align: justify\">\n                    {{ \"ABOUT.HISTORY_16\" | translate }}\n                  </li>\n                  <li class=\"px-3\" style=\"text-align: justify\">\n                    {{ \"ABOUT.HISTORY_17\" | translate }}\n                  </li>\n                  <li class=\"px-3\" style=\"text-align: justify\">\n                    {{ \"ABOUT.HISTORY_18\" | translate }}\n                  </li>\n                </ul>\n                <br />\n              </div>\n            </div>\n\n            <p class=\"px-3\" style=\"text-align: justify\">\n              {{ \"ABOUT.BOOK\" | translate\n              }}<a\n                href=\"https://www.amazon.com/limpiadora-vendedora-exitosa-casas-inspiraci%C3%B3n/dp/B09DMRFG24\"\n                target=\"_blank\"\n                class=\"primary-text\"\n                >{{ \"ABOUT.BOOK_LINK\" | translate }}</a\n              >\n            </p>\n          </div>\n          <div class=\"section achievements\">\n            <div class=\"px-3\">\n              <div class=\"theme-container\">\n                <div class=\"testimonials-carousel\">\n                  <div class=\"swiper-container\" [swiper]=\"config\">\n                    <div class=\"swiper-wrapper h-100\">\n                      <div\n                        *ngFor=\"let achievement of achievements\"\n                        class=\"swiper-slide\"\n                      >\n                        <div class=\"content text-center\">\n                          <img\n                            [attr.data-src]=\"achievement.image\"\n                            class=\"swiper-lazy imgs-height\"\n                          />\n                          <div class=\"swiper-lazy-preloader\"></div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"swiper-pagination\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div></div\n    ></mat-card>\n  </div>\n</div>\n\n<div class=\"px-4 mb-3\">\n  <div class=\"theme-container\">\n    <!-- <mat-card class=\"main-content-header mt-3\"> -->\n      <div class=\"section pt-2\">\n        <div class=\"px-3\">\n          <div class=\"theme-container\">\n            <h1 class=\"section-title\">{{ \"ABOUT.OUR_CASES\" | translate }}</h1>\n            <div class=\"section testimonials\">\n              <div class=\"px-3\">\n                <div class=\"theme-container\">\n                  <div class=\"testimonials-carousel\">\n                    <div class=\"swiper-container\" [swiper]=\"config\">\n                      <div class=\"swiper-wrapper h-100\">\n                        <div\n                          *ngFor=\"let imageNosotro of imageNosotros\"\n                          class=\"swiper-slide\"\n                        >\n                          <div class=\"content text-center\">\n                            <img\n                              [attr.data-src]=\"imageNosotro.image\"\n                              class=\"swiper-lazy\"\n                            />\n                            <div class=\"swiper-lazy-preloader\"></div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"swiper-pagination\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    <!-- </mat-card> -->\n  </div>\n</div>\n<!-- <app-mission></app-mission> -->\n\n<!-- <app-our-services></app-our-services> -->\n\n<!-- <app-testimonials></app-testimonials>   -->\n\n<!-- <app-our-agents></app-our-agents> -->\n\n<!-- <app-clients></app-clients> -->\n\n<!-- <app-get-in-touch></app-get-in-touch> -->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map