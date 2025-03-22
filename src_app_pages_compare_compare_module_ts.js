(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_compare_compare_module_ts"],{

/***/ 9545:
/*!****************************************************!*\
  !*** ./src/app/pages/compare/compare.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompareComponent": () => (/* binding */ CompareComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_compare_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./compare.component.html */ 78919);
/* harmony import */ var _compare_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare.component.scss */ 24489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ 70900);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-swiper-wrapper */ 15923);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 7736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88002);









let CompareComponent = class CompareComponent {
    constructor(appSettings, appService, mediaObserver) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.config = {};
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.config = {
            observer: true,
            slidesPerView: 3,
            spaceBetween: 16,
            keyboard: false,
            navigation: true,
            pagination: false,
            simulateTouch: true,
            grabCursor: true,
            loop: false,
            preloadImages: true,
            lazy: false,
            breakpoints: {
                150: {
                    slidesPerView: 1
                },
                600: {
                    slidesPerView: 1
                },
                960: {
                    slidesPerView: 2,
                },
                1280: {
                    slidesPerView: 3,
                }
            }
        };
        this.watchForChanges();
    }
    ngOnDestroy() {
        this.watcher.unsubscribe();
    }
    disableSwiper() {
        setTimeout(() => {
            if (this.directiveRef) {
                this.config.keyboard = false;
                this.config.navigation = false;
                this.config.simulateTouch = false;
                this.directiveRef.update();
            }
        });
    }
    enableSwiper() {
        setTimeout(() => {
            if (this.directiveRef) {
                this.config.keyboard = true;
                this.config.navigation = { nextEl: '.carousel-next', prevEl: '.carousel-prev' };
                this.config.simulateTouch = true;
                this.directiveRef.update();
            }
        });
    }
    clear() {
        this.appService.Data.compareList = [];
        localStorage.removeItem('compare');
    }
    remove(property) {
        const index = this.appService.Data.compareList.indexOf(property);
        if (index !== -1) {
            this.appService.Data.compareList.splice(index, 1);
            localStorage.setItem('compare', JSON.stringify(this.appService.Data.compareList));
        }
        this.watchForChanges();
    }
    watchForChanges() {
        this.watcher = this.mediaObserver.asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((changes) => changes.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((changes) => changes[0]))
            .subscribe((change) => {
            if (change.mqAlias == 'xs' && this.appService.Data.compareList.length > 1) {
                this.enableSwiper();
            }
            else if (change.mqAlias == 'sm' && this.appService.Data.compareList.length > 2) {
                this.enableSwiper();
            }
            else if (change.mqAlias == 'md' && this.appService.Data.compareList.length > 3) {
                this.enableSwiper();
            }
            else if (change.mqAlias == 'lg' && this.appService.Data.compareList.length > 4) {
                this.enableSwiper();
            }
            else if (change.mqAlias == 'xl' && this.appService.Data.compareList.length > 4) {
                this.enableSwiper();
            }
            else {
                this.disableSwiper();
            }
        });
    }
};
CompareComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.MediaObserver }
];
CompareComponent.propDecorators = {
    directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__.SwiperDirective,] }]
};
CompareComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-compare',
        template: _raw_loader_compare_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_compare_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CompareComponent);



/***/ }),

/***/ 14362:
/*!*************************************************!*\
  !*** ./src/app/pages/compare/compare.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "CompareModule": () => (/* binding */ CompareModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _compare_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare.component */ 9545);






const routes = [
    { path: '', component: _compare_component__WEBPACK_IMPORTED_MODULE_1__.CompareComponent, pathMatch: 'full' }
];
let CompareModule = class CompareModule {
};
CompareModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_compare_component__WEBPACK_IMPORTED_MODULE_1__.CompareComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], CompareModule);



/***/ }),

