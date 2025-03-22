(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_properties_properties_module_ts"],{

/***/ 67839:
/*!**********************************************************!*\
  !*** ./src/app/pages/properties/properties.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesComponent": () => (/* binding */ PropertiesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_properties_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./properties.component.html */ 65296);
/* harmony import */ var _properties_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties.component.scss */ 58349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 7736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 54395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 87519);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ 70900);
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.models */ 5396);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_shared_services_fmls_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/fmls.service */ 61770);












let PropertiesComponent = class PropertiesComponent {
    constructor(appSettings, appService, mediaObserver, fmls, platformId) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.fmls = fmls;
        this.platformId = platformId;
        this.sidenavOpen = true;
        this.psConfig = {
            wheelPropagation: true,
        };
        this.viewType = "grid";
        this.viewCol = 33.3;
        this.count = 12;
        this.sort = "Ordenar por defecto";
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, 12, null, 2, 0, 0);
        this.settings = this.appSettings.settings;
        this.watcher = mediaObserver
            .asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)((changes) => changes.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((changes) => changes[0]))
            .subscribe((change) => {
            if (change.mqAlias == "xs") {
                this.sidenavOpen = false;
                this.viewCol = 100;
            }
            else if (change.mqAlias == "sm") {
                this.sidenavOpen = false;
                this.viewCol = 50;
            }
            else if (change.mqAlias == "md") {
                this.viewCol = 50;
                this.sidenavOpen = true;
            }
            else {
                this.viewCol = 33.3;
                this.sidenavOpen = true;
            }
        });
    }
    ngOnInit() {
        this.getProperties(this.sort, this.fmls.limit2, this.fmls.offset2);
    }
    ngOnDestroy() {
        this.watcher.unsubscribe();
    }
    getProperties(sort, limit2, offset2) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.searchFields && this.searchFields.city) {
                let city = this.searchFields.city.name.toLowerCase();
                let data = yield this.fmls.getPropertiesByCity(city, limit2, offset2);
                this.fmls.cleanData(data.bundle);
            }
            else if (sort == "Ordenar por defecto" || sort == "Sort by default") {
                this.fmls.limit2 = this.fmls.limit2 + 12;
                // this.fmls.offset2 = this.fmls.offset2 + 12
                let data = yield this.fmls.getDataProperties2(limit2, offset2);
                this.fmls.cleanData(data.bundle);
            }
            else if (sort == "Precio (Bajo a Alto)" ||
                sort == "Price (Low to High)") {
                this.fmls.limit2 = this.fmls.limit2 + 12;
                this.fmls.offset2 = this.fmls.offset2 + 12;
                let data = yield this.fmls.getAscend2(limit2, offset2);
                this.fmls.cleanData(data.bundle);
            }
            else if (sort == "Precio (Alto a Bajo)" ||
                sort == "Price (High to Low)") {
                this.fmls.limit2 = this.fmls.limit2 + 12;
                this.fmls.offset2 = this.fmls.offset2 + 12;
                let data = yield this.fmls.getDescend2(limit2, offset2);
                this.fmls.cleanData(data.bundle);
            }
            else if (sort == "Nuevo" || sort == "New") {
                this.fmls.limit2 = this.fmls.limit2 + 12;
                this.fmls.offset2 = this.fmls.offset2 + 12;
                let data = yield this.fmls.getNew2(limit2, offset2);
                this.fmls.cleanData(data.bundle);
            }
            else if (sort == "Viejo" || sort == "Old") {
                this.fmls.limit2 = this.fmls.limit2 + 12;
                this.fmls.offset2 = this.fmls.offset2 + 12;
                let data = yield this.fmls.getOld2(limit2, offset2);
                this.fmls.cleanData(data.bundle);
            }
            let result = this.newfilterData(this.fmls.uniqueData);
            if (result.data.length == 0) {
                this.properties.length = 0;
                this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, 2, 0, 0);
                this.message = "Sin Resultados";
                return false;
            }
            this.properties = result.data;
            this.pagination = result.pagination;
            this.message = null;
        });
    }
    resetPagination() {
        if (this.paginator) {
            this.paginator.pageIndex = 0;
        }
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_4__.Pagination(1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    }
    newfilterData(data) {
        return this.appService.newfilterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
    }
    searchClicked() {
        this.properties.length = 0;
        this.getProperties(this.sort, this.fmls.limit2, this.fmls.offset2);
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
    }
    searchChanged(event) {
        event.valueChanges.subscribe(() => {
            this.resetPagination();
            this.searchFields = event.value;
            setTimeout(() => {
                this.removedSearchField = null;
            });
            if (!this.settings.searchOnBtnClick) {
                this.properties.length = 0;
            }
        });
        event.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)())
            .subscribe(() => {
            if (!this.settings.searchOnBtnClick) {
                this.getProperties(this.sort, this.fmls.limit2, this.fmls.offset2);
            }
        });
    }
    removeSearchField(field) {
        this.message = null;
        this.removedSearchField = field;
    }
    changeCount(count) {
        this.count = count;
        this.properties.length = 0;
        this.resetPagination();
        this.getProperties(this.sort, this.fmls.limit2, this.fmls.offset2);
    }
    changeSorting(sort) {
        this.sort = sort;
        this.properties.length = 0;
        this.getProperties(sort, this.fmls.limit2, this.fmls.offset2);
    }
    changeViewType(obj) {
        this.viewType = obj.viewType;
        this.viewCol = obj.viewCol;
    }
    onPageChange(e) {
        this.pagination.page = e.pageIndex + 1;
        this.getProperties(this.sort, this.fmls.limit2, this.fmls.offset2);
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
    }
};
PropertiesComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.MediaObserver },
    { type: src_app_shared_services_fmls_service__WEBPACK_IMPORTED_MODULE_5__.FmlsService },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_13__.PLATFORM_ID,] }] }
];
PropertiesComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ["sidenav",] }],
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator,] }]
};
PropertiesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-properties",
        template: _raw_loader_properties_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_properties_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PropertiesComponent);



