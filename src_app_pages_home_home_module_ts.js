(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 24273:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/home/featured-properties/featured-properties.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedPropertiesComponent": () => (/* binding */ FeaturedPropertiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_featured_properties_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./featured-properties.component.html */ 27317);
/* harmony import */ var _featured_properties_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./featured-properties.component.scss */ 18016);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let FeaturedPropertiesComponent = class FeaturedPropertiesComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeaturedPropertiesComponent.ctorParameters = () => [];
FeaturedPropertiesComponent.propDecorators = {
    featuredProperties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['properties',] }]
};
FeaturedPropertiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-featured-properties',
        template: _raw_loader_featured_properties_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_featured_properties_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FeaturedPropertiesComponent);



/***/ }),

/***/ 25245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.component.html */ 93508);
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ 92557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ 70900);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.models */ 5396);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ 7736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 87519);
/* harmony import */ var src_app_shared_services_fmls_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/fmls.service */ 61770);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 91841);












let HomeComponent = class HomeComponent {
    constructor(appSettings, appService, mediaObserver, fmls, httpClient) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.fmls = fmls;
        this.httpClient = httpClient;
        this.activeMediaQuery = "";
        this.slides = [];
        this.viewType = "grid";
        this.viewCol = 50;
        this.count = 6;
        this.sort = "Ordenar por defecto";
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, 6, null, 2, 0, 0);
        this.call = 0;
        this.settings = this.appSettings.settings;
        this.watcher = mediaObserver
            .asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((changes) => changes.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((changes) => changes[0]))
            .subscribe((change) => {
            if (change.mqAlias == "xs") {
                this.viewCol = 100;
            }
            else if (change.mqAlias == "sm") {
                this.viewCol = 50;
            }
            else if (change.mqAlias == "md") {
                this.viewCol = 33.3;
            }
            else {
                this.viewCol = 50;
            }
        });
    }
    ngOnInit() {
        this.getSlides();
        this.getLocations();
        this.getProperties(this.sort, this.fmls.limit, this.fmls.offset);
        // this.getFeaturedProperties();
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }
    ngDoCheck() {
        if (this.settings.loadMore.load) {
            this.settings.loadMore.load = false;
            this.getProperties(this.sort, this.fmls.limit, this.fmls.offset);
        }
    }
    ngOnDestroy() {
        this.resetLoadMore();
        this.watcher.unsubscribe();
    }
    getSlides() {
        this.appService.getHomeCarouselSlides().subscribe((res) => {
            this.slides = res;
        });
    }
    getLocations() {
        this.appService.getLocations().subscribe((res) => {
            this.locations = res;
        });
    }
    getProperties(sort, limit, offset) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.searchFields && this.searchFields.city) {
                let city = this.searchFields.city.name.toLowerCase();
                let data = yield this.fmls.getPropertiesByCity(city, limit, offset);
                this.fmls.cleanData(data.bundle);
            }
            else if (sort == "Ordenar por defecto" || sort == "Sort by default") {
                // this.fmls.offset = this.fmls.offset + 12
                let data = yield this.fmls.getDataProperties(limit, offset);
                this.fmls.cleanData(data.bundle);
            }
            else if (sort == "Precio (Bajo a Alto)" ||
                sort == "Price (Low to High)") {
                // this.fmls.limit = this.fmls.limit + 12
                let data = yield this.fmls.getAscend(limit);
                this.fmls.cleanData(data.bundle);
            }
            else if (sort == "Precio (Alto a Bajo)" ||
                sort == "Price (High to Low)") {
                this.fmls.limit = this.fmls.limit + 12;
                let data = yield this.fmls.getDescend(limit);
                this.fmls.cleanData(data.bundle);
            }
            else if (sort == "Nuevo" || sort == "New") {
                this.fmls.limit = this.fmls.limit + 12;
                let data = yield this.fmls.getNew(limit);
                this.fmls.cleanData(data.bundle);
            }
            else if (sort == "Viejo" || sort == "Old") {
                this.fmls.limit = this.fmls.limit + 12;
                let data = yield this.fmls.getOld(limit);
                this.fmls.cleanData(data.bundle);
            }
            let data;
            if (this.properties && this.properties.length > 0) {
                data = this.fmls.uniqueData.filter((property) => !this.properties.find(existingProperty => existingProperty.id === property.id));
            }
            else {
                data = this.fmls.uniqueData;
            }
            let result = this.filterData(data);
            if (result.data.length == 0) {
                this.properties.length = 0;
                this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, 2, 0, 0);
                this.message = "No Se Encontraron Resultados";
                return false;
            }
            if (this.properties && this.properties.length > 0) {
                this.properties = this.properties.concat(result.data);
            }
            else {
                this.properties = result.data;
            }
            this.pagination = result.pagination;
            this.message = null;
            if (this.properties.length == this.pagination.total) {
                this.settings.loadMore.complete = true;
                this.settings.loadMore.result = this.properties.length;
            }
            else {
                this.settings.loadMore.complete = false;
            }
            if (this.settings.header == "map") {
                this.locations.length = 0;
                this.properties.forEach((p) => {
                    let loc = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Location(p.id, p.location.lat, p.location.lng);
                    this.locations.push(loc);
                });
                this.locations = [...this.locations];
            }
            // })
        });
    }
    resetLoadMore() {
        this.settings.loadMore.complete = false;
        this.settings.loadMore.start = false;
        this.settings.loadMore.page = 1;
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    }
    filterData(data) {
        return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
    }
    searchClicked() {
        // this.properties.length = 0;
        this.properties = [];
        this.getProperties(this.sort, this.fmls.limit, this.fmls.offset);
    }
    searchChanged(event) {
        event.valueChanges.subscribe(() => {
            this.resetLoadMore();
            this.searchFields = event.value;
            setTimeout(() => {
                this.removedSearchField = null;
            });
            if (!this.settings.searchOnBtnClick) {
                this.properties.length = 0;
            }
        });
        event.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())
            .subscribe(() => {
            if (!this.settings.searchOnBtnClick) {
                this.getProperties(this.sort, this.fmls.limit, this.fmls.offset);
            }
        });
    }
    removeSearchField(field) {
        this.message = null;
        this.removedSearchField = field;
    }
    changeCount(count) {
        this.count = count;
        this.resetLoadMore();
        this.properties.length = 0;
        this.getProperties(this.sort, this.fmls.limit, this.fmls.offset);
    }
    changeSorting(sort) {
        this.properties = [];
        this.sort = sort;
        this.resetLoadMore();
        this.properties.length = 0;
        this.getProperties(sort, this.fmls.limit, this.fmls.offset);
    }
    changeViewType(obj) {
        this.viewType = obj.viewType;
        this.viewCol = obj.viewCol;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.MediaObserver },
    { type: src_app_shared_services_fmls_service__WEBPACK_IMPORTED_MODULE_5__.FmlsService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient }
];
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-home",
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomeComponent);



