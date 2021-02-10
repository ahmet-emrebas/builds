(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+6+r":
/*!********************************************************************************!*\
  !*** ./projects/ae-doc/src/lib/ae-component-view/ae-component-view.service.ts ***!
  \********************************************************************************/
/*! exports provided: AeComponentViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeComponentViewService", function() { return AeComponentViewService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeComponentViewService {
    constructor() {
        this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.snapshot = {};
    }
    next(view) {
        setTimeout(() => {
            this.data$.next(view);
        });
    }
}
AeComponentViewService.ɵfac = function AeComponentViewService_Factory(t) { return new (t || AeComponentViewService)(); };
AeComponentViewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AeComponentViewService, factory: AeComponentViewService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "+oom":
/*!**********************************************************************************!*\
  !*** ./projects/ae-doc/src/lib/ae-component-view/ae-component-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AeComponentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeComponentViewComponent", function() { return AeComponentViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ae_component_view_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ae-component-view.service */ "+6+r");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _ae_text_content_ae_text_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ae-text-content/ae-text-content.component */ "kvji");









function AeComponentViewComponent_mat_card_content_8_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ae-text-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r2.data.html);
} }
function AeComponentViewComponent_mat_card_content_8_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ae-text-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r3.data.ts);
} }
function AeComponentViewComponent_mat_card_content_8_mat_tab_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ae-text-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r4.data.css);
} }
function AeComponentViewComponent_mat_card_content_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AeComponentViewComponent_mat_card_content_8_mat_tab_2_Template, 2, 1, "mat-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AeComponentViewComponent_mat_card_content_8_mat_tab_3_Template, 2, 1, "mat-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AeComponentViewComponent_mat_card_content_8_mat_tab_4_Template, 2, 1, "mat-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data.html);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data.ts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data.css);
} }
function AeComponentViewComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
class AeComponentViewComponent {
    constructor(service) {
        this.service = service;
        this.data = {};
        this.openCodeIcon = 'code';
        this.copyIcon = 'content_copy';
        this.contentVisible = false;
    }
    ngOnInit() {
        this.subscriptions = [
            this.service.data$.subscribe((data) => {
                this.data = data;
            }),
        ];
    }
    ngOnDestroy() {
        for (let s of this.subscriptions) {
            s.unsubscribe();
        }
    }
}
AeComponentViewComponent.ɵfac = function AeComponentViewComponent_Factory(t) { return new (t || AeComponentViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ae_component_view_service__WEBPACK_IMPORTED_MODULE_1__["AeComponentViewService"])); };
AeComponentViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeComponentViewComponent, selectors: [["ae-component-view"]], decls: 11, vars: 3, consts: [[1, "align-and-center"], ["mat-icon-button", "", "matTooltip", "View Code", 1, "icon-button", "code-button", 3, "click"], [4, "ngIf"], [4, "ngComponentOutlet"], ["label", "HTML", 4, "ngIf"], ["label", "TS", 4, "ngIf"], ["label", "CSS", 4, "ngIf"], ["label", "HTML"], [3, "content"], ["label", "TS"], ["label", "CSS"]], template: function AeComponentViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AeComponentViewComponent_Template_button_click_3_listener() { return ctx.contentVisible = !ctx.contentVisible; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AeComponentViewComponent_mat_card_content_8_Template, 5, 3, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AeComponentViewComponent_ng_container_10_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.openCodeIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", ctx.data.clazz);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgComponentOutlet"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _ae_text_content_ae_text_content_component__WEBPACK_IMPORTED_MODULE_8__["AeTextContentComponent"]], styles: [".align-and-center[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.icon-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  transition: all ease-in-out 400ms;\n  border: thin white solid;\n}\n\n.icon-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: all ease-in-out 400ms;\n}\n\n.mat-card-content[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.code-button[_ngcontent-%COMP%] {\n  border: thin gray solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWUtY29tcG9uZW50LXZpZXcuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxkb2Muc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQ0xBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7QURRRjs7QUNMQTtFQUNFLHFCQUFBO0VBQ0EsaUNBQUE7QURRRjs7QUNMQTtFQUNFLGdCQUFBO0FEUUY7O0FBZEE7RUFDRSx1QkFBQTtBQWlCRiIsImZpbGUiOiJhZS1jb21wb25lbnQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGlnbi1hbmQtY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbkBpbXBvcnQgXCIuLi9kb2Muc3R5bGUuc2Nzc1wiO1xyXG5cclxuLmNvZGUtYnV0dG9uIHtcclxuICBib3JkZXI6IHRoaW4gZ3JheSBzb2xpZDtcclxufVxyXG4iLCIuaWNvbi1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDQwMG1zO1xyXG4gIGJvcmRlcjogdGhpbiB3aGl0ZSBzb2xpZDtcclxufVxyXG5cclxuLmljb24tYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDQwMG1zO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtY29udGVudCB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "/Raj":
/*!****************************************************!*\
  !*** ./projects/ae-form/src/lib/ae-form.module.ts ***!
  \****************************************************/
/*! exports provided: AeFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeFormModule", function() { return AeFormModule; });
/* harmony import */ var _ae_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-form.component */ "v98V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeFormModule {
}
AeFormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeFormModule });
AeFormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeFormModule_Factory(t) { return new (t || AeFormModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeFormModule, { declarations: [_ae_form_component__WEBPACK_IMPORTED_MODULE_0__["AeFormComponent"]], exports: [_ae_form_component__WEBPACK_IMPORTED_MODULE_0__["AeFormComponent"]] }); })();


/***/ }),

/***/ "/ddq":
/*!************************************************!*\
  !*** ./projects/ae-facetime/src/public-api.ts ***!
  \************************************************/
/*! exports provided: AeFacetimeService, AeFacetimeComponent, AeFacetimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_facetime_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-facetime.service */ "xL3b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeFacetimeService", function() { return _lib_ae_facetime_service__WEBPACK_IMPORTED_MODULE_0__["AeFacetimeService"]; });

/* harmony import */ var _lib_ae_facetime_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-facetime.component */ "M9V4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeFacetimeComponent", function() { return _lib_ae_facetime_component__WEBPACK_IMPORTED_MODULE_1__["AeFacetimeComponent"]; });

/* harmony import */ var _lib_ae_facetime_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-facetime.module */ "ffQT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeFacetimeModule", function() { return _lib_ae_facetime_module__WEBPACK_IMPORTED_MODULE_2__["AeFacetimeModule"]; });

/*
 * Public API Surface of ae-facetime
 */





/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\src\arrival-of-king\client\src\main.ts */"zUnb");


/***/ }),

/***/ "00ki":
/*!****************************************************!*\
  !*** ./projects/ae-product-card/src/public-api.ts ***!
  \****************************************************/
/*! exports provided: AeProductCardService, AeProductCardComponent, AeProductCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_product_card_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-product-card.service */ "gGVz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeProductCardService", function() { return _lib_ae_product_card_service__WEBPACK_IMPORTED_MODULE_0__["AeProductCardService"]; });

/* harmony import */ var _lib_ae_product_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-product-card.component */ "mLEb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeProductCardComponent", function() { return _lib_ae_product_card_component__WEBPACK_IMPORTED_MODULE_1__["AeProductCardComponent"]; });

/* harmony import */ var _lib_ae_product_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-product-card.module */ "PUgM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeProductCardModule", function() { return _lib_ae_product_card_module__WEBPACK_IMPORTED_MODULE_2__["AeProductCardModule"]; });

/*
 * Public API Surface of ae-product-card
 */





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

/***/ "0cEp":
/*!******************************************************!*\
  !*** ./projects/ae-table/src/lib/ae-table.module.ts ***!
  \******************************************************/
/*! exports provided: AeTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeTableModule", function() { return AeTableModule; });
/* harmony import */ var _ae_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-table.component */ "HzQh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeTableModule {
}
AeTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeTableModule });
AeTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeTableModule_Factory(t) { return new (t || AeTableModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeTableModule, { declarations: [_ae_table_component__WEBPACK_IMPORTED_MODULE_0__["AeTableComponent"]], exports: [_ae_table_component__WEBPACK_IMPORTED_MODULE_0__["AeTableComponent"]] }); })();


/***/ }),

/***/ "14G6":
/*!*******************************************************!*\
  !*** ./projects/ae-table/src/lib/ae-table.service.ts ***!
  \*******************************************************/
/*! exports provided: AeTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeTableService", function() { return AeTableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeTableService {
    constructor() { }
}
AeTableService.ɵfac = function AeTableService_Factory(t) { return new (t || AeTableService)(); };
AeTableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeTableService, factory: AeTableService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "18yH":
/*!*****************************************************!*\
  !*** ./projects/ae-form/src/lib/ae-form.service.ts ***!
  \*****************************************************/
/*! exports provided: AeFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeFormService", function() { return AeFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeFormService {
    constructor() { }
}
AeFormService.ɵfac = function AeFormService_Factory(t) { return new (t || AeFormService)(); };
AeFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeFormService, factory: AeFormService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2XoE":
/*!****************************************************************!*\
  !*** ./projects/ae-navigation/src/lib/ae-navigation.module.ts ***!
  \****************************************************************/
/*! exports provided: AeNavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeNavigationModule", function() { return AeNavigationModule; });
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
/* harmony import */ var _ae_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ae-navigation.component */ "rgdp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _ae_navigation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ae-navigation.service */ "H7hj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AeNavigationModule {
}
AeNavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AeNavigationModule });
AeNavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function AeNavigationModule_Factory(t) { return new (t || AeNavigationModule)(); }, providers: [_ae_navigation_service__WEBPACK_IMPORTED_MODULE_14__["AeNavigationService"]], imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AeNavigationModule, { declarations: [_ae_navigation_component__WEBPACK_IMPORTED_MODULE_11__["AeNavigationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
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

/***/ "5XMV":
/*!********************************************************!*\
  !*** ./projects/ae-upload/src/lib/ae-upload.module.ts ***!
  \********************************************************/
/*! exports provided: AeUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeUploadModule", function() { return AeUploadModule; });
/* harmony import */ var _ae_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-upload.component */ "6adW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeUploadModule {
}
AeUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeUploadModule });
AeUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeUploadModule_Factory(t) { return new (t || AeUploadModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeUploadModule, { declarations: [_ae_upload_component__WEBPACK_IMPORTED_MODULE_0__["AeUploadComponent"]], exports: [_ae_upload_component__WEBPACK_IMPORTED_MODULE_0__["AeUploadComponent"]] }); })();


