(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\src\arrival-of-king\client\src\main.ts */"zUnb");


/***/ }),

/***/ "07JR":
/*!***************************************************!*\
  !*** ./src/app/store/services/message.service.ts ***!
  \***************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ "hlQ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class MessageService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionServiceBase"] {
    constructor(serviceElementsFactory) {
        super('Message', serviceElementsFactory);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionServiceElementsFactory"])); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "12wp":
/*!*****************************************************!*\
  !*** ./src/app/common/chatbot/chatbot.component.ts ***!
  \*****************************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");








function ChatbotComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatbotComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.isChatOpen = !ctx_r2.isChatOpen; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "smart_toy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatbotComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatbotComponent_mat_card_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.isChatOpen = !ctx_r4.isChatOpen; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Let's help you!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Send");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChatbotComponent {
    constructor() {
        this.isChatOpen = false;
    }
    ngOnInit() { }
}
ChatbotComponent.ɵfac = function ChatbotComponent_Factory(t) { return new (t || ChatbotComponent)(); };
ChatbotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatbotComponent, selectors: [["app-chatbot"]], decls: 3, vars: 2, consts: [["fxLayout", "row", 1, "chatbot-container"], ["mat-mini-fab", "", "class", "mb-1", 3, "click", 4, "ngIf"], ["fxFlex.lt-md", "90vw", 4, "ngIf"], ["mat-mini-fab", "", 1, "mb-1", 3, "click"], ["fxFlex.lt-md", "90vw"], ["mat-mini-fab", "", "color", "gray", 1, "close-button", 3, "click"], [1, "d-flex", "flex-column", "align-items-end", 2, "width", "100%"], ["appearance", "outline", 1, "field"], ["matInput", "", "placeholder", "Message", "autocomplete", "off", 1, "message-input"], ["mat-raised-button", "", "color", "primary"]], template: function ChatbotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatbotComponent_button_1_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatbotComponent_mat_card_2_Template, 11, 0, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isChatOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isChatOpen);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"]], styles: [".message-input[_ngcontent-%COMP%] {\n  max-height: 30px;\n  min-height: 30px;\n  width: 100%;\n  color: #464545;\n  letter-spacing: 1.4px;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -16px;\n  right: -16px;\n  transform: scale(0.8);\n  box-shadow: inset 2px -2px 5px #3f3d3d;\n}\n\n.send-button[_ngcontent-%COMP%] {\n  position: absolute;\n  color: rgba(65, 105, 225, 0.664);\n  bottom: 50px;\n  right: 50px;\n  transform: scale(0.8);\n  box-shadow: inset 2px -2px 5px #3f3d3d;\n}\n\n.field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.chatbot-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0Ym90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBZUE7RUFDRSxlQUFBO0FBWkYiLCJmaWxlIjoiY2hhdGJvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLWlucHV0IHtcclxuICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHJnYig3MCwgNjksIDY5KTtcclxuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xNnB4O1xyXG4gIHJpZ2h0OiAtMTZweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMnB4IC0ycHggNXB4IHJnYig2MywgNjEsIDYxKTtcclxufVxyXG5cclxuLnNlbmQtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6IHJnYmEoNjUsIDEwNSwgMjI1LCAwLjY2NCk7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICBib3gtc2hhZG93OiBpbnNldCAycHggLTJweCA1cHggcmdiKDYzLCA2MSwgNjEpO1xyXG59XHJcblxyXG4uZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10b29sdGlwIHtcclxuICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gIC8vIHdpZHRoOiAyMDBweDtcclxuICAvLyBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gIC8vIC8vIFRPRE8gOiBTZXQgc29tZSBnb29kIGJhY2tncm91bmQgY29sbG9yIGZvciB0b29sdGlwLi4uLi5cclxuICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2IoNzgsIDc3LCA3NyksIGluc2V0IDNweCAtM3B4IDNweCB3aGl0ZTtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAvLyBsZXR0ZXItc3BhY2luZzogMS4zcHg7XHJcbiAgLy8gZm9udC1zaXplOiAxNHB0O1xyXG4gIC8vIGZvbnQtZmFtaWx5OiBcIkNhdmVhdFwiLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uY2hhdGJvdC1jb250YWluZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "5ChL":
/*!***************************************************!*\
  !*** ./src/app/store/services/product.service.ts ***!
  \***************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ "hlQ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ProductService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionServiceBase"] {
    constructor(serviceElementsFactory) {
        super('Product', serviceElementsFactory);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionServiceElementsFactory"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7ocq":
/*!***********************************************************!*\
  !*** ./src/app/common/navigation/ae-navigation.module.ts ***!
  \***********************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _ae_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ae-navigation.component */ "us1B");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _ae_navigation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ae-navigation.service */ "D0p2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class NavigationModule {
}
NavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: NavigationModule });
NavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function NavigationModule_Factory(t) { return new (t || NavigationModule)(); }, providers: [_ae_navigation_service__WEBPACK_IMPORTED_MODULE_14__["AeNavigationService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](NavigationModule, { declarations: [_ae_navigation_component__WEBPACK_IMPORTED_MODULE_11__["AeNavigationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"]], exports: [_ae_navigation_component__WEBPACK_IMPORTED_MODULE_11__["AeNavigationComponent"]] }); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "8LM8":
/*!*********************************************!*\
  !*** ./src/app/common/app.common.module.ts ***!
  \*********************************************/
/*! exports provided: AppCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCommonModule", function() { return AppCommonModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_translate_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.translate.module */ "Yi1g");
/* harmony import */ var _chatbot_chatbot_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatbot/chatbot.module */ "B9wf");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation */ "Qwwh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppCommonModule {
}
AppCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppCommonModule });
AppCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppCommonModule_Factory(t) { return new (t || AppCommonModule)(); }, imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _navigation__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
        _chatbot_chatbot_module__WEBPACK_IMPORTED_MODULE_2__["ChatbotModule"],
        _app_translate_module__WEBPACK_IMPORTED_MODULE_1__["AppTranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppCommonModule, { exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _navigation__WEBPACK_IMPORTED_MODULE_3__["NavigationModule"],
        _chatbot_chatbot_module__WEBPACK_IMPORTED_MODULE_2__["ChatbotModule"],
        _app_translate_module__WEBPACK_IMPORTED_MODULE_1__["AppTranslateModule"]] }); })();


