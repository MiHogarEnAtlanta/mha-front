(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.settings */ 1182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);








let AppComponent = class AppComponent {
    constructor(appSettings, router, platformId, translate) {
        this.appSettings = appSettings;
        this.router = router;
        this.platformId = platformId;
        this.translate = translate;
        this.settings = this.appSettings.settings;
        translate.addLangs(['en', 'es']);
        translate.setDefaultLang('es');
        translate.use('es');
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                setTimeout(() => {
                    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
                        window.scrollTo(0, 0);
                    }
                });
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID,] }] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 5396:
/*!*******************************!*\
  !*** ./src/app/app.models.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Property": () => (/* binding */ Property),
/* harmony export */   "Area": () => (/* binding */ Area),
/* harmony export */   "AdditionalFeature": () => (/* binding */ AdditionalFeature),
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "Price": () => (/* binding */ Price),
/* harmony export */   "Gallery": () => (/* binding */ Gallery),
/* harmony export */   "Plan": () => (/* binding */ Plan),
/* harmony export */   "Video": () => (/* binding */ Video),
/* harmony export */   "Pagination": () => (/* binding */ Pagination)
/* harmony export */ });
class Property {
    constructor(id, title, desc, propertyType, propertyStatus, city, zipCode, neighborhood, street, location, formattedAddress, features, featured, priceDollar, priceEuro, bedrooms, bathrooms, garages, area, yearBuilt, ratingsCount, ratingsValue, additionalFeatures, gallery, plans, videos, published, lastUpdate, views, courtesy) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.propertyType = propertyType;
        this.propertyStatus = propertyStatus;
        this.city = city;
        this.zipCode = zipCode;
        this.neighborhood = neighborhood;
        this.street = street;
        this.location = location;
        this.formattedAddress = formattedAddress;
        this.features = features;
        this.featured = featured;
        this.priceDollar = priceDollar;
        this.priceEuro = priceEuro;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.garages = garages;
        this.area = area;
        this.yearBuilt = yearBuilt;
        this.ratingsCount = ratingsCount;
        this.ratingsValue = ratingsValue;
        this.additionalFeatures = additionalFeatures;
        this.gallery = gallery;
        this.plans = plans;
        this.videos = videos;
        this.published = published;
        this.lastUpdate = lastUpdate;
        this.views = views;
        this.courtesy = courtesy;
    }
}
class Area {
    constructor(id, value, unit) {
        this.id = id;
        this.value = value;
        this.unit = unit;
    }
}
class AdditionalFeature {
    constructor(id, name, value) {
        this.id = id;
        this.name = name;
        this.value = value;
    }
}
class Location {
    constructor(propertyId, lat, lng) {
        this.propertyId = propertyId;
        this.lat = lat;
        this.lng = lng;
    }
}
class Price {
}
class Gallery {
    constructor(
    // public id: number, 
    small, medium, big) {
        this.small = small;
        this.medium = medium;
        this.big = big;
    }
}
class Plan {
    constructor(id, name, desc, area, rooms, baths, image) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.area = area;
        this.rooms = rooms;
        this.baths = baths;
        this.image = image;
    }
}
class Video {
    constructor(id, name, link) {
        this.id = id;
        this.name = name;
        this.link = link;
    }
}
class Pagination {
    constructor(page, perPage, prePage, nextPage, total, totalPages) {
        this.page = page;
        this.perPage = perPage;
        this.prePage = prePage;
        this.nextPage = nextPage;
        this.total = total;
        this.totalPages = totalPages;
    }
}


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-progressbar */ 45120);
/* harmony import */ var ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-progressbar/http */ 77999);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @agm/core */ 15971);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-embed-video */ 53221);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-input-file */ 81160);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/overlay */ 58203);
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ 28758);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ 76738);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.settings */ 1182);
/* harmony import */ var _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/utils/app-interceptor */ 71350);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pages.component */ 37664);
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ 69473);
/* harmony import */ var _theme_components_toolbar1_toolbar1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme/components/toolbar1/toolbar1.component */ 40906);
/* harmony import */ var _theme_components_toolbar2_toolbar2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme/components/toolbar2/toolbar2.component */ 38432);
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme/components/user-menu/user-menu.component */ 94460);
/* harmony import */ var _theme_components_currency_currency_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme/components/currency/currency.component */ 37930);
/* harmony import */ var _theme_components_lang_lang_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme/components/lang/lang.component */ 79578);
/* harmony import */ var _theme_components_social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theme/components/social-icons/social-icons.component */ 85501);
/* harmony import */ var _theme_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme/components/contacts/contacts.component */ 60545);
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./theme/components/menu/horizontal-menu/horizontal-menu.component */ 85359);
/* harmony import */ var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./theme/components/menu/vertical-menu/vertical-menu.component */ 92359);
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./theme/components/footer/footer.component */ 5893);
/* harmony import */ var _pages_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/lock-screen/lock-screen.component */ 48411);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/http */ 54679);
/* harmony import */ var ngx_whatsapp_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-whatsapp-button */ 41048);












const config = {
    fileAccept: '*'
};



function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__.TranslateHttpLoader(httpClient, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + '/assets/i18n/', '.json');
}






















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_23__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent,
            _pages_pages_component__WEBPACK_IMPORTED_MODULE_9__.PagesComponent,
            _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__.NotFoundComponent,
            _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_13__.UserMenuComponent,
            _theme_components_currency_currency_component__WEBPACK_IMPORTED_MODULE_14__.CurrencyComponent,
            _theme_components_lang_lang_component__WEBPACK_IMPORTED_MODULE_15__.LangComponent,
            _theme_components_social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_16__.SocialIconsComponent,
            _theme_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_17__.ContactsComponent,
            _theme_components_toolbar1_toolbar1_component__WEBPACK_IMPORTED_MODULE_11__.Toolbar1Component,
            _theme_components_toolbar2_toolbar2_component__WEBPACK_IMPORTED_MODULE_12__.Toolbar2Component,
            _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_18__.HorizontalMenuComponent,
            _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_19__.VerticalMenuComponent,
            _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__.FooterComponent,
            _pages_lock_screen_lock_screen_component__WEBPACK_IMPORTED_MODULE_21__.LockScreenComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_28__.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyBBkiWPUUuEJVu8B_Cf3rYL_URJfrmZ2Wc',
                libraries: ["places"]
            }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClient]
                }
            }),
            ngx_embed_video__WEBPACK_IMPORTED_MODULE_0__.EmbedVideo.forRoot(),
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_30__.NgProgressModule,
            ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_31__.NgProgressHttpModule,
            ngx_input_file__WEBPACK_IMPORTED_MODULE_32__.InputFileModule.forRoot(config),
            _app_routing__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
            _angular_http__WEBPACK_IMPORTED_MODULE_33__.HttpModule,
            ngx_whatsapp_button__WEBPACK_IMPORTED_MODULE_34__.NgxWhastappButtonModule,
        ],
        providers: [
            _app_settings__WEBPACK_IMPORTED_MODULE_7__.AppSettings,
            { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_35__.OverlayContainer, useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_3__.CustomOverlayContainer },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HTTP_INTERCEPTORS, useClass: _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_8__.AppInterceptor, multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 76738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pages.component */ 37664);
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ 69473);





const routes = [
    {
        path: "",
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent,
        children: [
            //{ path: '', redirectTo: '/landing', pathMatch: 'full' },
            {
                path: "",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 57994)).then((m) => m.HomeModule),
            },
            {
                path: "about",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 18114)).then((m) => m.AboutModule),
            },
            {
                path: "contact",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contact/contact.module */ 17213)).then((m) => m.ContactModule),
            },
            {
                path: "properties",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_properties_properties_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/properties/properties.module */ 29506)).then((m) => m.PropertiesModule),
            },
            // { path: 'agents', loadChildren: () => import('./pages/agents/agents.module').then(m => m.AgentsModule) },
            {
                path: "compare",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_compare_compare_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/compare/compare.module */ 14362)).then((m) => m.CompareModule),
            },
            // { path: 'pricing', loadChildren: () => import('./pages/pricing/pricing.module').then(m => m.PricingModule) },
            {
                path: "faq",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/faq/faq.module */ 87119)).then((m) => m.FaqModule),
            },
            // { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
            // { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
            {
                path: "terms-conditions",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_terms-conditions_terms-conditions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/terms-conditions/terms-conditions.module */ 28671)).then((m) => m.TermsConditionsModule),
            },
            {
                path: "privacy-policy",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_privacy-conditions_privacy-conditions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/privacy-conditions/privacy-conditions.module */ 10622)).then((m) => m.PrivacyConditionsModule),
            },
            {
                path: "account",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account.module */ 36868)).then((m) => m.AccountModule),
            },
            {
                path: "submit-property",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_submit-property_submit-property_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/submit-property/submit-property.module */ 18070)).then((m) => m.SubmitPropertyModule),
            },
        ],
    },
    {
        path: "landing",
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_landing_landing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/landing/landing.module */ 97241)).then((m) => m.LandingModule),
    },
    // { path: 'lock-screen', component: LockScreenComponent },
    { path: "**", component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules,
                relativeLinkResolution: "legacy",
                initialNavigation: "enabled", // for one load page, without reload
                // useHash: true
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 70900:
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Data": () => (/* binding */ Data),
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 36410);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.settings */ 1182);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/confirm-dialog/confirm-dialog.component */ 22887);
/* harmony import */ var _shared_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/alert-dialog/alert-dialog.component */ 42066);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);












class Data {
    constructor(properties, compareList, favorites, locations) {
        this.properties = properties;
        this.compareList = compareList;
        this.favorites = favorites;
        this.locations = locations;
    }
}
let AppService = class AppService {
    constructor(http, bottomSheet, snackBar, appSettings, dialog, translateService, 
    // public fmls: FmlsService,
    platformId) {
        this.http = http;
        this.bottomSheet = bottomSheet;
        this.snackBar = snackBar;
        this.appSettings = appSettings;
        this.dialog = dialog;
        this.translateService = translateService;
        this.platformId = platformId;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + "/assets/data/";
        this.apiKey = "AIzaSyBBkiWPUUuEJVu8B_Cf3rYL_URJfrmZ2Wc";
        let compareTMP = [];
        if (localStorage.getItem("compare") !== null) {
            compareTMP = JSON.parse(localStorage.getItem("compare"));
        }
        let favoritesTMP = [];
        if (localStorage.getItem("favorites") !== null) {
            favoritesTMP = JSON.parse(localStorage.getItem("favorites"));
        }
        //Otros
        this.Data = new Data([], // properties
        compareTMP, // compareList
        favoritesTMP, // favorites
        [] // locations
        );
    }
    getProperties() {
        return this.http.get(this.url + "properties.json");
    }
    getPropertyById(id) {
        return this.http.get(this.url + "property-" + id + ".json");
    }
    getFeaturedProperties() {
        return this.http.get(this.url + "featured-properties.json");
    }
    getRelatedProperties() {
        return this.http.get(this.url + "related-properties.json");
    }
    getPropertiesByAgentId(agentId) {
        return this.http.get(this.url + "properties-agentid-" + agentId + ".json");
    }
    getLocations() {
        return this.http.get(this.url + "locations.json");
    }
    getAddress(lat = 33.94644, lng = -84.22954) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            lng +
            "&key=" +
            this.apiKey);
    }
    getLatLng(address) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?key=" +
            this.apiKey +
            "&address=" +
            address);
    }
    getFullAddress(lat = 33.94644, lng = -84.22954) {
        return this.http
            .get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            lng +
            "&key=" +
            this.apiKey)
            .subscribe((data) => {
            return data["results"][0]["formatted_address"];
        });
    }
    addToCompare(property, component, direction) {
        if (!this.Data.compareList.filter((item) => item.id == property.id)[0]) {
            this.Data.compareList.push(property);
            this.stringCompare = localStorage.setItem("compare", JSON.stringify(this.Data.compareList));
            this.bottomSheet
                .open(component, {
                direction: direction,
            })
                .afterDismissed()
                .subscribe((isRedirect) => {
                if (isRedirect) {
                    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
                        window.scrollTo(0, 0);
                    }
                }
            });
        }
    }
    addToFavorites(property, direction) {
        if (!this.Data.favorites.filter((item) => item.id == property.id)[0]) {
            this.Data.favorites.push(property);
            this.stringfavorites = localStorage.setItem("favorites", JSON.stringify(this.Data.favorites));
            this.snackBar.open("La propiedad ha sido agregada a favoritos.", "×", {
                verticalPosition: "top",
                duration: 3000,
                direction: direction,
            });
        }
    }
    openConfirmDialog(title, message) {
        const dialogData = new _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogModel(title, message);
        const dialogRef = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent, {
            maxWidth: "400px",
            data: dialogData,
        });
        return dialogRef;
    }
    openAlertDialog(message) {
        const dialogRef = this.dialog.open(_shared_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__.AlertDialogComponent, {
            maxWidth: "400px",
            data: message,
        });
        return dialogRef;
    }
    getTranslateValue(key, param = null) {
        let value = null;
        this.translateService
            .get(key, { param: param })
            .subscribe((res) => {
            value = res;
        });
        return value;
    }
    getPropertyTypes() {
        return [
            { id: 1, name: "Oficina" },
            { id: 2, name: "Casa" },
            { id: 3, name: "Apartamento" },
        ];
    }
    getPropertyStatuses() {
        return [
            { id: 1, name: "En Venta" },
            { id: 2, name: "En Renta" },
            { id: 3, name: "Casa Abierta" },
            { id: 4, name: "Sin Tarifas" },
            { id: 5, name: "Oferta" },
            { id: 6, name: "Vendida" },
        ];
    }
    getCities() {
        return [
            { id: 22, name: "Abbeville" },
            { id: 1, name: "Acworth" },
            { id: 23, name: "Adairsville" },
            { id: 24, name: "Adel" },
            { id: 21, name: "Ailey" },
            { id: 25, name: "Alamo" },
            { id: 26, name: "Albany" },
            { id: 27, name: "Alma" },
            { id: 28, name: "Alpharetta" },
            { id: 29, name: "Ambrose" },
            { id: 30, name: "Americus" },
            { id: 31, name: "Andersonville" },
            { id: 32, name: "Aragon" },
            { id: 33, name: "Arcade" },
            { id: 34, name: "Arlington" },
            { id: 35, name: "Arnoldsville" },
            { id: 36, name: "Ashburn" },
            { id: 37, name: "Athens" },
            { id: 2, name: "Atlanta" },
            { id: 38, name: "Attapulgus" },
            { id: 39, name: "Auburn" },
            { id: 40, name: "Augusta" },
            { id: 3, name: "Austell" },
            { id: 41, name: "Avera" },
            { id: 42, name: "Avondale Estates" },
            { id: 43, name: "Baconton" },
            { id: 44, name: "Bainbridge" },
            { id: 45, name: "Baldwin" },
            { id: 46, name: "Bail Ground" },
            { id: 47, name: "Barnesville" },
            { id: 48, name: "Baxley" },
            { id: 49, name: "Bellville" },
            { id: 50, name: "Berkeley Lake" },
            { id: 51, name: "Blackshear" },
            { id: 52, name: "Blairsville" },
            { id: 53, name: "Blakely" },
            { id: 54, name: "Blommingdale" },
            { id: 55, name: "Blue Ridge" },
            { id: 56, name: "Blythe" },
            { id: 57, name: "Boston" },
            { id: 58, name: "Bostwick" },
            { id: 59, name: "Bowdon" },
            { id: 60, name: "Bowman" },
            { id: 61, name: "Braswell" },
            { id: 62, name: "Bremen" },
            { id: 63, name: "Bronwood" },
            { id: 64, name: "Brooklet" },
            { id: 65, name: "Broxton" },
            { id: 66, name: "Brunswick" },
            { id: 67, name: "Buchanan" },
            { id: 68, name: "Buena Vista" },
            { id: 69, name: "Buford" },
            { id: 70, name: "Butler" },
            { id: 71, name: "Byron" },
            { id: 72, name: "Cairo" },
            { id: 73, name: "Calhoun" },
            { id: 74, name: "Canon" },
            { id: 75, name: "Canton" },
            { id: 76, name: "Carlton" },
            { id: 77, name: "Carnesville" },
            { id: 78, name: "Carrollton" },
            { id: 79, name: "Cartersville" },
            { id: 80, name: "Cave Spring" },
            { id: 81, name: "Cedartown" },
            { id: 82, name: "Centerville" },
            { id: 83, name: "Chamblee" },
            { id: 84, name: "Chatsworth" },
            { id: 85, name: "Chattahoochee Hills" },
            { id: 86, name: "Chickamauga" },
            { id: 87, name: "Clarksville" },
            { id: 88, name: "Clarkston" },
            { id: 89, name: "Claxton" },
            { id: 90, name: "Clayton" },
            { id: 91, name: "Cleveland" },
            { id: 92, name: "Climax" },
            { id: 93, name: "Cobbtown" },
            { id: 94, name: "Cochran" },
            { id: 95, name: "Coleman" },
            { id: 4, name: "College Park" },
            { id: 97, name: "Collins" },
            { id: 98, name: "Colquitt" },
            { id: 99, name: "Columbus" },
            { id: 96, name: "Corner" },
            { id: 97, name: "Commerce" },
            { id: 98, name: "Conyers" },
            { id: 99, name: "Coolidge" },
            { id: 100, name: "Cordele" },
            { id: 101, name: "Cornelia" },
            { id: 102, name: "Covington" },
            { id: 103, name: "Crawford" },
            { id: 104, name: "Crawfordville" },
            { id: 105, name: "Culloden" },
            { id: 106, name: "Cumming" },
            { id: 107, name: "Cusseta" },
            { id: 108, name: "Cuthbert" },
            { id: 5, name: "Dacula" },
            { id: 109, name: "Dahlonega" },
            { id: 110, name: "Daisy" },
            { id: 111, name: "Dallas" },
            { id: 112, name: "Dalton" },
            { id: 113, name: "Danielsville" },
            { id: 114, name: "Darien" },
            { id: 115, name: "Davisboro" },
            { id: 116, name: "Dawson" },
            { id: 117, name: "Dawsonville" },
            { id: 118, name: "Dearing" },
            { id: 119, name: "Decatur" },
            { id: 120, name: "Demorest" },
            { id: 121, name: "Denton" },
            { id: 122, name: "De Soto" },
            { id: 123, name: "Dillard" },
            { id: 124, name: "Doerun" },
            { id: 125, name: "Donaldsonville" },
            { id: 126, name: "Doraville" },
            { id: 127, name: "Douglas" },
            { id: 128, name: "Douglasville" },
            { id: 129, name: "Dublin" },
            { id: 130, name: "Dudley" },
            { id: 6, name: "Duluth" },
            { id: 131, name: "Dunwoody" },
            { id: 132, name: "East Dublin" },
            { id: 133, name: "East Ellijay" },
            { id: 134, name: "East Point" },
            { id: 135, name: "Eastman" },
            { id: 136, name: "Eatonton" },
            { id: 137, name: "Edge Hill" },
            { id: 138, name: "Edison" },
            { id: 139, name: "Elberton" },
            { id: 140, name: "Ellaville" },
            { id: 7, name: "Ellenwood" },
            { id: 141, name: "Ellijay" },
            { id: 142, name: "Emerson" },
            { id: 143, name: "Eton" },
            { id: 144, name: "Euharlle" },
            { id: 145, name: "Fairburn" },
            { id: 146, name: "Fairmount" },
            { id: 147, name: "Fargo" },
            { id: 148, name: "Fitzgerald" },
            { id: 149, name: "Flemington" },
            { id: 150, name: "Flovilla" },
            { id: 151, name: "Flowery Branch" },
            { id: 152, name: "Folkston" },
            { id: 8, name: "Forest Park" },
            { id: 153, name: "Forsyth" },
            { id: 154, name: "Fort Benning" },
            { id: 155, name: "Fort Gaines" },
            { id: 156, name: "Fort Oglethrope" },
            { id: 157, name: "Fort Valley" },
            { id: 158, name: "Franklin" },
            { id: 9, name: "Gainesville" },
            { id: 159, name: "Garden City" },
            { id: 160, name: "Georgetown" },
            { id: 161, name: "Gibson" },
            { id: 162, name: "Gillsville" },
            { id: 163, name: "Glennville" },
            { id: 164, name: "Glenwood" },
            { id: 165, name: "Gordon" },
            { id: 166, name: "Graham" },
            { id: 167, name: "Grantville" },
            { id: 168, name: "Gray" },
            { id: 169, name: "Grayson" },
            { id: 170, name: "Greensboro" },
            { id: 171, name: "Greenville" },
            { id: 172, name: "Griffin" },
            { id: 173, name: "Grovetown" },
            { id: 174, name: "Gumbranch" },
            { id: 175, name: "Guyton" },
            { id: 176, name: "Hagan" },
            { id: 177, name: "Hahira" },
            { id: 178, name: "Hamilton" },
            { id: 10, name: "Hamptom" },
            { id: 179, name: "Hapeville" },
            { id: 180, name: "Hardwick" },
            { id: 181, name: "Harlem" },
            { id: 182, name: "Harrison" },
            { id: 183, name: "Hartwell" },
            { id: 184, name: "Hawkinsville" },
            { id: 185, name: "Hazlehurst" },
            { id: 186, name: "Helen" },
            { id: 187, name: "Helena" },
            { id: 188, name: "Hephzibah" },
            { id: 189, name: "Hiltonia" },
            { id: 190, name: "Hinesville" },
            { id: 191, name: "Hiram" },
            { id: 192, name: "Hoboken" },
            { id: 193, name: "Hogansville" },
            { id: 194, name: "Holly Springs" },
            { id: 195, name: "Homeland" },
            { id: 196, name: "Homerville" },
            { id: 197, name: "Hoschton" },
            { id: 198, name: "Howard" },
            { id: 199, name: "Hull" },
            { id: 200, name: "Ideal" },
            { id: 201, name: "Ila" },
            { id: 202, name: "Irwinton" },
            { id: 203, name: "Isle of Hope" },
            { id: 204, name: "Jackson" },
            { id: 205, name: "Jakin" },
            { id: 206, name: "Jasper" },
            { id: 207, name: "Jefferson" },
            { id: 208, name: "Jeffersonville" },
            { id: 209, name: "Jesup" },
            { id: 210, name: "Johns Creek" },
            { id: 211, name: "Jonesboro" },
            { id: 212, name: "Kennesaw" },
            { id: 213, name: "Kingsland" },
            { id: 214, name: "Kingston" },
            { id: 215, name: "La Fayette" },
            { id: 216, name: "LaGrange" },
            { id: 217, name: "Lake City" },
            { id: 218, name: "Lake Park" },
            { id: 219, name: "Lakeland" },
            { id: 220, name: "Lavonia" },
            { id: 11, name: "Lawrenceville" },
            { id: 221, name: "Leary" },
            { id: 222, name: "Leesburg" },
            { id: 223, name: "Lenox" },
            { id: 224, name: "Leslie" },
            { id: 225, name: "Lexington" },
            { id: 12, name: "Lilburn" },
            { id: 226, name: "Lilly" },
            { id: 227, name: "Lincolnton" },
            { id: 228, name: "Lithonia" },
            { id: 229, name: "Locust Grove" },
            { id: 230, name: "Loganville" },
            { id: 231, name: "Lookout Mountain" },
            { id: 232, name: "Louisville" },
            { id: 233, name: "Lovejoy" },
            { id: 234, name: "Ludowici" },
            { id: 235, name: "Lula" },
            { id: 236, name: "Lumber City" },
            { id: 237, name: "Lumpkin" },
            { id: 238, name: "Luthersville" },
            { id: 239, name: "Lyons" },
            { id: 240, name: "Macon" },
            { id: 241, name: "Madison" },
            { id: 242, name: "Manassas" },
            { id: 243, name: "Manchester" },
            { id: 244, name: "Mansfield" },
            { id: 13, name: "Marietta" },
            { id: 245, name: "Marshallville" },
            { id: 246, name: "Matthews" },
            { id: 247, name: "McCaysville" },
            { id: 14, name: "Mcdonought" },
            { id: 248, name: "McRae" },
            { id: 249, name: "Menasville" },
            { id: 250, name: "Meigs" },
            { id: 251, name: "Menlo" },
            { id: 252, name: "Metter" },
            { id: 253, name: "Midville" },
            { id: 254, name: "Midway" },
            { id: 255, name: "Milledgeville" },
            { id: 256, name: "Millen" },
            { id: 257, name: "Milner" },
            { id: 258, name: "Milton" },
            { id: 259, name: "Mineral Bluff" },
            { id: 260, name: "Molena" },
            { id: 261, name: "Monroe" },
            { id: 262, name: "Montezuma" },
            { id: 263, name: "Montgomery" },
            { id: 264, name: "Monticello" },
            { id: 265, name: "Morgan" },
            { id: 266, name: "Morrow" },
            { id: 267, name: "Morven" },
            { id: 268, name: "Moultrie" },
            { id: 269, name: "Mount Vernon" },
            { id: 270, name: "Mount Zion" },
            { id: 271, name: "Nahunta" },
            { id: 272, name: "Nashville" },
            { id: 273, name: "Nelson" },
            { id: 274, name: "Newnan" },
            { id: 275, name: "Newton" },
            { id: 276, name: "Nicholls" },
            { id: 277, name: "Nicholson" },
            { id: 15, name: "Norcross" },
            { id: 278, name: "Norman Park" },
            { id: 279, name: "Norwood" },
            { id: 280, name: "Oakwood" },
            { id: 281, name: "Ocilla" },
            { id: 282, name: "Oconee" },
            { id: 283, name: "Offerman" },
            { id: 284, name: "Oglethorpe" },
            { id: 285, name: "Oliver" },
            { id: 286, name: "Omega" },
            { id: 287, name: "Oxford" },
            { id: 288, name: "Palmetto" },
            { id: 289, name: "Patterson" },
            { id: 290, name: "Pavo" },
            { id: 291, name: "Payne" },
            { id: 292, name: "Peachthree City" },
            { id: 293, name: "Pearson" },
            { id: 294, name: "Pelham" },
            { id: 295, name: "Pembroke" },
            { id: 296, name: "Pendergrass" },
            { id: 297, name: "Perry" },
            { id: 298, name: "Phillipsburg" },
            { id: 299, name: "Pine Lake" },
            { id: 300, name: "Pine Mountain Valley" },
            { id: 301, name: "Pinehurst" },
            { id: 302, name: "Pitts" },
            { id: 303, name: "Plains" },
            { id: 304, name: "Plainville" },
            { id: 305, name: "Pooler" },
            { id: 306, name: "Port Wentworth" },
            { id: 307, name: "Poulan" },
            { id: 308, name: "Powder Springs" },
            { id: 309, name: "Preston" },
            { id: 310, name: "Quitman" },
            { id: 311, name: "Ray City" },
            { id: 312, name: "Rebecca" },
            { id: 313, name: "Reidsville" },
            { id: 314, name: "Remerton" },
            { id: 315, name: "Resaca" },
            { id: 16, name: "Rex" },
            { id: 316, name: "Riceboro" },
            { id: 317, name: "Richland" },
            { id: 318, name: "Richmond Hill" },
            { id: 319, name: "Rincon" },
            { id: 320, name: "Ringgold" },
            { id: 321, name: "Riverdale" },
            { id: 322, name: "Roberta" },
            { id: 323, name: "Rochelle" },
            { id: 324, name: "Rockingham" },
            { id: 325, name: "Rockmart" },
            { id: 326, name: "Rome" },
            { id: 327, name: "Roopville" },
            { id: 328, name: "Rossville" },
            { id: 329, name: "Roswell" },
            { id: 330, name: "Royston" },
            { id: 331, name: "Rutledge" },
            { id: 332, name: "Saint Marys" },
            { id: 333, name: "Sandersville" },
            { id: 334, name: "Sandy Springs" },
            { id: 335, name: "Santa Claus" },
            { id: 336, name: "Savannah" },
            { id: 337, name: "Scotland" },
            { id: 338, name: "Screven" },
            { id: 339, name: "Senoia" },
            { id: 340, name: "Sharon" },
            { id: 341, name: "Shellman" },
            { id: 342, name: "Shiloh" },
            { id: 343, name: "Skidaway Island" },
            { id: 344, name: "Smithville" },
            { id: 17, name: "Smyrna" },
            { id: 18, name: "Snellville" },
            { id: 345, name: "Social Circle" },
            { id: 346, name: "Soperton" },
            { id: 347, name: "Sparta" },
            { id: 348, name: "Springfield" },
            { id: 349, name: "Stapleton" },
            { id: 350, name: "Statenville" },
            { id: 351, name: "Stateshoro" },
            { id: 352, name: "Statham" },
            { id: 19, name: "Stockbridge" },
            { id: 20, name: "Stone Mountain" },
            { id: 353, name: "Sugar Hill" },
            { id: 354, name: "Summerville" },
            { id: 355, name: "Sunny Side" },
            { id: 356, name: "Suwanee" },
            { id: 357, name: "Swainsboro" },
            { id: 358, name: "Sycamore" },
            { id: 359, name: "Sylvania" },
            { id: 360, name: "Sylvester" },
            { id: 361, name: "Talbotton" },
            { id: 362, name: "Tallapoosa" },
            { id: 363, name: "Temple" },
            { id: 364, name: "Tennille" },
            { id: 365, name: "Thomaston" },
            { id: 366, name: "Thomasville" },
            { id: 367, name: "Thomson" },
            { id: 368, name: "Tifton" },
            { id: 369, name: "Toccoa" },
            { id: 370, name: "Trenton" },
            { id: 371, name: "Tucker" },
            { id: 372, name: "Tunnel Hill" },
            { id: 373, name: "Twin City" },
            { id: 374, name: "Tybee Island" },
            { id: 375, name: "Ty Ty" },
            { id: 376, name: "Unadilla" },
            { id: 377, name: "Union City" },
            { id: 378, name: "Union Point" },
            { id: 379, name: "Unionville" },
            { id: 380, name: "Uvalda" },
            { id: 381, name: "Valdosta" },
            { id: 382, name: "Varnell" },
            { id: 383, name: "Vidalia" },
            { id: 384, name: "Vidette" },
            { id: 385, name: "Vienna" },
            { id: 386, name: "Villa Rica" },
            { id: 387, name: "Waco" },
            { id: 388, name: "Wadley" },
            { id: 389, name: "Waleska" },
            { id: 390, name: "Walnut Grove" },
            { id: 391, name: "Walthourville" },
            { id: 392, name: "Warm Springs" },
            { id: 393, name: "Warner Robins" },
            { id: 394, name: "Warrenton" },
            { id: 395, name: "Warwick" },
            { id: 396, name: "Washington" },
            { id: 397, name: "Watkinsville" },
            { id: 398, name: "Waverly Hall" },
            { id: 399, name: "Waycross" },
            { id: 400, name: "Waynesboro" },
            { id: 401, name: "West Point" },
            { id: 402, name: "Whigham" },
            { id: 403, name: "White" },
            { id: 404, name: "White Plains" },
            { id: 405, name: "Whitemarsh Island" },
            { id: 406, name: "Wildwood Island" },
            { id: 407, name: "Willacoochee" },
            { id: 408, name: "Wilmington Island" },
            { id: 409, name: "Winder" },
            { id: 410, name: "Winterville" },
            { id: 411, name: "Woodbine" },
            { id: 412, name: "Woodbury" },
            { id: 413, name: "Woodland" },
            { id: 414, name: "Woodstock" },
            { id: 415, name: "Woodville" },
            { id: 416, name: "Wrens" },
            { id: 417, name: "Wrightsville" },
            { id: 419, name: "Yatesville" },
            { id: 418, name: "Young Harris" },
            { id: 420, name: "Zebulon" },
        ];
    }
    getNeighborhoods() {
        return [
            { id: 1, name: "Astoria", cityId: 1 },
            { id: 2, name: "Midtown", cityId: 1 },
            { id: 3, name: "Chinatown", cityId: 1 },
            { id: 4, name: "Austin", cityId: 2 },
            { id: 5, name: "Englewood", cityId: 2 },
            { id: 6, name: "Riverdale", cityId: 2 },
            { id: 7, name: "Hollywood", cityId: 3 },
            { id: 8, name: "Sherman Oaks", cityId: 3 },
            { id: 9, name: "Highland Park", cityId: 3 },
            { id: 10, name: "Belltown", cityId: 4 },
            { id: 11, name: "Queen Anne", cityId: 4 },
            { id: 12, name: "Green Lake", cityId: 4 },
        ];
    }
    getStreets() {
        return [
            { id: 1, name: "Astoria Street #1", cityId: 1, neighborhoodId: 1 },
            { id: 2, name: "Astoria Street #2", cityId: 1, neighborhoodId: 1 },
            { id: 3, name: "Midtown Street #1", cityId: 1, neighborhoodId: 2 },
            { id: 4, name: "Midtown Street #2", cityId: 1, neighborhoodId: 2 },
            { id: 5, name: "Chinatown Street #1", cityId: 1, neighborhoodId: 3 },
            { id: 6, name: "Chinatown Street #2", cityId: 1, neighborhoodId: 3 },
            { id: 7, name: "Austin Street #1", cityId: 2, neighborhoodId: 4 },
            { id: 8, name: "Austin Street #2", cityId: 2, neighborhoodId: 4 },
            { id: 9, name: "Englewood Street #1", cityId: 2, neighborhoodId: 5 },
            { id: 10, name: "Englewood Street #2", cityId: 2, neighborhoodId: 5 },
            { id: 11, name: "Riverdale Street #1", cityId: 2, neighborhoodId: 6 },
            { id: 12, name: "Riverdale Street #2", cityId: 2, neighborhoodId: 6 },
            { id: 13, name: "Hollywood Street #1", cityId: 3, neighborhoodId: 7 },
            { id: 14, name: "Hollywood Street #2", cityId: 3, neighborhoodId: 7 },
            { id: 15, name: "Sherman Oaks Street #1", cityId: 3, neighborhoodId: 8 },
            { id: 16, name: "Sherman Oaks Street #2", cityId: 3, neighborhoodId: 8 },
            { id: 17, name: "Highland Park Street #1", cityId: 3, neighborhoodId: 9 },
            { id: 18, name: "Highland Park Street #2", cityId: 3, neighborhoodId: 9 },
            { id: 19, name: "Belltown Street #1", cityId: 4, neighborhoodId: 10 },
            { id: 20, name: "Belltown Street #2", cityId: 4, neighborhoodId: 10 },
            { id: 21, name: "Queen Anne Street #1", cityId: 4, neighborhoodId: 11 },
            { id: 22, name: "Queen Anne Street #2", cityId: 4, neighborhoodId: 11 },
            { id: 23, name: "Green Lake Street #1", cityId: 4, neighborhoodId: 12 },
            { id: 24, name: "Green Lake Street #2", cityId: 4, neighborhoodId: 12 },
        ];
    }
    getFeatures() {
        return [
            { id: 1, name: "Aire acondicionado", selected: false },
            { id: 2, name: "Parrillera", selected: false },
            { id: 3, name: "Secadora", selected: false },
            { id: 4, name: "Microondas", selected: false },
            { id: 5, name: "Refrigerador", selected: false },
            { id: 6, name: "TV Cable", selected: false },
            { id: 7, name: "Sauna", selected: false },
            { id: 8, name: "WiFi", selected: false },
            { id: 9, name: "Fireplace", selected: false },
            { id: 10, name: "Piscina", selected: false },
            { id: 11, name: "Gimnasio", selected: false },
        ];
    }
    getHomeCarouselSlides() {
        return this.http.get(this.url + "slides.json");
    }
    filterData(data, params, sort, page, perPage) {
        if (params) {
            if (params.propertyType) {
                data = data.filter((property) => property.propertyType == params.propertyType.name);
            }
            if (params.propertyStatus && params.propertyStatus.length) {
                let statuses = [];
                params.propertyStatus.forEach((status) => {
                    statuses.push(status.name);
                });
                let properties = [];
                data.filter((property) => property.propertyStatus.forEach((status) => {
                    if (statuses.indexOf(status) > -1) {
                        if (!properties.includes(property)) {
                            properties.push(property);
                        }
                    }
                }));
                data = properties;
            }
            if (params.price) {
                if (this.appSettings.settings.currency == "USD") {
                    if (params.price.from) {
                        const from = parseInt(params.price.from + "000");
                        data = data.filter((property) => {
                            if (property.priceDollar.sale &&
                                property.priceDollar.sale >= from) {
                                return true;
                            }
                            if (property.priceDollar.rent &&
                                property.priceDollar.rent >= from) {
                                return true;
                            }
                            return false;
                        });
                    }
                    if (params.price.to) {
                        const priceTo = parseInt(params.price.to + '000');
                        data = data.filter((property) => {
                            if (property.priceDollar.sale &&
                                property.priceDollar.sale <= priceTo) {
                                return true;
                            }
                            if (property.priceDollar.rent &&
                                property.priceDollar.rent <= priceTo) {
                                return true;
                            }
                            return false;
                        });
                    }
                }
                if (this.appSettings.settings.currency == "EUR") {
                    if (params.price.from) {
                        data = data.filter((property) => {
                            if (property.priceEuro.sale &&
                                property.priceEuro.sale >= params.price.from) {
                                return true;
                            }
                            if (property.priceEuro.rent &&
                                property.priceEuro.rent >= params.price.from) {
                                return true;
                            }
                            return false;
                        });
                    }
                    if (params.price.to) {
                        data = data.filter((property) => {
                            if (property.priceEuro.sale &&
                                property.priceEuro.sale <= params.price.to) {
                                return true;
                            }
                            if (property.priceEuro.rent &&
                                property.priceEuro.rent <= params.price.to) {
                                return true;
                            }
                            return false;
                        });
                    }
                }
            }
            if (params.city) {
                data = data.filter((property) => property.city == params.city.name);
            }
            if (params.zipCode) {
                data = data.filter((property) => property.zipCode == params.zipCode);
            }
            if (params.neighborhood && params.neighborhood.length) {
                let neighborhoods = [];
                params.neighborhood.forEach((item) => {
                    neighborhoods.push(item.name);
                });
                let properties = [];
                data.filter((property) => property.neighborhood.forEach((item) => {
                    if (neighborhoods.indexOf(item) > -1) {
                        if (!properties.includes(property)) {
                            properties.push(property);
                        }
                    }
                }));
                data = properties;
            }
            if (params.street && params.street.length) {
                let streets = [];
                params.street.forEach((item) => {
                    streets.push(item.name);
                });
                let properties = [];
                data.filter((property) => property.street.forEach((item) => {
                    if (streets.indexOf(item) > -1) {
                        if (!properties.includes(property)) {
                            properties.push(property);
                        }
                    }
                }));
                data = properties;
            }
            if (params.bedrooms) {
                if (params.bedrooms.from) {
                    data = data.filter((property) => property.bedrooms >= params.bedrooms.from);
                }
                if (params.bedrooms.to) {
                    data = data.filter((property) => property.bedrooms <= params.bedrooms.to);
                }
            }
            if (params.bathrooms) {
                if (params.bathrooms.from) {
                    data = data.filter((property) => property.bathrooms >= params.bathrooms.from);
                }
                if (params.bathrooms.to) {
                    data = data.filter((property) => property.bathrooms <= params.bathrooms.to);
                }
            }
            if (params.garages) {
                if (params.garages.from) {
                    data = data.filter((property) => property.garages >= params.garages.from);
                }
                if (params.garages.to) {
                    data = data.filter((property) => property.garages <= params.garages.to);
                }
            }
            if (params.area) {
                if (params.area.from) {
                    data = data.filter((property) => property.area.value >= params.area.from);
                }
                if (params.area.to) {
                    data = data.filter((property) => property.area.value <= params.area.to);
                }
            }
            if (params.yearBuilt) {
                if (params.yearBuilt.from) {
                    data = data.filter((property) => property.yearBuilt >= params.yearBuilt.from);
                }
                if (params.yearBuilt.to) {
                    data = data.filter((property) => property.yearBuilt <= params.yearBuilt.to);
                }
            }
            if (params.courtesy) {
                data = data.filter((property) => property.courtesy == params.courtesy.name);
            }
            if (params.features) {
                let arr = [];
                params.features.forEach((feature) => {
                    if (feature.selected)
                        arr.push(feature.name);
                });
                if (arr.length > 0) {
                    let properties = [];
                    data.filter((property) => property.features.forEach((feature) => {
                        if (arr.indexOf(feature) > -1) {
                            if (!properties.includes(property)) {
                                properties.push(property);
                            }
                        }
                    }));
                    data = properties;
                }
            }
        }
        // console.log('data:',data)
        // for (let i = 0; i < data.length; i = i + perPage) {
        //   data = [...new Set(data.slice(i, data.length))];
        // }
        // console.log('data for:',data)
        //for show more properties mock data
        // for (var index = 0; index < 2; index++) {
        //   data = data.concat(data);
        // }
        this.sortData(sort, data);
        return this.paginator(data, page, perPage);
    }
    newfilterData(data, params, sort, page, perPage) {
        if (params) {
            if (params.propertyType) {
                data = data.filter((property) => property.propertyType == params.propertyType.name);
            }
            if (params.propertyStatus && params.propertyStatus.length) {
                let statuses = [];
                params.propertyStatus.forEach((status) => {
                    statuses.push(status.name);
                });
                let properties = [];
                data.filter((property) => property.propertyStatus.forEach((status) => {
                    if (statuses.indexOf(status) > -1) {
                        if (!properties.includes(property)) {
                            properties.push(property);
                        }
                    }
                }));
                data = properties;
            }
            if (params.price) {
                if (this.appSettings.settings.currency == "USD") {
                    if (params.price.from) {
                        const from = parseInt(params.price.from + "000");
                        data = data.filter((property) => {
                            if (property.priceDollar.sale &&
                                property.priceDollar.sale >= from) {
                                return true;
                            }
                            if (property.priceDollar.rent &&
                                property.priceDollar.rent >= from) {
                                return true;
                            }
                            return false;
                        });
                    }
                    if (params.price.to) {
                        const priceTo = parseInt(params.price.to + '000');
                        data = data.filter((property) => {
                            if (property.priceDollar.sale &&
                                property.priceDollar.sale <= priceTo) {
                                return true;
                            }
                            if (property.priceDollar.rent &&
                                property.priceDollar.rent <= priceTo) {
                                return true;
                            }
                            return false;
                        });
                    }
                }
                if (this.appSettings.settings.currency == "EUR") {
                    if (params.price.from) {
                        data = data.filter((property) => {
                            if (property.priceEuro.sale &&
                                property.priceEuro.sale >= params.price.from) {
                                return true;
                            }
                            if (property.priceEuro.rent &&
                                property.priceEuro.rent >= params.price.from) {
                                return true;
                            }
                            return false;
                        });
                    }
                    if (params.price.to) {
                        data = data.filter((property) => {
                            if (property.priceEuro.sale &&
                                property.priceEuro.sale <= params.price.to) {
                                return true;
                            }
                            if (property.priceEuro.rent &&
                                property.priceEuro.rent <= params.price.to) {
                                return true;
                            }
                            return false;
                        });
                    }
                }
            }
            if (params.city) {
                data = data.filter((property) => property.city == params.city.name);
            }
            if (params.zipCode) {
                data = data.filter((property) => property.zipCode == params.zipCode);
            }
            if (params.neighborhood && params.neighborhood.length) {
                let neighborhoods = [];
                params.neighborhood.forEach((item) => {
                    neighborhoods.push(item.name);
                });
                let properties = [];
                data.filter((property) => property.neighborhood.forEach((item) => {
                    if (neighborhoods.indexOf(item) > -1) {
                        if (!properties.includes(property)) {
                            properties.push(property);
                        }
                    }
                }));
                data = properties;
            }
            if (params.street && params.street.length) {
                let streets = [];
                params.street.forEach((item) => {
                    streets.push(item.name);
                });
                let properties = [];
                data.filter((property) => property.street.forEach((item) => {
                    if (streets.indexOf(item) > -1) {
                        if (!properties.includes(property)) {
                            properties.push(property);
                        }
                    }
                }));
                data = properties;
            }
            if (params.bedrooms) {
                if (params.bedrooms.from) {
                    data = data.filter((property) => property.bedrooms >= params.bedrooms.from);
                }
                if (params.bedrooms.to) {
                    data = data.filter((property) => property.bedrooms <= params.bedrooms.to);
                }
            }
            if (params.bathrooms) {
                if (params.bathrooms.from) {
                    data = data.filter((property) => property.bathrooms >= params.bathrooms.from);
                }
                if (params.bathrooms.to) {
                    data = data.filter((property) => property.bathrooms <= params.bathrooms.to);
                }
            }
            if (params.garages) {
                if (params.garages.from) {
                    data = data.filter((property) => property.garages >= params.garages.from);
                }
                if (params.garages.to) {
                    data = data.filter((property) => property.garages <= params.garages.to);
                }
            }
            if (params.area) {
                if (params.area.from) {
                    data = data.filter((property) => property.area.value >= params.area.from);
                }
                if (params.area.to) {
                    data = data.filter((property) => property.area.value <= params.area.to);
                }
            }
            if (params.yearBuilt) {
                if (params.yearBuilt.from) {
                    data = data.filter((property) => property.yearBuilt >= params.yearBuilt.from);
                }
                if (params.yearBuilt.to) {
                    data = data.filter((property) => property.yearBuilt <= params.yearBuilt.to);
                }
            }
            if (params.courtesy) {
                data = data.filter((property) => property.courtesy == params.courtesy.name);
            }
            if (params.features) {
                let arr = [];
                params.features.forEach((feature) => {
                    if (feature.selected)
                        arr.push(feature.name);
                });
                if (arr.length > 0) {
                    let properties = [];
                    data.filter((property) => property.features.forEach((feature) => {
                        if (arr.indexOf(feature) > -1) {
                            if (!properties.includes(property)) {
                                properties.push(property);
                            }
                        }
                    }));
                    data = properties;
                }
            }
        }
        if (data.length >= 20) {
            for (let i = 0; i < data.length; i = i + perPage) {
                data = [...new Set(data.slice(i, data.length))];
            }
        }
        //for show more properties mock data
        // for (var index = 0; index < 2; index++) {
        //   data = data.concat(data);
        // }
        this.sortData(sort, data);
        return this.paginator(data, page, perPage);
    }
    sortData(sort, data) {
        if (sort) {
            switch (sort) {
                case "Nuevo":
                    data = data.sort((a, b) => {
                        return new Date(b.published) - new Date(a.published);
                    });
                    break;
                case "Viejo":
                    data = data.sort((a, b) => {
                        return new Date(a.published) - new Date(b.published);
                    });
                    break;
                case "Popular":
                    data = data.sort((a, b) => {
                        if (a.ratingsValue / a.ratingsCount <
                            b.ratingsValue / b.ratingsCount) {
                            return 1;
                        }
                        if (a.ratingsValue / a.ratingsCount >
                            b.ratingsValue / b.ratingsCount) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case "Precio (Bajo a Alto)":
                    if (this.appSettings.settings.currency == "USD") {
                        data = data.sort((a, b) => {
                            if ((a.priceDollar.sale || a.priceDollar.rent) >
                                (b.priceDollar.sale || b.priceDollar.rent)) {
                                return 1;
                            }
                            if ((a.priceDollar.sale || a.priceDollar.rent) <
                                (b.priceDollar.sale || b.priceDollar.rent)) {
                                return -1;
                            }
                            return 0;
                        });
                    }
                    if (this.appSettings.settings.currency == "EUR") {
                        data = data.sort((a, b) => {
                            if ((a.priceEuro.sale || a.priceEuro.rent) >
                                (b.priceEuro.sale || b.v.rent)) {
                                return 1;
                            }
                            if ((a.priceEuro.sale || a.priceEuro.rent) <
                                (b.priceEuro.sale || b.priceEuro.rent)) {
                                return -1;
                            }
                            return 0;
                        });
                    }
                    break;
                case "Precio (Alto a Bajo)":
                    if (this.appSettings.settings.currency == "USD") {
                        data = data.sort((a, b) => {
                            if ((a.priceDollar.sale || a.priceDollar.rent) <
                                (b.priceDollar.sale || b.priceDollar.rent)) {
                                return 1;
                            }
                            if ((a.priceDollar.sale || a.priceDollar.rent) >
                                (b.priceDollar.sale || b.priceDollar.rent)) {
                                return -1;
                            }
                            return 0;
                        });
                    }
                    if (this.appSettings.settings.currency == "EUR") {
                        data = data.sort((a, b) => {
                            if ((a.priceEuro.sale || a.priceEuro.rent) <
                                (b.priceEuro.sale || b.v.rent)) {
                                return 1;
                            }
                            if ((a.priceEuro.sale || a.priceEuro.rent) >
                                (b.priceEuro.sale || b.priceEuro.rent)) {
                                return -1;
                            }
                            return 0;
                        });
                    }
                    break;
                default:
                    break;
            }
        }
        return data;
    }
    paginator(items, page, perPage) {
        var page = page || 1, perPage = perPage || 1, offset = (page - 1) * perPage, paginatedItems = items.slice(offset).slice(0, perPage), totalPages = Math.ceil(items.length / perPage);
        return {
            data: paginatedItems,
            pagination: {
                page: page,
                perPage: perPage,
                prePage: page - 1 ? page - 1 : null,
                nextPage: totalPages > page ? page + 1 : null,
                total: items.length + 12,
                totalPages: totalPages,
            },
        };
    }
    getTestimonials() {
        return [
            {
                text: "Muy buen servicio los recomiendo. Muy buena ayuda desde el principio hasta el final👍👌👌Carmela Moreno y su equipo son excelentes  muy eficientes si quieren comprar o vender llámalos a ellos ahora",
                author: "Alberto Arias",
                // position: 'General Director',
                image: "assets/images/profile/Alberto Arias.jpg",
            },
            {
                text: "excelente equipo los recomiendo al 100 más k ayudar se toman tan serio y con tanto amor su trabajo k a uno le aclaran cada duda cada paso en el proseso de la compra gracias por la ayuda mil bendiciones",
                author: "Martha Mary Lopez",
                // position: 'Housewife',
                image: "assets/images/profile/Martha Mary Lopez.jpg",
            },
            {
                text: "¡Guau! ¿Por dónde empiezo? Esta experiencia no ha sido más que increíble, por supuesto que hubo baches en el camino pero Carmen y Carmela siempre estuvieron tan atentas a nuestras necesidades y nuestras preocupaciones. Si estás buscando comprar o vender tu casa, definitivamente te recomiendo estas encantadoras damas, ¡siempre te atenderán a ti y a tus necesidades!",
                author: "Zoima Rocha",
                // position: 'Blogger',
                image: "assets/images/profile/Zoima Rocha.jpg",
            },
            {
                text: "100% Recomendado, son un excelente equipo que me ayudaron a comprar y vender mi casa. Te aclaran todas tus dudas y si no sabes algo te ayudan.",
                author: "Emanuel Esquivel",
                // position: 'Marketing Manager',
                image: "assets/images/profile/Emanuel Esquivel.jpg",
            },
        ];
    }
    getImagesNosotros() {
        return [
            {
                image: "assets/images/fotosContact/closing_1.png",
            },
            {
                image: "assets/images/fotosContact/closing_2.png",
            },
            {
                image: "assets/images/fotosContact/closing_3.png",
            },
            // {
            //   image: "assets/images/fotosContact/image3.jpg",
            // },
            // {
            //   image: "assets/images/fotosContact/image6.jpg",
            // },
        ];
    }
    getAchievements() {
        return [
            {
                image: "assets/images/fotosContact/second_book.jpg",
            },
            {
                image: "assets/images/fotosContact/BookSpanish.png",
            },
            {
                image: "assets/images/fotosContact/BookEnglish.png",
            },
            {
                image: "assets/images/fotosContact/DIPLOMA.png",
            },
            {
                image: "assets/images/fotosContact/DIPLOMA_2.png",
            },
            {
                image: "assets/images/fotosContact/portada_1.jpg",
            },
            {
                image: "assets/images/fotosContact/portada_2.jpg",
            },
            {
                image: "assets/images/fotosContact/portada_3.jpg",
            },
            {
                image: "assets/images/fotosContact/portada_4.jpg",
            },
        ];
    }
    getAgents() {
        return [
            {
                id: 1,
                fullName: "Carmela Moreno",
                // desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
                organization: "Mi Hogar En Atlanta",
                email: "mihogarenatlanta@gmail.com ",
                phone: "+1 (678) 744-8007",
                social: {
                    facebook: "https://www.facebook.com/mihogarenatlanta/",
                    twitter: "lusia",
                    linkedin: "https://www.linkedin.com/in/carmela-moreno-1a7392148/",
                    instagram: "https://www.instagram.com/mihogarenatlanta/",
                    // website: 'https://lusia.manuel.com'
                },
                ratingsCount: 6,
                ratingsValue: 480,
                image: "assets/images/agents/a-1-min.jpg",
            },
        ];
    }
    getClients() {
        return [
            { name: "aloha", image: "assets/images/clients/aloha.png" },
            { name: "dream", image: "assets/images/clients/dream.png" },
            { name: "congrats", image: "assets/images/clients/congrats.png" },
            { name: "best", image: "assets/images/clients/best.png" },
            { name: "original", image: "assets/images/clients/original.png" },
            { name: "retro", image: "assets/images/clients/retro.png" },
            { name: "king", image: "assets/images/clients/king.png" },
            { name: "love", image: "assets/images/clients/love.png" },
            { name: "the", image: "assets/images/clients/the.png" },
            { name: "easter", image: "assets/images/clients/easter.png" },
            { name: "with", image: "assets/images/clients/with.png" },
            { name: "special", image: "assets/images/clients/special.png" },
            { name: "bravo", image: "assets/images/clients/bravo.png" },
        ];
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__.MatBottomSheet },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar },
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_0__.AppSettings },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_10__.PLATFORM_ID,] }] }
];
AppService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)({
        providedIn: "root",
    })
], AppService);



/***/ }),

/***/ 1182:
/*!*********************************!*\
  !*** ./src/app/app.settings.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Settings": () => (/* binding */ Settings),
/* harmony export */   "AppSettings": () => (/* binding */ AppSettings)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class Settings {
    constructor(name, theme, toolbar, stickyMenuToolbar, header, rtl, searchPanelVariant, searchOnBtnClick, currency, 
    // additional options
    mainToolbarFixed, contentOffsetToTop, headerBgImage, headerBgVideo, loadMore) {
        this.name = name;
        this.theme = theme;
        this.toolbar = toolbar;
        this.stickyMenuToolbar = stickyMenuToolbar;
        this.header = header;
        this.rtl = rtl;
        this.searchPanelVariant = searchPanelVariant;
        this.searchOnBtnClick = searchOnBtnClick;
        this.currency = currency;
        this.mainToolbarFixed = mainToolbarFixed;
        this.contentOffsetToTop = contentOffsetToTop;
        this.headerBgImage = headerBgImage;
        this.headerBgVideo = headerBgVideo;
        this.loadMore = loadMore;
    }
}
let AppSettings = class AppSettings {
    constructor() {
        this.settings = new Settings(
        // <<<<<<< HEAD
        //         'MiHogarEnAtlanta',  // theme name
        //         'blue',      // blue, green, red, pink, purple, grey, orange-dark
        //         1,           // 1 or 2  
        // =======
        'HouseKey', // theme name
        'green-mihogar', // blue, green, red, pink, purple, grey, orange-dark
        1, // 1 or 2
        true, // true = sticky, false = not sticky
        'video', // default, image, carousel, map, video
        false, // true = rtl, false = ltr
        1, //  1, 2  or 3
        false, //  true = search on button click
        'USD', // USD, EUR
        // NOTE:  don't change additional options values, they used for theme performance
        false, false, false, false, {
            start: false,
            step: 1,
            load: false,
            page: 1,
            complete: false,
            result: 0
        });
    }
};
AppSettings = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], AppSettings);



/***/ }),

/***/ 48411:
/*!************************************************************!*\
  !*** ./src/app/pages/lock-screen/lock-screen.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockScreenComponent": () => (/* binding */ LockScreenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lock_screen_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lock-screen.component.html */ 77647);
/* harmony import */ var _lock_screen_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock-screen.component.scss */ 19339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);






let LockScreenComponent = class LockScreenComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.date = new Date();
    }
    ngOnInit() {
        this.timerInterval = setInterval(() => {
            this.date = new Date();
        }, 1000);
        this.form = this.fb.group({
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)])]
        });
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }
    ngOnDestroy() {
        clearInterval(this.timerInterval);
    }
    onSubmit(values) {
        if (this.form.valid) {
            this.router.navigate(['/']);
        }
    }
};
LockScreenComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LockScreenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-lock-screen',
        template: _raw_loader_lock_screen_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewEncapsulation.None,
        styles: [_lock_screen_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LockScreenComponent);



/***/ }),

/***/ 69473:
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./not-found.component.html */ 34300);
/* harmony import */ var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component.scss */ 88851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let NotFoundComponent = class NotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goHome() {
        this.router.navigate(['/']);
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NotFoundComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotFoundComponent);



/***/ }),

/***/ 37664:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesComponent": () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pages_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pages.component.html */ 88928);
/* harmony import */ var _pages_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component.scss */ 45861);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ 54679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ 1182);








let PagesComponent = class PagesComponent {
    constructor(appSettings, router, platformId, http) {
        this.appSettings = appSettings;
        this.router = router;
        this.platformId = platformId;
        this.http = http;
        this.toolbarTypes = [1, 2];
        this.headerTypes = ['default', 'image', 'carousel', 'map', 'video'];
        this.searchPanelVariants = [1, 2, 3];
        this.headerFixed = false;
        this.showBackToTop = false;
        this.scrolledCount = 0;
        this.phone = "14048443264";
        this.title2 = "Hi, i would like information about some properties.";
        this.title = 'app';
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.toolbarTypeOption = this.settings.toolbar;
        this.headerTypeOption = this.settings.header;
        this.searchPanelVariantOption = this.settings.searchPanelVariant;
    }
    changeTheme(theme) {
        this.settings.theme = theme;
    }
    chooseToolbarType() {
        this.settings.toolbar = this.toolbarTypeOption;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
    }
    chooseHeaderType() {
        this.settings.header = this.headerTypeOption;
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
        }
        this.router.navigate(['/']);
    }
    chooseSearchPanelVariant() {
        this.settings.searchPanelVariant = this.searchPanelVariantOption;
    }
    onWindowScroll() {
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        (scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
        if (this.settings.stickyMenuToolbar) {
            let top_toolbar = document.getElementById('top-toolbar');
            if (top_toolbar) {
                if (scrollTop >= top_toolbar.clientHeight) {
                    this.settings.mainToolbarFixed = true;
                }
                else {
                    this.settings.mainToolbarFixed = false;
                }
            }
        }
        let load_more = document.getElementById('load-more');
        if (load_more) {
            if (window.innerHeight > load_more.getBoundingClientRect().top + 120) {
                if (!this.settings.loadMore.complete) {
                    if (this.settings.loadMore.start) {
                        if (this.scrolledCount < this.settings.loadMore.step) {
                            this.scrolledCount++;
                            if (!this.settings.loadMore.load) {
                                this.settings.loadMore.load = true;
                            }
                        }
                        else {
                            this.settings.loadMore.start = false;
                            this.scrolledCount = 0;
                        }
                    }
                }
            }
        }
    }
    scrollToTop() {
        var scrollDuration = 200;
        var scrollStep = -window.pageYOffset / (scrollDuration / 20);
        var scrollInterval = setInterval(() => {
            if (window.pageYOffset != 0) {
                window.scrollBy(0, scrollStep);
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 10);
        if (window.innerWidth <= 768) {
            setTimeout(() => {
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                    window.scrollTo(0, 0);
                }
            });
        }
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                this.sidenav.close();
                this.settings.mainToolbarFixed = false;
                setTimeout(() => {
                    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
                        window.scrollTo(0, 0);
                    }
                });
            }
        });
    }
};
PagesComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID,] }] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_6__.Http }
];
PagesComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['sidenav',] }],
    onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.HostListener, args: ['window:scroll',] }]
};
PagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pages',
        template: _raw_loader_pages_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pages_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PagesComponent);



/***/ }),

/***/ 42066:
/*!***************************************************************!*\
  !*** ./src/app/shared/alert-dialog/alert-dialog.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertDialogComponent": () => (/* binding */ AlertDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_alert_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./alert-dialog.component.html */ 46417);
/* harmony import */ var _alert_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-dialog.component.scss */ 43659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 22238);





let AlertDialogComponent = class AlertDialogComponent {
    constructor(dialogRef, message) {
        this.dialogRef = dialogRef;
        this.message = message;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
};
AlertDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA,] }] }
];
AlertDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-alert-dialog',
        template: _raw_loader_alert_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_alert_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlertDialogComponent);



/***/ }),

/***/ 57634:
/*!***********************************************!*\
  !*** ./src/app/shared/chat/chat.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chat.component.html */ 71248);
/* harmony import */ var _chat_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.component.scss */ 66245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/chat.service */ 88925);





let ChatComponent = class ChatComponent {
    constructor(chatService) {
        this.chatService = chatService;
        this.messages = [];
    }
    ngOnInit() {
        this.chatService.conversation.subscribe((val) => {
            this.messages = this.messages.concat(val);
        });
        setTimeout(this.hideNotification, 5000);
    }
    sendMessage() {
        this.chatService.getBotAnswer(this.value);
        this.value = '';
    }
    openForm() {
        document.getElementById("chat-box").style.display = "block";
        this.welcomeMessage();
    }
    closeForm() {
        document.getElementById("chat-box").style.display = "none";
    }
    welcomeMessage() {
        this.value = 'Hola.';
        this.chatService.getBotAnswer(this.value);
        this.value = '';
    }
    options(content) {
        this.value = content;
        this.chatService.getBotAnswer(this.value);
        this.value = '';
    }
    hideNotification() {
        document.getElementById("notification").style.display = "none";
    }
};
ChatComponent.ctorParameters = () => [
    { type: src_app_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_2__.ChatService }
];
ChatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-chat',
        template: _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chat_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChatComponent);



/***/ }),

/***/ 23937:
/*!*****************************************************!*\
  !*** ./src/app/shared/clients/clients.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsComponent": () => (/* binding */ ClientsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_clients_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clients.component.html */ 75721);
/* harmony import */ var _clients_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients.component.scss */ 21925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);





let ClientsComponent = class ClientsComponent {
    constructor(appService) {
        this.appService = appService;
        this.config = {};
    }
    ngOnInit() {
        this.clients = this.appService.getClients();
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 7,
            spaceBetween: 16,
            keyboard: true,
            navigation: false,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: "slide",
            breakpoints: {
                320: {
                    slidesPerView: 2
                },
                480: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 4
                },
                960: {
                    slidesPerView: 5
                },
                1280: {
                    slidesPerView: 6
                },
                1500: {
                    slidesPerView: 7
                }
            }
        };
    }
};
ClientsComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
ClientsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-clients',
        template: _raw_loader_clients_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clients_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClientsComponent);



/***/ }),

/***/ 5716:
/*!*******************************************************!*\
  !*** ./src/app/shared/comments/comments.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsComponent": () => (/* binding */ CommentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_comments_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./comments.component.html */ 5206);
/* harmony import */ var _comments_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.component.scss */ 83383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 38955);






let CommentsComponent = class CommentsComponent {
    constructor(fb) {
        this.fb = fb;
        this.reviews = [
            {
                author: 'Bruno Vespa',
                avatar: 'assets/images/avatars/avatar-1.png',
                tooltip: 'Dissatisfied',
                icon: 'sentiment_dissatisfied',
                date: '13 January, 2018 at 7:09',
                text: 'Integer id eros et mi fringilla imperdiet. In dictum turpis eget magna viverra condimentum. Ut malesuada interdum ultrices. Proin tristique sem pellentesque, posuere dui in, maximus magna. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna.'
            },
            {
                author: 'Julia Aniston',
                avatar: 'assets/images/avatars/avatar-2.png',
                tooltip: 'Very Satisfied',
                icon: 'sentiment_very_satisfied',
                date: '04 February, 2018 at 10:22',
                text: 'Nulla accumsan, lacus sed suscipit rutrum, turpis augue accumsan metus, in accumsan urna mi vehicula lorem. Pellentesque semper nibh vitae augue placerat finibus. Nulla sed porttitor nunc, quis tristique sem. Quisque in varius nisl. Integer turpis lorem, ultricies sed sem nec, commodo molestie arcu. Nulla finibus ex tortor, et suscipit magna semper consectetur. Cras sit amet metus dui. Maecenas eget dui at ex varius malesuada vel non felis.'
            },
            {
                author: 'Andy Warhol',
                avatar: 'assets/images/avatars/avatar-3.png',
                tooltip: 'Neutral',
                icon: 'sentiment_neutral',
                date: '14 February, 2018 at 11:10',
                text: 'Pellentesque hendrerit vel turpis aliquam placerat. Suspendisse ullamcorper congue feugiat. Etiam gravida metus ac massa posuere venenatis. Pellentesque vehicula lobortis dolor, ac pretium dolor maximus quis. Fusce vitae iaculis mauris, quis posuere ex. Mauris vitae convallis nibh. Etiam eget enim at orci interdum maximus nec in ante.'
            }
        ];
        this.ratings = [
            { title: 'Very Dissatisfied', icon: 'sentiment_very_dissatisfied', percentage: 20, selected: false },
            { title: 'Dissatisfied', icon: 'sentiment_dissatisfied', percentage: 40, selected: false },
            { title: 'Neutral', icon: 'sentiment_neutral', percentage: 60, selected: false },
            { title: 'Satisfied', icon: 'sentiment_satisfied', percentage: 80, selected: false },
            { title: 'Very Satisfied', icon: 'sentiment_very_satisfied', percentage: 100, selected: false }
        ];
    }
    ngOnInit() {
        this.commentForm = this.fb.group({
            review: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(4)])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.emailValidator])],
            rate: null,
            propertyId: this.propertyId
        });
    }
    onCommentFormSubmit(values) {
        if (this.commentForm.valid) {
            console.log(values);
            if (values.rate) {
                //property.ratingsCount++,
                //property.ratingsValue = property.ratingsValue + values.rate,
            }
        }
    }
    rate(rating) {
        this.ratings.filter(r => r.selected = false);
        this.ratings.filter(r => r.percentage == rating.percentage)[0].selected = true;
        this.commentForm.controls.rate.setValue(rating.percentage);
    }
};
CommentsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
CommentsComponent.propDecorators = {
    propertyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['propertyId',] }]
};
CommentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-comments',
        template: _raw_loader_comments_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_comments_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommentsComponent);



/***/ }),

/***/ 42764:
/*!***********************************************************************!*\
  !*** ./src/app/shared/compare-overview/compare-overview.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompareOverviewComponent": () => (/* binding */ CompareOverviewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_compare_overview_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./compare-overview.component.html */ 93982);
/* harmony import */ var _compare_overview_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compare-overview.component.scss */ 29760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 36410);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ 70900);







let CompareOverviewComponent = class CompareOverviewComponent {
    constructor(appService, appSettings, bottomSheetRef) {
        this.appService = appService;
        this.appSettings = appSettings;
        this.bottomSheetRef = bottomSheetRef;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.properties = this.appService.Data.compareList;
    }
    hideSheet(isRedirect) {
        this.bottomSheetRef.dismiss(isRedirect);
    }
    remove(property, event) {
        const index = this.appService.Data.compareList.indexOf(property);
        if (index !== -1) {
            this.appService.Data.compareList.splice(index, 1);
        }
        if (this.appService.Data.compareList.length == 0) {
            this.hideSheet(false);
        }
        event.preventDefault();
    }
};
CompareOverviewComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__.MatBottomSheetRef }
];
CompareOverviewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-compare-overview',
        template: _raw_loader_compare_overview_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_compare_overview_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CompareOverviewComponent);



/***/ }),

/***/ 22887:
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogModel": () => (/* binding */ ConfirmDialogModel),
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_confirm_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./confirm-dialog.component.html */ 45290);
/* harmony import */ var _confirm_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-dialog.component.scss */ 22634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 22238);





class ConfirmDialogModel {
    constructor(title, message) {
        this.title = title;
        this.message = message;
    }
}
let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title;
        this.message = data.message;
    }
    ngOnInit() {
    }
    onConfirm() {
        this.dialogRef.close(true);
    }
    onDismiss() {
        this.dialogRef.close(false);
    }
};
ConfirmDialogComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef },
    { type: ConfirmDialogModel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject, args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA,] }] }
];
ConfirmDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-confirm-dialog',
        template: _raw_loader_confirm_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_confirm_dialog_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfirmDialogComponent);



/***/ }),

/***/ 85800:
/*!***************************************************************!*\
  !*** ./src/app/shared/contact-form/contact-form.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactFormComponent": () => (/* binding */ ContactFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contact_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact-form.component.html */ 24589);
/* harmony import */ var _contact_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-form.component.scss */ 33407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/email.service */ 31413);






let ContactFormComponent = class ContactFormComponent {
    constructor(formBuilder, emailService) {
        this.formBuilder = formBuilder;
        this.emailService = emailService;
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            tel: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            message: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    sendEmail() {
        let name = this.contactForm.value.name;
        let email = this.contactForm.value.email;
        let tel = this.contactForm.value.tel;
        let message = this.contactForm.value.message;
        let req = {
            name: name,
            email: email,
            tel: tel,
            message: message
        };
        console.log(name, this.contactForm.value.message);
        this.emailService.sendMessage(req).subscribe(data => {
            console.log(data);
        });
    }
};
ContactFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_email_service__WEBPACK_IMPORTED_MODULE_2__.EmailService }
];
ContactFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-contact-form',
        template: _raw_loader_contact_form_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_form_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactFormComponent);



/***/ }),

/***/ 84549:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/dialog-header-controls/dialog-header-controls.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogHeaderControlsComponent": () => (/* binding */ DialogHeaderControlsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dialog_header_controls_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dialog-header-controls.component.html */ 6905);
/* harmony import */ var _dialog_header_controls_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-header-controls.component.scss */ 63793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let DialogHeaderControlsComponent = class DialogHeaderControlsComponent {
    constructor() {
        this.showFullscreenIcon = true;
        this.isFullScreen = false;
    }
    ngOnInit() {
    }
    toggleFullScreen() {
        this.isFullScreen = !this.isFullScreen;
        if (this.isFullScreen) {
            this.dialogRef.addPanelClass('fullscreen');
            document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        }
        else {
            this.dialogRef.removePanelClass('fullscreen');
            document.getElementsByTagName('html')[0].style.overflowY = null;
        }
    }
    close() {
        this.dialogRef.close();
        document.getElementsByTagName('html')[0].style.overflowY = null;
    }
};
DialogHeaderControlsComponent.ctorParameters = () => [];
DialogHeaderControlsComponent.propDecorators = {
    dialogRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['dialogRef',] }],
    showFullscreenIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['showFullscreenIcon',] }]
};
DialogHeaderControlsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-dialog-header-controls',
        template: _raw_loader_dialog_header_controls_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dialog_header_controls_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DialogHeaderControlsComponent);



/***/ }),

/***/ 45979:
/*!***************************************************************!*\
  !*** ./src/app/shared/get-in-touch/get-in-touch.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetInTouchComponent": () => (/* binding */ GetInTouchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_get_in_touch_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./get-in-touch.component.html */ 89073);
/* harmony import */ var _get_in_touch_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-in-touch.component.scss */ 79450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let GetInTouchComponent = class GetInTouchComponent {
    constructor() { }
    ngOnInit() {
    }
};
GetInTouchComponent.ctorParameters = () => [];
GetInTouchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-get-in-touch',
        template: _raw_loader_get_in_touch_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_get_in_touch_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GetInTouchComponent);



/***/ }),

/***/ 43075:
/*!*********************************************************************!*\
  !*** ./src/app/shared/header-carousel/header-carousel.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderCarouselComponent": () => (/* binding */ HeaderCarouselComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_header_carousel_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header-carousel.component.html */ 2440);
/* harmony import */ var _header_carousel_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-carousel.component.scss */ 23378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 1182);





let HeaderCarouselComponent = class HeaderCarouselComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.slides = [];
        this.fullscreen = false;
        this.config = {};
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        if (this.contentOffsetToTop) {
            setTimeout(() => {
                this.settings.contentOffsetToTop = this.contentOffsetToTop;
            });
        }
    }
    ngAfterViewInit() {
        this.initCarousel();
    }
    ngOnChanges() {
        if (this.slides.length > 0) {
            this.currentSlide = this.slides[0];
        }
    }
    initCarousel() {
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            speed: 500,
            effect: "slide"
        };
    }
    ngOnDestroy() {
        setTimeout(() => {
            this.settings.contentOffsetToTop = false;
        });
    }
    onIndexChange(index) {
        this.currentSlide = this.slides[index];
    }
};
HeaderCarouselComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings }
];
HeaderCarouselComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['slides',] }],
    contentOffsetToTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['contentOffsetToTop',] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['fullscreen',] }]
};
HeaderCarouselComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header-carousel',
        template: _raw_loader_header_carousel_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_carousel_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderCarouselComponent);



/***/ }),

/***/ 26272:
/*!***************************************************************!*\
  !*** ./src/app/shared/header-image/header-image.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderImageComponent": () => (/* binding */ HeaderImageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_header_image_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header-image.component.html */ 7786);
/* harmony import */ var _header_image_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-image.component.scss */ 85997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 1182);






let HeaderImageComponent = class HeaderImageComponent {
    constructor(appSettings, sanitizer) {
        this.appSettings = appSettings;
        this.sanitizer = sanitizer;
        this.isHomePage = false;
        this.fullscreen = false;
        this.settings = this.appSettings.settings;
        setTimeout(() => {
            this.settings.headerBgImage = true;
        });
    }
    ngOnInit() {
        if (this.contentOffsetToTop) {
            setTimeout(() => {
                this.settings.contentOffsetToTop = this.contentOffsetToTop;
            });
        }
        if (this.backgroundImage) {
            this.bgImage = this.sanitizer.bypassSecurityTrustStyle('url(' + this.backgroundImage + ')');
        }
    }
    ngOnDestroy() {
        setTimeout(() => {
            this.settings.headerBgImage = false;
            this.settings.contentOffsetToTop = false;
        });
    }
};
HeaderImageComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer }
];
HeaderImageComponent.propDecorators = {
    backgroundImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['backgroundImage',] }],
    bgImageAnimate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['bgImageAnimate',] }],
    contentOffsetToTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['contentOffsetToTop',] }],
    contentMinHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['contentMinHeight',] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['title',] }],
    desc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['desc',] }],
    isHomePage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['isHomePage',] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['fullscreen',] }]
};
HeaderImageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-header-image',
        template: _raw_loader_header_image_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_image_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderImageComponent);



/***/ }),

/***/ 72629:
/*!***********************************************************!*\
  !*** ./src/app/shared/header-map/header-map.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMapComponent": () => (/* binding */ HeaderMapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_header_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header-map.component.html */ 20557);
/* harmony import */ var _header_map_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-map.component.scss */ 1267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ 1182);






let HeaderMapComponent = class HeaderMapComponent {
    constructor(appSettings, appService) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.locations = [];
        this.fullscreen = false;
        this.lat = 40.678178;
        this.lng = -93.944158;
        this.zoom = 5;
        this.markerAnimation = 'BOUNCE';
        this.mapStyles = [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8b9198"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#323336"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#414954"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2e2f31"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7a7c80"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#242427"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#393a3f"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#393a3f"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#202124"
                    }
                ]
            }
        ];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        if (this.contentOffsetToTop) {
            setTimeout(() => {
                this.settings.contentOffsetToTop = this.contentOffsetToTop;
            });
        }
    }
    ngOnChanges(changes) {
        if (changes.locations) {
            if (!changes.locations.isFirstChange()) {
                //reset map position on filter
                this.zoom = 5;
                this.lat = 40.678178;
                this.lng = -93.944158;
                this.markerAnimation = 'BOUNCE';
                setTimeout(() => {
                    this.markerAnimation = null;
                }, 1000);
            }
        }
    }
    ngOnDestroy() {
        setTimeout(() => {
            this.settings.contentOffsetToTop = false;
        });
    }
    onMapReady(e) {
        setTimeout(() => {
            this.markerAnimation = null;
        }, 1000);
    }
    onMapClick(e) {
        console.log(e);
    }
    onMarkerClick(e, propertyId) {
        this.lat = e.latitude;
        this.lng = e.longitude;
        if (this.zoom < 11) {
            this.zoom = 11;
        }
        this.property = null;
        setTimeout(() => {
            this.appService.getPropertyById(propertyId).subscribe(res => {
                this.property = res;
            });
        }, 500);
    }
    onZoomChange(e) {
        this.zoom = e;
    }
};
HeaderMapComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__.AppSettings },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
HeaderMapComponent.propDecorators = {
    locations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['locations',] }],
    contentOffsetToTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['contentOffsetToTop',] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['fullscreen',] }]
};
HeaderMapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-header-map',
        template: _raw_loader_header_map_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_map_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderMapComponent);



/***/ }),

/***/ 89501:
/*!***************************************************************!*\
  !*** ./src/app/shared/header-video/header-video.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderVideoComponent": () => (/* binding */ HeaderVideoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_header_video_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header-video.component.html */ 24705);
/* harmony import */ var _header_video_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-video.component.scss */ 8855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 1182);





let HeaderVideoComponent = class HeaderVideoComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.isHomePage = false;
        this.fullscreen = false;
        this.settings = this.appSettings.settings;
        setTimeout(() => {
            this.settings.headerBgVideo = true;
        });
    }
    ngAfterViewInit() {
        this.bgVideo.nativeElement.muted = true;
        this.bgVideo.nativeElement.autoplay = true;
        this.bgVideo.nativeElement.load();
    }
    ngOnInit() {
        if (this.contentOffsetToTop) {
            setTimeout(() => {
                this.settings.contentOffsetToTop = this.contentOffsetToTop;
            });
        }
        var vid = document.getElementById("bgVideo");
        vid.muted = true;
    }
    ngOnDestroy() {
        setTimeout(() => {
            this.settings.headerBgVideo = false;
            this.settings.contentOffsetToTop = false;
        });
    }
};
HeaderVideoComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings }
];
HeaderVideoComponent.propDecorators = {
    backgroundVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ["backgroundVideo",] }],
    contentOffsetToTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ["contentOffsetToTop",] }],
    contentMinHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ["contentMinHeight",] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ["title",] }],
    desc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ["desc",] }],
    isHomePage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ["isHomePage",] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ["fullscreen",] }],
    bgVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ["bgvideos", { static: false },] }]
};
HeaderVideoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-header-video",
        template: _raw_loader_header_video_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_video_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderVideoComponent);



/***/ }),

/***/ 97286:
/*!*********************************************************!*\
  !*** ./src/app/shared/load-more/load-more.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadMoreComponent": () => (/* binding */ LoadMoreComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_load_more_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./load-more.component.html */ 49147);
/* harmony import */ var _load_more_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-more.component.scss */ 80554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 1182);





let LoadMoreComponent = class LoadMoreComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.step = 1;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.settings.loadMore.step = this.step;
    }
    startLoad() {
        this.settings.loadMore.start = true;
        this.settings.loadMore.load = true;
    }
};
LoadMoreComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings }
];
LoadMoreComponent.propDecorators = {
    step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
LoadMoreComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-load-more',
        template: _raw_loader_load_more_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_load_more_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoadMoreComponent);



/***/ }),

/***/ 56869:
/*!***********************************************!*\
  !*** ./src/app/shared/logo/logo.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_logo_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./logo.component.html */ 87230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



let LogoComponent = class LogoComponent {
};
LogoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-logo',
        template: _raw_loader_logo_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], LogoComponent);



/***/ }),

/***/ 42470:
/*!*****************************************************!*\
  !*** ./src/app/shared/mission/mission.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissionComponent": () => (/* binding */ MissionComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mission_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mission.component.html */ 81827);
/* harmony import */ var _mission_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mission.component.scss */ 37779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let MissionComponent = class MissionComponent {
    constructor() { }
    ngOnInit() {
    }
};
MissionComponent.ctorParameters = () => [];
MissionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-mission',
        template: _raw_loader_mission_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mission_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MissionComponent);



/***/ }),

/***/ 33404:
/*!***********************************************************!*\
  !*** ./src/app/shared/our-agents/our-agents.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurAgentsComponent": () => (/* binding */ OurAgentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_our_agents_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./our-agents.component.html */ 28269);
/* harmony import */ var _our_agents_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./our-agents.component.scss */ 30772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);





let OurAgentsComponent = class OurAgentsComponent {
    constructor(appService) {
        this.appService = appService;
        this.config = {};
    }
    ngOnInit() {
        this.agents = this.appService.getAgents();
    }
};
OurAgentsComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
OurAgentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-our-agents',
        template: _raw_loader_our_agents_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_our_agents_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OurAgentsComponent);



/***/ }),

/***/ 41514:
/*!***************************************************************!*\
  !*** ./src/app/shared/our-services/our-services.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurServicesComponent": () => (/* binding */ OurServicesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_our_services_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./our-services.component.html */ 84823);
/* harmony import */ var _our_services_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./our-services.component.scss */ 21549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let OurServicesComponent = class OurServicesComponent {
    constructor() { }
    ngOnInit() {
    }
};
OurServicesComponent.ctorParameters = () => [];
OurServicesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-our-services',
        template: _raw_loader_our_services_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_our_services_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OurServicesComponent);



/***/ }),

/***/ 28870:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/properties-carousel/properties-carousel.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesCarouselComponent": () => (/* binding */ PropertiesCarouselComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_properties_carousel_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./properties-carousel.component.html */ 45375);
/* harmony import */ var _properties_carousel_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-carousel.component.scss */ 59776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let PropertiesCarouselComponent = class PropertiesCarouselComponent {
    constructor() {
        this.properties = [];
        this.config = {};
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: true,
            navigation: { nextEl: '.prop-next', prevEl: '.prop-prev' },
            pagination: true,
            grabCursor: true,
            loop: false,
            preloadImages: true,
            lazy: false,
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                600: {
                    slidesPerView: 2
                },
                960: {
                    slidesPerView: 3
                },
                1280: {
                    slidesPerView: 4
                }
            }
        };
    }
};
PropertiesCarouselComponent.ctorParameters = () => [];
PropertiesCarouselComponent.propDecorators = {
    properties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['properties',] }]
};
PropertiesCarouselComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-properties-carousel',
        template: _raw_loader_properties_carousel_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_properties_carousel_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PropertiesCarouselComponent);



/***/ }),

/***/ 32370:
/*!*********************************************************************************************************!*\
  !*** ./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesSearchResultsFiltersComponent": () => (/* binding */ PropertiesSearchResultsFiltersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_properties_search_results_filters_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./properties-search-results-filters.component.html */ 71943);
/* harmony import */ var _properties_search_results_filters_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-search-results-filters.component.scss */ 25858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_services_fmls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/fmls.service */ 61770);





let PropertiesSearchResultsFiltersComponent = class PropertiesSearchResultsFiltersComponent {
    constructor(fmls) {
        this.fmls = fmls;
        this.onRemoveSearchField = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() { }
    remove(field) {
        this.onRemoveSearchField.emit(field);
    }
};
PropertiesSearchResultsFiltersComponent.ctorParameters = () => [
    { type: src_app_shared_services_fmls_service__WEBPACK_IMPORTED_MODULE_2__.FmlsService }
];
PropertiesSearchResultsFiltersComponent.propDecorators = {
    searchFields: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    onRemoveSearchField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
PropertiesSearchResultsFiltersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-properties-search-results-filters',
        template: _raw_loader_properties_search_results_filters_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_properties_search_results_filters_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PropertiesSearchResultsFiltersComponent);



/***/ }),

/***/ 59731:
/*!*************************************************************************!*\
  !*** ./src/app/shared/properties-search/properties-search.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesSearchComponent": () => (/* binding */ PropertiesSearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_properties_search_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./properties-search.component.html */ 22783);
/* harmony import */ var _properties_search_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-search.component.scss */ 38133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ 70900);
/* harmony import */ var _services_fmls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/fmls.service */ 61770);







let PropertiesSearchComponent = class PropertiesSearchComponent {
    constructor(appService, fb, Fmls) {
        this.appService = appService;
        this.fb = fb;
        this.Fmls = Fmls;
        this.variant = 1;
        this.vertical = false;
        this.searchOnBtnClick = false;
        this.onSearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onSearchClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.showMore = false;
        this.propertyTypes = [];
        this.propertyStatuses = [];
        this.cities = [];
        this.neighborhoods = [];
        this.streets = [];
        this.features = [];
    }
    ngOnInit() {
        if (this.vertical) {
            this.showMore = true;
        }
        ;
        this.propertyTypes = this.appService.getPropertyTypes();
        this.propertyStatuses = this.appService.getPropertyStatuses();
        this.cities = this.appService.getCities();
        this.neighborhoods = this.appService.getNeighborhoods();
        this.streets = this.appService.getStreets();
        this.features = this.appService.getFeatures();
        this.form = this.fb.group({
            propertyType: null,
            propertyStatus: null,
            price: this.fb.group({
                from: null,
                to: null
            }),
            city: null,
            zipCode: null,
            neighborhood: null,
            street: null,
            bedrooms: this.fb.group({
                from: null,
                to: null
            }),
            bathrooms: this.fb.group({
                from: null,
                to: null
            }),
            garages: this.fb.group({
                from: null,
                to: null
            }),
            area: this.fb.group({
                from: null,
                to: null
            }),
            yearBuilt: this.fb.group({
                from: null,
                to: null
            }),
            features: this.buildFeatures()
        });
        this.onSearchChange.emit(this.form);
    }
    buildFeatures() {
        const arr = this.features.map(feature => {
            return this.fb.group({
                id: feature.id,
                name: feature.name,
                selected: feature.selected
            });
        });
        return this.fb.array(arr);
    }
    ngOnChanges() {
        if (this.removedSearchField) {
            if (this.removedSearchField.indexOf(".") > -1) {
                let arr = this.removedSearchField.split(".");
                this.form.controls[arr[0]]['controls'][arr[1]].reset();
            }
            else if (this.removedSearchField.indexOf(",") > -1) {
                let arr = this.removedSearchField.split(",");
                this.form.controls[arr[0]]['controls'][arr[1]]['controls']['selected'].setValue(false);
            }
            else {
                this.form.controls[this.removedSearchField].reset();
            }
        }
    }
    reset() {
        this.form.reset({
            propertyType: null,
            propertyStatus: null,
            price: {
                from: null,
                to: null
            },
            city: null,
            zipCode: null,
            neighborhood: null,
            street: null,
            bedrooms: {
                from: null,
                to: null
            },
            bathrooms: {
                from: null,
                to: null
            },
            garages: {
                from: null,
                to: null
            },
            area: {
                from: null,
                to: null
            },
            yearBuilt: {
                from: null,
                to: null
            },
            features: this.features
        });
    }
    search() {
        this.onSearchClick.emit();
    }
    onSelectCity() {
        this.form.controls['neighborhood'].setValue(null, { emitEvent: false });
        this.form.controls['street'].setValue(null, { emitEvent: false });
    }
    onSelectNeighborhood() {
        this.form.controls['street'].setValue(null, { emitEvent: false });
    }
    getAppearance() {
        return (this.variant != 3) ? 'outline' : '';
    }
    getFloatLabel() {
        return (this.variant == 1) ? 'always' : '';
    }
};
PropertiesSearchComponent.ctorParameters = () => [
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_fmls_service__WEBPACK_IMPORTED_MODULE_3__.FmlsService }
];
PropertiesSearchComponent.propDecorators = {
    variant: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    searchOnBtnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    removedSearchField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    onSearchChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }],
    onSearchClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
PropertiesSearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-properties-search',
        template: _raw_loader_properties_search_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_properties_search_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PropertiesSearchComponent);



/***/ }),

/***/ 66260:
/*!***************************************************************************!*\
  !*** ./src/app/shared/properties-toolbar/properties-toolbar.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesToolbarComponent": () => (/* binding */ PropertiesToolbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_properties_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./properties-toolbar.component.html */ 37178);
/* harmony import */ var _properties_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-toolbar.component.scss */ 92194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 29790);





let PropertiesToolbarComponent = class PropertiesToolbarComponent {
    constructor(translate) {
        this.isHomePage = false;
        this.showSidenavToggle = false;
        this.onSidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onChangeCount = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onChangeSorting = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onChangeViewType = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.viewType = 'grid';
        this.viewCol = 25;
        this.counts = [8, 12, 16, 24, 36];
        this.sortings = ['Ordenar por defecto']; //'SORT.DEFAULT', 'SORT.PRICE<', 'SORT.PRICE>'
        translate.stream('SORT.DEFAULT').subscribe((text) => {
            this.sortings = [];
            this.sortings.push(text);
        });
        translate.stream('SORT.PRICE<').subscribe((text) => {
            this.sortings.push(text);
        });
        translate.stream('SORT.PRICE>').subscribe((text) => {
            this.sortings.push(text);
        });
        translate.stream('SORT.NEW').subscribe((text) => {
            this.sortings.push(text);
        });
        translate.stream('SORT.OLD').subscribe((text) => {
            this.sortings.push(text);
        });
    }
    ngOnInit() {
        this.count = (this.isHomePage) ? this.counts[0] : this.counts[1];
        this.sort = this.sortings;
    }
    ngOnChanges() {
        // console.log(' show toggle - ' ,this.showSidenavToggle)
    }
    changeCount(count) {
        this.count = count;
        this.onChangeCount.emit(count);
        // this.getAllProducts(); 
    }
    changeSorting(sort) {
        this.sort = sort;
        this.onChangeSorting.emit(sort);
    }
    changeViewType(viewType, viewCol) {
        this.viewType = viewType;
        this.viewCol = viewCol;
        this.onChangeViewType.emit({ viewType: viewType, viewCol: viewCol });
    }
    sidenavToggle() {
        this.onSidenavToggle.emit();
    }
};
PropertiesToolbarComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService }
];
PropertiesToolbarComponent.propDecorators = {
    isHomePage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    showSidenavToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    onSidenavToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    onChangeCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    onChangeSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    onChangeViewType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
PropertiesToolbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-properties-toolbar',
        template: _raw_loader_properties_toolbar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_properties_toolbar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PropertiesToolbarComponent);



/***/ }),

/***/ 25520:
/*!*****************************************************************!*\
  !*** ./src/app/shared/property-item/property-item.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertyItemComponent": () => (/* binding */ PropertyItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_property_item_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./property-item.component.html */ 31138);
/* harmony import */ var _property_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property-item.component.scss */ 79312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-swiper-wrapper */ 15923);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ 1182);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ 70900);
/* harmony import */ var _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../compare-overview/compare-overview.component */ 42764);








let PropertyItemComponent = class PropertyItemComponent {
    constructor(appSettings, appService) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.viewType = "grid";
        this.viewColChanged = false;
        this.fullWidthPage = true;
        this.column = 4;
        this.config = {};
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true
        };
        this.settings = this.appSettings.settings;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.initCarousel();
        // this.appService.getAddress(this.property.location.lat, this.property.location.lng).subscribe(data=>{
        //   console.log(data['results'][0]['formatted_address']);
        //   this.address = data['results'][0]['formatted_address'];
        // })
    }
    ngOnChanges(changes) {
        if (changes.viewColChanged) {
            this.getColumnCount(changes.viewColChanged.currentValue);
            if (!changes.viewColChanged.isFirstChange()) {
                if (this.property.gallery.length > 1) {
                    this.directiveRef.update();
                }
            }
        }
        for (let propName in changes) {
            // let changedProp = changes[propName];
            // if (!changedProp.isFirstChange()) {
            //   if(this.property.gallery.length > 1){
            //     this.initCarousel();
            //     this.config.autoHeight = true;       
            //     this.directiveRef.update();  
            //   }       
            // }      
        }
    }
    getColumnCount(value) {
        if (value == 25) {
            this.column = 4;
        }
        else if (value == 33.3) {
            this.column = 3;
        }
        else if (value == 50) {
            this.column = 2;
        }
        else {
            this.column = 1;
        }
    }
    getStatusBgColor(status) {
        switch (status) {
            case 'En Venta':
                return '#558B2F';
            case 'En Renta':
                return '#1E88E5';
            case 'Casa Abierta':
                return '#009688';
            case 'Sin Tarifa':
                return '#FFA000';
            case 'Oferta Especial':
                return '#F44336';
            case 'Vendida':
                return '#000';
            default:
                return '#01579B';
        }
    }
    initCarousel() {
        this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: false,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            nested: true,
            // autoplay: {
            //   delay: 5000,
            //   disableOnInteraction: false
            // },
            speed: 500,
            effect: "slide"
        };
    }
    addToCompare() {
        this.appService.addToCompare(this.property, _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_4__.CompareOverviewComponent, (this.settings.rtl) ? 'rtl' : 'ltr');
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
};
PropertyItemComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService }
];
PropertyItemComponent.propDecorators = {
    property: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    viewType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    viewColChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    fullWidthPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__.SwiperDirective,] }]
};
PropertyItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-property-item',
        template: _raw_loader_property_item_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_property_item_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PropertyItemComponent);



/***/ }),

/***/ 89515:
/*!***************************************************!*\
  !*** ./src/app/shared/rating/rating.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingComponent": () => (/* binding */ RatingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_rating_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rating.component.html */ 16889);
/* harmony import */ var _rating_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.component.scss */ 99015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let RatingComponent = class RatingComponent {
    constructor() { }
    ngDoCheck() {
        if (this.ratingsCount && this.ratingsValue && !this.avg) {
            this.calculateAvgValue();
        }
    }
    calculateAvgValue() {
        this.avg = this.ratingsValue / this.ratingsCount;
        switch (true) {
            case this.avg > 0 && this.avg < 20: {
                this.stars = ['star_half', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
            }
            case this.avg == 20: {
                this.stars = ['star', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
            }
            case this.avg > 20 && this.avg < 40: {
                this.stars = ['star', 'star_half', 'star_border', 'star_border', 'star_border'];
                break;
            }
            case this.avg == 40: {
                this.stars = ['star', 'star', 'star_border', 'star_border', 'star_border'];
                break;
            }
            case this.avg > 40 && this.avg < 60: {
                this.stars = ['star', 'star', 'star_half', 'star_border', 'star_border'];
                break;
            }
            case this.avg == 60: {
                this.stars = ['star', 'star', 'star', 'star_border', 'star_border'];
                break;
            }
            case this.avg > 60 && this.avg < 80: {
                this.stars = ['star', 'star', 'star', 'star_half', 'star_border'];
                break;
            }
            case this.avg == 80: {
                this.stars = ['star', 'star', 'star', 'star', 'star_border'];
                break;
            }
            case this.avg > 80 && this.avg < 100: {
                this.stars = ['star', 'star', 'star', 'star', 'star_half'];
                break;
            }
            case this.avg >= 100: {
                this.stars = ['star', 'star', 'star', 'star', 'star'];
                break;
            }
            default: {
                this.stars = ['star_border', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
            }
        }
    }
};
RatingComponent.ctorParameters = () => [];
RatingComponent.propDecorators = {
    ratingsCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    ratingsValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
RatingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-rating',
        template: _raw_loader_rating_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rating_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RatingComponent);



/***/ }),

/***/ 88925:
/*!*************************************************!*\
  !*** ./src/app/shared/services/chat.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => (/* binding */ Message),
/* harmony export */   "ChatService": () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);



class Message {
    constructor(author, content, question) {
        this.author = author;
        this.content = content;
        this.question = question;
    }
}
let ChatService = class ChatService {
    constructor() {
        this.conversation = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.messageMap = {
            // "Hi": `Bienvenido, somos mi hogar en atlanta, le gustaria ser atendido en español or I would like to be assisted in english`,
            // "hi": "Bienvenido, somos mi hogar en atlanta, le gustaria ser atendido en español or I would like to be assisted in english",
            // "hello": "Bienvenido, somos mi hogar en atlanta, le gustaria ser atendido en español or I would like to be assisted in english",
            // "Hello": {
            //   "1": "Bienvenido, somos mi hogar en atlanta, le gustaria ser atendido en español",
            //   "2": "or I would like to be assisted in english"
            // },       
            "Hola.": {
                "Bienvenido, por favor elija su idioma. Welcome, please choose your language:": [
                    "Español.",
                    "English."
                ]
            },
            // "hola": "Bienvenido, somos mi hogar en atlanta, le gustaria ser atendido en español or I would like to be assisted in english",
            "Español.": {
                "¿Que desea hacer?": [
                    "Comprar una casa.",
                    "Información de contacto.",
                    "Agendar una cita."
                ]
            },
            // "Espanol": "Deseo conocer como comprar una casa Le gustaria nuestra Información de contacto Deseo agendar una cita Responda comprar, contacto o cita, de acuerdo a su eleccion.",
            // "español": "Deseo conocer como comprar una casa Le gustaria nuestra Información de contacto Deseo agendar una cita Responda comprar, contacto o cita, de acuerdo a su eleccion.",
            // "espanol": "Deseo conocer como comprar una casa Le gustaria nuestra Información de contacto Deseo agendar una cita Responda comprar, contacto o cita, de acuerdo a su eleccion.",
            "English.": {
                "What you want to do?": [
                    "Buy a house.",
                    "Contact information.",
                    "Make an appoinment."
                ]
            },
            // "english": "I would like to buy a house I would like to contact us I would like to Make an appoinment Answer buy, contact or meeting, by your choice.",
            "Comprar una casa.": {
                "¿Que desea saber al respecto?": [
                    "Documentos necesarios.",
                    "Puntaje de crédito mínimo.",
                    "Los taxes.",
                    "Aplicar con alguien mas."
                ]
            },
            // "comprar": "Deseo saber acerca de: documentos, puntaje de credito, taxes o aplicar con alguien mas responda documentos, credito, taxes o aplicar con alguien, de acuerdo a su eleccion.",
            "Buy a house.": {
                "What do you want to know about it?": [
                    "Documents required.",
                    "Credit score minimum.",
                    "The taxes.",
                    "Apply with someone else."
                ]
            },
            // "buy": "I would like to know about: documents, credit score, taxes or apply with someone else answer documents, credit score, taxes or apply with someone else, by your choice.",
            "Documentos necesarios.": {
                "¿Con cuál desea aplicar?": [
                    "Con Tax ID.",
                    "Con seguro social."
                ]
            },
            // "documentos": "Puede aplicar con Tax ID o seguro social, responda Tax ID o seguro social, de acuerdo a su eleccion para saber los requerimientos de estos.",
            "Documents required.": {
                "Which one will you apply with?": [
                    "With Tax ID.",
                    "With Social Security."
                ]
            },
            // "documents": "You can apply with your Tax ID or your Social Security, answer Tax ID or Social Security, by your choice to know the requirements of them",
            "Con Tax ID.": {
                "Los requisitos son: identificación o pasaporte, numero de tax id, últimos dos meses de estados de cuenta, contar con el 20% de down payment.": [
                    "Información acerca del 20% de down payment.",
                    "Eso es todo, gracias."
                ]
            },
            "With Tax ID.": {
                "You need this requirements: ID or passport, tax ID number, last two months of your balance account and 20% of down payment. If you want information about the 20% down payment, answer 20%.": [
                    "Information about the 20% down payment.",
                    "That's it, thanks."
                ]
            },
            // "Tax id": "Los requisitos son: identificación o pasaporte, numero de tax id, últimos dos meses de estados de cuenta, contar con el 20% de down payment. Si Deseo Informacióna acerca del 20%, responda 20%. You need this requirements: ID or passport, tax ID number, last two months of your balance account and 20% of down payment. If you want information about the 20% down payment, answer 20%.",
            // "tax id": "Los requisitos son: identificación o pasaporte, numero de tax id, últimos dos meses de estados de cuenta, contar con el 20% de down payment. Si Deseo Informacióna acerca del 20%, responda 20%. You need this requirements: ID or passport, tax ID number, last two months of your balance account and 20% of down payment. If you want information about the 20% down payment, answer 20%.",
            "Información acerca del 20% de down payment.": {
                "El monto de la inicial sera el 20% del valor de la casa.": [
                    "Eso es todo, gracias."
                ]
            },
            "Information about the 20% down payment.": {
                "It will be the 20% of the house value.": [
                    "That's it, thanks."
                ]
            },
            "Con seguro social.": {
                "Los requisitos son: licencia, número de seguro social, green card o permiso de trabajo, el último mes de talones de pago, últimos dos años de taxes, últimos tres meses de estados de cuenta.": [
                    "Información acerca del down payment.",
                    "Eso es todo, gracias."
                ]
            },
            "With Social Security.": {
                "You need this requirements: license, Social Security number, green card or work permission, last month of pay stubs, last two year of taxes and the last three months of your balance account. If you want to know about the down payment answer down payment.": [
                    "Information about the down payment.",
                    "That's it, thanks."
                ]
            },
            "Información acerca del down payment.": {
                "El monto de down payment va de 3 a 5% del valor de la casa": [
                    "Eso es todo, gracias."
                ]
            },
            "Information about the down payment.": {
                "It will be from 3 to 5% of the house value": [
                    "That's it, thanks."
                ]
            },
            "Puntaje de crédito mínimo": {
                "Necesita un mínimo de 640 puntos.": [
                    "Eso es todo, gracias."
                ]
            },
            "Credit score minimum": {
                "You need at least 640 points.": [
                    "That's it, thanks."
                ]
            },
            // "credit score": "You need at least 640 points.",
            // "Credit score": "You need at least 640 points.",
            "Los taxes": {
                "Contamos con un equipo de contadores que puede ayudarle a realizar sus taxes.": [
                    "Eso es todo, gracias."
                ]
            },
            "The taxes": {
                "We have a accountants team that will help with your taxes.": [
                    "That's it, thanks."
                ]
            },
            "Aplicar con alguien mas": {
                "Si se puede, mientras ambos tengan sus requisitos en regla es posible.": [
                    "Eso es todo, gracias."
                ]
            },
            // "aplicar con alguien mas": "Si se puede, mientras ambos tengan sus requisitos en regla es posible.",
            "Apply with someone else": {
                "You can do it only if both have all the requirements.": [
                    "That's it, thanks."
                ]
            },
            // "apply with someone else": "You can do it only if both have all the requirements",    
            "Información de contacto.": {
                "Nos puede contactar directamente a nuestro correo o a nuestro numero telefónico:": [
                    "mihogarenatlanta@gmail.com",
                    "+1 (678) 744-8007"
                ]
            },
            // "contacto": "Nos puede contactar directamente a nuestro correo o a nuestro numero telefónico: mihogarenatlanta@gmail.com & +1 (678) 744-8007",
            "Contact information.": {
                "You can contact us to our email or our phone number:": [
                    "mihogarenatlanta@gmail.com",
                    "+1 (678) 744-8007"
                ]
            },
            // "contact": "You can contact us to our email or our phone number: mihogarenatlanta@gmail.com & +1 (678) 744-8007",
            "Agendar una cita.": {
                "Para agendar una cita debe de contactarnos a traves de nuestro numero telefónico:": [
                    "+1 (678) 744-8007",
                    "Eso es todo, gracias."
                ]
            },
            // "cita": "Para agendar una cita debe de contactarnos a traves de nuestro numero telefónico: +1 (678) 744-8007",
            "Make an appoinment.": {
                "To make an appoinment you can contact us to our phone number:": [
                    "+1 (678) 744-8007",
                    "That's it, thanks."
                ]
            },
            // "meeting": "To Make an appoinment you can contact us to our phone number: +1 (678) 744-8007",
            // "Who are you": "I am Mi hogar En Atlanta's ChatBot",
            // "Quien eres": "Soy el ChatBot de Mi Hogar En Atlanta",
            "Eso es todo, gracias.": {
                "Para mas Información contactarnos a traves de nuestro correo o a nuestro numero telefónico:": [
                    "mihogarenatlanta@gmail.com",
                    "+1 (678) 744-8007"
                ]
            },
            "That's it, thanks.": {
                "For more information contact us to our email or our phone number:": [
                    "mihogarenatlanta@gmail.com",
                    "+1 (678) 744-8007"
                ]
            }
            // "yes": "This is our email and our telephone number: mihogarenatlanta@gmail.com & +1 (678) 744-8007. Please contact us and We will answer all your questions",
            // "no": "Thanks for coming, have a nice experience in our website",
        };
    }
    getBotAnswer(msg) {
        const userMessage = new Message('user', '', msg);
        console.log(userMessage);
        this.conversation.next([userMessage]);
        const botMessage = new Message('bot', this.getBotMessage(msg), '');
        console.log(botMessage);
        setTimeout(() => {
            this.conversation.next([botMessage]);
        }, 1500);
    }
    getBotMessage(question) {
        let answer = this.messageMap[question];
        return answer || this.messageMap['default'];
    }
};
ChatService.ctorParameters = () => [];
ChatService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ChatService);



/***/ }),

/***/ 66046:
/*!****************************************************!*\
  !*** ./src/app/shared/services/contact.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactService": () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let ContactService = class ContactService {
    constructor() { }
};
ContactService.ctorParameters = () => [];
ContactService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], ContactService);



/***/ }),

/***/ 31413:
/*!**************************************************!*\
  !*** ./src/app/shared/services/email.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailService": () => (/* binding */ EmailService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



let EmailService = class EmailService {
    constructor(http) {
        this.http = http;
    }
    sendMessage(body) {
        let headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("https://mha-nodemailer.onrender.com/email", body, headers);
    }
};
EmailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
EmailService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EmailService);



/***/ }),

/***/ 61770:
/*!*************************************************!*\
  !*** ./src/app/shared/services/fmls.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FmlsService": () => (/* binding */ FmlsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.models */ 5396);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 70900);





let FmlsService = class FmlsService {
    constructor(httpClient, appservice) {
        this.httpClient = httpClient;
        this.appservice = appservice;
        this.dataArray = [];
        this.arrayCleanData = [];
        this.uniqueData = [];
        this.limit = 120;
        this.offset = 0;
        this.limit2 = 12;
        this.offset2 = 0;
    }
    getDataProperties(limit, offset) {
        return this.httpClient
            .get("https://api.bridgedataoutput.com/api/v2/fmls/listings?permissionGroupID=21e09d51-f3ac-4909-b6aa-6be71af3bda0&and[0][MlsStatus][ne]=Canceled&and[1][MlsStatus][ne]=Closed&and[2][MlsStatus][ne]=Expired&and[3][MlsStatus][ne]=Withdrawn&limit=" +
            limit +
            "&offset=" +
            offset +
            "&sortBy[0]=BridgeModificationTimestamp&access_token=eb139e76bad135fab257119419bd4c10")
            .toPromise();
    }
    getDataProperties2(limit2, offset2) {
        return this.httpClient
            .get("https://api.bridgedataoutput.com/api/v2/fmls/listings?permissionGroupID=21e09d51-f3ac-4909-b6aa-6be71af3bda0&and[0][MlsStatus][ne]=Canceled&and[1][MlsStatus][ne]=Closed&and[2][MlsStatus][ne]=Expired&and[3][MlsStatus][ne]=Withdrawn&limit=" +
            limit2 +
            "&offset=" +
            offset2 +
            "&sortBy[0]=BridgeModificationTimestamp&access_token=eb139e76bad135fab257119419bd4c10")
            .toPromise();
    }
    getPropertiesByCity(city, limit, offset) {
        return this.httpClient
            .get("https://api.bridgedataoutput.com/api/v2/fmls/listings?permissionGroupID=21e09d51-f3ac-4909-b6aa-6be71af3bda0&and[0][MlsStatus][ne]=Canceled&and[1][MlsStatus][ne]=Closed&and[2][MlsStatus][ne]=Expired&and[3][MlsStatus][ne]=Withdrawn&limit=" +
            limit +
            "&offset= " +
            offset +
            "&sortBy[0]=BridgeModificationTimestamp&access_token=eb139e76bad135fab257119419bd4c10&$City=" +
            city)
            .toPromise();
    }
    cleanData(data) {
        // this.uniqueData = [];
        this.arrayCleanData = [];
        data.forEach((element) => {
            this.dataArray["id"] = element["ListingId"];
            this.dataArray["title"] = element["BuildingName"];
            this.dataArray["PropertyType"] = element["PropertyType"];
            this.dataArray["PropertyStatus"] = element["MlsStatus"];
            this.dataArray["city"] = element["City"];
            this.dataArray["Zipcode"] = element["PostalCode"];
            this.dataArray["Neighborhood"] = element["CountyOrParish"];
            this.dataArray["street"] = element["StreetName"];
            this.dataArray["latitude"] = element["Latitude"];
            this.dataArray["longitude"] = element["Longitude"];
            this.dataArray["address"] = element["UnparsedAddress"];
            this.dataArray["features"] = element["ExteriorFeatures"];
            this.dataArray["price"] = element["FMLS_CurrentPrice"];
            this.dataArray["rent"] = element["RentIncludes"];
            this.dataArray["bedrooms"] = element["BedroomsTotal"];
            this.dataArray["bathrooms"] = element["BathroomsTotalInteger"];
            this.dataArray["garages"] = element["GarageSpaces"];
            this.dataArray["area"] = [element["BuildingAreaTotal"]];
            this.dataArray["yearBuilt"] = element["YearBuilt"];
            this.dataArray["addFeatures"] = [];
            if (element["ExteriorFeatures"].length != 0) {
                element["ExteriorFeatures"].forEach((item) => this.dataArray["addFeatures"].push(item));
            }
            if (element["CommunityFeatures"].length != 0) {
                element["CommunityFeatures"].forEach((item) => this.dataArray["addFeatures"].push(item));
            }
            if (element["AccessibilityFeatures"].length != 0) {
                element["AccessibilityFeatures"].forEach((item) => this.dataArray["addFeatures"].push(item));
            }
            this.dataArray["gallery"] = [];
            if (element["Media"] != null) {
                element["Media"].forEach((item) => this.dataArray["gallery"].push(item.MediaURL));
            }
            else {
                this.dataArray["gallery"].push("assets/images/others/NoImageAvailable.jpg");
            }
            this.dataArray["published"] = element["OnMarketDate"];
            this.dataArray["lastUpdated"] = element["StatusChangeTimestamp"];
            this.dataArray["courtesy"] = element["ListOfficeName"];
            this.propertyN = new src_app_app_models__WEBPACK_IMPORTED_MODULE_0__.Property(this.dataArray["id"], this.dataArray["title"], "", this.dataArray["PropertyType"], this.dataArray["PropertyStatus"], this.dataArray["city"], this.dataArray["Zipcode"], [this.dataArray["Neighborhood"]], [this.dataArray["street"]], {
                propertyId: this.dataArray["id"],
                lat: this.dataArray["latitude"],
                lng: this.dataArray["longitude"],
            }, this.dataArray["address"], this.dataArray["features"], true, { sale: this.dataArray["price"] }, { sale: this.dataArray["price"] }, this.dataArray["bedrooms"], this.dataArray["bathrooms"], this.dataArray["garages"], { value: this.dataArray["area"], id: 0, unit: "ft²" }, this.dataArray["yearBuilt"], 0, 0, [
                {
                    id: this.dataArray["id"],
                    name: "",
                    value: this.dataArray["addFeatures"],
                },
            ], this.dataArray["gallery"], [], [], this.dataArray["published"], this.dataArray["lastUpdated"], 0, this.dataArray["courtesy"]);
            this.arrayCleanData.push(this.propertyN);
            // console.log('arraycleanData')
            // console.log(this.arrayCleanData)
        });
        this.uniqueData = [...new Set(this.arrayCleanData)];
        // console.log('uniqueData')
        // console.log(this.uniqueData)
    }
    getListingKey(id) {
        return this.httpClient.get("https://api.bridgedataoutput.com/api/v2/fmls/listings/" +
            id +
            "?&access_token=eb139e76bad135fab257119419bd4c10");
    }
    singleFmlsData(data) {
        this.dataArray["id"] = data["ListingId"];
        this.dataArray["title"] = data["BuildingName"];
        this.dataArray["desc"] = data["PublicRemarks"];
        this.dataArray["PropertyType"] = data["PropertyType"];
        this.dataArray["PropertyStatus"] = data["MlsStatus"];
        this.dataArray["city"] = data["City"];
        this.dataArray["Zipcode"] = data["PostalCode"];
        this.dataArray["Neighborhood"] = data["CountyOrParish"];
        this.dataArray["street"] = data["StreetName"];
        this.dataArray["latitude"] = data["Latitude"];
        this.dataArray["longitude"] = data["Longitude"];
        this.dataArray["address"] = data["UnparsedAddress"];
        this.dataArray["features"] = data["ExteriorFeatures"];
        this.dataArray["price"] = data["FMLS_CurrentPrice"];
        this.dataArray["rent"] = data["RentIncludes"];
        this.dataArray["bedrooms"] = data["BedroomsTotal"];
        this.dataArray["bathrooms"] = data["BathroomsTotalInteger"];
        this.dataArray["garages"] = data["GarageSpaces"];
        this.dataArray["area"] = [data["BuildingAreaTotal"]];
        this.dataArray["yearBuilt"] = data["YearBuilt"];
        this.dataArray["addFeatures"] = [];
        if (data["ExteriorFeatures"].length != 0) {
            data["ExteriorFeatures"].forEach((item) => this.dataArray["addFeatures"].push(item));
        }
        if (data["CommunityFeatures"].length != 0) {
            data["CommunityFeatures"].forEach((item) => this.dataArray["addFeatures"].push(item));
        }
        if (data["AccessibilityFeatures"].length != 0) {
            data["AccessibilityFeatures"].forEach((item) => this.dataArray["addFeatures"].push(item));
        }
        this.dataArray["gallery"] = [];
        if (data["Media"] != null) {
            data["Media"].forEach((item) => this.dataArray["gallery"].push(item.MediaURL));
        }
        else {
            this.dataArray["gallery"].push("assets/images/others/NoImageAvailable.jpg");
        }
        this.dataArray["published"] = data["OnMarketDate"];
        this.dataArray["lastUpdated"] = data["StatusChangeTimestamp"];
        this.dataArray["courtesy"] = data["ListOfficeName"];
        this.propertyNS = new src_app_app_models__WEBPACK_IMPORTED_MODULE_0__.Property(this.dataArray["id"], this.dataArray["title"], this.dataArray["desc"], this.dataArray["PropertyType"], [this.dataArray["PropertyStatus"]], this.dataArray["city"], this.dataArray["Zipcode"], [this.dataArray["Neighborhood"]], [this.dataArray["street"]], {
            propertyId: this.dataArray["id"],
            lat: this.dataArray["latitude"],
            lng: this.dataArray["longitude"],
        }, this.dataArray["address"], this.dataArray["features"], true, { sale: this.dataArray["price"] }, { sale: this.dataArray["price"] }, this.dataArray["bedrooms"], this.dataArray["bathrooms"], this.dataArray["garages"], { value: this.dataArray["area"], id: 0, unit: "ft²" }, this.dataArray["yearBuilt"], 0, 0, [
            {
                id: this.dataArray["id"],
                name: "",
                value: this.dataArray["addFeatures"],
            },
        ], this.dataArray["gallery"], [], [], this.dataArray["published"], this.dataArray["lastUpdated"], 0, this.dataArray["courtesy"]);
    }
    getDescend(limit) {
        return this.httpClient
            .get("https://api.bridgedataoutput.com/api/v2/fmls/listings?permissionGroupID=21e09d51-f3ac-4909-b6aa-6be71af3bda0&and[0][MlsStatus][ne]=Canceled&and[1][MlsStatus][ne]=Closed&and[2][MlsStatus][ne]=Expired&and[3][MlsStatus][ne]=Withdrawn&limit=" +
            limit +
            "&offset=0&sortBy[0]=BridgeModificationTimestamp&access_token=eb139e76bad135fab257119419bd4c10&sortBy=ListPrice&order=desc")
            .toPromise();
    }
    getDescend2(limit2, offset2) {
        return this.httpClient
            .get("https://api.bridgedataoutput.com/api/v2/fmls/listings?permissionGroupID=21e09d51-f3ac-4909-b6aa-6be71af3bda0&and[0][MlsStatus][ne]=Canceled&and[1][MlsStatus][ne]=Closed&and[2][MlsStatus][ne]=Expired&and[3][MlsStatus][ne]=Withdrawn&limit=" +
            limit2 +
            "&offset=" +
            offset2 +
            "&sortBy[0]=BridgeModificationTimestamp&access_token=eb139e76bad135fab257119419bd4c10&sortBy=ListPrice&order=desc")
            .toPromise();
    }
    getAscend(limit) {
        return this.httpClient
            .get("https://api.bridgedataoutput.com/api/v2/fmls/listings?permissionGroupID=21e09d51-f3ac-4909-b6aa-6be71af3bda0&and[0][MlsStatus][ne]=Canceled&and[1][MlsStatus][ne]=Closed&and[2][MlsStatus][ne]=Expired&and[3][MlsStatus][ne]=Withdrawn&limit=" +
            limit +
            "&offset=0&sortBy[0]=BridgeModificationTimestamp&access_token=eb139e76bad135fab257119419bd4c10&sortBy=ListPrice&order=asc")
            .toPromise();
    }
    getAscend2(limit2, offset2) {
        return this.httpClient
            .get("https://api.bridgedataoutput.com/api/v2/fmls/listings?permissionGroupID=21e09d51-f3ac-4909-b6aa-6be71af3bda0&and[0][MlsStatus][ne]=Canceled&and[1][MlsStatus][ne]=Closed&and[2][MlsStatus][ne]=Expired&and[3][MlsStatus][ne]=Withdrawn&limit=" +
            limit2 +
            "&offset=" +
            offset2 +
            "&sortBy[0]=BridgeModificationTimestamp&access_token=eb139e76bad135fab257119419bd4c10&sortBy=ListPrice&order=asc")
            .toPromise();
    }
    getOld(limit) {
        return this.httpClient
            .get("https://api.bridgedataoutput.com/api/v2/fmls/listings?permissionGroupID=21e09d51-f3ac-4909-b6aa-6be71af3bda0&and[0][MlsStatus][ne]=Canceled&and[1][MlsStatus][ne]=Closed&and[2][MlsStatus][ne]=Expired&and[3][MlsStatus][ne]=Withdrawn&limit=" +
            limit +
            "&offset=&sortBy[0]=BridgeModificationTimestamp&access_token=eb139e76bad135fab257119419bd4c10&sortBy=DaysOnMarket&order=asc")
            .toPromise();
    }
    getOld2(limit2, offset2) {
        return this.httpClient
            .get("https://api.bridgedataoutput.com/api/v2/fmls/listings?permissionGroupID=21e09d51-f3ac-4909-b6aa-6be71af3bda0&and[0][MlsStatus][ne]=Canceled&and[1][MlsStatus][ne]=Closed&and[2][MlsStatus][ne]=Expired&and[3][MlsStatus][ne]=Withdrawn&limit=" +
            limit2 +
            "&offset=" +
            offset2 +
            "&sortBy[0]=BridgeModificationTimestamp&access_token=eb139e76bad135fab257119419bd4c10&sortBy=DaysOnMarket&order=asc")
            .toPromise();
    }
    getNew(limit) {
        return this.httpClient
            .get("https://api.bridgedataoutput.com/api/v2/fmls/listings?permissionGroupID=21e09d51-f3ac-4909-b6aa-6be71af3bda0&and[0][MlsStatus][ne]=Canceled&and[1][MlsStatus][ne]=Closed&and[2][MlsStatus][ne]=Expired&and[3][MlsStatus][ne]=Withdrawn&limit=" +
            limit +
            "&offset=0&sortBy[0]=BridgeModificationTimestamp&access_token=eb139e76bad135fab257119419bd4c10&sortBy=DaysOnMarket&order=desc")
            .toPromise();
    }
    getNew2(limit2, offset2) {
        return this.httpClient
            .get("https://api.bridgedataoutput.com/api/v2/fmls/listings?permissionGroupID=21e09d51-f3ac-4909-b6aa-6be71af3bda0&and[0][MlsStatus][ne]=Canceled&and[1][MlsStatus][ne]=Closed&and[2][MlsStatus][ne]=Expired&and[3][MlsStatus][ne]=Withdrawn&limit=" +
            limit2 +
            "&offset=" +
            offset2 +
            "&sortBy[0]=BridgeModificationTimestamp&access_token=eb139e76bad135fab257119419bd4c10&sortBy=DaysOnMarket&order=desc")
            .toPromise();
    }
};
FmlsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService }
];
FmlsService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: "root",
    })
], FmlsService);



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-swiper-wrapper */ 15923);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/flex-layout */ 25830);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/autocomplete */ 21554);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/badge */ 70346);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 36410);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/button-toggle */ 42542);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/chips */ 58341);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/dialog */ 22238);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/menu */ 33935);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/paginator */ 99692);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/progress-bar */ 12178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/sidenav */ 94935);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/slider */ 54436);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/snack-bar */ 77001);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/sort */ 11494);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/stepper */ 94553);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/table */ 32091);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/tabs */ 65939);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/toolbar */ 12522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @agm/core */ 15971);
/* harmony import */ var _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @agm/snazzy-info-window */ 95330);
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme/pipes/pipes.module */ 39045);
/* harmony import */ var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/directives/directives.module */ 19212);
/* harmony import */ var _header_image_header_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-image/header-image.component */ 26272);
/* harmony import */ var _header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-carousel/header-carousel.component */ 43075);
/* harmony import */ var _property_item_property_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property-item/property-item.component */ 25520);
/* harmony import */ var _load_more_load_more_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./load-more/load-more.component */ 97286);
/* harmony import */ var _properties_toolbar_properties_toolbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties-toolbar/properties-toolbar.component */ 66260);
/* harmony import */ var _properties_search_properties_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./properties-search/properties-search.component */ 59731);
/* harmony import */ var _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compare-overview/compare-overview.component */ 42764);
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rating/rating.component */ 89515);
/* harmony import */ var _properties_search_results_filters_properties_search_results_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./properties-search-results-filters/properties-search-results-filters.component */ 32370);
/* harmony import */ var _properties_carousel_properties_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./properties-carousel/properties-carousel.component */ 28870);
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./clients/clients.component */ 23937);
/* harmony import */ var _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get-in-touch/get-in-touch.component */ 45979);
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comments/comments.component */ 5716);
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./testimonials/testimonials.component */ 89347);
/* harmony import */ var _our_agents_our_agents_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./our-agents/our-agents.component */ 33404);
/* harmony import */ var _mission_mission_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mission/mission.component */ 42470);
/* harmony import */ var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./our-services/our-services.component */ 41514);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./logo/logo.component */ 56869);
/* harmony import */ var _header_map_header_map_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header-map/header-map.component */ 72629);
/* harmony import */ var _header_video_header_video_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./header-video/header-video.component */ 89501);
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ 22887);
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./alert-dialog/alert-dialog.component */ 42066);
/* harmony import */ var _dialog_header_controls_dialog_header_controls_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dialog-header-controls/dialog-header-controls.component */ 84549);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./chat/chat.component */ 57634);
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./contact-form/contact-form.component */ 85800);
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/contact.service */ 66046);
/* harmony import */ var _videocontact_videocontact_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./videocontact/videocontact.component */ 83687);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ngx-youtube-player */ 15622);










































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: false,
    suppressScrollX: true,
};































// import { PopupComponent } from './popup/popup.component';


let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_30__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_34__.SwiperModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslateModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_36__.FlexLayoutModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__.MatBadgeModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__.MatBottomSheetModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_40__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_41__.MatButtonToggleModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_42__.MatCardModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_43__.MatCheckboxModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_44__.MatChipsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__.MatDialogModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_47__.MatExpansionModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_48__.MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_49__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_50__.MatInputModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_51__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_52__.MatMenuModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_53__.MatNativeDateModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_54__.MatPaginatorModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_55__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_56__.MatProgressSpinnerModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_57__.MatRadioModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_53__.MatRippleModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_58__.MatSelectModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_59__.MatSidenavModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_60__.MatSliderModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_61__.MatSlideToggleModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_62__.MatSnackBarModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_63__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_64__.MatTableModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_65__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_66__.MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_67__.MatTooltipModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_68__.MatStepperModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_69__.PerfectScrollbarModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_70__.AgmCoreModule,
            _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_71__.AgmSnazzyInfoWindowModule,
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule,
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_72__.NgxYoutubePlayerModule,
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_32__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule,
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_34__.SwiperModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslateModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_36__.FlexLayoutModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_38__.MatBadgeModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_39__.MatBottomSheetModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_40__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_41__.MatButtonToggleModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_42__.MatCardModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_43__.MatCheckboxModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_44__.MatChipsModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_45__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__.MatDialogModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_47__.MatExpansionModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_48__.MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_49__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_50__.MatInputModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_51__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_52__.MatMenuModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_53__.MatNativeDateModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_54__.MatPaginatorModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_55__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_56__.MatProgressSpinnerModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_57__.MatRadioModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_53__.MatRippleModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_58__.MatSelectModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_59__.MatSidenavModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_60__.MatSliderModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_61__.MatSlideToggleModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_62__.MatSnackBarModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_63__.MatSortModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_64__.MatTableModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_65__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_66__.MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_67__.MatTooltipModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_68__.MatStepperModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_69__.PerfectScrollbarModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_70__.AgmCoreModule,
            _agm_snazzy_info_window__WEBPACK_IMPORTED_MODULE_71__.AgmSnazzyInfoWindowModule,
            _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__.DirectivesModule,
            _logo_logo_component__WEBPACK_IMPORTED_MODULE_19__.LogoComponent,
            _header_image_header_image_component__WEBPACK_IMPORTED_MODULE_2__.HeaderImageComponent,
            _header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_3__.HeaderCarouselComponent,
            _property_item_property_item_component__WEBPACK_IMPORTED_MODULE_4__.PropertyItemComponent,
            _load_more_load_more_component__WEBPACK_IMPORTED_MODULE_5__.LoadMoreComponent,
            _properties_toolbar_properties_toolbar_component__WEBPACK_IMPORTED_MODULE_6__.PropertiesToolbarComponent,
            _properties_search_properties_search_component__WEBPACK_IMPORTED_MODULE_7__.PropertiesSearchComponent,
            _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_8__.CompareOverviewComponent,
            _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__.RatingComponent,
            _properties_search_results_filters_properties_search_results_filters_component__WEBPACK_IMPORTED_MODULE_10__.PropertiesSearchResultsFiltersComponent,
            _properties_carousel_properties_carousel_component__WEBPACK_IMPORTED_MODULE_11__.PropertiesCarouselComponent,
            _clients_clients_component__WEBPACK_IMPORTED_MODULE_12__.ClientsComponent,
            _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_13__.GetInTouchComponent,
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_14__.CommentsComponent,
            _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_15__.TestimonialsComponent,
            _our_agents_our_agents_component__WEBPACK_IMPORTED_MODULE_16__.OurAgentsComponent,
            _mission_mission_component__WEBPACK_IMPORTED_MODULE_17__.MissionComponent,
            _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_18__.OurServicesComponent,
            _header_map_header_map_component__WEBPACK_IMPORTED_MODULE_20__.HeaderMapComponent,
            _header_video_header_video_component__WEBPACK_IMPORTED_MODULE_21__.HeaderVideoComponent,
            _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_22__.ConfirmDialogComponent,
            _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_23__.AlertDialogComponent,
            _dialog_header_controls_dialog_header_controls_component__WEBPACK_IMPORTED_MODULE_24__.DialogHeaderControlsComponent,
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_25__.ChatComponent,
            _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_26__.ContactFormComponent,
            _videocontact_videocontact_component__WEBPACK_IMPORTED_MODULE_28__.VideocontactComponent,
            ngx_youtube_player__WEBPACK_IMPORTED_MODULE_72__.NgxYoutubePlayerModule,
        ],
        declarations: [
            _logo_logo_component__WEBPACK_IMPORTED_MODULE_19__.LogoComponent,
            _header_image_header_image_component__WEBPACK_IMPORTED_MODULE_2__.HeaderImageComponent,
            _header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_3__.HeaderCarouselComponent,
            _property_item_property_item_component__WEBPACK_IMPORTED_MODULE_4__.PropertyItemComponent,
            _load_more_load_more_component__WEBPACK_IMPORTED_MODULE_5__.LoadMoreComponent,
            _properties_toolbar_properties_toolbar_component__WEBPACK_IMPORTED_MODULE_6__.PropertiesToolbarComponent,
            _properties_search_properties_search_component__WEBPACK_IMPORTED_MODULE_7__.PropertiesSearchComponent,
            _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_8__.CompareOverviewComponent,
            _rating_rating_component__WEBPACK_IMPORTED_MODULE_9__.RatingComponent,
            _properties_search_results_filters_properties_search_results_filters_component__WEBPACK_IMPORTED_MODULE_10__.PropertiesSearchResultsFiltersComponent,
            _properties_carousel_properties_carousel_component__WEBPACK_IMPORTED_MODULE_11__.PropertiesCarouselComponent,
            _clients_clients_component__WEBPACK_IMPORTED_MODULE_12__.ClientsComponent,
            _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_13__.GetInTouchComponent,
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_14__.CommentsComponent,
            _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_15__.TestimonialsComponent,
            _our_agents_our_agents_component__WEBPACK_IMPORTED_MODULE_16__.OurAgentsComponent,
            _mission_mission_component__WEBPACK_IMPORTED_MODULE_17__.MissionComponent,
            _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_18__.OurServicesComponent,
            _header_map_header_map_component__WEBPACK_IMPORTED_MODULE_20__.HeaderMapComponent,
            _header_video_header_video_component__WEBPACK_IMPORTED_MODULE_21__.HeaderVideoComponent,
            _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_22__.ConfirmDialogComponent,
            _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_23__.AlertDialogComponent,
            _dialog_header_controls_dialog_header_controls_component__WEBPACK_IMPORTED_MODULE_24__.DialogHeaderControlsComponent,
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_25__.ChatComponent,
            _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_26__.ContactFormComponent,
            _videocontact_videocontact_component__WEBPACK_IMPORTED_MODULE_28__.VideocontactComponent,
            // PopupComponent
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_69__.PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
            },
            _services_contact_service__WEBPACK_IMPORTED_MODULE_27__.ContactService,
        ],
    })
], SharedModule);



/***/ }),

/***/ 89347:
/*!***************************************************************!*\
  !*** ./src/app/shared/testimonials/testimonials.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestimonialsComponent": () => (/* binding */ TestimonialsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./testimonials.component.html */ 15158);
/* harmony import */ var _testimonials_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testimonials.component.scss */ 14455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);





let TestimonialsComponent = class TestimonialsComponent {
    constructor(appService) {
        this.appService = appService;
        this.config = {};
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true
        };
    }
    ngOnInit() {
        this.testimonials = this.appService.getTestimonials();
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            // breakpoints: {
            //   480: {
            //     slidesPerView: 1
            //   },
            //   740: {
            //     slidesPerView: 2,
            //   },
            //   960: {
            //     slidesPerView: 3,
            //   }
            // }
        };
    }
};
TestimonialsComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
TestimonialsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-testimonials',
        template: _raw_loader_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_testimonials_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TestimonialsComponent);



/***/ }),

/***/ 83687:
/*!***************************************************************!*\
  !*** ./src/app/shared/videocontact/videocontact.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideocontactComponent": () => (/* binding */ VideocontactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_videocontact_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./videocontact.component.html */ 57977);
/* harmony import */ var _videocontact_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videocontact.component.scss */ 52359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let VideocontactComponent = class VideocontactComponent {
    constructor() { }
    ngOnInit() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }
};
VideocontactComponent.ctorParameters = () => [];
VideocontactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-videocontact',
        template: _raw_loader_videocontact_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_videocontact_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VideocontactComponent);



/***/ }),

/***/ 60545:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/contacts/contacts.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contacts_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contacts.component.html */ 23754);
/* harmony import */ var _contacts_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.component.scss */ 74660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let ContactsComponent = class ContactsComponent {
    constructor() {
        this.dividers = true;
        this.iconSize = 'sm';
        this.iconColor = '';
    }
    ngOnInit() {
    }
};
ContactsComponent.ctorParameters = () => [];
ContactsComponent.propDecorators = {
    dividers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    iconSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    iconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ContactsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-contacts',
        template: _raw_loader_contacts_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contacts_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactsComponent);



/***/ }),

/***/ 37930:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/currency/currency.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyComponent": () => (/* binding */ CurrencyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_currency_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./currency.component.html */ 33629);
/* harmony import */ var _currency_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency.component.scss */ 35146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ 1182);





let CurrencyComponent = class CurrencyComponent {
    constructor(appSettings) {
        this.appSettings = appSettings;
        this.currencies = ['USD'];
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.currency = this.settings.currency;
    }
    changeCurrency(currency) {
        this.currency = currency;
        this.settings.currency = currency;
    }
};
CurrencyComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings }
];
CurrencyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-currency',
        template: _raw_loader_currency_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_currency_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CurrencyComponent);



/***/ }),

/***/ 5893:
/*!*************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./footer.component.html */ 44000);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 32155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/app-validators */ 38955);






let FooterComponent = class FooterComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.lat = 33.94644;
        this.lng = -84.22954;
        this.zoom = 12;
        this.mapStyles = [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8b9198"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#323336"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#414954"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2e2f31"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7a7c80"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#242427"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#393a3f"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#393a3f"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#202124"
                    }
                ]
            }
        ];
    }
    ngOnInit() {
        this.feedbackForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.emailValidator])],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        this.subscribeForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.emailValidator])]
        });
    }
    onFeedbackFormSubmit(values) {
        if (this.feedbackForm.valid) {
            console.log(values);
        }
    }
    onSubscribeFormSubmit(values) {
        if (this.subscribeForm.valid) {
            console.log(values);
        }
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FooterComponent);



/***/ }),

/***/ 79578:
/*!*********************************************************!*\
  !*** ./src/app/theme/components/lang/lang.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangComponent": () => (/* binding */ LangComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_lang_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lang.component.html */ 74886);
/* harmony import */ var _lang_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang.component.scss */ 45333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 29790);





let LangComponent = class LangComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.langName = '';
    }
    ngOnInit() {
        this.langName = this.getLangName(this.translateService.getDefaultLang());
    }
    changeLang(lang) {
        this.translateService.use(lang);
        this.langName = this.getLangName(lang);
    }
    getLangName(lang) {
        if (lang == 'en') {
            return 'English';
        }
        else if (lang == 'es') {
            return 'Español';
        }
        // else if(lang == 'fr'){
        //   return 'French';
        // }
        // else if(lang == 'ru'){
        //   return 'Russian';
        // }
        // else if(lang == 'tr'){
        //   return 'Turkish';
        // }
        else {
            return 'English';
        }
    }
};
LangComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService }
];
LangComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-lang',
        template: _raw_loader_lang_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lang_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LangComponent);



/***/ }),

/***/ 85359:
/*!************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalMenuComponent": () => (/* binding */ HorizontalMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_horizontal_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./horizontal-menu.component.html */ 32856);
/* harmony import */ var _horizontal_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horizontal-menu.component.scss */ 21880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ 67091);





let HorizontalMenuComponent = class HorizontalMenuComponent {
    constructor(menuService) {
        this.menuService = menuService;
    }
    ngOnInit() {
        this.menuItems = this.menuService.getHorizontalMenuItems();
        this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
};
HorizontalMenuComponent.ctorParameters = () => [
    { type: _menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService }
];
HorizontalMenuComponent.propDecorators = {
    menuParentId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['menuParentId',] }]
};
HorizontalMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-horizontal-menu',
        template: _raw_loader_horizontal_menu_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService],
        styles: [_horizontal_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HorizontalMenuComponent);



/***/ }),

/***/ 76529:
/*!*****************************************************!*\
  !*** ./src/app/theme/components/menu/menu.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
class Menu {
    constructor(id, title, routerLink, href, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
}


/***/ }),

/***/ 67091:
/*!*******************************************************!*\
  !*** ./src/app/theme/components/menu/menu.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 51501);





let MenuService = class MenuService {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    getVerticalMenuItems() {
        return _menu__WEBPACK_IMPORTED_MODULE_0__.verticalMenuItems;
    }
    getHorizontalMenuItems() {
        return _menu__WEBPACK_IMPORTED_MODULE_0__.horizontalMenuItems;
    }
    expandActiveSubMenu(menu) {
        let url = this.location.path();
        let routerLink = decodeURIComponent(url);
        let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
        if (activeMenuItem[0]) {
            let menuItem = activeMenuItem[0];
            while (menuItem.parentId != 0) {
                let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
                menuItem = parentMenuItem;
                this.toggleMenuItem(menuItem.id);
            }
        }
    }
    toggleMenuItem(menuId) {
        let menuItem = document.getElementById('menu-item-' + menuId);
        let subMenu = document.getElementById('sub-menu-' + menuId);
        if (subMenu) {
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    }
    closeOtherSubMenus(menu, menuId) {
        let currentMenuItem = menu.filter(item => item.id == menuId)[0];
        menu.forEach(item => {
            if ((item.id != menuId && item.parentId == currentMenuItem.parentId) || (currentMenuItem.parentId == 0 && item.id != menuId)) {
                let subMenu = document.getElementById('sub-menu-' + item.id);
                let menuItem = document.getElementById('menu-item-' + item.id);
                if (subMenu) {
                    if (subMenu.classList.contains('show')) {
                        subMenu.classList.remove('show');
                        menuItem.classList.remove('expanded');
                    }
                }
            }
        });
    }
    closeAllSubMenus() {
        _menu__WEBPACK_IMPORTED_MODULE_0__.verticalMenuItems.forEach(item => {
            let subMenu = document.getElementById('sub-menu-' + item.id);
            let menuItem = document.getElementById('menu-item-' + item.id);
            if (subMenu) {
                if (subMenu.classList.contains('show')) {
                    subMenu.classList.remove('show');
                    menuItem.classList.remove('expanded');
                }
            }
        });
    }
};
MenuService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MenuService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], MenuService);



/***/ }),

/***/ 51501:
/*!***********************************************!*\
  !*** ./src/app/theme/components/menu/menu.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "horizontalMenuItems": () => (/* binding */ horizontalMenuItems),
/* harmony export */   "verticalMenuItems": () => (/* binding */ verticalMenuItems)
/* harmony export */ });
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.model */ 76529);

const horizontalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(1, 'NAV.HOME', '/', null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(2, 'NAV.PROPERTIES', '/properties', null, null, false, 0),
    // new Menu (40, 'NAV.PAGES', null, null, null, true, 0),
    // new Menu (41, 'NAV.AGENTS', '/agents', null, null, false, 40), 
    // new Menu (42, 'NAV.AGENT', '/agents/1', null, null, false, 40),
    // new Menu (43, 'LOGIN', '/login', null, null, false, 40), 
    // new Menu (44, 'REGISTER', '/register', null, null, false, 40), 
    // new Menu (46, 'NAV.PRICING', '/pricing', null, null, false, 40), 
    // new Menu (47, 'NAV.TERMS_CONDITIONS', '/terms-conditions', null, null, false, 40), 
    // new Menu (48, 'Landing', '/landing', null, null, false, 40),  
    // new Menu (50, '404 Page', '/404', null, null, false, 40),  
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(60, 'NAV.CONTACT', '/contact', null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(70, 'NAV.ABOUT_US', '/about', null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(80, 'NAV.FAQS', '/faq', null, null, false, 0),
    // new Menu (140, 'Others', null, null, null, true, 40),
    // new Menu (141, 'NAV.EXTERNAL_LINK', null, 'http://themeseason.com', '_blank', false, 140), 
    // new Menu (142, 'Menu item', null, 'http://themeseason.com', '_blank', false, 140),
    // new Menu (143, 'Menu item', null,'http://themeseason.com', '_blank', false, 140),
    // new Menu (144, 'Menu item', null,'http://themeseason.com', '_blank', false, 140)    
];
const verticalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(1, 'NAV.HOME', '/', null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(2, 'NAV.PROPERTIES', '/properties', null, null, false, 0),
    // new Menu (40, 'NAV.PAGES', null, null, null, true, 0),
    // new Menu (41, 'NAV.AGENTS', '/agents', null, null, false, 40), 
    // new Menu (42, 'NAV.AGENT', '/agents/1', null, null, false, 40),
    // new Menu (43, 'LOGIN', '/login', null, null, false, 40), 
    // new Menu (44, 'REGISTER', '/register', null, null, false, 40),   
    // new Menu (46, 'NAV.PRICING', '/pricing', null, null, false, 40), 
    // new Menu (47, 'NAV.TERMS_CONDITIONS', '/terms-conditions', null, null, false, 40),  
    // new Menu (48, 'Landing', '/landing', null, null, false, 40), 
    // new Menu (50, '404 Page', '/404', null, null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(60, 'NAV.CONTACT', '/contact', null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(70, 'NAV.ABOUT_US', '/about', null, null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__.Menu(80, 'NAV.FAQS', '/faq', null, null, false, 0),
    // new Menu (140, 'Level 1', null, null, null, true, 0),
    // new Menu (141, 'Level 2', null, null, null, true, 140),
    // new Menu (142, 'Level 3', null, null, null, true, 141),
    // new Menu (143, 'Level 4', null, null, null, true, 142),
    // new Menu (144, 'Level 5', null, 'http://themeseason.com', null, false, 143),
    // new Menu (200, 'NAV.EXTERNAL_LINK', null, 'http://themeseason.com', '_blank', false, 0)
];


/***/ }),

/***/ 92359:
/*!********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuComponent": () => (/* binding */ VerticalMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_vertical_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vertical-menu.component.html */ 71927);
/* harmony import */ var _vertical_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical-menu.component.scss */ 8282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu.service */ 67091);





let VerticalMenuComponent = class VerticalMenuComponent {
    constructor(menuService) {
        this.menuService = menuService;
    }
    ngOnInit() {
        this.menuItems = this.menuService.getVerticalMenuItems();
        this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    onClick(menuId) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuService.getVerticalMenuItems(), menuId);
    }
};
VerticalMenuComponent.ctorParameters = () => [
    { type: _menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService }
];
VerticalMenuComponent.propDecorators = {
    menuParentId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input, args: ['menuParentId',] }]
};
VerticalMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-vertical-menu',
        template: _raw_loader_vertical_menu_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [_menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService],
        styles: [_vertical_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VerticalMenuComponent);



/***/ }),

/***/ 85501:
/*!*************************************************************************!*\
  !*** ./src/app/theme/components/social-icons/social-icons.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialIconsComponent": () => (/* binding */ SocialIconsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_social_icons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./social-icons.component.html */ 26613);
/* harmony import */ var _social_icons_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-icons.component.scss */ 67209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let SocialIconsComponent = class SocialIconsComponent {
    constructor() {
        this.iconSize = '';
        this.iconColor = '';
    }
    ngOnInit() {
    }
};
SocialIconsComponent.ctorParameters = () => [];
SocialIconsComponent.propDecorators = {
    iconSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    iconColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
SocialIconsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-social-icons',
        template: _raw_loader_social_icons_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_social_icons_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SocialIconsComponent);



/***/ }),

/***/ 40906:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/toolbar1/toolbar1.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toolbar1Component": () => (/* binding */ Toolbar1Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_toolbar1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./toolbar1.component.html */ 13272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 70900);




let Toolbar1Component = class Toolbar1Component {
    constructor(appService) {
        this.appService = appService;
        this.onMenuIconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    sidenavToggle() {
        this.onMenuIconClick.emit();
    }
};
Toolbar1Component.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService }
];
Toolbar1Component.propDecorators = {
    onMenuIconClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
Toolbar1Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-toolbar1',
        template: _raw_loader_toolbar1_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], Toolbar1Component);



/***/ }),

/***/ 38432:
/*!*****************************************************************!*\
  !*** ./src/app/theme/components/toolbar2/toolbar2.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toolbar2Component": () => (/* binding */ Toolbar2Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_toolbar2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./toolbar2.component.html */ 59705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ 70900);




let Toolbar2Component = class Toolbar2Component {
    constructor(appService) {
        this.appService = appService;
        this.onMenuIconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() { }
    sidenavToggle() {
        this.onMenuIconClick.emit();
    }
};
Toolbar2Component.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService }
];
Toolbar2Component.propDecorators = {
    onMenuIconClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
Toolbar2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-toolbar2',
        template: _raw_loader_toolbar2_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], Toolbar2Component);



/***/ }),

/***/ 94460:
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMenuComponent": () => (/* binding */ UserMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-menu.component.html */ 55042);
/* harmony import */ var _user_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-menu.component.scss */ 49564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ 70900);





let UserMenuComponent = class UserMenuComponent {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() {
    }
};
UserMenuComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService }
];
UserMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-user-menu',
        template: _raw_loader_user_menu_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserMenuComponent);



/***/ }),

/***/ 19212:
/*!*******************************************************!*\
  !*** ./src/app/theme/directives/directives.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _only_number_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./only-number.directive */ 47536);




let DirectivesModule = class DirectivesModule {
};
DirectivesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _only_number_directive__WEBPACK_IMPORTED_MODULE_0__.OnlyNumberDirective
        ],
        exports: [
            _only_number_directive__WEBPACK_IMPORTED_MODULE_0__.OnlyNumberDirective
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ]
    })
], DirectivesModule);



/***/ }),

/***/ 47536:
/*!***********************************************************!*\
  !*** ./src/app/theme/directives/only-number.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnlyNumberDirective": () => (/* binding */ OnlyNumberDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


let OnlyNumberDirective = class OnlyNumberDirective {
    constructor() { }
    onInputChange(e) {
        if (e.target.value.length == 0 && e.which == 48) {
            return false;
        }
        var verified = String.fromCharCode(e.which).match(/[^0-9]/g);
        if (verified) {
            e.preventDefault();
            return false;
        }
        // var regex = new RegExp("[^0-9]");
        // var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        // if (regex.test(key)) {
        //     event.preventDefault();
        //     return false;
        // }    
    }
};
OnlyNumberDirective.ctorParameters = () => [];
OnlyNumberDirective.propDecorators = {
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keypress', ['$event'],] }]
};
OnlyNumberDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: 'input[onlyNumber]'
    })
], OnlyNumberDirective);



/***/ }),

/***/ 56660:
/*!**************************************************!*\
  !*** ./src/app/theme/pipes/filter-by-id.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterByIdPipe": () => (/* binding */ FilterByIdPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let FilterByIdPipe = class FilterByIdPipe {
    transform(items, id) {
        return items.filter(item => item.id == id)[0];
    }
};
FilterByIdPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filterById'
    })
], FilterByIdPipe);



/***/ }),

/***/ 4593:
/*!*****************************************************!*\
  !*** ./src/app/theme/pipes/filter-neighborhoods.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterNeighborhoodsPipe": () => (/* binding */ FilterNeighborhoodsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let FilterNeighborhoodsPipe = class FilterNeighborhoodsPipe {
    transform(items, id) {
        if (id) {
            return items.filter(item => item.cityId == id);
        }
        return items;
    }
};
FilterNeighborhoodsPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filterNeighborhoods'
    })
], FilterNeighborhoodsPipe);



/***/ }),

/***/ 64555:
/*!****************************************************!*\
  !*** ./src/app/theme/pipes/filter-streets.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterStreetsPipe": () => (/* binding */ FilterStreetsPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let FilterStreetsPipe = class FilterStreetsPipe {
    transform(items, filter) {
        let neighborhoodIds = [];
        if (filter.neighborhoods) {
            filter.neighborhoods.forEach(neighborhood => {
                neighborhoodIds.push(neighborhood.id);
            });
        }
        if (neighborhoodIds.length > 0) {
            return items.filter(item => {
                return neighborhoodIds.indexOf(item.neighborhoodId) > -1;
            });
        }
        if (filter.cityId) {
            return items.filter(item => item.cityId == filter.cityId);
        }
        return items;
    }
};
FilterStreetsPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'filterStreets'
    })
], FilterStreetsPipe);



/***/ }),

/***/ 39045:
/*!*********************************************!*\
  !*** ./src/app/theme/pipes/pipes.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-by-id.pipe */ 56660);
/* harmony import */ var _filter_neighborhoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-neighborhoods */ 4593);
/* harmony import */ var _filter_streets_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-streets.pipe */ 64555);






let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ],
        declarations: [
            _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterByIdPipe,
            _filter_neighborhoods__WEBPACK_IMPORTED_MODULE_1__.FilterNeighborhoodsPipe,
            _filter_streets_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterStreetsPipe
        ],
        exports: [
            _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterByIdPipe,
            _filter_neighborhoods__WEBPACK_IMPORTED_MODULE_1__.FilterNeighborhoodsPipe,
            _filter_streets_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterStreetsPipe
        ]
    })
], PipesModule);



/***/ }),

/***/ 71350:
/*!************************************************!*\
  !*** ./src/app/theme/utils/app-interceptor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInterceptor": () => (/* binding */ AppInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);





let AppInterceptor = class AppInterceptor {
    constructor() { }
    intercept(req, next) {
        // console.log(`Request for ${req.urlWithParams} started...`);
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
                // console.log(`Request for ${req.urlWithParams} completed...`);
            }
            return event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            const started = Date.now();
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} failed after ${elapsed} ms.`);
            // debugger;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
};
AppInterceptor.ctorParameters = () => [];
AppInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], AppInterceptor);



/***/ }),

/***/ 38955:
/*!***********************************************!*\
  !*** ./src/app/theme/utils/app-validators.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailValidator": () => (/* binding */ emailValidator),
/* harmony export */   "matchingPasswords": () => (/* binding */ matchingPasswords)
/* harmony export */ });
function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
function matchingPasswords(passwordKey, passwordConfirmationKey) {
    return (group) => {
        let password = group.controls[passwordKey];
        let passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true });
        }
    };
}


/***/ }),

/***/ 28758:
/*!*********************************************************!*\
  !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomOverlayContainer": () => (/* binding */ CustomOverlayContainer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ 58203);



let CustomOverlayContainer = class CustomOverlayContainer extends _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__.OverlayContainer {
    _createContainer() {
        let container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app').appendChild(container);
        this._containerElement = container;
    }
};
CustomOverlayContainer = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], CustomOverlayContainer);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    (0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 19339:
/*!**************************************************************!*\
  !*** ./src/app/pages/lock-screen/lock-screen.component.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".lock-screen {\n  position: relative;\n}\n.lock-screen:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  background-image: url('default-bg.png');\n  background-repeat: repeat;\n  background-size: 350px;\n  background-position: center;\n  opacity: 1;\n}\n.lock-screen form {\n  position: relative;\n}\n.lock-screen form .name {\n  position: absolute;\n  top: -2px;\n  right: 0;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.lock-screen form img {\n  border-radius: 50%;\n  width: 90px;\n  height: 90px;\n  border: 8px solid #fff;\n}\n.lock-screen form input {\n  background: #fff;\n  padding: 16px 44px 16px 16px;\n  width: 140px;\n  margin-left: -6px;\n  border: 0;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  text-align: center;\n  outline: none;\n  box-shadow: 4px 0px 4px -2px rgba(0, 0, 0, 0.2), 4px 3px 4px 0px rgba(0, 0, 0, 0.14), 4px 1px 4px 0px rgba(0, 0, 0, 0.12);\n}\n.lock-screen form a {\n  position: absolute;\n  bottom: -8px;\n  right: -8px;\n  margin: 0;\n  font-size: 13px;\n}\n.lock-screen form button.submit {\n  margin-left: -44px;\n}\n.lock-screen p.time {\n  font-size: 48px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2stc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFHWjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUhBQUE7QUFHWjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ1o7QUFDUTtFQUNJLGtCQUFBO0FBQ1o7QUFFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUFSIiwiZmlsZSI6ImxvY2stc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2stc2NyZWVue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOmJlZm9yZXsgICAgICAgIFxuICAgICAgICBjb250ZW50OiAnJzsgICAgICAgIFxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB6LWluZGV4Oi0xO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyAgXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vdGhlcnMvZGVmYXVsdC1iZy5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBvcGFjaXR5OiAxOyBcbiAgICB9IFxuICAgIGZvcm17XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgYm9yZGVyOiA4cHggc29saWQgI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dHsgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCA0NHB4IDE2cHggMTZweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweDsgXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTZweDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDRweCAwcHggNHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIDRweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgNHB4IDFweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgIH1cbiAgICAgICAgYXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogLThweDtcbiAgICAgICAgICAgIHJpZ2h0OiAtOHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwOyBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICAgIGJ1dHRvbi5zdWJtaXR7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTQ0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcC50aW1le1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7IFxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4OyAgXG4gICAgfSBcbn0gIl19 */");

/***/ }),

/***/ 88851:
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".box {\n  border-radius: 0;\n}\n.box .box-header {\n  height: 180px;\n}\n.box .box-header .error {\n  font-size: 48px;\n  margin-bottom: 12px;\n}\n.box .box-content {\n  position: relative;\n  height: 180px;\n}\n.box .box-content .box-content-inner {\n  position: absolute;\n  top: -34px;\n  left: 34px;\n  right: 34px;\n  height: 180px;\n}\n.box .box-content .box-content-header {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.box .box-content .box-content-header.server-error {\n  margin-bottom: 36px;\n}\n.box .box-content .box-text {\n  margin-bottom: 10px;\n  text-align: center;\n}\n.box .box-content .box-text::last-child {\n  margin-bottom: 15px;\n}\n.box .box-content .box-footer {\n  position: relative;\n  bottom: 16px;\n}\n.box .box-content .box-footer button {\n  min-width: 70px;\n  margin: 0 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7QUFFUjtBQURRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBR1o7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFHWjtBQURRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQUZZO0VBQ0ksbUJBQUE7QUFJaEI7QUFEUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFHWjtBQUZZO0VBQ0ksbUJBQUE7QUFJaEI7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUdaO0FBRlk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUloQiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgLmJveC1oZWFkZXJ7XG4gICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgIC5lcnJvcntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJveC1jb250ZW50e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMTgwcHg7ICAgICBcbiAgICAgICAgLmJveC1jb250ZW50LWlubmVye1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtMzRweDtcbiAgICAgICAgICAgIGxlZnQ6IDM0cHg7XG4gICAgICAgICAgICByaWdodDogMzRweDtcbiAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJveC1jb250ZW50LWhlYWRlcntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgICAgICAgICAgJi5zZXJ2ZXItZXJyb3J7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYm94LXRleHR7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgJjo6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ib3gtZm9vdGVye1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ 45861:
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".sidenav {\n  position: fixed;\n  z-index: 999999;\n  width: 250px;\n  padding: 8px 16px;\n  bottom: 0;\n  top: 0;\n}\n.sidenav .close {\n  margin-left: 178px;\n}\n.sidenav .divider {\n  margin: 8px 0;\n}\n.sidenav .vertical-menu-wrapper {\n  height: calc(100% - 122px);\n}\n.options {\n  position: fixed;\n  width: 270px;\n  z-index: 999999;\n}\n.options .op-header {\n  height: 64px;\n  padding: 0 14px;\n}\n.options .control {\n  padding: 6px 14px;\n}\n.options .control div {\n  padding: 6px 0;\n}\n.options .control h4 {\n  border-bottom: 1px solid #ccc;\n  margin: 12px 0 6px 0;\n}\n.options .control .skin-primary {\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  overflow: hidden;\n  cursor: pointer;\n}\n.options .control .skin-primary .skin-secondary {\n  width: 0;\n  height: 0;\n  padding: 0;\n  border-bottom: 24px solid;\n  border-left: 24px solid transparent;\n}\n.options .control .skin-primary.blue {\n  background-color: #1976d2;\n  border: 1px solid #1976d2;\n}\n.options .control .skin-primary.green {\n  background-color: #689f38;\n  border: 1px solid #689f38;\n}\n.options .control .skin-primary.red {\n  background-color: #d32f2f;\n  border: 1px solid #d32f2f;\n}\n.options .control .skin-primary.pink {\n  background-color: #c2185b;\n  border: 1px solid #c2185b;\n}\n.options .control .skin-primary.purple {\n  background-color: #7b1fa2;\n  border: 1px solid #7b1fa2;\n}\n.options .control .skin-primary.grey {\n  background-color: #455a64;\n  border: 1px solid #455a64;\n}\n.options .control .skin-primary.orange-dark {\n  background-color: #f4511e;\n  border: 1px solid #f4511e;\n}\n.options .control .skin-primary.orange-dark .skin-secondary {\n  border-bottom-color: #303030;\n}\n.options .mat-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n.options .mat-radio-group .mat-radio-button {\n  margin: 2px 0;\n}\n.options .mat-slide-toggle {\n  height: auto;\n}\n.options .ps {\n  height: calc(100% - 64px);\n}\n.op-image {\n  box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.options-icon {\n  position: fixed;\n  top: 200px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 99999;\n}\n.options-icon .mat-icon {\n  animation: spin 8s linear infinite;\n}\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 50%;\n  transition: 0.3s;\n}\n.back-to-top:hover {\n  opacity: 0.9;\n}\n.form-box {\n  background-color: #fff;\n  width: 300px;\n  height: 200px;\n  border-radius: 5px;\n  box-shadow: 5px 5px 3px rgba(68, 68, 68, 0.6);\n  padding: 10px;\n}\n.form-box form {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzLmNvbXBvbmVudC5zY3NzIiwiLi4vdGhlbWUvc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUNNaUI7RURMakIsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtBQURKO0FBRUk7RUFDSSxrQkFBQTtBQUFSO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFFSTtFQUNJLDBCQUFBO0FBQVI7QUFJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURKO0FBRUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRUk7RUFDSSxpQkFBQTtBQUFSO0FBQ1E7RUFDSSxjQUFBO0FBQ1o7QUFDUTtFQUNJLDZCQUFBO0VBQ0Esb0JBQUE7QUFDWjtBQUNRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ1o7QUFBWTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFBWTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7QUFFaEI7QUFEZ0I7RUFDSSw0QkFBQTtBQUdwQjtBQUVJO0VBQ0ksb0JBQUE7RUFDQSxzQkFBQTtBQUFSO0FBQ1E7RUFDSSxhQUFBO0FBQ1o7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUVJO0VBQ0UseUJBQUE7QUFBTjtBQUdBO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDSjtBQUFJO0VBR0ksa0NBQUE7QUFFUjtBQVlBO0VBQ0k7SUFDSSx5QkFBQTtFQUNOO0FBQ0Y7QUFFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBQ0k7RUFDSSxZQUFBO0FBQ1I7QUFPQTtFQUVJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFPQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsYUFBQTtBQVhKO0FBaUJBO0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtBQWZKIiwiZmlsZSI6InBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLnNpZGVuYXZ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICB3aWR0aDogJG1haW4tc2lkZW5hdi13aWR0aDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xuICAgIC5jbG9zZXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE3OHB4O1xuICAgIH1cbiAgICAuZGl2aWRlcntcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICB9XG4gICAgLnZlcnRpY2FsLW1lbnUtd3JhcHBlcntcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMjJweCk7XG4gICAgfVxufVxuXG4ub3B0aW9uc3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICAub3AtaGVhZGVye1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICB9XG4gICAgLmNvbnRyb2x7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxNHB4O1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMDtcbiAgICAgICAgfVxuICAgICAgICBoNHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDAgNnB4IDA7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICAuc2tpbi1wcmltYXJ5e1xuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgIFxuICAgICAgICAgICAgLnNraW4tc2Vjb25kYXJ5e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwOyBcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7IFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMjRweCBzb2xpZDsgXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDI0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmJsdWV7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTk3NmQyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5ncmVlbntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2ODlmMzg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLnJlZHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyZjJmO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMzJmMmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLnBpbmt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MyMTg1YjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzIxODViO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5wdXJwbGV7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdiMWZhMjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjN2IxZmEyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5ncmV5e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTVhNjQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ1NWE2NDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYub3JhbmdlLWRhcmt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NTExZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjQ1MTFlO1xuICAgICAgICAgICAgICAgIC5za2luLXNlY29uZGFyeXtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzMwMzAzMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1hdC1yYWRpby1ncm91cHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5tYXQtcmFkaW8tYnV0dG9ue1xuICAgICAgICAgICAgbWFyZ2luOiAycHggMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWF0LXNsaWRlLXRvZ2dsZXtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAucHN7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICAgIH1cbn1cbi5vcC1pbWFnZXtcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4ICNjY2M7XG4gICAgYm9yZGVyOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5vcHRpb25zLWljb257XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMjAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjcpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAubWF0LWljb257XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgLW1vei1hbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb246IHNwaW4gOHMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIHNwaW4geyBcbiAgICAxMDAlIHsgXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgXG4gICAgfSBcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHsgXG4gICAgMTAwJSB7IFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxuICAgIH0gXG59XG5Aa2V5ZnJhbWVzIHNwaW4geyBcbiAgICAxMDAlIHsgXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufVxuXG4uYmFjay10by10b3B7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgICBvcGFjaXR5OiAuNTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC43NSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IDAuM3M7ICAgIFxuICAgICY6aG92ZXJ7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICB9ICAgIFxufVxuXG4vLyBoMXtcbi8vICAgICBjb2xvcjojRkZGO1xuLy8gfVxuXG4uZm9ybS1ib3hcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBsZWZ0OiA1MCU7XG4gICAgLy8gdG9wOiA1MCU7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDUwJTtcbiAgICAvLyBtYXJnaW4tdG9wOiAtMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggM3B4IHJnYmEoNjgsNjgsNjgsMC42KTtcbiAgICBwYWRkaW5nOiAxMHB4OyBcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb3JtLWJveCBmb3JtXG57XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4vLyAuZm9ybS1ib3ggbGFiZWxcbi8vIHtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyB9XG5cbi8vIC5uZ3gtd2hhdHNhcHAtYnV0dG9uLWZsb2F0IHtcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgICAgd2lkdGg6IDYwcHg7XG4vLyAgICAgaGVpZ2h0OiA2MHB4O1xuLy8gICAgIGJvdHRvbTogMTM1cHggIWltcG9ydGFudDtcbi8vICAgICByaWdodDogNTlweCAhaW1wb3J0YW50O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMyNWQzNjY7XG4vLyAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcbi8vIH1cblxuXG4iLCIkZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiR0aGVtZS1tYXgtd2lkdGg6IDEzMDBweDtcbiR0b3AtdG9vbGJhci1oZWlnaHQ6IDM2cHg7XG4kbWFpbi10b29sYmFyLWhlaWdodDogNzJweDtcbiR1c2VyLW1lbnUtd2lkdGg6IDIyMHB4O1xuJGhlYWRlci1pbWFnZS1taW4taGVpZ2h0OiAzMjBweDtcbiRoZWFkZXItdmlkZW8tbWluLWhlaWdodDogMzYwcHg7XG4kaGVhZGVyLWNhcm91c2VsLWhlaWdodDogNDYwcHg7XG4kaGVhZGVyLW1hcC1oZWlnaHQ6IDU1MHB4O1xuJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcDogODBweDtcblxuJG1haW4tc2lkZW5hdi13aWR0aDogMjUwcHg7XG4kc2VhcmNoLXNpZGVuYXYtd2lkdGg6IDI4OHB4OyJdfQ== */");

/***/ }),

/***/ 43659:
/*!*****************************************************************!*\
  !*** ./src/app/shared/alert-dialog/alert-dialog.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 66245:
/*!*************************************************!*\
  !*** ./src/app/shared/chat/chat.component.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".message {\n  border-radius: 50px;\n  margin: 0 15px 20px;\n  padding: 10px 20px;\n  position: relative;\n  font-size: 16px;\n}\n\n.message.to {\n  background-color: #008080;\n  color: #fff;\n  margin-left: 100px;\n  text-align: right;\n}\n\n.message.from {\n  background-color: #E5E4E9;\n  color: #363636;\n  margin-right: 100px;\n}\n\n.message.to + .message.to,\n.message.from + .message.from {\n  margin-top: -10px;\n}\n\n#chat-circle {\n  position: fixed;\n  bottom: 110px;\n  right: 33px;\n  background: #008080;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  color: white;\n  padding: 28px;\n  cursor: pointer;\n  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.6), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  z-index: 9999999;\n}\n\n.btn#my-btn {\n  background: white;\n  padding-top: 13px;\n  padding-bottom: 12px;\n  border-radius: 45px;\n  padding-right: 40px;\n  padding-left: 40px;\n  color: #008080;\n}\n\n#chat-overlay {\n  background: rgba(255, 255, 255, 0.1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: none;\n}\n\n.chat-box {\n  display: none;\n  background: #efefef;\n  position: fixed;\n  right: 30px;\n  bottom: 50px;\n  width: 350px;\n  max-width: 85vw;\n  max-height: 100vh;\n  border-radius: 5px;\n  /*   box-shadow: 0px 5px 35px 9px #464a92; */\n  box-shadow: 0px 5px 35px 9px #ccc;\n  z-index: 999999999;\n}\n\n.chat-box-toggle {\n  float: right;\n  margin-right: 15px;\n  cursor: pointer;\n}\n\n.chat-box-header {\n  background: #008080;\n  height: 70px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  color: white;\n  text-align: center;\n  font-size: 16px;\n  padding: 15px;\n  padding-top: 25px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.chat-box-body {\n  position: relative;\n  height: 350px;\n  border: 1px solid #ccc;\n  overflow-y: scroll;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.chat-box-body:after {\n  content: \"\";\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgOCkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgY3g9IjE3NiIgY3k9IjEyIiByPSI0Ii8+PHBhdGggZD0iTTIwLjUuNWwyMyAxMW0tMjkgODRsLTMuNzkgMTAuMzc3TTI3LjAzNyAxMzEuNGw1Ljg5OCAyLjIwMy0zLjQ2IDUuOTQ3IDYuMDcyIDIuMzkyLTMuOTMzIDUuNzU4bTEyOC43MzMgMzUuMzdsLjY5My05LjMxNiAxMC4yOTIuMDUyLjQxNi05LjIyMiA5LjI3NC4zMzJNLjUgNDguNXM2LjEzMSA2LjQxMyA2Ljg0NyAxNC44MDVjLjcxNSA4LjM5My0yLjUyIDE0LjgwNi0yLjUyIDE0LjgwNk0xMjQuNTU1IDkwcy03LjQ0NCAwLTEzLjY3IDYuMTkyYy02LjIyNyA2LjE5Mi00LjgzOCAxMi4wMTItNC44MzggMTIuMDEybTIuMjQgNjguNjI2cy00LjAyNi05LjAyNS0xOC4xNDUtOS4wMjUtMTguMTQ1IDUuNy0xOC4xNDUgNS43IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTg1LjcxNiAzNi4xNDZsNS4yNDMtOS41MjFoMTEuMDkzbDUuNDE2IDkuNTIxLTUuNDEgOS4xODVIOTAuOTUzbC01LjIzNy05LjE4NXptNjMuOTA5IDE1LjQ3OWgxMC43NXYxMC43NWgtMTAuNzV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjcxLjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjE3MC41IiBjeT0iOTUuNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjMDAwIiBjeD0iODEuNSIgY3k9IjEzNC41IiByPSIxLjUiLz48Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIxMy41IiBjeT0iMjMuNSIgcj0iMS41Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTkzIDcxaDN2M2gtM3ptMzMgODRoM3YzaC0zem0tODUgMThoM3YzaC0zeiIvPjxwYXRoIGQ9Ik0zOS4zODQgNTEuMTIybDUuNzU4LTQuNDU0IDYuNDUzIDQuMjA1LTIuMjk0IDcuMzYzaC03Ljc5bC0yLjEyNy03LjExNHpNMTMwLjE5NSA0LjAzbDEzLjgzIDUuMDYyLTEwLjA5IDcuMDQ4LTMuNzQtMTIuMTF6bS04MyA5NWwxNC44MyA1LjQyOS0xMC44MiA3LjU1Ny00LjAxLTEyLjk4N3pNNS4yMTMgMTYxLjQ5NWwxMS4zMjggMjAuODk3TDIuMjY1IDE4MGwyLjk0OC0xOC41MDV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxwYXRoIGQ9Ik0xNDkuMDUgMTI3LjQ2OHMtLjUxIDIuMTgzLjk5NSAzLjM2NmMxLjU2IDEuMjI2IDguNjQyLTEuODk1IDMuOTY3LTcuNzg1LTIuMzY3LTIuNDc3LTYuNS0zLjIyNi05LjMzIDAtNS4yMDggNS45MzYgMCAxNy41MSAxMS42MSAxMy43MyAxMi40NTgtNi4yNTcgNS42MzMtMjEuNjU2LTUuMDczLTIyLjY1NC02LjYwMi0uNjA2LTE0LjA0MyAxLjc1Ni0xNi4xNTcgMTAuMjY4LTEuNzE4IDYuOTIgMS41ODQgMTcuMzg3IDEyLjQ1IDIwLjQ3NiAxMC44NjYgMy4wOSAxOS4zMzEtNC4zMSAxOS4zMzEtNC4zMSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L3N2Zz4=\");\n  opacity: 0.1;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  position: absolute;\n  z-index: -1;\n}\n\n#chat-input {\n  background: #f4f7f9;\n  width: 285px;\n  position: relative;\n  height: 26px;\n  padding-top: 10px;\n  padding-right: 50px;\n  padding-bottom: 10px;\n  padding-left: 15px;\n  border: none;\n  resize: none;\n  outline: none;\n  border: 1px solid #ccc;\n  color: #888;\n  border-top: none;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  overflow: hidden;\n}\n\n.chat-input > form {\n  margin-bottom: 0;\n}\n\n#chat-input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #ccc;\n}\n\n#chat-input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #ccc;\n}\n\n#chat-input:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #ccc;\n}\n\n#chat-input:-moz-placeholder {\n  /* Firefox 18- */\n  color: #ccc;\n}\n\n.chat-submit {\n  position: absolute;\n  bottom: 3px;\n  right: 10px;\n  background: transparent;\n  box-shadow: none;\n  border: none;\n  border-radius: 50%;\n  color: #008080;\n  width: 35px;\n  height: 35px;\n}\n\n.chat-logs {\n  padding: 15px;\n  height: 370px;\n  overflow-y: scroll;\n}\n\n.chat-logs::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5;\n}\n\n.chat-logs::-webkit-scrollbar {\n  width: 5px;\n  background-color: #F5F5F5;\n}\n\n.chat-logs::-webkit-scrollbar-thumb {\n  background-color: #5A5EB9;\n}\n\n@media only screen and (max-width: 500px) {\n  .chat-logs {\n    height: 40vh;\n  }\n}\n\n.chat-msg.user > .msg-avatar img {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  float: left;\n  width: 15%;\n}\n\n.chat-msg.self > .msg-avatar img {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  float: right;\n  width: 15%;\n}\n\n.cm-msg-text {\n  background: white;\n  padding: 10px 15px 10px 15px;\n  color: #666;\n  max-width: 75%;\n  float: left;\n  margin-left: 10px;\n  position: relative;\n  margin-bottom: 20px;\n  border-radius: 30px;\n}\n\n.chat-msg {\n  clear: both;\n}\n\n.chat-msg.self > .cm-msg-text {\n  float: right;\n  margin-right: 10px;\n  background: #5A5EB9;\n  color: white;\n}\n\n.cm-msg-button > ul > li {\n  list-style: none;\n  float: left;\n  width: 50%;\n}\n\n.cm-msg-button {\n  clear: both;\n  margin-bottom: 70px;\n}\n\n.chat-photo {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n\n.options {\n  background-color: #395b7c;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.15385;\n  margin: 0;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  outline: none;\n  padding: 8px 0.8em;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  -webkit-user-select: none;\n          user-select: none;\n  touch-action: manipulation;\n  vertical-align: baseline;\n  white-space: wrap;\n}\n\n.options:hover,\n.options:focus {\n  background-color: #07c;\n}\n\n.options:focus {\n  box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);\n}\n\n.options:active {\n  background-color: #0064bd;\n  box-shadow: none;\n}\n\n/* The notification message box */\n\n.notification {\n  position: fixed;\n  bottom: 105px;\n  right: 100px;\n  padding: 20px;\n  background-color: #395b7c;\n  color: white;\n  margin-bottom: 15px;\n  z-index: 998;\n}\n\n/* The close button */\n\n.closebtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  float: right;\n  font-size: 22px;\n  line-height: 20px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n/* When moving the mouse over the close button */\n\n.closebtn:hover {\n  color: black;\n}\n\n.robot {\n  position: fixed;\n  bottom: 105px;\n  right: 470px;\n  width: 5%;\n  height: auto;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREU7O0VBRUUsaUJBQUE7QUFJSjs7QUFERTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1IQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFERTtFQUNLLGlCQUFBO0VBQ0QsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFJTjs7QUFGRTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBS047O0FBREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDRiw0Q0FBQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFGRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBTUo7O0FBSkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFJQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQUlKOztBQUZFO0VBQ0UsV0FBQTtFQUNBLCt1RUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUhFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpFO0VBQ0ksZ0JBQUE7QUFPTjs7QUFMRTtFQUF5Qyx3QkFBQTtFQUN2QyxXQUFBO0FBU0o7O0FBUEU7RUFBZ0MsZ0JBQUE7RUFDOUIsV0FBQTtBQVdKOztBQVRFO0VBQW9DLFdBQUE7RUFDbEMsV0FBQTtBQWFKOztBQVhFO0VBQStCLGdCQUFBO0VBQzdCLFdBQUE7QUFlSjs7QUFiRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBZ0JKOztBQWRFO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWlCSjs7QUFkRTtFQUVJLG9EQUFBO0VBQ0EseUJBQUE7QUFnQk47O0FBYkU7RUFFSSxVQUFBO0VBQ0EseUJBQUE7QUFlTjs7QUFaRTtFQUVJLHlCQUFBO0FBY047O0FBVEU7RUFDRztJQUNLLFlBQUE7RUFZUjtBQUNGOztBQVRFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBV0o7O0FBVEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFZSjs7QUFWRTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWFKOztBQVhFO0VBQ0UsV0FBQTtBQWNKOztBQVpFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBZUo7O0FBYkU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBZ0JKOztBQWRFO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBaUJOOztBQWRFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWlCSjs7QUFaQTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQWVGOztBQVpBOztFQUVFLHNCQUFBO0FBZUY7O0FBWkE7RUFDRSw2Q0FBQTtBQWVGOztBQVpBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQWVGOztBQVpDLGlDQUFBOztBQUNBO0VBQ0MsZUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0YsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWVGOztBQVpBLHFCQUFBOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBZUY7O0FBWkEsZ0RBQUE7O0FBQ0E7RUFDRSxZQUFBO0FBZUY7O0FBWkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFlRiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWFyZ2luOiAwIDE1cHggMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAubWVzc2FnZS50byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODA4MDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLm1lc3NhZ2UuZnJvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTRFOTtcbiAgICBjb2xvcjogIzM2MzYzNjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuICB9XG4gIC5tZXNzYWdlLnRvICsgLm1lc3NhZ2UudG8sXG4gIC5tZXNzYWdlLmZyb20gKyAubWVzc2FnZS5mcm9tIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgfVxuXG4gICNjaGF0LWNpcmNsZSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTEwcHg7XG4gICAgcmlnaHQ6IDMzcHg7XG4gICAgYmFja2dyb3VuZDogIzAwODA4MDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7ICBcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDI4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgei1pbmRleDogOTk5OTk5OTtcbiAgfVxuICBcbiAgLmJ0biNteS1idG4ge1xuICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgcGFkZGluZy10b3A6IDEzcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgY29sb3I6ICMwMDgwODA7XG4gIH1cbiAgI2NoYXQtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICBcbiAgLmNoYXQtYm94IHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICByaWdodDozMHB4O1xuICAgIGJvdHRvbTo1MHB4OyAgXG4gICAgd2lkdGg6MzUwcHg7XG4gICAgbWF4LXdpZHRoOiA4NXZ3O1xuICAgIG1heC1oZWlnaHQ6MTAwdmg7XG4gICAgYm9yZGVyLXJhZGl1czo1cHg7ICBcbiAgLyogICBib3gtc2hhZG93OiAwcHggNXB4IDM1cHggOXB4ICM0NjRhOTI7ICovXG4gICAgYm94LXNoYWRvdzogMHB4IDVweCAzNXB4IDlweCAjY2NjO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTtcbiAgfVxuICAuY2hhdC1ib3gtdG9nZ2xlIHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6MTVweDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuICAuY2hhdC1ib3gtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4MDgwO1xuICAgIGhlaWdodDo3MHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjVweDsgXG4gICAgY29sb3I6d2hpdGU7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgZm9udC1zaXplOjE2cHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBwYWRkaW5nLXRvcDoyNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5jaGF0LWJveC1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcbiAgICBoZWlnaHQ6MzUwcHg7ICBcbiAgICAvLyBoZWlnaHQ6YXV0bztcbiAgICAvLyBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICAvLyBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7ICBcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NXB4O1xuICB9XG4gIC5jaGF0LWJveC1ib2R5OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTWpBd0lpQm9aV2xuYUhROUlqSXdNQ0lnZG1sbGQwSnZlRDBpTUNBd0lESXdNQ0F5TURBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BHY2dkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTVRBZ09Da2lJR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK1BHTnBjbU5zWlNCemRISnZhMlU5SWlNd01EQWlJSE4wY205clpTMTNhV1IwYUQwaU1TNHlOU0lnWTNnOUlqRTNOaUlnWTNrOUlqRXlJaUJ5UFNJMElpOCtQSEJoZEdnZ1pEMGlUVEl3TGpVdU5Xd3lNeUF4TVcwdE1qa2dPRFJzTFRNdU56a2dNVEF1TXpjM1RUSTNMakF6TnlBeE16RXVOR3cxTGpnNU9DQXlMakl3TXkwekxqUTJJRFV1T1RRM0lEWXVNRGN5SURJdU16a3lMVE11T1RNeklEVXVOelU0YlRFeU9DNDNNek1nTXpVdU16ZHNMalk1TXkwNUxqTXhOaUF4TUM0eU9USXVNRFV5TGpReE5pMDVMakl5TWlBNUxqSTNOQzR6TXpKTkxqVWdORGd1TlhNMkxqRXpNU0EyTGpReE15QTJMamcwTnlBeE5DNDRNRFZqTGpjeE5TQTRMak01TXkweUxqVXlJREUwTGpnd05pMHlMalV5SURFMExqZ3dOazB4TWpRdU5UVTFJRGt3Y3kwM0xqUTBOQ0F3TFRFekxqWTNJRFl1TVRreVl5MDJMakl5TnlBMkxqRTVNaTAwTGpnek9DQXhNaTR3TVRJdE5DNDRNemdnTVRJdU1ERXliVEl1TWpRZ05qZ3VOakkyY3kwMExqQXlOaTA1TGpBeU5TMHhPQzR4TkRVdE9TNHdNalV0TVRndU1UUTFJRFV1TnkweE9DNHhORFVnTlM0M0lpQnpkSEp2YTJVOUlpTXdNREFpSUhOMGNtOXJaUzEzYVdSMGFEMGlNUzR5TlNJZ2MzUnliMnRsTFd4cGJtVmpZWEE5SW5KdmRXNWtJaTgrUEhCaGRHZ2daRDBpVFRnMUxqY3hOaUF6Tmk0eE5EWnNOUzR5TkRNdE9TNDFNakZvTVRFdU1Ea3piRFV1TkRFMklEa3VOVEl4TFRVdU5ERWdPUzR4T0RWSU9UQXVPVFV6YkMwMUxqSXpOeTA1TGpFNE5YcHROak11T1RBNUlERTFMalEzT1dneE1DNDNOWFl4TUM0M05XZ3RNVEF1TnpWNklpQnpkSEp2YTJVOUlpTXdNREFpSUhOMGNtOXJaUzEzYVdSMGFEMGlNUzR5TlNJdlBqeGphWEpqYkdVZ1ptbHNiRDBpSXpBd01DSWdZM2c5SWpjeExqVWlJR041UFNJM0xqVWlJSEk5SWpFdU5TSXZQanhqYVhKamJHVWdabWxzYkQwaUl6QXdNQ0lnWTNnOUlqRTNNQzQxSWlCamVUMGlPVFV1TlNJZ2NqMGlNUzQxSWk4K1BHTnBjbU5zWlNCbWFXeHNQU0lqTURBd0lpQmplRDBpT0RFdU5TSWdZM2s5SWpFek5DNDFJaUJ5UFNJeExqVWlMejQ4WTJseVkyeGxJR1pwYkd3OUlpTXdNREFpSUdONFBTSXhNeTQxSWlCamVUMGlNak11TlNJZ2NqMGlNUzQxSWk4K1BIQmhkR2dnWm1sc2JEMGlJekF3TUNJZ1pEMGlUVGt6SURjeGFETjJNMmd0TTNwdE16TWdPRFJvTTNZemFDMHplbTB0T0RVZ01UaG9NM1l6YUMwemVpSXZQanh3WVhSb0lHUTlJazB6T1M0ek9EUWdOVEV1TVRJeWJEVXVOelU0TFRRdU5EVTBJRFl1TkRVeklEUXVNakExTFRJdU1qazBJRGN1TXpZemFDMDNMamM1YkMweUxqRXlOeTAzTGpFeE5IcE5NVE13TGpFNU5TQTBMakF6YkRFekxqZ3pJRFV1TURZeUxURXdMakE1SURjdU1EUTRMVE11TnpRdE1USXVNVEY2YlMwNE15QTVOV3d4TkM0NE15QTFMalF5T1MweE1DNDRNaUEzTGpVMU55MDBMakF4TFRFeUxqazROM3BOTlM0eU1UTWdNVFl4TGpRNU5Xd3hNUzR6TWpnZ01qQXVPRGszVERJdU1qWTFJREU0TUd3eUxqazBPQzB4T0M0MU1EVjZJaUJ6ZEhKdmEyVTlJaU13TURBaUlITjBjbTlyWlMxM2FXUjBhRDBpTVM0eU5TSXZQanh3WVhSb0lHUTlJazB4TkRrdU1EVWdNVEkzTGpRMk9ITXRMalV4SURJdU1UZ3pMams1TlNBekxqTTJObU14TGpVMklERXVNakkySURndU5qUXlMVEV1T0RrMUlETXVPVFkzTFRjdU56ZzFMVEl1TXpZM0xUSXVORGMzTFRZdU5TMHpMakl5TmkwNUxqTXpJREF0TlM0eU1EZ2dOUzQ1TXpZZ01DQXhOeTQxTVNBeE1TNDJNU0F4TXk0M015QXhNaTQwTlRndE5pNHlOVGNnTlM0Mk16TXRNakV1TmpVMkxUVXVNRGN6TFRJeUxqWTFOQzAyTGpZd01pMHVOakEyTFRFMExqQTBNeUF4TGpjMU5pMHhOaTR4TlRjZ01UQXVNalk0TFRFdU56RTRJRFl1T1RJZ01TNDFPRFFnTVRjdU16ZzNJREV5TGpRMUlESXdMalEzTmlBeE1DNDROallnTXk0d09TQXhPUzR6TXpFdE5DNHpNU0F4T1M0ek16RXROQzR6TVNJZ2MzUnliMnRsUFNJak1EQXdJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRXVNalVpSUhOMGNtOXJaUzFzYVc1bFkyRndQU0p5YjNWdVpDSXZQand2Wno0OEwzTjJaejQ9Jyk7XG4gICAgb3BhY2l0eTogMC4xO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7ICAgXG4gIH1cbiAgI2NoYXQtaW5wdXQge1xuICAgIGJhY2tncm91bmQ6ICNmNGY3Zjk7XG4gICAgd2lkdGg6Mjg1cHg7IFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGhlaWdodDoyNnB4OyAgXG4gICAgcGFkZGluZy10b3A6MTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206MTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6MTVweDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICByZXNpemU6bm9uZTtcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIGNvbG9yOiM4ODg7XG4gICAgYm9yZGVyLXRvcDpub25lO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweDtcbiAgICBvdmVyZmxvdzpoaWRkZW47ICBcbiAgfVxuICAuY2hhdC1pbnB1dCA+IGZvcm0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAjY2hhdC1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIENocm9tZS9PcGVyYS9TYWZhcmkgKi9cbiAgICBjb2xvcjogI2NjYztcbiAgfVxuICAjY2hhdC1pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTkrICovXG4gICAgY29sb3I6ICNjY2M7XG4gIH1cbiAgI2NoYXQtaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSUUgMTArICovXG4gICAgY29sb3I6ICNjY2M7XG4gIH1cbiAgI2NoYXQtaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7IC8qIEZpcmVmb3ggMTgtICovXG4gICAgY29sb3I6ICNjY2M7XG4gIH1cbiAgLmNoYXQtc3VibWl0IHsgIFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGJvdHRvbTozcHg7XG4gICAgcmlnaHQ6MTBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93Om5vbmU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgY29sb3I6IzAwODA4MDtcbiAgICB3aWR0aDozNXB4O1xuICAgIGhlaWdodDozNXB4OyAgXG4gIH1cbiAgLmNoYXQtbG9ncyB7XG4gICAgcGFkZGluZzoxNXB4OyBcbiAgICBoZWlnaHQ6MzcwcHg7XG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XG4gIH1cbiAgXG4gIC5jaGF0LWxvZ3M6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXG4gIHtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICB9XG4gIFxuICAuY2hhdC1sb2dzOjotd2Via2l0LXNjcm9sbGJhclxuICB7XG4gICAgICB3aWR0aDogNXB4OyAgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICB9XG4gIFxuICAuY2hhdC1sb2dzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxuICB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUE1RUI5O1xuICB9XG4gIFxuICBcbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgLmNoYXQtbG9ncyB7XG4gICAgICAgICAgaGVpZ2h0OjQwdmg7XG4gICAgICB9XG4gIH1cbiAgXG4gIC5jaGF0LW1zZy51c2VyID4gLm1zZy1hdmF0YXIgaW1nIHtcbiAgICB3aWR0aDo0NXB4O1xuICAgIGhlaWdodDo0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgd2lkdGg6MTUlO1xuICB9XG4gIC5jaGF0LW1zZy5zZWxmID4gLm1zZy1hdmF0YXIgaW1nIHtcbiAgICB3aWR0aDo0NXB4O1xuICAgIGhlaWdodDo0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIHdpZHRoOjE1JTtcbiAgfVxuICAuY20tbXNnLXRleHQge1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgcGFkZGluZzoxMHB4IDE1cHggMTBweCAxNXB4OyAgXG4gICAgY29sb3I6IzY2NjtcbiAgICBtYXgtd2lkdGg6NzUlO1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6MTBweDsgXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6MzBweDtcbiAgfVxuICAuY2hhdC1tc2cge1xuICAgIGNsZWFyOmJvdGg7ICAgIFxuICB9XG4gIC5jaGF0LW1zZy5zZWxmID4gLmNtLW1zZy10ZXh0IHsgIFxuICAgIGZsb2F0OnJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgIGJhY2tncm91bmQ6ICM1QTVFQjk7XG4gICAgY29sb3I6d2hpdGU7XG4gIH1cbiAgLmNtLW1zZy1idXR0b24+dWw+bGkge1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIHdpZHRoOjUwJTtcbiAgfVxuICAuY20tbXNnLWJ1dHRvbiB7XG4gICAgICBjbGVhcjogYm90aDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gIH1cblxuICAuY2hhdC1waG90byB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC8vIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gIH1cblxuLm9wdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk1YjdjO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNCkgMCAxcHggMCAwIGluc2V0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTUzODU7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAuOGVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgd2hpdGUtc3BhY2U6IHdyYXA7XG59XG5cbi5vcHRpb25zOmhvdmVyLFxuLm9wdGlvbnM6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdjO1xufVxuXG4ub3B0aW9uczpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDAsIDE0OSwgMjU1LCAuMTUpO1xufVxuXG4ub3B0aW9uczphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NGJkO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4gLyogVGhlIG5vdGlmaWNhdGlvbiBtZXNzYWdlIGJveCAqL1xuIC5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxMDVweDtcbiAgICByaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTViN2M7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgei1pbmRleDogOTk4O1xufVxuXG4vKiBUaGUgY2xvc2UgYnV0dG9uICovXG4uY2xvc2VidG4ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi8qIFdoZW4gbW92aW5nIHRoZSBtb3VzZSBvdmVyIHRoZSBjbG9zZSBidXR0b24gKi9cbi5jbG9zZWJ0bjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn0gXG5cbi5yb2JvdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMDVweDtcbiAgcmlnaHQ6IDQ3MHB4O1xuICB3aWR0aDogNSU7XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogOTk5O1xufVxuXG4iXX0= */");

/***/ }),

/***/ 21925:
/*!*******************************************************!*\
  !*** ./src/app/shared/clients/clients.component.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".clients-carousel {\n  position: relative;\n  padding: 8px 0;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.clients-carousel .swiper-container {\n  padding: 8px 2px;\n  margin: 0 14px;\n}\n.clients-carousel .swiper-container .client-item {\n  height: 88px;\n  display: flex;\n  align-items: center;\n}\n.clients-carousel .swiper-container .client-item img {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBR1o7QUFGWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFJaEIiLCJmaWxlIjoiY2xpZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGllbnRzLWNhcm91c2Vse1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgLnN3aXBlci1jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAycHg7XG4gICAgICAgIG1hcmdpbjogMCAxNHB4O1xuICAgICAgICAuY2xpZW50LWl0ZW17XG4gICAgICAgICAgICBoZWlnaHQ6IDg4cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ 83383:
/*!*********************************************************!*\
  !*** ./src/app/shared/comments/comments.component.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 29760:
/*!*************************************************************************!*\
  !*** ./src/app/shared/compare-overview/compare-overview.component.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYXJlLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 22634:
/*!*********************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 33407:
/*!*****************************************************************!*\
  !*** ./src/app/shared/contact-form/contact-form.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -o-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n}\n\n.container {\n  max-width: 400px;\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n}\n\n#contact {\n  background: #f9f9f9;\n  padding: 25px;\n  border-radius: 8px;\n  margin: 50px 0;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n\n#contact h1 {\n  display: block;\n  font-size: 30px;\n  font-weight: 300;\n  margin-bottom: 10px;\n}\n\n#contact h4 {\n  margin: 5px 0 15px;\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n}\n\nfieldset {\n  border: medium none !important;\n  margin: 0 0 10px;\n  min-width: 100%;\n  padding: 0;\n  width: 100%;\n}\n\n#contact input[type=text],\n#contact input[type=email],\n#contact input[type=tel],\n#contact input[type=name],\n#contact textarea {\n  width: 96%;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background: #fff;\n  margin: 0 0 5px;\n  padding: 2%;\n}\n\n#contact input[type=text]:hover,\n#contact input[type=email]:hover,\n#contact input[type=tel]:hover,\n#contact input[type=name]:hover,\n#contact textarea:hover {\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid #aaa;\n}\n\n#contact textarea {\n  height: 100px;\n  max-width: 100%;\n  resize: none;\n}\n\n#contact button[type=submit] {\n  cursor: pointer;\n  width: 100%;\n  border: none;\n  background: #008080;\n  color: #fff;\n  margin: 0 0 5px;\n  padding: 10px;\n  font-size: 15px;\n}\n\n#contact button[type=submit]:hover {\n  background: #43a047;\n  transition: background-color 0.3s ease-in-out;\n}\n\n#contact button[type=submit]:active {\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);\n}\n\n.copyright {\n  text-align: center;\n}\n\n.small-text {\n  font-size: 12px;\n}\n\n#contact input:focus,\n#contact textarea:focus {\n  outline: 0;\n  border: 1px solid #aaa;\n}\n\n::-webkit-input-placeholder {\n  color: #888;\n}\n\n:-moz-placeholder {\n  color: #888;\n}\n\n::-moz-placeholder {\n  color: #888;\n}\n\n:-ms-input-placeholder {\n  color: #888;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7Ozs7O0VBS0UsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7Ozs7O0VBT0UseUNBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBR0EsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLDhDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBOztFQUVFLFVBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6ImNvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1vLWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jY29udGFjdCB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiA1MHB4IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDVweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuXG4jY29udGFjdCBoMSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNjb250YWN0IGg0IHtcbiAgbWFyZ2luOiA1cHggMCAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogbWVkaXVtIG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRleHRcIl0sXG4jY29udGFjdCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGVsXCJdLFxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cIm5hbWVcIl0sXG4jY29udGFjdCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiA5NiU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAwIDAgNXB4O1xuICBwYWRkaW5nOiAyJTtcbn1cblxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cInRleHRcIl06aG92ZXIsXG4jY29udGFjdCBpbnB1dFt0eXBlPVwiZW1haWxcIl06aG92ZXIsXG4jY29udGFjdCBpbnB1dFt0eXBlPVwidGVsXCJdOmhvdmVyLFxuI2NvbnRhY3QgaW5wdXRbdHlwZT1cIm5hbWVcIl06aG92ZXIsXG4jY29udGFjdCB0ZXh0YXJlYTpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xufVxuXG4jY29udGFjdCB0ZXh0YXJlYSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xufVxuXG4jY29udGFjdCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzAwODA4MDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMCAwIDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4jY29udGFjdCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0M2EwNDc7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4jY29udGFjdCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY29weXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc21hbGwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuI2NvbnRhY3QgaW5wdXQ6Zm9jdXMsXG4jY29udGFjdCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODg4O1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODg4O1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg4ODtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODg4O1xufVxuIl19 */");

/***/ }),

/***/ 63793:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/dialog-header-controls/dialog-header-controls.component.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctaGVhZGVyLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 79450:
/*!*****************************************************************!*\
  !*** ./src/app/shared/get-in-touch/get-in-touch.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".get-in-touch {\n  position: relative;\n  margin-top: 150px;\n}\n.get-in-touch img {\n  max-width: 350px;\n  position: absolute;\n  bottom: 0;\n}\n.get-in-touch .content {\n  padding-left: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldC1pbi10b3VjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFFUjtBQUFJO0VBQ0ksbUJBQUE7QUFFUiIsImZpbGUiOiJnZXQtaW4tdG91Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2V0LWluLXRvdWNoe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgICBpbWd7XG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7IFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwMHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 23378:
/*!***********************************************************************!*\
  !*** ./src/app/shared/header-carousel/header-carousel.component.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header-carousel {\n  height: 460px;\n}\n.header-carousel .slide-item {\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n}\n.header-carousel .swiper-lazy-preloader {\n  top: 15%;\n}\n.header-carousel .slide-info {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  z-index: 2;\n}\n.header-carousel .slide-info .mat-card {\n  text-align: center;\n  min-width: 450px;\n  transition: 0.4s;\n  margin: 0 16px;\n}\n.header-carousel .slide-info .mat-card .slide-title {\n  font-size: 32px;\n  line-height: 32px;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n}\n.header-carousel .slide-info .mat-card .location {\n  font-size: 18px;\n  font-style: italic;\n  margin-bottom: 24px;\n  font-weight: 500;\n}\n.header-carousel .slide-info .mat-card .price {\n  font-size: 24px;\n  min-width: 200px;\n  padding: 8px 16px;\n}\n.header-carousel.offset-bottom {\n  height: 540px;\n}\n.header-carousel.offset-bottom .slide-info {\n  padding-bottom: 80px;\n}\n.header-carousel.fullscreen {\n  height: calc(100vh - (36px + 72px)) !important;\n}\n.header-carousel.fullscreen.toolbar-2 {\n  height: calc(100vh - 202px) !important;\n}\n@media screen and (max-width: 599px) {\n  .header-carousel {\n    height: 340px;\n  }\n  .header-carousel.offset-bottom {\n    height: 420px;\n  }\n  .header-carousel .slide-info .mat-card {\n    min-width: 240px;\n  }\n  .header-carousel .slide-info .mat-card .slide-title {\n    font-size: 24px;\n    line-height: 24px;\n    margin-bottom: 16px;\n  }\n  .header-carousel .slide-info .mat-card .location {\n    font-size: 14px;\n    margin-bottom: 19px;\n    align-items: start !important;\n  }\n  .header-carousel .slide-info .mat-card .price {\n    font-size: 14px;\n    min-width: 120px;\n    padding: unset;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .header-carousel {\n    height: 380px;\n  }\n  .header-carousel.offset-bottom {\n    height: 460px;\n  }\n  .header-carousel .slide-info .mat-card {\n    min-width: 400px;\n  }\n  .header-carousel .slide-info .mat-card .slide-title {\n    font-size: 28px;\n    line-height: 28px;\n    margin-bottom: 16px;\n  }\n  .header-carousel .slide-info .mat-card .location {\n    font-size: 16px;\n    margin-bottom: 24px;\n  }\n  .header-carousel .slide-info .mat-card .price {\n    font-size: 20px;\n    min-width: 160px;\n    padding: 4px 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQ0lxQjtBREx6QjtBQUVJO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFBUjtBQUVJO0VBQ0ksUUFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFBUjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNaO0FBQVk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRWhCO0FBQVk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBRWhCO0FBQVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVoQjtBQUVJO0VBQ0ksYUFBQTtBQUFSO0FBQ1E7RUFDSSxvQkNwQ3dCO0FEcUNwQztBQUVJO0VBQ0ksOENBQUE7QUFBUjtBQUNRO0VBQ0ksc0NBQUE7QUFDWjtBQUtBO0VBQ0k7SUFFSSxhQUFBO0VBSE47RUFJTTtJQUNJLGFBQUE7RUFGVjtFQUtVO0lBQ0ksZ0JBQUE7RUFIZDtFQUljO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUFGbEI7RUFJYztJQUNJLGVBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0VBRmxCO0VBSWM7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBRmxCO0FBQ0Y7QUFTQTtFQUNJO0lBRUksYUFBQTtFQVJOO0VBU007SUFDSSxhQUFBO0VBUFY7RUFVVTtJQUNJLGdCQUFBO0VBUmQ7RUFTYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VBUGxCO0VBU2M7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUFQbEI7RUFTYztJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VBUGxCO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLmhlYWRlci1jYXJvdXNlbHsgXG4gICAgaGVpZ2h0OiAkaGVhZGVyLWNhcm91c2VsLWhlaWdodDtcbiAgICAuc2xpZGUtaXRlbXtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICAgICAgXG4gICAgfVxuICAgIC5zd2lwZXItbGF6eS1wcmVsb2FkZXJ7XG4gICAgICAgIHRvcDogMTUlO1xuICAgIH1cbiAgICAuc2xpZGUtaW5mb3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IDA7ICAgIFxuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAubWF0LWNhcmR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDQ1MHB4OyAgICAgICAgICAgXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDE2cHg7ICAgICAgICAgICAgXG4gICAgICAgICAgICAuc2xpZGUtdGl0bGV7ICAgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2NhdGlvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmLm9mZnNldC1ib3R0b217XG4gICAgICAgIGhlaWdodDogJGhlYWRlci1jYXJvdXNlbC1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wOyAgICAgICAgXG4gICAgICAgIC5zbGlkZS1pbmZve1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5mdWxsc2NyZWVue1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoI3skdG9wLXRvb2xiYXItaGVpZ2h0fSArICN7JG1haW4tdG9vbGJhci1oZWlnaHR9KSkgIWltcG9ydGFudDtcbiAgICAgICAgJi50b29sYmFyLTJ7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDJweCkgIWltcG9ydGFudDsgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHhzXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIC5oZWFkZXItY2Fyb3VzZWx7IFxuICAgICAgICAvLyBoZWlnaHQ6IDMyMHB4O1xuICAgICAgICBoZWlnaHQ6ICRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0IC0gMTIwcHg7XG4gICAgICAgICYub2Zmc2V0LWJvdHRvbXtcbiAgICAgICAgICAgIGhlaWdodDogJGhlYWRlci1jYXJvdXNlbC1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wIC0gMTIwcHg7XG4gICAgICAgIH0gXG4gICAgICAgIC5zbGlkZS1pbmZveyBcbiAgICAgICAgICAgIC5tYXQtY2FyZHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgICAgIC5zbGlkZS10aXRsZXsgICBcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvY2F0aW9ue1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJpY2V7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdW5zZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzbVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkgeyAgXG4gICAgLmhlYWRlci1jYXJvdXNlbHsgXG4gICAgICAgIC8vIGhlaWdodDogMzYwcHg7XG4gICAgICAgIGhlaWdodDogJGhlYWRlci1jYXJvdXNlbC1oZWlnaHQgLSA4MHB4O1xuICAgICAgICAmLm9mZnNldC1ib3R0b217XG4gICAgICAgICAgICBoZWlnaHQ6ICRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0ICsgJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcCAtIDgwcHg7XG4gICAgICAgIH0gICAgICAgIFxuICAgICAgICAuc2xpZGUtaW5mb3sgXG4gICAgICAgICAgICAubWF0LWNhcmR7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgICAgICAuc2xpZGUtdGl0bGV7ICAgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2NhdGlvbntcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJpY2V7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIiRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuJHRoZW1lLW1heC13aWR0aDogMTMwMHB4O1xuJHRvcC10b29sYmFyLWhlaWdodDogMzZweDtcbiRtYWluLXRvb2xiYXItaGVpZ2h0OiA3MnB4O1xuJHVzZXItbWVudS13aWR0aDogMjIwcHg7XG4kaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQ6IDMyMHB4O1xuJGhlYWRlci12aWRlby1taW4taGVpZ2h0OiAzNjBweDtcbiRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0OiA0NjBweDtcbiRoZWFkZXItbWFwLWhlaWdodDogNTUwcHg7XG4kbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wOiA4MHB4O1xuXG4kbWFpbi1zaWRlbmF2LXdpZHRoOiAyNTBweDtcbiRzZWFyY2gtc2lkZW5hdi13aWR0aDogMjg4cHg7Il19 */");

/***/ }),

/***/ 85997:
/*!*****************************************************************!*\
  !*** ./src/app/shared/header-image/header-image.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header-image-wrapper {\n  position: relative;\n  overflow: hidden;\n  margin-top: -72px;\n  padding-top: 36px;\n}\n.header-image-wrapper .header-image-content {\n  position: relative;\n  min-height: 320px;\n  color: #fff;\n  z-index: 1;\n}\n.header-image-wrapper .header-image-content.offset-bottom {\n  padding-bottom: 80px;\n  min-height: 400px;\n}\n.header-image-wrapper .header-image-content.home-page {\n  min-height: 480px;\n}\n.header-image-wrapper .header-image-content .title {\n  font-size: 48px;\n  text-transform: uppercase;\n  padding: 0 16px;\n  text-align: center;\n}\n.header-image-wrapper .header-image-content .desc {\n  margin: 0;\n  font-size: 24px;\n  font-style: italic;\n  padding: 0 16px;\n  text-align: center;\n}\n.header-image-wrapper .header-image-content .mat-raised-button {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white;\n  text-transform: uppercase;\n  margin: 0 4px;\n}\n.header-image-wrapper .mask {\n  background: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.header-image-wrapper .bg {\n  width: 110%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.header-image-wrapper .bg-anime {\n  -webkit-animation-name: MOVE-BG;\n  -webkit-animation-duration: 15s;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  -moz-animation-name: MOVE-BG;\n  -moz-animation-duration: 15s;\n  -moz-animation-timing-function: ease-in-out;\n  -moz-animation-iteration-count: infinite;\n  -moz-animation-direction: alternate;\n  -ms-animation-name: MOVE-BG;\n  -ms-animation-duration: 15s;\n  -ms-animation-timing-function: ease-in-out;\n  -ms-animation-iteration-count: infinite;\n  -ms-animation-direction: alternate;\n  animation-name: MOVE-BG;\n  animation-duration: 15s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n.header-image-wrapper.fullscreen {\n  height: calc(100vh - 72px) !important;\n}\n.header-image-wrapper.fullscreen .header-image-content {\n  height: calc(100vh - 72px) !important;\n}\n.header-image-wrapper.fullscreen.toolbar-2 {\n  height: calc(100vh - 166px) !important;\n}\n.header-image-wrapper.fullscreen.toolbar-2 .header-image-content {\n  height: calc(100vh - 166px) !important;\n}\n@keyframes MOVE-BG {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-7%);\n  }\n}\n.header-image-wrapper[dir=rtl] .bg-anime {\n  animation-name: MOVE-BG-RTL;\n}\n@keyframes MOVE-BG-RTL {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(7%);\n  }\n}\n@media screen and (max-width: 599px) {\n  .header-image-wrapper .header-image-content {\n    min-height: 240px;\n  }\n  .header-image-wrapper .header-image-content.offset-bottom {\n    min-height: 320px;\n  }\n  .header-image-wrapper .header-image-content.home-page {\n    min-height: 400px;\n  }\n  .header-image-wrapper .header-image-content .title {\n    font-size: 24px;\n  }\n  .header-image-wrapper .header-image-content .desc {\n    font-size: 16px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .header-image-wrapper .header-image-content {\n    min-height: 280px;\n  }\n  .header-image-wrapper .header-image-content.offset-bottom {\n    min-height: 360px;\n  }\n  .header-image-wrapper .header-image-content.home-page {\n    min-height: 440px;\n  }\n  .header-image-wrapper .header-image-content .title {\n    font-size: 36px;\n  }\n  .header-image-wrapper .header-image-content .desc {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1pbWFnZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQURKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLGlCQ0prQjtFREtsQixXQUFBO0VBQ0EsVUFBQTtBQUFSO0FBQ1E7RUFDSSxvQkNKd0I7RURLeEIsaUJBQUE7QUFDWjtBQUNRO0VBQ0ksaUJBQUE7QUFDWjtBQUNRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFDUTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUNRO0VBQ0ksMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNaO0FBRUk7RUFDSSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQUFSO0FBRUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBQVI7QUFFSTtFQUNJLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0VBQ0Esc0NBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLDBDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7QUFBUjtBQUVJO0VBQ0kscUNBQUE7QUFBUjtBQUNRO0VBQ0kscUNBQUE7QUFDWjtBQUNRO0VBQ0ksc0NBQUE7QUFDWjtBQUFZO0VBQ0ksc0NBQUE7QUFFaEI7QUFPQTtFQUFxQjtJQUFPLHdCQUFBO0VBc0IxQjtFQXRCc0Q7SUFBSywwQkFBQTtFQXlCM0Q7QUFDRjtBQXZCSTtFQUlJLDJCQUFBO0FBeUJSO0FBbEJBO0VBQXlCO0lBQU8sd0JBQUE7RUErQzlCO0VBL0MwRDtJQUFLLHlCQUFBO0VBa0QvRDtBQUNGO0FBaERBO0VBRVE7SUFDSSxpQkFBQTtFQWlEVjtFQWhEVTtJQUNJLGlCQUFBO0VBa0RkO0VBaERVO0lBQ0ksaUJBQUE7RUFrRGQ7RUFoRFU7SUFDSSxlQUFBO0VBa0RkO0VBaERVO0lBQ0ksZUFBQTtFQWtEZDtBQUNGO0FBNUNBO0VBRVE7SUFDSSxpQkFBQTtFQTZDVjtFQTVDVTtJQUNJLGlCQUFBO0VBOENkO0VBNUNVO0lBQ0ksaUJBQUE7RUE4Q2Q7RUE1Q1U7SUFDSSxlQUFBO0VBOENkO0VBNUNVO0lBQ0ksZUFBQTtFQThDZDtBQUNGIiwiZmlsZSI6ImhlYWRlci1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5oZWFkZXItaW1hZ2Utd3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAtJG1haW4tdG9vbGJhci1oZWlnaHQ7XG4gICAgcGFkZGluZy10b3A6ICRtYWluLXRvb2xiYXItaGVpZ2h0LzI7XG4gICAgLmhlYWRlci1pbWFnZS1jb250ZW50e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItaW1hZ2UtbWluLWhlaWdodDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIHotaW5kZXg6IDE7ICAgICAgICBcbiAgICAgICAgJi5vZmZzZXQtYm90dG9te1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wO1xuICAgICAgICB9XG4gICAgICAgICYuaG9tZS1wYWdle1xuICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci1pbWFnZS1taW4taGVpZ2h0ICsgJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcCArIDgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4OyBcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IFxuICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kZXNje1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4OyBcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYzsgXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm1hdC1yYWlzZWQtYnV0dG9ue1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW46IDAgNHB4O1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG4gICAgLm1hc2t7IFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7IFxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgLmJne1xuICAgICAgICB3aWR0aDogMTEwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgfVxuICAgIC5iZy1hbmltZXtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogTU9WRS1CRztcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE1cztcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7ICAgICAgXG4gICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IE1PVkUtQkc7XG4gICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIC1tb3otYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlOyAgICAgIFxuICAgICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IE1PVkUtQkc7XG4gICAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDE1cztcbiAgICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIC1tcy1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7ICAgICAgXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1cztcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgfVxuICAgICYuZnVsbHNjcmVlbntcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gI3skbWFpbi10b29sYmFyLWhlaWdodH0pICFpbXBvcnRhbnQ7XG4gICAgICAgIC5oZWFkZXItaW1hZ2UtY29udGVudHtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JG1haW4tdG9vbGJhci1oZWlnaHR9KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICYudG9vbGJhci0ye1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTY2cHgpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAuaGVhZGVyLWltYWdlLWNvbnRlbnR7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTY2cHgpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgTU9WRS1CRyB7IGZyb20geyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB0byB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03JSk7IH0gfSAgXG5ALW1vei1rZXlmcmFtZXMgTU9WRS1CRyB7IGZyb20geyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB0byB7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03JSk7IH0gfSAgXG5ALW1zLWtleWZyYW1lcyBNT1ZFLUJHIHsgZnJvbSB7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gdG8geyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03JSk7IH0gfSBcbkBrZXlmcmFtZXMgTU9WRS1CRyB7IGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTclKTsgfSB9XG5cbi5oZWFkZXItaW1hZ2Utd3JhcHBlcltkaXI9XCJydGxcIl17XG4gICAgLmJnLWFuaW1le1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHLVJUTDsgICAgICBcbiAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogTU9WRS1CRy1SVEw7ICAgICAgXG4gICAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogTU9WRS1CRy1SVEw7ICAgICAgXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHLVJUTDsgXG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgTU9WRS1CRy1SVEwgeyBmcm9tIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gdG8geyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7IH0gfSAgXG5ALW1vei1rZXlmcmFtZXMgTU9WRS1CRy1SVEwgeyBmcm9tIHsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gdG8geyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7IH0gfSAgXG5ALW1zLWtleWZyYW1lcyBNT1ZFLUJHLVJUTCB7IGZyb20geyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IHRvIHsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7IH0gfSBcbkBrZXlmcmFtZXMgTU9WRS1CRy1SVEwgeyBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDclKTsgfSB9XG5cbi8vIHhzXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgIC5oZWFkZXItaW1hZ2Utd3JhcHBlcntcbiAgICAgICAgLmhlYWRlci1pbWFnZS1jb250ZW50e1xuICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci1pbWFnZS1taW4taGVpZ2h0IC0gODBweDtcbiAgICAgICAgICAgICYub2Zmc2V0LWJvdHRvbXtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wIC0gODBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuaG9tZS1wYWdle1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItaW1hZ2UtbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4OyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNjeyBcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7IFxuICAgICAgICAgICAgfSAgICAgICAgICAgICBcbiAgICAgICAgfSBcbiAgICB9XG59XG5cbi8vIHNtXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgLmhlYWRlci1pbWFnZS13cmFwcGVye1xuICAgICAgICAuaGVhZGVyLWltYWdlLWNvbnRlbnR7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgLSA0MHB4O1xuICAgICAgICAgICAgJi5vZmZzZXQtYm90dG9te1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItaW1hZ2UtbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3AgLSA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5ob21lLXBhZ2V7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci1pbWFnZS1taW4taGVpZ2h0ICsgJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcCArIDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4OyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNjeyBcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7IFxuICAgICAgICAgICAgfSAgICAgICAgICAgICBcbiAgICAgICAgfSBcbiAgICB9XG59IiwiJGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4kdGhlbWUtbWF4LXdpZHRoOiAxMzAwcHg7XG4kdG9wLXRvb2xiYXItaGVpZ2h0OiAzNnB4O1xuJG1haW4tdG9vbGJhci1oZWlnaHQ6IDcycHg7XG4kdXNlci1tZW51LXdpZHRoOiAyMjBweDtcbiRoZWFkZXItaW1hZ2UtbWluLWhlaWdodDogMzIwcHg7XG4kaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQ6IDM2MHB4O1xuJGhlYWRlci1jYXJvdXNlbC1oZWlnaHQ6IDQ2MHB4O1xuJGhlYWRlci1tYXAtaGVpZ2h0OiA1NTBweDtcbiRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A6IDgwcHg7XG5cbiRtYWluLXNpZGVuYXYtd2lkdGg6IDI1MHB4O1xuJHNlYXJjaC1zaWRlbmF2LXdpZHRoOiAyODhweDsiXX0= */");

/***/ }),

/***/ 1267:
/*!*************************************************************!*\
  !*** ./src/app/shared/header-map/header-map.component.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".map-wrapper {\n  height: 550px;\n}\n.map-wrapper .sebm-google-map-container {\n  height: 100%;\n}\n.map-wrapper.offset-bottom {\n  height: 630px;\n}\n.map-wrapper.offset-bottom .slide-info {\n  padding-bottom: 80px;\n}\n.map-wrapper.fullscreen {\n  height: calc(100vh - (36px + 72px)) !important;\n}\n.map-wrapper.fullscreen.toolbar-2 {\n  height: calc(100vh - 202px) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1tYXAuY29tcG9uZW50LnNjc3MiLCIuLi8uLi90aGVtZS9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUNLZ0I7QUROcEI7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUVJO0VBQ0ksYUFBQTtBQUFSO0FBQ1E7RUFDSSxvQkNEd0I7QURFcEM7QUFFSTtFQUNJLDhDQUFBO0FBQVI7QUFDUTtFQUNJLHNDQUFBO0FBQ1oiLCJmaWxlIjoiaGVhZGVyLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi90aGVtZS9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5tYXAtd3JhcHBlcntcbiAgICBoZWlnaHQ6ICRoZWFkZXItbWFwLWhlaWdodDtcbiAgICAuc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lcntcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAmLm9mZnNldC1ib3R0b217XG4gICAgICAgIGhlaWdodDogJGhlYWRlci1tYXAtaGVpZ2h0ICsgJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcDsgICAgICAgIFxuICAgICAgICAuc2xpZGUtaW5mb3tcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wO1xuICAgICAgICB9XG4gICAgfVxuICAgICYuZnVsbHNjcmVlbntcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKCN7JHRvcC10b29sYmFyLWhlaWdodH0gKyAjeyRtYWluLXRvb2xiYXItaGVpZ2h0fSkpICFpbXBvcnRhbnQ7XG4gICAgICAgICYudG9vbGJhci0ye1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAycHgpICFpbXBvcnRhbnQ7IFxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCIkZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiR0aGVtZS1tYXgtd2lkdGg6IDEzMDBweDtcbiR0b3AtdG9vbGJhci1oZWlnaHQ6IDM2cHg7XG4kbWFpbi10b29sYmFyLWhlaWdodDogNzJweDtcbiR1c2VyLW1lbnUtd2lkdGg6IDIyMHB4O1xuJGhlYWRlci1pbWFnZS1taW4taGVpZ2h0OiAzMjBweDtcbiRoZWFkZXItdmlkZW8tbWluLWhlaWdodDogMzYwcHg7XG4kaGVhZGVyLWNhcm91c2VsLWhlaWdodDogNDYwcHg7XG4kaGVhZGVyLW1hcC1oZWlnaHQ6IDU1MHB4O1xuJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcDogODBweDtcblxuJG1haW4tc2lkZW5hdi13aWR0aDogMjUwcHg7XG4kc2VhcmNoLXNpZGVuYXYtd2lkdGg6IDI4OHB4OyJdfQ== */");

/***/ }),

/***/ 8855:
/*!*****************************************************************!*\
  !*** ./src/app/shared/header-video/header-video.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header-video-wrapper {\n  position: relative;\n  overflow: hidden;\n  margin-top: -72px;\n  padding-top: 36px;\n}\n.header-video-wrapper .header-video-content {\n  position: relative;\n  min-height: 360px;\n  color: #fff;\n  z-index: 1;\n}\n.header-video-wrapper .header-video-content.offset-bottom {\n  padding-bottom: 80px;\n  min-height: 440px;\n}\n.header-video-wrapper .header-video-content.home-page {\n  min-height: 520px;\n}\n.header-video-wrapper .header-video-content .title {\n  font-size: 48px;\n  text-transform: uppercase;\n  padding: 0 16px;\n  text-align: center;\n}\n.header-video-wrapper .header-video-content .desc {\n  margin: 0;\n  font-size: 24px;\n  font-style: italic;\n  padding: 0 16px;\n  text-align: center;\n}\n.header-video-wrapper .header-video-content .mat-raised-button {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white;\n  text-transform: uppercase;\n  margin: 0 4px;\n}\n.header-video-wrapper .mask {\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.header-video-wrapper video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -1;\n  object-position: center;\n  object-fit: cover;\n}\n.header-video-wrapper.fullscreen {\n  height: calc(100vh - 72px) !important;\n}\n.header-video-wrapper.fullscreen .header-video-content {\n  height: calc(100vh - 72px) !important;\n}\n.header-video-wrapper.fullscreen.toolbar-2 {\n  height: calc(100vh - 166px) !important;\n}\n.header-video-wrapper.fullscreen.toolbar-2 .header-video-content {\n  height: calc(100vh - 166px) !important;\n}\n@media screen and (max-width: 599px) {\n  .header-video-wrapper .header-video-content {\n    min-height: 280px;\n  }\n  .header-video-wrapper .header-video-content.offset-bottom {\n    min-height: 360px;\n  }\n  .header-video-wrapper .header-video-content.home-page {\n    min-height: 440px;\n  }\n  .header-video-wrapper .header-video-content .title {\n    font-size: 24px;\n  }\n  .header-video-wrapper .header-video-content .desc {\n    font-size: 16px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .header-video-wrapper .header-video-content {\n    min-height: 320px;\n  }\n  .header-video-wrapper .header-video-content.offset-bottom {\n    min-height: 400px;\n  }\n  .header-video-wrapper .header-video-content.home-page {\n    min-height: 480px;\n  }\n  .header-video-wrapper .header-video-content .title {\n    font-size: 36px;\n  }\n  .header-video-wrapper .header-video-content .desc {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci12aWRlby5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3RoZW1lL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQURKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLGlCQ0hrQjtFRElsQixXQUFBO0VBQ0EsVUFBQTtBQUFSO0FBQ1E7RUFDSSxvQkNKd0I7RURLeEIsaUJBQUE7QUFDWjtBQUNRO0VBQ0ksaUJBQUE7QUFDWjtBQUNRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFDUTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUNRO0VBQ0ksMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNaO0FBRUk7RUFDSSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRUk7RUFDSSxxQ0FBQTtBQUFSO0FBQ1E7RUFDSSxxQ0FBQTtBQUNaO0FBQ1E7RUFDSSxzQ0FBQTtBQUNaO0FBQVk7RUFDSSxzQ0FBQTtBQUVoQjtBQVFBO0VBRVE7SUFDSSxpQkFBQTtFQU5WO0VBT1U7SUFDSSxpQkFBQTtFQUxkO0VBT1U7SUFDSSxpQkFBQTtFQUxkO0VBT1U7SUFDSSxlQUFBO0VBTGQ7RUFPVTtJQUNJLGVBQUE7RUFMZDtBQUNGO0FBV0E7RUFFUTtJQUNJLGlCQUFBO0VBVlY7RUFXVTtJQUNJLGlCQUFBO0VBVGQ7RUFXVTtJQUNJLGlCQUFBO0VBVGQ7RUFXVTtJQUNJLGVBQUE7RUFUZDtFQVdVO0lBQ0ksZUFBQTtFQVRkO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLXZpZGVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLmhlYWRlci12aWRlby13cmFwcGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi10b3A6IC0kbWFpbi10b29sYmFyLWhlaWdodDtcbiAgICBwYWRkaW5nLXRvcDogJG1haW4tdG9vbGJhci1oZWlnaHQvMjtcbiAgICAuaGVhZGVyLXZpZGVvLWNvbnRlbnR7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci12aWRlby1taW4taGVpZ2h0O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgei1pbmRleDogMTsgICAgICAgIFxuICAgICAgICAmLm9mZnNldC1ib3R0b217XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItdmlkZW8tbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3A7XG4gICAgICAgIH1cbiAgICAgICAgJi5ob21lLXBhZ2V7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wICsgODBweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7IFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2N7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7IFxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljOyBcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubWF0LXJhaXNlZC1idXR0b257XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cbiAgICAubWFza3sgXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTsgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH0gXG4gICAgdmlkZW8ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICAmLmZ1bGxzY3JlZW57XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JG1haW4tdG9vbGJhci1oZWlnaHR9KSAhaW1wb3J0YW50O1xuICAgICAgICAuaGVhZGVyLXZpZGVvLWNvbnRlbnR7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyRtYWluLXRvb2xiYXItaGVpZ2h0fSkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmLnRvb2xiYXItMntcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2NnB4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLmhlYWRlci12aWRlby1jb250ZW50e1xuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE2NnB4KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIFxuIFxuXG4vLyB4c1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICAuaGVhZGVyLXZpZGVvLXdyYXBwZXJ7XG4gICAgICAgIC5oZWFkZXItdmlkZW8tY29udGVudHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItdmlkZW8tbWluLWhlaWdodCAtIDgwcHg7XG4gICAgICAgICAgICAmLm9mZnNldC1ib3R0b217XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci12aWRlby1taW4taGVpZ2h0ICsgJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcCAtIDgwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmhvbWUtcGFnZXtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3sgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgXG4gICAgICAgIH0gXG4gICAgfVxufVxuXG4vLyBzbVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xuICAgIC5oZWFkZXItdmlkZW8td3JhcHBlcntcbiAgICAgICAgLmhlYWRlci12aWRlby1jb250ZW50e1xuICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci12aWRlby1taW4taGVpZ2h0IC0gNDBweDtcbiAgICAgICAgICAgICYub2Zmc2V0LWJvdHRvbXtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLXZpZGVvLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wIC0gNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuaG9tZS1wYWdle1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItdmlkZW8tbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3AgKyA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3sgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OyBcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgXG4gICAgICAgIH0gXG4gICAgfVxufSIsIiRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuJHRoZW1lLW1heC13aWR0aDogMTMwMHB4O1xuJHRvcC10b29sYmFyLWhlaWdodDogMzZweDtcbiRtYWluLXRvb2xiYXItaGVpZ2h0OiA3MnB4O1xuJHVzZXItbWVudS13aWR0aDogMjIwcHg7XG4kaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQ6IDMyMHB4O1xuJGhlYWRlci12aWRlby1taW4taGVpZ2h0OiAzNjBweDtcbiRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0OiA0NjBweDtcbiRoZWFkZXItbWFwLWhlaWdodDogNTUwcHg7XG4kbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wOiA4MHB4O1xuXG4kbWFpbi1zaWRlbmF2LXdpZHRoOiAyNTBweDtcbiRzZWFyY2gtc2lkZW5hdi13aWR0aDogMjg4cHg7Il19 */");

/***/ }),

/***/ 80554:
/*!***********************************************************!*\
  !*** ./src/app/shared/load-more/load-more.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkLW1vcmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 37779:
/*!*******************************************************!*\
  !*** ./src/app/shared/mission/mission.component.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXNzaW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 30772:
/*!*************************************************************!*\
  !*** ./src/app/shared/our-agents/our-agents.component.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".img-container img {\n  max-width: 250px;\n  margin-bottom: 18px;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.flex-direction-column {\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91ci1hZ2VudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQ0E7RUFDSSxzQkFBQTtBQUVKIiwiZmlsZSI6Im91ci1hZ2VudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWNvbnRhaW5lciBpbWd7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmxleC1kaXJlY3Rpb24tY29sdW1ue1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */");

/***/ }),

/***/ 21549:
/*!*****************************************************************!*\
  !*** ./src/app/shared/our-services/our-services.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".services-wrapper {\n  margin: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm91ci1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJvdXItc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZXMtd3JhcHBlcntcbiAgICBtYXJnaW46IC04cHg7XG59Il19 */");

/***/ }),

/***/ 59776:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/properties-carousel/properties-carousel.component.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 25858:
/*!***********************************************************************************************************!*\
  !*** ./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.scss ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLXNlYXJjaC1yZXN1bHRzLWZpbHRlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 38133:
/*!***************************************************************************!*\
  !*** ./src/app/shared/properties-search/properties-search.component.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 92194:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/properties-toolbar/properties-toolbar.component.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9wZXJ0aWVzLXRvb2xiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 79312:
/*!*******************************************************************!*\
  !*** ./src/app/shared/property-item/property-item.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".property-item {\n  height: 100%;\n  overflow: hidden;\n}\n.property-item .thumbnail-section {\n  position: relative;\n}\n.property-item .mat-card-image {\n  position: relative;\n  min-height: 100px;\n}\n.property-item .mat-card-image .swiper-container .swipe-arrow.mat-icon-button {\n  color: #fff;\n}\n.property-item .mat-card-image .swiper-container .swipe-arrow.mat-icon-button.swiper-button-next {\n  right: 4px;\n}\n.property-item .mat-card-image .swiper-container .swipe-arrow.mat-icon-button.swiper-button-prev {\n  left: 4px;\n}\n.property-item .mat-card-image .swiper-slide {\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.04);\n}\n.property-item .mat-card-image img {\n  position: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  vertical-align: bottom;\n}\n.property-item .property-status {\n  position: absolute;\n  z-index: 2;\n}\n.property-item .property-status span {\n  padding: 3px 6px;\n  margin: 4px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: uppercase;\n  border-radius: 4px;\n}\n.property-item .title {\n  font-size: 18px;\n}\n.property-item .title a {\n  transition: 0.2s;\n  text-decoration: none;\n}\n.property-item .address, .property-item .date {\n  font-style: italic;\n  margin-top: 8px;\n}\n.property-item .address .mat-icon, .property-item .date .mat-icon {\n  margin-left: -4px;\n}\n.property-item .price span {\n  display: block;\n}\n.property-item .features p span:first-child {\n  float: left;\n  padding: 0 0.4em 0 0;\n}\n.property-item .features p span + span {\n  float: right;\n  padding: 0 0 0 0.4em;\n  font-weight: 500;\n}\n.property-item .features p:after {\n  content: \"\";\n  display: block;\n  overflow: hidden;\n  height: 1em;\n}\n.property-item .control-icons {\n  position: absolute;\n  z-index: 2;\n  right: 2px;\n  margin-top: -30px;\n}\n.property-item .control-icons button.mat-button {\n  min-width: 26px;\n  width: 26px;\n  line-height: 26px;\n  padding: 0;\n  margin: 0 4px;\n  background: rgba(255, 252, 252, 0.6);\n  transition: 0.2s;\n  color: rgba(0, 0, 0, 0.87);\n}\n.property-item .control-icons button.mat-button:disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n.property-item .control-icons button.mat-button:hover:enabled {\n  background: #fffcfc;\n}\n.property-item.grid-item {\n  flex-flow: column !important;\n}\n.property-item.grid-item.column-2 .title {\n  font-size: 22px;\n}\n.property-item.grid-item.column-2 .price {\n  font-size: 18px;\n}\n.property-item.grid-item.column-3 .title {\n  font-size: 18px;\n}\n.property-item.grid-item.column-3 .address, .property-item.grid-item.column-3 .date {\n  font-size: 12px;\n}\n.property-item.grid-item.column-3 .address .mat-icon, .property-item.grid-item.column-3 .date .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.property-item.grid-item.full-width-page.column-2 .title {\n  font-size: 28px;\n}\n.property-item.grid-item.full-width-page.column-2 .price {\n  font-size: 20px;\n}\n.property-item.grid-item.full-width-page.column-3 .title {\n  font-size: 22px;\n}\n.property-item.grid-item.full-width-page.column-3 .address, .property-item.grid-item.full-width-page.column-3 .date {\n  font-size: 14px;\n}\n.property-item.grid-item.full-width-page.column-3 .address .mat-icon, .property-item.grid-item.full-width-page.column-3 .date .mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.property-item.grid-item.full-width-page.column-3 .price {\n  font-size: 18px;\n}\n.property-item.grid-item.full-width-page.column-4 .title {\n  font-size: 18px;\n}\n.property-item.grid-item.full-width-page.column-4 .address, .property-item.grid-item.full-width-page.column-4 .date {\n  font-size: 12px;\n}\n.property-item.grid-item.full-width-page.column-4 .address .mat-icon, .property-item.grid-item.full-width-page.column-4 .date .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.property-item.list-item .title {\n  font-size: 28px;\n  margin-top: -8px;\n}\n.property-item.list-item .price {\n  font-size: 20px;\n}\n.property-item.list-item .features {\n  display: flex;\n  flex-flow: wrap;\n}\n.property-item.list-item .features p {\n  margin-right: 24px;\n  display: flex;\n  white-space: nowrap;\n}\n.property-item.list-item .features p span:first-child:after {\n  content: \":\";\n  margin: 0 1px;\n}\n.property-item.list-item .features p:after {\n  content: none;\n}\n@media screen and (max-width: 959px) {\n  .property-item.grid-item .title {\n    font-size: 22px;\n  }\n  .property-item.grid-item.column-2 .title {\n    font-size: 22px;\n  }\n  .property-item.grid-item.full-width-page.column-2 .title {\n    font-size: 22px;\n  }\n  .property-item.list-item .title {\n    font-size: 22px;\n  }\n  .property-item.list-item .address, .property-item.list-item .date {\n    font-size: 12px;\n  }\n  .property-item.list-item .address .mat-icon, .property-item.list-item .date .mat-icon {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n  .property-item.list-item .price {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQVk7RUFDSSxXQUFBO0FBRWhCO0FBRGdCO0VBQ0ksVUFBQTtBQUdwQjtBQURnQjtFQUNJLFNBQUE7QUFHcEI7QUFDUTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBQVo7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFBWjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBRFI7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQVo7QUFHSTtFQUNJLGVBQUE7QUFEUjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQUFaO0FBR0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFEUjtBQUVRO0VBQ0ksaUJBQUE7QUFBWjtBQUlRO0VBQ0ksY0FBQTtBQUZaO0FBT1k7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7QUFMaEI7QUFPWTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBTGhCO0FBUVE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQU5aO0FBU0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFQUjtBQVFRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBTlo7QUFPWTtFQUNJLDBCQUFBO0FBTGhCO0FBT1k7RUFDSSxtQkFBQTtBQUxoQjtBQVNJO0VBQ0ksNEJBQUE7QUFQUjtBQVNZO0VBQ0ksZUFBQTtBQVBoQjtBQVNZO0VBQ0ksZUFBQTtBQVBoQjtBQVdZO0VBQ0ksZUFBQTtBQVRoQjtBQVdZO0VBQ0ksZUFBQTtBQVRoQjtBQVVnQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVJwQjtBQWNnQjtFQUNJLGVBQUE7QUFacEI7QUFjZ0I7RUFDSSxlQUFBO0FBWnBCO0FBZ0JnQjtFQUNJLGVBQUE7QUFkcEI7QUFnQmdCO0VBQ0ksZUFBQTtBQWRwQjtBQWVvQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWJ4QjtBQWdCZ0I7RUFDSSxlQUFBO0FBZHBCO0FBa0JnQjtFQUNJLGVBQUE7QUFoQnBCO0FBa0JnQjtFQUNJLGVBQUE7QUFoQnBCO0FBaUJvQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWZ4QjtBQXNCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQXBCWjtBQXNCUTtFQUNJLGVBQUE7QUFwQlo7QUFzQlE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQXBCWjtBQXFCWTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBbkJoQjtBQW9CZ0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQWxCcEI7QUFvQmdCO0VBQ0ksYUFBQTtBQWxCcEI7QUE0QkE7RUFHWTtJQUNJLGVBQUE7RUEzQmQ7RUE4QmM7SUFDSSxlQUFBO0VBNUJsQjtFQWlDa0I7SUFDSSxlQUFBO0VBL0J0QjtFQXFDVTtJQUNJLGVBQUE7RUFuQ2Q7RUFxQ1U7SUFDSSxlQUFBO0VBbkNkO0VBb0NjO0lBQ0ksZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBbENsQjtFQXFDVTtJQUNJLGVBQUE7RUFuQ2Q7QUFDRiIsImZpbGUiOiJwcm9wZXJ0eS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LWl0ZW17XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLnRodW1ibmFpbC1zZWN0aW9ue1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5tYXQtY2FyZC1pbWFnZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgICAgLnN3aXBlci1jb250YWluZXJ7XG4gICAgICAgICAgICAuc3dpcGUtYXJyb3cubWF0LWljb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICYuc3dpcGVyLWJ1dHRvbi1uZXh0e1xuICAgICAgICAgICAgICAgICAgICByaWdodDogNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLnN3aXBlci1idXR0b24tcHJldntcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc3dpcGVyLXNsaWRleyAgICAgICAgICAgICAgXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogNjYuMjUlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgIFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTsgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgfSBcbiAgICB9XG4gICAgLnByb3BlcnR5LXN0YXR1c3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgcGFkZGluZzogM3B4IDZweDtcbiAgICAgICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGl0bGV7IFxuICAgICAgICBmb250LXNpemU6IDE4cHg7ICAgICAgIFxuICAgICAgICBhe1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFkZHJlc3MsIC5kYXRle1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgLm1hdC1pY29ue1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gICAgICAgIH1cbiAgICB9ICBcbiAgICAucHJpY2V7IFxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9ICBcbiAgICAuZmVhdHVyZXMgcCB7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIC40ZW0gMCAwO1x0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICArIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAuNGVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBoZWlnaHQ6IDFlbTsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRyb2wtaWNvbnN7IFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDI7IFxuICAgICAgICByaWdodDogMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgYnV0dG9uLm1hdC1idXR0b257XG4gICAgICAgICAgICBtaW4td2lkdGg6IDI2cHg7XG4gICAgICAgICAgICB3aWR0aDogMjZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjUyLCAyNTIsIDAuNik7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzOyBcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgICAgICAgICAmOmRpc2FibGVke1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXI6ZW5hYmxlZHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjUyLCAyNTIsIDEpO1xuICAgICAgICAgICAgfSAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmdyaWQtaXRlbXtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICAgICAgJi5jb2x1bW4tMntcbiAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2V7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuY29sdW1uLTN7XG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFkZHJlc3MsIC5kYXRle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAubWF0LWljb257XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5mdWxsLXdpZHRoLXBhZ2V7XG4gICAgICAgICAgICAmLmNvbHVtbi0ye1xuICAgICAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJpY2V7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmNvbHVtbi0ze1xuICAgICAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYWRkcmVzcywgLmRhdGV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgLm1hdC1pY29ue1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByaWNle1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5jb2x1bW4tNHtcbiAgICAgICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFkZHJlc3MsIC5kYXRle1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICYubGlzdC1pdGVteyBcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2V7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7IFxuICAgICAgICB9XG4gICAgICAgIC5mZWF0dXJlc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHdyYXA7XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZDphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiOlwiO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXB4O1x0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuIFxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gICAgLnByb3BlcnR5LWl0ZW17XG4gICAgICAgICYuZ3JpZC1pdGVte1xuICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuY29sdW1uLTJ7XG4gICAgICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5mdWxsLXdpZHRoLXBhZ2V7XG4gICAgICAgICAgICAgICAgJi5jb2x1bW4tMntcbiAgICAgICAgICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYubGlzdC1pdGVte1xuICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGRyZXNzLCAuZGF0ZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgLm1hdC1pY29ue1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaWNle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIH1cblxufSJdfQ== */");

/***/ }),

/***/ 99015:
/*!*****************************************************!*\
  !*** ./src/app/shared/rating/rating.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ratings {\n  color: #fbc02d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJyYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nc3tcbiAgICBjb2xvcjojZmJjMDJkO1xufSJdfQ== */");

/***/ }),

/***/ 14455:
/*!*****************************************************************!*\
  !*** ./src/app/shared/testimonials/testimonials.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".testimonials-carousel .swiper-container {\n  padding-bottom: 50px;\n}\n.testimonials-carousel .swiper-container .content {\n  max-width: 650px;\n  margin: 0 auto;\n}\n.testimonials-carousel .swiper-container .content img {\n  border-radius: 50%;\n  width: 140px;\n  height: 140px;\n}\n.testimonials-carousel .swiper-container .content .quote {\n  font-size: 50px;\n  line-height: 14px;\n}\n.testimonials-carousel .swiper-container .content .quote.open {\n  margin-top: 24px;\n}\n.testimonials-carousel .swiper-container .content .quote.close {\n  margin-bottom: 24px;\n}\n.testimonials-carousel .swiper-container .content .text {\n  font-weight: 500;\n}\n.testimonials-carousel .swiper-container .content .author {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9CQUFBO0FBQVI7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUNaO0FBQVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRWhCO0FBQVk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFFaEI7QUFEZ0I7RUFDSSxnQkFBQTtBQUdwQjtBQURnQjtFQUNJLG1CQUFBO0FBR3BCO0FBQVk7RUFDSSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0kseUJBQUE7QUFFaEIiLCJmaWxlIjoidGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3RpbW9uaWFscy1jYXJvdXNlbHsgICAgXG4gICAgLnN3aXBlci1jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICAuY29udGVudHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bzsgXG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnF1b3Rle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDsgXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7IFxuICAgICAgICAgICAgICAgICYub3BlbntcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5jbG9zZXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZXh0eyBcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hdXRob3J7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 52359:
/*!*****************************************************************!*\
  !*** ./src/app/shared/videocontact/videocontact.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n  margin-top: 30px;\n  margin-bottom: 70px;\n  margin-left: 70px;\n  margin-right: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoidmlkZW9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuIl19 */");

/***/ }),

/***/ 74660:
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/contacts/contacts.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 35146:
/*!*******************************************************************!*\
  !*** ./src/app/theme/components/currency/currency.component.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyZW5jeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 32155:
/*!***************************************************************!*\
  !*** ./src/app/theme/components/footer/footer.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".exp {\n  width: 30%;\n  height: auto;\n  margin-left: 125px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHAge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAxMjVweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 45333:
/*!***********************************************************!*\
  !*** ./src/app/theme/components/lang/lang.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 21880:
/*!**************************************************************************************!*\
  !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 8282:
/*!**********************************************************************************!*\
  !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.menu-item .mat-button {\n  width: 100%;\n  font-weight: 400;\n  text-transform: uppercase;\n  height: 38px;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 56px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 76px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 96px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 116px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 136px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 156px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 176px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 196px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 216px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 36px;\n}\n\n.sub-menu.show {\n  max-height: 500px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQURKOztBQUtJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBRlI7O0FBSVk7RUFHSSx5QkFBQTtBQUZoQjs7QUFNSTtFQUNJLGtCQUFBO0FBSlI7O0FBUUE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFHQSxxQ0FBQTtBQU5KOztBQ3ZCUTtFQUtRLGtCQUFBO0FEcUJoQjs7QUMxQlE7RUFLUSxrQkFBQTtBRHdCaEI7O0FDN0JRO0VBS1Esa0JBQUE7QUQyQmhCOztBQ2hDUTtFQUtRLG1CQUFBO0FEOEJoQjs7QUNuQ1E7RUFLUSxtQkFBQTtBRGlDaEI7O0FDdENRO0VBS1EsbUJBQUE7QURvQ2hCOztBQ3pDUTtFQUtRLG1CQUFBO0FEdUNoQjs7QUM1Q1E7RUFLUSxtQkFBQTtBRDBDaEI7O0FDL0NRO0VBS1EsbUJBQUE7QUQ2Q2hCOztBQXBCSTtFQUNJLGtCQUFBO0FBc0JSOztBQXBCSTtFQUNJLGlCQUFBO0VBR0Esb0NBQUE7QUFzQlIiLCJmaWxlIjoidmVydGljYWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvbWl4aW5zXCI7XG5cbi5tZW51LWV4cGFuZC1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG59XG5cbi5tZW51LWl0ZW17XG4gICAgLm1hdC1idXR0b257XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgICYuZXhwYW5kZWR7XG4gICAgICAgICAgICAubWVudS1leHBhbmQtaWNvbntcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1hdC1idXR0b24td3JhcHBlcntcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIH0gICAgXG59XG5cbi5zdWItbWVudXtcbiAgICBAaW5jbHVkZSBtZW51LWxldmVsLXBhZGRpbmcoJ2x0cicpO1xuICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcbiAgICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0OyAgICBcbiAgICAubWF0LWJ1dHRvbntcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzNnB4OyAgICAgIFxuICAgIH0gXG4gICAgJi5zaG93e1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG4gICAgfSAgICBcbn0iLCJAbWl4aW4gbWVudS1sZXZlbC1wYWRkaW5nKCRkaXJlY3Rpb24pe1xuICAgICRlbGVtOiAnJztcbiAgICBAZm9yICRpIGZyb20gMiB0aHJvdWdoIDEwIHtcbiAgICAgICAgJGVsZW06IGlmKCRpID09IDIsIFwiLnN1Yi1tZW51XCIsIHNlbGVjdG9yLW5lc3QoJGVsZW0sIFwiLnN1Yi1tZW51XCIpKTsgICAgICBcbiAgICAgICAgI3skZWxlbSArICcgLm1hdC1idXR0b24nfSB7IFxuICAgICAgICAgICAgQGlmICRkaXJlY3Rpb24gPT0gXCJydGxcIiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweCArICgyMHB4ICogJGkpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIEBlbHNle1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweCArICgyMHB4ICogJGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ 67209:
/*!***************************************************************************!*\
  !*** ./src/app/theme/components/social-icons/social-icons.component.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwtaWNvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 49564:
/*!*********************************************************************!*\
  !*** ./src/app/theme/components/user-menu/user-menu.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"app\" class=\"app\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\"\n            [ngClass]=\"[settings.theme, 'toolbar-'+settings.toolbar]\" \n            [class.main-toolbar-fixed]=\"settings.mainToolbarFixed\"> \n    <router-outlet></router-outlet>\n    <ng-progress \n        [spinner]=\"false\"\n        [meteor]=\"false\" \n        color=\"#e91e63\"></ng-progress>\n</div>\n\n");

/***/ }),

/***/ 77647:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lock-screen/lock-screen.component.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-drawer-container fxFlexFill>\n  <div fxFlexFill fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"p-3 lock-screen\"> \n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> \n        <h3 class=\"name text-muted\">Adam Sandler</h3>  \n        <img src=\"assets/images/profile/adam.jpg\" alt=\"\" class=\"mat-elevation-z4\">             \n        <input placeholder=\"Enter password\" formControlName=\"password\" required type=\"password\">\n        <button mat-icon-button color=\"primary\" type=\"submit\" class=\"submit\" [disabled]=\"!form.valid\">\n          <mat-icon>arrow_forward</mat-icon>\n        </button>\n        <a mat-button routerLink=\"/login\" color=\"primary\">Or sign in as a different user</a>  \n    </form>\n     <p class=\"time\">{{ date | date:\"hh:mm:ss a\" }}</p> \n  </div>\n</mat-drawer-container>");

/***/ }),

/***/ 34300:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\n    <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\n        <mat-card class=\"p-0 mat-elevation-z6 box\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\n                <mat-icon class=\"mat-icon-xlg\">error</mat-icon>\n                <h1 class=\"error\">404</h1>\n            </div>\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\n                <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z8 box-content-inner\">\n                    <p class=\"box-text\">Opps, it seems that this page does not exist.</p> \n                    <p class=\"box-text\">If you are sure it should, search for it.</p> \n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\n                        <mat-label>Search keyword</mat-label>\n                        <input matInput placeholder=\"Enter search keyword...\">\n                    </mat-form-field>\n                </mat-card>\n                <div class=\"box-footer\">\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z8\" type=\"button\" (click)=\"goHome()\">\n                        <mat-icon>home</mat-icon>\n                    </button>\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z8\" type=\"button\" (click)=\"goHome()\">\n                        <mat-icon>search</mat-icon>\n                    </button>\n                </div>\n            </mat-card-content>\n        </mat-card>          \n    </div>\n</div>");

/***/ }),

/***/ 88928:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-sidenav-container> \n    <mat-sidenav [opened]=\"false\" mode=\"over\" #sidenav class=\"sidenav mat-elevation-z6\">\n        <button mat-icon-button color=\"warn\" class=\"close\" (click)=\"sidenav.close()\">\n           <mat-icon color=\"warn\">close</mat-icon>\n        </button>\n        <div class=\"divider\"></div>\n\n        <div perfectScrollbar class=\"vertical-menu-wrapper\">\n            <app-vertical-menu [menuParentId]=\"0\"></app-vertical-menu>    \n        </div>       \n\n        <div class=\"divider\"></div>\n        <app-social-icons [iconSize]=\"'xlg'\" [iconColor]=\"'primary'\" fxLayout=\"row\" fxLayoutAlign=\"center center\"></app-social-icons>\n        \n    </mat-sidenav>\n\n    <mat-sidenav-content class=\"page-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n\n        <header [ngClass]=\"'toolbar-'+settings.toolbar\" [class.has-bg-image]=\"settings.headerBgImage\" [class.has-bg-video]=\"settings.headerBgVideo\" [class.main-toolbar-fixed]=\"settings.mainToolbarFixed\">\n\n            <app-toolbar1 *ngIf=\"settings.toolbar == 1\" (onMenuIconClick)=\"sidenav.toggle()\"></app-toolbar1>\n            <app-toolbar2 *ngIf=\"settings.toolbar == 2\" (onMenuIconClick)=\"sidenav.toggle()\"></app-toolbar2>\n        \n        </header>\n          \n        <main [class.content-offset-to-top]=\"settings.contentOffsetToTop\">\n            <router-outlet></router-outlet>              \n        </main>\n\n        <div class=\"sticky-footer-helper\" fxFlex=\"grow\"></div>\n\n        <app-footer></app-footer>\n       \n        <!-- <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"options-icon\" (click)=\"options.toggle()\">\n            <mat-icon>settings</mat-icon>\n        </div> -->\n        \n        <div *ngIf=\"showBackToTop\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top\" (click)=\"scrollToTop()\">\n            <mat-icon>arrow_upward</mat-icon>\n        </div>\n\n        <jjva-ngx-whatsapp-button [ngx_whatsapp_phone]=\"phone\" [ngx_whatsapp_text]=\"\" style=\"position: fixed !important; z-index: 99999;\"></jjva-ngx-whatsapp-button>\n\n        <app-chat></app-chat>\n\n    <!-- </mat-sidenav-content> \n    \n    <mat-sidenav #options position=\"end\" class=\"options\" autoFocus=\"false\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"op-header mat-elevation-z1\">\n            <h2>Settings</h2>\n            <button mat-icon-button (click)=\"options.toggle()\" color=\"accent\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </div> \n        <div perfectScrollbar>\n            <div fxLayout=\"column\" class=\"control\">\n                <h4>Layout</h4>\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <span>Sticky Menu Toolbar</span>\n                    <mat-slide-toggle [checked]=\"settings.stickyMenuToolbar\" (change)=\"settings.stickyMenuToolbar = !settings.stickyMenuToolbar\" labelPosition=\"before\"></mat-slide-toggle>\n                </div>                 \n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <span>RTL</span>\n                    <mat-slide-toggle [checked]=\"settings.rtl\" (change)=\"settings.rtl = !settings.rtl\" labelPosition=\"before\"></mat-slide-toggle>\n                </div> \n            </div>\n\n            <div fxLayout=\"column\" class=\"control\">\n                <h4>Choose toolbar type</h4>\n                <mat-radio-group [(ngModel)]=\"toolbarTypeOption\" (change)=\"chooseToolbarType()\">\n                    <mat-radio-button *ngFor=\"let toolbarType of toolbarTypes\" [value]=\"toolbarType\">toolbar-{{toolbarType}}</mat-radio-button>\n                </mat-radio-group>\n            </div>\n            \n            <div fxLayout=\"column\" class=\"control\">\n                <h4>Choose header type</h4>\n                <mat-radio-group [(ngModel)]=\"headerTypeOption\" (change)=\"chooseHeaderType()\">\n                    <mat-radio-button *ngFor=\"let headerType of headerTypes\" [value]=\"headerType\">{{headerType}}</mat-radio-button>\n                </mat-radio-group>\n            </div>\n\n            <div fxLayout=\"column\" class=\"control\">\n                <h4>Choose theme skin</h4> \n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\"> \n                    <div class=\"skin-primary blue\" (click)=\"changeTheme('blue')\"></div>  \n                    <div class=\"skin-primary green\" (click)=\"changeTheme('green')\"></div> \n                    <div class=\"skin-primary red\" (click)=\"changeTheme('red')\"></div> \n                    <div class=\"skin-primary pink\" (click)=\"changeTheme('pink')\"></div> \n                    <div class=\"skin-primary purple\" (click)=\"changeTheme('purple')\"></div>\n                    <div class=\"skin-primary grey\" (click)=\"changeTheme('grey')\"></div>\n                    <div class=\"skin-primary orange-dark\" (click)=\"changeTheme('orange-dark')\"><div class=\"skin-secondary\"></div></div>\n                </div>\n            </div>\n\n            <div fxLayout=\"column\" class=\"control\">\n                <h4>Choose search panel variant</h4>\n                <mat-radio-group [(ngModel)]=\"searchPanelVariantOption\" (change)=\"chooseSearchPanelVariant()\">\n                    <mat-radio-button *ngFor=\"let searchPanelVariant of searchPanelVariants\" [value]=\"searchPanelVariant\">variant-{{searchPanelVariant}}</mat-radio-button>\n                </mat-radio-group>\n                <mat-slide-toggle [checked]=\"settings.searchOnBtnClick\" (change)=\"settings.searchOnBtnClick = !settings.searchOnBtnClick\" labelPosition=\"after\">Search On Button Click</mat-slide-toggle>\n            </div> \n\n        </div>\n    </mat-sidenav> -->\n    \n<!-- </mat-sidenav-container>  -->\n\n");

/***/ }),

/***/ 46417:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert-dialog/alert-dialog.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1 mat-dialog-title>\n    <div class=\"text-center\">\n        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">notification_important</mat-icon>\n    </div>\n</h1>\n  \n<div mat-dialog-content>\n    <p>{{message}}</p>\n</div>\n  \n<div mat-dialog-actions> \n    <button mat-raised-button color=\"primary\" (click)=\"close()\" class=\"m-auto\">{{ 'BTN.OK' | translate }}</button>\n</div>");

/***/ }),

/***/ 71248:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/chat/chat.component.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n    <div id=\"notification\">\n    <img src=\"assets/images/others/robot.png\" class=\"robot\">\n    <div class=\"notification\">\n    <span class=\"closebtn\">&times;</span>\n    Bienvenido! nuestro Chatbot esta para servirte.\n</div>\n  </div> \n<div id=\"chat-circle\" class=\"btn btn-raised\" (click)=\"openForm()\">\n    <div id=\"chat-overlay\"></div>\n    <i class=\"material-icons\">chat</i>\n</div>\n</div>\n\n<div class=\"chat-box\" id=\"chat-box\">\n    <!-- <i class=\"fa fa-comments\" aria-hidden=\"true\"></i> -->\n    <div class=\"chat-box-header\">\n        <img src=\"\\assets\\images\\agents\\carmela.png\" class=\"chat-photo\"><p>{{ 'ChatHeader' | translate}}</p>\n        <span class=\"chat-box-toggle\" (click)=\"closeForm()\"><i class=\"material-icons\">close</i></span>\n    </div>\n    <div class=\"chat-box-body\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n<ng-container *ngFor=\"let message of messages\">\n    <div class=\"message\" [ngClass]=\"{ 'from': message.author === 'bot', 'to': message.author === 'user' }\">\n        <span>{{ message.question }}</span>\n        <div *ngFor=\"let item of message.content | keyvalue\">\n            <span>{{ item.key }}<br></span>\n            <div *ngFor=\"let option of item.value | keyvalue\">\n                <button class=\"options\" role=\"button\" (click)=\"options(option.value)\">{{ option.value }}</button>\n            </div>\n            <!-- <span *ngIf=\"option.value.includes('+1 (678) 744-8007')\">+1 (678) 744-8007</span> -->\n        </div>\n    </div>\n</ng-container>\n</div>\n<!-- <div class=\"chat-input\">\n    <label *ngIf=\"messages.length == 0; else dialogInfo\" for=\"nameField\">Your message</label>\n    <input id=\"chat-input\" placeholder=\"Send a message...\" [(ngModel)]=\"value\" (keyup.enter)=\"sendMessage()\" type=\"text\">\n    <button class=\"chat-submit\" (click)=\"sendMessage()\"><i class=\"material-icons\">send</i></button>\n    <ng-template #dialogInfo>\n        <span [className]=\"'float-right'\">Total messages: {{messages.length}}</span>\n    </ng-template>\n</div> -->\n</div>");

/***/ }),

/***/ 75721:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/clients/clients.component.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"section mt-3\">\n  <div class=\"px-3\">\n      <div class=\"theme-container\">\n          <h1 class=\"section-title mb-3\">Our Clients</h1>\n          <p class=\"text-center\">Sed magna ipsum, ultricies sed sagittis nec, scelerisque eu libero. Donec at metus ac eros accumsan semper.</p>\n\n          <div class=\"clients-carousel\"> \n              <div class=\"swiper-container h-100\" [swiper]=\"config\"> \n                  <div class=\"swiper-wrapper h-100\">      \n                      <div *ngFor=\"let client of clients\" class=\"swiper-slide\">\n                          <div class=\"client-item\"> \n                              <img [attr.data-src]=\"client.image\" class=\"swiper-lazy\"> \n                              <div class=\"swiper-lazy-preloader\"></div>\n                          </div>\n                      </div>\n                  </div> \n              </div>\n          </div>\n              \n      </div>\n  </div>   \n</div>");

/***/ }),

/***/ 5206:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/comments/comments.component.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-card class=\"p-5 mt-5\">\n    <mat-card-header fxLayoutAlign=\"center center\"> \n        <mat-card-title class=\"uppercase\">Leave a Reply</mat-card-title> \n    </mat-card-header>                \n    <div class=\"divider\"></div>\n    <mat-list class=\"reviews mt-3\">\n        <mat-list-item *ngFor=\"let review of reviews\" class=\"h-100\">\n            <img matListAvatar [src]=\"review.avatar\" alt=\"image\" class=\"review-author\">\n            <p matLine fxLayoutAlign=\"start center\">\n                <span class=\"fw-500\">{{review.author}}</span> \n                <mat-icon class=\"text-muted px-1\" [matTooltip]=\"review.tooltip\" matTooltipPosition=\"after\">{{review.icon}}</mat-icon>\n            </p>\n            <p matLine class=\"text-muted\"><small>{{review.date}}</small></p>\n            <p matLine class=\"text\">{{review.text}}</p>\n        </mat-list-item>\n    </mat-list>                    \n    <h3 class=\"mt-3\">LEAVE YOUR REVIEW</h3>\n    <div class=\"divider\"></div>\n    <p class=\"mt-3 text-muted\">Your email address will not be published. Required fields are marked *</p>\n    <h3 fxLayoutAlign=\"start center\" class=\"my-3 text-muted\">\n        <span>Your Rating:</span>\n        <button *ngFor=\"let rating of ratings\" mat-icon-button [matTooltip]=\"rating.title\" matTooltipPosition=\"above\" (click)=\"rate(rating)\">\n          <mat-icon class=\"mat-icon-lg\" [class.primary-color]=\"rating.selected\">{{rating.icon}}</mat-icon>\n        </button>\n    </h3>\n    <form [formGroup]=\"commentForm\" (ngSubmit)=\"onCommentFormSubmit(commentForm.value)\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" class=\"comment-form\">\n        <div fxFlex=\"100\" class=\"p-2\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Your review</mat-label>\n                <textarea matInput placeholder=\"Your review\" formControlName=\"review\" required rows=\"5\"></textarea>\n                <mat-error *ngIf=\"commentForm.controls.review.errors?.required\">Review is required</mat-error>\n            </mat-form-field>\n        </div>\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"49\" class=\"p-2\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Your name</mat-label>\n                <input matInput placeholder=\"Your name\" formControlName=\"name\" required>\n                <mat-error *ngIf=\"commentForm.controls.name.errors?.required\">Name is required</mat-error>\n                <mat-error *ngIf=\"commentForm.controls.name.hasError('minlength')\">Name isn't long enough, minimum of 4 characters</mat-error>\n            </mat-form-field> \n        </div>\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"49\" class=\"p-2\">\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Your email</mat-label>\n                <input matInput placeholder=\"Your email\" formControlName=\"email\" required>\n                <mat-error *ngIf=\"commentForm.controls.email.errors?.required\">Email is required</mat-error>\n                <mat-error *ngIf=\"commentForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\n            </mat-form-field> \n        </div>\n        <div fxFlex=\"100\" class=\"text-center w-100\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Submit review</button>\n        </div>\n    </form>\n</mat-card>");

/***/ }),

/***/ 93982:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/compare-overview/compare-overview.component.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-toolbar fxLayoutAlign=\"space-between center\">      \n  <a routerLink=\"/compare\" (click)=\"hideSheet(true)\" mat-raised-button color=\"primary\">Compare - {{ properties.length }}</a>        \n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n      <button mat-icon-button (click)=\"appService.Data.compareList.length = 0; hideSheet(false)\" matTooltip=\"Clear Compare List\">\n        <mat-icon color=\"warn\" class=\"mat-icon-lg\">cancel</mat-icon> \n      </button>\n      <button mat-icon-button (click)=\"hideSheet(false)\" matTooltip=\"Hide\">\n        <mat-icon color=\"primary\" class=\"mat-icon-lg\">arrow_drop_down_circle</mat-icon> \n      </button>\n  </div>\n</mat-toolbar>\n<mat-nav-list>\n  <a mat-list-item *ngFor=\"let property of properties\" [routerLink]=\"['/properties', property.id]\" (click)=\"hideSheet(true)\">\n    <h3 mat-line class=\"fw-500\">{{property.title}}</h3>\n    <i mat-line><mat-icon class=\"mat-icon-sm text-muted\">location_on</mat-icon><small>{{property.formattedAddress}}</small></i>\n    <span *ngIf=\"settings.currency == 'USD'\" class=\"primary-color price fw-500 mx-2\">\n        <span *ngIf=\"property.priceDollar.sale\">{{property.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\n        <span *ngIf=\"property.priceDollar.rent\">{{property.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}} /month</span>\n    </span>\n    <span *ngIf=\"settings.currency == 'EUR'\" class=\"primary-color price fw-500 mx-2\">\n        <span *ngIf=\"property.priceEuro.sale\">{{property.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\n        <span *ngIf=\"property.priceEuro.rent\">{{property.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /month</span>\n    </span>  \n    <button mat-icon-button color=\"warn\" class=\"remove\" (click)=\"remove(property, $event)\" matTooltip=\"Remove\" matTooltipPosition=\"after\">\n        <mat-icon class=\"mat-icon-sm\">close</mat-icon>\n    </button>\n  </a>\n</mat-nav-list>");

/***/ }),

/***/ 45290:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/confirm-dialog/confirm-dialog.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div mat-dialog-title> \n    <div class=\"text-center\"> \n        <h4 class=\"mb-1\">{{title}}</h4>\n        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">warning</mat-icon>\n    </div> \n</div>\n  \n<div mat-dialog-content>\n    <p>{{message}}</p>\n</div>\n  \n<div mat-dialog-actions fxLayoutAlign=\"space-between center\" class=\"pb-4\">\n    <button mat-button (click)=\"onDismiss()\">{{ 'BTN.NO' | translate }}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"onConfirm()\">{{ 'BTN.YES' | translate }}</button>\n</div>");

/***/ }),

/***/ 24589:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/contact-form/contact-form.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<section class=\"\">\n  <div class=\"container\">\n    <form [formGroup]=\"contactForm\" class=\"\" id=\"contact\">\n      <h1 class=\"\">Contact Us</h1>\n      <h4>\n        Leave us your information so We can contact you and find together your\n        new home\n      </h4>\n\n      <div class=\"\">\n        <label for=\"name\" class=\"\">Name</label>\n        <input\n          matInput\n          #name\n          formControlName=\"name\"\n          type=\"name\"\n          id=\"name\"\n          name=\"name\"\n          class=\"\"\n          placeholder=\"Your name\"\n          required\n        />\n      </div>\n\n      <div class=\"\">\n        <label for=\"email\" class=\"\">Email</label>\n        <input\n          matInput\n          #email\n          formControlName=\"email\"\n          type=\"email\"\n          id=\"email\"\n          name=\"email\"\n          class=\"\"\n          placeholder=\"Your Email Address\"\n          required\n        />\n      </div>\n\n      <div class=\"\">\n        <label for=\"tel\" class=\"\">Phone</label>\n        <input\n          matInput\n          #tel\n          formControlName=\"tel\"\n          type=\"tel\"\n          id=\"tel\"\n          name=\"tel\"\n          class=\"\"\n          placeholder=\"Your Phone Number\"\n          required\n        />\n      </div>\n\n      <div class=\"\">\n        <label for=\"message\" class=\"\">Message</label>\n        <textarea\n          matInput\n          #message\n          formControlName=\"message\"\n          id=\"message\"\n          name=\"message\"\n          class=\"\"\n          placeholder=\"Type your message here....\"\n        ></textarea>\n      </div>\n\n      <!-- AQUI EL CODIGO ACTUALIZADO DE LA CASILLA DE VERIFICACIÓN -->\n      <div class=\"privacy-checkbox\">\n        <label>\n          <input type=\"checkbox\" name=\"agree\" required />\n          <span class=\"text-muted small-text ml-2\"\n            >By checking this box, I consent to receive conversational SMS from\n            Mi Hogar en Atlanta, reply STOP to opt-out; reply HELP for support;\n            Message and data rates may apply; Messaging frequency may vary.\n            Visit\n            <a class=\"primary-text\" href=\"privacy-policy\" target=\"_blank\"\n              >here</a\n            >\n            to see our privacy policy and\n            <a\n              class=\"primary-text\"\n              href=\"terms-conditions\"\n              target=\"_blank\"\n              >here</a\n            >\n            for our Terms of Service.</span\n          >\n        </label>\n      </div>\n\n      <button mat-raised-button type=\"submit\" class=\"\" (click)=\"sendEmail()\">\n        Send\n      </button>\n    </form>\n  </div>\n</section>\n");

/***/ }),

/***/ 6905:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/dialog-header-controls/dialog-header-controls.component.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n    <button *ngIf=\"showFullscreenIcon\" mat-icon-button type=\"button\" (click)=\"toggleFullScreen()\">\n        <mat-icon>{{(isFullScreen)? 'fullscreen_exit' : 'fullscreen'}}</mat-icon>\n    </button>\n    <button mat-icon-button type=\"button\" (click)=\"close()\">\n        <mat-icon>cancel</mat-icon>\n    </button>\n</div>");

/***/ }),

/***/ 89073:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/get-in-touch/get-in-touch.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"px-3\">\n    <div class=\"theme-container\"> \n\n        <div class=\"get-in-touch bg-primary\" ngClass.lt-md=\"mt-3\">\n            \n            <img src=\"assets/images/others/operator.png\" alt=\"operator\" fxShow=\"false\" fxShow.gt-xs>\n\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"content\" ngClass.xs=\"p-0\"> \n                <div fxLayout=\"column\" class=\"p-3\">\n                    <h2>BUSCAS VENDER TU CASA?</h2>\n                    <p class=\"mb-0\"></p>\n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-3\">\n                    <mat-icon class=\"mat-icon-xlg mx-2\">call</mat-icon>\n                    <div fxLayout=\"column\">               \n                        <p class=\"mb-0\">LLAMA AHORA</p>\n                        <h2 class=\"ws-nowrap\">+1 (678) 744-8007</h2>\n                    </div>\n                </div>\n                <div class=\"p-3\">\n                    <a mat-flat-button routerLink=\"/contact\" class=\"mx-3 uppercase\">contactanos</a>\n                </div>\n            </div> \n\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ 2440:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-carousel/header-carousel.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"header-carousel\" [class.offset-bottom]=\"contentOffsetToTop\" [class.fullscreen]=\"fullscreen\" [ngClass]=\"'toolbar-'+settings.toolbar\">\n    <div *ngIf=\"slides.length > 1\"  class=\"swiper-container h-100\" [swiper]=\"config\" (indexChange)=\"onIndexChange($event)\">\n        <div class=\"swiper-wrapper h-100\">      \n            <div *ngFor=\"let slide of slides;\" class=\"swiper-slide\">\n                <div [attr.data-background]=\"slide.image\" class=\"slide-item swiper-lazy\">\n                    <div class=\"swiper-lazy-preloader\"></div>\n                </div>\n            </div>\n        </div>     \n        <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\n        <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\n      \n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"slide-info\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\">\n            <mat-card class=\"p-4\">\n                <h1 class=\"slide-title\">{{currentSlide.title}}</h1>\n                <p class=\"location\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n                    <mat-icon color=\"primary\" ngClass.gt-sm=\"mat-icon-lg\">location_on</mat-icon>\n                    <span class=\"px-1\">{{currentSlide.location}}</span>\n                </p> \n                <button mat-raised-button color=\"primary\" class=\"price\">                        \n                    <span *ngIf=\"settings.currency == 'USD'\" class=\"price\">\n                        <span *ngIf=\"currentSlide.priceDollar.sale\">{{currentSlide.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\n                        <span *ngIf=\"currentSlide.priceDollar.rent\">{{currentSlide.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}} /month</span>\n                    </span>\n                    <!-- <span *ngIf=\"settings.currency == 'EUR'\" class=\"price\">\n                        <span *ngIf=\"currentSlide.priceEuro.sale\">{{currentSlide.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\n                        <span *ngIf=\"currentSlide.priceEuro.rent\">{{currentSlide.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /month</span>\n                    </span> -->\n                </button>                  \n            </mat-card>  \n        </div> \n    </div>\n</div>");

/***/ }),

/***/ 7786:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-image/header-image.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"header-image-wrapper\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\" [class.fullscreen]=\"fullscreen\" [ngClass]=\"'toolbar-'+settings.toolbar\">\n    <div class=\"bg\" [style.background-image]=\"bgImage\" [class.bg-anime]=\"bgImageAnimate\"></div>\n    <div class=\"mask\"></div>\n   \n    <div class=\"header-image-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\" [class.offset-bottom]=\"contentOffsetToTop\" [class.home-page]=\"isHomePage\" [style.min-height.px]=\"contentMinHeight\">\n        <h1 *ngIf=\"title\" class=\"title\">{{title}}</h1>\n        <p *ngIf=\"desc\" class=\"desc\">{{desc}}</p>\n        <div *ngIf=\"isHomePage\" ngClass.gt-xs=\"mt-4\" ngClass.xs=\"mt-3\">\n          <a mat-raised-button routerLink=\"/about\">{{ 'NAV.ABOUT_US' | translate}}</a>\n          <a mat-raised-button routerLink=\"/contact\">{{ 'NAV.CONTACT' | translate }}</a>      \n        </div>\n    </div>\n  </div>");

/***/ }),

/***/ 20557:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-map/header-map.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"map-wrapper\" [class.fullscreen]=\"fullscreen\" [ngClass]=\"'toolbar-'+settings.toolbar\">  \n\n    <agm-map [latitude]=\"lat\" \n            [longitude]=\"lng\" \n            [zoom]=\"zoom\" \n            [scrollwheel]=\"false\" \n            [mapTypeControl]=\"false\" \n            [fullscreenControl]=\"true\"\n            [streetViewControl]=\"true\"\n            [styles]=\"(settings.theme == 'orange-dark') ? mapStyles : null\" \n            (mapReady)=\"onMapReady($event)\"\n            (mapClick)=\"onMapClick($event)\"\n            (zoomChange)=\"onZoomChange($event)\"> \n        <agm-marker *ngFor=\"let location of locations; let i = index\"  \n                    [latitude]=\"location.lat\" \n                    [longitude]=\"location.lng\"\n                    [animation]=\"markerAnimation\"\n                    (markerClick)=\"onMarkerClick($event, location.propertyId)\">  \n                    <agm-snazzy-info-window [closeWhenOthersOpen]=\"true\" wrapperClass=\"map-info-window\">\n                        <ng-template>\n                            <a *ngIf=\"property\" [routerLink]=\"['/properties', property.id]\" class=\"text-center\">\n                                <img [src]=\"property.gallery[0].small\" alt=\"image\" class=\"d-block w-100\"> \n                                <p class=\"my-1\">{{property.title}}</p> \n                                <p *ngIf=\"settings.currency == 'USD'\" class=\"fw-500 my-1\">\n                                    <span *ngIf=\"property.priceDollar.sale\">{{property.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\n                                    <span *ngIf=\"property.priceDollar.rent\">{{property.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}} /month</span>\n                                </p>\n                                <p *ngIf=\"settings.currency == 'EUR'\" class=\"fw-500 my-1\">\n                                    <span *ngIf=\"property.priceEuro.sale\">{{property.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\n                                    <span *ngIf=\"property.priceEuro.rent\">{{property.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /month</span>\n                                </p>\n                            </a>\n                            <div *ngIf=\"!property\" class=\"p-3\">\n                                <mat-spinner color=\"warn\"></mat-spinner>\n                            </div>\n                        </ng-template>\n                    </agm-snazzy-info-window> \n        </agm-marker>  \n    </agm-map> \n\n</div>\n");

/***/ }),

/***/ 24705:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-video/header-video.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"header-video-wrapper\" [class.fullscreen]=\"fullscreen\" [ngClass]=\"'toolbar-'+settings.toolbar\"> \n    <video id=\"bgVideo\" #bgvideos autoplay muted loop [src]=\"backgroundVideo\"></video> \n    <div class=\"mask\"></div> \n    <div class=\"header-video-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\" [class.offset-bottom]=\"contentOffsetToTop\" [class.home-page]=\"isHomePage\" [style.min-height.px]=\"contentMinHeight\">\n        <h1 *ngIf=\"title\" class=\"title\">{{title}}</h1>\n        <p *ngIf=\"desc\" class=\"desc\">{{desc}}</p>\n        <div *ngIf=\"isHomePage\" ngClass.gt-xs=\"mt-4\" ngClass.xs=\"mt-3\">\n            <a mat-raised-button routerLink=\"/about\">{{ 'NAV.ABOUT_US' | translate}}</a>\n            <a mat-raised-button routerLink=\"/contact\">{{ 'NAV.CONTACT' | translate }}</a>       \n        </div>\n    </div>\n</div>");

/***/ }),

/***/ 49147:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/load-more/load-more.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"load-more\">\n  <div *ngIf=\"!settings.loadMore.complete\">\n      <button *ngIf=\"!settings.loadMore.start\" mat-raised-button color=\"primary\" (click)=\"startLoad()\" class=\"uppercase\">{{ 'LOAD_MORE' | translate}}</button>\n      <mat-spinner *ngIf=\"settings.loadMore.start\"></mat-spinner> \n  </div>\n  <mat-chip-list *ngIf=\"settings.loadMore.complete\">\n      <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\n          {{settings.loadMore.result}} {{ 'LOAD_RESULTS' | translate}}\n      </mat-chip> \n  </mat-chip-list>\n</div>\n");

/***/ }),

/***/ 87230:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/logo/logo.component.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"logo\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"fill-rule:evenodd;\" width=\"350\" height=\"65\" viewBox=\"-500 350 3000 1000\">\n    <!-- <path d=\"M771 322.2l686.37 0c6.63,0 12.05,5.43 12.05,12.06l0 0c0,6.63 -5.42,12.06 -12.05,12.06l-686.37 -0.01c-6.63,0.01 -12.06,-5.42 -12.06,-12.05l0 0c0,-6.63 5.43,-12.06 12.06,-12.06zm943.37 263.22c0,-6.24 -5.13,-11.37 -11.37,-11.37 -6.24,0 -11.37,5.13 -11.37,11.37l0 99.19c0,6.24 5.13,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -49.48c0,-21.4 16.94,-38.34 38.34,-38.34 5.35,0 10.26,0.89 14.71,2.67 2.01,0.89 3.57,1.34 4.9,1.34 6.24,0 11.37,-5.13 11.37,-11.59 0,-12.26 -18.27,-15.16 -30.98,-15.16 -14.48,0 -27.41,4.68 -38.34,13.6l0 -2.23zm106.54 38.34c4.68,-16.05 20.06,-26.97 36.55,-26.97 16.72,0 32.1,10.92 36.78,26.97l-73.33 0zm68.43 37.89c-2.9,0.22 -5.35,1.12 -7.58,2.9 -6.91,5.57 -14.49,8.69 -24.3,8.69 -16.72,0 -31.87,-10.92 -36.55,-26.97l86.26 0c6.24,0 11.37,-4.68 11.37,-11.14 0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 15.38,0 28.75,-4.9 39.9,-14.71 2.23,-2.45 3.34,-5.13 3.34,-8.25 0,-6.47 -4.9,-11.37 -11.37,-11.37zm107.44 -64.86c21.4,0 38.34,17.39 38.34,38.34 0,20.73 -16.94,38.11 -38.34,38.11 -21.17,0 -38.11,-17.39 -38.11,-38.11 0,-20.95 16.94,-38.34 38.11,-38.34zm38.34 87.82c0,6.24 5.13,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -49.48c0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 14.49,0 27.42,-4.68 38.34,-13.6l0 2.23zm39.01 0c0,6.24 4.91,11.37 11.14,11.37l16.72 0c6.24,0 11.37,-5.13 11.37,-11.37 0,-6.24 -5.13,-11.37 -11.37,-11.37l-5.13 0 0 -139.98c0,-6.24 -4.9,-11.37 -11.37,-11.37 -6.46,0 -11.37,5.13 -11.37,11.37l0 151.34zm142.88 -60.85c4.68,-16.05 20.06,-26.97 36.55,-26.97 16.72,0 32.1,10.92 36.78,26.97l-73.33 0zm68.43 37.89c-2.9,0.22 -5.35,1.12 -7.58,2.9 -6.91,5.57 -14.49,8.69 -24.3,8.69 -16.72,0 -31.87,-10.92 -36.55,-26.97l86.26 0c6.24,0 11.37,-4.68 11.37,-11.14 0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 15.38,0 28.75,-4.9 39.9,-14.71 2.23,-2.45 3.34,-5.13 3.34,-8.25 0,-6.47 -4.9,-11.37 -11.37,-11.37zm119.7 -6.91c2,0.66 2.9,2.23 2.9,4.23 0,1.78 -0.45,3.34 -1.56,4.46 -6.47,6.46 -14.71,9.8 -25.19,9.8 -10.7,0 -19.61,-3.79 -26.97,-11.14 -2.9,-2.67 -6.02,-6.24 -10.7,-6.24 -6.47,0 -11.37,4.9 -11.37,11.37 0,2.67 0.89,5.13 2.45,7.14 12.7,14.49 28.31,21.62 46.58,21.62 23.85,0 49.49,-14.04 49.49,-36.11 0,-7.58 -2.67,-14.04 -8.25,-19.61l0.22 0c-2.45,-2.67 -7.36,-5.35 -14.49,-8.25l-50.82 -16.72c-2,-0.67 -2.9,-2.01 -2.9,-4.01 0,-2 0.67,-3.79 1.78,-4.9 6.24,-6.47 14.49,-9.59 24.96,-9.59 10.7,0 19.62,3.79 26.97,11.14 3.34,2.9 6.24,6.24 10.7,6.24 6.47,0 11.37,-4.9 11.37,-11.37 0,-2.67 -0.67,-4.9 -2.23,-6.91 -13.15,-14.48 -28.75,-21.84 -46.81,-21.84 -23.85,0 -49.48,14.04 -49.48,36.11 0,7.58 2.67,14.27 8.25,19.84l-0.22 0c2.9,2.67 7.58,5.35 14.49,8.03l50.82 16.72zm53.05 -80.69c-6.24,0 -11.14,5.13 -11.14,11.37 0,6.24 4.9,11.37 11.14,11.37l5.13 0 0 54.83c0,29.64 14.94,44.35 44.58,44.35 6.24,0 11.14,-5.13 11.14,-11.37 0,-6.24 -4.91,-11.37 -11.14,-11.37 -14.49,0 -21.85,-7.13 -21.85,-21.62l0 -54.83 13.6 0c6.24,0 11.14,-5.13 11.14,-11.37 0,-6.24 -4.9,-11.37 -11.14,-11.37l-13.6 0 0 -40.79c0,-6.24 -5.13,-11.37 -11.37,-11.37 -6.24,0 -11.37,5.13 -11.37,11.37l0 40.79 -5.13 0zm124.15 22.74c21.4,0 38.34,17.39 38.34,38.34 0,20.73 -16.94,38.11 -38.34,38.11 -21.17,0 -38.11,-17.39 -38.11,-38.11 0,-20.95 16.94,-38.34 38.11,-38.34zm38.34 87.82c0,6.24 5.13,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -49.48c0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 14.49,0 27.42,-4.68 38.34,-13.6l0 2.23zm50.82 -110.56c-6.24,0 -11.14,5.13 -11.14,11.37 0,6.24 4.9,11.37 11.14,11.37l5.13 0 0 54.83c0,29.64 14.94,44.35 44.58,44.35 6.24,0 11.14,-5.13 11.14,-11.37 0,-6.24 -4.91,-11.37 -11.14,-11.37 -14.49,0 -21.85,-7.13 -21.85,-21.62l0 -54.83 13.6 0c6.24,0 11.14,-5.13 11.14,-11.37 0,-6.24 -4.9,-11.37 -11.14,-11.37l-13.6 0 0 -40.79c0,-6.24 -5.13,-11.37 -11.37,-11.37 -6.24,0 -11.37,5.13 -11.37,11.37l0 40.79 -5.13 0zm87.6 49.71c4.68,-16.05 20.06,-26.97 36.55,-26.97 16.72,0 32.1,10.92 36.78,26.97l-73.33 0zm68.43 37.89c-2.9,0.22 -5.35,1.12 -7.58,2.9 -6.91,5.57 -14.49,8.69 -24.3,8.69 -16.72,0 -31.87,-10.92 -36.55,-26.97l86.26 0c6.24,0 11.37,-4.68 11.37,-11.14 0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 15.38,0 28.75,-4.9 39.9,-14.71 2.23,-2.45 3.34,-5.13 3.34,-8.25 0,-6.47 -4.9,-11.37 -11.37,-11.37zm204.62 -0.22c-2.67,0.22 -5.13,0.89 -7.13,2.45 -7.36,6.24 -15.16,9.36 -24.75,9.36 -21.4,0 -38.34,-17.16 -38.34,-38.11 0,-21.4 16.94,-38.34 38.34,-38.34 9.59,0 17.39,3.34 24.75,9.59 2.23,1.56 4.68,2.45 7.58,2.45 6.47,0 11.14,-4.9 11.14,-11.37 0,-3.34 -1.34,-6.24 -3.79,-8.47 -11.14,-10.03 -24.29,-14.94 -39.68,-14.94 -16.94,0 -31.43,6.02 -43.24,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.24,17.83 15.16,0 28.31,-4.9 39.68,-14.71 2.45,-2.45 3.57,-5.35 3.57,-8.47 0,-6.46 -4.9,-11.37 -11.37,-11.37zm151.13 -26.3c-0.22,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 16.72,0 31.21,-6.02 43.24,-17.83 11.81,-11.81 17.83,-26.07 17.83,-43.01zm-61.08 -38.34c21.4,0 38.34,17.39 38.34,38.34 0,20.73 -16.94,38.11 -38.34,38.11 -21.17,0 -38.11,-17.39 -38.11,-38.11 0,-20.95 16.94,-38.34 38.11,-38.34zm250.54 25.86c0,-26.53 -22.07,-48.59 -48.59,-48.59 -14.49,0 -26.97,5.8 -37,17.39 -9.58,-11.59 -22.74,-17.39 -37.22,-17.39 -10.03,0 -18.72,2.67 -26.52,7.8 -1.56,-4.68 -5.57,-7.8 -10.7,-7.8 -6.24,0 -11.37,5.13 -11.37,11.37l0 99.19c0,6.24 5.13,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -61.96c0,-14.27 11.59,-25.86 25.85,-25.86 14.27,0 25.63,11.81 25.63,25.86l0 61.96c0,6.24 5.13,11.37 11.59,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -61.96c0,-14.04 11.37,-25.86 25.63,-25.86 14.71,0 25.86,11.81 25.86,25.86l0 61.96c0,6.24 5.13,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -61.96zm42.13 12.48c0,-20.95 16.94,-38.34 38.11,-38.34 21.4,0 38.34,17.39 38.34,38.34 0,20.73 -16.94,38.11 -38.34,38.11 -21.17,0 -38.11,-17.39 -38.11,-38.11zm38.11 60.85c16.94,0 30.98,-6.02 43.24,-17.83 11.81,-11.81 17.83,-26.07 17.83,-43.01 0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24l0 101.86c0,6.47 4.9,11.15 11.37,11.15 6.24,0 11.37,-4.68 11.37,-11.15l0 -54.38c10.92,8.92 23.62,13.37 38.11,13.37zm139.31 -99.19c21.4,0 38.34,17.39 38.34,38.34 0,20.73 -16.94,38.11 -38.34,38.11 -21.17,0 -38.11,-17.39 -38.11,-38.11 0,-20.95 16.94,-38.34 38.11,-38.34zm38.34 87.82c0,6.24 5.13,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -49.48c0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 14.49,0 27.42,-4.68 38.34,-13.6l0 2.23zm62.86 -99.41c0,-6.02 -5.13,-11.14 -11.37,-11.14 -6.47,0 -11.37,5.13 -11.37,11.37l0 99.19c0,6.24 4.9,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -53.72c0,-18.72 15.38,-34.1 33.88,-34.1 18.72,0 34.1,15.61 34.1,34.1l0 53.72c0,6.24 5.13,11.37 11.59,11.37 6.24,0 11.14,-5.13 11.14,-11.37l0 -53.72c0,-31.43 -26.08,-56.84 -56.84,-56.84 -12.93,0 -24.3,3.79 -33.88,11.14zm128.17 146.67c-0.67,1.56 -1.12,3.12 -1.12,4.91 0,6.46 4.9,11.37 11.37,11.37 4.68,0 8.92,-3.12 10.92,-7.58l62.41 -150.01c0.89,-1.78 1.34,-3.56 1.34,-5.13 0,-6.24 -5.13,-11.37 -11.59,-11.37 -6.02,0 -8.92,2.9 -10.48,7.36l-30.76 73.11 -30.54 -72.89c-2,-5.13 -6.24,-7.58 -10.7,-7.58 -6.24,0 -11.37,5.13 -11.37,11.37 0,1.79 0.45,3.57 1.12,5.13l39.23 94.06 -19.84 47.25zm-1879.08 -645.92c2.96,-5.54 7.94,-9.42 14.96,-11.63 7.02,-2.22 15.88,-3.33 26.59,-3.33 10.71,0 19.21,0.93 25.48,2.77 6.28,1.85 11.08,4.06 14.4,6.65 3.33,2.59 5.91,6.27 7.76,11.08 1.85,6.27 2.77,15.88 2.77,28.81l0 307.43c0,8.49 -0.28,14.86 -0.83,19.11 -0.56,4.24 -2.31,9.14 -5.26,14.69 -5.17,9.96 -19.57,14.95 -43.21,14.95 -25.85,0 -40.99,-6.83 -45.42,-20.49 -2.22,-6.28 -3.32,-15.88 -3.32,-28.8l0 -112.45 -146.8 0 0 113c0,8.49 -0.28,14.86 -0.83,19.11 -0.55,4.24 -2.3,9.14 -5.26,14.69 -5.17,9.96 -19.57,14.95 -43.21,14.95 -25.85,0 -40.99,-6.83 -45.42,-20.49 -2.22,-6.28 -3.32,-15.88 -3.32,-28.8l0 -307.44c0,-8.49 0.28,-14.86 0.83,-19.11 0.56,-4.25 2.31,-9.14 5.26,-14.68 5.17,-9.97 19.58,-14.96 43.21,-14.96 25.85,0 41.17,6.84 45.98,20.5 1.85,6.27 2.77,15.88 2.77,28.81l0 113 146.8 0 0 -113.56c0,-8.49 0.27,-14.86 0.83,-19.11 0.56,-4.25 2.31,-9.14 5.26,-14.68zm127.96 245.39c0,-44.32 15.51,-80.87 46.53,-109.68 31.02,-28.8 66.46,-43.21 106.35,-43.21 39.89,0 75.16,14.31 105.8,42.94 30.66,28.61 45.98,65.07 45.98,109.39 0,30.65 -7.94,57.88 -23.82,81.7 -15.88,23.82 -35.17,41.36 -57.89,52.63 -22.7,11.26 -46.25,16.89 -70.62,16.89 -24.38,0 -48.02,-6 -70.91,-18.01 -22.89,-12 -42.19,-29.72 -57.88,-53.17 -15.69,-23.45 -23.54,-49.94 -23.54,-79.49zm115.78 39.6c11.81,9.05 23.82,13.57 36,13.57 12.19,0 24.38,-4.62 36.56,-13.85 12.18,-9.23 18.28,-22.89 18.28,-40.99 0,-18.09 -5.72,-31.58 -17.17,-40.44 -11.44,-8.86 -23.81,-13.3 -37.11,-13.3 -13.3,0 -25.67,4.62 -37.12,13.85 -11.45,9.23 -17.17,22.8 -17.17,40.71 0,17.92 5.91,31.39 17.72,40.44zm354.52 104.97c-37.3,0 -68.22,-14.13 -92.78,-42.38 -24.55,-28.25 -36.83,-62.69 -36.83,-103.31l0 -96.94c0,-8.86 0.28,-15.33 0.83,-19.39 0.56,-4.06 2.11,-8.86 4.72,-14.4 5.17,-9.97 19.56,-14.95 43.2,-14.95 25.85,0 40.99,7.02 45.42,21.05 2.22,5.91 3.32,15.33 3.32,28.25l0 96.94c0,15.14 4.34,26.96 13.02,35.45 8.68,8.49 20.31,12.74 34.9,12.74 14.59,0 26.41,-4.43 35.45,-13.3 9.05,-8.86 13.57,-20.49 13.57,-34.89l0 -98.05c0,-8.49 0.28,-14.86 0.83,-19.1 0.55,-4.24 2.3,-9.14 5.26,-14.68 4.8,-9.6 19.02,-14.4 42.65,-14.4 23.27,0 37.49,4.98 42.66,14.95 2.59,5.54 4.16,10.44 4.71,14.68 0.56,4.24 0.83,10.62 0.83,19.11l0 196.1c0,8.12 -0.28,14.3 -0.83,18.55 -0.55,4.25 -2.3,8.95 -5.26,14.12 -5.55,9.6 -19.76,14.4 -42.65,14.4 -22.53,0 -36.37,-4.43 -41.55,-13.29 -3.69,-6.28 -5.53,-13.85 -5.53,-22.71 -1.48,2.59 -4.8,6.28 -9.98,11.08 -5.16,4.8 -10.14,8.86 -14.95,12.18 -12.56,8.13 -26.22,12.19 -40.99,12.19zm208.28 -24.93c-7.02,-4.43 -10.52,-11.44 -10.52,-21.05 0,-9.6 7.02,-24.19 21.05,-43.76 4.06,-6.28 10.62,-9.42 19.66,-9.42 9.05,0 21.32,4.53 36.84,13.57 15.51,9.05 29.54,13.57 42.1,13.57 22.52,0 33.79,-4.43 33.79,-13.3 0,-7.02 -12.37,-12.18 -37.11,-15.51 -23.27,-3.32 -46.35,-12 -69.24,-26.04 -10.73,-6.65 -19.58,-17.08 -26.59,-31.3 -7.02,-14.22 -10.52,-31.11 -10.52,-50.68 0,-58.34 40.07,-87.52 120.2,-87.52 26.22,0 53.18,6.28 80.88,18.84 12.92,5.91 19.39,13.3 19.39,22.16 0,8.86 -4.06,19.76 -12.18,32.68 -8.13,12.93 -16.43,19.39 -24.93,19.39 -4.43,0 -12.65,-2.77 -24.65,-8.31 -12.01,-5.54 -25.02,-8.31 -39.05,-8.31 -21.78,0 -32.68,4.06 -32.68,12.19 0,11.08 12.56,18.27 37.67,21.6 24.36,2.58 48,9.6 70.9,21.05 10.71,5.17 19.66,14.12 26.86,26.87 7.2,12.74 10.8,28.71 10.8,47.91 0,19.21 -3.6,35.55 -10.8,49.02 -7.2,13.48 -17.27,23.54 -30.19,30.19 -23.63,11.44 -53.26,17.17 -88.91,17.17 -35.63,0 -69.88,-10.34 -102.76,-31.02zm550.06 -154.82c0,22.71 -5.63,39.52 -16.89,50.41 -11.27,10.89 -23.73,16.34 -37.39,16.34l-131.28 0c0,10.34 6.1,19.02 18.28,26.04 12.19,7.02 24.38,10.53 36.56,10.53 21.42,0 38.22,-2.22 50.41,-6.65l6.1 -2.22c8.86,-4.06 16.25,-6.09 22.16,-6.09 11.81,0 21.97,8.31 30.46,24.93 4.8,9.97 7.2,18.47 7.2,25.48 0,32.86 -39.33,49.29 -117.99,49.29 -27.32,0 -51.61,-4.7 -72.84,-14.11 -21.23,-9.42 -37.76,-21.89 -49.58,-37.39 -23.26,-29.91 -34.9,-63.33 -34.9,-100.26 0,-46.53 15.05,-83.74 45.15,-111.61 30.09,-27.88 67.67,-41.82 112.73,-41.82 51.33,0 89,18.09 113,54.28 12.56,19.2 18.83,40.16 18.83,62.87zm-116.88 16.34c14.03,0 21.05,-5.9 21.05,-17.72 0,-8.49 -3.23,-15.33 -9.7,-20.5 -6.46,-5.17 -15.69,-7.75 -27.69,-7.75 -12.01,0 -23.91,4.89 -35.73,14.67 -11.81,9.79 -17.72,20.22 -17.72,31.3l69.8 0zm326.82 -39.33c56.5,54.28 96.57,95.09 120.2,122.42 12.19,13.66 18.27,25.2 18.27,34.62 0,9.42 -7.38,20.49 -22.14,33.23 -14.78,12.74 -26.88,19.11 -36.29,19.11 -9.41,0 -20.77,-7.76 -34.07,-23.26l-121.87 -139.04 0 108.01c0,8.87 -0.28,15.33 -0.83,19.39 -0.55,4.06 -2.3,8.86 -5.26,14.4 -5.17,9.97 -19.57,14.96 -43.21,14.96 -25.85,0 -40.99,-7.02 -45.42,-21.05 -2.22,-5.91 -3.32,-15.32 -3.32,-28.25l0 -307.99c0,-8.49 0.28,-14.86 0.83,-19.11 0.56,-4.25 2.31,-9.14 5.26,-14.68 5.17,-9.97 19.58,-14.96 43.21,-14.96 25.85,0 41.17,6.84 45.98,20.5 1.85,6.27 2.77,15.88 2.77,28.81l0 105.8c50.22,-56.5 90.84,-102.85 121.87,-139.04 12.93,-15.14 24.19,-22.71 33.8,-22.71 9.59,0 21.78,6.37 36.56,19.11 14.76,12.75 22.14,23.82 22.14,33.24 0,9.42 -5.53,20.58 -16.61,33.51 -21.42,24.75 -54.66,58.72 -99.71,101.92l-22.16 21.05zm439.28 22.99c0,22.71 -5.64,39.52 -16.9,50.41 -11.26,10.89 -23.73,16.34 -37.39,16.34l-131.28 0c0,10.34 6.1,19.02 18.28,26.04 12.19,7.02 24.38,10.53 36.56,10.53 21.42,0 38.22,-2.22 50.41,-6.65l6.1 -2.22c8.86,-4.06 16.25,-6.09 22.16,-6.09 11.81,0 21.97,8.31 30.46,24.93 4.8,9.97 7.2,18.47 7.2,25.48 0,32.86 -39.33,49.29 -117.99,49.29 -27.33,0 -51.61,-4.7 -72.84,-14.11 -21.23,-9.42 -37.76,-21.89 -49.58,-37.39 -23.26,-29.91 -34.9,-63.33 -34.9,-100.26 0,-46.53 15.05,-83.74 45.15,-111.61 30.09,-27.88 67.67,-41.82 112.73,-41.82 51.33,0 89,18.09 113.01,54.28 12.55,19.2 18.83,40.16 18.83,62.87zm-116.89 16.34c14.04,0 21.05,-5.9 21.05,-17.72 0,-8.49 -3.23,-15.33 -9.69,-20.5 -6.47,-5.17 -15.7,-7.75 -27.7,-7.75 -12.01,0 -23.91,4.89 -35.73,14.67 -11.81,9.79 -17.72,20.22 -17.72,31.3l69.79 0zm407.7 -124.08c21.79,9.6 32.68,21.24 32.68,34.9 0,6.65 -1.48,12.93 -4.43,18.84 -2.95,5.91 -4.43,9.05 -4.43,9.42l-145.13 324.61c-2.95,7.02 -5.45,12.37 -7.47,16.06 -2.03,3.69 -5.27,7.2 -9.7,10.52 -4.43,3.32 -9.97,4.98 -16.62,4.98 -6.65,0 -16.43,-2.77 -29.36,-8.31 -21.79,-9.6 -32.68,-21.05 -32.68,-34.34 0,-8.86 17.72,-51.14 53.18,-126.85l-110.24 -185.57c-7.39,-12.18 -11.08,-21.23 -11.08,-27.14 0,-11.81 9.97,-23.63 29.91,-35.45 12.56,-7.38 22.34,-11.07 29.36,-11.07 7.02,0 12.74,1.48 17.17,4.42 4.43,2.97 7.66,6.01 9.7,9.15 2.03,3.14 12.18,20.31 30.46,51.52 18.28,31.21 35.74,60.29 52.35,87.24 1.85,-5.91 11.81,-28.71 29.91,-68.41 18.09,-39.7 27.79,-60.84 29.08,-63.42 1.3,-2.58 3.42,-5.72 6.37,-9.42 4.8,-6.27 11.54,-9.41 20.22,-9.41 8.68,0 18.92,2.58 30.74,7.75zm-3864.81 -188.42c18.31,0 36.3,1.34 53.9,3.88 137.39,19.23 263.51,113 306.81,268.23 6.2,22.24 10.3,16.14 67.08,16.14l674.24 -0.04c44.88,-0.01 36.67,-0.15 64.31,20.75 14.45,10.92 89.93,65.51 93.38,76.11 -5.51,9.1 -41.5,34.9 -52.11,42.89 -17.88,13.45 -35.29,27.66 -53.2,40.89 -22.51,14.76 -20.99,11.63 -64.38,11.84 -18.57,0.09 -44.81,2.95 -55.64,-8.38 -27.59,-39.7 -54.87,-61.08 -86.12,-61 -43.13,0.11 -49.91,71.43 -108.64,71.61 -49.81,0.84 -61.2,-67.34 -111.3,-63.35 -35.72,-1.45 -50.2,61.27 -90.98,61.74 -44.32,0.52 -58.7,-68.23 -109.03,-65.19 -35.65,2.16 -67.47,58.32 -89.65,63.76 -18.54,4.55 -56.27,-2.84 -77.51,2.04 -1.66,1.85 -3.44,4.99 -5.25,8.82 -16.16,49.41 -42.3,94.31 -76.07,132.29 -6.42,7.54 -12.76,14.26 -18.8,19.66 -67.43,65.63 -159.5,106.05 -261.04,106.05 -206.76,-0.01 -374.37,-167.61 -374.37,-374.36 0,-206.77 167.61,-374.38 374.37,-374.38zm64.12 549.2c16.22,2.14 104.16,2.39 113.66,-0.68 4.6,-12.68 1.94,-100.04 1.94,-120.33 0,-70.74 4.93,-50.9 -37.85,-84.48 -22.82,-17.9 -47.41,-36.86 -69.12,-52.44 -8.78,-6.3 -63.32,-50.98 -72.23,-50.35 -7.81,0.57 -133.16,98.15 -141.7,104.36 -43.26,31.48 -35.83,18.61 -35.82,84.87 -0.01,21.92 -2.92,104.75 2.21,118.42 9.31,3.03 99.78,2.76 114.16,0.57 0,-42.12 0,-84.21 0,-126.31l124.75 0 0 126.37zm-299.47 -159.55c7.82,0.44 24,-15.36 30.27,-20.07 57.08,-42.81 119.42,-94.03 176.43,-137.18 7.99,-6.05 21.54,-20.91 30.95,-20.21 7.63,0.56 105.37,79.22 118.73,89.57 21.01,16.28 37.24,29.34 58.47,45.42 8.45,6.43 51.89,42.79 58.73,42.3 2.28,-11.46 0.96,-43.85 0.9,-57.48 -0.08,-19.47 -11.41,-22.37 -23.84,-32.4 -61.11,-49.26 -131.07,-99.95 -195.35,-151.57 -18.86,-15.15 -16.68,-15.91 -35.82,-0.91l-162.11 126.17c-11.73,9.37 -19.94,14.86 -33.22,25.4 -11.59,9.2 -24.94,14.42 -24.94,31.48l0.8 59.48zm207.14 -308.73c96.19,-11.37 185.35,30.68 239.76,87.14 46.43,48.18 73.01,102.83 81.93,172.94 21.32,167.6 -110.68,308.64 -260.08,323.96 -124.94,12.81 -234.91,-51.84 -289.12,-150.85 -98.47,-179.84 10.88,-407.56 227.5,-433.18z\"/>\n  </svg> -->\n  <!-- <svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\n width=\"2364.000000pt\" height=\"1826.000000pt\" viewBox=\"0 0 2364.000000 1826.000000\"\n preserveAspectRatio=\"xMidYMid meet\"> -->\n<g transform=\"translate(0.000000,1826.000000) scale(0.100000,-0.100000)\"\n stroke=\"none\">\n<path d=\"M12998 14119 c-736 -765 -1338 -1394 -1338 -1398 0 -10 428 -421 439\n-421 5 0 511 522 1125 1160 615 638 1120 1160 1124 1159 4 0 965 -984 2135\n-2185 l2128 -2184 431 0 431 0 -84 88 c-288 300 -5042 5172 -5047 5172 -4 0\n-609 -626 -1344 -1391z\"/>\n<path d=\"M8625 13250 l-1090 -1128 -3 274 -2 274 -360 0 -360 0 0 -649 0 -649\n-421 -436 -422 -436 -1181 0 -1181 -1 -139 -114 c-77 -63 -144 -119 -150 -125\n-7 -7 501 -10 1631 -10 l1641 0 1562 1616 c859 888 1566 1614 1570 1612 5 -2\n680 -715 1500 -1586 1291 -1371 1490 -1587 1490 -1612 l0 -30 2731 0 c1501 0\n2728 4 2725 8 -3 5 -70 61 -149 125 l-144 117 -2246 0 -2245 0 -1827 1940\nc-1005 1067 -1830 1940 -1833 1940 -4 -1 -497 -509 -1097 -1130z\"/>\n<path d=\"M6670 12885 l0 -125 500 0 500 0 0 125 0 125 -500 0 -500 0 0 -125z\"/>\n<path d=\"M14205 12904 c-88 -9 -185 -38 -284 -86 -90 -43 -116 -62 -186 -132\n-115 -115 -176 -238 -194 -388 l-7 -58 743 0 744 0 -6 48 c-26 199 -137 375\n-306 488 -143 94 -338 144 -504 128z\"/>\n<path d=\"M13537 12083 c-4 -3 -7 -163 -7 -355 l0 -348 335 0 335 0 0 355 0\n355 -328 0 c-181 0 -332 -3 -335 -7z\"/>\n<path d=\"M14347 12083 c-4 -3 -7 -163 -7 -355 l0 -348 340 0 340 0 0 355 0\n355 -333 0 c-184 0 -337 -3 -340 -7z\"/>\n<path d=\"M9615 11769 c-241 -37 -448 -179 -555 -381 -33 -61 -70 -191 -70\n-245 l0 -33 740 0 740 0 0 28 c0 49 -38 181 -71 245 -89 175 -247 302 -452\n361 -100 29 -240 40 -332 25z\"/>\n<path d=\"M8990 10605 l0 -355 335 0 335 0 0 355 0 355 -335 0 -335 0 0 -355z\"/>\n<path d=\"M9800 10605 l0 -355 335 0 335 0 0 355 0 355 -335 0 -335 0 0 -355z\"/>\n<path d=\"M17705 9507 c-40 -60 -84 -151 -147 -304 -49 -120 -272 -663 -495\n-1208 -223 -544 -419 -1016 -436 -1048 -37 -71 -85 -113 -153 -133 -41 -12\n-59 -24 -88 -61 l-35 -46 44 -33 44 -34 268 0 269 0 43 44 42 43 -50 40 c-27\n22 -71 46 -96 53 -99 28 -109 101 -38 275 47 113 106 259 131 324 23 59 56 81\n133 91 140 17 278 -14 587 -131 401 -153 570 -203 724 -216 36 -3 71 -9 78\n-13 20 -12 92 -194 97 -246 5 -46 3 -53 -18 -68 -13 -9 -41 -21 -61 -27 -40\n-10 -138 -67 -138 -79 0 -4 26 -27 58 -51 l57 -44 306 1 305 1 47 27 c26 16\n47 31 46 34 0 4 -13 27 -28 52 -23 38 -35 48 -83 63 -68 22 -126 74 -163 148\n-15 28 -258 592 -541 1252 -284 661 -525 1215 -537 1231 -16 24 -92 121 -113\n144 -1 2 -28 -34 -59 -81z m379 -1288 c208 -484 375 -883 372 -886 -19 -19\n-246 45 -611 171 -426 148 -462 158 -605 165 l-126 6 291 712 c159 392 292\n713 295 713 3 0 176 -396 384 -881z\"/>\n<path d=\"M11650 9574 c-14 -2 -56 -9 -95 -15 -159 -26 -369 -116 -520 -224\n-102 -73 -250 -218 -321 -317 -113 -158 -201 -369 -240 -583 -15 -81 -19 -148\n-19 -350 1 -220 3 -262 23 -352 61 -282 188 -518 382 -714 191 -192 406 -308\n675 -364 185 -38 483 -38 695 0 488 89 824 379 1016 877 214 553 79 1259 -315\n1648 -208 207 -456 323 -801 375 -101 15 -428 28 -480 19z m411 -160 c312 -53\n572 -232 730 -500 89 -150 170 -390 199 -587 15 -101 15 -319 0 -427 -33 -244\n-130 -516 -240 -681 -96 -142 -266 -284 -418 -349 -273 -116 -627 -113 -888 9\n-117 55 -184 101 -278 192 -133 127 -218 263 -277 442 -39 117 -123 541 -109\n545 6 2 10 46 10 109 0 186 43 411 110 574 199 482 672 756 1161 673z\"/>\n<path d=\"M14728 9555 c-339 -48 -593 -174 -808 -401 -185 -196 -300 -418 -362\n-704 -20 -94 -22 -132 -22 -360 0 -275 11 -361 70 -540 111 -336 359 -621 677\n-776 353 -172 857 -206 1322 -88 207 53 455 143 497 181 54 48 53 36 58 630 6\n629 -1 585 96 633 27 14 69 40 92 59 l41 34 -30 38 -31 39 -358 0 -359 0 31\n-70 c29 -65 34 -71 72 -81 71 -19 97 -38 119 -87 22 -46 22 -58 25 -579 3\n-529 3 -531 -18 -551 -32 -30 -313 -105 -491 -132 -397 -58 -729 -8 -961 146\n-352 234 -562 743 -519 1261 27 313 99 553 224 738 173 258 428 414 744 456\n53 7 157 9 267 6 153 -4 197 -9 281 -31 256 -67 441 -213 558 -441 14 -28 63\n-87 111 -135 l86 -85 0 258 c0 326 -4 335 -154 402 -155 69 -375 133 -571 166\n-157 27 -541 35 -687 14z\"/>\n<path d=\"M1955 9538 c-29 -95 -29 -89 1 -114 16 -13 49 -31 74 -40 25 -10 55\n-26 67 -37 48 -43 48 -43 4 -1258 -23 -624 -47 -1152 -52 -1173 -14 -50 -56\n-90 -111 -104 -28 -7 -57 -25 -83 -52 l-40 -41 30 -25 c71 -59 55 -57 339 -57\n144 0 270 4 278 9 9 5 35 26 58 47 51 47 54 43 -107 122 -61 30 -121 67 -132\n81 -48 60 -48 94 -6 1294 25 694 28 770 34 770 3 0 222 -503 486 -1117 264\n-614 492 -1135 507 -1158 16 -22 40 -55 56 -73 l28 -33 46 58 c51 62 33 19\n753 1795 142 351 260 636 261 635 1 -1 12 -223 23 -492 46 -1079 59 -1657 39\n-1695 -8 -15 -40 -38 -78 -57 -38 -19 -77 -47 -94 -69 l-30 -36 42 -39 41 -39\n303 0 c332 0 333 0 358 59 19 48 -11 91 -80 113 -104 34 -117 63 -130 303 -16\n271 -80 1730 -87 1955 -5 182 -4 210 11 242 17 35 65 68 98 68 17 0 41 24 101\n105 l45 60 -249 3 c-269 3 -291 -1 -324 -51 -8 -13 -105 -248 -216 -523 -319\n-792 -750 -1858 -759 -1873 -4 -8 -42 68 -102 210 -52 123 -279 660 -504 1193\n-339 804 -415 976 -445 1008 l-36 38 -207 0 c-156 0 -208 -3 -211 -12z\"/>\n<path d=\"M5308 9520 c-27 -17 -48 -33 -48 -36 0 -8 53 -77 70 -91 8 -7 24 -13\n35 -13 32 0 82 -36 102 -72 17 -31 18 -96 18 -1218 0 -1353 10 -1221 -93\n-1267 -31 -14 -76 -42 -98 -63 l-42 -39 50 -42 50 -42 294 0 293 0 56 42 56\n42 -57 45 c-32 24 -64 44 -71 44 -33 0 -71 31 -89 72 -18 41 -19 94 -22 1196\n-1 764 1 1166 8 1191 15 56 44 87 99 106 33 11 58 28 80 55 l32 40 -21 40 -20\n40 -318 0 -317 0 -47 -30z\"/>\n<path d=\"M7498 9511 l-41 -38 32 -41 c26 -31 44 -43 81 -52 51 -12 81 -37 102\n-85 17 -39 25 -2264 8 -2354 -14 -76 -36 -102 -104 -126 -43 -15 -65 -30 -87\n-59 -16 -22 -29 -43 -29 -47 0 -4 19 -21 42 -38 l42 -31 302 0 301 0 39 31\nc22 17 41 32 43 34 11 12 -69 89 -122 117 -99 53 -98 49 -95 393 l3 290 27 46\nc34 58 87 106 174 157 151 90 360 154 854 262 342 76 508 134 668 236 l52 34\n0 -646 c0 -467 -3 -658 -12 -686 -14 -46 -54 -84 -106 -98 -22 -5 -54 -27 -77\n-50 l-40 -41 45 -39 c43 -37 49 -39 140 -46 52 -4 187 -4 298 -1 l204 5 46 33\nc26 18 49 34 51 35 12 10 -72 84 -128 114 -44 23 -71 45 -81 65 -13 26 -15\n181 -15 1210 0 1077 1 1183 16 1210 24 42 48 62 94 74 28 7 52 24 76 54 l36\n43 -43 37 -42 37 -307 0 -307 0 -29 -31 c-50 -54 -32 -97 61 -144 71 -36 93\n-56 109 -97 6 -16 11 -172 12 -396 1 -348 0 -372 -19 -413 -28 -64 -74 -102\n-182 -153 -202 -94 -382 -151 -705 -221 -270 -59 -418 -98 -528 -141 -106 -41\n-228 -103 -294 -150 l-48 -34 -3 727 c-2 401 0 747 3 770 7 51 46 94 101 111\n22 7 58 30 82 50 l43 38 -45 42 -46 42 -305 0 -306 0 -41 -39z\"/>\n<path d=\"M19450 9524 c-105 -62 -103 -50 -13 -108 44 -28 94 -59 111 -68 24\n-13 35 -29 49 -75 17 -54 18 -129 18 -1203 0 -1054 -1 -1148 -17 -1182 -18\n-41 -69 -78 -106 -78 -33 0 -82 -52 -82 -86 0 -17 11 -39 27 -56 l27 -28 314\n0 314 0 44 32 c24 17 44 35 44 38 0 20 -99 98 -131 104 -40 7 -72 36 -89 81\n-10 25 -17 622 -8 630 2 2 152 4 333 6 323 4 331 4 370 -18 47 -24 95 -74 182\n-188 72 -95 315 -369 452 -510 137 -141 234 -186 404 -184 84 0 218 20 218 32\n0 5 -51 45 -113 89 -147 106 -348 308 -558 558 -90 107 -181 213 -202 236\nl-39 40 95 38 c249 98 460 308 546 543 52 144 63 225 57 422 -6 204 -23 281\n-92 428 -54 115 -91 170 -174 257 -117 121 -252 202 -416 248 -79 22 -90 22\n-800 25 l-720 3 -45 -26z m1477 -161 c89 -30 142 -64 206 -133 66 -71 96 -120\n148 -240 123 -284 122 -573 -1 -862 -85 -198 -228 -335 -412 -393 -112 -36\n-266 -46 -613 -43 l-300 3 -3 835 c-1 459 0 841 3 849 4 11 84 12 458 9 422\n-4 456 -6 514 -25z\"/>\n<path d=\"M12002 5598 c3 -529 3 -533 25 -575 54 -101 180 -147 306 -112 33 9\n37 13 37 43 0 19 -3 47 -6 64 -6 28 -9 30 -31 21 -36 -13 -100 -11 -132 5 -56\n29 -56 27 -59 579 l-3 507 -70 0 -70 0 3 -532z\"/>\n<path d=\"M10503 6055 c-170 -46 -285 -168 -322 -343 -7 -34 -11 -189 -11 -427\nl0 -375 70 0 70 0 0 165 0 165 340 0 340 0 0 -165 0 -165 76 0 76 0 -4 383\nc-4 321 -7 391 -22 441 -64 223 -224 337 -471 335 -49 0 -114 -7 -142 -14z\nm323 -160 c118 -61 153 -142 161 -372 l6 -153 -343 0 -343 0 6 153 c6 168 17\n220 65 290 60 86 140 118 288 114 90 -2 108 -6 160 -32z\"/>\n<path d=\"M11402 5518 c3 -420 4 -456 22 -488 45 -85 127 -130 236 -130 63 0\n148 26 181 55 17 16 17 19 -8 70 l-27 54 -41 -25 c-48 -28 -120 -32 -164 -10\n-52 27 -55 48 -59 338 l-3 267 128 3 128 3 3 63 3 62 -131 0 -130 0 0 95 0 95\n-70 0 -71 0 3 -452z\"/>\n<path d=\"M14554 5956 c-3 -7 -4 -204 -1 -437 2 -302 7 -435 16 -462 16 -49 64\n-103 115 -129 83 -42 238 -31 306 21 l25 20 -28 56 -27 56 -30 -22 c-40 -30\n-125 -37 -169 -14 -57 29 -61 54 -61 344 l0 260 128 3 127 3 3 63 3 62 -131 0\n-130 0 0 95 0 95 -70 0 c-51 0 -72 -4 -76 -14z\"/>\n<path d=\"M8005 5777 c-238 -61 -369 -293 -310 -546 9 -35 28 -86 42 -114 32\n-58 115 -137 175 -166 139 -66 319 -67 449 -1 45 23 119 87 119 103 0 5 -18\n29 -39 52 l-39 43 -28 -29 c-16 -16 -53 -42 -84 -56 -47 -24 -68 -27 -145 -27\n-107 0 -166 22 -232 86 -37 37 -72 94 -62 102 2 1 155 32 339 67 l335 64 3 39\nc2 21 -6 69 -17 106 -36 116 -130 219 -241 261 -68 26 -195 34 -265 16z m185\n-127 c65 -18 127 -66 159 -122 17 -29 31 -60 31 -68 0 -13 -55 -27 -272 -68\n-150 -29 -277 -52 -281 -52 -5 0 -6 24 -2 53 9 73 57 169 102 203 72 55 180\n77 263 54z\"/>\n<path d=\"M9032 5775 c-66 -19 -103 -37 -147 -76 l-35 -31 0 56 0 56 -75 0 -75\n0 0 -435 0 -435 75 0 75 0 0 253 c0 271 6 319 53 388 12 18 44 47 71 64 43 26\n61 30 133 34 131 5 197 -29 240 -124 16 -35 18 -77 21 -327 l3 -288 70 0 69 0\n0 294 c0 266 -2 300 -20 359 -27 87 -87 154 -171 192 -77 34 -204 43 -287 20z\"/>\n<path d=\"M12681 5775 c-116 -33 -222 -118 -270 -219 -81 -167 -54 -387 64\n-514 164 -177 435 -192 608 -34 l27 26 0 -62 0 -62 70 0 70 0 0 435 0 435 -75\n0 -74 0 -3 -55 -3 -55 -43 35 c-92 72 -254 103 -371 70z m266 -151 c101 -49\n157 -149 157 -280 0 -73 -4 -89 -34 -150 -41 -81 -94 -126 -177 -150 -145 -42\n-293 27 -357 165 -29 65 -29 207 0 272 72 157 253 221 411 143z\"/>\n<path d=\"M13853 5780 c-62 -13 -124 -43 -166 -80 l-37 -32 0 56 0 56 -70 0\n-70 0 0 -435 0 -435 70 0 70 0 0 239 c0 131 5 263 10 292 14 74 56 137 113\n173 41 25 61 30 131 34 127 7 192 -24 239 -112 21 -39 22 -54 25 -333 l3 -293\n75 0 74 0 0 253 c0 284 -9 369 -46 444 -31 64 -109 136 -172 158 -56 20 -190\n28 -249 15z\"/>\n<path d=\"M15363 5775 c-81 -22 -151 -62 -200 -112 -181 -187 -157 -527 49\n-679 85 -62 142 -79 268 -79 94 0 111 3 165 28 33 15 79 47 103 70 l42 41 0\n-67 0 -67 70 0 70 0 0 435 0 435 -75 0 -75 0 0 -61 0 -61 -46 41 c-25 22 -71\n50 -103 62 -73 27 -197 34 -268 14z m252 -145 c55 -26 109 -81 137 -139 19\n-39 23 -62 23 -146 0 -85 -4 -107 -24 -149 -31 -62 -82 -113 -140 -139 -68\n-31 -189 -30 -255 2 -62 31 -113 82 -139 140 -25 57 -34 172 -18 238 24 97\n105 183 200 210 60 17 162 9 216 -17z\"/>\n<path d=\"M1737 5546 c-92 -62 -170 -116 -174 -119 -3 -4 1288 -7 2870 -7\nl2877 0 0 120 0 120 -2702 -1 -2703 0 -168 -113z\"/>\n<path d=\"M16430 5540 l0 -120 2882 0 2881 0 -176 120 -177 120 -2705 0 -2705\n0 0 -120z\"/>\n</g>\n</svg>\n</div>");

/***/ }),

/***/ 81827:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/mission/mission.component.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"section default\">\n    <div class=\"px-3\">\n        <div class=\"theme-container\">\n            <h1 class=\"section-title\">Our Mission</h1>            \n\n            <mat-card class=\"p-0\" fxLayout=\"row wrap\"> \n                <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"p-3\">            \n                   <div fxLayout=\"row wrap\">\n                        <!-- <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"p-2\">\n                            <mat-icon color=\"primary\" class=\"mat-icon-xlg\">monetization_on</mat-icon>\n                            <h2 class=\"capitalize fw-600 my-2\">save money</h2>\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.</p>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"p-2\">\n                            <mat-icon color=\"primary\" class=\"mat-icon-xlg\">thumb_up</mat-icon>\n                            <h2 class=\"capitalize fw-600 my-2\">better ideas</h2>\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.</p>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"p-2\"> -->\n                            <mat-icon color=\"primary\" class=\"mat-icon-xlg\">group</mat-icon>\n                            <!--<h2 class=\"capitalize fw-600 my-2\">collaboration</h2>\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.</p>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"p-2\">\n                            <mat-icon color=\"primary\" class=\"mat-icon-xlg\">search</mat-icon>\n                            <h2 class=\"capitalize fw-600 my-2\">easy to find</h2>\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.</p>\n                        </div> -->\n                        <div fxLayout=\"column\" fxFlexAlign=\"center\"><p>Nuestra Misión, es servir a mi comunidad haciendo sus sueños realidad siendo propietarios o vendiendo su Casa. Trabajamos Atlanta y sus alrededores. Nuestro servicio es muy personalizado, enfocados en la satisfacción del Cliente. Tenemos 3 años en el mercado y solo este año hemos ayudado a casi 40 familias a comprar su CASA. Nuestro lema es HONESTIDAD y SERVICIO.</p></div>\n                   </div>                     \n                </div> \n                <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxShow=\"false\" fxShow.gt-md>                    \n                    <img src=\"assets/images/others/mission.jpg\" alt=\"mission\" class=\"mw-100 d-block\">                \n                </div>            \n            </mat-card>\n                \n        </div>\n    </div>   \n</div>");

/***/ }),

/***/ 28269:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/our-agents/our-agents.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"section agents\">\n  <div class=\"px-3\">\n    <div class=\"theme-container\">\n      <h1 class=\"section-title\">{{ \"AGENTS.A_TITLE\" | translate }}</h1>\n      <div class=\"container-agents\">\n        <div class=\"container-agents-box\">\n          <mat-card>\n            <img\n              mat-card-image\n              src=\"\\assets\\images\\agents\\A.png\"\n              height=\"auto\"\n              max-width=\"200px\"\n              alt=\"\"\n              class=\"\"\n            />\n            <mat-card-content>\n              <h2 class=\"fw-600\">Carmela Moreno</h2>\n              <p fxLayoutAlign=\"start center\">\n                <mat-icon\n                  color=\"primary\"\n                  matTooltip=\"Organization\"\n                  matTooltipPosition=\"above\"\n                  >business</mat-icon\n                ><span class=\"mx-2\">Mi Hogar En Atlanta</span>\n              </p>\n              <p fxLayoutAlign=\"start center\">\n                <mat-icon color=\"primary\">email</mat-icon\n                ><span class=\"mx-2\">mihogarenatlanta@gmail.com</span>\n              </p>\n              <p fxLayoutAlign=\"start center\">\n                <mat-icon color=\"primary\">call</mat-icon\n                ><span class=\"mx-2\">+1 (678) 744-8007</span>\n              </p>\n            </mat-card-content>\n            <mat-divider></mat-divider>\n            <mat-card-actions fxLayoutAlign=\"space-between center\">\n              <div\n                fxLayout=\"row\"\n                fxLayoutAlign=\"start center\"\n                class=\"text-muted\"\n              >\n                <a\n                  [href]=\"'https://www.facebook.com/mihogarenatlanta/'\"\n                  target=\"blank\"\n                  class=\"social-icon\"\n                >\n                  <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\n                    <path\n                      d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\"\n                    />\n                  </svg>\n                </a>\n                <!-- <a [href]=\"'https://twitter.com/'\" target=\"blank\" class=\"social-icon\">\n                                          <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\n                                              <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z\" />\n                                          </svg> \n                                        </a> -->\n                <a\n                  [href]=\"\n                    'https://www.linkedin.com/in/carmela-moreno-1a7392148/'\n                  \"\n                  target=\"blank\"\n                  class=\"social-icon\"\n                >\n                  <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\n                    <path\n                      d=\"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z\"\n                    />\n                  </svg>\n                </a>\n                <a\n                  [href]=\"'https://www.instagram.com/mihogarenatlanta/'\"\n                  target=\"blank\"\n                  class=\"social-icon\"\n                >\n                  <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\n                    <path\n                      d=\"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z\"\n                    />\n                  </svg>\n                </a>\n                <a [href]=\"\" target=\"blank\" class=\"social-icon\">\n                  <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\n                    <path\n                      d=\"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z\"\n                    />\n                  </svg>\n                </a>\n              </div>\n              <div></div>\n            </mat-card-actions>\n          </mat-card>\n          <section class=\"img-container\">\n            <mat-card class=\"d-flex flex-direction-column\">\n              <img\n                src=\"assets/images/fotosContact/DIPLOMA.png\"\n                alt=\"\"\n                srcset=\"\"\n              />\n              <img\n                src=\"assets/images/fotosContact/portada_1.jpg\"\n                alt=\"\"\n                srcset=\"\"\n              />\n              <a mat-raised-button color=\"primary\" routerLink=\"/about\">{{ 'NAV.ABOUT_US' | translate}}</a>\n            </mat-card>\n          </section>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 84823:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/our-services/our-services.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"section mt-3\">\n    <div class=\"px-3\">\n        <div class=\"theme-container\">\n            <h1 class=\"section-title\">Our Services</h1> \n\n            <div fxLayout=\"row wrap\" class=\"services-wrapper\">\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" class=\"p-2\">\n                 \n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"h-100 w-100 text-center\">            \n                        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">location_on</mat-icon>\n                        <h2 class=\"capitalize fw-600 my-3\">Find places anywhere in the world</h2>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.</p>           \n                    </mat-card>\n                   \n                </div>\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" class=\"p-2\">\n                 \n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"h-100 w-100 text-center\">            \n                        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">supervisor_account</mat-icon>\n                        <h2 class=\"capitalize fw-600 my-3\">We have agents with experience</h2>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.</p>             \n                    </mat-card>\n                   \n                </div>\n\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" class=\"p-2\">\n                 \n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"h-100 w-100 text-center\">            \n                        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">home</mat-icon>\n                        <h2 class=\"capitalize fw-600 my-3\">Buy or rent beautiful properties</h2>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.</p>             \n                    </mat-card>\n                   \n                </div>\n\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" class=\"p-2\">\n                 \n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"h-100 w-100 text-center\">            \n                        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">format_list_bulleted</mat-icon>\n                        <h2 class=\"capitalize fw-600 my-3\">With agent account you can list properties</h2>\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.</p>             \n                    </mat-card>\n                   \n                </div>\n\n\n\n\n            </div>\n                \n        </div>\n    </div>   \n</div>");

/***/ }),

/***/ 45375:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-carousel/properties-carousel.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"properties\" class=\"properties-carousel\">   \n    <div class=\"swiper-container h-100 carousel-outer\" [swiper]=\"config\"> \n        <div class=\"swiper-wrapper h-100\">      \n            <div *ngFor=\"let property of properties\" class=\"swiper-slide\">\n                <app-property-item [property]=\"property\" [viewType]=\"'grid'\"></app-property-item>                 \n            </div>\n        </div>                      \n        <button mat-mini-fab color=\"primary\" class=\"prop-prev swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\n        <button mat-mini-fab color=\"primary\" class=\"prop-next swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \n    </div>\n</div>");

/***/ }),

/***/ 71943:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.html ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-chip-list>\n    <mat-chip *ngIf=\"searchFields?.propertyType\">\n        {{searchFields?.propertyType.name}}        \n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('propertyType')\">cancelar</mat-icon>\n    </mat-chip> \n    <mat-chip *ngIf=\"searchFields?.propertyStatus && searchFields?.propertyStatus.length > 0\">\n        <span *ngFor=\"let type of searchFields?.propertyStatus; let last = last;\" class=\"mr-1\">{{type.name}}<span *ngIf=\"!last\">,</span></span>\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('propertyStatus')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.price.from\">\n        Price > {{searchFields?.price.from}}K\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('price.from')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.price.to\">\n        Price < {{searchFields?.price.to}}K\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('price.to')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.city\">\n        {{searchFields?.city.name}}\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('city')\">cancelar</mat-icon>\n    </mat-chip> \n    <mat-chip *ngIf=\"searchFields?.zipCode\">\n        {{searchFields?.zipCode}}\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('zipCode')\">cancelar</mat-icon>\n    </mat-chip>    \n    <mat-chip *ngIf=\"searchFields?.neighborhood && searchFields?.neighborhood.length > 0\">\n        <span *ngFor=\"let item of searchFields?.neighborhood; let last = last;\" class=\"mr-1\">{{item.name}}<span *ngIf=\"!last\">,</span></span>\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('neighborhood')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.street && searchFields?.street.length > 0\">\n        <span *ngFor=\"let item of searchFields?.street; let last = last;\" class=\"mr-1\">{{item.name}}<span *ngIf=\"!last\">,</span></span>\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('street')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.bedrooms.from\">\n        Bedrooms > {{searchFields?.bedrooms.from}}\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('bedrooms.from')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.bedrooms.to\">\n        Bedrooms < {{searchFields?.bedrooms.to}}\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('bedrooms.to')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.bathrooms.from\">\n        Bathrooms > {{searchFields?.bathrooms.from}}\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('bathrooms.from')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.bathrooms.to\">\n        Bathrooms < {{searchFields?.bathrooms.to}}\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('bathrooms.to')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.garages.from\">\n        Garages > {{searchFields?.garages.from}}\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('garages.from')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.garages.to\">\n        Garages < {{searchFields?.garages.to}}\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('garages.to')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.area.from\">\n        Area > {{searchFields?.area.from}}\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('area.from')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.area.to\">\n        Area < {{searchFields?.area.to}}\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('area.to')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.yearBuilt.from\">\n        Year Built > {{searchFields?.yearBuilt.from}}\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('yearBuilt.from')\">cancelar</mat-icon>\n    </mat-chip>\n    <mat-chip *ngIf=\"searchFields?.yearBuilt.to\">\n        Year Built < {{searchFields?.yearBuilt.to}}\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('yearBuilt.to')\">cancelar</mat-icon>\n    </mat-chip>\n\n    <span *ngIf=\"searchFields?.features\"> \n        <span *ngFor=\"let feature of searchFields?.features; index as i\">\n            <mat-chip *ngIf=\"feature.selected\">\n                {{feature.name}} \n                <mat-icon color=\"warn\" matChipRemove (click)=\"remove('features,'+i)\">cancelar</mat-icon>\n            </mat-chip>\n        </span>  \n    </span>\n\n</mat-chip-list>\n");

/***/ }),

/***/ 22783:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-search/properties-search.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form [formGroup]=\"form\" class=\"search-wrapper\" [ngClass]=\"'variant-'+variant\">\n\n    <div [fxLayout]=\"(vertical) ? 'column' : 'row wrap'\"> \n\n        <!-- <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\n            <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                <mat-label>Tipo de Propiedad</mat-label> \n                <mat-select placeholder=\"Seleccione el tipo de propiedad\" formControlName=\"propertyType\">\n                    <mat-option *ngFor=\"let propertyType of propertyTypes\" [value]=\"propertyType\">\n                        {{propertyType.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div> -->\n\n        <!-- <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\n            <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                <mat-label>Estado de propiedad</mat-label>\n                <mat-select placeholder=\"Seleccione el estado de propiedad\" formControlName=\"propertyStatus\" multiple>\n                    <mat-option *ngFor=\"let propertyStatus of propertyStatuses\" [value]=\"propertyStatus\">\n                        {{propertyStatus.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n        </div>         -->\n\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"price\">\n\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                <div fxFlex=\"45\">\n                    <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                        <mat-label *ngIf=\" variant == 1 ? 'Price' : 'Price From'\">{{'SEARCH.PRICE'| translate }}</mat-label>\n                        <input matInput autocomplete=\"off\" [placeholder]=\"'SEARCH.FROM' | translate\" formControlName=\"from\" type=\"text\" onlyNumber>                  \n                    </mat-form-field>\n                </div>\n                <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\n                    <mat-icon class=\"text-muted\">remover</mat-icon>\n                </div>\n                <div fxFlex=\"45\">\n                    <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                        <mat-label>{{(variant == 1) ? '' : 'SEARCH.PRICE_TO'}}</mat-label>\n                        <input matInput autocomplete=\"off\" [placeholder]=\"'SEARCH.TO' | translate\" formControlName=\"to\" type=\"text\" onlyNumber>                  \n                    </mat-form-field>\n                </div>\n            </div> \n\n        </div>          \n            \n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">                         \n                <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                    <mat-label>{{ 'SEARCH.S_CITY' | translate }}</mat-label>\n                    <mat-select [placeholder]=\"'SEARCH.P_CITY' | translate\" formControlName=\"city\" (selectionChange)=\"onSelectCity()\">\n                        <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\n                            {{city.name}}\n                        </mat-option>\n                    </mat-select> \n                </mat-form-field>\n            </div>\n        \n        <div *ngIf=\"showMore\" [fxLayout]=\"(vertical) ? 'column' : 'row wrap'\" class=\"w-100\">\n\n            \n\n            <!-- <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\n                <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                    <mat-label>Codigo Postal</mat-label>\n                    <input matInput placeholder=\"exp. 98104\" autocomplete=\"off\" formControlName=\"zipCode\">                  \n                </mat-form-field>\n            </div> -->\n\n            <!-- <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">                         \n                <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                    <mat-label>Vecindario</mat-label>\n                    <mat-select placeholder=\"Seleccione vecindario\" formControlName=\"neighborhood\" multiple (selectionChange)=\"onSelectNeighborhood()\">\n                        <mat-option *ngFor=\"let neighborhood of neighborhoods | filterNeighborhoods: form.get('city').value?.id\" [value]=\"neighborhood\">\n                            {{neighborhood.name}}\n                        </mat-option>\n                    </mat-select> \n                </mat-form-field>\n            </div> -->\n\n            <!-- <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">                         \n                <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                    <mat-label>Calle</mat-label>\n                    <mat-select placeholder=\"Seleccione calle\" formControlName=\"street\" multiple>\n                        <mat-option *ngFor=\"let street of streets | filterStreets : { neighborhoods:form.get('neighborhood').value, cityId:form.get('city').value?.id } \" [value]=\"street\">\n                            {{street.name}}\n                        </mat-option>\n                    </mat-select> \n                </mat-form-field>\n            </div> -->\n    \n            <!-- <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"bedrooms\">\n    \n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                    <div fxFlex=\"45\">\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                            <mat-label>{{(variant == 1) ? 'Cuartos' : 'Cuartos desde'}}</mat-label>\n                            <mat-select placeholder=\"Desde\" formControlName=\"from\">\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\n                                    {{number}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\n                        <mat-icon class=\"text-muted\">remover</mat-icon>\n                    </div>\n                    <div fxFlex=\"45\">\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                            <mat-label>{{(variant == 1) ? '' : 'Cuartos hasta'}}</mat-label>\n                            <mat-select placeholder=\"Hasta\" formControlName=\"to\">\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\n                                    {{number}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div> \n    \n            </div>  -->\n    \n            <!-- <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"bathrooms\">\n    \n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                    <div fxFlex=\"45\">\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                            <mat-label>{{(variant == 1) ? 'Baños' : 'Baños desde'}}</mat-label>\n                            <mat-select placeholder=\"Desde\" formControlName=\"from\">\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\n                                    {{number}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\n                        <mat-icon class=\"text-muted\">remover</mat-icon>\n                    </div>\n                    <div fxFlex=\"45\">\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                            <mat-label>{{(variant == 1) ? '' : 'Baños hasta'}}</mat-label>\n                            <mat-select placeholder=\"Hasta\" formControlName=\"to\">\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\n                                    {{number}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div> \n    \n            </div>  -->\n\n            <!-- <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"garages\">\n    \n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                    <div fxFlex=\"45\">\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                            <mat-label>{{(variant == 1) ? 'Garajes' : 'Garajes Desde'}}</mat-label>\n                            <mat-select placeholder=\"Desde\" formControlName=\"from\">\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\n                                    {{number}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\n                        <mat-icon class=\"text-muted\">remover</mat-icon>\n                    </div>\n                    <div fxFlex=\"45\">\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                            <mat-label>{{(variant == 1) ? '' : 'Garajes hasta'}}</mat-label>\n                            <mat-select placeholder=\"Hasta\" formControlName=\"to\">\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\n                                    {{number}}\n                                </mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                    </div>\n                </div> \n    \n            </div>  -->\n\n            <!-- <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"area\">\n\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                    <div fxFlex=\"45\">\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                            <mat-label>{{(variant == 1) ? 'Area' : 'Area desde'}}</mat-label>\n                            <input matInput autocomplete=\"off\" placeholder=\"Desde\" formControlName=\"from\" type=\"text\" onlyNumber>                  \n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\n                        <mat-icon class=\"text-muted\">remover</mat-icon>\n                    </div>\n                    <div fxFlex=\"45\">\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                            <mat-label>{{(variant == 1) ? '' : 'Area hasta'}}</mat-label>\n                            <input matInput autocomplete=\"off\" placeholder=\"Hasta\" formControlName=\"to\" type=\"text\" onlyNumber>                  \n                        </mat-form-field>\n                    </div>\n                </div> \n    \n            </div> -->\n\n            <!-- <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"yearBuilt\">\n\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                    <div fxFlex=\"45\">\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                            <mat-label>{{(variant == 1) ? 'Año de construccion' : 'Construido a partir de'}}</mat-label>\n                            <input matInput autocomplete=\"off\" placeholder=\"Desde\" formControlName=\"from\" type=\"text\" onlyNumber maxlength=\"4\">                  \n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\n                        <mat-icon class=\"text-muted\">remover</mat-icon>\n                    </div>\n                    <div fxFlex=\"45\">\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\n                            <mat-label>{{(variant == 1) ? '' : 'Construido hasta el año'}}</mat-label>\n                            <input matInput autocomplete=\"off\" placeholder=\"Hasta\" formControlName=\"to\" type=\"text\" onlyNumber maxlength=\"4\">                  \n                        </mat-form-field>\n                    </div>\n                </div> \n    \n            </div> -->\n\n            <!-- <div fxFlex=\"100\" class=\"mb-2\"> \n                <p class=\"uppercase m-2 fw-500\">Features</p> \n                <div formArrayName=\"features\" [fxLayout]=\"(vertical) ? 'column' : 'row wrap'\">\n                    <div [formGroupName]=\"i\" *ngFor=\"let control of form['controls'].features['controls']; index as i\" class=\"p-2\">\n                        <mat-checkbox formControlName=\"selected\">{{features[i].name}}</mat-checkbox>                         \n                    </div>\n                </div>\n            </div> -->\n\n        </div>\n\n\n    </div>\n  \n\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"p-2\">       \n      <button mat-raised-button color=\"warn\" class=\"uppercase mx-1\" (click)=\"reset()\">{{ 'BTN.CLEAR' | translate }}</button>\n      <!-- <button *ngIf=\"!vertical\" mat-raised-button color=\"primary\" class=\"uppercase mx-1\" (click)=\"showMore = !showMore\">\n          {{( showMore ? 'BTN.HIDE' : 'BTN.ADVANCED' )| translate}}\n        </button>       -->\n      <button *ngIf=\"searchOnBtnClick\" mat-raised-button color=\"primary\" class=\"search-btn mx-1\" (click)=\"search()\"><mat-icon>search</mat-icon> Buscar</button>\n    </div>\n    \n\n</form>\n");

/***/ }),

/***/ 37178:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-toolbar/properties-toolbar.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-card fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"w-100 p-2 filter-row mat-elevation-z1 text-muted\">\n    <button *ngIf=\"showSidenavToggle\" mat-icon-button (click)=\"sidenavToggle()\">\n        <mat-icon>more_vert</mat-icon>\n    </button>\n    <div>\n        <a mat-button [matMenuTriggerFor]=\"sortMenu\" #sortMenuTrigger=\"matMenuTrigger\">\n            {{sort}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\n        </a>\n        <mat-menu #sortMenu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\n            <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\n                <button mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\n                    <span>{{sort}}</span>\n                </button>\n            </span>\n        </mat-menu>\n    </div>\n    <div fxShow=\"false\" fxShow.gt-xs>\n        <!-- <span *ngIf=\"isHomePage\">\n            <a mat-button [matMenuTriggerFor]=\"countsMenu\" #countsMenuTrigger=\"matMenuTrigger\">\n                {{ 'SHOW' | translate }} {{count}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\n            </a>\n            <mat-menu #countsMenu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\n                <span (mouseleave)=\"countsMenuTrigger.closeMenu()\">\n                    <button mat-menu-item *ngFor=\"let count of counts\" (click)=\"changeCount(count)\">\n                        <span>{{count}}</span>\n                    </button>\n                </span>\n            </mat-menu>\n        </span>        -->\n        <button mat-icon-button (click)=\"changeViewType('list', 100)\">\n            <mat-icon>view_list</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"changeViewType('grid', 50)\">\n            <svg class=\"mat-icon mat-icon-sm\" viewBox=\"0 0 25 25\">\n                <path d=\"M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3\" />\n            </svg>\n        </button>\n        <button *ngIf=\"!isHomePage\" mat-icon-button fxShow=\"false\" fxShow.gt-md (click)=\"changeViewType('grid', 33.3)\">\n            <mat-icon>view_module</mat-icon>\n        </button>\n        <button *ngIf=\"isHomePage\" mat-icon-button fxShow=\"false\" fxShow.gt-sm (click)=\"changeViewType('grid', 33.3)\">\n            <mat-icon>view_module</mat-icon>\n        </button>\n        <button *ngIf=\"isHomePage\" fxShow=\"false\" fxShow.gt-md mat-icon-button (click)=\"changeViewType('grid', 25)\">\n            <mat-icon>view_comfy</mat-icon>\n        </button>\n        \n\n        \n    </div>\n</mat-card>\n");

/***/ }),

/***/ 31138:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/property-item/property-item.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-card class=\"property-item p-0\" [ngClass]=\"[viewType + '-item', 'column-'+column]\" [class.full-width-page]=\"fullWidthPage\" fxLayout=\"row wrap\">  \n  \n    <div fxFlex=\"100\" fxShrink=\"3\" [fxFlex.gt-sm]=\"(viewType=='list') ? 40 : 100\" [fxFlex.sm]=\"(viewType=='list') ? 50 : 100\" class=\"thumbnail-section\">\n\n        <div fxLayout=\"row wrap\" class=\"property-status\">\n            <span [style.background-color]=\"getStatusBgColor(property.propertyStatus)\">{{property.propertyStatus}}</span>\n        </div>\n       \n        <div *ngIf=\"property.gallery.length == 1\" class=\"mat-card-image w-100 m-0\">\n            <img [src]=\"property.gallery\">\n        </div>\n        <div *ngIf=\"property.gallery.length > 1\" class=\"mat-card-image w-100 m-0\">\n            <div class=\"swiper-container\" [swiper]=\"config\">\n                <div class=\"swiper-wrapper\"> \n                    <div *ngFor=\"let image of property.gallery\" class=\"swiper-slide\">\n                        <img [attr.data-src]=\"image\" class=\"swiper-lazy\">\n                        <div class=\"swiper-lazy-preloader\"></div>\n                    </div> \n                </div>  \n                <div class=\"swiper-pagination white\"></div>  \n                <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon class=\"mat-icon-lg\">keyboard_arrow_left</mat-icon></button>\n                <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon class=\"mat-icon-lg\">keyboard_arrow_right</mat-icon></button>\n            </div>\n        </div>\n\n        <div class=\"control-icons\">\n            <button mat-button [disabled]=\"onFavorites()\" (click)=\"addToFavorites()\" [matTooltip]=\"'P_ITEM.FAV' | translate\">\n                <mat-icon class=\"mat-icon-sm\">favorite_border</mat-icon>\n            </button>\n            <button mat-button [disabled]=\"onCompare()\" (click)=\"addToCompare()\" [matTooltip]=\"'P_ITEM.COMP' | translate\">\n                <mat-icon class=\"mat-icon-sm\">compare_arrows</mat-icon>\n            </button>  \n        </div> \n\n    </div>\n    <div fxFlex=\"100\" [fxFlex.gt-sm]=\"(viewType=='list') ? 60 : 100\" [fxFlex.sm]=\"(viewType=='list') ? 50 : 100\" class=\"p-3\">\n\n        <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\" class=\"h-100\">\n            <mat-card-content class=\"mb-0\">\n              \n                <h1 class=\"title\"><a [routerLink]=\"['/properties', property.id]\">{{property.title}}</a></h1>\n\n                <p fxLayout=\"row\" class=\"address\">\n                    <mat-icon class=\"text-muted\">location_on</mat-icon>\n                    <span>{{property.formattedAddress}}</span>\n                </p>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                    <div>\n                        <h3 *ngIf=\"settings.currency == 'USD'\" class=\"primary-color price\">\n                            <span *ngIf=\"property.priceDollar.sale\">{{property.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\n                            <span *ngIf=\"property.priceDollar.rent\">{{property.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}} /month</span>\n                        </h3>\n                        <!-- <h3 *ngIf=\"settings.currency == 'EUR'\" class=\"primary-color price\">\n                            <span *ngIf=\"property.priceEuro.sale\">{{property.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\n                            <span *ngIf=\"property.priceEuro.rent\">{{property.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /month</span>\n                        </h3> -->\n                    </div>\n                    <app-rating [ratingsCount]=\"property.ratingsCount\" [ratingsValue]=\"property.ratingsValue\"></app-rating>\n                </div>\n\n                <div *ngIf=\"viewType=='list' && fullWidthPage\" fxShow=\"false\" fxShow.gt-sm class=\"mt-3\"> \n                    <p>{{property.desc}}</p>\n                </div>\n\n                <div class=\"features mt-3\">                    \n                    <p><span>{{ 'P_ITEM.I_SIZE' | translate }}</span><span>{{property.area.value}} {{property.area.unit}}</span></p>\n                    <p><span>{{ 'P_ITEM.I_ROOMS' | translate }}</span><span>{{property.bedrooms}}</span></p>\n                    <p><span>{{ 'P_ITEM.I_BATHROOMS' | translate }}</span><span>{{property.bathrooms}}</span></p>\n                    <p><span>{{ 'P_ITEM.I_GARAGES' | translate }}</span><span>{{property.garages}}</span></p>\n                    <a href=\"https://www.fmls.com/dmca.htm\" target=\"_blank\"><img src=\"assets/images/others/FMLS logo.png\" width=\"50%\" height=\"auto\"></a>\n                </div> \n\n            </mat-card-content>\n            <div class=\"sticky-footer-helper\" fxFlex=\"grow\"></div>\n            <mat-card-actions class=\"m-0 p-0\" fxLayoutAlign=\"space-between center\"> \n                <p fxLayout=\"row\" class=\"date mb-0\">\n                    <mat-icon class=\"text-muted\">date_range</mat-icon>\n                    <span class=\"mx-2\">{{property.published | date:\"dd MMMM, yyyy\" }}</span>\n                </p>\n                <div>\n                    <a [routerLink]=\"['/properties', property.id]\" mat-stroked-button color=\"primary\" class=\"uppercase\">{{ 'P_ITEM.I_DETAILS' | translate }}</a>\n                </div> \n            </mat-card-actions> \n        </div>        \n        \n    </div> \n\n</mat-card>");

/***/ }),

/***/ 16889:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/rating/rating.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"ratings\" [matTooltip]=\"ratingsCount + ' ratings'\">        \n  <mat-icon *ngFor=\"let star of stars;\" class=\"mat-icon-sm\">{{star}}</mat-icon>\n</div>");

/***/ }),

/***/ 15158:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/testimonials/testimonials.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"section testimonials\">\n    <div class=\"px-3\">\n        <div class=\"theme-container\">\n            <!-- <h1 class=\"section-title\">What people are saying</h1> -->\n\n            <div class=\"testimonials-carousel\"> \n                <div class=\"swiper-container h-100\" [swiper]=\"config\"> \n                    <div class=\"swiper-wrapper h-100\">      \n                        <div *ngFor=\"let testimonial of testimonials\" class=\"swiper-slide\">\n                            <div class=\"content text-center\">\n                                <img [attr.data-src]=\"testimonial.image\" class=\"swiper-lazy\">\n                                <div class=\"quote open text-left primary-color\">“</div>\n                                <p class=\"text\">{{testimonial.text}}</p>\n                                <div class=\"quote close text-right primary-color\">”</div> \n                                <h3 class=\"author\">{{testimonial.author}}</h3>\n                                <p>{{testimonial.position}}</p> \n                                <div class=\"swiper-lazy-preloader\"></div>\n                            </div>\n                        </div>\n                    </div> \n                    <div class=\"swiper-pagination\"></div> \n                </div>\n            </div>\n                \n        </div>\n    </div>   \n</div>\n\n ");

/***/ }),

/***/ 57977:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/videocontact/videocontact.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <div class=\"rounded overflow-hidden shadow\">\n    <youtube-player\n      videoId=\"mm09KpWhYwE\"\n      suggestedQuality=\"highres\"\n      [height]=\"400\"\n      [width]=\"600\"\n      fxLayoutAlign=\"center\"\n    ></youtube-player>\n  </div>\n  <app-contact-form></app-contact-form>\n</div>\n");

/***/ }),

/***/ 23754:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/contacts/contacts.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span fxLayoutAlign=\"center center\" class=\"item\">\n  <mat-icon [color]=\"iconColor\" [ngClass]=\"'mat-icon-' + iconSize\">call</mat-icon>\n  <span class=\"px-1\"><a href=\"tel:+1 (678) 744-8007\" style=\"color: white;\">+1 (678) 744-8007</a></span>\n</span>\n<span *ngIf=\"dividers\" class=\"v-divider\"></span>\n<span fxLayoutAlign=\"center center\" class=\"item\">\n  <mat-icon [color]=\"iconColor\" [ngClass]=\"'mat-icon-' + iconSize\">location_on</mat-icon>\n  <span class=\"px-1\"><a href=\"http://maps.google.com/?q=6015 Atlantic Blvd Suite D, Norcross, GA 30071, Estados Unidos\" target=\"_blank\" style=\"color: white;\">6015 Atlantic Blvd Suite D, Norcross, GA 30071, Estados Unidos</a></span>\n</span>\n<span *ngIf=\"dividers\" class=\"v-divider\"></span>\n<span fxLayoutAlign=\"center center\" class=\"item\">\n  <mat-icon [color]=\"iconColor\" [ngClass]=\"'mat-icon-' + iconSize\">mail</mat-icon>\n  <span class=\"px-1\"><a href=\"mailto:mihogarenatlanta@gmail.com\" style=\"color: white;\">mihogarenatlanta@gmail.com</a></span>\n</span>\n");

/***/ }),

/***/ 33629:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/currency/currency.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <a mat-button [matMenuTriggerFor]=\"currencyMenu\" #currencyMenuTrigger=\"matMenuTrigger\">\n    <span>{{currency}}</span><mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\n</a>\n<mat-menu #currencyMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-menu-panel\">\n    <span (mouseleave)=\"currencyMenuTrigger.closeMenu()\">\n        <button mat-menu-item *ngFor=\"let cur of currencies\" (click)=\"changeCurrency(cur)\">\n            <span>{{cur}}</span>\n        </button>\n    </span>\n</mat-menu> -->\n");

/***/ }),

/***/ 44000:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/footer/footer.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<footer>\n  <div class=\"px-3\">\n    <div class=\"theme-container\">\n      <!-- <div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\" fxLayoutAlign=\"center center\" class=\"content border-lighter py-5\">\n                <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" fxLayout=\"column\" fxLayoutAlign=\"center center\"> \n                    <h2 class=\"uppercase\">Suscribete a nuestro periodico</h2>\n                    <p class=\"desc mb-1\">Mantente actualizado con las ultimas noticias y propiedades</p>\n                </div>\n                <form [formGroup]=\"subscribeForm\" (ngSubmit)=\"onSubscribeFormSubmit(subscribeForm.value)\" class=\"custom-form\" fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"42.4\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\n                    <mat-form-field appearance=\"outline\" floatLabel=\"always\" class=\"subscribe-input\" fxFlex>\n                        <input matInput autocomplete=\"off\" formControlName=\"email\" placeholder=\"Your email address...\">                      \n                    </mat-form-field>\n                    <button mat-flat-button type=\"submit\" class=\"subscribe-btn\" color=\"primary\">Subscribe</button>\n                </form>\n            </div> -->\n      <div class=\"py-5 content border-lighter\">\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\">\n          <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"45\">\n            <a class=\"logo\" routerLink=\"/\"><app-logo></app-logo></a>\n            <span\n              ><img src=\"assets/images/others/eXp-Realty-White.png\" class=\"exp\"\n            /></span>\n            <p class=\"mt-5 mb-3 desc\"></p>\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-2\">\n              <mat-icon color=\"primary\">location_on</mat-icon>\n              <span class=\"mx-2\"\n                ><a\n                  href=\"http://maps.google.com/?q=6015 Atlantic Blvd Suite D, Norcross, GA 30071, Estados Unidos\"\n                  target=\"_blank\"\n                  style=\"color: white\"\n                  >6015 Atlantic Blvd Suite D, Norcross, GA 30071, Estados\n                  Unidos</a\n                ></span\n              >\n            </p>\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1\">\n              <mat-icon color=\"primary\">call</mat-icon>\n              <span class=\"mx-2\"\n                ><a href=\"tel:+1 (678) 744-8007\" style=\"color: white\"\n                  >+1 (678) 744-8007</a\n                ></span\n              >\n            </p>\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1\">\n              <mat-icon color=\"primary\">mail_outline</mat-icon>\n              <span class=\"mx-2\"\n                ><a\n                  href=\"mailto:mihogarenatlanta@gmail.com\"\n                  style=\"color: white\"\n                  >mihogarenatlanta@gmail.com</a\n                ></span\n              >\n            </p>\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1\">\n              <mat-icon color=\"primary\">schedule</mat-icon>\n              <span class=\"mx-2\"\n                >{{ \"FOOT.SCHEDULE\" | translate }} / 10:00AM - 6:00PM</span\n              >\n            </p>\n            <app-social-icons\n              [iconSize]=\"'lg'\"\n              fxLayout=\"row\"\n              fxLayoutAlign=\"start center\"\n              class=\"desc\"\n            ></app-social-icons>\n          </div>\n\n          <!-- <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"45\" ngClass.xs=\"pt-5\"> \n                        <h2 class=\"uppercase\">Opinion</h2>\n                        <p class=\"desc\">Queremos tu opinion sobretodo todo</p>\n                        <form [formGroup]=\"feedbackForm\" (ngSubmit)=\"onFeedbackFormSubmit(feedbackForm.value)\" class=\"custom-form pt-2\">                            \n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>E-mail</mat-label> \n                                <input matInput autocomplete=\"off\" formControlName=\"email\">\n                                <mat-error *ngIf=\"feedbackForm.controls.email.errors?.required\">Email is required</mat-error>\n                                <mat-error *ngIf=\"feedbackForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\n                            </mat-form-field>\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                                <mat-label>Mensaje para nosotros</mat-label> \n                                <textarea matInput formControlName=\"message\" rows=\"6\"></textarea> \n                                <mat-error *ngIf=\"feedbackForm.controls.message.errors?.required\">Message is required</mat-error>\n                            </mat-form-field>\n                            <div class=\"w-100 text-center\">\n                                <button mat-flat-button color=\"primary\" class=\"uppercase\" type=\"submit\">Enviar</button> \n                            </div> \n                        </form> \n                    </div> -->\n\n          <div fxFlex=\"100\" fxFlex.gt-sm=\"70\" ngClass.lt-md=\"pt-5\">\n            <h2 class=\"uppercase mb-3\">{{ \"FOOT.LOCAT\" | translate }}</h2>\n            <agm-map\n              [latitude]=\"lat\"\n              [longitude]=\"lng\"\n              [zoom]=\"zoom\"\n              [mapTypeControl]=\"false\"\n              [styles]=\"mapStyles\"\n            >\n              <agm-marker\n                [latitude]=\"lat\"\n                [longitude]=\"lng\"\n                [markerDraggable]=\"false\"\n              ></agm-marker>\n            </agm-map>\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1\">\n              <span class=\"mx-2\"\n                ><img\n                  src=\"assets/images/others/FMLS logo.png\"\n                  width=\"25%\"\n                  height=\"auto\"\n                />Listings identified with the FMLS IDX logo come from FMLS and\n                are held by brokerage firms other than the owner of this\n                website. The listing brokerage is identified in any listing\n                details. Information is deemed reliable but is not guaranteed.\n                If you believe any FMLS listing contains material that infringes\n                your copyrighted work please\n                <a\n                  href=\"https://www.fmls.com/dmca.htm\"\n                  style=\"color: white\"\n                  target=\"_blank\"\n                  >click here</a\n                >\n                to review our DMCA policy and learn how to submit a takedown\n                request. © 2022 First Multiple Listing Service, Inc.</span\n              >\n            </p>\n            <p fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mt-1\">\n              <span\n                class=\"mx-2\"\n                [innerHTML]=\"'FOOT.I-NIMBLEBRAND' | translate\"\n              ></span>\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div\n        fxLayout=\"row\"\n        fxLayout.xs=\"column\"\n        fxLayoutAlign=\"space-between center\"\n        class=\"copyright\"\n      >\n        <p ngClass.xs=\"mt-1\">Copyright © 2022 All Rights Reserved</p>\n        <p><a></a></p>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ 74886:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/lang/lang.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button mat-button [matMenuTriggerFor]=\"langMenu\" #langMenuTrigger=\"matMenuTrigger\" class=\"lang-btn\">\n    <img [src]=\"'assets/images/flags/'+translateService.currentLang+'.svg'\" width=\"18\" [alt]=\"translateService.currentLang\" class=\"mat-elevation-z1\">   \n    <span fxShow=\"false\" fxShow.gt-md class=\"uppercase flag-name\">{{langName}}</span>\n    <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\n</button>\n<mat-menu #langMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-menu-panel lang\">\n    <span (mouseleave)=\"langMenuTrigger.closeMenu()\">  \n        <button *ngFor=\"let lang of translateService.getLangs()\" mat-menu-item (click)=\"changeLang(lang)\">  \n            <img [src]=\"'assets/images/flags/'+lang+'.svg'\" width=\"18\" [alt]=\"lang\" class=\"mat-elevation-z1\"> \n            <span class=\"flag-name\">{{getLangName(lang)}}</span> \n        </button> \n    </span>\n</mat-menu>");

/***/ }),

/***/ 32856:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-container *ngFor=\"let menuItem of menuItems\">\n\n  <a *ngIf=\"menuItem.routerLink && !menuItem.hasSubMenu\" mat-button [routerLink]=\"[menuItem.routerLink]\" \n    routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">\n    <span>{{ menuItem.title | translate }}</span>\n  </a>\n\n  <a *ngIf=\"menuItem.href && !menuItem.hasSubMenu\" mat-button \n    [attr.href]=\"menuItem.href || ''\" [attr.target]=\"menuItem.target || ''\">\n    <span>{{ menuItem.title | translate }}</span>\n  </a>\n\n  <a *ngIf=\"menuItem.hasSubMenu && menuItem.parentId == 0\" mat-button [matMenuTriggerFor]=\"menu\"> \n    <span>{{ menuItem.title | translate }}</span><mat-icon class=\"caret\">arrow_drop_down</mat-icon> \n  </a>\n\n  <a *ngIf=\"menuItem.hasSubMenu && menuItem.parentId != 0\" mat-menu-item [matMenuTriggerFor]=\"menu\"> \n    <span>{{ menuItem.title | translate }}</span> \n  </a> \n\n  <mat-menu #menu=\"matMenu\" class=\"horizontal-sub-menu\">\n      <app-horizontal-menu [menuParentId]=\"menuItem.id\"></app-horizontal-menu>\n  </mat-menu>\n    \n</ng-container>");

/***/ }),

/***/ 71927:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngFor=\"let menu of menuItems\" class=\"menu-item\">\n  <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button\n      fxLayout=\"row\" fxLayoutAlign=\"start center\"\n      [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"        \n      (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\n      <span class=\"menu-title\">{{ menu.title | translate }}</span>\n  </a>\n  <a *ngIf=\"menu.href && !menu.hasSubMenu\" mat-button \n      fxLayout=\"row\" fxLayoutAlign=\"start center\"\n      [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"       \n      (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\n      <span class=\"menu-title\">{{ menu.title | translate }}</span>\n  </a>\n  <a *ngIf=\"menu.hasSubMenu\" mat-button \n      fxLayout=\"row\" fxLayoutAlign=\"start center\"       \n      (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\n      <span class=\"menu-title\">{{ menu.title | translate }}</span>\n      <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\n  </a>\n  <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\n      <app-vertical-menu [menuParentId]=\"menu.id\"></app-vertical-menu>\n  </div>\n</div>");

/***/ }),

/***/ 26613:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/social-icons/social-icons.component.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<a href=\"https://www.facebook.com/mihogarenatlanta/\" target=\"blank\" class=\"social-icon\">\n  <svg class=\"mat-icon\" viewBox=\"0 0 24 24\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\n    <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\" />\n  </svg>\n</a>\n<a href=\"https://www.instagram.com/mihogarenatlanta/\" target=\"blank\" class=\"social-icon\">\n  <svg class=\"mat-icon\" viewBox=\"-20 -20 300 300\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\n    <path d=\"M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z\"></path>\n  </svg> \n</a>\n<!-- <a href=\"https://www.linkedin.com/in/carmela-moreno-1a7392148/\" target=\"blank\" class=\"social-icon\"> \n  <svg class=\"mat-icon\" viewBox=\"3 3 42 42\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\n    <path d=\"M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z\"></path>\n  </svg>\n</a> -->\n<a href=\"https://t.me/Mihogarenatlanta\" target=\"blank\" class=\"social-icon\"> \n  <svg class=\"mat-icon\" viewBox=\"-2 -2 19 19\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\n    <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z\"/>\n  </svg>\n</a>\n<a href=\"https://wa.me/14048443264\" target=\"blank\" class=\"social-icon\"> \n  <svg class=\"mat-icon\" viewBox=\"-3 -3 55 55\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\n    <path d=\"M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z\"/>\n  </svg>\n</a>");

/***/ }),

/***/ 13272:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/toolbar1/toolbar1.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-toolbar id=\"top-toolbar\" class=\"top-toolbar\">\n  <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <span fxHide=\"false\" fxHide.gt-sm>\n        <button mat-button (click)=\"sidenavToggle()\">\n          <mat-icon>menu</mat-icon>\n        </button> \n      </span>\n      <app-contacts fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-sm></app-contacts>         \n    </div>\n    <app-social-icons fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-md></app-social-icons>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"\">\n      <app-lang></app-lang>\n      <app-user-menu></app-user-menu>\n    </div>    \n  </div>           \n</mat-toolbar>  \n<mat-toolbar id=\"main-toolbar\" class=\"mat-elevation-z2\"> \n  <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <a class=\"logo\" routerLink=\"/\" ><app-logo></app-logo></a> \n    <div fxShow=\"false\" fxShow.gt-sm class=\"horizontal-menu\">            \n        <app-horizontal-menu [menuParentId]=\"0\"></app-horizontal-menu>\n    </div> \n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <a routerLink=\"/account/favorites\" mat-icon-button matTooltip=\"Favorites\" fxShow=\"false\" fxShow.gt-md>\n          <mat-icon [matBadge]=\"appService.Data.favorites.length\" \n                    [matBadgeHidden]=\"appService.Data.favorites.length == 0\" \n                    matBadgeSize=\"small\" \n                    matBadgeColor=\"warn\">favorite_border</mat-icon>\n      </a>\n      <a routerLink=\"/compare\" mat-icon-button matTooltip=\"Compare list\" fxShow=\"false\" fxShow.gt-md class=\"mr-3 ml-2\">\n          <mat-icon [matBadge]=\"appService.Data.compareList.length\" \n                    [matBadgeHidden]=\"appService.Data.compareList.length == 0\" \n                    matBadgeSize=\"small\" \n                    matBadgeColor=\"warn\">compare_arrows</mat-icon>\n      </a>      \n      <!-- <a routerLink=\"/submit-property\" mat-mini-fab color=\"primary\" fxHide=\"false\" fxHide.gt-xs><mat-icon>add</mat-icon></a>\n      <a routerLink=\"/submit-property\" mat-raised-button color=\"primary\" fxShow=\"false\" fxShow.gt-xs class=\"uppercase\">{{ 'SUBMIT_PROPERTY' | translate }}</a> -->\n    </div>   \n  </div>     \n</mat-toolbar>");

/***/ }),

/***/ 59705:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/toolbar2/toolbar2.component.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-toolbar id=\"top-toolbar\" class=\"top-toolbar\">\n  <mat-toolbar-row  ngClass.xs=\"p-0\">\n    <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutAlign.gt-sm=\"end center\" fxLayoutAlign.sm=\"space-between center\">\n      <app-social-icons [iconSize]=\"'lg'\" [iconColor]=\"'primary'\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide=\"false\" fxHide.gt-sm fxHide.xs></app-social-icons>\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.xs class=\"bg-primary right-section px-2\">\n        <app-social-icons fxLayout=\"row\" fxLayoutAlign=\"start center\"></app-social-icons>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"bg-primary right-section\" ngClass.xs=\"w-100\">\n          <app-lang></app-lang>\n          <app-user-menu></app-user-menu>\n      </div>    \n    </div>\n  </mat-toolbar-row>\n  <mat-toolbar-row ngClass.xs=\"py-3\">\n    <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutAlign.gt-sm=\"space-between center\">\n      <a class=\"logo\" routerLink=\"/\" ><app-logo></app-logo></a> \n      <app-contacts [dividers]=\"false\" [iconColor]=\"'primary'\" [iconSize]=\"'lg'\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-sm></app-contacts>   \n      <app-social-icons [iconSize]=\"'lg'\" [iconColor]=\"'primary'\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxShow=\"false\" fxShow.gt-sm></app-social-icons>\n    </div> \n  </mat-toolbar-row>              \n</mat-toolbar>\n<mat-toolbar id=\"main-toolbar\" class=\"mat-elevation-z2\"> \n  <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">    \n    <mat-icon class=\"mat-icon-xlg\" fxHide=\"false\" fxHide.gt-sm (click)=\"sidenavToggle()\">menu</mat-icon>\n    <div fxShow=\"false\" fxShow.gt-sm class=\"horizontal-menu\">            \n        <app-horizontal-menu [menuParentId]=\"0\"></app-horizontal-menu>\n    </div>     \n    <div>\n      <a routerLink=\"/account/favorites\" mat-icon-button matTooltip=\"Favorites\" fxShow=\"false\" fxShow.gt-md>\n        <mat-icon [matBadge]=\"appService.Data.favorites.length\" \n                  [matBadgeHidden]=\"appService.Data.favorites.length == 0\" \n                  matBadgeSize=\"small\" \n                  matBadgeColor=\"warn\">favorite_border</mat-icon>\n      </a>\n      <a routerLink=\"/compare\" mat-icon-button matTooltip=\"Compare list\" fxShow=\"false\" fxShow.gt-md class=\"mr-3 ml-2\">\n        <mat-icon [matBadge]=\"appService.Data.compareList.length\" \n                  [matBadgeHidden]=\"appService.Data.compareList.length == 0\" \n                  matBadgeSize=\"small\" \n                  matBadgeColor=\"warn\">compare_arrows</mat-icon>\n      </a>\n      <!-- <a routerLink=\"/submit-property\" mat-mini-fab color=\"accent\" fxHide=\"false\" fxHide.gt-xs><mat-icon>add</mat-icon></a>\n      <a routerLink=\"/submit-property\" mat-raised-button color=\"accent\" fxShow=\"false\" fxShow.gt-xs class=\"uppercase\">{{ 'SUBMIT_PROPERTY' | translate }}</a> -->\n    </div>  \n  </div>     \n</mat-toolbar>");

/***/ }),

/***/ 55042:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/user-menu/user-menu.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<a mat-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\">\n    <mat-icon class=\"mat-icon-sm\">person</mat-icon>\n    <span fxShow=\"false\" fxShow.gt-sm class=\"mx-1 uppercase\">{{ 'ACCOUNT' | translate }}</span> \n    <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\n</a>\n<mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-menu-panel user-menu\">\n    <span (mouseleave)=\"userMenuTrigger.closeMenu()\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"user-info\">                   \n            <img src=\"assets/images/others/user.jpg\" alt=\"user-image\" width=\"50\">\n            <p class=\"m-0\">INVITADO<br>\n        </div>\n        <div class=\"divider\"></div>\n        <!-- <a mat-menu-item routerLink=\"/submit-property\"> \n            <mat-icon class=\"mat-icon-sm\">add_circle</mat-icon>\n            <span>{{ 'SUBMIT_PROPERTY' | translate }}</span> \n        </a> -->\n        <!-- <a mat-menu-item routerLink=\"/account/my-properties\"> \n            <mat-icon class=\"mat-icon-sm\">home</mat-icon>\n            <span>{{ 'MY_PROPERTIES' | translate }}</span> \n        </a> -->\n        <a mat-menu-item routerLink=\"/account/favorites\"> \n            <mat-icon class=\"mat-icon-sm\">favorite_border</mat-icon>\n            <span [matBadge]=\"appService.Data.favorites.length\" \n                  [matBadgeHidden]=\"appService.Data.favorites.length == 0\"\n                  matBadgeSize=\"small\" \n                  matBadgeColor=\"warn\" \n                  matBadgeOverlap=\"false\"> {{ 'FAVORITES' | translate }}</span> \n        </a>\n        <a mat-menu-item routerLink=\"/compare\"> \n            <mat-icon class=\"mat-icon-sm\">compare_arrows</mat-icon> \n            <span [matBadge]=\"appService.Data.compareList.length\" \n                  [matBadgeHidden]=\"appService.Data.compareList.length == 0\"\n                  matBadgeSize=\"small\" \n                  matBadgeColor=\"warn\" \n                  matBadgeOverlap=\"false\">{{ 'COMPARE' | translate }}</span> \n        </a>\n        <!-- <a mat-menu-item routerLink=\"/\"> \n            <mat-icon class=\"mat-icon-sm\">search</mat-icon>\n            <span>Saved Searches</span> \n        </a> -->\n        <!-- <a mat-menu-item routerLink=\"/account/profile\"> \n            <mat-icon class=\"mat-icon-sm\">edit</mat-icon>\n            <span>{{ 'EDIT_PROFILE' | translate }}</span> \n        </a> -->\n        <!-- <a mat-menu-item routerLink=\"/lock-screen\"> \n            <mat-icon class=\"mat-icon-sm\">lock</mat-icon>\n            <span>{{ 'LOCK_SCREEN' | translate }}</span> \n        </a> -->\n        <!-- <a mat-menu-item routerLink=\"/faq\"> \n            <mat-icon class=\"mat-icon-sm\">help</mat-icon>\n            <span>{{ 'HELP' | translate }}</span> \n        </a> -->\n        <!-- <div class=\"divider\"></div>\n        <a mat-menu-item routerLink=\"/login\"> \n            <mat-icon class=\"mat-icon-sm\">power_settings_new</mat-icon>\n            <span>{{ 'LOGOUT' | translate }}</span> \n        </a> -->\n    </span>\n</mat-menu>  ");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map