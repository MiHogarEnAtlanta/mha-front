(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_terms-conditions_terms-conditions_module_ts"],{

/***/ 10028:
/*!**********************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsComponent": () => (/* binding */ TermsConditionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_terms_conditions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./terms-conditions.component.html */ 61279);
/* harmony import */ var _terms_conditions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.component.scss */ 32818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TermsConditionsComponent = class TermsConditionsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TermsConditionsComponent.ctorParameters = () => [];
TermsConditionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-terms-conditions',
        template: _raw_loader_terms_conditions_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_terms_conditions_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TermsConditionsComponent);



/***/ }),

/***/ 28671:
/*!*******************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "TermsConditionsModule": () => (/* binding */ TermsConditionsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _terms_conditions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.component */ 10028);






const routes = [
    { path: '', component: _terms_conditions_component__WEBPACK_IMPORTED_MODULE_1__.TermsConditionsComponent, pathMatch: 'full' }
];
let TermsConditionsModule = class TermsConditionsModule {
};
TermsConditionsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_terms_conditions_component__WEBPACK_IMPORTED_MODULE_1__.TermsConditionsComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], TermsConditionsModule);



/***/ }),

/***/ 32818:
/*!************************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions.component.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".bold {\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6InRlcm1zLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9sZHtcbiAgICBmb250LXdlaWdodDogOTAwO1xufSJdfQ== */");

/***/ }),