/***/ }),

/***/ "8hwh":
/*!***************************************************!*\
  !*** ./src/app/store/services/service.service.ts ***!
  \***************************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ "hlQ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ServiceService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionServiceBase"] {
    constructor(serviceElementsFactory) {
        super('Service', serviceElementsFactory);
    }
}
ServiceService.ɵfac = function ServiceService_Factory(t) { return new (t || ServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionServiceElementsFactory"])); };
ServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServiceService, factory: ServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B9wf":
/*!**************************************************!*\
  !*** ./src/app/common/chatbot/chatbot.module.ts ***!
  \**************************************************/
/*! exports provided: ChatbotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotModule", function() { return ChatbotModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chatbot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatbot.component */ "12wp");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class ChatbotModule {
}
ChatbotModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ChatbotModule });
ChatbotModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function ChatbotModule_Factory(t) { return new (t || ChatbotModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ChatbotModule, { declarations: [_chatbot_component__WEBPACK_IMPORTED_MODULE_1__["ChatbotComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexModule"]], exports: [_chatbot_component__WEBPACK_IMPORTED_MODULE_1__["ChatbotComponent"]] }); })();


/***/ }),

/***/ "D0p2":
/*!************************************************************!*\
  !*** ./src/app/common/navigation/ae-navigation.service.ts ***!
  \************************************************************/