/***/ }),

/***/ "6adW":
/*!***********************************************************!*\
  !*** ./projects/ae-upload/src/lib/ae-upload.component.ts ***!
  \***********************************************************/
/*! exports provided: AeUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeUploadComponent", function() { return AeUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeUploadComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeUploadComponent.ɵfac = function AeUploadComponent_Factory(t) { return new (t || AeUploadComponent)(); };
AeUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeUploadComponent, selectors: [["lib-ae-upload"]], decls: 2, vars: 0, template: function AeUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-upload works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


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
/* harmony import */ var _app_materials_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.materials.module */ "j3Hu");
/* harmony import */ var _app_translate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.translate.module */ "Yi1g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppCommonModule {
}
AppCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppCommonModule });
AppCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppCommonModule_Factory(t) { return new (t || AppCommonModule)(); }, imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _app_materials_module__WEBPACK_IMPORTED_MODULE_1__["MaterialsModule"], _app_translate_module__WEBPACK_IMPORTED_MODULE_2__["AppTranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppCommonModule, { exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _app_materials_module__WEBPACK_IMPORTED_MODULE_1__["MaterialsModule"], _app_translate_module__WEBPACK_IMPORTED_MODULE_2__["AppTranslateModule"]] }); })();


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

/***/ "9/uO":
/*!*************************************************************!*\
  !*** ./projects/ae-authform/src/lib/ae-authform.service.ts ***!
  \*************************************************************/
/*! exports provided: AeAuthformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeAuthformService", function() { return AeAuthformService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeAuthformService {
    constructor() { }
}
AeAuthformService.ɵfac = function AeAuthformService_Factory(t) { return new (t || AeAuthformService)(); };
AeAuthformService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeAuthformService, factory: AeAuthformService.ɵfac, providedIn: 'root' });


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
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ApZP":
/*!********************************************!*\
  !*** ./projects/ae-form/src/public-api.ts ***!
  \********************************************/
/*! exports provided: AeFormService, AeFormComponent, AeFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_form_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-form.service */ "18yH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeFormService", function() { return _lib_ae_form_service__WEBPACK_IMPORTED_MODULE_0__["AeFormService"]; });

/* harmony import */ var _lib_ae_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-form.component */ "v98V");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeFormComponent", function() { return _lib_ae_form_component__WEBPACK_IMPORTED_MODULE_1__["AeFormComponent"]; });

/* harmony import */ var _lib_ae_form_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-form.module */ "/Raj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeFormModule", function() { return _lib_ae_form_module__WEBPACK_IMPORTED_MODULE_2__["AeFormModule"]; });

/*
 * Public API Surface of ae-form
 */





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

/***/ "BgB3":
/*!*******************************************************!*\
  !*** ./projects/ae-stat/src/lib/ae-stat.component.ts ***!
  \*******************************************************/
/*! exports provided: AeStatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeStatComponent", function() { return AeStatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeStatComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeStatComponent.ɵfac = function AeStatComponent_Factory(t) { return new (t || AeStatComponent)(); };
AeStatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeStatComponent, selectors: [["lib-ae-stat"]], decls: 2, vars: 0, template: function AeStatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-stat works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "DL+4":
/*!********************************************************************!*\
  !*** ./projects/ae-notification/src/lib/ae-notification.module.ts ***!
  \********************************************************************/
/*! exports provided: AeNotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeNotificationModule", function() { return AeNotificationModule; });
/* harmony import */ var _ae_notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-notification.component */ "PZw5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeNotificationModule {
}
AeNotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeNotificationModule });
AeNotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeNotificationModule_Factory(t) { return new (t || AeNotificationModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeNotificationModule, { declarations: [_ae_notification_component__WEBPACK_IMPORTED_MODULE_0__["AeNotificationComponent"]], exports: [_ae_notification_component__WEBPACK_IMPORTED_MODULE_0__["AeNotificationComponent"]] }); })();


/***/ }),

/***/ "DV2R":
/*!*******************************************************!*\
  !*** ./projects/ae-file/src/lib/ae-file.component.ts ***!
  \*******************************************************/
/*! exports provided: AeFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeFileComponent", function() { return AeFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeFileComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeFileComponent.ɵfac = function AeFileComponent_Factory(t) { return new (t || AeFileComponent)(); };
AeFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeFileComponent, selectors: [["lib-ae-file"]], decls: 2, vars: 0, template: function AeFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-file works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "DnC/":
/*!**********************************************!*\
  !*** ./projects/ae-upload/src/public-api.ts ***!
  \**********************************************/
/*! exports provided: AeUploadService, AeUploadComponent, AeUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_upload_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-upload.service */ "acSp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeUploadService", function() { return _lib_ae_upload_service__WEBPACK_IMPORTED_MODULE_0__["AeUploadService"]; });

/* harmony import */ var _lib_ae_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-upload.component */ "6adW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeUploadComponent", function() { return _lib_ae_upload_component__WEBPACK_IMPORTED_MODULE_1__["AeUploadComponent"]; });

/* harmony import */ var _lib_ae_upload_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-upload.module */ "5XMV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeUploadModule", function() { return _lib_ae_upload_module__WEBPACK_IMPORTED_MODULE_2__["AeUploadModule"]; });

/*
 * Public API Surface of ae-upload
 */





/***/ }),

/***/ "EC7k":
/*!************************************************************!*\
  !*** ./projects/ae-authform/src/lib/ae-authform.module.ts ***!
  \************************************************************/
/*! exports provided: AeAuthformModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeAuthformModule", function() { return AeAuthformModule; });
/* harmony import */ var _ae_authform_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-authform.component */ "laXP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeAuthformModule {
}
AeAuthformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeAuthformModule });
AeAuthformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeAuthformModule_Factory(t) { return new (t || AeAuthformModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeAuthformModule, { declarations: [_ae_authform_component__WEBPACK_IMPORTED_MODULE_0__["AeAuthformComponent"]], exports: [_ae_authform_component__WEBPACK_IMPORTED_MODULE_0__["AeAuthformComponent"]] }); })();


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

/***/ "F6YA":
/*!********************************************************!*\
  !*** ./projects/ae-dialog/src/lib/ae-dialog.module.ts ***!
  \********************************************************/
/*! exports provided: AeDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeDialogModule", function() { return AeDialogModule; });
/* harmony import */ var _ae_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-dialog.component */ "Z4is");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeDialogModule {
}
AeDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeDialogModule });
AeDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeDialogModule_Factory(t) { return new (t || AeDialogModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeDialogModule, { declarations: [_ae_dialog_component__WEBPACK_IMPORTED_MODULE_0__["AeDialogComponent"]], exports: [_ae_dialog_component__WEBPACK_IMPORTED_MODULE_0__["AeDialogComponent"]] }); })();


/***/ }),

/***/ "Ft49":
/*!****************************************************!*\
  !*** ./projects/ae-socialbutton/src/public-api.ts ***!
  \****************************************************/
/*! exports provided: AeSocialbuttonService, AeSocialbuttonComponent, AeSocialbuttonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_socialbutton_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-socialbutton.service */ "hCul");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeSocialbuttonService", function() { return _lib_ae_socialbutton_service__WEBPACK_IMPORTED_MODULE_0__["AeSocialbuttonService"]; });

/* harmony import */ var _lib_ae_socialbutton_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-socialbutton.component */ "d+hv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeSocialbuttonComponent", function() { return _lib_ae_socialbutton_component__WEBPACK_IMPORTED_MODULE_1__["AeSocialbuttonComponent"]; });

/* harmony import */ var _lib_ae_socialbutton_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-socialbutton.module */ "MVMu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeSocialbuttonModule", function() { return _lib_ae_socialbutton_module__WEBPACK_IMPORTED_MODULE_2__["AeSocialbuttonModule"]; });

/*
 * Public API Surface of ae-socialbutton
 */





/***/ }),

/***/ "GI0E":
/*!*****************************************************!*\
  !*** ./projects/ae-todo/src/lib/ae-todo.service.ts ***!
  \*****************************************************/
/*! exports provided: AeTodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeTodoService", function() { return AeTodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeTodoService {
    constructor() { }
}
AeTodoService.ɵfac = function AeTodoService_Factory(t) { return new (t || AeTodoService)(); };
AeTodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeTodoService, factory: AeTodoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "GwHP":
/*!******************************************************!*\
  !*** ./projects/ae-chart/src/lib/ae-chart.module.ts ***!
  \******************************************************/
/*! exports provided: AeChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeChartModule", function() { return AeChartModule; });
/* harmony import */ var _ae_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-chart.component */ "wFah");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeChartModule {
}
AeChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeChartModule });
AeChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeChartModule_Factory(t) { return new (t || AeChartModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeChartModule, { declarations: [_ae_chart_component__WEBPACK_IMPORTED_MODULE_0__["AeChartComponent"]], exports: [_ae_chart_component__WEBPACK_IMPORTED_MODULE_0__["AeChartComponent"]] }); })();


/***/ }),

/***/ "H7hj":
/*!*****************************************************************!*\
  !*** ./projects/ae-navigation/src/lib/ae-navigation.service.ts ***!
  \*****************************************************************/
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