/***/ 61279:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-conditions/terms-conditions.component.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"p-3\">\n  <div class=\"theme-container\">\n    <div class=\"my-3\">\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">\n        <h1 class=\"uppercase\">Terms & Conditions</h1>\n        <p>\n          In using this website you are deemed to have read and agreed to the\n          following terms and conditions:\n        </p>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"my-3\">\n        <mat-card class=\"p-5\">\n          <h2>1- SMS Consent Communication:</h2>\n          <p>\n            The information (Phone Numbers) obtained as part of the SMS consent\n            process will not be shared with third parties for marketing purposes\n          </p>\n\n          <h2>2- Types of SMS Communications:</h2>\n          <p>\n            If you have consented to receive text messages from Mi Hogar En\n            Atlanta, LLC, you may receive messages related to the following:\n          </p>\n          <ul class=\"px-3 mb-2 bold\">\n            <li class=\"primary-text\">[Type of message]</li>\n            <li class=\"primary-text\">[Type of message]</li>\n            <li class=\"primary-text\">[Type of message]</li>\n          </ul>\n\n          <h2>3- Message Frequency:</h2>\n          <p>\n            Message frequency may vary depending on the type of communication.\n            You may receive up to <b class=\"primary-text\">[X]</b> SMS messages per\n            <b class=\"primary-text\">[day, week, or month]</b> related to your\n            <b class=\"primary-text\">[Insert type of messages provided in section 2]</b>.\n          </p>\n\n          <h2>4- Potential Fees for SMS Messaging:</h2>\n          <p>\n            Please note that standard message and data rates may apply,\n            depending on your carrier’s pricing plan. These fees may vary if the\n            message is sent domestically or internationally.\n          </p>\n\n          <h2>5- Opt-In Method:</h2>\n\n          <p>\n            You may opt-in to receive SMS messages from Mi Hogar En Atlanta, LLC\n            in the following ways:\n          </p>\n\n          <ul class=\"mb-2 px-3\">\n            <li>Verbally, during a conversation.</li>\n            <li>By submitting an online form.</li>\n            <li>By filling out a paper form</li>\n          </ul>\n\n          <h2>6- Opt-Out Method:</h2>\n          <p>\n            You can opt out of receiving SMS messages at any time. To do so,\n            simply reply \"STOP\" to any SMS message you receive. Alternatively,\n            you can contact us directly to request removal from our messaging\n            list.\n          </p>\n\n          <h2>7- Help:</h2>\n          <p>\n            If you are experiencing any issues, you can reply with the keyword\n            HELP. Or, you can get help directly from us at\n            <a class=\"primary-text\" href=\"contact\">Contact Us Page</a>\n          </p>\n\n          <h2>Additional Options:</h2>\n          <p>\n            If you do not wish to receive SMS messages, you can choose not to\n            check the SMS consent box on our forms.\n          </p>\n\n          <h2>8- Standard Messaging Disclosures:</h2>\n          <ul class=\"px-3 mb-2\">\n            <li>Message and data rates may apply.</li>\n            <li>You can opt out at any time by texting \"STOP\".</li>\n            <li>\n              For assistance, text \"HELP\" or visit our\n              <a class=\"primary-text\" href=\"privacy-policy\">Privacy Policy</a>\n              and\n              <a class=\"primary-text\" href=\"terms-coditions\"\n                >Terms and Conditions</a\n              >\n              pages\n            </li>\n          </ul>\n\n          <!-- <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any\n              or all Agreements: \"Client\", “You” and “Your” refers to you, the person accessing this website and accepting the\n              Company’s terms and conditions. \"The Company\", “Ourselves”, “We” and \"Us\", refers to our Company. “Party”,\n              “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer,\n              acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in\n              the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express\n              purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in\n              accordance with and subject to, prevailing English Law. Any use of the above terminology or other words in the\n              singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>\n\n            <h3>Privacy Statement</h3>\n            <p>We are committed to protecting your privacy. Authorized employees within the company on a need to know basis \n              only use any information collected from individual customers. We constantly review our systems and data to ensure \n              the best possible service to our customers. Parliament has created specific offences for unauthorised actions against \n              computer systems and data. We will investigate any such actions with a view to prosecuting and/or taking civil \n              proceedings to recover damages against those responsible </p>\n\n            <h3>Disclaimer, Exclusions and Limitations </h3>\n\n            <p>The information on this web site is provided on an \"as is\" basis. To the fullest extent permitted by law, this Company: </p>\n            <ul class=\"px-3\">\n              <li>excludes all representations and warranties relating to this website and its contents or which is or may be \n                  provided by any affiliates or any other third party, including in relation to any inaccuracies or omissions in \n                  this website and/or the Company’s literature; and</li>\n              <li>excludes all liability for damages arising out of or in connection with your use of this website. This includes, \n                  without limitation, direct loss, loss of business or profits (whether or not the loss of such profits was \n                  foreseeable, arose in the normal course of things or you have advised this Company of the possibility of \n                  such potential loss), damage caused to your computer, computer software, systems and programs and the \n                  data thereon or any other direct or indirect, consequential and incidental damages.</li>    \n            </ul>\n            <p>This Company does not however exclude liability for death or personal injury caused by its negligence. The above \n              exclusions and limitations apply only to the extent permitted by law. None of your statutory rights as a consumer are \n              affected.</p>\n\n            <h3>Cancellation Policy</h3>\n            <p>Minimum 24 hours notice of cancellation required. Notification for instance, in person, via email, mobile phone ‘text \n              message’ and/or fax, or any other means will be accepted subject to confirmation in writing. We reserve the right to \n              levy a $30 charge to cover any subsequent administrative expenses. </p>\n            \n            <h3>Termination of Agreements and Refunds Policy</h3>\n            <p>Both the Client and ourselves have the right to terminate any Services Agreement for any reason, including the \n              ending of services that are already underway. No refunds shall be offered, where a Service is deemed to have begun \n              and is, for all intents and purposes, underway. Any monies that have been paid to us which constitute payment in \n              respect of the provision of unused Services, shall be refunded. </p>\n\n            <h3>Availability</h3>\n            <p>Unless otherwise stated, the services featured on this website are only available within the USA, or in \n              relation to postings from the USA. All advertising is intended solely for the USA market. You \n              are solely responsible for evaluating the fitness for a particular purpose of any downloads, programs and text \n              available through this site. Redistribution or republication of any part of this site or its content is prohibited, including \n              such by framing or other similar or any other means, without the express written consent of the Company. The \n              Company does not warrant that the service from this site will be uninterrupted, timely or error free, although it is \n              provided to the best ability. By using this service you thereby indemnify this Company, its employees, agents and \n              affiliates against any loss or damage, in whatever manner, howsoever caused. </p>\n\n            <h3>Cookies</h3>\n            <p>Like most interactive web sites this Company’s website [or ISP] uses cookies to enable us to retrieve user details for \n              each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for \n              those people visiting. Some of our affiliate partners may also use cookies.  </p>\n\n            <h3>Copyright Notice </h3>\n            <p>Copyright and other relevant intellectual property rights exists on all text relating to the Company’s services and the \n              full content of this website.  \n              This Company’s logo is a registered trademark of this Company in the United Kingdom and other countries. The \n              brand names and specific services of this Company featured on this web site are trade marked.</p>\n\n            <h3>Force Majeure</h3>\n            <p>Neither party shall be liable to the other for any failure to perform any obligation under any Agreement which is due to \n              an event beyond the control of such party including but not limited to any Act of God, terrorism, war, Political \n              insurgence, insurrection, riot, civil unrest, act of civil or military authority, uprising, earthquake, flood or any other \n              natural or man made eventuality outside of our control, which causes the termination of an agreement or contract \n              entered into, nor which could have been reasonably foreseen. Any Party affected by such event shall forthwith inform \n              the other Party of the same and shall use all reasonable endeavours to comply with the terms and conditions of any \n              Agreement contained herein.  </p>\n\n            <h3>Notification of Changes</h3>\n            <p>The Company reserves the right to change these conditions from time to time as it sees fit and your continued use of \n              the site will signify your acceptance of any adjustment to these terms. If there are any changes to our privacy policy, \n              we will announce that these changes have been made on our home page and on other key pages on our site. If there \n              are any changes in how we use our site customers’ Personally Identifiable Information, notification by e-mail or postal  \n              mail will be made to those affected by this change. Any changes to our privacy policy will be posted on our web site \n              30 days prior to these changes taking place. You are therefore advised to re-read this statement on a regular basis </p>\n\n            <h3>These terms and conditions form part of the Agreement between the Client and ourselves. Your accessing of \n                this website and/or undertaking of a booking or Agreement indicates your understanding, agreement to and \n                acceptance, of the Disclaimer Notice and the full Terms and Conditions contained herein. Your statutory \n                Consumer Rights are unaffected.</h3>\n\n            <p class=\"text-right\">© HouseKey 2019 All Rights Reserved </p> -->\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_terms-conditions_terms-conditions_module_ts.js.map