/*! exports provided: AeNavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeNavigationService", function() { return AeNavigationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeNavigationService {
    constructor() {
        // public
        this.style$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.menu$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.toolbar$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    /**
     * @description Set menu
     * @param menuItems
     */
    menu(menuItems) {
        setTimeout(() => {
            this.menu$.next(menuItems);
        });
    }
    /**
     * @description Set style
     * @param style
     */
    style(style) {
        setTimeout(() => {
            this.style$.next(style);
        });
    }
    /**
     * @description Set toolbar
     * @param toolbarItems
     */
    toolbar(toolbarItems) {
        setTimeout(() => {
            this.toolbar$.next(toolbarItems);
        });
    }
}
AeNavigationService.ɵfac = function AeNavigationService_Factory(t) { return new (t || AeNavigationService)(); };
AeNavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AeNavigationService, factory: AeNavigationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EqgT":
/*!*****************************************!*\
  !*** ./src/app/store/reducer.config.ts ***!
  \*****************************************/
/*! exports provided: reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const initialconfig = {};
const name = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[CONFIG] SET NAME', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const logo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[CONFIG] SET LOGO', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const theme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[CONFIG] SET THEME', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const reducer = () => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialconfig, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(name, (state, action) => (Object.assign(Object.assign({}, state), action))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(logo, (state, action) => (Object.assign(Object.assign({}, state), action))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(theme, (state, action) => (Object.assign(Object.assign({}, state), action))));
const actions = () => ({ name, logo, theme });


/***/ }),

/***/ "NFwV":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: AppStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreModule", function() { return AppStoreModule; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/environments/environment */ "AytR");
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/data */ "hlQ1");
/* harmony import */ var _entity_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity-metadata */ "hB12");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _reducer_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer.config */ "EqgT");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store.service */ "ckw7");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user.service */ "YnEA");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/service.service */ "8hwh");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/message.service */ "07JR");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/product.service */ "5ChL");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/task.service */ "ex/k");
/* harmony import */ var _services_info_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/info.service */ "iUx/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppStoreModule {
}
AppStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppStoreModule });
AppStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ factory: function AppStoreModule_Factory(t) { return new (t || AppStoreModule)(); }, providers: [
        _store_service__WEBPACK_IMPORTED_MODULE_7__["AppStoreService"],
        // Entity services
        _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
        _services_service_service__WEBPACK_IMPORTED_MODULE_9__["ServiceService"],
        _services_message_service__WEBPACK_IMPORTED_MODULE_10__["MessageService"],
        _services_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"],
        _services_task_service__WEBPACK_IMPORTED_MODULE_12__["TaskService"],
        _services_info_service__WEBPACK_IMPORTED_MODULE_13__["InfoService"],
    ], imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreModule"].forRoot({
                config: Object(_reducer_config__WEBPACK_IMPORTED_MODULE_6__["reducer"])(),
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_1__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: _src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production,
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([]),
            _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["EntityDataModule"].forRoot(_entity_metadata__WEBPACK_IMPORTED_MODULE_4__["entityConfig"]),
        ], _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_1__["StoreDevtoolsModule"], _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["EntityDataModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppStoreModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_1__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsRootModule"], _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["EntityDataModule"]], exports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_1__["StoreDevtoolsModule"], _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["EntityDataModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"]] }); })();


/***/ }),

/***/ "Qwwh":
/*!********************************************!*\
  !*** ./src/app/common/navigation/index.ts ***!
  \********************************************/
/*! exports provided: NavigationModule, AeNavigationComponent, AeNavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ae_navigation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-navigation.module */ "7ocq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return _ae_navigation_module__WEBPACK_IMPORTED_MODULE_0__["NavigationModule"]; });

/* harmony import */ var _ae_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ae-navigation.component */ "us1B");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeNavigationComponent", function() { return _ae_navigation_component__WEBPACK_IMPORTED_MODULE_1__["AeNavigationComponent"]; });

