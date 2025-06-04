(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_contact_contact_module_ts"],{

/***/ 45996:
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact.component.html */ 11839);
/* harmony import */ var _contact_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component.scss */ 25498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ 38955);






let ContactComponent = class ContactComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.lat = 33.94644;
        this.lng = -84.22954;
        this.zoom = 12;
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__.emailValidator])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
            console.log(values);
        }
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
ContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactComponent);



/***/ }),

/***/ 17213:
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "ContactModule": () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ 15971);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component */ 45996);







const routes = [
    { path: '', component: _contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent, pathMatch: 'full' }
];
let ContactModule = class ContactModule {
};
ContactModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_6__.AgmCoreModule
        ]
    })
], ContactModule);



/***/ }),

/***/ 25498:
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".contact-map .sebm-google-map-container {\n  height: 400px;\n}\n\n.container {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n  margin-top: 30px;\n  margin-bottom: 70px;\n  margin-left: 70px;\n  margin-right: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVKIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1tYXAgLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXIge1xuICAgIGhlaWdodDogNDAwcHg7XG59XG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59Il19 */");

/***/ }),

/***/ 11839:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header-video\n  [backgroundVideo]=\"'assets/Videos/atlanta15s.mp4'\"\n  [contentOffsetToTop]=\"true\"\n  [title]=\"'CONTACTO.CONTACTO_TITLE' | translate\"\n  [desc]=\"'CONTACTO.CONTACTO_DESC' | translate\"\n  [isHomePage]=\"false\"\n  [fullscreen]=\"false\"\n>\n  >\n</app-header-video>\n<div class=\"px-5\">\n  <div class=\"theme-container\">\n    <mat-card class=\"main-content-header mb-5\">\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around\">\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\">\n          <div\n            fxLayout=\"column\"\n            fxLayoutAlign=\"center center\"\n            class=\"text-center\"\n          >\n            <mat-icon color=\"primary\" class=\"mat-icon-lg\">home</mat-icon>\n            <h3 class=\"primary-color py-1\">\n              {{ \"CONTACTO.ADDRESS\" | translate }}\n            </h3>\n            <span\n              ><a\n                href=\"https://maps.app.goo.gl/fDicTyx48uErQhXb9\"\n                target=\"_blank\"\n                style=\"color: black\"\n                >6055 Atlantic Blvd Suite A1, Norcross, GA 30071, Estados Unidos</a\n              ></span\n            >\n          </div>\n        </div>\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <mat-icon color=\"primary\" class=\"mat-icon-lg\">call</mat-icon>\n            <h3 class=\"primary-color py-1\">\n              {{ \"CONTACTO.PHONE_NUMBERS\" | translate }}\n            </h3>\n            <span\n              ><a href=\"tel:+1 (678) 744-8007\" style=\"color: black\"\n                >+1 (678) 744-8007</a\n              ></span\n            >\n          </div>\n        </div>\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <mat-icon color=\"primary\" class=\"mat-icon-lg\"\n              >mail_outline</mat-icon\n            >\n            <h3 class=\"primary-color py-1\">\n              {{ \"CONTACTO.EMAIL\" | translate }}\n            </h3>\n            <span\n              ><a href=\"mailto:mihogarenatlanta@gmail.com\" style=\"color: black\"\n                >mihogarenatlanta@gmail.com</a\n              ></span\n            >\n            <!-- <span>info@housekey.com</span> -->\n          </div>\n        </div>\n        <!-- <div class=\"divider w-100 mt-3\"></div>\n                <h3 class=\"w-100 text-center py-3\">CONTACT US</h3> -->\n\n        <!-- <form [formGroup]=\"contactForm\" (ngSubmit)=\"onContactFormSubmit(contactForm.value)\" fxLayout=\"row wrap\">\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Name</mat-label>\n                            <input matInput placeholder=\"Name\" formControlName=\"name\" required>\n                            <mat-error *ngIf=\"contactForm.controls.name.errors?.required\">Name is required</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Email</mat-label>\n                            <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n                            <mat-error *ngIf=\"contactForm.controls.email.errors?.required\">Email is required</mat-error>\n                            <mat-error *ngIf=\"contactForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Phone</mat-label>\n                            <input matInput placeholder=\"Phone\" formControlName=\"phone\" required>\n                            <mat-error *ngIf=\"contactForm.controls.phone.errors?.required\">Phone is required</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" class=\"px-1 mt-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Message</mat-label> \n                            <textarea matInput placeholder=\"Message\" formControlName=\"message\" required rows=\"7\"></textarea> \n                            <mat-error *ngIf=\"contactForm.controls.message.errors?.required\">Message is required</mat-error>\n                        </mat-form-field>\n                    </div> \n                    <div class=\"w-100 py-2 text-center\">\n                        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Submit</button>\n                    </div> \n                </form>  -->\n      </div>\n\n      <!-- <div class=\"container\" gallerize>\n                <img *ngFor=\"let src of images\" src='src\\assets\\images\\fotosContact'>\n              </div> -->\n      <div class=\"container\">\n        <app-contact-form></app-contact-form>\n        <div class=\"rounded overflow-hidden shadow\">\n          <youtube-player\n            videoId=\"r5UQFAGyQuY\"\n            suggestedQuality=\"highres\"\n            [height]=\"280\"\n            [width]=\"420\"\n            fxLayoutAlign=\"center\"\n          ></youtube-player>\n        </div>\n      </div>\n\n      <!-- <div class=\"mt-5 contact-map\">\n        <agm-map\n          [latitude]=\"lat\"\n          [longitude]=\"lng\"\n          [zoom]=\"zoom\"\n          [mapTypeControl]=\"true\"\n          [fullscreenControl]=\"true\"\n        >\n          <agm-marker\n            [latitude]=\"lat\"\n            [longitude]=\"lng\"\n            [markerDraggable]=\"false\"\n          ></agm-marker>\n        </agm-map>\n      </div> -->\n    </mat-card>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contact_contact_module_ts.js.map