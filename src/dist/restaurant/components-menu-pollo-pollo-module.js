(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-menu-pollo-pollo-module"],{

/***/ "./src/app/components/menu/pollo/pollo-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/menu/pollo/pollo-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PolloRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolloRoutingModule", function() { return PolloRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pollo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pollo.component */ "./src/app/components/menu/pollo/pollo.component.ts");





var routes = [{
        path: '',
        component: _pollo_component__WEBPACK_IMPORTED_MODULE_2__["PolloComponent"]
    }];
var PolloRoutingModule = /** @class */ (function () {
    function PolloRoutingModule() {
    }
    PolloRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PolloRoutingModule });
    PolloRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PolloRoutingModule_Factory(t) { return new (t || PolloRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return PolloRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PolloRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolloRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/menu/pollo/pollo.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/menu/pollo/pollo.module.ts ***!
  \*******************************************************/
/*! exports provided: PolloModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolloModule", function() { return PolloModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _pollo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pollo-routing.module */ "./src/app/components/menu/pollo/pollo-routing.module.ts");




var PolloModule = /** @class */ (function () {
    function PolloModule() {
    }
    PolloModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PolloModule });
    PolloModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PolloModule_Factory(t) { return new (t || PolloModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pollo_routing_module__WEBPACK_IMPORTED_MODULE_2__["PolloRoutingModule"]
            ]] });
    return PolloModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PolloModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pollo_routing_module__WEBPACK_IMPORTED_MODULE_2__["PolloRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolloModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pollo_routing_module__WEBPACK_IMPORTED_MODULE_2__["PolloRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-menu-pollo-pollo-module.js.map