/***/ }),

/***/ 29506:
/*!*******************************************************!*\
  !*** ./src/app/pages/properties/properties.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "PropertiesModule": () => (/* binding */ PropertiesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ 15971);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _properties_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties.component */ 67839);
/* harmony import */ var _property_property_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property/property.component */ 36692);








const routes = [
    { path: '', component: _properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent, pathMatch: 'full' },
    { path: ':id', component: _property_property_component__WEBPACK_IMPORTED_MODULE_2__.PropertyComponent }
];
let PropertiesModule = class PropertiesModule {
};
PropertiesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent,
            _property_property_component__WEBPACK_IMPORTED_MODULE_2__.PropertyComponent
        ],
        exports: [
            _properties_component__WEBPACK_IMPORTED_MODULE_1__.PropertiesComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _agm_core__WEBPACK_IMPORTED_MODULE_7__.AgmCoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], PropertiesModule);



/***/ }),

/***/ 36692:
/*!*****************************************************************!*\
  !*** ./src/app/pages/properties/property/property.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyComponent": () => (/* binding */ PropertyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_property_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./property.component.html */ 90266);
/* harmony import */ var _property_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.component.scss */ 38283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-swiper-wrapper */ 15923);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 1182);
/* harmony import */ var src_app_shared_compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/compare-overview/compare-overview.component */ 42764);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-embed-video */ 53221);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 38955);
/* harmony import */ var src_app_shared_services_fmls_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/fmls.service */ 61770);













let PropertyComponent = class PropertyComponent {
    constructor(appSettings, appService, activatedRoute, embedService, fb, fmls) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.embedService = embedService;
        this.fb = fb;
        this.fmls = fmls;
        this.psConfig = {
            wheelPropagation: true
        };
        this.sidenavOpen = true;
        this.config = {};
        this.config2 = {};
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.getPropertyById(params['id']);
        });
        this.getRelatedProperties();
        this.getFeaturedProperties();
        this.getAgent(1);
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
            if (this.sidenav) {
                this.sidenav.close();
            }
        }
        ;
        this.mortgageForm = this.fb.group({
            principalAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            downPayment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            interestRate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            period: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
        });
        this.contactForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_6__.emailValidator])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    getPropertyById(id) {
        this.fmls.getListingKey(id).subscribe(data => {
            this.fmls.singleFmlsData(data.bundle);
            this.property = this.fmls.propertyNS;
            this.embedVideo = this.property.gallery;
            setTimeout(() => {
                this.config.observer = true;
                this.config2.observer = true;
                this.swipers.forEach(swiper => {
                    if (swiper) {
                        swiper.setIndex(0);
                    }
                });
            });
        });
    }
    ngAfterViewInit() {
        this.config = {
            observer: false,
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            }
        };
        this.config2 = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: true,
            navigation: false,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                200: {
                    slidesPerView: 2
                },
                480: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 4
                }
            }
        };
    }
    onOpenedChange() {
        this.swipers.forEach(swiper => {
            if (swiper) {
                swiper.update();
            }
        });
    }
    selectImage(index) {
        this.swipers.forEach(swiper => {
            if (swiper['elementRef'].nativeElement.id == 'main-carousel') {
                swiper.setIndex(index);
            }
        });
    }
    onIndexChange(index) {
        this.swipers.forEach(swiper => {
            let elem = swiper['elementRef'].nativeElement;
            if (elem.id == 'small-carousel') {
                swiper.setIndex(index);
                for (let i = 0; i < elem.children[0].children.length; i++) {
                    const element = elem.children[0].children[i];
                    if (element.classList.contains('thumb-' + index)) {
                        element.classList.add('active-thumb');
                    }
                    else {
                        element.classList.remove('active-thumb');
                    }
                }
            }
        });
    }
    addToCompare() {
        this.appService.addToCompare(this.property, src_app_shared_compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_4__.CompareOverviewComponent, (this.settings.rtl) ? 'rtl' : 'ltr');
    }
    onCompare() {
        return this.appService.Data.compareList.filter(item => item.id == this.property.id)[0];
    }
    addToFavorites() {
        this.appService.addToFavorites(this.property, (this.settings.rtl) ? 'rtl' : 'ltr');
    }
    onFavorites() {
        return this.appService.Data.favorites.filter(item => item.id == this.property.id)[0];
    }
    getRelatedProperties() {
        this.appService.getRelatedProperties().subscribe(properties => {
            this.relatedProperties = properties;
        });
    }
    getFeaturedProperties() {
        this.appService.getFeaturedProperties().subscribe(properties => {
            this.featuredProperties = properties.slice(0, 3);
        });
    }
    getAgent(agentId = 1) {
        var ids = [1]; //agent ids 
        agentId = ids[Math.floor(Math.random() * ids.length)]; //random agent id
        this.agent = this.appService.getAgents().filter(agent => agent.id == agentId)[0];
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
            // console.log(values);
        }
    }
    onMortgageFormSubmit(values) {
        if (this.mortgageForm.valid) {
            var principalAmount = values['principalAmount'];
            var down = values['downPayment'];
            var interest = values['interestRate'];
            var term = values['period'];
            this.monthlyPayment = this.calculateMortgage(principalAmount, down, interest / 100 / 12, term * 12).toFixed(2);
        }
    }
    calculateMortgage(principalAmount, downPayment, interestRate, period) {
        return ((principalAmount - downPayment) * interestRate) / (1 - Math.pow(1 + interestRate, -period));
    }
};
PropertyComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__.EmbedVideoService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: src_app_shared_services_fmls_service__WEBPACK_IMPORTED_MODULE_7__.FmlsService }
];
PropertyComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['sidenav',] }],
    swipers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChildren, args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__.SwiperDirective,] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.HostListener, args: ['window:resize',] }]
};
PropertyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-property',
        template: _raw_loader_property_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_property_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PropertyComponent);



