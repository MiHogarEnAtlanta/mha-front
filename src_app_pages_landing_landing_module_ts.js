(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_landing_landing_module_ts"],{

/***/ 72768:
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./landing.component.html */ 62974);
/* harmony import */ var _landing_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component.scss */ 97309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ 1182);






let LandingComponent = class LandingComponent {
    constructor(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        document.getElementById('preloader').classList.add('hide');
    }
    getDemo(number) {
        if (number == 1) {
            this.settings.toolbar = 1;
            this.settings.header = 'default';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 2) {
            this.settings.toolbar = 1;
            this.settings.header = 'image';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 3) {
            this.settings.toolbar = 1;
            this.settings.header = 'carousel';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 4) {
            this.settings.toolbar = 1;
            this.settings.header = 'video';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 5) {
            this.settings.toolbar = 1;
            this.settings.header = 'map';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 6) {
            this.settings.toolbar = 1;
            this.settings.header = 'map';
            this.settings.theme = 'orange-dark';
            this.settings.rtl = false;
        }
        if (number == 7) {
            this.settings.toolbar = 2;
            this.settings.header = 'image';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
        }
        if (number == 8) {
            this.settings.toolbar = 2;
            this.settings.header = 'image';
            this.settings.theme = 'orange-dark';
            this.settings.rtl = false;
        }
        if (number == 9) {
            this.settings.toolbar = 1;
            this.settings.header = 'image';
            this.settings.theme = 'blue';
            this.settings.rtl = true;
        }
        this.router.navigate(['/']);
    }
    getSkin(num) {
        if (num == 1) {
            this.settings.theme = 'blue';
            this.settings.header = "carousel";
        }
        if (num == 2) {
            this.settings.theme = 'green';
            this.settings.header = "carousel";
        }
        if (num == 3) {
            this.settings.theme = 'red';
            this.settings.header = "carousel";
        }
        if (num == 4) {
            this.settings.theme = 'pink';
            this.settings.header = "carousel";
        }
        if (num == 5) {
            this.settings.theme = 'purple';
            this.settings.header = "carousel";
        }
        if (num == 6) {
            this.settings.theme = 'grey';
            this.settings.header = "carousel";
        }
        this.settings.toolbar = 1;
        this.settings.rtl = false;
        this.router.navigate(['/']);
    }
    scrollToDemos() {
        var elmnt = document.getElementById("demos");
        elmnt.scrollIntoView({ behavior: "smooth" });
    }
    goToTop() {
        var elmnt = document.getElementById("top");
        elmnt.scrollIntoView({ behavior: "smooth" });
    }
};
LandingComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__.AppSettings },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LandingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-landing',
        template: _raw_loader_landing_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_landing_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LandingComponent);



/***/ }),

/***/ 97241:
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "LandingModule": () => (/* binding */ LandingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component */ 72768);






const routes = [
    { path: '', component: _landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent, pathMatch: 'full' }
];
let LandingModule = class LandingModule {
};
LandingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ]
    })
], LandingModule);



/***/ }),

