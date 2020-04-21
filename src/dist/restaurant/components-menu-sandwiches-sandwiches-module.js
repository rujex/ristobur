(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-menu-sandwiches-sandwiches-module"],{

/***/ "./src/app/components/menu/sandwiches/sandwiches-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/menu/sandwiches/sandwiches-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SandwichesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandwichesRoutingModule", function() { return SandwichesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _sandwiches_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sandwiches.component */ "./src/app/components/menu/sandwiches/sandwiches.component.ts");





var routes = [{
        path: '',
        component: _sandwiches_component__WEBPACK_IMPORTED_MODULE_2__["SandwichesComponent"]
    }];
var SandwichesRoutingModule = /** @class */ (function () {
    function SandwichesRoutingModule() {
    }
    SandwichesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SandwichesRoutingModule });
    SandwichesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SandwichesRoutingModule_Factory(t) { return new (t || SandwichesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return SandwichesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SandwichesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SandwichesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/menu/sandwiches/sandwiches.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/menu/sandwiches/sandwiches.module.ts ***!
  \*****************************************************************/
/*! exports provided: SandwichesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandwichesModule", function() { return SandwichesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _sandwiches_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sandwiches-routing.module */ "./src/app/components/menu/sandwiches/sandwiches-routing.module.ts");




var SandwichesModule = /** @class */ (function () {
    function SandwichesModule() {
    }
    SandwichesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SandwichesModule });
    SandwichesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SandwichesModule_Factory(t) { return new (t || SandwichesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sandwiches_routing_module__WEBPACK_IMPORTED_MODULE_2__["SandwichesRoutingModule"]
            ]] });
    return SandwichesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SandwichesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sandwiches_routing_module__WEBPACK_IMPORTED_MODULE_2__["SandwichesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SandwichesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sandwiches_routing_module__WEBPACK_IMPORTED_MODULE_2__["SandwichesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-menu-sandwiches-sandwiches-module.js.map