/***/ "HzQh":
/*!*********************************************************!*\
  !*** ./projects/ae-table/src/lib/ae-table.component.ts ***!
  \*********************************************************/
/*! exports provided: AeTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeTableComponent", function() { return AeTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeTableComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeTableComponent.ɵfac = function AeTableComponent_Factory(t) { return new (t || AeTableComponent)(); };
AeTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeTableComponent, selectors: [["lib-ae-table"]], decls: 2, vars: 0, template: function AeTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-table works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "IWST":
/*!**********************************************!*\
  !*** ./projects/ae-dialog/src/public-api.ts ***!
  \**********************************************/
/*! exports provided: AeDialogService, AeDialogComponent, AeDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-dialog.service */ "SG1D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeDialogService", function() { return _lib_ae_dialog_service__WEBPACK_IMPORTED_MODULE_0__["AeDialogService"]; });

/* harmony import */ var _lib_ae_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-dialog.component */ "Z4is");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeDialogComponent", function() { return _lib_ae_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AeDialogComponent"]; });

/* harmony import */ var _lib_ae_dialog_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-dialog.module */ "F6YA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeDialogModule", function() { return _lib_ae_dialog_module__WEBPACK_IMPORTED_MODULE_2__["AeDialogModule"]; });

/*
 * Public API Surface of ae-dialog
 */





/***/ }),

/***/ "M9V4":
/*!***************************************************************!*\
  !*** ./projects/ae-facetime/src/lib/ae-facetime.component.ts ***!
  \***************************************************************/
/*! exports provided: AeFacetimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeFacetimeComponent", function() { return AeFacetimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeFacetimeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeFacetimeComponent.ɵfac = function AeFacetimeComponent_Factory(t) { return new (t || AeFacetimeComponent)(); };
AeFacetimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeFacetimeComponent, selectors: [["lib-ae-facetime"]], decls: 2, vars: 0, template: function AeFacetimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-facetime works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "MVMu":
/*!********************************************************************!*\
  !*** ./projects/ae-socialbutton/src/lib/ae-socialbutton.module.ts ***!
  \********************************************************************/
/*! exports provided: AeSocialbuttonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeSocialbuttonModule", function() { return AeSocialbuttonModule; });
/* harmony import */ var _ae_socialbutton_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-socialbutton.component */ "d+hv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeSocialbuttonModule {
}
AeSocialbuttonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeSocialbuttonModule });
AeSocialbuttonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeSocialbuttonModule_Factory(t) { return new (t || AeSocialbuttonModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeSocialbuttonModule, { declarations: [_ae_socialbutton_component__WEBPACK_IMPORTED_MODULE_0__["AeSocialbuttonComponent"]], exports: [_ae_socialbutton_component__WEBPACK_IMPORTED_MODULE_0__["AeSocialbuttonComponent"]] }); })();


/***/ }),

/***/ "Mc/6":
/*!*********************************************************!*\
  !*** ./projects/ae-config/src/lib/ae-config.service.ts ***!
  \*********************************************************/
/*! exports provided: AeConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeConfigService", function() { return AeConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeConfigService {
    constructor() { }
}
AeConfigService.ɵfac = function AeConfigService_Factory(t) { return new (t || AeConfigService)(); };
AeConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeConfigService, factory: AeConfigService.ɵfac, providedIn: 'root' });


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

/***/ "Nw9O":
/*!********************************************!*\
  !*** ./projects/ae-file/src/public-api.ts ***!
  \********************************************/
/*! exports provided: AeFileService, AeFileComponent, AeFileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_file_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-file.service */ "oTou");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeFileService", function() { return _lib_ae_file_service__WEBPACK_IMPORTED_MODULE_0__["AeFileService"]; });

/* harmony import */ var _lib_ae_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-file.component */ "DV2R");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeFileComponent", function() { return _lib_ae_file_component__WEBPACK_IMPORTED_MODULE_1__["AeFileComponent"]; });

/* harmony import */ var _lib_ae_file_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-file.module */ "qsA1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeFileModule", function() { return _lib_ae_file_module__WEBPACK_IMPORTED_MODULE_2__["AeFileModule"]; });

/*
 * Public API Surface of ae-file
 */





/***/ }),

/***/ "OYJ3":
/*!********************************************************!*\
  !*** ./projects/ae-config/src/lib/ae-config.module.ts ***!
  \********************************************************/
/*! exports provided: AeConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeConfigModule", function() { return AeConfigModule; });
/* harmony import */ var _ae_config_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-config.component */ "U6De");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeConfigModule {
}
AeConfigModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeConfigModule });
AeConfigModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeConfigModule_Factory(t) { return new (t || AeConfigModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeConfigModule, { declarations: [_ae_config_component__WEBPACK_IMPORTED_MODULE_0__["AeConfigComponent"]], exports: [_ae_config_component__WEBPACK_IMPORTED_MODULE_0__["AeConfigComponent"]] }); })();


/***/ }),

/***/ "OjEE":
/*!*****************************************************!*\
  !*** ./projects/ae-doc/src/lib/ae-doc.component.ts ***!
  \*****************************************************/
/*! exports provided: AeDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeDocComponent", function() { return AeDocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ae_doc_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ae-doc.service */ "uY3z");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _ae_component_view_ae_component_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ae-component-view/ae-component-view.component */ "+oom");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






class AeDocComponent {
    constructor(service) {
        this.service = service;
        this.subscriptions = [];
        this.data = {};
    }
    ngOnDestroy() {
        for (let s of this.subscriptions) {
            s.unsubscribe();
        }
    }
    ngOnInit() {
        this.subscriptions = [
            this.service.data$.subscribe((data) => {
                this.data = data;
            }),
        ];
    }
}
AeDocComponent.ɵfac = function AeDocComponent_Factory(t) { return new (t || AeDocComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ae_doc_service__WEBPACK_IMPORTED_MODULE_1__["AeDocService"])); };
AeDocComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeDocComponent, selectors: [["ae-doc"]], decls: 15, vars: 6, consts: [["label", "OVERVIEW"], [2, "background-color", "transparent"]], template: function AeDocComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ae-component-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.data.componentName), " Component ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.moduleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.path);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _ae_component_view_ae_component_view_component__WEBPACK_IMPORTED_MODULE_4__["AeComponentViewComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]], styles: [".icon-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  transition: all ease-in-out 400ms;\n  border: thin white solid;\n}\n\n.icon-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: all ease-in-out 400ms;\n}\n\n.mat-card-content[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkb2Muc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImRvYy5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCA0MDBtcztcclxuICBib3JkZXI6IHRoaW4gd2hpdGUgc29saWQ7XHJcbn1cclxuXHJcbi5pY29uLWJ1dHRvbjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCA0MDBtcztcclxufVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "PUgM":
/*!********************************************************************!*\
  !*** ./projects/ae-product-card/src/lib/ae-product-card.module.ts ***!
  \********************************************************************/
/*! exports provided: AeProductCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeProductCardModule", function() { return AeProductCardModule; });
/* harmony import */ var _ae_product_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-product-card.component */ "mLEb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeProductCardModule {
}
AeProductCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeProductCardModule });
AeProductCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeProductCardModule_Factory(t) { return new (t || AeProductCardModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeProductCardModule, { declarations: [_ae_product_card_component__WEBPACK_IMPORTED_MODULE_0__["AeProductCardComponent"]], exports: [_ae_product_card_component__WEBPACK_IMPORTED_MODULE_0__["AeProductCardComponent"]] }); })();


/***/ }),

/***/ "PZw5":
/*!***********************************************************************!*\
  !*** ./projects/ae-notification/src/lib/ae-notification.component.ts ***!
  \***********************************************************************/
/*! exports provided: AeNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeNotificationComponent", function() { return AeNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeNotificationComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeNotificationComponent.ɵfac = function AeNotificationComponent_Factory(t) { return new (t || AeNotificationComponent)(); };
AeNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeNotificationComponent, selectors: [["lib-ae-notification"]], decls: 2, vars: 0, template: function AeNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-notification works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "QTTS":
/*!*******************************************************************!*\
  !*** ./projects/ae-sociallogin/src/lib/ae-sociallogin.service.ts ***!
  \*******************************************************************/
/*! exports provided: AeSocialloginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeSocialloginService", function() { return AeSocialloginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeSocialloginService {
    constructor() { }
}
AeSocialloginService.ɵfac = function AeSocialloginService_Factory(t) { return new (t || AeSocialloginService)(); };
AeSocialloginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeSocialloginService, factory: AeSocialloginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QYsP":
/*!*****************************************************!*\
  !*** ./projects/ae-stat/src/lib/ae-stat.service.ts ***!
  \*****************************************************/
/*! exports provided: AeStatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeStatService", function() { return AeStatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeStatService {
    constructor() { }
}
AeStatService.ɵfac = function AeStatService_Factory(t) { return new (t || AeStatService)(); };
AeStatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeStatService, factory: AeStatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RUEf":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var projects_ae_authform_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ae-authform/src/public-api */ "lCa/");
/* harmony import */ var projects_ae_chart_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/ae-chart/src/public-api */ "pFDW");
/* harmony import */ var projects_ae_clock_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ae-clock/src/public-api */ "WWOm");
/* harmony import */ var projects_ae_config_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/ae-config/src/public-api */ "VbQo");
/* harmony import */ var projects_ae_dialog_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/ae-dialog/src/public-api */ "IWST");
/* harmony import */ var projects_ae_doc_src_public_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/ae-doc/src/public-api */ "UxVk");
/* harmony import */ var projects_ae_facetime_src_public_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/ae-facetime/src/public-api */ "/ddq");
/* harmony import */ var projects_ae_file_src_public_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/ae-file/src/public-api */ "Nw9O");
/* harmony import */ var projects_ae_form_src_public_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! projects/ae-form/src/public-api */ "ApZP");
/* harmony import */ var projects_ae_navigation_src_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! projects/ae-navigation/src/lib */ "TdhO");
/* harmony import */ var projects_ae_notification_src_public_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! projects/ae-notification/src/public-api */ "xfM8");
/* harmony import */ var projects_ae_product_card_src_public_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! projects/ae-product-card/src/public-api */ "00ki");
/* harmony import */ var projects_ae_socialbutton_src_public_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! projects/ae-socialbutton/src/public-api */ "Ft49");
/* harmony import */ var projects_ae_sociallogin_src_public_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! projects/ae-sociallogin/src/public-api */ "eu6L");
/* harmony import */ var projects_ae_stat_src_public_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! projects/ae-stat/src/public-api */ "UAR8");
/* harmony import */ var projects_ae_table_src_public_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! projects/ae-table/src/public-api */ "WK0G");
/* harmony import */ var projects_ae_todo_src_public_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! projects/ae-todo/src/public-api */ "nnK7");
/* harmony import */ var projects_ae_upload_src_public_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! projects/ae-upload/src/public-api */ "DnC/");



