/***/ }),

/***/ 57994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 25245);
/* harmony import */ var _hot_offer_today_hot_offer_today_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hot-offer-today/hot-offer-today.component */ 54729);
/* harmony import */ var _featured_properties_featured_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./featured-properties/featured-properties.component */ 24273);








// import { NgxYoutubePlayerModule } from 'ngx-youtube-player'
const routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, pathMatch: 'full' }
];
let HomeModule = class HomeModule {
};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent,
            _hot_offer_today_hot_offer_today_component__WEBPACK_IMPORTED_MODULE_2__.HotOfferTodayComponent,
            _featured_properties_featured_properties_component__WEBPACK_IMPORTED_MODULE_3__.FeaturedPropertiesComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            // NgxYoutubePlayerModule
        ]
    })
], HomeModule);



/***/ }),

/***/ 54729:
/*!*************************************************************************!*\
  !*** ./src/app/pages/home/hot-offer-today/hot-offer-today.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HotOfferTodayComponent": () => (/* binding */ HotOfferTodayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_hot_offer_today_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./hot-offer-today.component.html */ 46094);
/* harmony import */ var _hot_offer_today_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hot-offer-today.component.scss */ 99345);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);





let HotOfferTodayComponent = class HotOfferTodayComponent {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() {
        this.appService.getPropertyById(this.propertyId).subscribe(property => {
            this.property = property;
        });
    }
};
HotOfferTodayComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
HotOfferTodayComponent.propDecorators = {
    propertyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['propertyId',] }]
};
HotOfferTodayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-hot-offer-today',
        template: _raw_loader_hot_offer_today_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_hot_offer_today_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HotOfferTodayComponent);



/***/ }),

/***/ 18016:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/home/featured-properties/featured-properties.component.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlZC1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 92557:
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 99345:
/*!***************************************************************************!*\
  !*** ./src/app/pages/home/hot-offer-today/hot-offer-today.component.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Qtb2ZmZXItdG9kYXkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 27317:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/featured-properties/featured-properties.component.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"section mt-3\">\n  <div class=\"px-3\">\n      <div class=\"theme-container\">\n          <h1 class=\"section-title\">Featured properties</h1>\n\n          <app-properties-carousel [properties]=\"featuredProperties\"></app-properties-carousel>\n              \n      </div>\n  </div>   \n</div> ");

/***/ }),

