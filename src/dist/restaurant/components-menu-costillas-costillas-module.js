(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-menu-costillas-costillas-module"],{

/***/ "./src/app/components/menu/costillas/costillas-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/menu/costillas/costillas-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CostillasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostillasRoutingModule", function() { return CostillasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _costillas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./costillas.component */ "./src/app/components/menu/costillas/costillas.component.ts");





var routes = [{
        path: '',
        component: _costillas_component__WEBPACK_IMPORTED_MODULE_2__["CostillasComponent"]
    }];
var CostillasRoutingModule = /** @class */ (function () {
    function CostillasRoutingModule() {
    }
    CostillasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CostillasRoutingModule });
    CostillasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CostillasRoutingModule_Factory(t) { return new (t || CostillasRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CostillasRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CostillasRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CostillasRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/menu/costillas/costillas.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/menu/costillas/costillas.module.ts ***!
  \***************************************************************/
/*! exports provided: CostillasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostillasModule", function() { return CostillasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _costillas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./costillas-routing.module */ "./src/app/components/menu/costillas/costillas-routing.module.ts");




var CostillasModule = /** @class */ (function () {
    function CostillasModule() {
    }
    CostillasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CostillasModule });
    CostillasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CostillasModule_Factory(t) { return new (t || CostillasModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _costillas_routing_module__WEBPACK_IMPORTED_MODULE_2__["CostillasRoutingModule"]
            ]] });
    return CostillasModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CostillasModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _costillas_routing_module__WEBPACK_IMPORTED_MODULE_2__["CostillasRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CostillasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _costillas_routing_module__WEBPACK_IMPORTED_MODULE_2__["CostillasRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-menu-costillas-costillas-module.js.map