const AppRoutes = [
    {
        path: 'home',
        icon: 'home',
        data: {
            componentName: 'string',
            description: 'string',
            moduleName: 'string',
            path: 'string',
            code: {
                html: 'Home',
                css: 'Css',
                ts: 'Ts',
                clazz: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
            },
        },
    },
    {
        path: 'auth-form',
        icon: 'security',
        data: {
            componentName: 'auth-form',
            description: 'auth-form',
            moduleName: 'auth-form',
            path: 'auth-form',
            code: {
                html: 'AeAuthformComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_authform_src_public_api__WEBPACK_IMPORTED_MODULE_1__["AeAuthformComponent"],
            },
        },
    },
    {
        path: 'chart',
        icon: 'pie_chart',
        data: {
            componentName: 'chart',
            description: 'chart',
            moduleName: 'chart',
            path: 'chart',
            code: {
                html: 'AeChartComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_chart_src_public_api__WEBPACK_IMPORTED_MODULE_2__["AeChartComponent"],
            },
        },
    },
    {
        path: 'clock',
        icon: 'timer',
        data: {
            componentName: 'clock',
            description: 'clock',
            moduleName: 'clock',
            path: 'clock',
            code: {
                html: 'AeClockComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_clock_src_public_api__WEBPACK_IMPORTED_MODULE_3__["AeClockComponent"],
            },
        },
    },
    {
        path: 'config',
        icon: 'settings',
        data: {
            componentName: 'config',
            description: 'config',
            moduleName: 'config',
            path: 'config',
            code: {
                html: 'AeConfigComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_config_src_public_api__WEBPACK_IMPORTED_MODULE_4__["AeConfigComponent"],
            },
        },
    },
    {
        path: 'dialog',
        icon: 'warning',
        data: {
            componentName: 'dialog',
            description: 'dialog',
            moduleName: 'dialog',
            path: 'dialog',
            code: {
                html: 'AeDialogComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_dialog_src_public_api__WEBPACK_IMPORTED_MODULE_5__["AeDialogComponent"],
            },
        },
    },
    {
        path: 'doc',
        icon: 'pages',
        data: {
            componentName: 'doc',
            description: 'doc',
            moduleName: 'doc',
            path: 'doc',
            code: {
                html: 'AeDocComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_doc_src_public_api__WEBPACK_IMPORTED_MODULE_6__["AeDocComponent"],
            },
        },
    },
    {
        path: 'facetime',
        icon: 'face',
        data: {
            componentName: 'facetime',
            description: 'facetime',
            moduleName: 'facetime',
            path: 'facetime',
            code: {
                html: 'AeFacetimeComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_facetime_src_public_api__WEBPACK_IMPORTED_MODULE_7__["AeFacetimeComponent"],
            },
        },
    },
    {
        path: 'file',
        icon: 'cloud_upload',
        data: {
            componentName: 'file',
            description: 'file',
            moduleName: 'file',
            path: 'file',
            code: {
                html: 'AeFileComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_file_src_public_api__WEBPACK_IMPORTED_MODULE_8__["AeFileComponent"],
            },
        },
    },
    {
        path: 'form',
        icon: 'input',
        data: {
            componentName: 'form',
            description: 'form',
            moduleName: 'form',
            path: 'form',
            code: {
                html: 'AeFormComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_form_src_public_api__WEBPACK_IMPORTED_MODULE_9__["AeFormComponent"],
            },
        },
    },
    {
        path: 'navigation',
        icon: 'navigation',
        data: {
            componentName: 'navigation',
            description: 'navigation',
            moduleName: 'navigation',
            path: 'navigation',
            code: {
                html: 'AeNavigationComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_navigation_src_lib__WEBPACK_IMPORTED_MODULE_10__["AeNavigationComponent"],
            },
        },
    },
    {
        path: 'notification',
        icon: 'notifications',
        data: {
            componentName: 'notification',
            description: 'notification',
            moduleName: 'notification',
            path: 'notification',
            code: {
                html: 'AeNotificationComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_notification_src_public_api__WEBPACK_IMPORTED_MODULE_11__["AeNotificationComponent"],
            },
        },
    },
    {
        path: 'product-card',
        icon: 'shopping_basket',
        data: {
            componentName: 'product-card',
            description: 'product-card',
            moduleName: 'product-card',
            path: 'product-card',
            code: {
                html: 'AeProductCardComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_product_card_src_public_api__WEBPACK_IMPORTED_MODULE_12__["AeProductCardComponent"],
            },
        },
    },
    {
        path: 'social-button',
        icon: 'card_giftcard',
        data: {
            componentName: 'social-button',
            description: 'social-button',
            moduleName: 'social-button',
            path: 'social-button',
            code: {
                html: 'AeSocialbuttonComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_socialbutton_src_public_api__WEBPACK_IMPORTED_MODULE_13__["AeSocialbuttonComponent"],
            },
        },
    },
    {
        path: 'social-login',
        icon: 'facebook',
        data: {
            componentName: 'social-login',
            description: 'social-login',
            moduleName: 'social-login',
            path: 'social-login',
            code: {
                html: 'AeSocialloginComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_sociallogin_src_public_api__WEBPACK_IMPORTED_MODULE_14__["AeSocialloginComponent"],
            },
        },
    },
    {
        path: 'stat',
        icon: 'facebook',
        data: {
            componentName: 'stat',
            description: 'stat',
            moduleName: 'stat',
            path: 'stat',
            code: {
                html: 'AeStatComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_stat_src_public_api__WEBPACK_IMPORTED_MODULE_15__["AeStatComponent"],
            },
        },
    },
    {
        path: 'table',
        icon: 'table_view',
        data: {
            componentName: 'table',
            description: 'table',
            moduleName: 'table',
            path: 'table',
            code: {
                html: 'AeTableComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_table_src_public_api__WEBPACK_IMPORTED_MODULE_16__["AeTableComponent"],
            },
        },
    },
    {
        path: 'todo',
        icon: 'add_task',
        data: {
            componentName: 'todo',
            description: 'todo',
            moduleName: 'todo',
            path: 'todo',
            code: {
                html: 'AeTodoComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_todo_src_public_api__WEBPACK_IMPORTED_MODULE_17__["AeTodoComponent"],
            },
        },
    },
    {
        path: 'upload',
        icon: 'cloud_upload',
        data: {
            componentName: 'upload',
            description: 'upload',
            moduleName: 'upload',
            path: 'upload',
            code: {
                html: 'AeUploadComponent',
                css: 'Css',
                ts: 'Ts',
                clazz: projects_ae_upload_src_public_api__WEBPACK_IMPORTED_MODULE_18__["AeUploadComponent"],
            },
        },
    },
];


/***/ }),

/***/ "SG1D":
/*!*********************************************************!*\
  !*** ./projects/ae-dialog/src/lib/ae-dialog.service.ts ***!
  \*********************************************************/
/*! exports provided: AeDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeDialogService", function() { return AeDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeDialogService {
    constructor() { }
}
AeDialogService.ɵfac = function AeDialogService_Factory(t) { return new (t || AeDialogService)(); };
AeDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeDialogService, factory: AeDialogService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_ae_navigation_src_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ae-navigation/src/lib */ "TdhO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var projects_ae_doc_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/ae-doc/src/public-api */ "UxVk");
/* harmony import */ var _projects_ae_navigation_src_lib_ae_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../projects/ae-navigation/src/lib/ae-navigation.component */ "rgdp");







class AppComponent {
    constructor(nav, router, docService) {
        this.nav = nav;
        this.router = router;
        this.docService = docService;
        this.title = 'Angular Library';
        // setting menu
        this.nav.menu(_app_routes__WEBPACK_IMPORTED_MODULE_0__["AppRoutes"].map((e) => (Object.assign(Object.assign({}, e), { eventHandler: (event) => {
                if (event === 'click') {
                    this.docService.next(e.data);
                }
            }, label: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["toUpper"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["replace"])(e.path, '-', ' ')) }))));
    }
    navigate(path) {
        this.router.navigate([path]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_ae_navigation_src_lib__WEBPACK_IMPORTED_MODULE_3__["AeNavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_ae_doc_src_public_api__WEBPACK_IMPORTED_MODULE_5__["AeDocService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["main-content-top-left", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ae-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_projects_ae_navigation_src_lib_ae_navigation_component__WEBPACK_IMPORTED_MODULE_6__["AeNavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TdhO":
/*!*************************************************!*\
  !*** ./projects/ae-navigation/src/lib/index.ts ***!
  \*************************************************/
/*! exports provided: AeNavigationModule, AeNavigationComponent, AeNavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ae_navigation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-navigation.module */ "2XoE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeNavigationModule", function() { return _ae_navigation_module__WEBPACK_IMPORTED_MODULE_0__["AeNavigationModule"]; });

/* harmony import */ var _ae_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ae-navigation.component */ "rgdp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeNavigationComponent", function() { return _ae_navigation_component__WEBPACK_IMPORTED_MODULE_1__["AeNavigationComponent"]; });

/* harmony import */ var _ae_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ae-navigation.service */ "H7hj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeNavigationService", function() { return _ae_navigation_service__WEBPACK_IMPORTED_MODULE_2__["AeNavigationService"]; });






/***/ }),