/***/ }),

/***/ 58349:
/*!************************************************************!*\
  !*** ./src/app/pages/properties/properties.component.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 38283:
/*!*******************************************************************!*\
  !*** ./src/app/pages/properties/property/property.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".main-carousel .swiper-slide {\n  text-align: center;\n  padding-bottom: 66.25%;\n  position: relative;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.04);\n}\n.main-carousel img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  object-fit: fill;\n}\n.main-carousel .control-icons {\n  position: absolute;\n  z-index: 2;\n  top: 24px;\n  right: 20px;\n}\n.main-carousel .control-icons button.mat-button {\n  min-width: 36px;\n  width: 36px;\n  padding: 0;\n  margin: 0 4px;\n  background: rgba(255, 252, 252, 0.6);\n  transition: 0.2s;\n  color: rgba(0, 0, 0, 0.87);\n}\n.main-carousel .control-icons button.mat-button:disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n.main-carousel .control-icons button.mat-button:hover:enabled {\n  background: #fffcfc;\n}\n.small-carousel .swiper-slide img {\n  display: block;\n  opacity: 0.3;\n}\n.small-carousel .swiper-slide.active-thumb img {\n  border-width: 3px;\n  border-style: solid;\n  box-sizing: border-box;\n  opacity: 1;\n}\n.small-carousel .swiper-slide .swiper-lazy-preloader {\n  margin-top: 10px;\n}\n.widget {\n  margin-bottom: 40px;\n}\n.widget .widget-title {\n  margin: 0 -16px 16px;\n  padding: 8px 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.widget:first-child .widget-title {\n  margin: -16px -16px 16px;\n  padding: 8px 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBQ1o7QUFBWTtFQUNJLDBCQUFBO0FBRWhCO0FBQVk7RUFDSSxtQkFBQTtBQUVoQjtBQUtRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFGWjtBQUtZO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUhoQjtBQU1RO0VBQ0ksZ0JBQUE7QUFKWjtBQVNBO0VBQ0ksbUJBQUE7QUFOSjtBQU9JO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQVFRO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFOWiIsImZpbGUiOiJwcm9wZXJ0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNhcm91c2VseyBcbiAgICAuc3dpcGVyLXNsaWRleyAgICAgICAgICAgICAgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDY2LjI1JTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAgXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7ICAgICAgICAgXG4gICAgfVxuICAgIGltZ3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG9iamVjdC1maXQ6IGZpbGw7XG4gICAgfSBcbiAgICAuY29udHJvbC1pY29uc3sgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMjsgXG4gICAgICAgIHRvcDogMjRweDtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIGJ1dHRvbi5tYXQtYnV0dG9ue1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTIsIDI1MiwgMC42KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7IFxuICAgICAgICAgICAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgICAgICAgICY6ZGlzYWJsZWR7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlcjplbmFibGVke1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTIsIDI1MiwgMSk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuLnNtYWxsLWNhcm91c2VseyBcbiAgICAuc3dpcGVyLXNsaWRleyAgXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlLXRodW1ie1xuICAgICAgICAgICAgaW1neyBcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxuICAgICAgICB9IFxuICAgICAgICAuc3dpcGVyLWxhenktcHJlbG9hZGVye1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfSBcbn1cbiBcbi53aWRnZXR7IFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgLndpZGdldC10aXRsZXtcbiAgICAgICAgbWFyZ2luOiAwIC0xNnB4IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAmOmZpcnN0LWNoaWxkeyAgXG4gICAgICAgIC53aWRnZXQtdGl0bGV7XG4gICAgICAgICAgICBtYXJnaW46IC0xNnB4IC0xNnB4IDE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgfSBcbn0gIl19 */");

/***/ }),

