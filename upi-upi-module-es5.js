(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upi-upi-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/upi/merchant-register/merchant-register.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/upi/merchant-register/merchant-register.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"Merchant ID\">\r\n     </div>\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"Merchant Name\">\r\n     </div>\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"Merchant Address1\">\r\n     </div>\r\n  </div>\r\n  <div class=\"row\">\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"Merchant Address2\">\r\n     </div>\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"Merchant City\">\r\n     </div>\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"Merchant State\">\r\n     </div>\r\n  </div>\r\n  <div class=\"row\">\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"Merchant Country\">\r\n     </div>\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"Merchant PostalCode\">\r\n     </div>\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"Merchant Phone\">\r\n     </div>\r\n  </div>\r\n  <div class=\"row\">\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"Merchant Email\">\r\n     </div>\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"Merchant MCC\">\r\n     </div>\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"Merchant IFSC Code\">\r\n     </div>\r\n     <!-- <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n        [disabled]=\"true\" placeholder=\"Merchant IFSC Code\">\r\n        </div> -->\r\n  </div>\r\n  <div class=\"row\">\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" [disabled]=\"false\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"Merchant Account No\">\r\n     </div>\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" [disabled]=\"true\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"\">\r\n     </div>\r\n     <div class=\"col\"><label for=\"exampleInputEmail1\"></label>\r\n        <input type=\"email\" [disabled]=\"true\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\"\r\n           placeholder=\"\">\r\n     </div>\r\n  </div>\r\n  <div class=\"row\">\r\n     <div class=\"col top-buffer\">\r\n        <label for=\"exampleInputEmail1\"></label>\r\n        <input nbInput\r\n           placeholder=\"Merchant Start Date\"\r\n           [nbDatepicker]=\"formpicker\">\r\n        <nb-datepicker #formpicker></nb-datepicker>\r\n     </div>\r\n     <div class=\"col top-buffer\">\r\n        <nb-card-header>Merchant Currency</nb-card-header>\r\n        <nb-select selected=\"1\">\r\n           <nb-option value=\"1\">USD</nb-option>\r\n           <nb-option value=\"2\">LKR</nb-option>\r\n        </nb-select>\r\n     </div>\r\n     <div class=\"col top-buffer\">\r\n        <nb-card-header>Merchant Status</nb-card-header>\r\n        <nb-select selected=\"1\">\r\n           <nb-option value=\"1\">Active</nb-option>\r\n           <nb-option value=\"2\">In-Active</nb-option>\r\n        </nb-select>\r\n     </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n   <div class=\"col top-buffer\">\r\n      <div>\r\n\r\n         <nb-card-header>Merchant Permission</nb-card-header>\r\n      </div>\r\n     \r\n      <div class=\"col top-buffer\">\r\n         <nb-checkbox [value]=\"true\">Purchase</nb-checkbox>\r\n         <nb-checkbox [value]=\"true\">Cancel</nb-checkbox>\r\n         <nb-checkbox [value]=\"true\">Query</nb-checkbox>\r\n         <nb-checkbox [value]=\"true\">Refund</nb-checkbox>\r\n       </div>\r\n   </div>\r\n   \r\n</div>\r\n\r\n<div class=\"row\">\r\n   <div class=\"col top-buffer\">\r\n<div class=\"buttons-row\">\r\n   <button nbButton hero>\r\n      SUBMIT\r\n   </button>\r\n</div>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/upi/merchant-register/merchant-register.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/upi/merchant-register/merchant-register.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwaS9tZXJjaGFudC1yZWdpc3Rlci9tZXJjaGFudC1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/upi/merchant-register/merchant-register.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/upi/merchant-register/merchant-register.component.ts ***!
  \****************************************************************************/
/*! exports provided: MerchantRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantRegisterComponent", function() { return MerchantRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MerchantRegisterComponent = /** @class */ (function () {
    function MerchantRegisterComponent() {
    }
    MerchantRegisterComponent.prototype.ngOnInit = function () {
    };
    MerchantRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-merchant-register',
            template: __webpack_require__(/*! raw-loader!./merchant-register.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/upi/merchant-register/merchant-register.component.html"),
            styles: [__webpack_require__(/*! ./merchant-register.component.scss */ "./src/app/pages/upi/merchant-register/merchant-register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MerchantRegisterComponent);
    return MerchantRegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/upi/upi-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/upi/upi-routing.module.ts ***!
  \*************************************************/
/*! exports provided: UPIRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPIRoutingModule", function() { return UPIRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _upi_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upi.component */ "./src/app/pages/upi/upi.component.ts");
/* harmony import */ var _merchant_register_merchant_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./merchant-register/merchant-register.component */ "./src/app/pages/upi/merchant-register/merchant-register.component.ts");





var routes = [
    {
        path: '',
        component: _upi_component__WEBPACK_IMPORTED_MODULE_3__["UPIComponent"],
        children: [
            {
                path: 'merchant-register',
                component: _merchant_register_merchant_register_component__WEBPACK_IMPORTED_MODULE_4__["MerchantRegisterComponent"]
            }
        ]
    }
];
var UPIRoutingModule = /** @class */ (function () {
    function UPIRoutingModule() {
    }
    UPIRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UPIRoutingModule);
    return UPIRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/upi/upi.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/upi/upi.component.ts ***!
  \********************************************/
/*! exports provided: UPIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPIComponent", function() { return UPIComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UPIComponent = /** @class */ (function () {
    function UPIComponent() {
    }
    UPIComponent.prototype.ngOnInit = function () {
    };
    UPIComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-upi',
            template: '<router-outlet></router-outlet>',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UPIComponent);
    return UPIComponent;
}());



/***/ }),

/***/ "./src/app/pages/upi/upi.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/upi/upi.module.ts ***!
  \*****************************************/
/*! exports provided: UPIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPIModule", function() { return UPIModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _upi_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upi-routing.module */ "./src/app/pages/upi/upi-routing.module.ts");
/* harmony import */ var _upi_upi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../upi/upi.component */ "./src/app/pages/upi/upi.component.ts");
/* harmony import */ var _merchant_register_merchant_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./merchant-register/merchant-register.component */ "./src/app/pages/upi/merchant-register/merchant-register.component.ts");






var UPIModule = /** @class */ (function () {
    function UPIModule() {
    }
    UPIModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_upi_upi_component__WEBPACK_IMPORTED_MODULE_4__["UPIComponent"], _merchant_register_merchant_register_component__WEBPACK_IMPORTED_MODULE_5__["MerchantRegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _upi_routing_module__WEBPACK_IMPORTED_MODULE_3__["UPIRoutingModule"]
            ]
        })
    ], UPIModule);
    return UPIModule;
}());



/***/ })

}]);
//# sourceMappingURL=upi-upi-module-es5.js.map