/* harmony import */ var _ae_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ae-navigation.service */ "D0p2");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeNavigationService", function() { return _ae_navigation_service__WEBPACK_IMPORTED_MODULE_2__["AeNavigationService"]; });






/***/ }),

/***/ "RUEf":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");



const routes = [
    {
        icon: 'home',
        label: 'Home',
        path: 'home',
        iconColor: 'primary',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        icon: 'sentiment_satisfied_alt',
        label: 'About',
        path: 'about',
        iconColor: 'primary',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"],
    },
    {
        icon: 'contact_mail',
        label: 'Contact',
        path: 'contact',
        iconColor: 'primary',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"],
    },
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ "RUEf");
/* harmony import */ var _app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.toolbar */ "jwmY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/navigation */ "Qwwh");
/* harmony import */ var _common_navigation_ae_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/navigation/ae-navigation.component */ "us1B");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/chatbot/chatbot.component */ "12wp");







class AppComponent {
    constructor(navigationService) {
        this.navigationService = navigationService;
        this.title = 'Angular Projects';
        this.navigationService.menu(_app_routes__WEBPACK_IMPORTED_MODULE_0__["routes"]);
        this.navigationService.toolbar(_app_toolbar__WEBPACK_IMPORTED_MODULE_1__["toolbar"]);
    }
    ngOnInit() {
        document.title = this.title;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_common_navigation__WEBPACK_IMPORTED_MODULE_3__["AeNavigationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["main-content-top", ""], [1, "chat-bot"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ae-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-chatbot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_common_navigation_ae_navigation_component__WEBPACK_IMPORTED_MODULE_4__["AeNavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _common_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_6__["ChatbotComponent"]], styles: [".chat-bot[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  z-index: 90000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LWJvdCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuICByaWdodDogMjBweDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgei1pbmRleDogOTAwMDA7XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "YZbJ":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: AppStoreModule, AppStoreService, reducer, actions, entityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.module */ "NFwV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppStoreModule", function() { return _store_module__WEBPACK_IMPORTED_MODULE_0__["AppStoreModule"]; });

/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.service */ "ckw7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppStoreService", function() { return _store_service__WEBPACK_IMPORTED_MODULE_1__["AppStoreService"]; });

/* harmony import */ var _store_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.state */ "wEvZ");
/* empty/unused harmony star reexport *//* harmony import */ var _reducer_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer.config */ "EqgT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer_config__WEBPACK_IMPORTED_MODULE_3__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return _reducer_config__WEBPACK_IMPORTED_MODULE_3__["actions"]; });

/* harmony import */ var _entity_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity-metadata */ "hB12");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entityConfig", function() { return _entity_metadata__WEBPACK_IMPORTED_MODULE_4__["entityConfig"]; });








/***/ }),

/***/ "Yi1g":
/*!************************************************!*\
  !*** ./src/app/common/app.translate.module.ts ***!
  \************************************************/
/*! exports provided: createTranslateLoader, AppTranslateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppTranslateModule", function() { return AppTranslateModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
class AppTranslateModule {
}
AppTranslateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppTranslateModule });
AppTranslateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppTranslateModule_Factory(t) { return new (t || AppTranslateModule)(); }, imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]],
                },
                defaultLanguage: 'en',
            }),
        ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppTranslateModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]] }); })();


/***/ }),

/***/ "YnEA":
/*!************************************************!*\
  !*** ./src/app/store/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ "hlQ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class UserService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionServiceBase"] {
    constructor(serviceElementsFactory) {
        super('User', serviceElementsFactory);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionServiceElementsFactory"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/app.common.module */ "8LM8");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "YZbJ");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _store__WEBPACK_IMPORTED_MODULE_5__["AppStoreModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
        _store__WEBPACK_IMPORTED_MODULE_5__["AppStoreModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"]] }); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 2, vars: 0, template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ckw7":
/*!****************************************!*\
  !*** ./src/app/store/store.service.ts ***!
  \****************************************/
