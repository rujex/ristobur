(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-menu-carnes-carnes-module"],{

/***/ "./src/app/components/menu/carnes/carnes-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/menu/carnes/carnes-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CarnesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarnesRoutingModule", function() { return CarnesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _carnes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carnes.component */ "./src/app/components/menu/carnes/carnes.component.ts");





var routes = [{
        path: '',
        component: _carnes_component__WEBPACK_IMPORTED_MODULE_2__["CarnesComponent"]
    }];
var CarnesRoutingModule = /** @class */ (function () {
    function CarnesRoutingModule() {
    }
    CarnesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CarnesRoutingModule });
    CarnesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CarnesRoutingModule_Factory(t) { return new (t || CarnesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CarnesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarnesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarnesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/menu/carnes/carnes.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/menu/carnes/carnes.module.ts ***!
  \*********************************************************/
/*! exports provided: CarnesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarnesModule", function() { return CarnesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _carnes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carnes-routing.module */ "./src/app/components/menu/carnes/carnes-routing.module.ts");




var CarnesModule = /** @class */ (function () {
    function CarnesModule() {
    }
    CarnesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CarnesModule });
    CarnesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CarnesModule_Factory(t) { return new (t || CarnesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _carnes_routing_module__WEBPACK_IMPORTED_MODULE_2__["CarnesRoutingModule"]
            ]] });
    return CarnesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarnesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _carnes_routing_module__WEBPACK_IMPORTED_MODULE_2__["CarnesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarnesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _carnes_routing_module__WEBPACK_IMPORTED_MODULE_2__["CarnesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-menu-carnes-carnes-module.js.map