/***/ 65296:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/properties/properties.component.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <app-header-image [backgroundImage]=\"'assets/images/carousel/slide-3.jpg'\" \n                  [bgImageAnimate]=\"false\" \n                  [contentOffsetToTop]=\"false\" \n                  [desc]=\"'“Hogar es desde donde uno empieza...” –T.S. Eliot'\"\n                  [contentMinHeight]=\"200\">\n</app-header-image> -->\n\n<app-header-video *ngIf=\"settings.header == 'video'\" \n                [backgroundVideo]=\"'assets/Videos/atlanta7s.mp4'\" \n                [contentOffsetToTop]=\"true\"\n                [desc]=\"'PROPERTIES.P_DESC' | translate\"\n                [isHomePage]=\"true\"\n                [fullscreen]=\"false\">\n</app-header-video>\n \n<div class=\"px-3\"> \n    \n  <div class=\"theme-container\">  \n\n    <mat-sidenav-container class=\"all-properties mt-3\"> \n      <mat-sidenav #sidenav [autoFocus]=\"false\" [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"search-sidenav\">         \n        <mat-card [perfectScrollbar]=\"psConfig\"> \n          <button fxHide=\"false\" fxHide.gt-xs mat-icon-button (click)=\"sidenav.toggle()\">\n              <mat-icon color=\"accent\">close</mat-icon>\n          </button>\n          <app-properties-search \n              [variant]=\"settings.searchPanelVariant\"\n              [vertical]=\"true\"\n              [searchOnBtnClick]=\"settings.searchOnBtnClick\"              \n              [removedSearchField]=\"removedSearchField\" \n              (onSearchChange)=\"searchChanged($event)\"\n              (onSearchClick)=\"searchClicked()\">\n          </app-properties-search>\n        </mat-card> \n      </mat-sidenav>\n\n      <mat-sidenav-content ngClass.gt-sm=\"distance\"> \n\n        <div fxLayout=\"row wrap\" class=\"properties-wrapper mt-0\">            \n           \n            <div fxFlex=\"100\" class=\"px-2 pb-2 pt-0\">                \n                <app-properties-toolbar [showSidenavToggle]=\"!sidenavOpen\"\n                                        (onSidenavToggle)=\"sidenav.toggle()\"\n                                        (onChangeCount)=\"changeCount($event)\"\n                                        (onChangeSorting)=\"changeSorting($event)\"\n                                        (onChangeViewType)=\"changeViewType($event)\">\n                </app-properties-toolbar>\n            </div>\n           \n            <div fxFlex=\"100\" fxLayoutAlign=\"start start\" class=\"p-2\"> \n                <mat-chip-list [ngClass]=\"(settings.rtl) ? 'ml-2' : 'mr-2'\">\n                    <!-- <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\n                        {{ pagination?.total }} encontrada\n                    </mat-chip>  -->\n                </mat-chip-list>\n                <app-properties-search-results-filters \n                    [searchFields]=\"searchFields\" \n                    (onRemoveSearchField)=\"removeSearchField($event)\">\n                </app-properties-search-results-filters>                 \n            </div>\n\n            <div *ngFor=\"let property of properties\" [fxFlex]=\"(viewType=='grid') ? viewCol : 100\"  class=\"item\">                         \n                <app-property-item [property]=\"property\" [viewType]=\"viewType\" [viewColChanged]=\"viewCol\" [fullWidthPage]=\"false\"></app-property-item>\n            </div>\n\n            <div *ngIf=\"properties?.length == 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\" [style.min-height.px]=\"200\">                \n                <mat-spinner *ngIf=\"!message\"></mat-spinner>\n                <mat-chip-list *ngIf=\"message\">\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\n                        {{message}}\n                    </mat-chip> \n                </mat-chip-list> \n            </div>            \n\n            <div *ngIf=\"properties?.length > 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\" class=\"p-2\">\n                <mat-paginator [length]=\"pagination?.total\"\n                              [pageSize]=\"pagination?.perPage\"\n                              (page)=\"onPageChange($event)\"\n                              class=\"w-100 mat-elevation-z1\">\n                </mat-paginator>\n            </div>          \n         \n        </div>\n\n        \n\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n\n  </div>\n\n</div>\n\n\n\n<!-- <app-clients></app-clients> -->\n\n<!-- <app-get-in-touch></app-get-in-touch> -->");

/***/ }),