/*! exports provided: AppStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreService", function() { return AppStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AppStoreService {
}
AppStoreService.ɵfac = function AppStoreService_Factory(t) { return new (t || AppStoreService)(); };
AppStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppStoreService, factory: AppStoreService.ɵfac });


/***/ }),

/***/ "ex/k":
/*!************************************************!*\
  !*** ./src/app/store/services/task.service.ts ***!
  \************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ "hlQ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class TaskService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionServiceBase"] {
    constructor(serviceElementsFactory) {
        super('Task', serviceElementsFactory);
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionServiceElementsFactory"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hB12":
/*!******************************************!*\
  !*** ./src/app/store/entity-metadata.ts ***!
  \******************************************/
/*! exports provided: entityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entityConfig", function() { return entityConfig; });
const entityMetadata = {
    User: {},
    Service: {},
    Task: {},
    Product: {},
    Message: {},
};
const pluralNames = {
    User: 'Users',
    Service: 'Services',
    Task: 'Tasks',
    Product: 'Products',
    Message: 'Messages',
};
const entityConfig = {
    entityMetadata,
    pluralNames,
};


/***/ }),

/***/ "iUx/":
/*!************************************************!*\
  !*** ./src/app/store/services/info.service.ts ***!
  \************************************************/
/*! exports provided: InfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoService", function() { return InfoService; });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ "hlQ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class InfoService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionServiceBase"] {
    constructor(serviceElementsFactory) {
        super('Info', serviceElementsFactory);
    }
}
InfoService.ɵfac = function InfoService_Factory(t) { return new (t || InfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__["EntityCollectionServiceElementsFactory"])); };
InfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InfoService, factory: InfoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jwmY":
/*!********************************!*\
  !*** ./src/app/app.toolbar.ts ***!
  \********************************/
/*! exports provided: toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolbar", function() { return toolbar; });
const toolbar = [
    {
        icon: 'phone',
        href: 'tel:832-874-2422',
        position: 'right',
    },
];


/***/ }),

/***/ "us1B":
/*!**************************************************************!*\
  !*** ./src/app/common/navigation/ae-navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: AeNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeNavigationComponent", function() { return AeNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ae_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ae-navigation.service */ "D0p2");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















