(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-toolbar class=\"app-title\">\n    <span class=\"text-mid\"> {{title}} </span>\n  </mat-toolbar>\n</div>\n\n<app-city></app-city>\n<!-- \n  Challenge\n   - pass appropriate parameters to functions \n   - pass the city details to the CityComponent    \n  -->\n\n<!-- <app-search\n(selectedCity)=\"getCityDetails($event)\">\n</app-search> --> \n\n<!-- value emited: {{valueEmittedFromChildComponent}}\n   <app-city\n    cityDetails=\"cityDetails\">\n</app-city> -->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/weather.service */ "./src/app/services/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(weatherService) {
        this.weatherService = weatherService;
        this.title = 'My Weather App';
        this.city = 'city_name';
        this.country = 'country_name';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_city_city_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/city/city.component */ "./src/app/components/city/city.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _components_city_city_component__WEBPACK_IMPORTED_MODULE_8__["CityComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/city/city.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/city/city.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    width: 960px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.userInfo{\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.container-weather {\n    display: flex;\n    justify-content: space-between;\n    text-align: center;\n}\n\n.weather-card {\n    width: 200px;\n    height: 100px;\n}\n\n.cityData {\n    background-color: #fafafa;\n    padding: 12px;\n    max-width: 200px;\n    /* display: flex; */\n}\n\n.cityName {\n    margin: 0 auto 5 auto;\n    text-align: center;\n    display: block;\n    font-size: 40px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.date {\n    padding: 5px;\n    width: 80%;\n    font-weight: 500;\n    margin-right: auto;\n    margin-left: auto;\n    display: inline-block;\n}\n\n.weatherIcon {\n    width: 20%;\n}\n\n.weather {\n    font-weight: 600;\n    display: block;\n}\n  \n"

/***/ }),

/***/ "./src/app/components/city/city.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/city/city.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-search\n(selectedCity)=\"getCityDetails($event)\">\n</app-search>\n\n<!-- \n  CHALLENGE\n    - display cityName in format \"city name, country name\"\n    - define for loop to loop through weather of different days\n    - display the weather for total 4 days (including today) \n      var 'i' in class=\"cityData\" can be used to store index of the cityDetails.weather array\n    - date should be formatted (eg: 2018-08-03 should be displayed as 'Aug 3, 2018' )\n    - temperature should have \n      - minimum 2 digits to the left of decimal\n      - exactly 1 digit to the right of decimal\n  -->\n  \n<div class=\"container\" *ngIf=\"cityDetails\">\n  <p class=\"cityName\">{{ city }}, {{ country }}</p>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center none\" fxLayoutGap=\"15px\">\n  <div class=\"container-weather\" fxLayout=\"row\">\n\n    <span *ngFor=\"let cityDetail of cityDetails; let i=index\" >\n      <mat-card class=\"cityData\" *ngIf=\"i<4\">\n      <h3 class=\"date\">{{cityDetail.applicable_date | date: 'mediumDate'}}</h3>\n      <mat-card>\n        <img src=\"https://www.metaweather.com/static/img/weather/{{cityDetail.weather_state_abbr}}.svg\" class=\"weatherIcon\">\n        <span class=\"weather\"> {{cityDetail.weather_state_name}} </span>\n        <br>\n        <span class=\"cityTemp\">{{cityDetail.the_temp | number: '2.1-1'}} </span>\n      </mat-card>  \n    </mat-card>\n  </span>\n\n  </div>\n  </div>\n</div>\n\n<div class=\"userInfo\" *ngIf='!cityDetails' >\n  <h1>Enter the city name to get the weather report.</h1>\n</div>"

/***/ }),