/***/ "U6De":
/*!***********************************************************!*\
  !*** ./projects/ae-config/src/lib/ae-config.component.ts ***!
  \***********************************************************/
/*! exports provided: AeConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeConfigComponent", function() { return AeConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeConfigComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeConfigComponent.ɵfac = function AeConfigComponent_Factory(t) { return new (t || AeConfigComponent)(); };
AeConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeConfigComponent, selectors: [["lib-ae-config"]], decls: 2, vars: 0, template: function AeConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-config works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "UAR8":
/*!********************************************!*\
  !*** ./projects/ae-stat/src/public-api.ts ***!
  \********************************************/
/*! exports provided: AeStatService, AeStatComponent, AeStatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_stat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-stat.service */ "QYsP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeStatService", function() { return _lib_ae_stat_service__WEBPACK_IMPORTED_MODULE_0__["AeStatService"]; });

/* harmony import */ var _lib_ae_stat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-stat.component */ "BgB3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeStatComponent", function() { return _lib_ae_stat_component__WEBPACK_IMPORTED_MODULE_1__["AeStatComponent"]; });

/* harmony import */ var _lib_ae_stat_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-stat.module */ "xJk6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeStatModule", function() { return _lib_ae_stat_module__WEBPACK_IMPORTED_MODULE_2__["AeStatModule"]; });

/*
 * Public API Surface of ae-stat
 */





/***/ }),

/***/ "UxVk":
/*!*******************************************!*\
  !*** ./projects/ae-doc/src/public-api.ts ***!
  \*******************************************/
/*! exports provided: AeDocService, AeDocComponent, AeDocModule, HighlightProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_doc_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-doc.service */ "uY3z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeDocService", function() { return _lib_ae_doc_service__WEBPACK_IMPORTED_MODULE_0__["AeDocService"]; });

/* harmony import */ var _lib_ae_doc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-doc.component */ "OjEE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeDocComponent", function() { return _lib_ae_doc_component__WEBPACK_IMPORTED_MODULE_1__["AeDocComponent"]; });

/* harmony import */ var _lib_ae_doc_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-doc.module */ "aNXJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeDocModule", function() { return _lib_ae_doc_module__WEBPACK_IMPORTED_MODULE_2__["AeDocModule"]; });

/* harmony import */ var _lib_HighlightProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/HighlightProvider */ "bfVL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightProvider", function() { return _lib_HighlightProvider__WEBPACK_IMPORTED_MODULE_3__["HighlightProvider"]; });

/*
 * Public API Surface of ae-doc
 */






/***/ }),

/***/ "VFZu":
/*!*********************************************************!*\
  !*** ./projects/ae-clock/src/lib/ae-clock.component.ts ***!
  \*********************************************************/
/*! exports provided: AeClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeClockComponent", function() { return AeClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeClockComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeClockComponent.ɵfac = function AeClockComponent_Factory(t) { return new (t || AeClockComponent)(); };
AeClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeClockComponent, selectors: [["lib-ae-clock"]], decls: 2, vars: 0, template: function AeClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-clock works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "VbQo":
/*!**********************************************!*\
  !*** ./projects/ae-config/src/public-api.ts ***!
  \**********************************************/
/*! exports provided: AeConfigService, AeConfigComponent, AeConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-config.service */ "Mc/6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeConfigService", function() { return _lib_ae_config_service__WEBPACK_IMPORTED_MODULE_0__["AeConfigService"]; });

/* harmony import */ var _lib_ae_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-config.component */ "U6De");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeConfigComponent", function() { return _lib_ae_config_component__WEBPACK_IMPORTED_MODULE_1__["AeConfigComponent"]; });

/* harmony import */ var _lib_ae_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-config.module */ "OYJ3");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeConfigModule", function() { return _lib_ae_config_module__WEBPACK_IMPORTED_MODULE_2__["AeConfigModule"]; });

/*
 * Public API Surface of ae-config
 */





/***/ }),

/***/ "VgZL":
/*!*******************************************************!*\
  !*** ./projects/ae-clock/src/lib/ae-clock.service.ts ***!
  \*******************************************************/
/*! exports provided: AeClockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeClockService", function() { return AeClockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeClockService {
    constructor() { }
}
AeClockService.ɵfac = function AeClockService_Factory(t) { return new (t || AeClockService)(); };
AeClockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeClockService, factory: AeClockService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WK0G":
/*!*********************************************!*\
  !*** ./projects/ae-table/src/public-api.ts ***!
  \*********************************************/
/*! exports provided: AeTableService, AeTableComponent, AeTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_table_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-table.service */ "14G6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeTableService", function() { return _lib_ae_table_service__WEBPACK_IMPORTED_MODULE_0__["AeTableService"]; });

/* harmony import */ var _lib_ae_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-table.component */ "HzQh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeTableComponent", function() { return _lib_ae_table_component__WEBPACK_IMPORTED_MODULE_1__["AeTableComponent"]; });

/* harmony import */ var _lib_ae_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-table.module */ "0cEp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeTableModule", function() { return _lib_ae_table_module__WEBPACK_IMPORTED_MODULE_2__["AeTableModule"]; });

/*
 * Public API Surface of ae-table
 */





/***/ }),

/***/ "WWOm":
/*!*********************************************!*\
  !*** ./projects/ae-clock/src/public-api.ts ***!
  \*********************************************/
/*! exports provided: AeClockService, AeClockComponent, AeClockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_clock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-clock.service */ "VgZL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeClockService", function() { return _lib_ae_clock_service__WEBPACK_IMPORTED_MODULE_0__["AeClockService"]; });

/* harmony import */ var _lib_ae_clock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-clock.component */ "VFZu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeClockComponent", function() { return _lib_ae_clock_component__WEBPACK_IMPORTED_MODULE_1__["AeClockComponent"]; });

/* harmony import */ var _lib_ae_clock_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-clock.module */ "lnow");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeClockModule", function() { return _lib_ae_clock_module__WEBPACK_IMPORTED_MODULE_2__["AeClockModule"]; });

/*
 * Public API Surface of ae-clock
 */





/***/ }),

/***/ "WXmH":
/*!*********************************************************************!*\
  !*** ./projects/ae-notification/src/lib/ae-notification.service.ts ***!
  \*********************************************************************/
/*! exports provided: AeNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeNotificationService", function() { return AeNotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeNotificationService {
    constructor() { }
}
AeNotificationService.ɵfac = function AeNotificationService_Factory(t) { return new (t || AeNotificationService)(); };
AeNotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeNotificationService, factory: AeNotificationService.ɵfac, providedIn: 'root' });


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

/***/ "Z4is":
/*!***********************************************************!*\
  !*** ./projects/ae-dialog/src/lib/ae-dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: AeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeDialogComponent", function() { return AeDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeDialogComponent.ɵfac = function AeDialogComponent_Factory(t) { return new (t || AeDialogComponent)(); };
AeDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeDialogComponent, selectors: [["lib-ae-dialog"]], decls: 2, vars: 0, template: function AeDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-dialog works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


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
/* harmony import */ var projects_ae_doc_src_public_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! projects/ae-doc/src/public-api */ "UxVk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [projects_ae_doc_src_public_api__WEBPACK_IMPORTED_MODULE_9__["HighlightProvider"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _store__WEBPACK_IMPORTED_MODULE_5__["AppStoreModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
        _store__WEBPACK_IMPORTED_MODULE_5__["AppStoreModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"]] }); })();


/***/ }),

/***/ "aNXJ":
/*!**************************************************!*\
  !*** ./projects/ae-doc/src/lib/ae-doc.module.ts ***!
  \**************************************************/
/*! exports provided: AeDocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeDocModule", function() { return AeDocModule; });
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js */ "FIf5");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ae_doc_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ae-doc.component */ "OjEE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _ae_text_content_ae_text_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ae-text-content/ae-text-content.component */ "kvji");
/* harmony import */ var _ae_component_view_ae_component_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ae-component-view/ae-component-view.component */ "+oom");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var _ae_doc_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ae-doc.service */ "uY3z");
/* harmony import */ var _ae_component_view_ae_component_view_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ae-component-view/ae-component-view.service */ "+6+r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AeDocModule {
}
AeDocModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AeDocModule });
AeDocModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function AeDocModule_Factory(t) { return new (t || AeDocModule)(); }, providers: [_ae_doc_service__WEBPACK_IMPORTED_MODULE_13__["AeDocService"], _ae_component_view_ae_component_view_service__WEBPACK_IMPORTED_MODULE_14__["AeComponentViewService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__["HighlightModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"],
        ], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AeDocModule, { declarations: [_ae_doc_component__WEBPACK_IMPORTED_MODULE_1__["AeDocComponent"],
        _ae_text_content_ae_text_content_component__WEBPACK_IMPORTED_MODULE_10__["AeTextContentComponent"],
        _ae_component_view_ae_component_view_component__WEBPACK_IMPORTED_MODULE_11__["AeComponentViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_12__["HighlightModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_8__["ClipboardModule"]], exports: [_ae_doc_component__WEBPACK_IMPORTED_MODULE_1__["AeDocComponent"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"]] }); })();


/***/ }),

/***/ "acSp":
/*!*********************************************************!*\
  !*** ./projects/ae-upload/src/lib/ae-upload.service.ts ***!
  \*********************************************************/
/*! exports provided: AeUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeUploadService", function() { return AeUploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeUploadService {
    constructor() { }
}
AeUploadService.ɵfac = function AeUploadService_Factory(t) { return new (t || AeUploadService)(); };
AeUploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeUploadService, factory: AeUploadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "bfVL":
/*!******************************************************!*\
  !*** ./projects/ae-doc/src/lib/HighlightProvider.ts ***!
  \******************************************************/
/*! exports provided: HighlightProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightProvider", function() { return HighlightProvider; });
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");

const HighlightProvider = {
    provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_0__["HIGHLIGHT_OPTIONS"],
    useValue: {
        coreLibraryLoader: () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! highlight.js/lib/core */ "ECCn", 7)),
        languages: {
            typescript: function () {
                return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/typescript */ "r0Rl", 7));
            },
            css: function () {
                return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/css */ "7oys", 7));
            },
            xml: function () {
                return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/xml */ "jctj", 7));
            },
            json: function () {
                return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/xml */ "jctj", 7));
            },
        },
    },
};


