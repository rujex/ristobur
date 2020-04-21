(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-menu-ensaladas-ensaladas-module"],{

/***/ "./src/app/components/menu/ensaladas/ensaladas-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/menu/ensaladas/ensaladas-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: EnsaladasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsaladasRoutingModule", function() { return EnsaladasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ensaladas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ensaladas.component */ "./src/app/components/menu/ensaladas/ensaladas.component.ts");





var routes = [{
        path: '',
        component: _ensaladas_component__WEBPACK_IMPORTED_MODULE_2__["EnsaladasComponent"]
    }];
var EnsaladasRoutingModule = /** @class */ (function () {
    function EnsaladasRoutingModule() {
    }
    EnsaladasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EnsaladasRoutingModule });
    EnsaladasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EnsaladasRoutingModule_Factory(t) { return new (t || EnsaladasRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return EnsaladasRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EnsaladasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnsaladasRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/menu/ensaladas/ensaladas.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/menu/ensaladas/ensaladas.module.ts ***!
  \***************************************************************/
/*! exports provided: EnsaladasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsaladasModule", function() { return EnsaladasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ensaladas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ensaladas-routing.module */ "./src/app/components/menu/ensaladas/ensaladas-routing.module.ts");




var EnsaladasModule = /** @class */ (function () {
    function EnsaladasModule() {
    }
    EnsaladasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EnsaladasModule });
    EnsaladasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EnsaladasModule_Factory(t) { return new (t || EnsaladasModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ensaladas_routing_module__WEBPACK_IMPORTED_MODULE_2__["EnsaladasRoutingModule"]
            ]] });
    return EnsaladasModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EnsaladasModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ensaladas_routing_module__WEBPACK_IMPORTED_MODULE_2__["EnsaladasRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnsaladasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ensaladas_routing_module__WEBPACK_IMPORTED_MODULE_2__["EnsaladasRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-menu-ensaladas-ensaladas-module.js.map