/***/ "./src/app/components/city/city.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/city/city.component.ts ***!
  \***************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/weather.service */ "./src/app/services/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CityComponent = /** @class */ (function () {
    function CityComponent(weatherService) {
        this.weatherService = weatherService;
        /*
          CHALLENGE
           - Take the city details from app.component.html into "cityDetails"
           - display the city details in the template
        */
        this.title = 'My Weather App';
        this.city = 'city_name';
        this.country = 'country_name';
        this.valueEmittedFromChildComponent = 0;
    }
    CityComponent.prototype.ngOnInit = function () {
        // this.i=1;
        // this.cityDetails={
        //   city: 'chennai',
        //   country: 'india',
        //   weather: [
        //     {
        //       date: 'Aug 3, 2018',
        //       temperature: 31.1,
        //       weather_name: 'sunny',
        //       weather_image: this.imgUrl,
        //     }
        //   ]
        // }
        // if(this.cityDetails.weather[0].temperature==2){
        //   this.cityDetails.weather[0].temperature=2.0
        // }
    };
    CityComponent.prototype.getCityDetails = function (woeid) {
        /*
          CHALLENGE
           - pass the city id to service.getCityDetails(woeid)
        */
        // this.valueEmittedFromChildComponent = woeid;
        var _this = this;
        this.weatherService.getCityDetails(woeid)
            .subscribe(function (data) {
            _this.cityDetails = data.consolidated_weather;
        });
        this.weatherService.getCityDetails(woeid)
            .subscribe(function (data) {
            _this.city = data.title;
        });
        this.weatherService.getCityDetails(woeid)
            .subscribe(function (data) {
            _this.country = data.parent.title;
        });
        this.valueEmittedFromChildComponent = woeid;
    };
    CityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-city',
            template: __webpack_require__(/*! ./city.component.html */ "./src/app/components/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.css */ "./src/app/components/city/city.component.css")]
        }),
        __metadata("design:paramtypes", [_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], CityComponent);
    return CityComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card mat-list-item mat-list-item {\n  cursor: pointer,\n}\n\n.searchOutput {\n  width: 400px;\n  margin-top: -30px;\n  margin-left: auto;\n  margin-right: auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n  max-height: 200px;\n}\n\n.mat-card {\n  padding: 0px !important;\n}\n\n.searchError {\n  background-color: #fafafa;\n}"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <mat-form-field>\n    <mat-label>Search city</mat-label>\n    <mat-icon matSuffix>search</mat-icon>\n\n    <!-- Challenge #searchInput -->\n    <input\n        #searchInput\n        matInput\n        placeholder=\"paris, london...\"         \n        (keyup)=\"search(searchInput.value)\" \n        >\n  </mat-form-field>\n</p>\n<!-- <p>location: {{searchInput.value}}</p> -->\n\n<div class=\"searchOutput\">\n    <mat-card *ngIf=\"searchResults\">\n        \n        <!-- If input field has some value and the result from service is an empty array show sorry message else display list -->\n        <mat-list role=\"list\" *ngIf=\"searchResults.length===0 && searchInput.value\" class=\"searchError\">\n            <mat-list-item  role=\"listitem\">City not found: {{searchInput.value}} &nbsp; &nbsp;&nbsp;\n                <mat-icon matSuffix>sentiment_very_dissatisfied</mat-icon>\n                <br>                \n            </mat-list-item>\n        </mat-list>\n        <!-- Challenge .searchItem\n              - complete for loop\n              - send proper parameters to function on click event\n        -->\n        <mat-list role=\"list\" *ngIf=\"searchResults.length\">\n            <mat-list-item\n                role=\"listitem\"\n                *ngFor=\"let searchResult of searchResults\"\n                (click)=\"selectedLocation(searchResult.woeid)\"\n                class=\"searchItem\">                \n                {{searchResult.title}}\n                <mat-divider></mat-divider>\n            </mat-list-item>\n        </mat-list>\n    </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(weatherService) {
        this.weatherService = weatherService;
        this.selectedCity = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function (term) {
        var _this = this;
        /*
            CHALLENGE
                - if user has typed something in the input field,
                  call weatherService.searchLocation() with the searched term
                  and assign the results to searchResults array
                - if input field is empty, clear the searResults array
        */
        if (term == '') {
            this.searchResults = null;
        }
        else {
            this.weatherService.searchLocation(term)
                .subscribe(function (data) {
                _this.searchResults = data;
            });
        }
    };
    SearchComponent.prototype.selectedLocation = function (woeid) {
        /*
            CHALLENGE
              After user clicked on a city name from the search results, this function should be called.
              This function should perform the following actions
              - make the input field empty
              - clear all the results
              - send the cityid (woeid) to the parent component (AppComponent)
        */
        this.searchResults = null;
        this.searchInput = null;
        this.selectedCity.emit(woeid);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput'),
        __metadata("design:type", String)
    ], SearchComponent.prototype, "searchInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SearchComponent.prototype, "selectedCity", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_weather_service__WEBPACK_IMPORTED_MODULE_0__["WeatherService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDividerModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDividerModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.baseUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com';
    }
    WeatherService.prototype.searchLocation = function (term) {
        /*
          CHALLANGE
           - get list of cities based on the searched string
           sample url: baseUrl/api/location/search/?query=paris
        */
        //return this.http.get<any>(this.baseUrl+"/"+"api/location/search/?query=+"+term);
        return this.http.get(this.baseUrl + '/api/location/search/?query=' + term);
    };
    WeatherService.prototype.getCityDetails = function (woeid) {
        /*
          woeid is the city id(number).
          you can use below sample url to fetch the city weather details
          sample url : baseUrl/api/location/111111   https://www.metaweather.com/api/location/28743736
        */
        /*
          CHALLENGE
           - fetch the city weather data
           - transform the received data to required "IWeatherData" format using transformRawData() func
        */
        return this.http.get(this.baseUrl + '/api/location/' + woeid);
        //       .subscribe(data=>{
        //         let response=this.transformRawData(data);
        //  });
        //  this.iWeatherRawData={
        //    consolidated_weather: [
        //         {
        //             weather_state_name: 'state',
        //             weather_state_abbr: 'cloudy',
        //             applicable_date: '2018-08-03',
        //             the_temp: 29,
        //         }
        //     ],
        //     parent: {
        //         title: 'country',
        //     },
        //     title: 'title',
        //  }
        // this.iWeatherData=this.transformRawData(this.iWeatherRawData);
        //  return of(this.iWeatherData);
    };
    WeatherService.prototype.transformRawData = function (rawData) {
        var transformedWeather = [];
        rawData.consolidated_weather.forEach(function (obj) {
            var date = '';
            var temperature = 0;
            var weather_name = '';
            var weather_image = "https://www.metaweather.com/static/img/weather/.svg";
            transformedWeather.push({ date: date, temperature: temperature, weather_image: weather_image, weather_name: weather_name });
        });
        return {
            city: rawData.title,
            country: rawData.parent.title,
            weather: [],
        };
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular\TODO\Weather\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map