/***/ }),

/***/ "cHD6":
/*!*******************************************************!*\
  !*** ./projects/ae-todo/src/lib/ae-todo.component.ts ***!
  \*******************************************************/
/*! exports provided: AeTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeTodoComponent", function() { return AeTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeTodoComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeTodoComponent.ɵfac = function AeTodoComponent_Factory(t) { return new (t || AeTodoComponent)(); };
AeTodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeTodoComponent, selectors: [["lib-ae-todo"]], decls: 2, vars: 0, template: function AeTodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-todo works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


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

/***/ "d+hv":
/*!***********************************************************************!*\
  !*** ./projects/ae-socialbutton/src/lib/ae-socialbutton.component.ts ***!
  \***********************************************************************/
/*! exports provided: AeSocialbuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeSocialbuttonComponent", function() { return AeSocialbuttonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeSocialbuttonComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeSocialbuttonComponent.ɵfac = function AeSocialbuttonComponent_Factory(t) { return new (t || AeSocialbuttonComponent)(); };
AeSocialbuttonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeSocialbuttonComponent, selectors: [["lib-ae-socialbutton"]], decls: 2, vars: 0, template: function AeSocialbuttonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-socialbutton works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "eu6L":
/*!***************************************************!*\
  !*** ./projects/ae-sociallogin/src/public-api.ts ***!
  \***************************************************/
/*! exports provided: AeSocialloginService, AeSocialloginComponent, AeSocialloginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_sociallogin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-sociallogin.service */ "QTTS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeSocialloginService", function() { return _lib_ae_sociallogin_service__WEBPACK_IMPORTED_MODULE_0__["AeSocialloginService"]; });

/* harmony import */ var _lib_ae_sociallogin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-sociallogin.component */ "t8o5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeSocialloginComponent", function() { return _lib_ae_sociallogin_component__WEBPACK_IMPORTED_MODULE_1__["AeSocialloginComponent"]; });

/* harmony import */ var _lib_ae_sociallogin_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-sociallogin.module */ "rEg1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeSocialloginModule", function() { return _lib_ae_sociallogin_module__WEBPACK_IMPORTED_MODULE_2__["AeSocialloginModule"]; });

/*
 * Public API Surface of ae-sociallogin
 */





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

/***/ "ffQT":
/*!************************************************************!*\
  !*** ./projects/ae-facetime/src/lib/ae-facetime.module.ts ***!
  \************************************************************/
/*! exports provided: AeFacetimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeFacetimeModule", function() { return AeFacetimeModule; });
/* harmony import */ var _ae_facetime_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-facetime.component */ "M9V4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeFacetimeModule {
}
AeFacetimeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeFacetimeModule });
AeFacetimeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeFacetimeModule_Factory(t) { return new (t || AeFacetimeModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeFacetimeModule, { declarations: [_ae_facetime_component__WEBPACK_IMPORTED_MODULE_0__["AeFacetimeComponent"]], exports: [_ae_facetime_component__WEBPACK_IMPORTED_MODULE_0__["AeFacetimeComponent"]] }); })();


/***/ }),

/***/ "gGVz":
/*!*********************************************************************!*\
  !*** ./projects/ae-product-card/src/lib/ae-product-card.service.ts ***!
  \*********************************************************************/
/*! exports provided: AeProductCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeProductCardService", function() { return AeProductCardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeProductCardService {
    constructor() { }
}
AeProductCardService.ɵfac = function AeProductCardService_Factory(t) { return new (t || AeProductCardService)(); };
AeProductCardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeProductCardService, factory: AeProductCardService.ɵfac, providedIn: 'root' });


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

/***/ "hCul":
/*!*********************************************************************!*\
  !*** ./projects/ae-socialbutton/src/lib/ae-socialbutton.service.ts ***!
  \*********************************************************************/
/*! exports provided: AeSocialbuttonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeSocialbuttonService", function() { return AeSocialbuttonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeSocialbuttonService {
    constructor() { }
}
AeSocialbuttonService.ɵfac = function AeSocialbuttonService_Factory(t) { return new (t || AeSocialbuttonService)(); };
AeSocialbuttonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeSocialbuttonService, factory: AeSocialbuttonService.ɵfac, providedIn: 'root' });


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

/***/ "j3Hu":
/*!************************************************!*\
  !*** ./src/app/common/app.materials.module.ts ***!
  \************************************************/
/*! exports provided: MaterialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsModule", function() { return MaterialsModule; });
/* harmony import */ var projects_ae_navigation_src_lib_ae_navigation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/ae-navigation/src/lib/ae-navigation.module */ "2XoE");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class MaterialsModule {
}
MaterialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MaterialsModule });
MaterialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function MaterialsModule_Factory(t) { return new (t || MaterialsModule)(); }, imports: [projects_ae_navigation_src_lib_ae_navigation_module__WEBPACK_IMPORTED_MODULE_0__["AeNavigationModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MaterialsModule, { exports: [projects_ae_navigation_src_lib_ae_navigation_module__WEBPACK_IMPORTED_MODULE_0__["AeNavigationModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]] }); })();


/***/ }),

/***/ "k6lI":
/*!****************************************************!*\
  !*** ./projects/ae-todo/src/lib/ae-todo.module.ts ***!
  \****************************************************/
/*! exports provided: AeTodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeTodoModule", function() { return AeTodoModule; });
/* harmony import */ var _ae_todo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-todo.component */ "cHD6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeTodoModule {
}
AeTodoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeTodoModule });
AeTodoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeTodoModule_Factory(t) { return new (t || AeTodoModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeTodoModule, { declarations: [_ae_todo_component__WEBPACK_IMPORTED_MODULE_0__["AeTodoComponent"]], exports: [_ae_todo_component__WEBPACK_IMPORTED_MODULE_0__["AeTodoComponent"]] }); })();


/***/ }),

/***/ "kvji":
/*!******************************************************************************!*\
  !*** ./projects/ae-doc/src/lib/ae-text-content/ae-text-content.component.ts ***!
  \******************************************************************************/
/*! exports provided: AeTextContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeTextContentComponent", function() { return AeTextContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");







class AeTextContentComponent {
    constructor(clipboard, snackbar) {
        this.clipboard = clipboard;
        this.snackbar = snackbar;
        this.content = 'The is no content provided!';
        this.copyIcon = 'content_copy';
    }
    ngOnInit() { }
    copyContent() {
        if (this.content) {
            this.snackbar.open(this.content, '', { duration: 2000 });
            this.clipboard.copy(this.content);
        }
    }
}
AeTextContentComponent.ɵfac = function AeTextContentComponent_Factory(t) { return new (t || AeTextContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["Clipboard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
AeTextContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeTextContentComponent, selectors: [["ae-text-content"]], inputs: { content: "content" }, decls: 5, vars: 3, consts: [[1, "hljs", "position-relative"], ["mat-icon-button", "", "matTooltip", "Copy Content", 1, "icon-button", "copy-button", 3, "click"], [3, "highlight", "lineNumbers"]], template: function AeTextContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AeTextContentComponent_Template_button_click_1_listener() { return ctx.copyContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.copyIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.content)("lineNumbers", true);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["Highlight"]], styles: [".icon-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  transition: all ease-in-out 400ms;\n  border: thin white solid;\n}\n\n.icon-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: all ease-in-out 400ms;\n}\n\n.mat-card-content[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.hljs[_ngcontent-%COMP%] {\n  margin: 4px;\n  padding: 10px;\n}\n\n.hljs[_ngcontent-%COMP%]   .hljs[_ngcontent-%COMP%] {\n  box-shadow: none;\n  margin: 0px;\n  border-left: 5px solid #404040;\n  transition: font-size ease-in-out 400ms;\n  cursor: copy;\n}\n\n.position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.copy-button[_ngcontent-%COMP%] {\n  border: thin white solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRvYy5zdHlsZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxhZS10ZXh0LWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QUFiQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBZ0JGOztBQWJBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLFlBQUE7QUFnQkY7O0FBYkE7RUFDRSxrQkFBQTtBQWdCRjs7QUFiQTtFQUNFLHdCQUFBO0FBZ0JGIiwiZmlsZSI6ImFlLXRleHQtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgNDAwbXM7XHJcbiAgYm9yZGVyOiB0aGluIHdoaXRlIHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbi1idXR0b246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgNDAwbXM7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50IHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbiIsIi5pY29uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDQwMG1zO1xuICBib3JkZXI6IHRoaW4gd2hpdGUgc29saWQ7XG59XG5cbi5pY29uLWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDQwMG1zO1xufVxuXG4ubWF0LWNhcmQtY29udGVudCB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5obGpzIHtcbiAgbWFyZ2luOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5obGpzIC5obGpzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQwNDA0MDtcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIGVhc2UtaW4tb3V0IDQwMG1zO1xuICBjdXJzb3I6IGNvcHk7XG59XG5cbi5wb3NpdGlvbi1yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvcHktYnV0dG9uIHtcbiAgYm9yZGVyOiB0aGluIHdoaXRlIHNvbGlkO1xufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "lCa/":
/*!************************************************!*\
  !*** ./projects/ae-authform/src/public-api.ts ***!
  \************************************************/
