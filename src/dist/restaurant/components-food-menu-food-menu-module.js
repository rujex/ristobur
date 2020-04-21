(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-food-menu-food-menu-module"],{

/***/ "./src/app/components/food-menu/food-menu-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/food-menu/food-menu-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: FoodMenuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodMenuRoutingModule", function() { return FoodMenuRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _food_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-menu.component */ "./src/app/components/food-menu/food-menu.component.ts");





var routes = [
    {
        path: '',
        component: _food_menu_component__WEBPACK_IMPORTED_MODULE_2__["FoodMenuComponent"]
    }
];
var FoodMenuRoutingModule = /** @class */ (function () {
    function FoodMenuRoutingModule() {
    }
    FoodMenuRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FoodMenuRoutingModule });
    FoodMenuRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FoodMenuRoutingModule_Factory(t) { return new (t || FoodMenuRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return FoodMenuRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FoodMenuRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodMenuRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/food-menu/food-menu.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/food-menu/food-menu.module.ts ***!
  \**********************************************************/
/*! exports provided: FoodMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodMenuModule", function() { return FoodMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _food_menu_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-menu-routing.module */ "./src/app/components/food-menu/food-menu-routing.module.ts");




var FoodMenuModule = /** @class */ (function () {
    function FoodMenuModule() {
    }
    FoodMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FoodMenuModule });
    FoodMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FoodMenuModule_Factory(t) { return new (t || FoodMenuModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _food_menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["FoodMenuRoutingModule"]
            ]] });
    return FoodMenuModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FoodMenuModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _food_menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["FoodMenuRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _food_menu_routing_module__WEBPACK_IMPORTED_MODULE_2__["FoodMenuRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-food-menu-food-menu-module.js.map