/***/ 97309:
/*!******************************************************!*\
  !*** ./src/app/pages/landing/landing.component.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".landing-page .header-section {\n  position: relative;\n  overflow: hidden;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-image: url('1-big.jpg');\n}\n.landing-page .header-section:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.81);\n}\n.landing-page .header-section .content {\n  position: relative;\n  z-index: 9;\n  color: #fff;\n  text-align: center;\n}\n.landing-page .header-section .content h1 {\n  font-size: 36px;\n  font-weight: 400;\n}\n.landing-page .header-section .content h4 {\n  font-size: 16px;\n  font-weight: 300;\n  max-width: 700px;\n  margin: 0 auto;\n}\n.landing-page .main-wrapper {\n  margin: -16px;\n}\n.landing-page .main-wrapper .box {\n  text-align: center;\n  padding: 16px;\n  margin-bottom: 24px;\n}\n.landing-page .main-wrapper .box h2 {\n  padding: 16px 0;\n  font-weight: 500;\n}\n.landing-page .main-wrapper .box .mat-card {\n  background-size: cover;\n  height: 300px;\n  background-position: top;\n  transition: 5s;\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.landing-page .main-wrapper .box:hover .mat-card {\n  background-position: bottom;\n}\n.landing-page p {\n  font-size: 16px;\n}\n.landing-page .copyright {\n  margin-top: 36px;\n  height: 64px;\n}\n.landing-page .copyright p {\n  font-size: 13px;\n  font-weight: 400;\n  margin-bottom: 0;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7QUFBUjtBQUNRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUFDWjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ1o7QUFBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRWhCO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ1o7QUFBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUFZO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EseUhBQUE7QUFFaEI7QUFHZ0I7RUFDSSwyQkFBQTtBQURwQjtBQU9JO0VBQ0ksZUFBQTtBQUxSO0FBT0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFMUjtBQU1RO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUpaIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZy1wYWdleyBcbiAgICAuaGVhZGVyLXNlY3Rpb257IFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9wcy9vZmZpY2UtMi8xLWJpZy5qcGcnKTsgICAgICAgXG4gICAgICAgICY6YmVmb3JleyAgICAgICAgXG4gICAgICAgICAgICBjb250ZW50OiAnJzsgICAgICAgIFxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgMC44MSk7ICBcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjsgICAgICAgICAgICBcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgXG4gICAgfVxuICAgIC5tYWluLXdyYXBwZXJ7XG4gICAgICAgIG1hcmdpbjogLTE2cHg7XG4gICAgICAgIC5ib3h7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4OyAgXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4OyAgICAgICAgIFxuICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWF0LWNhcmR7IFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogNXM7IFxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgICAgIC5tYXQtY2FyZHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgLmNvcHlyaWdodHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ 62974:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mat-drawer-container class=\"landing-page\">\n       \n    <div class=\"p-3 header-section\" id=\"top\">\n        <div class=\"theme-container\">\n            <div fxLayout=\"row wrap\" class=\"content\">\n                <div fxFlex=\"100\" class=\"mb-5 py-3\"> \n                    <app-logo></app-logo>\n                </div>\n                <div fxFlex=\"100\" class=\"py-5\"> \n                    <h1>Angular Material Design Real Estate Template</h1>\n                    <h4 class=\"mt-3\">Housekey implements the official Angular Material Design components and built with Angular CLI. No Bootstrap!, No jQuery! and Only TypeScript! Start creating your app with Housekey template, 9 layouts, 7 color styles, 20+ pages</h4>\n                    <div class=\"py-5\">\n                        <button mat-raised-button color=\"primary\" class=\"uppercase mx-2\" (click)=\"scrollToDemos()\">View demos</button>\n                        <a mat-raised-button color=\"accent\" href=\"http://themeseason.com/\" target=\"_blank\" class=\"uppercase mx-2\">Purchase now</a> \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> \n\n    <div class=\"p-3\">\n        <div class=\"theme-container\">\n\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" id=\"demos\">\n                <div fxFlex=\"100\" class=\"text-center py-4\"> \n                    <h1 class=\"fw-500\">Check out our demo styles</h1>\n                    <p>Fully responsive, organized folder structure, clean & customizable code, easy to use and much more...</p>\n                </div>\n                <div fxFlex=\"100\" class=\"main-wrapper\">\n\n                    <div fxLayout=\"row wrap\">\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-default.jpg)'\"></mat-card>\n                            <h2>Header default</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(1)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-image.jpg)'\"></mat-card>\n                            <h2>Header image</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(2)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-carousel.jpg)'\"></mat-card>\n                            <h2>Header carousel</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(3)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-video.jpg)'\"></mat-card>\n                            <h2>Header video</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(4)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-map.jpg)'\"></mat-card>\n                            <h2>Header map</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(5)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/dark-map.jpg)'\"></mat-card>\n                            <h2>Dark map</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(6)\">View demo</button>\n                        </div> \n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/toolbar-2.jpg)'\"></mat-card>\n                            <h2>Toolbar version 2</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(7)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/dark.jpg)'\"></mat-card>\n                            <h2>Dark version</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(8)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/rtl.jpg)'\"></mat-card>\n                            <h2>RTL</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(9)\">View demo</button>\n                        </div>\n\n                        <div fxFlex=\"100\" class=\"mt-5\">                               \n                            <h1 class=\"text-center\">Skins</h1> \n                        </div>\n\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/blue.jpg)'\"></mat-card>\n                            <h2>Blue</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(1)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/green.jpg)'\"></mat-card>\n                            <h2>Green</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(2)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/red.jpg)'\"></mat-card>\n                            <h2>Red</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(3)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/pink.jpg)'\"></mat-card>\n                            <h2>Pink</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(4)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/purple.jpg)'\"></mat-card>\n                            <h2>Purple</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(5)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/grey.jpg)'\"></mat-card>\n                            <h2>Grey</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(6)\">View demo</button>\n                        </div>\n\n                        <div fxFlex=\"100\" class=\"py-4 px-3 text-right\">\n                            <button mat-mini-fab (click)=\"goToTop()\">\n                                <mat-icon>keyboard_arrow_up</mat-icon>\n                            </button>\n                        </div>\n\n                    </div>\n\n                </div> \n            </div> \n\n        </div>\n    </div>\n\n    <mat-toolbar class=\"copyright\">\n        <div class=\"theme-container\"> \n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\">\n                <p ngClass.xs=\"mt-1\">Copyright © 2021 All Rights Reserved</p>\n                <p>Designed & Developed by <a mat-button href=\"http://themeseason.com/\" target=\"_blank\">ThemeSeason</a></p>\n            </div>\n        </div>\n    </mat-toolbar> \n\n</mat-drawer-container>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_landing_landing_module_ts.js.map