/*! exports provided: AeAuthformService, AeAuthformComponent, AeAuthformModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_authform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-authform.service */ "9/uO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeAuthformService", function() { return _lib_ae_authform_service__WEBPACK_IMPORTED_MODULE_0__["AeAuthformService"]; });

/* harmony import */ var _lib_ae_authform_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-authform.component */ "laXP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeAuthformComponent", function() { return _lib_ae_authform_component__WEBPACK_IMPORTED_MODULE_1__["AeAuthformComponent"]; });

/* harmony import */ var _lib_ae_authform_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-authform.module */ "EC7k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeAuthformModule", function() { return _lib_ae_authform_module__WEBPACK_IMPORTED_MODULE_2__["AeAuthformModule"]; });

/*
 * Public API Surface of ae-authform
 */





/***/ }),

/***/ "lUUs":
/*!*******************************************************!*\
  !*** ./projects/ae-chart/src/lib/ae-chart.service.ts ***!
  \*******************************************************/
/*! exports provided: AeChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeChartService", function() { return AeChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeChartService {
    constructor() { }
}
AeChartService.ɵfac = function AeChartService_Factory(t) { return new (t || AeChartService)(); };
AeChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeChartService, factory: AeChartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "laXP":
/*!***************************************************************!*\
  !*** ./projects/ae-authform/src/lib/ae-authform.component.ts ***!
  \***************************************************************/
/*! exports provided: AeAuthformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeAuthformComponent", function() { return AeAuthformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeAuthformComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeAuthformComponent.ɵfac = function AeAuthformComponent_Factory(t) { return new (t || AeAuthformComponent)(); };
AeAuthformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeAuthformComponent, selectors: [["lib-ae-authform"]], decls: 2, vars: 0, template: function AeAuthformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-authform works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "lnow":
/*!******************************************************!*\
  !*** ./projects/ae-clock/src/lib/ae-clock.module.ts ***!
  \******************************************************/
/*! exports provided: AeClockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeClockModule", function() { return AeClockModule; });
/* harmony import */ var _ae_clock_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-clock.component */ "VFZu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeClockModule {
}
AeClockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeClockModule });
AeClockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeClockModule_Factory(t) { return new (t || AeClockModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeClockModule, { declarations: [_ae_clock_component__WEBPACK_IMPORTED_MODULE_0__["AeClockComponent"]], exports: [_ae_clock_component__WEBPACK_IMPORTED_MODULE_0__["AeClockComponent"]] }); })();


/***/ }),

/***/ "mLEb":
/*!***********************************************************************!*\
  !*** ./projects/ae-product-card/src/lib/ae-product-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: AeProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeProductCardComponent", function() { return AeProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeProductCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeProductCardComponent.ɵfac = function AeProductCardComponent_Factory(t) { return new (t || AeProductCardComponent)(); };
AeProductCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeProductCardComponent, selectors: [["lib-ae-product-card"]], decls: 2, vars: 0, template: function AeProductCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-product-card works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "nnK7":
/*!********************************************!*\
  !*** ./projects/ae-todo/src/public-api.ts ***!
  \********************************************/
/*! exports provided: AeTodoService, AeTodoComponent, AeTodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_todo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-todo.service */ "GI0E");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeTodoService", function() { return _lib_ae_todo_service__WEBPACK_IMPORTED_MODULE_0__["AeTodoService"]; });

/* harmony import */ var _lib_ae_todo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-todo.component */ "cHD6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeTodoComponent", function() { return _lib_ae_todo_component__WEBPACK_IMPORTED_MODULE_1__["AeTodoComponent"]; });

/* harmony import */ var _lib_ae_todo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-todo.module */ "k6lI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeTodoModule", function() { return _lib_ae_todo_module__WEBPACK_IMPORTED_MODULE_2__["AeTodoModule"]; });

/*
 * Public API Surface of ae-todo
 */





/***/ }),

/***/ "oTou":
/*!*****************************************************!*\
  !*** ./projects/ae-file/src/lib/ae-file.service.ts ***!
  \*****************************************************/
/*! exports provided: AeFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeFileService", function() { return AeFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeFileService {
    constructor() { }
}
AeFileService.ɵfac = function AeFileService_Factory(t) { return new (t || AeFileService)(); };
AeFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeFileService, factory: AeFileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pFDW":
/*!*********************************************!*\
  !*** ./projects/ae-chart/src/public-api.ts ***!
  \*********************************************/
/*! exports provided: AeChartService, AeChartComponent, AeChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_chart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-chart.service */ "lUUs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeChartService", function() { return _lib_ae_chart_service__WEBPACK_IMPORTED_MODULE_0__["AeChartService"]; });

/* harmony import */ var _lib_ae_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-chart.component */ "wFah");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeChartComponent", function() { return _lib_ae_chart_component__WEBPACK_IMPORTED_MODULE_1__["AeChartComponent"]; });

/* harmony import */ var _lib_ae_chart_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-chart.module */ "GwHP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeChartModule", function() { return _lib_ae_chart_module__WEBPACK_IMPORTED_MODULE_2__["AeChartModule"]; });

/*
 * Public API Surface of ae-chart
 */





/***/ }),

/***/ "qsA1":
/*!****************************************************!*\
  !*** ./projects/ae-file/src/lib/ae-file.module.ts ***!
  \****************************************************/
/*! exports provided: AeFileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeFileModule", function() { return AeFileModule; });
/* harmony import */ var _ae_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-file.component */ "DV2R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeFileModule {
}
AeFileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeFileModule });
AeFileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeFileModule_Factory(t) { return new (t || AeFileModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeFileModule, { declarations: [_ae_file_component__WEBPACK_IMPORTED_MODULE_0__["AeFileComponent"]], exports: [_ae_file_component__WEBPACK_IMPORTED_MODULE_0__["AeFileComponent"]] }); })();


/***/ }),

/***/ "rEg1":
/*!******************************************************************!*\
  !*** ./projects/ae-sociallogin/src/lib/ae-sociallogin.module.ts ***!
  \******************************************************************/
/*! exports provided: AeSocialloginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeSocialloginModule", function() { return AeSocialloginModule; });
/* harmony import */ var _ae_sociallogin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-sociallogin.component */ "t8o5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeSocialloginModule {
}
AeSocialloginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeSocialloginModule });
AeSocialloginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeSocialloginModule_Factory(t) { return new (t || AeSocialloginModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeSocialloginModule, { declarations: [_ae_sociallogin_component__WEBPACK_IMPORTED_MODULE_0__["AeSocialloginComponent"]], exports: [_ae_sociallogin_component__WEBPACK_IMPORTED_MODULE_0__["AeSocialloginComponent"]] }); })();


/***/ }),

/***/ "rgdp":
/*!*******************************************************************!*\
  !*** ./projects/ae-navigation/src/lib/ae-navigation.component.ts ***!
  \*******************************************************************/
/*! exports provided: AeNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeNavigationComponent", function() { return AeNavigationComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ae_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ae-navigation.service */ "H7hj");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