/***/ 24489:
/*!******************************************************!*\
  !*** ./src/app/pages/compare/compare.component.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".compare-carousel .compare-toolbar {\n  min-height: 72px;\n}\n.compare-carousel .compare-toolbar button.swipe-arrow {\n  position: relative;\n  margin-top: 0;\n  right: 0;\n  left: 0;\n  z-index: 2;\n}\n.compare-item .remove {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.compare-item .title {\n  text-align: center;\n}\n.compare-item .title a {\n  transition: 0.2s;\n  text-decoration: none;\n}\n.compare-item .address {\n  font-size: 12px;\n}\n.compare-item .details .item {\n  padding: 8px 0;\n}\n.compare-item .details .item span:first-child {\n  margin-right: 8px;\n  font-weight: 500;\n  min-width: 114px;\n}\n.compare-item .details .item .list span {\n  font-weight: normal;\n  min-width: auto;\n}\n.compare-item .details .item .list span:not(.last):after {\n  content: \",\";\n}\n.compare-item .details .item .list span.last:after {\n  content: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBhcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQUFSO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFDWjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQURSO0FBR0k7RUFDSSxrQkFBQTtBQURSO0FBRVE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBQVo7QUFHSTtFQUNJLGVBQUE7QUFEUjtBQUlRO0VBQ0ksY0FBQTtBQUZaO0FBR1k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFEaEI7QUFJZ0I7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFGcEI7QUFHb0I7RUFDSSxZQUFBO0FBRHhCO0FBR29CO0VBQ0ksYUFBQTtBQUR4QiIsImZpbGUiOiJjb21wYXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhcmUtY2Fyb3VzZWx7ICAgIFxuICAgIC5jb21wYXJlLXRvb2xiYXJ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDcycHg7XG4gICAgICAgIGJ1dHRvbi5zd2lwZS1hcnJvd3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAyOyBcbiAgICAgICAgfVxuICAgIH1cbn1cbi5jb21wYXJlLWl0ZW17XG4gICAgLnJlbW92ZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYXtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFkZHJlc3N7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmRldGFpbHN7XG4gICAgICAgIC5pdGVte1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7IFxuICAgICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdHtcbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICY6bm90KC5sYXN0KTphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiLFwiOyBcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgJi5sYXN0OmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbm9uZTsgXG4gICAgICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IFxuICAgICAgICB9ICAgICAgICBcbiAgICB9XG59XG4vLyBAbWVkaWEgKG1heC13aWR0aDogNjUycHgpIHtcbi8vICAgICAuc3dpcGVyLXNsaWRlIHtcbi8vICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IC8vIG9yIGFueSBvdGhlciB3aWR0aCBzdWl0YWJsZSBmb3Igc21hbGwgc2NyZWVuc1xuLy8gICAgIH1cbi8vICAgfSJdfQ== */");

/***/ }),

