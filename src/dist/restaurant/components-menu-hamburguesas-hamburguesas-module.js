(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-menu-hamburguesas-hamburguesas-module"],{

/***/ "./src/app/components/menu/hamburguesas/hamburguesas-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/menu/hamburguesas/hamburguesas-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HamburguesasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburguesasRoutingModule", function() { return HamburguesasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _hamburguesas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburguesas.component */ "./src/app/components/menu/hamburguesas/hamburguesas.component.ts");





var routes = [{
        path: '',
        component: _hamburguesas_component__WEBPACK_IMPORTED_MODULE_2__["HamburguesasComponent"]
    }];
var HamburguesasRoutingModule = /** @class */ (function () {
    function HamburguesasRoutingModule() {
    }
    HamburguesasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HamburguesasRoutingModule });
    HamburguesasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HamburguesasRoutingModule_Factory(t) { return new (t || HamburguesasRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return HamburguesasRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HamburguesasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HamburguesasRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/menu/hamburguesas/hamburguesas.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/menu/hamburguesas/hamburguesas.module.ts ***!
  \*********************************************************************/
/*! exports provided: HamburguesasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburguesasModule", function() { return HamburguesasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _hamburguesas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburguesas-routing.module */ "./src/app/components/menu/hamburguesas/hamburguesas-routing.module.ts");




var HamburguesasModule = /** @class */ (function () {
    function HamburguesasModule() {
    }
    HamburguesasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HamburguesasModule });
    HamburguesasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HamburguesasModule_Factory(t) { return new (t || HamburguesasModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _hamburguesas_routing_module__WEBPACK_IMPORTED_MODULE_2__["HamburguesasRoutingModule"]
            ]] });
    return HamburguesasModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HamburguesasModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _hamburguesas_routing_module__WEBPACK_IMPORTED_MODULE_2__["HamburguesasRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HamburguesasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _hamburguesas_routing_module__WEBPACK_IMPORTED_MODULE_2__["HamburguesasRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-menu-hamburguesas-hamburguesas-module.js.map