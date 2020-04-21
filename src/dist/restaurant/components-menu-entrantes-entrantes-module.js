(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-menu-entrantes-entrantes-module"],{

/***/ "./src/app/components/menu/entrantes/entrantes-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/menu/entrantes/entrantes-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: EntrantesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrantesRoutingModule", function() { return EntrantesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _entrantes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entrantes.component */ "./src/app/components/menu/entrantes/entrantes.component.ts");





var routes = [{
        path: '',
        component: _entrantes_component__WEBPACK_IMPORTED_MODULE_2__["EntrantesComponent"]
    }];
var EntrantesRoutingModule = /** @class */ (function () {
    function EntrantesRoutingModule() {
    }
    EntrantesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EntrantesRoutingModule });
    EntrantesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EntrantesRoutingModule_Factory(t) { return new (t || EntrantesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return EntrantesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EntrantesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntrantesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/menu/entrantes/entrantes.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/menu/entrantes/entrantes.module.ts ***!
  \***************************************************************/
/*! exports provided: EntrantesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrantesModule", function() { return EntrantesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _entrantes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entrantes-routing.module */ "./src/app/components/menu/entrantes/entrantes-routing.module.ts");




var EntrantesModule = /** @class */ (function () {
    function EntrantesModule() {
    }
    EntrantesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EntrantesModule });
    EntrantesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EntrantesModule_Factory(t) { return new (t || EntrantesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _entrantes_routing_module__WEBPACK_IMPORTED_MODULE_2__["EntrantesRoutingModule"]
            ]] });
    return EntrantesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EntrantesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _entrantes_routing_module__WEBPACK_IMPORTED_MODULE_2__["EntrantesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntrantesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _entrantes_routing_module__WEBPACK_IMPORTED_MODULE_2__["EntrantesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-menu-entrantes-entrantes-module.js.map