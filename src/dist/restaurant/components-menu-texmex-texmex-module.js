(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-menu-texmex-texmex-module"],{

/***/ "./src/app/components/menu/texmex/texmex-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/menu/texmex/texmex-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TexmexRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TexmexRoutingModule", function() { return TexmexRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _texmex_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./texmex.component */ "./src/app/components/menu/texmex/texmex.component.ts");





var routes = [{
        path: '',
        component: _texmex_component__WEBPACK_IMPORTED_MODULE_2__["TexmexComponent"]
    }];
var TexmexRoutingModule = /** @class */ (function () {
    function TexmexRoutingModule() {
    }
    TexmexRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TexmexRoutingModule });
    TexmexRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TexmexRoutingModule_Factory(t) { return new (t || TexmexRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TexmexRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TexmexRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TexmexRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/menu/texmex/texmex.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/menu/texmex/texmex.module.ts ***!
  \*********************************************************/
/*! exports provided: TexmexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TexmexModule", function() { return TexmexModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _texmex_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./texmex-routing.module */ "./src/app/components/menu/texmex/texmex-routing.module.ts");




var TexmexModule = /** @class */ (function () {
    function TexmexModule() {
    }
    TexmexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TexmexModule });
    TexmexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TexmexModule_Factory(t) { return new (t || TexmexModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _texmex_routing_module__WEBPACK_IMPORTED_MODULE_2__["TexmexRoutingModule"]
            ]] });
    return TexmexModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TexmexModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _texmex_routing_module__WEBPACK_IMPORTED_MODULE_2__["TexmexRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TexmexModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _texmex_routing_module__WEBPACK_IMPORTED_MODULE_2__["TexmexRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-menu-texmex-texmex-module.js.map