/***/ 90266:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/properties/property/property.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"px-3\">\n  <div class=\"theme-container\">\n    <mat-sidenav-container class=\"single-property mt-3\">\n      <mat-sidenav\n        #sidenav\n        [opened]=\"sidenavOpen\"\n        [mode]=\"sidenavOpen ? 'side' : 'over'\"\n        position=\"end\"\n        autoFocus=\"false\"\n        (openedChange)=\"onOpenedChange()\"\n      >\n        <button\n          fxHide=\"false\"\n          fxHide.gt-sm=\"true\"\n          mat-mini-fab\n          color=\"warn\"\n          class=\"close\"\n          (click)=\"sidenav.close()\"\n        >\n          <mat-icon>close</mat-icon>\n        </button>\n        <mat-card [perfectScrollbar]=\"psConfig\">\n          <div class=\"widget\">\n            <mat-card *ngIf=\"agent\">\n              <img mat-card-image [src]=\"agent.image\" [alt]=\"agent.fullName\" />\n              <mat-card-content>\n                <h2 class=\"fw-600\">{{ agent.fullName }}</h2>\n                <app-rating\n                  [ratingsCount]=\"agent.ratingsCount\"\n                  [ratingsValue]=\"agent.ratingsValue\"\n                ></app-rating>\n                <p class=\"mt-3\">{{ agent.desc }}</p>\n                <p fxLayoutAlign=\"start center\">\n                  <mat-icon\n                    color=\"primary\"\n                    matTooltip=\"Organization\"\n                    matTooltipPosition=\"above\"\n                    >business</mat-icon\n                  ><span class=\"mx-2\">{{ agent.organization }}</span>\n                </p>\n                <p fxLayoutAlign=\"start center\">\n                  <mat-icon color=\"primary\">email</mat-icon\n                  ><span class=\"mx-2\">{{ agent.email }}</span>\n                </p>\n                <p fxLayoutAlign=\"start center\">\n                  <mat-icon color=\"primary\">call</mat-icon\n                  ><span class=\"mx-2\">{{ agent.phone }}</span>\n                </p>\n              </mat-card-content>\n              <mat-divider></mat-divider>\n              <mat-card-actions fxLayoutAlign=\"space-between center\">\n                <div\n                  fxLayout=\"row\"\n                  fxLayoutAlign=\"start center\"\n                  class=\"text-muted\"\n                >\n                  <a\n                    href=\"https://www.facebook.com/mihogarenatlanta/\"\n                    target=\"blank\"\n                    class=\"social-icon\"\n                  >\n                    <svg\n                      class=\"mat-icon\"\n                      viewBox=\"0 0 24 24\"\n                      [ngClass]=\"['mat-icon-' + iconSize, 'mat-' + iconColor]\"\n                    >\n                      <path\n                        d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\"\n                      />\n                    </svg>\n                  </a>\n                  <a\n                    href=\"https://www.instagram.com/mihogarenatlanta/\"\n                    target=\"blank\"\n                    class=\"social-icon\"\n                  >\n                    <svg\n                      class=\"mat-icon\"\n                      viewBox=\"-20 -20 300 300\"\n                      [ngClass]=\"['mat-icon-' + iconSize, 'mat-' + iconColor]\"\n                    >\n                      <path\n                        d=\"M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z\"\n                      ></path>\n                    </svg>\n                  </a>\n                  <!-- <a href=\"https://www.linkedin.com/in/carmela-moreno-1a7392148/\" target=\"blank\" class=\"social-icon\"> \n                                        <svg class=\"mat-icon\" viewBox=\"3 3 42 42\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\n                                          <path d=\"M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z\"></path>\n                                        </svg>\n                                      </a> -->\n                  <a\n                    href=\"https://t.me/Mihogarenatlanta\"\n                    target=\"blank\"\n                    class=\"social-icon\"\n                  >\n                    <svg\n                      class=\"mat-icon\"\n                      viewBox=\"-2 -2 19 19\"\n                      [ngClass]=\"['mat-icon-' + iconSize, 'mat-' + iconColor]\"\n                    >\n                      <path\n                        d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z\"\n                      />\n                    </svg>\n                  </a>\n                  <a\n                    href=\"https://wa.me/6787448007\"\n                    target=\"blank\"\n                    class=\"social-icon\"\n                  >\n                    <svg\n                      class=\"mat-icon\"\n                      viewBox=\"-3 -3 55 55\"\n                      [ngClass]=\"['mat-icon-' + iconSize, 'mat-' + iconColor]\"\n                    >\n                      <path\n                        d=\"M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z\"\n                      />\n                    </svg>\n                  </a>\n                </div>\n                <div>\n                  <!-- <a [routerLink]=\"['/agents', agent.id]\" mat-button color=\"primary\" class=\"uppercase\">Ver Perfil</a> -->\n                </div>\n              </mat-card-actions>\n            </mat-card>\n          </div>\n\n          <!-- <div class=\"widget\">\n                        <h3 class=\"widget-title bg-primary\">Reply to the listing</h3>\n                        <form [formGroup]=\"contactForm\" (ngSubmit)=\"onContactFormSubmit(contactForm.value)\">\n                            <p>Interesado en comprar o rentar esta propiedad? Escribenos</p>\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>Nombre</mat-label>\n                                <input matInput placeholder=\"Your Name\" autocomplete=\"off\" formControlName=\"name\">\n                                <mat-error *ngIf=\"contactForm.controls.name.errors?.required\">Name is required</mat-error>                   \n                            </mat-form-field>\n\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>E-mail</mat-label> \n                                <input matInput placeholder=\"Your Email\" autocomplete=\"off\" formControlName=\"email\">\n                                <mat-error *ngIf=\"contactForm.controls.email.errors?.required\">Email is required</mat-error>\n                                <mat-error *ngIf=\"contactForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>Telefono</mat-label>\n                                <input matInput placeholder=\"Your Phone\" autocomplete=\"off\" formControlName=\"phone\" type=\"number\"> \n                                <mat-error *ngIf=\"contactForm.controls.phone.errors?.required\">Phone is required</mat-error>                 \n                            </mat-form-field>\n\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>Mensage</mat-label> \n                                <textarea matInput placeholder=\"Your Message\" formControlName=\"message\" rows=\"6\"></textarea> \n                                <mat-error *ngIf=\"contactForm.controls.message.errors?.required\">Message is required</mat-error>\n                            </mat-form-field>  \n                            <div class=\"text-center\">\n                                <button mat-raised-button color=\"accent\" type=\"submit\">Send Email</button>\n                            </div>\n                        </form>\n                    </div> -->\n\n          <div class=\"widget\">\n            <h3 class=\"widget-title bg-primary\">\n              {{ \"PROPERTY.CALCULATOR\" | translate }}\n            </h3>\n            <form\n              [formGroup]=\"mortgageForm\"\n              (ngSubmit)=\"onMortgageFormSubmit(mortgageForm.value)\"\n            >\n              <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>{{ \"PROPERTY.AMOUNT\" | translate }}</mat-label>\n                <input\n                  matInput\n                  placeholder=\"$\"\n                  autocomplete=\"off\"\n                  formControlName=\"principalAmount\"\n                  type=\"number\"\n                />\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>{{ \"PROPERTY.INITIAL\" | translate }}</mat-label>\n                <input\n                  matInput\n                  placeholder=\"$\"\n                  autocomplete=\"off\"\n                  formControlName=\"downPayment\"\n                  type=\"number\"\n                />\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>{{ \"PROPERTY.INTEREST\" | translate }}</mat-label>\n                <input\n                  matInput\n                  placeholder=\"%\"\n                  autocomplete=\"off\"\n                  formControlName=\"interestRate\"\n                  type=\"number\"\n                />\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>{{ \"PROPERTY.PERIOD\" | translate }}</mat-label>\n                <input\n                  matInput\n                  placeholder=\"Number of Years\"\n                  autocomplete=\"off\"\n                  formControlName=\"period\"\n                  type=\"number\"\n                />\n              </mat-form-field>\n              <p *ngIf=\"monthlyPayment\">\n                {{ \"PROPERTY.MONTHLY\" | translate\n                }}<span class=\"mx-2 fw-500\">${{ monthlyPayment }}</span>\n              </p>\n              <div class=\"text-center\">\n                <button mat-raised-button color=\"accent\" type=\"submit\">\n                  {{ \"PROPERTY.MORTGAGE\" | translate }}\n                </button>\n              </div>\n            </form>\n          </div>\n\n          <!-- <div fxLayout=\"column\" class=\"widget\">\n                        <h3 class=\"widget-title bg-primary\">Propiedades Destacadas</h3>\n                        <div *ngFor=\"let prop of featuredProperties\" class=\"mb-3\">\n                            <app-property-item [property]=\"prop\" [viewType]=\"'grid'\"></app-property-item> \n                        </div> \n                    </div> -->\n        </mat-card>\n      </mat-sidenav>\n      <mat-sidenav-content ngClass.gt-sm=\"distance\">\n        <mat-card\n          class=\"mt-3\"\n          fxLayout=\"row wrap\"\n          fxLayoutAlign=\"space-between center\"\n        >\n          <span\n            >ID:<span class=\"fw-500 mx-2\">{{ property?.id }}</span></span\n          >\n          <span\n            >{{ \"PROPERTY.PUBLISHED\" | translate\n            }}<span class=\"fw-500 mx-2\">{{\n              property?.published | date : \"dd MMMM, yyyy\"\n            }}</span></span\n          >\n          <span\n            >{{ \"PROPERTY.UPDATE\" | translate\n            }}<span class=\"fw-500 mx-2\">{{\n              property?.lastUpdate | date : \"dd MMMM, yyyy\"\n            }}</span></span\n          >\n          <!-- <span>Vistas:<span class=\"fw-500 mx-2\">{{property?.views}}</span></span>  -->\n        </mat-card>\n        <br />\n        <mat-card\n          fxLayout=\"row\"\n          fxLayout.xs=\"column\"\n          fxLayoutAlign=\"space-between center\"\n        >\n          <div>\n            <h2 class=\"uppercase\" ngClass.xs=\"text-center\">\n              {{ property?.title }}\n            </h2>\n            <p fxLayout=\"row\" fxLayoutAlign.xs=\"center\" class=\"address mb-0\">\n              <mat-icon class=\"text-muted\">location_on</mat-icon>\n              <span>{{ property?.formattedAddress }}</span>\n            </p>\n          </div>\n          <div fxLayout=\"column\" fxLayoutAlign.xs=\"center center\" class=\"mx-3\">\n            <h2 *ngIf=\"settings.currency == 'USD'\" class=\"primary-color price\">\n              <span *ngIf=\"property?.priceDollar.sale\">{{\n                property?.priceDollar.sale | currency : \"USD\" : \"symbol\" : \"1.0\"\n              }}</span>\n              <span *ngIf=\"property?.priceDollar.rent\"\n                >{{\n                  property?.priceDollar.rent\n                    | currency : \"USD\" : \"symbol\" : \"1.0\"\n                }}\n                /month</span\n              >\n            </h2>\n            <!-- <h2 *ngIf=\"settings.currency == 'EUR'\" class=\"primary-color price\">\n                            <span *ngIf=\"property?.priceEuro.sale\">{{property?.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\n                            <span *ngIf=\"property?.priceEuro.rent\">{{property?.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /month</span>\n                        </h2> -->\n            <!-- <app-rating [ratingsCount]=\"property?.ratingsCount\" [ratingsValue]=\"property?.ratingsValue\"></app-rating>  -->\n          </div>\n          <button\n            *ngIf=\"!sidenavOpen\"\n            mat-icon-button\n            (click)=\"sidenav.toggle()\"\n          >\n            <mat-icon>more_vert</mat-icon>\n          </button>\n        </mat-card>\n\n        <mat-card class=\"mt-3\">\n          <div class=\"main-carousel mb-3\">\n            <div *ngIf=\"property\" class=\"control-icons\">\n              <button\n                mat-button\n                [disabled]=\"onFavorites()\"\n                (click)=\"addToFavorites()\"\n                matTooltip=\"Add To Favorite\"\n              >\n                <mat-icon class=\"\">favorite_border</mat-icon>\n              </button>\n              <button\n                mat-button\n                [disabled]=\"onCompare()\"\n                (click)=\"addToCompare()\"\n                matTooltip=\"Add To Compare\"\n              >\n                <mat-icon class=\"\">compare_arrows</mat-icon>\n              </button>\n            </div>\n            <div\n              id=\"main-carousel\"\n              class=\"swiper-container\"\n              [swiper]=\"config\"\n              (indexChange)=\"onIndexChange($event)\"\n            >\n              <div class=\"swiper-wrapper\">\n                <div\n                  *ngFor=\"let image of property?.gallery\"\n                  class=\"swiper-slide\"\n                >\n                  <img [attr.data-src]=\"image\" class=\"swiper-lazy\" />\n                  <div class=\"swiper-lazy-preloader\"></div>\n                </div>\n              </div>\n              <button\n                mat-mini-fab\n                color=\"primary\"\n                class=\"swiper-button-prev swipe-arrow\"\n              >\n                <mat-icon>keyboard_arrow_left</mat-icon>\n              </button>\n              <button\n                mat-mini-fab\n                color=\"primary\"\n                class=\"swiper-button-next swipe-arrow\"\n              >\n                <mat-icon>keyboard_arrow_right</mat-icon>\n              </button>\n            </div>\n          </div>\n          <div class=\"small-carousel\">\n            <div\n              id=\"small-carousel\"\n              class=\"swiper-container\"\n              [swiper]=\"config2\"\n            >\n              <div class=\"swiper-wrapper\">\n                <div\n                  *ngFor=\"let image of property?.gallery; let i = index\"\n                  class=\"swiper-slide\"\n                  [ngClass]=\"'thumb-' + i\"\n                  [class.active-thumb]=\"i == 0\"\n                >\n                  <img\n                    [attr.data-src]=\"image\"\n                    class=\"swiper-lazy mw-100\"\n                    (click)=\"selectImage(i)\"\n                  />\n                  <div class=\"swiper-lazy-preloader\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-card>\n\n        <mat-card *ngIf=\"property\" class=\"mt-3\">\n          <mat-card-header fxLayoutAlign=\"center center\">\n            <mat-card-title class=\"uppercase\">{{\n              \"PROPERTY.DETAILS\" | translate\n            }}</mat-card-title>\n          </mat-card-header>\n          <div fxLayout=\"row wrap\" class=\"details\">\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\n              <span>{{ \"PROPERTY.TYPE\" | translate }}</span>\n              <span>{{ property.propertyType }}</span>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\n              <span>{{ \"PROPERTY.STATUS\" | translate }}</span>\n              <div fxLayout=\"row wrap\" class=\"list\">\n                <span\n                  *ngFor=\"\n                    let status of property.propertyStatus;\n                    let last = last\n                  \"\n                  [class.list-item]=\"property.propertyStatus.length > 1\"\n                  [class.last]=\"last\"\n                  >{{ status }}</span\n                >\n              </div>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\n              <span>{{ \"PROPERTY.CITY\" | translate }}</span>\n              <span>{{ property.city }}</span>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\n              <span>{{ \"PROPERTY.ZIPCODE\" | translate }}</span>\n              <span>{{ property.zipCode }}</span>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\n              <span>{{ \"PROPERTY.NEIGHTBORHOOD\" | translate }}</span>\n              <div fxLayout=\"row wrap\" class=\"list\">\n                <span\n                  *ngFor=\"\n                    let neighborhood of property.neighborhood;\n                    let last = last\n                  \"\n                  [class.list-item]=\"property.neighborhood.length > 1\"\n                  [class.last]=\"last\"\n                  >{{ neighborhood }}</span\n                >\n              </div>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\n              <span>{{ \"PROPERTY.STREET\" | translate }}</span>\n              <div fxLayout=\"row wrap\" class=\"list\">\n                <span\n                  *ngFor=\"let street of property.street; let last = last\"\n                  [class.list-item]=\"property.street.length > 1\"\n                  [class.last]=\"last\"\n                  >{{ street }}</span\n                >\n              </div>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\n              <span>{{ \"PROPERTY.ROOMS\" | translate }}</span>\n              <span>{{ property.bedrooms }}</span>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\n              <span>{{ \"PROPERTY.BATHROOMS\" | translate }}</span>\n              <span>{{ property.bathrooms }}</span>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\n              <span>{{ \"PROPERTY.GARAGES\" | translate }}</span>\n              <span>{{ property.garages }}</span>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\n              <span>{{ \"PROPERTY.SIZE\" | translate }}</span>\n              <span>{{ property.area.value }} {{ property.area.unit }}</span>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\n              <span>{{ \"PROPERTY.YEAR\" | translate }}</span>\n              <span>{{ property.yearBuilt }}</span>\n            </div>\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\n              <span>{{ \"PROPERTY.COURTESY\" | translate }}</span>\n              <span\n                ><strong>{{ property.courtesy }}</strong></span\n              >\n            </div>\n          </div>\n        </mat-card>\n\n        <mat-card class=\"mt-3\">\n          <mat-card-header fxLayoutAlign=\"center center\">\n            <mat-card-title class=\"uppercase\">{{\n              \"PROPERTY.FEATURES\" | translate\n            }}</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <ul fxLayout=\"row wrap\" style=\"margin-left: 15px\">\n              <li\n                *ngFor=\"let feature of property?.features\"\n                fxFlex=\"100\"\n                fxFlex.gt-xs=\"33.3\"\n              >\n                <mat-icon class=\"mat-icon-sm\" color=\"primary\"\n                  >verificar</mat-icon\n                >\n                <span class=\"mx-2\">{{ feature }}</span>\n              </li>\n            </ul>\n          </mat-card-content>\n        </mat-card>\n\n        <mat-card class=\"mt-3\">\n          <mat-card-header fxLayoutAlign=\"center center\">\n            <mat-card-title class=\"uppercase\">{{\n              \"PROPERTY.ADDFEATURES\" | translate\n            }}</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <ul fxLayout=\"row wrap\" class=\"details\" style=\"margin-left: 15px\">\n              <li\n                *ngFor=\"let feature of property?.additionalFeatures[0].value\"\n                fxFlex=\"100\"\n                fxFlex.gt-xs=\"50\"\n                class=\"item\"\n              >\n                <!-- <span>{{feature.name}}</span> -->\n                <span>{{ feature }}</span>\n              </li>\n            </ul>\n          </mat-card-content>\n        </mat-card>\n\n        <mat-card class=\"mt-3\">\n          <mat-card-header fxLayoutAlign=\"center center\">\n            <mat-card-title class=\"uppercase\">Descripcion</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <p>{{ property?.desc }}</p>\n          </mat-card-content>\n        </mat-card>\n\n        <mat-card class=\"mt-3\">\n          <mat-card-header fxLayoutAlign=\"center center\">\n            <mat-card-title class=\"uppercase\">{{\n              \"PROPERTY.LOCATION\" | translate\n            }}</mat-card-title>\n          </mat-card-header>\n          <mat-card-content>\n            <agm-map\n              [latitude]=\"property?.location.lat\"\n              [longitude]=\"property?.location.lng\"\n              [mapTypeControl]=\"true\"\n              [fullscreenControl]=\"true\"\n            >\n              <agm-marker\n                [latitude]=\"property?.location.lat\"\n                [longitude]=\"property?.location.lng\"\n                [markerDraggable]=\"false\"\n              ></agm-marker>\n            </agm-map>\n          </mat-card-content>\n        </mat-card>\n\n        <!-- <mat-card class=\"mt-3\"> \n                    <mat-card-header fxLayoutAlign=\"center center\"> \n                        <mat-card-title class=\"uppercase\">Planos</mat-card-title> \n                    </mat-card-header>\n                    <mat-card-content>\n                        <mat-accordion>\n                            <mat-expansion-panel *ngFor=\"let plan of property?.plans; let i = index;\" [expanded]=\"i === 0\">\n                                <mat-expansion-panel-header>  \n                                    <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                                        <div class=\"fw-500\">{{plan.name}}</div>\n                                        <div fxShow=\"false\" fxShow.gt-xs=\"true\" class=\"text-muted\">\n                                            <span>Area: <span class=\"fw-500\">{{plan.area.value}} {{plan.area.unit}}</span></span>\n                                            <span class=\"mx-3\">Cuartos: <span class=\"fw-500\">{{plan.rooms}}</span></span>\n                                            <span>Baños: <span class=\"fw-500\">{{plan.baths}}</span></span>   \n                                        </div>\n                                    </mat-panel-title> \n                                </mat-expansion-panel-header>                                  \n                                <img [src]=\"plan.image\" [alt]=\"plan.name\" class=\"mw-100\">\n                                <p>{{plan.desc}}</p>\n                            </mat-expansion-panel> \n                        </mat-accordion>                         \n                    </mat-card-content>\n                </mat-card>  -->\n\n        <!-- <mat-card *ngIf=\"property\" class=\"mt-3\"> \n                    <mat-card-header fxLayoutAlign=\"center center\"> \n                        <mat-card-title class=\"uppercase\">Videos</mat-card-title> \n                    </mat-card-header>\n                    <mat-card-content>\n                        <video controls class=\"mw-100\">\n                            <source [src]=\"property.videos[0].link\" type=\"video/mp4\"> \n                            Your browser does not support the video tag.\n                        </video> \n                        <div class=\"mt-5\">\n                            <h3 class=\"text-center fw-500\">{{property.videos[1].name}}</h3>\n                            <div [innerHtml]=\"embedVideo\" class=\"videoWrapper\"></div>                                    \n                        </div>                             \n                    </mat-card-content>\n                </mat-card>                 -->\n\n        <!-- <mat-card class=\"mt-3\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\"> \n                    <span>ID:<span class=\"fw-500 mx-2\">{{property?.id}}</span></span>\n                    <span>{{ 'PROPERTY.PUBLISHED' | translate }}<span class=\"fw-500 mx-2\">{{property?.published | date:\"dd MMMM, yyyy\"}}</span></span>\n                    <span>{{ 'PROPERTY.UPDATE' | translate }}<span class=\"fw-500 mx-2\">{{property?.lastUpdate | date:\"dd MMMM, yyyy\"}}</span></span>\n                    <span>Vistas:<span class=\"fw-500 mx-2\">{{property?.views}}</span></span> \n                </mat-card> -->\n\n        <!-- <app-comments *ngIf=\"property\" [propertyId]=\"property.id\"></app-comments>   -->\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  </div>\n</div>\n\n<!-- <div class=\"section mt-3\">\n    <div class=\"px-3\">\n        <div class=\"theme-container\"> \n            <h1 class=\"section-title\">Propiedades Relacionadas</h1>            \n            <app-properties-carousel [properties]=\"relatedProperties\"></app-properties-carousel>                        \n        </div>\n    </div>   \n</div>  -->\n\n<!-- <app-get-in-touch></app-get-in-touch> -->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_properties_properties_module_ts.js.map