const _c0 = ["drawer"];
const _c1 = function (a0) { return [a0]; };
function AeNavigationComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AeNavigationComponent_ng_container_16_Template_mat_list_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const menuItem_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.handler(menuItem_r6.eventHandler, "click"); })("mouseover", function AeNavigationComponent_ng_container_16_Template_mat_list_item_mouseover_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const menuItem_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.handler(menuItem_r6.eventHandler, "mouseover"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menuItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](menuItem_r6.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", menuItem_r6.tooltip || "")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c1, menuItem_r6.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](menuItem_r6.iconStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", menuItem_r6.iconColor)("matBadge", menuItem_r6.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](menuItem_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", menuItem_r6.label, " ");
} }
function AeNavigationComponent_mat_icon_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.menuIcon, " ");
} }
function AeNavigationComponent_mat_icon_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.arrowLeft, " ");
} }
function AeNavigationComponent_ng_container_30_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AeNavigationComponent_ng_container_30_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const toolbarItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.handler(toolbarItem_r10.eventHandler, "click"); })("mouseover", function AeNavigationComponent_ng_container_30_button_2_Template_button_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const toolbarItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.handler(toolbarItem_r10.eventHandler, "mouseover"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toolbarItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](toolbarItem_r10.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", toolbarItem_r10.tooltip || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](toolbarItem_r10.iconStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", toolbarItem_r10.iconColor)("matBadge", toolbarItem_r10.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](toolbarItem_r10.icon);
} }
function AeNavigationComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AeNavigationComponent_ng_container_30_button_2_Template, 3, 8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const toolbarItem_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", toolbarItem_r10.href, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", toolbarItem_r10.position !== "right");
} }
function AeNavigationComponent_ng_container_33_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AeNavigationComponent_ng_container_33_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const toolbarItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.handler(toolbarItem_r18.eventHandler, "click"); })("mouseover", function AeNavigationComponent_ng_container_33_button_2_Template_button_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const toolbarItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.handler(toolbarItem_r18.eventHandler, "mouseover"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toolbarItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](toolbarItem_r18.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", toolbarItem_r18.tooltip || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](toolbarItem_r18.iconStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", toolbarItem_r18.iconColor)("matBadge", toolbarItem_r18.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](toolbarItem_r18.icon);
} }
function AeNavigationComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AeNavigationComponent_ng_container_33_button_2_Template, 3, 8, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const toolbarItem_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", toolbarItem_r18.href, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", toolbarItem_r18.position === "right");
} }
const _c2 = [[["", "nav-list-start", ""]], [["", "nav-list-end", ""]], [["", "top", ""]], [["", "toolbar-center", ""]], [["", "main-content-top", ""]], [["", "main-content", ""]], [["", "main-content-bottom", ""]]];
const _c3 = ["[nav-list-start]", "[nav-list-end]", "[top]", "[toolbar-center]", "[main-content-top]", "[main-content]", "[main-content-bottom]"];
class AeNavigationComponent {
    constructor(breakpointObserver, navigationService) {
        this.breakpointObserver = breakpointObserver;
        this.navigationService = navigationService;
        this.style = this.navigationService.style$;
        this.menu = this.navigationService.menu$;
        this.toolbar = this.navigationService.toolbar$;
        this.menuIcon = 'menu';
        this.arrowLeft = 'keyboard_arrow_left';
        this.isHandset = false;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
            this.isHandset = result.matches;
            return result.matches;
        }));
    }
    handler(handlerFn, event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isHandset) {
                // Close the drawer when the menu item click.
                if (event === 'click')
                    this.drawer.close();
            }
            // if there is a handler assigned to the menu item , run it.
            if (handlerFn)
                handlerFn(event);
            return;
        });
    }
}
AeNavigationComponent.ɵfac = function AeNavigationComponent_Factory(t) { return new (t || AeNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ae_navigation_service__WEBPACK_IMPORTED_MODULE_4__["AeNavigationService"])); };
AeNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AeNavigationComponent, selectors: [["ae-navigation"]], viewQuery: function AeNavigationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
    } }, ngContentSelectors: _c3, decls: 44, vars: 24, consts: [["fixedInViewport", "", 3, "mode", "opened"], ["drawer", ""], ["href", "https://aemrebas.com", "target", "__blank"], [1, "logo"], ["width", "50", "height", "50", "src", "/assets/icons/icon-128x128.png"], ["type", "button", "aria-label", "Close sidenav", "mat-icon-button", "", 1, "close-sidenav-button", 3, "click"], ["aria-label", "Side nav toggle icon"], [1, "p-4", "border-bottom"], [1, "space-20"], [4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon", 4, "ngIf"], [1, "d-flex", "w-100", "justify-content-between"], [1, "d-flex", "w-100", "justify-content-start"], [1, "d-flex", "w-100", "justify-content-end"], [1, "main-content"], ["fxFlex", "100%", "fxFlex.lt-md", "100%", 1, "container-style"], ["matTooltipPosition", "right", "routerLinkActive", "router-link-active", 3, "matTooltip", "routerLink", "click", "mouseover"], ["mat-list-icon", "", "matBadgeSize", "medium", "matBadgeColor", "accent", "matBadgePosition", "after", 3, "color", "matBadge"], ["mat-line", "", 2, "font-weight", "500", "letter-spacing", "1px"], [3, "href"], ["mat-icon-button", "", 3, "style", "matTooltip", "click", "mouseover", 4, "ngIf"], ["mat-icon-button", "", 3, "matTooltip", "click", "mouseover"], ["matBadgeSize", "medium", "matBadgeColor", "primary", "matBadgePosition", "after", 3, "color", "matBadge"], ["mat-mini-fab", "", 3, "style", "matTooltip", "click", "mouseover", 4, "ngIf"], ["mat-mini-fab", "", 3, "matTooltip", "click", "mouseover"]], template: function AeNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AeNavigationComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AeNavigationComponent_ng_container_16_Template, 6, 12, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](19, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](22, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AeNavigationComponent_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AeNavigationComponent_mat_icon_25_Template, 2, 1, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AeNavigationComponent_mat_icon_26_Template, 2, 1, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](27, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AeNavigationComponent_ng_container_30_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AeNavigationComponent_ng_container_33_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](37, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](40, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](43, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        let tmp_4_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 12, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 14, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 10, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 16, ctx.menu));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 18, ctx.style)) == null ? null : tmp_4_0.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r0.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 20, ctx.toolbar));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 22, ctx.toolbar));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListIconCssMatStyler"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadge"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatLine"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".border[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%], .mat-sidenav[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 5px solid transparent;\n  box-shadow: inset 0px 0px 1px black;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-left: 0px;\n}\n\n.space-20[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  position: absolute;\n  box-shadow: 0px 0px 2px black;\n  margin-top: 2px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  transition: all ease-in-out 400ms;\n  text-align: right;\n  width: 60px;\n  -webkit-user-select: none;\n          user-select: none;\n  background-color: white;\n  cursor: pointer;\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  width: 150px;\n  background-color: #232324;\n  box-shadow: 0px 0px 2px black;\n  transition: all ease-in-out 400ms;\n}\n\n.mat-sidenav[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 97%;\n  margin-top: 1%;\n  width: 320px;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-left: 0px;\n  box-shadow: 0px 0px 3px black;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  margin-top: 1.5%;\n  margin-right: 1%;\n  width: 98%;\n  float: right;\n  box-shadow: 0px 0px 3px black;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  transition: all ease-in-out 400ms;\n  height: 40px !important;\n  font-size: 12px;\n}\n\n.close-sidenav-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 90000;\n  right: 10px;\n  top: 10px;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  color: #c9c6c6;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: stretch;\n  flex-wrap: wrap;\n  padding: 2px;\n  margin-top: 10px;\n}\n\n.container-style[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 0px 0px 3px black;\n  margin: 1%;\n}\n\n.router-link-active[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 70% !important;\n  margin-left: 20px !important;\n  box-shadow: inset 1px 1px 2px #0c183d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBRUEseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtBQUdGOztBQUFBO0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBRUEsY0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBRUUsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtBQURGIiwiZmlsZSI6ImFlLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXB4IGJsYWNrO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcbi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDBweDtcclxufVxyXG4uc3BhY2UtMjAge1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG4ubG9nbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IGJsYWNrO1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgNDAwbXM7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgd2lkdGg6IDYwcHg7XHJcblxyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ286aG92ZXIge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzUsIDM1LCAzNik7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggYmxhY2s7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDQwMG1zO1xyXG59XHJcblxyXG4ubWF0LXNpZGVuYXYge1xyXG4gIEBleHRlbmQgLmJvcmRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA5NyU7XHJcblxyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIHdpZHRoOiAzMjBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggYmxhY2s7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgQGV4dGVuZCAuYm9yZGVyO1xyXG4gIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuXHJcbiAgd2lkdGg6IDk4JTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggYmxhY2s7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1pdGVtIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgNDAwbXM7XHJcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY2xvc2Utc2lkZW5hdi1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5MDAwMDtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgY29sb3I6IHJnYigyMDEsIDE5OCwgMTk4KTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItc3R5bGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggYmxhY2s7XHJcbiAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuLnJvdXRlci1saW5rLWFjdGl2ZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4IHJnYigxMiwgMjQsIDYxKTtcclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ "RUEf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_1__["routes"].map((r) => ({ path: r.path, component: r.component })), { useHash: true }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wEvZ":
/*!**************************************!*\
  !*** ./src/app/store/store.state.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map