/***/ 93508:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-image *ngIf=\"settings.header == 'image'\" \n                [backgroundImage]=\"'assets/images/others/homepage.jpg'\"\n                [bgImageAnimate]=\"true\"\n                [contentOffsetToTop]=\"true\"\n                [title]=\"'Encuentra Tu Hogar no bbbEn Atlanta'\"\n                [desc]=\"'Compañía Líder En Real no Estate'\"\n                [isHomePage]=\"true\"\n                [fullscreen]=\"false\">\n</app-header-image> \n\n<app-header-carousel *ngIf=\"settings.header == 'carousel'\" \n                    [slides]=\"slides\" \n                    [contentOffsetToTop]=\"true\"\n                    [fullscreen]=\"false\">\n</app-header-carousel>\n\n<app-header-map *ngIf=\"settings.header == 'map'\" \n                [locations]=\"locations\" \n                [contentOffsetToTop]=\"true\"\n                [fullscreen]=\"false\">\n</app-header-map>\n\n<app-header-video *ngIf=\"settings.header == 'video'\" \n        [backgroundVideo]=\"'assets/Videos/georgia_atlanta.mp4'\" \n        [contentOffsetToTop]=\"true\"\n        [title]=\"'HOME.H_TITLE' | translate\"\n        [desc]=\"'HOME.H_DESC' | translate\"\n        [isHomePage]=\"true\"\n        [fullscreen]=\"true\">\n    </app-header-video>\n            \n<app-videocontact></app-videocontact>\n\n<div class=\"px-3\">\n    <div class=\"theme-container\">\n                \n        <mat-card class=\"main-content-header\">\n\n            <app-properties-search \n                [variant]=\"settings.searchPanelVariant\"\n                [searchOnBtnClick]=\"settings.searchOnBtnClick\"\n                [removedSearchField]=\"removedSearchField\" \n                (onSearchChange)=\"searchChanged($event)\"\n                (onSearchClick)=\"searchClicked()\">\n            </app-properties-search>\n            \n        </mat-card>  \n    \n    </div>\n\n    \n    <div class=\"theme-container\"> \n        \n        <div fxLayout=\"row wrap\" class=\"properties-wrapper\">\n            \n            <div fxFlex=\"100\" fxLayoutAlign=\"start start\" class=\"p-2\"> \n                <mat-chip-list [ngClass]=\"(settings.rtl) ? 'ml-2' : 'mr-2'\">\n                    <!-- <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\n                        {{ pagination?.total }} Encontrado\n                    </mat-chip>  -->\n                </mat-chip-list>\n                <app-properties-search-results-filters \n                    [searchFields]=\"searchFields\" \n                    (onRemoveSearchField)=\"removeSearchField($event)\">\n                </app-properties-search-results-filters>                 \n            </div>\n            <div fxFlex=\"100\" class=\"p-2\">                \n                <app-properties-toolbar [isHomePage]=\"true\" \n                                        (onChangeCount)=\"changeCount($event)\"\n                                        (onChangeSorting)=\"changeSorting($event)\"\n                                        (onChangeViewType)=\"changeViewType($event)\"></app-properties-toolbar>\n            </div>\n            <div *ngFor=\"let property of properties\" [fxFlex]=\"(viewType=='grid') ? viewCol : 100\" class=\"item\">                         \n                <app-property-item [property]=\"property\" [viewType]=\"viewType\" [viewColChanged]=\"viewCol\"></app-property-item>\n            </div>\n            <div *ngIf=\"properties?.length\" fxFlex=\"100\" fxLayoutAlign=\"center center\" class=\"p-2 mt-2\">                \n                <app-load-more [step]=\"2\"></app-load-more> \n            </div>\n\n            <div *ngIf=\"properties?.length == 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\" [style.min-height.px]=\"200\">                \n                <mat-spinner *ngIf=\"!message\"></mat-spinner>\n                <mat-chip-list *ngIf=\"message\">\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\n                        {{message}}\n                    </mat-chip> \n                </mat-chip-list> \n            </div>\n\n        </div>\n\n        \n    </div>\n</div>\n\n\n\n<!-- <app-mission></app-mission> -->\n\n<!-- <app-our-services></app-our-services> -->\n\n<!-- <app-hot-offer-today [propertyId]=\"4\"></app-hot-offer-today>  -->\n\n<!-- <app-featured-properties [properties]=\"featuredProperties\"></app-featured-properties> -->\n\n<app-our-agents></app-our-agents>\n\n<app-testimonials></app-testimonials> \n\n<!-- <youtube-player videoId=\"iZDXj8PjoiA\" \nsuggestedQuality=\"highres\"\n[height]=\"400\" \n[width]=\"800\" \nfxLayoutAlign=\"center\"\nstyle=\"margin-bottom: 30px;\"></youtube-player> -->\n      \n<!-- <app-clients></app-clients> -->\n\n<!-- <app-get-in-touch></app-get-in-touch> -->");

/***/ }),

/***/ 46094:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/hot-offer-today/hot-offer-today.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"section mt-3\">\n    <div class=\"px-3\">\n        <div class=\"theme-container\">\n            <h1 class=\"section-title\">Hot offer today</h1>\n\n            <app-property-item *ngIf=\"property\" [property]=\"property\" [viewType]=\"'list'\"></app-property-item> \n                \n        </div>\n    </div>   \n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map