/***/ 78919:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compare/compare.component.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"px-3\">\n  <div class=\"theme-container\">\n    <div *ngIf=\"appService.Data.compareList.length == 0\" class=\"py-5\">\n      <mat-chip-list>\n        <mat-chip color=\"warn\" selected=\"true\" class=\"uppercase\"\n          >You have no properties to compare.</mat-chip\n        >\n      </mat-chip-list>\n    </div>\n\n    <div\n      *ngIf=\"appService.Data.compareList.length > 0\"\n      class=\"compare-carousel py-3\"\n    >\n      <mat-card\n        fxLayout=\"row\"\n        fxLayoutAlign=\"space-between center\"\n        class=\"compare-toolbar\"\n      >\n        <h3 class=\"uppercase\">\n          Compare: {{ appService.Data.compareList.length }}\n        </h3>\n        <div\n          fxLayout=\"row\"\n          fxLayoutAlign=\"center center\"\n          *ngIf=\"config.simulateTouch\"\n        >\n          <button\n            mat-mini-fab\n            color=\"primary\"\n            class=\"carousel-prev swiper-button-prev swipe-arrow mx-2\"\n          >\n            <mat-icon>keyboard_arrow_left</mat-icon>\n          </button>\n          <button\n            mat-mini-fab\n            color=\"primary\"\n            class=\"carousel-next swiper-button-next swipe-arrow mx-2\"\n          >\n            <mat-icon>keyboard_arrow_right</mat-icon>\n          </button>\n        </div>\n        <button\n          mat-mini-fab\n          color=\"warn\"\n          fxHide=\"false\"\n          fxHide.gt-xs\n          (click)=\"clear()\"\n        >\n          <mat-icon>cancel</mat-icon>\n        </button>\n        <button\n          mat-raised-button\n          color=\"warn\"\n          class=\"uppercase\"\n          fxShow=\"false\"\n          fxShow.gt-xs\n          (click)=\"clear()\"\n        >\n          Clear All\n        </button>\n      </mat-card>\n\n      <div class=\"swiper-container h-100 carousel-outer mt-3\" [swiper]=\"config\">\n        <div class=\"swiper-wrapper h-100\">\n          <div\n            *ngFor=\"let property of appService.Data.compareList\"\n            class=\"swiper-slide\"\n          >\n            <mat-card class=\"compare-item\">\n              <img mat-card-image [src]=\"property.gallery[0]\" alt=\"image\" />\n              <button mat-icon-button class=\"remove\" (click)=\"remove(property)\">\n                <mat-icon color=\"warn\" class=\"mat-icon-lg\"\n                  >highlight_off</mat-icon\n                >\n              </button>\n              <mat-card-content>\n                <h2 class=\"title\">\n                  <a [routerLink]=\"['/properties', property.id]\">{{\n                    property.title\n                  }}</a>\n                </h2>\n                <p fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"address\">\n                  <mat-icon class=\"text-muted\">location_on</mat-icon>\n                  <span>{{ property.formattedAddress }}</span>\n                </p>\n                <mat-chip-list>\n                  <mat-chip color=\"primary\" selected=\"true\" class=\"w-100\">\n                    <h3\n                      *ngIf=\"settings.currency == 'USD'\"\n                      class=\"w-100 text-center\"\n                    >\n                      <span *ngIf=\"property.priceDollar.sale\">{{\n                        property.priceDollar.sale\n                          | currency : \"USD\" : \"symbol\" : \"1.0\"\n                      }}</span>\n                      <span *ngIf=\"property.priceDollar.rent\"\n                        >{{\n                          property.priceDollar.rent\n                            | currency : \"USD\" : \"symbol\" : \"1.0\"\n                        }}\n                        /month</span\n                      >\n                    </h3>\n                    <h3\n                      *ngIf=\"settings.currency == 'EUR'\"\n                      class=\"w-100 text-center\"\n                    >\n                      <span *ngIf=\"property.priceEuro.sale\">{{\n                        property.priceEuro.sale\n                          | currency : \"EUR\" : \"symbol\" : \"1.0\"\n                      }}</span>\n                      <span *ngIf=\"property.priceEuro.rent\"\n                        >{{\n                          property.priceEuro.rent\n                            | currency : \"EUR\" : \"symbol\" : \"1.0\"\n                        }}\n                        /month</span\n                      >\n                    </h3>\n                  </mat-chip>\n                </mat-chip-list>\n                <div class=\"details py-3\">\n                  <div fxLayout=\"row\" class=\"item\">\n                    <span>Property Type:</span>\n                    <span>{{ property.propertyType }}</span>\n                  </div>\n                  <div fxLayout=\"row\" class=\"item\">\n                    <span>Property Status:</span>\n                    <div fxLayout=\"row wrap\" class=\"list\">\n                      <span\n                        *ngFor=\"\n                          let status of property.propertyStatus;\n                          let last = last\n                        \"\n                        [class.list-item]=\"property.propertyStatus.length > 1\"\n                        [class.last]=\"last\"\n                        >{{ status }}</span\n                      >\n                    </div>\n                  </div>\n                  <div fxLayout=\"row\" class=\"item\">\n                    <span>City:</span>\n                    <span>{{ property.city }}</span>\n                  </div>\n                  <div fxLayout=\"row\" class=\"item\">\n                    <span>Zip Code:</span>\n                    <span>{{ property.zipCode }}</span>\n                  </div>\n                  <div fxLayout=\"row\" class=\"item\">\n                    <span>Neighborhood:</span>\n                    <div fxLayout=\"row wrap\" class=\"list\">\n                      <span\n                        *ngFor=\"\n                          let neighborhood of property.neighborhood;\n                          let last = last\n                        \"\n                        [class.list-item]=\"property.neighborhood.length > 1\"\n                        [class.last]=\"last\"\n                        >{{ neighborhood }}</span\n                      >\n                    </div>\n                  </div>\n                  <div fxLayout=\"row\" class=\"item\">\n                    <span>Street:</span>\n                    <div fxLayout=\"row wrap\" class=\"list\">\n                      <span\n                        *ngFor=\"let street of property.street; let last = last\"\n                        [class.list-item]=\"property.street.length > 1\"\n                        [class.last]=\"last\"\n                        >{{ street }}</span\n                      >\n                    </div>\n                  </div>\n                  <div fxLayout=\"row\" class=\"item\">\n                    <span>Bedrooms:</span>\n                    <span>{{ property.bedrooms }}</span>\n                  </div>\n                  <div fxLayout=\"row\" class=\"item\">\n                    <span>Bathrooms:</span>\n                    <span>{{ property.bathrooms }}</span>\n                  </div>\n                  <div fxLayout=\"row\" class=\"item\">\n                    <span>Garages:</span>\n                    <span>{{ property.garages }}</span>\n                  </div>\n                  <div fxLayout=\"row\" class=\"item\">\n                    <span>Property size:</span>\n                    <span\n                      >{{ property.area.value }} {{ property.area.unit }}</span\n                    >\n                  </div>\n                  <div fxLayout=\"row\" class=\"item\">\n                    <span>Year Built:</span>\n                    <span>{{ property.yearBuilt }}</span>\n                  </div>\n                  <div fxLayout=\"row\" class=\"item\">\n                    <span>Features:</span>\n                    <div fxLayout=\"row wrap\" class=\"list\">\n                      <span\n                        *ngFor=\"\n                          let feature of property.features;\n                          let last = last\n                        \"\n                        [class.list-item]=\"property.features.length > 1\"\n                        [class.last]=\"last\"\n                        >{{ feature }}</span\n                      >\n                    </div>\n                  </div>\n                  <div fxLayout=\"row\" class=\"item\">\n                    <span>Published:</span>\n                    <span>{{\n                      property.published | date : \"dd MMMM, yyyy\"\n                    }}</span>\n                  </div>\n                </div>\n                <p class=\"uppercase text-center fw-500 mb-2\">description</p>\n                <p>{{ property.desc }}</p>\n              </mat-card-content>\n              <mat-card-actions class=\"text-center\">\n                <a\n                  [routerLink]=\"['/properties', property.id]\"\n                  mat-raised-button\n                  color=\"primary\"\n                  class=\"uppercase mb-3\"\n                  >More info</a\n                >\n              </mat-card-actions>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_compare_compare_module_ts.js.map