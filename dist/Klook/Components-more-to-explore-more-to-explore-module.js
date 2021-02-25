(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Components-more-to-explore-more-to-explore-module"],{

/***/ "2yt9":
/*!**********************************************************************!*\
  !*** ./src/app/Components/more-to-explore/more-to-explore.module.ts ***!
  \**********************************************************************/
/*! exports provided: MoreToExploreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreToExploreModule", function() { return MoreToExploreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _wifi_wifi_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wifi/wifi.component */ "BaCO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _food_food_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food/food.component */ "JTGc");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");








const routes = [
    { path: 'wifi&simcards', component: _wifi_wifi_component__WEBPACK_IMPORTED_MODULE_2__["WifiComponent"] },
    { path: 'food&dining', component: _food_food_component__WEBPACK_IMPORTED_MODULE_4__["FoodComponent"] }
];
class MoreToExploreModule {
}
MoreToExploreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoreToExploreModule });
MoreToExploreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoreToExploreModule_Factory(t) { return new (t || MoreToExploreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoreToExploreModule, { declarations: [_wifi_wifi_component__WEBPACK_IMPORTED_MODULE_2__["WifiComponent"], _food_food_component__WEBPACK_IMPORTED_MODULE_4__["FoodComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoreToExploreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_wifi_wifi_component__WEBPACK_IMPORTED_MODULE_2__["WifiComponent"], _food_food_component__WEBPACK_IMPORTED_MODULE_4__["FoodComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "9btt":
/*!**************************************************!*\
  !*** ./src/app/services/food-service.service.ts ***!
  \**************************************************/
/*! exports provided: FoodServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodServiceService", function() { return FoodServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class FoodServiceService {
    constructor(fs, http) {
        this.fs = fs;
        this.http = http;
    }
    getFoodCards(item1, item2, value1, value2) {
        return this.fs.collection('ToursCollection', ref => ref.where(item1, '==', value1).where(item2, '==', value2)).valueChanges();
    }
}
FoodServiceService.ɵfac = function FoodServiceService_Factory(t) { return new (t || FoodServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FoodServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FoodServiceService, factory: FoodServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "BaCO":
/*!*******************************************************************!*\
  !*** ./src/app/Components/more-to-explore/wifi/wifi.component.ts ***!
  \*******************************************************************/
/*! exports provided: WifiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiComponent", function() { return WifiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_wifi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/wifi.service */ "0HoM");
/* harmony import */ var src_app_services_activity_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/activity-details.service */ "SUiw");
/* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/home.service */ "nr5L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function WifiComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Pick-up locations: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " see more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Instant confirmation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Book now for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Validity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Internet speed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Service type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Coverage area: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " see more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " ( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " reviews ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " + Booked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "per SIM card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WifiComponent_div_106_Template_button_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const wi_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.viewDetails(wi_r1.id, "Wifi_&_SimCards"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "View details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wi_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", wi_r1.Image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wi_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", wi_r1.Location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wi_r1.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", wi_r1.Validity, " days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", wi_r1.Internet, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", wi_r1.Service, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", wi_r1.Coverage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", wi_r1.Rate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wi_r1.Reviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wi_r1.Booked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](63, 12, wi_r1.Price, "EGP"));
} }
class WifiComponent {
    //wifiDetail:Wifi[]=[];
    constructor(router, wifiServ, activityDetails, city) {
        this.router = router;
        this.wifiServ = wifiServ;
        this.activityDetails = activityDetails;
        this.city = city;
        this.WifiCards = [];
        this.Cities = [];
    }
    ngOnInit() {
        this.wifiServ.getAllWifi().subscribe((wifi) => {
            this.WifiCards = wifi.map(data => {
                return Object.assign({ id: data.payload.doc.id }, data.payload.doc.data());
            });
        });
        this.city.getAllCities().subscribe((city) => {
            this.Cities = city.map(data => {
                return Object.assign({ id: data.payload.doc.id }, data.payload.doc.data());
            });
        });
    }
    viewDetails(ID, collectionName) {
        this.router.navigate(['/activityDetails', collectionName, ID]);
    }
}
WifiComponent.ɵfac = function WifiComponent_Factory(t) { return new (t || WifiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wifi_service__WEBPACK_IMPORTED_MODULE_2__["WifiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_activity_details_service__WEBPACK_IMPORTED_MODULE_3__["ActivityDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"])); };
WifiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WifiComponent, selectors: [["app-wifi"]], decls: 107, vars: 1, consts: [[1, "container"], [2, "padding-top", "150px", "font-size", "46px", "font-weight", "bold", "line-height", "1.2", "color", "white"], [2, "font-size", "16px", "font-weight", "normal", "color", "white"], [1, "shadow", "col-12", "bg-white", "d-flex", "align-items-center", 2, "width", "548px", "height", "106px", "border-radius", "8px"], ["id", "border", 1, "m-3", "d-flex", "align-items-center", "p-3", 2, "-webkit-box-align", "center", ";width", "100%", "height", "60%", "border-radius", "4px", "border", "solid 1px #f5f5f5", "background-color", "#f5f5f5", "cursor", "pointer"], [1, "fas", "fa-wifi"], [1, "mt-3", "pl-2"], [1, "fas", "fa-chevron-down", 2, "padding-left", "260px"], [1, "container-fluid", "bg-light"], ["id", "cards", 1, "container", "col-11", "p-5"], ["href", "../home/home.html"], [2, "color", "#999"], [1, "row", "pt-4"], [1, "col-6"], [1, "dropdown"], ["type", "button", "id", "dropbtn1", "data-toggle", "dropdown", 1, "btn", "border"], [1, "fas", "fa-chevron-down", "float-right"], [1, "dropdown-menu", "checkbox-menu", "allow-focus", 2, "width", "600px"], [1, "dropdown-header"], [1, "row"], [1, "col-4"], ["type", "checkbox"], [1, "border", "col-12"], [1, "col-3"], ["type", "button", "id", "dropbtn2", "data-toggle", "dropdown", 1, "btn", "border"], [1, "dropdown-menu", 2, "width", "300px"], ["type", "button", "id", "dropbtn3", "data-toggle", "dropdown", 1, "btn", "border"], ["class", "shadow bg-white mt-5", 4, "ngFor", "ngForOf"], [1, "shadow", "bg-white", "mt-5"], [1, "d-flex", "img-fluid", 3, "src"], [1, "mt-3", "mb-3"], [1, "a1"], [1, "div1"], [2, "color", "#009685"], ["placement", "top", 1, "mr-2"], [1, "d-flex", "div2"], [1, "fas", "fa-check-circle", "text-success", "mt-1", "pr-2"], [1, "pr-4"], [1, "mt-3", "div1"], [1, "pl-1"], [1, "mt-3", "float-right", "div4"], [1, "fas", "fa-star", 2, "font-weight", "500", "color", "#f5a623"], [2, "font-weight", "500", "color", "#f5a623"], [1, "float-right", "div3"], [1, "d-flex", "justify-content-end", "mt-4", "mr-4", "pt-4"], [1, "mt-2", "fas", "fa-bolt", 2, "color", "#ff5722", "font-size", "16px"], [1, "pl-1", "div3"], [1, "d-flex", "justify-content-end", "mr-4"], [1, "p1"], [1, "d-flex", "align-items-center", "border-white", "mr-4", "btnView", 3, "click"]], template: function WifiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WiFi & SIM cards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Compare plans and find a reliable connection for your destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Where are you going ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " > WiFi & SIM cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Select a pick-up location ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Mainland China Cities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Beijing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Hangzhou ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Guangzhou ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Chongqing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Shanghai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Xiamen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Shenzhen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Chengdu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Nanjing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Changsha ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Zhuhai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Xi'an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h5", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Dropdown header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " WiFi/SIM card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Wifi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Sim Card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Pick up/delivery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Pick Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Delivery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, WifiComponent_div_106_Template, 69, 15, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.WifiCards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: ["header[_ngcontent-%COMP%] {\n  background-image: url(\"/../assets/wifi/wifi.jpg\");\n  background-position: center;\n  background-size: cover;\n  height: 480px;\n}\n.tooltip.bs-tooltip-top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]:before {\n  border-top-color: lightgray !important;\n}\n\n#dropbtn1[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  text-align: start;\n  color: #999;\n}\n#dropbtn3[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  text-align: start;\n  color: #999;\n}\n#dropbtn2[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  text-align: start;\n  color: #999;\n}\n@media only screen and (max-width: 900px) {\n  #dropbtn1[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n\n  .a1[_ngcontent-%COMP%] {\n    font-size: 10px;\n    font-weight: 500;\n    line-height: 18px;\n    color: #424242;\n  }\n\n  #dropbtn2[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n\n  #dropbtn3[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n\n  .div1[_ngcontent-%COMP%] {\n    font-size: 10px;\n    font-weight: 500;\n    line-height: 18px;\n  }\n\n  .div2[_ngcontent-%COMP%] {\n    font-size: 10px;\n    font-weight: 500;\n    line-height: 18px;\n  }\n\n  .div3[_ngcontent-%COMP%] {\n    font-size: 10px;\n    font-weight: bold;\n    line-height: 1;\n    color: #424242;\n  }\n\n  .div4[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .p1[_ngcontent-%COMP%] {\n    line-height: 17px;\n    font-size: 10px;\n    color: #888;\n  }\n\n  .btnView[_ngcontent-%COMP%] {\n    min-width: 40px;\n    height: 40px;\n    line-height: 18px;\n    font-size: 10px;\n    font-weight: 500;\n    color: #fff;\n    border-radius: 2px;\n    background-color: #ff5722;\n  }\n}\n@media only screen and (min-width: 900px) {\n  #dropbtn1[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n\n  .a1[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 24px;\n    color: #424242;\n  }\n\n  #dropbtn2[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  #dropbtn3[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .div3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: bold;\n    line-height: 1;\n    color: #424242;\n  }\n\n  .p1[_ngcontent-%COMP%] {\n    line-height: 17px;\n    font-size: 14px;\n    color: #888;\n  }\n\n  .btnView[_ngcontent-%COMP%] {\n    min-width: 80px;\n    height: 40px;\n    line-height: 23px;\n    font-size: 18px;\n    font-weight: 500;\n    color: #fff;\n    border-radius: 2px;\n    background-color: #ff5722;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcd2lmaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQUNBO0VBQ0ksaURBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBRUE7RUFDSSxzQ0FBQTtBQUNKO0FBRUEsZUFBQTtBQUdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFERjtBQUtBO0VBQ0U7SUFDRSxZQUFBO0VBRkY7O0VBS0E7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUFGRjs7RUFJQTtJQUNFLFlBQUE7RUFERjs7RUFJQTtJQUNFLFlBQUE7RUFERjs7RUFHQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VBQUY7O0VBR0E7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQUFGOztFQUdBO0lBQ0UsZUFBQTtJQUFnQixpQkFBQTtJQUFrQixjQUFBO0lBQWdCLGNBQUE7RUFHcEQ7O0VBQUE7SUFDRSxlQUFBO0VBR0Y7O0VBREE7SUFDRSxpQkFBQTtJQUFrQixlQUFBO0lBQWdCLFdBQUE7RUFNcEM7O0VBSEE7SUFDRSxlQUFBO0lBQWdCLFlBQUE7SUFBYSxpQkFBQTtJQUFrQixlQUFBO0lBQWdCLGdCQUFBO0lBQWlCLFdBQUE7SUFBWSxrQkFBQTtJQUFvQix5QkFBQTtFQWFsSDtBQUNGO0FBVkE7RUFDRTtJQUNFLFlBQUE7RUFZRjs7RUFUQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFQVlGOztFQVRBO0lBQ0UsWUFBQTtFQVlGOztFQVZBO0lBQ0UsWUFBQTtFQWFGOztFQVhBO0lBQ0UsZUFBQTtJQUFnQixpQkFBQTtJQUFrQixjQUFBO0lBQWdCLGNBQUE7RUFpQnBEOztFQWJBO0lBQ0UsaUJBQUE7SUFBa0IsZUFBQTtJQUFnQixXQUFBO0VBa0JwQzs7RUFoQkE7SUFDRyxlQUFBO0lBQWdCLFlBQUE7SUFBYSxpQkFBQTtJQUFrQixlQUFBO0lBQWdCLGdCQUFBO0lBQWlCLFdBQUE7SUFBWSxrQkFBQTtJQUFvQix5QkFBQTtFQTBCbkg7QUFDRiIsImZpbGUiOiJ3aWZpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3RhcnQgSGVhZGVyICovXHJcbmhlYWRlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi9hc3NldHMvd2lmaS93aWZpLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDQ4MHB4O1xyXG59XHJcblxyXG4udG9vbHRpcC5icy10b29sdGlwLXRvcCAuYXJyb3c6YmVmb3JlIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuLyogZW5kIEhlYWRlciAqL1xyXG5cclxuXHJcbiNkcm9wYnRuMSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuI2Ryb3BidG4zIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG4jZHJvcGJ0bjIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgI2Ryb3BidG4xe1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG5cclxuICB9XHJcbiAgLmExIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjNDI0MjQyO1xyXG4gIH1cclxuICAjZHJvcGJ0bjJ7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAjZHJvcGJ0bjN7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIC5kaXYxIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIFxyXG4gIH1cclxuICAuZGl2MiB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBcclxuICB9XHJcbiAgLmRpdjMge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O2ZvbnQtd2VpZ2h0OiBib2xkO2xpbmUtaGVpZ2h0OiAxOyBjb2xvcjogIzQyNDI0MjtcclxuXHJcbiAgfVxyXG4gIC5kaXY0e1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAucDEge1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7Zm9udC1zaXplOiAxMHB4O2NvbG9yOiAjODg4IDtcclxuXHJcbiAgfVxyXG4gIC5idG5WaWV3IHtcclxuICAgIG1pbi13aWR0aDogNDBweDtoZWlnaHQ6IDQwcHg7bGluZS1oZWlnaHQ6IDE4cHg7Zm9udC1zaXplOiAxMHB4O2ZvbnQtd2VpZ2h0OiA1MDA7Y29sb3I6ICNmZmY7Ym9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICNkcm9wYnRuMXtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuXHJcbiAgfVxyXG4gIC5hMSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzQyNDI0MjtcclxuXHJcbiAgfVxyXG4gICNkcm9wYnRuMntcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgI2Ryb3BidG4ze1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICAuZGl2MyB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7bGluZS1oZWlnaHQ6IDE7IGNvbG9yOiAjNDI0MjQyO1xyXG5cclxuXHJcbiAgfVxyXG4gIC5wMSB7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtmb250LXNpemU6IDE0cHg7Y29sb3I6ICM4ODggO1xyXG4gICAgICB9XHJcbiAgLmJ0blZpZXcge1xyXG4gICAgIG1pbi13aWR0aDogODBweDtoZWlnaHQ6IDQwcHg7bGluZS1oZWlnaHQ6IDIzcHg7Zm9udC1zaXplOiAxOHB4O2ZvbnQtd2VpZ2h0OiA1MDA7Y29sb3I6ICNmZmY7Ym9yZGVyLXJhZGl1czogMnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xyXG4gICAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WifiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wifi',
                templateUrl: './wifi.component.html',
                styleUrls: ['./wifi.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_wifi_service__WEBPACK_IMPORTED_MODULE_2__["WifiService"] }, { type: src_app_services_activity_details_service__WEBPACK_IMPORTED_MODULE_3__["ActivityDetailsService"] }, { type: src_app_services_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] }]; }, null); })();


/***/ }),

/***/ "JTGc":
/*!*******************************************************************!*\
  !*** ./src/app/Components/more-to-explore/food/food.component.ts ***!
  \*******************************************************************/
/*! exports provided: FoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodComponent", function() { return FoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_food_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/food-service.service */ "9btt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");






function FoodComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FoodComponent_div_81_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const i_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.viewDetails(i_r1.id, "ToursCollection"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bestseller");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "From ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r1.Image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r1.City, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.Rate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r1.Review, " ", i_r1.Booked, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](23, 9, i_r1.OldPrice, "EGP"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 12, i_r1.Price, "EGP"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Book Now for ", i_r1.Date, "");
} }
const _c0 = function (a2) { return { id: "pp", itemsPerPage: 12, currentPage: a2, totalItems: 24 }; };
class FoodComponent {
    constructor(foodServics, router) {
        this.foodServics = foodServics;
        this.router = router;
        this.FoodList = [];
        this.subscribtion = null;
        this.totalRecords = 0;
        this.page = 1;
    }
    ngOnInit() {
        this.subscribtion = this.foodServics.getFoodCards("Categories", "Section", "Food", "Other").subscribe((res) => {
            this.FoodList = res;
            this.totalRecords = res.length;
            console.log("ll" + this.totalRecords);
        }, (err) => { console.log("cant get food cards " + err); });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscribtion) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    viewDetails(ID, collectionName) {
        this.router.navigate(['/activityDetails', collectionName, ID]);
    }
}
FoodComponent.ɵfac = function FoodComponent_Factory(t) { return new (t || FoodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_food_service_service__WEBPACK_IMPORTED_MODULE_1__["FoodServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FoodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FoodComponent, selectors: [["app-food"]], decls: 85, vars: 6, consts: [["id", "carouselExampleControls", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner", 2, "height", "350px"], [1, "carousel-item", "active"], ["src", "../../../../assets/f5.jpg", "alt", "...", 1, "d-block", "w-100", "img-thumbnail"], [1, "carousel-item"], ["src", "../../../../assets/f2.jpg", "alt", "...", 1, "d-block", "w-100", "img-thumbnail"], ["src", "../../../../assets/f6.jpg", "alt", "...", 1, "d-block", "w-100", "img-thumbnail"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleControls", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "header-text", "hidden-xs"], [1, "pt-2", "col-md-12", "text-left"], [1, "container-fluid", "my-5", "pt-4"], [1, "row", "mb-4", "d-flex", "flex-wrap"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-3", "col-xl-3"], [1, "border", "border-primary", 2, "height", "auto"], [1, "row-col", "my-2", "pt-5"], [1, "px-2", "mx-2", "font-weight-bold", "py-2", 2, "font-size", "1.2em"], [1, "input-form", "py-1", "my-1", "px-3", "mx-3", "col-12", "col-sm-12", "col-md-12", "col-lg-6", "col-xl-6", 2, "background-color", "#F5F5F5"], [1, "fas", "fa-times", "ml-4"], [2, "border-radius", "0.5em"], [1, "vl"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-8", "col-xl-8"], [2, "height", "auto"], [1, "row", "ml-4", "pt-4"], [1, "row", "ml-2", "pt-4"], [1, "input-group", "col-md-4"], ["type", "search", "placeholder", "search filtered results", "id", "example-search-input", 1, "form-control"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary"], [1, "fa", "fa-search"], [1, "row", "d-inline"], [1, "form-group", "d-flex", "flex-wrap", "justify-content-between", "mx-4", "pt-4"], ["id", "sel1", "name", "sellist1", 1, "form-control", "col-12", "col-sm-12", "col-md-12", "col-lg-2", "col-xl-2"], ["id", "sel2", "name", "sellist2", 1, "form-control", "col-12", "col-sm-12", "col-md-12", "col-lg-2", "col-xl-2"], [1, "form-control", "col-12", "col-sm-12", "col-md-12", "col-lg-3", "col-xl-3", 2, "width", "13 em"], [1, "fas", "fa-info-circle", "mt-1"], [1, "form-check-inline", "ml-4", "pl-3"], [1, "form-check-label", "justify-content-end"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-3", "col-xl-3", "d-inline-flex"], [1, "mt-1"], ["id", "sel3", "name", "sellist3", 1, "form-control", "col-12", "col-sm-12", "col-md-12", "col-lg-8", "col-xl-8"], [1, "row-col", "ml-4", "pt-4", "mr-4"], [1, "row"], ["class", "col-12 col-sm-12  col-md-5  col-lg-4 col-xl-4 ", "style", "height: 30em;", 4, "ngFor", "ngForOf"], [1, "row", "mt-5", "mb-4", "mx-2"], [1, "container", "d-flex", "justify-content-end"], [1, "col-12", "col-sm-12", "col-md-5", "col-lg-4", "col-xl-4", 2, "height", "30em"], [1, "crd"], [1, "crd1", "card", "text-left", 3, "click"], ["alt", "", 1, "card-img-top", 3, "src"], [1, "text-upon-img", "hidden-xs"], [1, "fas", "fa-map-marker-alt"], [1, "text-down-img", "hidden-xs", "p-1"], [1, "card-body"], [1, "card-title", 2, "overflow", "hidden", "font-size", "1.2em", "height", "3.8em"], [1, "flag-hot", 2, "color", "#FF5746"], [1, "card-text"], [1, "mb-5"], [2, "color", "#f5a623"], [1, "fas", "fa-star"], [2, "font-size", "0.7em"], [1, "mb-1", 2, "text-decoration", "line-through", "font-size", "0.7em", "color", "#999999"], [1, "font-weight-bold", "d-inline-block", 2, "text-decoration", "line-through"], [1, "mb-1"], [2, "font-size", "1em"], [1, "font-weight-bold", "d-inline-block"], [1, "fas", "fa-bolt", 2, "color", "#FF5746"], ["href", "#", 1, "lnk", "mb-0"]], template: function FoodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Food & Dining");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Discover and book amazing things to do at exclusive prices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "food & dining ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "96 activites found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Availability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "price Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Instant confirmation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "sort by:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "select", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "most relevant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "most popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Best reviewed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "price (low to high)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Recently added ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, FoodComponent_div_81_Template, 34, 15, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](82, 1, ctx.FoodList, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.page)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".header-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  left: 1.8%;\n  right: auto;\n  width: 96.6666666667%;\n  color: #fff;\n}\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  color: white;\n}\n.header-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1em;\n  color: white;\n}\n\n.s007[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.s007[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 790px;\n  margin: 0;\n}\n.s007[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inner-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\n  position: relative;\n}\n.s007[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inner-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 100%;\n  border: 0;\n  background: #fff;\n  display: block;\n  width: 100%;\n  padding: 10px 32px 10px 70px;\n  font-size: 18px;\n  color: #666;\n  border-radius: 3px;\n  height: 70px;\n  color: #555;\n}\n.s007[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inner-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input.placeholder[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 18px;\n}\n.s007[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inner-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder {\n  color: #999;\n  font-size: 18px;\n}\n.s007[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inner-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #999;\n  font-size: 18px;\n}\n.s007[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inner-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .s007[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inner-form[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  outline: 0;\n}\n.s007[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inner-form[_ngcontent-%COMP%]   .basic-search[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 60px;\n  height: 100%;\n}\n.s007[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inner-form[_ngcontent-%COMP%]   .basic-search[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  fill: #ccc;\n}\n.s007[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inner-form[_ngcontent-%COMP%]   .basic-search[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   .result-count[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 110px;\n  top: 0;\n  right: 0;\n  position: absolute;\n  font-weight: bold;\n  color: #555;\n  height: 100%;\n  font-size: 14px;\n}\n\n.explore[_ngcontent-%COMP%] {\n  border: 0.1em solid #f19d28;\n  border-radius: 2em;\n  background-color: #f19d28;\n  width: 37%;\n  height: 3em;\n  line-height: 3em;\n  margin: auto;\n  margin-top: 4em;\n  opacity: 0.8;\n}\n.explore[_ngcontent-%COMP%]   .ex[_ngcontent-%COMP%], .go[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-weight: 500;\n  color: white;\n}\n.explore[_ngcontent-%COMP%]   .brdr[_ngcontent-%COMP%] {\n  border: 0.1em white solid;\n  border-radius: 2em;\n  margin-left: 2em;\n  padding: 0.3em 0.5em 0.2em 0.5em;\n}\n.explore[_ngcontent-%COMP%]   .brdr[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: white;\n}\n\n\n\n\n.vl[_ngcontent-%COMP%] {\n  border-left: 1px solid #c5c5c5;\n  height: auto;\n  border-radius: 0.5em;\n}\n\n\n.crd1[_ngcontent-%COMP%] {\n  \n  box-shadow: 2px 2px 2px 2px #c5c5c5;\n}\n.crd[_ngcontent-%COMP%] {\n  color: #333333;\n}\n.text-upon-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2%;\n  left: 3.8%;\n  right: auto;\n  color: #ff5722;\n}\n.text-down-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6.5em;\n  left: 3.8%;\n  right: auto;\n  background-color: #ff5722;\n  color: white;\n}\n.lnk[_ngcontent-%COMP%] {\n  color: #8eb4b4;\n}\n.incred[_ngcontent-%COMP%]   .recommend[_ngcontent-%COMP%] {\n  \n  margin: auto;\n  overflow: hidden;\n  transition: 0.3s;\n  margin-bottom: 5em;\n}\n.incred[_ngcontent-%COMP%]   .recommend[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #333333;\n  margin-left: 2.7em;\n}\n.incred[_ngcontent-%COMP%]   .recommend[_ngcontent-%COMP%]   .inc[_ngcontent-%COMP%] {\n  margin-left: 4.4em;\n  font-size: 1.1em;\n}\n\n.recommend[_ngcontent-%COMP%]   .cont[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  margin-top: 3em;\n}\n.recommend[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin-top: 2em;\n}\n.recommend[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\n.recommend[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333333;\n}\n.recommend[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333333;\n  text-decoration: none;\n}\n.recommend[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: translate(0, -10px);\n}\n.recommend[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .top_left[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  left: 16px;\n}\n.recommend[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.recommend[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .btn1[_ngcontent-%COMP%], .btn2[_ngcontent-%COMP%] {\n  color: white;\n  height: 1.5em;\n  border-radius: 0.2em;\n  margin-top: 6em;\n  padding-bottom: 0.5em;\n  font-size: 0.9em;\n  font-weight: 500;\n}\n.recommend[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .btn1[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  font-weight: 500;\n  background-color: #ff5722;\n  border: 0.1em solid #ff5722;\n}\n.recommend[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .btn2[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #ff9557 0%, #ff6b3d 100%);\n  border: 0.1em solid #ff9557;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZm9vZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQyxrSEFBQTtBQUNBLG1CQUFBO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7QUFrQkEsdUJBQUE7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7QUFDSjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFRSxTQUFBO0FBQ0E7RUFFRSxhQUFBO0VBRUEsdUJBQUE7RUFFQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFRTs7RUFFRSxnQkFBQTtFQUNBLFVBQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUVBLGFBQUE7RUFFQSx5QkFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0o7QUFFRTtFQUVFLGFBQUE7RUFFQSwyQkFBQTtFQUVBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0UsVUFBQTtBQUNBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUU7O0VBRUUsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFHSjtBQURFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFJSjtBQUZFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBS0o7QUFIRSxpQkFBQTtBQUdBLG1IQUFBO0FBRUEsNEdBQUE7QUFFRiw4R0FBQTtBQUVBO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUNBLDZHQUFBO0FBQ0EsMkJBQUE7QUFDQTtFQUNDLGtDQUFBO0VBQ0EsbUNBQUE7QUFFRDtBQUFBO0VBQ0UsY0FBQTtBQUdGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFFRjtBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFHRjtBQUFBO0VBQ0MsY0FBQTtBQUdEO0FBUUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFMRjtBQU9BO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFKRjtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUhGO0FBS0EsV0FBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRkY7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQURGO0FBR0E7RUFDRSxpQkFBQTtBQUFGO0FBRUE7RUFDRSxjQUFBO0FBQ0Y7QUFDQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUVGO0FBQUE7RUFDRSw4QkFBQTtBQUdGO0FBREE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBSUY7QUFGQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUtGO0FBRkE7O0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFLRjtBQUhBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFNRjtBQUpBO0VBQ0UsK0RBQUE7RUFDQSwyQkFBQTtBQU9GO0FBSkEseUJBQUE7QUFFRSxpSEFBQSIsImZpbGUiOiJmb29kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGNhcm91c2VsIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuIC8qIFN0YXJ0IGNhcm91c2VsICovXHJcbi8qIC5jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNlbnRlcmVkIC50aXRsZSB7XHJcbiAgZm9udC1zaXplOiA1ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNlbnRlcmVkIC5kaXNjb3ZlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAqL1xyXG4vKiB0ZXh0IG92ZXIgY2Fyb3VzZWwgKi9cclxuLmhlYWRlci10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogMS44JTtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDk2LjY2NjY2NjY2NjY2NjY2JTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXRleHQgaDIge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXRleHQgaDIgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXRleHQgaDMgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLypTZWFyY2gqL1xyXG4gIC5zMDA3IHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zMDA3IGZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDc5MHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuczAwNyBmb3JtIC5pbm5lci1mb3JtIC5pbnB1dC1maWVsZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zMDA3IGZvcm0gLmlubmVyLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAzMnB4IDEwcHggNzBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zMDA3IGZvcm0gLmlubmVyLWZvcm0gLmlucHV0LWZpZWxkIGlucHV0LnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAuczAwNyBmb3JtIC5pbm5lci1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAuczAwNyBmb3JtIC5pbm5lci1mb3JtIC5pbnB1dC1maWVsZCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLnMwMDcgZm9ybSAuaW5uZXItZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6aG92ZXIsXHJcbiAgLnMwMDcgZm9ybSAuaW5uZXItZm9ybSAuaW5wdXQtZmllbGQgaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zMDA3IGZvcm0gLmlubmVyLWZvcm0gLmJhc2ljLXNlYXJjaCAuaW5wdXQtZmllbGQgLmljb24td3JhcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zMDA3IGZvcm0gLmlubmVyLWZvcm0gLmJhc2ljLXNlYXJjaCAuaW5wdXQtZmllbGQgLmljb24td3JhcCBzdmcge1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBmaWxsOiAjY2NjO1xyXG4gIH1cclxuICBcclxuICAuczAwNyBmb3JtIC5pbm5lci1mb3JtIC5iYXNpYy1zZWFyY2ggLmlucHV0LWZpZWxkIC5yZXN1bHQtY291bnQge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLypFeHBsb3JlKi9cclxuICAuZXhwbG9yZSB7XHJcbiAgICBib3JkZXI6IDAuMWVtIHNvbGlkICNmMTlkMjg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMTU3LCA0MCwgMSk7XHJcbiAgICB3aWR0aDogMzclO1xyXG4gICAgaGVpZ2h0OiAzZW07XHJcbiAgICBsaW5lLWhlaWdodDogM2VtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNGVtO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuICAuZXhwbG9yZSAuZXgsXHJcbiAgLmdvIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZXhwbG9yZSAuYnJkciB7XHJcbiAgICBib3JkZXI6IDAuMWVtIHdoaXRlIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcclxuICAgIHBhZGRpbmc6IDAuM2VtIDAuNWVtIDAuMmVtIDAuNWVtO1xyXG4gIH1cclxuICAuZXhwbG9yZSAuYnJkciBpIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC8qIEVuZCBjYXJvdXNlbCAqL1xyXG5cclxuXHJcbiAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBlbmQgb2YgY2Fyb3NlbCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbiAgLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBib2R5IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG5cclxuLyogKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrIGxlZnQgY29sICsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrICovXHJcblxyXG4udmx7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjNWM1YzU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwMC41ZW07XHJcbn1cclxuLyogKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrIHJpZ2h0IGNvbCArKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysgKi9cclxuLypTdGFydCBrbG9vayByZWNvbW1lbmRlZCAqL1xyXG4uY3JkMXtcclxuIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjNWM1YzUgICA7ICovXHJcbiBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2M1YzVjNSA7XHJcbn1cclxuLmNyZHtcclxuICBjb2xvcjogIzMzMzMzMztcclxuIFxyXG59XHJcblxyXG4udGV4dC11cG9uLWltZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyJTtcclxuICBsZWZ0OiAzLjglO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIGNvbG9yOiAjZmY1NzIyO1xyXG59XHJcbi50ZXh0LWRvd24taW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2LjVlbTtcclxuICBsZWZ0OiAzLjglO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4ubG5re1xyXG4gY29sb3I6ICM4ZWI0YjQ7XHJcbn1cclxuLy8gYS5sbms6aG92ZXJ7XHJcblxyXG4vLyB9XHJcbi8vIGEubG5rOnZpc2l0ZWR7XHJcblxyXG4vLyB9XHJcbi8vIGEubG5rOmFjdGl2ZXtcclxuXHJcbi8vIH1cclxuLmluY3JlZCAucmVjb21tZW5kIHtcclxuICAvKiB3aWR0aDogOTAlOyAqL1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgbWFyZ2luLWJvdHRvbTogNWVtO1xyXG59XHJcbi5pbmNyZWQgLnJlY29tbWVuZCBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgbWFyZ2luLWxlZnQ6IDIuN2VtO1xyXG59XHJcbi5pbmNyZWQgLnJlY29tbWVuZCAuaW5jIHtcclxuICBtYXJnaW4tbGVmdDogNC40ZW07XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG4vKkltYWdlczogKi9cclxuLnJlY29tbWVuZCAuY29udCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogM2VtO1xyXG59XHJcbi5yZWNvbW1lbmQgLmltYWdlcyAucm93IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxufVxyXG4ucmVjb21tZW5kIC5pbWFnZXMgLnJvdyAuY2FyZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuLnJlY29tbWVuZCAuaW1hZ2VzIC5yb3cgLmNhcmQgYSB7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLnJlY29tbWVuZCAuaW1hZ2VzIC5yb3cgLmNhcmQgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5yZWNvbW1lbmQgLmltYWdlcyAucm93IC5jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTBweCk7XHJcbn1cclxuLnJlY29tbWVuZCAuaW1hZ2VzIC50b3BfbGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOHB4O1xyXG4gIGxlZnQ6IDE2cHg7XHJcbn1cclxuLnJlY29tbWVuZCAuaW1hZ2VzIC5yb3cgLmJ0bnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucmVjb21tZW5kIC5pbWFnZXMgLnJvdyAuYnRuMSxcclxuLmJ0bjIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDEuNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gIG1hcmdpbi10b3A6IDZlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5yZWNvbW1lbmQgLmltYWdlcyAucm93IC5idG4xIHtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XHJcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCAjZmY1NzIyO1xyXG59XHJcbi5yZWNvbW1lbmQgLmltYWdlcyAucm93IC5idG4yIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjk1NTcgMCUsICNmZjZiM2QgMTAwJSk7XHJcbiAgYm9yZGVyOiAwLjFlbSBzb2xpZCAjZmY5NTU3O1xyXG59XHJcblxyXG4vKkVuZCBrbG9vayByZWNvbW1lbmRlZCAqL1xyXG5cclxuICAvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBlbmQgb2YgYm9keSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuXHJcblxyXG4vLyAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuLy8gIC8qU3RhcnQgZm9vdGVyKi9cclxuLy8gIGZvb3RlciB7XHJcbi8vICAgaGVpZ2h0OiAyNWVtO1xyXG4vLyB9XHJcbi8vIGZvb3RlciAuZk9uZSAudGhpcmRQcixcclxuLy8gZm9vdGVyIC5mT25lIC5zZWNvbmRQciB7XHJcbi8vICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG4vLyBmb290ZXIgLnRyYXZlbCxcclxuLy8gLmNsaWNrIHtcclxuLy8gICBkaXNwbGF5OiBub25lO1xyXG4vLyB9XHJcbi8vIGZvb3RlciAuZk9uZSAuZmlyc3RQciB7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4vLyB9XHJcblxyXG4vLyBmb290ZXIgLmZUd28gLm9uZSB7XHJcbi8vICAgbWFyZ2luLXRvcDogMC40ZW07XHJcbi8vIH1cclxuLy8gZm9vdGVyIC5mVHdvIC5wYXksXHJcbi8vIC5jYXJkcyB7XHJcbi8vICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyAgIH1cclxuXHJcbiAgXHJcblxyXG4vLyAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcclxuLy8gICAgIGZvb3RlciB7XHJcbi8vICAgICAgIGhlaWdodDogMzNlbTtcclxuLy8gICAgIH1cclxuLy8gICAgIGZvb3RlciAuZC1zbS1ub25lIHtcclxuLy8gICAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gICAgIH1cclxuLy8gICAgIGZvb3RlciAuZlR3byAuY29sLWxnLTMgLm9uZSB7XHJcbi8vICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgZm9vdGVyIC5idG4ge1xyXG4vLyAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbi8vICAgICAgIHdpZHRoOiAxMGVtICFpbXBvcnRhbnQ7XHJcbi8vICAgICB9XHJcbi8vICAgICBmb290ZXIgLmJ0biAubXgtNSB7XHJcbi8vICAgICAgIG1hcmdpbi1sZWZ0OiAxZW0gIWltcG9ydGFudDtcclxuLy8gICAgICAgbWFyZ2luLXJpZ2h0OiAxZW0gIWltcG9ydGFudDtcclxuLy8gICAgICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuXHJcblxyXG4vLyAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FoodComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-food',
                templateUrl: './food.component.html',
                styleUrls: ['./food.component.scss']
            }]
    }], function () { return [{ type: src_app_services_food_service_service__WEBPACK_IMPORTED_MODULE_1__["FoodServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=Components-more-to-explore-more-to-explore-module.js.map