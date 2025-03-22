(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_faq_faq_module_ts"],{

/***/ 16459:
/*!********************************************!*\
  !*** ./src/app/pages/faq/faq.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_faq_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./faq.component.html */ 56888);
/* harmony import */ var _faq_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.component.scss */ 83545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let FaqComponent = class FaqComponent {
    constructor() {
        this.faqs = [
            {
                question: 'FAQ.Q1',
                status: 'Question about selling',
                answer: 'FAQ.A1'
            },
            {
                question: 'FAQ.Q2',
                status: 'Agents FAQs',
                answer: 'FAQ.A2'
            },
            {
                question: 'FAQ.Q3',
                status: 'Question about renting',
                answer: 'FAQ.A3'
            },
            {
                question: 'FAQ.Q4',
                status: 'Question about selling',
                answer: 'FAQ.A4'
            },
            {
                question: 'FAQ.Q5',
                status: 'Question about renting',
                answer: 'FAQ.A5'
            },
            {
                question: 'FAQ.Q6',
                status: 'Agents FAQs',
                answer: 'FAQ.A6'
            },
            {
                question: 'FAQ.Q7',
                status: 'Question about selling',
                answer: 'FAQ.A7'
            },
            {
                question: 'FAQ.Q8',
                status: 'Question about selling',
                answer: 'FAQ.A8'
            },
            {
                question: 'FAQ.Q9',
                status: 'Question about selling',
                answer: 'FAQ.A9'
            }
        ];
    }
    ngOnInit() {
    }
};
FaqComponent.ctorParameters = () => [];
FaqComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-faq',
        template: _raw_loader_faq_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_faq_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FaqComponent);



/***/ }),

/***/ 87119:
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "FaqModule": () => (/* binding */ FaqModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.component */ 16459);






const routes = [
    { path: '', component: _faq_component__WEBPACK_IMPORTED_MODULE_1__.FaqComponent, pathMatch: 'full' }
];
let FaqModule = class FaqModule {
};
FaqModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_faq_component__WEBPACK_IMPORTED_MODULE_1__.FaqComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], FaqModule);



/***/ }),

/***/ 83545:
/*!**********************************************!*\
  !*** ./src/app/pages/faq/faq.component.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 56888:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.component.html ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"p-3\">\n    <div class=\"theme-container\">\n  \n        <div class=\"my-3\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">  \n            <h1 class=\"uppercase\">{{ 'FAQ.TITLE' | translate }}</h1>             \n            <p>{{ 'FAQ.SUB_TITLE' | translate }}</p>\n          </div>\n          <mat-accordion multi=\"true\">              \n            <mat-expansion-panel *ngFor=\"let faq of faqs; let i = index;\"  [expanded]=\"i === 0\">\n              <mat-expansion-panel-header>\n                <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n                    <div class=\"fw-500\">{{faq.question | translate}}</div>\n                    <!-- <div fxShow=\"false\" fxShow.gt-sm=\"true\" class=\"text-muted\">\n                        {{faq.status}}  \n                    </div> -->\n                </mat-panel-title>               \n              </mat-expansion-panel-header>          \n                <p>{{faq.answer | translate}} </p>\n                <!-- <div class=\"divider\"></div>\n                <p class=\"mt-2 mb-0\"><small class=\"text-muted\">Was this answer helpful? <button mat-button>Yes</button><button mat-button>No</button></small></p> -->\n            </mat-expansion-panel>\n          </mat-accordion>\n        </div> \n\n    </div>\n</div>\n\n<!-- <app-get-in-touch></app-get-in-touch> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_faq_faq_module_ts.js.map