const _c0 = function (a0) { return [a0]; };
function AeNavigationComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-list-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AeNavigationComponent_ng_container_12_Template_mat_list_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const menuItem_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.handler(menuItem_r6.eventHandler, "click"); })("mouseover", function AeNavigationComponent_ng_container_12_Template_mat_list_item_mouseover_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const menuItem_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.handler(menuItem_r6.eventHandler, "mouseover"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menuItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](menuItem_r6.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", menuItem_r6.tooltip || "")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, menuItem_r6.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](menuItem_r6.iconStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", menuItem_r6.iconColor)("matBadge", menuItem_r6.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menuItem_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", menuItem_r6.label, " ");
} }
function AeNavigationComponent_mat_icon_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.menuIcon, " ");
} }
function AeNavigationComponent_mat_icon_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.arrowLeft, " ");
} }
function AeNavigationComponent_ng_container_26_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AeNavigationComponent_ng_container_26_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const toolbarItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.handler(toolbarItem_r10.eventHandler, "click"); })("mouseover", function AeNavigationComponent_ng_container_26_button_1_Template_button_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const toolbarItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.handler(toolbarItem_r10.eventHandler, "mouseover"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toolbarItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](toolbarItem_r10.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", toolbarItem_r10.tooltip || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](toolbarItem_r10.iconStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", toolbarItem_r10.iconColor)("matBadge", toolbarItem_r10.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](toolbarItem_r10.icon);
} }
function AeNavigationComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AeNavigationComponent_ng_container_26_button_1_Template, 3, 8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const toolbarItem_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", toolbarItem_r10.position !== "right");
} }
function AeNavigationComponent_ng_container_29_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AeNavigationComponent_ng_container_29_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const toolbarItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.handler(toolbarItem_r18.eventHandler, "click"); })("mouseover", function AeNavigationComponent_ng_container_29_button_1_Template_button_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22); const toolbarItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.handler(toolbarItem_r18.eventHandler, "mouseover"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toolbarItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](toolbarItem_r18.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", toolbarItem_r18.tooltip || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](toolbarItem_r18.iconStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", toolbarItem_r18.iconColor)("matBadge", toolbarItem_r18.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](toolbarItem_r18.icon);
} }
function AeNavigationComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AeNavigationComponent_ng_container_29_button_1_Template, 3, 8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const toolbarItem_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", toolbarItem_r18.position === "right");
} }
const _c1 = [[["", "nav-list-start", ""]], [["", "nav-list-end", ""]], [["", "top", ""]], [["", "toolbar-center", ""]], [["", "main-content-top-left", ""]], [["", "main-content-bottom", ""]]];
const _c2 = ["[nav-list-start]", "[nav-list-end]", "[top]", "[toolbar-center]", "[main-content-top-left]", "[main-content-bottom]"];
class AeNavigationComponent {
    constructor(breakpointObserver, navigationService) {
        this.breakpointObserver = breakpointObserver;
        this.navigationService = navigationService;
        this.style = this.navigationService.style$;
        this.menu = this.navigationService.menu$;
        this.toolbar = this.navigationService.toolbar$;
        this.menuIcon = 'menu';
        this.arrowLeft = 'keyboard_arrow_left';
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => result.matches));
    }
    handler(handlerFn, event) {
        if (handlerFn)
            handlerFn(event);
        return;
    }
}
AeNavigationComponent.ɵfac = function AeNavigationComponent_Factory(t) { return new (t || AeNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ae_navigation_service__WEBPACK_IMPORTED_MODULE_3__["AeNavigationService"])); };
AeNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AeNavigationComponent, selectors: [["ae-navigation"]], ngContentSelectors: _c2, decls: 37, vars: 24, consts: [["fixedInViewport", "", 3, "mode", "opened"], ["drawer", ""], ["type", "button", "aria-label", "Close sidenav", "mat-icon-button", "", 1, "close-sidenav-button", 3, "click"], ["aria-label", "Side nav toggle icon"], [1, "p-4", "border-bottom"], [4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon", 4, "ngIf"], [1, "d-flex", "w-100", "justify-content-between"], [1, "d-flex", "w-100", "justify-content-start"], [1, "d-flex", "w-100", "justify-content-end"], [1, "main-content"], ["fxFlex", "100%", "fxFlex.lt-md", "100%", 1, "container-style"], ["fxFlex", "100%", 1, "container-style"], ["matTooltipPosition", "right", "routerLinkActive", "router-link-active", 3, "matTooltip", "routerLink", "click", "mouseover"], ["mat-list-icon", "", "matBadgeSize", "medium", "matBadgeColor", "accent", "matBadgePosition", "after", 3, "color", "matBadge"], ["mat-line", "", 2, "font-weight", "500", "letter-spacing", "1px"], ["mat-icon-button", "", 3, "style", "matTooltip", "click", "mouseover", 4, "ngIf"], ["mat-icon-button", "", 3, "matTooltip", "click", "mouseover"], ["matBadgeSize", "medium", "matBadgeColor", "primary", "matBadgePosition", "after", 3, "color", "matBadge"]], template: function AeNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AeNavigationComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AeNavigationComponent_ng_container_12_Template, 6, 12, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](15, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](18, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AeNavigationComponent_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AeNavigationComponent_mat_icon_21_Template, 2, 1, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AeNavigationComponent_mat_icon_22_Template, 2, 1, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](23, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AeNavigationComponent_ng_container_26_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, AeNavigationComponent_ng_container_29_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](33, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](36, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        let tmp_4_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 12, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 14, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 10, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 16, ctx.menu));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 18, ctx.style)) == null ? null : tmp_4_0.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r0.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 20, ctx.toolbar));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 22, ctx.toolbar));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkActive"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLink"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListIconCssMatStyler"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadge"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatLine"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".border[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%], .mat-sidenav[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 5px solid transparent;\n  box-shadow: inset 0px 0px 1px black;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-left: 0px;\n}\n\n.mat-sidenav[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 97%;\n  margin-top: 1%;\n  width: 320px;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-left: 0px;\n  box-shadow: 0px 0px 3px black;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  margin-top: 1.5%;\n  margin-right: 1%;\n  width: 98%;\n  float: right;\n  box-shadow: 0px 0px 3px black;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  transition: all ease-in-out 400ms;\n  height: 40px !important;\n  font-size: 12px;\n}\n\n.close-sidenav-button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 90000;\n  right: 10px;\n  top: 10px;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  color: #c9c6c6;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: stretch;\n  flex-wrap: wrap;\n  padding: 2px;\n  margin-top: 10px;\n}\n\n.container-style[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  box-shadow: 0px 0px 3px black;\n  margin: 1%;\n}\n\n.router-link-active[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 70% !important;\n  margin-left: 20px !important;\n  box-shadow: 0px 0px 10px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7QUFBRiIsImZpbGUiOiJhZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDFweCBibGFjaztcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG4ubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdiB7XHJcbiAgQGV4dGVuZCAuYm9yZGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDk3JTtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICBib3JkZXItbGVmdDogMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IGJsYWNrO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIEBleHRlbmQgLmJvcmRlcjtcclxuICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggYmxhY2s7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1pdGVtIHtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgNDAwbXM7XHJcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY2xvc2Utc2lkZW5hdi1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5MDAwMDtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgY29sb3I6IHJnYigyMDEsIDE5OCwgMTk4KTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItc3R5bGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggYmxhY2s7XHJcbiAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuLnJvdXRlci1saW5rLWFjdGl2ZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBibGFjaztcclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "t8o5":
/*!*********************************************************************!*\
  !*** ./projects/ae-sociallogin/src/lib/ae-sociallogin.component.ts ***!
  \*********************************************************************/
/*! exports provided: AeSocialloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeSocialloginComponent", function() { return AeSocialloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeSocialloginComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeSocialloginComponent.ɵfac = function AeSocialloginComponent_Factory(t) { return new (t || AeSocialloginComponent)(); };
AeSocialloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeSocialloginComponent, selectors: [["lib-ae-sociallogin"]], decls: 2, vars: 0, template: function AeSocialloginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-sociallogin works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "uY3z":
/*!***************************************************!*\
  !*** ./projects/ae-doc/src/lib/ae-doc.service.ts ***!
  \***************************************************/
/*! exports provided: AeDocService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeDocService", function() { return AeDocService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ae_component_view_ae_component_view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ae-component-view/ae-component-view.service */ "+6+r");



class AeDocService {
    constructor(viewService) {
        this.viewService = viewService;
        this.subscriptions = [];
        this.snapshot = {};
        this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    next(data) {
        setTimeout(() => {
            this.data$.next(data);
            if (data.code)
                this.viewService.next(data.code);
        });
    }
}
AeDocService.ɵfac = function AeDocService_Factory(t) { return new (t || AeDocService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ae_component_view_ae_component_view_service__WEBPACK_IMPORTED_MODULE_2__["AeComponentViewService"])); };
AeDocService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AeDocService, factory: AeDocService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "v98V":
/*!*******************************************************!*\
  !*** ./projects/ae-form/src/lib/ae-form.component.ts ***!
  \*******************************************************/
/*! exports provided: AeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeFormComponent", function() { return AeFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeFormComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeFormComponent.ɵfac = function AeFormComponent_Factory(t) { return new (t || AeFormComponent)(); };
AeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeFormComponent, selectors: [["lib-ae-form"]], decls: 2, vars: 0, template: function AeFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-form works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


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
/* harmony import */ var projects_ae_doc_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ae-doc/src/public-api */ "UxVk");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "RUEf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = _app_routes__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].map((r) => {
    return Object.assign(Object.assign({}, r), { component: projects_ae_doc_src_public_api__WEBPACK_IMPORTED_MODULE_1__["AeDocComponent"] });
});
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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

/***/ "wFah":
/*!*********************************************************!*\
  !*** ./projects/ae-chart/src/lib/ae-chart.component.ts ***!
  \*********************************************************/
/*! exports provided: AeChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeChartComponent", function() { return AeChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeChartComponent {
    constructor() { }
    ngOnInit() {
    }
}
AeChartComponent.ɵfac = function AeChartComponent_Factory(t) { return new (t || AeChartComponent)(); };
AeChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AeChartComponent, selectors: [["lib-ae-chart"]], decls: 2, vars: 0, template: function AeChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ae-chart works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "xJk6":
/*!****************************************************!*\
  !*** ./projects/ae-stat/src/lib/ae-stat.module.ts ***!
  \****************************************************/
/*! exports provided: AeStatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeStatModule", function() { return AeStatModule; });
/* harmony import */ var _ae_stat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ae-stat.component */ "BgB3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AeStatModule {
}
AeStatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AeStatModule });
AeStatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AeStatModule_Factory(t) { return new (t || AeStatModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AeStatModule, { declarations: [_ae_stat_component__WEBPACK_IMPORTED_MODULE_0__["AeStatComponent"]], exports: [_ae_stat_component__WEBPACK_IMPORTED_MODULE_0__["AeStatComponent"]] }); })();


/***/ }),

/***/ "xL3b":
/*!*************************************************************!*\
  !*** ./projects/ae-facetime/src/lib/ae-facetime.service.ts ***!
  \*************************************************************/
/*! exports provided: AeFacetimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AeFacetimeService", function() { return AeFacetimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AeFacetimeService {
    constructor() { }
}
AeFacetimeService.ɵfac = function AeFacetimeService_Factory(t) { return new (t || AeFacetimeService)(); };
AeFacetimeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AeFacetimeService, factory: AeFacetimeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "xfM8":
/*!****************************************************!*\
  !*** ./projects/ae-notification/src/public-api.ts ***!
  \****************************************************/
/*! exports provided: AeNotificationService, AeNotificationComponent, AeNotificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ae_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ae-notification.service */ "WXmH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeNotificationService", function() { return _lib_ae_notification_service__WEBPACK_IMPORTED_MODULE_0__["AeNotificationService"]; });

/* harmony import */ var _lib_ae_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ae-notification.component */ "PZw5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeNotificationComponent", function() { return _lib_ae_notification_component__WEBPACK_IMPORTED_MODULE_1__["AeNotificationComponent"]; });

/* harmony import */ var _lib_ae_notification_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ae-notification.module */ "DL+4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AeNotificationModule", function() { return _lib_ae_notification_module__WEBPACK_IMPORTED_MODULE_2__["AeNotificationModule"]; });

/*
 * Public API Surface of ae-notification
 */





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
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


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