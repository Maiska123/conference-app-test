function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layout/dashboard/dashboard.component */
    "./src/app/layout/dashboard/dashboard.component.ts");

    var routes = [{
      path: 'dashboard',
      component: _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }, {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_meetings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/meetings.service */
    "./src/app/services/meetings.service.ts");
    /* harmony import */


    var _services_sidenav_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/sidenav-details.service */
    "./src/app/services/sidenav-details.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["rightSidenav"];

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(meetingsService, sidenavService) {
        _classCallCheck(this, AppComponent);

        this.meetingsService = meetingsService;
        this.sidenavService = sidenavService;
        this.title = 'conference-app';
      }

      _createClass(AppComponent, [{
        key: "getMeetings",
        value: function getMeetings() {
          var _this = this;

          this.meetingsService.getMeetings().subscribe(function (newMeetings) {
            return _this.meetings = newMeetings;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMeetings();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meetings_service__WEBPACK_IMPORTED_MODULE_1__["MeetingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidenav_details_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        }
      },
      decls: 2,
      vars: 0,
      consts: [["id", "#overlay-back"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["#overlay-back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.6;\n  filter: alpha(opacity=60);\n  z-index: 5;\n  display: none;\n  background-color: black no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNYWlza2FcXERvY3VtZW50c1xcS291bHVob21tYXRcXFNZS1NZIDIwMjBcXE9QSU5Ow4RZVEVcXFZJSU1FU0VUXFxjb25mZXJlbmNlLWFwcC0wLjktYmV0YS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBRUEscURBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jb3ZlcmxheS1iYWNre1xuICBwb3NpdGlvbiAgIDogYWJzb2x1dGU7XG4gIHRvcCAgICAgICAgOiAwO1xuICBsZWZ0ICAgICAgIDogMDtcbiAgd2lkdGggICAgICA6IDEwMCU7XG4gIGhlaWdodCAgICAgOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eSAgICA6IDAuNjtcbiAgZmlsdGVyICAgICA6IGFscGhhKG9wYWNpdHk9NjApO1xuICB6LWluZGV4ICAgIDogNTtcbiAgZGlzcGxheSAgICA6IG5vbmU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIiNvdmVybGF5LWJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcbiAgei1pbmRleDogNTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_meetings_service__WEBPACK_IMPORTED_MODULE_1__["MeetingsService"]
        }, {
          type: _services_sidenav_details_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"]
        }];
      }, {
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['rightSidenav']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/dashboard/dashboard.component */
    "./src/app/layout/dashboard/dashboard.component.ts");
    /* harmony import */


    var _layout_calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layout/calendar-view/calendar-view.component */
    "./src/app/layout/calendar-view/calendar-view.component.ts");
    /* harmony import */


    var _layout_footer_view_footer_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./layout/footer-view/footer-view.component */
    "./src/app/layout/footer-view/footer-view.component.ts");
    /* harmony import */


    var _layout_current_view_current_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./layout/current-view/current-view.component */
    "./src/app/layout/current-view/current-view.component.ts");
    /* harmony import */


    var _layout_details_view_details_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./layout/details-view/details-view.component */
    "./src/app/layout/details-view/details-view.component.ts");
    /* harmony import */


    var _services_sidenav_details_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/sidenav-details.service */
    "./src/app/services/sidenav-details.service.ts");
    /* harmony import */


    var _services_meetings_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/meetings.service */
    "./src/app/services/meetings.service.ts");
    /* harmony import */


    var _services_clock_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/clock.service */
    "./src/app/services/clock.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_sidenav_details_service__WEBPACK_IMPORTED_MODULE_12__["SidenavService"], _services_clock_service__WEBPACK_IMPORTED_MODULE_14__["ClockService"], _services_meetings_service__WEBPACK_IMPORTED_MODULE_13__["MeetingsService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _layout_calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_8__["CalendarViewComponent"], _layout_details_view_details_view_component__WEBPACK_IMPORTED_MODULE_11__["DetailsViewComponent"], _layout_current_view_current_view_component__WEBPACK_IMPORTED_MODULE_10__["CurrentViewComponent"], _layout_footer_view_footer_view_component__WEBPACK_IMPORTED_MODULE_9__["FooterViewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _layout_calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_8__["CalendarViewComponent"], _layout_details_view_details_view_component__WEBPACK_IMPORTED_MODULE_11__["DetailsViewComponent"], _layout_current_view_current_view_component__WEBPACK_IMPORTED_MODULE_10__["CurrentViewComponent"], _layout_footer_view_footer_view_component__WEBPACK_IMPORTED_MODULE_9__["FooterViewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]],
          providers: [_services_sidenav_details_service__WEBPACK_IMPORTED_MODULE_12__["SidenavService"], _services_clock_service__WEBPACK_IMPORTED_MODULE_14__["ClockService"], _services_meetings_service__WEBPACK_IMPORTED_MODULE_13__["MeetingsService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/calendar-view/calendar-view.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/calendar-view/calendar-view.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CalendarViewComponent */

  /***/
  function srcAppLayoutCalendarViewCalendarViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarViewComponent", function () {
      return CalendarViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_meetings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/meetings.service */
    "./src/app/services/meetings.service.ts");
    /* harmony import */


    var _services_clock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/clock.service */
    "./src/app/services/clock.service.ts");
    /* harmony import */


    var _services_sidenav_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/sidenav-details.service */
    "./src/app/services/sidenav-details.service.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _details_view_details_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../details-view/details-view.component */
    "./src/app/layout/details-view/details-view.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var _c0 = ["myDiv"];
    var _c1 = ["myAnotherDiv"];
    var _c2 = ["slide"];

    function CalendarViewComponent_mat_grid_tile_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tile_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", tile_r6.cols)("rowspan", tile_r6.rows);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tile_r6.text, " ");
      }
    }

    function CalendarViewComponent_mat_grid_tile_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-grid-tile", 19);
      }

      if (rf & 2) {
        var tile_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", tile_r7.cols)("rowspan", tile_r7.rows);
      }
    }

    var _c3 = function _c3(a0) {
      return {
        "left": a0
      };
    };

    function CalendarViewComponent_mat_card_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarViewComponent_mat_card_25_Template_mat_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var meeting_r8 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return [ctx_r10.showDetailsBehaviour(meeting_r8), ctx_r10.emptySideNavCount()];
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var meeting_r8 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r5.getplacement(meeting_r8))("height", ctx_r5.getDuration(meeting_r8))("font-size", ctx_r5.getFontSize(meeting_r8));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c3, ctx_r5.widthFromLeft));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", meeting_r8.Subject, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, meeting_r8.Organizer), " ");
      }
    }

    var _c4 = function _c4(a0) {
      return {
        "top": a0
      };
    };

    var CalendarViewComponent = /*#__PURE__*/function () {
      function CalendarViewComponent(meetingsService, clockService, sidenavService) {
        _classCallCheck(this, CalendarViewComponent);

        this.meetingsService = meetingsService;
        this.clockService = clockService;
        this.sidenavService = sidenavService;
        this.showDetails = false;
        this.runningTime = '0px';
        this.meetingFromTop = '0px';
        this.secondsPerDay = 86400;
        this.threeHoursInSeconds = 3 * 3600;
        this.fontSizeTiny = 15;
        this.fontSizeBig = 19;
        this.meetingsBehaviour = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.timeTiles = [{
          text: '00:00',
          cols: 1,
          rows: 1
        }, {
          text: '01:00',
          cols: 1,
          rows: 1
        }, {
          text: '02:00',
          cols: 1,
          rows: 1
        }, {
          text: '03:00',
          cols: 1,
          rows: 1
        }, {
          text: '04:00',
          cols: 1,
          rows: 1
        }, {
          text: '05:00',
          cols: 1,
          rows: 1
        }, {
          text: '06:00',
          cols: 1,
          rows: 1
        }, {
          text: '07:00',
          cols: 1,
          rows: 1
        }, {
          text: '08:00',
          cols: 1,
          rows: 1
        }, {
          text: '09:00',
          cols: 1,
          rows: 1
        }, {
          text: '10:00',
          cols: 1,
          rows: 1
        }, {
          text: '11:00',
          cols: 1,
          rows: 1
        }, {
          text: '12:00',
          cols: 1,
          rows: 1
        }, {
          text: '13:00',
          cols: 1,
          rows: 1
        }, {
          text: '14:00',
          cols: 1,
          rows: 1
        }, {
          text: '15:00',
          cols: 1,
          rows: 1
        }, {
          text: '16:00',
          cols: 1,
          rows: 1
        }, {
          text: '17:00',
          cols: 1,
          rows: 1
        }, {
          text: '18:00',
          cols: 1,
          rows: 1
        }, {
          text: '19:00',
          cols: 1,
          rows: 1
        }, {
          text: '20:00',
          cols: 1,
          rows: 1
        }, {
          text: '21:00',
          cols: 1,
          rows: 1
        }, {
          text: '22:00',
          cols: 1,
          rows: 1
        }, {
          text: '23:00',
          cols: 1,
          rows: 1
        }];
        this.contentHeightNumber = 2544;
        this.widthFromLeft = '0px';
        this.scrollToViewCount = 13;
        this.toggleSideNavOffCount = 0;
      }

      _createClass(CalendarViewComponent, [{
        key: "onScroll",
        value: function onScroll($event) {
          this.scrollToViewCount = 0;
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          console.log(event.target.innerWidth);
          this.widthOfClocks = this.myAnotherDiv.nativeElement.offsetWidth + 12;
          this.widthFromLeft = this.widthOfClocks + 'px';
        }
      }, {
        key: "animate",
        value: function animate() {
          this.slides.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, {
        key: "emptyScrollCount",
        value: function emptyScrollCount() {
          this.scrollToViewCount = 0;
        }
      }, {
        key: "emptySideNavCount",
        value: function emptySideNavCount() {
          this.toggleSideNavOffCount = 0;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.clockSubscription.unsubscribe();
          this.meetingSubscription.unsubscribe();
          this.roomDataSubscription.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.meetingSubscription = this.meetingsService.getMeetings().subscribe(function (currentMeetings) {
            _this2.meetings = currentMeetings;
          });
          this.roomDataSubscription = this.meetingsService.getConferenceRoomName().subscribe(function (roomdata) {
            _this2.conferenceRoomData = roomdata;
          });
          this.clockSubscription = this.clockService.getTime().subscribe(function (time) {
            _this2.time = time; // Timers on page

            ++_this2.scrollToViewCount;
            ++_this2.toggleSideNavOffCount;

            if (_this2.scrollToViewCount > 15) {
              _this2.animate();

              _this2.emptyScrollCount();
            }

            if (_this2.toggleSideNavOffCount > 30 && _this2.sidenavService.isOpen()) {
              _this2.sidenavService.toggle();

              _this2.emptySideNavCount();
            } else if (_this2.toggleSideNavOffCount > 120) {
              _this2.emptySideNavCount();
            } // For displaying current time with a pin


            _this2.runningTime = Math.round(time.getTime() / 1000 % _this2.secondsPerDay * (_this2.heightOfTimetable / _this2.secondsPerDay)) + 301 + 'px';
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.heightOfTimetable = this.myDiv.nativeElement.offsetHeight;
          this.widthOfClocks = this.myAnotherDiv.nativeElement.offsetWidth + 12;
          this.widthFromLeft = this.getClockWidth() + 'px';
        }
      }, {
        key: "getplacement",
        value: function getplacement(meeting) {
          var top = '0px';
          var meetingDateTime = new Date(meeting.StartTime);
          top = Math.round(Math.round((meetingDateTime.getTime() / 1000 + this.threeHoursInSeconds) % this.secondsPerDay * (this.heightOfTimetable / this.secondsPerDay))) + 20 + 'px';
          return top;
        }
      }, {
        key: "getDuration",
        value: function getDuration(meeting) {
          var height = '0px';
          var startTime = new Date(meeting.StartTime);
          var endTime = new Date(meeting.EndTime);
          var differenceInTime = (endTime.getTime() - startTime.getTime()) / 1000;
          height = this.heightOfTimetable / this.secondsPerDay * differenceInTime - 1 + 'px';
          return height;
        }
      }, {
        key: "getFontSize",
        value: function getFontSize(meeting) {
          var height = 0;
          var startTime = new Date(meeting.StartTime);
          var endTime = new Date(meeting.EndTime);
          var differenceInTime = (endTime.getTime() - startTime.getTime()) / 1000;
          height = Math.round(this.heightOfTimetable / this.secondsPerDay * differenceInTime / 6); // height = 18px from 1h and 9px from 30min

          height < 18 ? height = this.fontSizeTiny : height = this.fontSizeBig;
          return height + 'px';
        }
      }, {
        key: "getClockWidth",
        value: function getClockWidth() {
          return this.widthOfClocks;
        }
      }, {
        key: "toggleRightSidenav",
        value: function toggleRightSidenav() {
          this.sidenavService.toggle();
          this.sidenavService.open();
          this.showDetails = true;
        }
      }, {
        key: "showDetailFunc",
        value: function showDetailFunc(i) {
          // this.detailMeeting = this.meetings[i];
          this.meetingsBehaviour.next(this.meetingClicked);
          this.toggleRightSidenav();
          this.showDetails = true;
        }
      }, {
        key: "showDetailsBehaviour",
        value: function showDetailsBehaviour(meeting) {
          this.showDetails = true;
          this.meetingClicked = meeting;
          this.detailMeeting = meeting;
          this.meetingsBehaviour.next(meeting);
          this.toggleRightSidenav();
        }
      }]);

      return CalendarViewComponent;
    }();

    CalendarViewComponent.ɵfac = function CalendarViewComponent_Factory(t) {
      return new (t || CalendarViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meetings_service__WEBPACK_IMPORTED_MODULE_3__["MeetingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_clock_service__WEBPACK_IMPORTED_MODULE_4__["ClockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidenav_details_service__WEBPACK_IMPORTED_MODULE_5__["SidenavService"]));
    };

    CalendarViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarViewComponent,
      selectors: [["app-calendar-view"]],
      viewQuery: function CalendarViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myAnotherDiv = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
        }
      },
      hostBindings: function CalendarViewComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function CalendarViewComponent_scroll_HostBindingHandler($event) {
            return ctx.onScroll($event);
          })("resize", function CalendarViewComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        TimeIn: "TimeIn"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 27,
      vars: 21,
      consts: [[2, "width", "inherit", 3, "click", "scroll"], [1, "timetable-container"], [1, "roomdata", 2, "z-index", "6"], [1, "roomname"], [2, "margin-top", "1vh", "margin-right", "2.3vw"], [1, "background-block"], [1, "clocks-n-sandals"], [1, "clocks-div"], ["cols", "1", "rowHeight", "100px"], ["myAnotherDiv", ""], ["style", "overflow: visible;", 3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [1, "grid-div"], ["cols", "1", "rowHeight", "100px", 1, "timetable"], ["myDiv", ""], [1, "pallura", 3, "ngStyle"], ["slide", ""], [1, "viiva", 3, "ngStyle"], ["class", "meeting-card", 3, "top", "height", "ngStyle", "fontSize", "click", 4, "ngFor", "ngForOf"], [3, "meetingData", "toggleActive", "click"], [2, "overflow", "visible", 3, "colspan", "rowspan"], [1, "clockan"], [1, "meeting-card", 3, "ngStyle", "click"], [1, "card-title"], [1, "card-subtitle"]],
      template: function CalendarViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarViewComponent_Template_body_click_0_listener() {
            return ctx.emptyScrollCount();
          })("scroll", function CalendarViewComponent_Template_body_scroll_0_listener($event) {
            return ctx.onScroll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-grid-list", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CalendarViewComponent_mat_grid_tile_17_Template, 3, 3, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-grid-list", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CalendarViewComponent_mat_grid_tile_21_Template, 1, 2, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CalendarViewComponent_mat_card_25_Template, 6, 13, "mat-card", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-details-view", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarViewComponent_Template_app_details_view_click_26_listener() {
            return ctx.emptySideNavCount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, ctx.conferenceRoomData == null ? null : ctx.conferenceRoomData.Name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 12, ctx.time, "dd.MM.yyyy"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 15, ctx.conferenceRoomData == null ? null : ctx.conferenceRoomData.Subtitle), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeTiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeTiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c4, ctx.runningTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c4, ctx.runningTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meetings);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meetingData", ctx.detailMeeting)("toggleActive", ctx.showDetails);
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _details_view_details_view_component__WEBPACK_IMPORTED_MODULE_8__["DetailsViewComponent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardSubtitle"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
      styles: ["[_nghost-%COMP%]{\n  overflow-x: hidden;\n  width: inherit;\n}\n\napp-details-view[_ngcontent-%COMP%]{\n  z-index: 10;\n}\n\n@media only screen and (max-width: 1100px) {\n  [_nghost-%COMP%]{\n    font-size: x-small;\n    font-weight: 600;\n  }\n}\n\n.roomdata[_ngcontent-%COMP%]{\n  z-index: 1;\n  box-sizing: border-box;\n  background-color: white;\n  padding-bottom: 2vh;\n  position: fixed;\n  width: inherit;\n  top: 0;\n  margin-left: 2vw;\n  max-height: 20vh;\n  box-shadow: 0 0 30px 20px white;\n  overflow: hidden;\n}\n\n.roomname[_ngcontent-%COMP%]{\n  display:flex;\n  flex-wrap: wrap;\n  margin-bottom: 0.5vh;\n  font-weight:500;\n  color:rgba(134, 134, 134,0.8)\n}\n\n.background-block[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 9vh;\n  position: fixed;\n  top: 0;\n  z-index: 0;\n  background-color: white;\n}\n\n.timetable-container[_ngcontent-%COMP%]{\n  width: inherit;\n  align-items: stretch;\n  margin-top: 12vh;\n  position: relative;\n}\n\nbody[_ngcontent-%COMP%]{\n  display: grid;\n  margin: 0;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.timetable[_ngcontent-%COMP%]{\n  position: absolute;\n  z-index: -1;\n  display: grid;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  grid-template-rows: 150px auto 100px;\n  grid-template-columns: 1fr 7fr;\n  width: 100%;\n  display: -webkit-flex;\n  align-items: flex-start;\n\n}\n\n.grid-div[_ngcontent-%COMP%]   .mat-grid-tile[_ngcontent-%COMP%]::after{\n  content: '';\n  border-bottom: #dadce0 1px solid;\n  position: absolute;\n  width: 97%;\n  right: 0;\n  margin-top: -1px;\n  z-index: 3;\n  pointer-events: none;\n}\n\n.clockan[_ngcontent-%COMP%]{\n  position: relative;\n  padding: 1em;\n  padding-left: 1em;\n  font-weight: 700;\n  font-size: small;\n  top: -50px ;\n}\n\n@media only screen and (max-width: 720px) {\n  .clockan[_ngcontent-%COMP%]{\n    position: relative;\n    padding: 1em;\n    padding-left: 1em;\n    font-weight: 600;\n    font-size: x-small;\n    top: -50px ;\n    left: 0.27vw;\n  }\n}\n\n.clocks-n-sandals[_ngcontent-%COMP%]{\n  padding-top: 20px;\n  display: flex;\n  overflow: hidden;\n  align-items: stretch;\n  width: inherit;\n  height: 2600px;\n}\n\n.grid-div[_ngcontent-%COMP%]{\n  overflow-x: hidden;\n  border-right: white 1px solid;\n  overflow: visible;\n  flex: 6;\n}\n\n.clocks-div[_ngcontent-%COMP%]{\n  position: relative;\n  height: inherit;\n  padding-right: 0;\n  text-align: right;\n  flex: 1;\n}\n\n.meeting-card[_ngcontent-%COMP%]{\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  cursor: pointer;\n  color: black;\n  overflow: hidden;\n  font-family: Lato;\n  max-width: 24vw;\n  width: -webkit-fill-available;\n  border-left-width: 1vw;\n  border-left-color: yellow;\n  border-left-style: solid;\n  box-shadow: 9px 4px 7px 0px rgba(0,0,0,0.2);\n  background-color: white;\n  padding: 0 !important;\n}\n\n.card-title[_ngcontent-%COMP%]{\n  font-weight: 700;\n  margin-top:0.5vw !important;\n  margin-left:0.5vw;\n}\n\n.card-subtitle[_ngcontent-%COMP%]{\n  font-weight: 700;\n  margin-left: 0.5vw;\n  font-size: small;\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.pallura[_ngcontent-%COMP%]{\n  background: #fc0;\n  border-radius: 50%;\n  content: \"\";\n  position: absolute;\n  height: 12px;\n  left: 0;\n  margin-top: -5px;\n  width: 12px;\n  z-index: 505;\n}\n\n.viiva[_ngcontent-%COMP%]{\n  position: absolute;\n  z-index: 505;\n  border-top: #fc0 solid 2px;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NhbGVuZGFyLXZpZXcvY2FsZW5kYXItdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLE1BQU07RUFDTixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLE1BQU07RUFDTixVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUVkLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLDhCQUE4QjtFQUM5QixXQUFXO0VBRVgscUJBQXFCO0VBRXJCLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFFaEIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLE9BQU87QUFDVDs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QiwyQ0FBMkM7RUFDM0MsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBRWhCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixPQUFPO0VBQ1AsUUFBUTtFQUNSLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jYWxlbmRhci12aWV3L2NhbGVuZGFyLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuXG5hcHAtZGV0YWlscy12aWV3e1xuICB6LWluZGV4OiAxMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgOmhvc3R7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuLnJvb21kYXRhe1xuICB6LWluZGV4OiAxO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDJ2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogMnZ3O1xuICBtYXgtaGVpZ2h0OiAyMHZoO1xuICBib3gtc2hhZG93OiAwIDAgMzBweCAyMHB4IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucm9vbW5hbWV7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiAwLjV2aDtcbiAgZm9udC13ZWlnaHQ6NTAwO1xuICBjb2xvcjpyZ2JhKDEzNCwgMTM0LCAxMzQsMC44KVxufVxuXG4uYmFja2dyb3VuZC1ibG9ja3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOXZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50aW1ldGFibGUtY29udGFpbmVye1xuICB3aWR0aDogaW5oZXJpdDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIG1hcmdpbi10b3A6IDEydmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYm9keXtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWFyZ2luOiAwO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGltZXRhYmxle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBkaXNwbGF5OiBncmlkO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNTBweCBhdXRvIDEwMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxufVxuXG4uZ3JpZC1kaXYgLm1hdC1ncmlkLXRpbGU6OmFmdGVye1xuICBjb250ZW50OiAnJztcbiAgYm9yZGVyLWJvdHRvbTogI2RhZGNlMCAxcHggc29saWQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDk3JTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIHotaW5kZXg6IDM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY2xvY2thbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxZW07XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0b3A6IC01MHB4IDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuY2xvY2thbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIHRvcDogLTUwcHggO1xuICAgIGxlZnQ6IDAuMjd2dztcbiAgfVxufVxuXG4uY2xvY2tzLW4tc2FuZGFsc3tcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiAyNjAwcHg7XG59XG5cbi5ncmlkLWRpdntcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBib3JkZXItcmlnaHQ6IHdoaXRlIDFweCBzb2xpZDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGZsZXg6IDY7XG59XG5cbi5jbG9ja3MtZGl2e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsZXg6IDE7XG59XG5cbi5tZWV0aW5nLWNhcmR7XG4gIHotaW5kZXg6IDU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xuICBtYXgtd2lkdGg6IDI0dnc7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBib3JkZXItbGVmdC13aWR0aDogMXZ3O1xuICBib3JkZXItbGVmdC1jb2xvcjogeWVsbG93O1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gIGJveC1zaGFkb3c6IDlweCA0cHggN3B4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXRpdGxle1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOjAuNXZ3ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OjAuNXZ3O1xufVxuXG4uY2FyZC1zdWJ0aXRsZXtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWxlZnQ6IDAuNXZ3O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ucGFsbHVyYXtcbiAgYmFja2dyb3VuZDogI2ZjMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEycHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIHdpZHRoOiAxMnB4O1xuICB6LWluZGV4OiA1MDU7XG59XG5cbi52aWl2YXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA1MDU7XG4gIGJvcmRlci10b3A6ICNmYzAgc29saWQgMnB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [// ...
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          width: '100%',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          width: '0%',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-calendar-view',
          templateUrl: './calendar-view.component.html',
          styleUrls: ['./calendar-view.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [// ...
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            width: '100%',
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            width: '0%',
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s')])])]
        }]
      }], function () {
        return [{
          type: _services_meetings_service__WEBPACK_IMPORTED_MODULE_3__["MeetingsService"]
        }, {
          type: _services_clock_service__WEBPACK_IMPORTED_MODULE_4__["ClockService"]
        }, {
          type: _services_sidenav_details_service__WEBPACK_IMPORTED_MODULE_5__["SidenavService"]
        }];
      }, {
        TimeIn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        myDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['myDiv', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": false
          }]
        }],
        myAnotherDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['myAnotherDiv', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": false
          }]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['slide', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            "static": false
          }]
        }],
        onScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['scroll', ['$event']]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/current-view/current-view.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layout/current-view/current-view.component.ts ***!
    \***************************************************************/

  /*! exports provided: CurrentViewComponent */

  /***/
  function srcAppLayoutCurrentViewCurrentViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentViewComponent", function () {
      return CurrentViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_meetings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/meetings.service */
    "./src/app/services/meetings.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CurrentViewComponent = /*#__PURE__*/function () {
      function CurrentViewComponent(meetingsService) {
        _classCallCheck(this, CurrentViewComponent);

        this.meetingsService = meetingsService; // tslint:disable-next-line: no-output-rename

        this.nextMeeting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timeLeft = 280;
        this.indicatorLength = 450;
        this.showMeeting = true;
      }

      _createClass(CurrentViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.meetingSubscription = this.meetingsService.getMeetings().subscribe(function (currentMeetings) {
            _this3.meetings = currentMeetings;
            _this3.currentMeetingInProgress = currentMeetings[0];
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.updateTimeLeft();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.meetingSubscription.unsubscribe();
        }
      }, {
        key: "toggle",
        value: function toggle(showMeet) {
          this.showMeeting ? this.showMeeting = showMeet : this.showMeeting = showMeet;
        }
      }, {
        key: "updateTimeLeft",
        value: function updateTimeLeft() {
          var _this4 = this;

          var _a, _b;

          var end = new Date((_a = this.currentMeetingInProgress) === null || _a === void 0 ? void 0 : _a.EndTime).valueOf();
          var start = new Date((_b = this.currentMeetingInProgress) === null || _b === void 0 ? void 0 : _b.StartTime).valueOf();
          var current = new Date(this.TimeIn).valueOf(); // IF current meeting is active

          if (current > start && current < end) {
            this.showMeeting = true; // Yellow indicator math

            var timePassed = (1 - (current - start) / (end - start)) * this.indicatorLength;
            this.timeLeft = this.indicatorLength - timePassed;
          } else {
            if (this.meetings !== undefined) {
              this.meetings.forEach(function (meeting) {
                var endNext = new Date(meeting === null || meeting === void 0 ? void 0 : meeting.EndTime).valueOf();
                var startNext = new Date(meeting === null || meeting === void 0 ? void 0 : meeting.StartTime).valueOf();
                var currentNext = new Date(_this4.TimeIn).valueOf();

                if (currentNext > startNext && currentNext < endNext) {
                  _this4.currentMeetingInProgress = meeting;
                  _this4.showMeeting = true;
                }
              });
            }

            this.showMeeting = false;
            this.timeLeft = this.indicatorLength; // this.nextMeeting.emit(this.showMeeting);
          }
        }
      }]);

      return CurrentViewComponent;
    }();

    CurrentViewComponent.ɵfac = function CurrentViewComponent_Factory(t) {
      return new (t || CurrentViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meetings_service__WEBPACK_IMPORTED_MODULE_2__["MeetingsService"]));
    };

    CurrentViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CurrentViewComponent,
      selectors: [["app-current-view"]],
      inputs: {
        TimeIn: "TimeIn"
      },
      outputs: {
        nextMeeting: "update"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 24,
      vars: 15,
      consts: [["layout", "column", "layout-align", "center center", 1, "meetingInProgress"], [1, "header"], [1, "divider"], ["width", "100", "height", "10"], ["x1", "25", "y1", "0", "x2", "75", "y2", "0", 2, "stroke", "grey", "stroke-width", "5", "opacity", "0.5"], ["flex", "", 1, "center"], ["layout", "row", "flex", "", 1, "time"], ["height", "7", 2, "transform", "translateY(-5px)"], ["x", "10", "y", "0", "rx", "50", "ry", "50", "height", "7", 2, "stroke", "grey", "fill", "grey", "stroke-width", "5", "opacity", "0.5"], ["x", "10", "y", "0", "rx", "50", "ry", "50", "height", "7", 2, "stroke", "yellow", "stroke-width", "5", "opacity", "1.0", "fill", "yellow"], [1, "organizer"]],
      template: function CurrentViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " current meeting ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "line", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "rect", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "rect", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", ctx.showMeeting ? "open" : "closed")("@flyInOut", ctx.showMeeting ? "open" : "closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentMeetingInProgress == null ? null : ctx.currentMeetingInProgress.Subject, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 9, ctx.currentMeetingInProgress == null ? null : ctx.currentMeetingInProgress.StartTime, "HH:mm"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("width", "", ctx.indicatorLength + 20, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("width", "", ctx.indicatorLength, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("width", "", ctx.timeLeft, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 12, ctx.currentMeetingInProgress == null ? null : ctx.currentMeetingInProgress.EndTime, "HH:mm"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentMeetingInProgress == null ? null : ctx.currentMeetingInProgress.Organizer, " ");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: [".center[_ngcontent-%COMP%] {\n  display: flex;\n  \n  justify-content: center;\n  \n  \n  margin: 0;\n  max-width: var(--current-view-width);\n}\n\n\n.center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  align-self: center;\n  font-size: 10vh;\n  font-weight: bolder;\n  line-height: 0.8em;\n  word-wrap: break-word;\n  position: relative;\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  inline-size: -webkit-min-content;\n  inline-size: -moz-min-content;\n  inline-size: min-content;\n  max-width: inherit;\n  border: 0;\n  outline: 0;\n  transform: translateY(-2vh);\n}\n\n\n.header[_ngcontent-%COMP%]{\nfont-weight: lighter;\nfont-size: 1.6em;\nmax-height: 7.7vh;\nmin-height: 5.5vh;\n}\n\n\n.divider[_ngcontent-%COMP%]{\n  max-height: 1.2vh;\n  margin-top: 1vh;\n  min-height: 2.2vh;\n}\n\n\n.meetingInProgress[_ngcontent-%COMP%]{\n\n  font-variant-caps: all-petite-caps;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  height: var(--current-view-height);\n  text-align: center;\n  color: aliceblue;\n  transform: translateY(10vh);\n  opacity: 0;\n}\n\n\n.time[_ngcontent-%COMP%]{\n  font-size: 3vh;\n}\n\n\n.organizer[_ngcontent-%COMP%]{\n  font-size: 2.5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2N1cnJlbnQtdmlldy9jdXJyZW50LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsU0FBUztFQUNULG9DQUFvQztBQUN0Qzs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQ0FBd0I7RUFBeEIsNkJBQXdCO0VBQXhCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwyQkFBMkI7QUFDN0I7OztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COzs7QUFFQTs7RUFFRSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2N1cnJlbnQtdmlldy9jdXJyZW50LXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4wNzUpOyAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLyogbWluLWhlaWdodDogMjd2aDsgKi9cbiAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cbiAgbWFyZ2luOiAwO1xuICBtYXgtd2lkdGg6IHZhcigtLWN1cnJlbnQtdmlldy13aWR0aCk7XG59XG5cblxuLmNlbnRlciBoMXtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDEwdmg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBpbmxpbmUtc2l6ZTogbWluLWNvbnRlbnQ7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJ2aCk7XG59XG5cbi5oZWFkZXJ7XG5mb250LXdlaWdodDogbGlnaHRlcjtcbmZvbnQtc2l6ZTogMS42ZW07XG5tYXgtaGVpZ2h0OiA3Ljd2aDtcbm1pbi1oZWlnaHQ6IDUuNXZoO1xufVxuXG4uZGl2aWRlcntcbiAgbWF4LWhlaWdodDogMS4ydmg7XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgbWluLWhlaWdodDogMi4ydmg7XG59XG5cbi5tZWV0aW5nSW5Qcm9ncmVzc3tcblxuICBmb250LXZhcmlhbnQtY2FwczogYWxsLXBldGl0ZS1jYXBzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IHZhcigtLWN1cnJlbnQtdmlldy1oZWlnaHQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHZoKTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnRpbWV7XG4gIGZvbnQtc2l6ZTogM3ZoO1xufVxuXG4ub3JnYW5pemVye1xuICBmb250LXNpemU6IDIuNXZoO1xufVxuIl19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [// ...
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0.0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-out')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(-5vh)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          transform: 'translateY(15vh)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease')])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-current-view',
          templateUrl: './current-view.component.html',
          styleUrls: ['./current-view.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [// ...
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0.0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-out')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-5vh)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(15vh)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease')])])]
        }]
      }], function () {
        return [{
          type: _services_meetings_service__WEBPACK_IMPORTED_MODULE_2__["MeetingsService"]
        }];
      }, {
        TimeIn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextMeeting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['update']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/dashboard/dashboard.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
    \*********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppLayoutDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_clock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/clock.service */
    "./src/app/services/clock.service.ts");
    /* harmony import */


    var _current_view_current_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../current-view/current-view.component */
    "./src/app/layout/current-view/current-view.component.ts");
    /* harmony import */


    var _calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../calendar-view/calendar-view.component */
    "./src/app/layout/calendar-view/calendar-view.component.ts");
    /* harmony import */


    var _footer_view_footer_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../footer-view/footer-view.component */
    "./src/app/layout/footer-view/footer-view.component.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(clockService) {
        _classCallCheck(this, DashboardComponent);

        this.clockService = clockService;
        this.meetingReload = false;
        this.currentMeeting = 1;
        this.meetingInProgress = false;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.clockSubscription = this.clockService.getTime().subscribe(function (time) {
            _this5.timeOut = time;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.clockSubscription.unsubscribe();
        }
      }, {
        key: "nextMeeting",
        value: function nextMeeting(event) {
          this.receivedChildMessage = event;
          this.meetingInProgress = event;

          if (this.meetingInProgress) {
            this.meetingReload = this.receivedChildMessage;
          } else {
            if (this.allMeetings !== undefined) {
              this.meetingReload = event;
              this.currentMeeting = --this.currentMeeting;
              this.meeting = this.allMeetings[this.currentMeeting];
              this.allMeetings.pop();
            }
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_clock_service__WEBPACK_IMPORTED_MODULE_1__["ClockService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 4,
      vars: 4,
      consts: [[1, "current-meeting", 3, "TimeIn", "update"], [1, "navbar", 3, "TimeIn"], [1, "footer", 3, "showMeeting", "TimeIn"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-current-view", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function DashboardComponent_Template_app_current_view_update_1_listener($event) {
            return ctx.nextMeeting($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-calendar-view", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("TimeIn", ctx.timeOut);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("TimeIn", ctx.timeOut);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMeeting", ctx.meetingReload)("TimeIn", ctx.timeOut);
        }
      },
      directives: [_current_view_current_view_component__WEBPACK_IMPORTED_MODULE_2__["CurrentViewComponent"], _calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_3__["CalendarViewComponent"], _footer_view_footer_view_component__WEBPACK_IMPORTED_MODULE_4__["FooterViewComponent"]],
      styles: ["app-calendar-view[_ngcontent-%COMP%]{\n  right: 0;\n  top: 0;\n  width: var(--navbar-width);\n  height: 100vh;\n}\n\n.navbar[_ngcontent-%COMP%]{\n  width: var(--navbar-width);\n  height: 100vh;\n  position: fixed;\n  background-color: white;\n}\n\napp-footer-view[_ngcontent-%COMP%]{\n  width: var(--current-view-width);\n  height: var(--footer-height);\n  bottom: 0;\n  left: 0;\n}\n\napp-current-view[_ngcontent-%COMP%]{\n  height: 70vh;\n  width: var(--current-view-width);\n  top: 0;\n  left: 0;\n}\n\n.current-meeting[_ngcontent-%COMP%]{\n  height: var(--current-view-height);\n  width: var(--current-view-width);\n  top: 0;\n  left: 0;\n  position: fixed;\n}\n\n.footer[_ngcontent-%COMP%]{\n  width: var(--current-view-width);\n  height: var(--footer-height);\n  position: fixed;\n  z-index: -1;\n}\n\n[_nghost-%COMP%]{\n  margin-right: 30vw;\n  padding: 1rem;\n  position: fixed;\n}\n\nbody[_ngcontent-%COMP%]{\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar{\n  width: 0.25rem;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-track{\n  background: #fc0;;\n}\n\nbody[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{\n  background: yellow;;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQVE7RUFDUixNQUFNO0VBQ04sMEJBQTBCO0VBQzFCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsU0FBUztFQUNULE9BQU87QUFDVDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxnQ0FBZ0M7RUFDaEMsTUFBTTtFQUNOLE9BQU87RUFDUCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNhbGVuZGFyLXZpZXd7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiB2YXIoLS1uYXZiYXItd2lkdGgpO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubmF2YmFye1xuICB3aWR0aDogdmFyKC0tbmF2YmFyLXdpZHRoKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuYXBwLWZvb3Rlci12aWV3e1xuICB3aWR0aDogdmFyKC0tY3VycmVudC12aWV3LXdpZHRoKTtcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuXG5hcHAtY3VycmVudC12aWV3e1xuICBoZWlnaHQ6IDcwdmg7XG4gIHdpZHRoOiB2YXIoLS1jdXJyZW50LXZpZXctd2lkdGgpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5jdXJyZW50LW1lZXRpbmd7XG4gIGhlaWdodDogdmFyKC0tY3VycmVudC12aWV3LWhlaWdodCk7XG4gIHdpZHRoOiB2YXIoLS1jdXJyZW50LXZpZXctd2lkdGgpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmZvb3RlcntcbiAgd2lkdGg6IHZhcigtLWN1cnJlbnQtdmlldy13aWR0aCk7XG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogLTE7XG59XG5cbjpob3N0e1xuICBtYXJnaW4tcmlnaHQ6IDMwdnc7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuYm9keXtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhcntcbiAgd2lkdGg6IDAuMjVyZW07XG59XG5cbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xuICBiYWNrZ3JvdW5kOiAjZmMwOztcbn1cblxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XG4gIGJhY2tncm91bmQ6IHllbGxvdzs7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _services_clock_service__WEBPACK_IMPORTED_MODULE_1__["ClockService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/details-view/details-view.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layout/details-view/details-view.component.ts ***!
    \***************************************************************/

  /*! exports provided: DetailsViewComponent */

  /***/
  function srcAppLayoutDetailsViewDetailsViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsViewComponent", function () {
      return DetailsViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_sidenav_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/sidenav-details.service */
    "./src/app/services/sidenav-details.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var _c0 = ["rightSidenav"];

    function DetailsViewComponent_mat_expansion_panel_32_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0( ", ctx_r2.meetingData == null ? null : ctx_r2.meetingData.Participants == null ? null : ctx_r2.meetingData.Participants.length, " )");
      }
    }

    function DetailsViewComponent_mat_expansion_panel_32_ng_container_11_mat_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var participant_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", participant_r5 == null ? null : participant_r5.Name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", participant_r5 == null ? null : participant_r5.Title, " ");
      }
    }

    function DetailsViewComponent_mat_expansion_panel_32_ng_container_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailsViewComponent_mat_expansion_panel_32_ng_container_11_mat_card_1_Template, 8, 2, "mat-card", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.meetingData == null ? null : ctx_r3.meetingData.Participants);
      }
    }

    function DetailsViewComponent_mat_expansion_panel_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-panel-description", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetailsViewComponent_mat_expansion_panel_32_span_10_Template, 2, 1, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailsViewComponent_mat_expansion_panel_32_ng_container_11_Template, 2, 1, "ng-container", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, " participants "), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.meetingData == null ? null : ctx_r1.meetingData.Participants == null ? null : ctx_r1.meetingData.Participants.length) > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.meetingData == null ? null : ctx_r1.meetingData.Participants);
      }
    }

    var DetailsViewComponent = /*#__PURE__*/function () {
      // public meetingSubscription: Subscription;
      // public toggleActive = false;
      function DetailsViewComponent( // private meetingsService: MeetingsService,
      sidenavService) {
        _classCallCheck(this, DetailsViewComponent);

        this.sidenavService = sidenavService;
        this.activeMeeting = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.panelOpenState = false;
      }

      _createClass(DetailsViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.sidenavService.setSidenav(this.sidenav);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(meeting) {
          this.activeMeeting.next(this.meetingData); // this.toggleActive = !this.toggleActive ;
          // this.toggleRightSidenav();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// this.meetingSubscription.unsubscribe();
        }
      }, {
        key: "toggleRightSidenav",
        value: function toggleRightSidenav() {
          this.activeMeeting.next(this.meetingData);
          this.sidenav.toggle();
        }
      }]);

      return DetailsViewComponent;
    }();

    DetailsViewComponent.ɵfac = function DetailsViewComponent_Factory(t) {
      return new (t || DetailsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_sidenav_details_service__WEBPACK_IMPORTED_MODULE_3__["SidenavService"]));
    };

    DetailsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetailsViewComponent,
      selectors: [["app-details-view"]],
      viewQuery: function DetailsViewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        }
      },
      inputs: {
        meetingData: "meetingData",
        toggleActive: "toggleActive"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 47,
      vars: 29,
      consts: [[1, "scroll"], ["mode", "over", "position", "end", 1, "rightSidenav", 2, "right", "auto !important", "position", "auto !important", "background-color", "white", 3, "fixedInViewport", "fixedTopGap"], ["rightSidenav", ""], [1, "navigation", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "white", "width", "60px", "height", "40px", 1, "arrow-back"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"], [1, "meeting-subject"], [1, "meeting-description"], [3, "disabled"], [1, "row"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "black", "width", "30px", "height", "30px"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"], ["xmlns", "http://www.w3.org/2000/svg", "height", "30", "viewBox", "0 0 24 24", "width", "30"], ["d", "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"], ["d", "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"], ["style", "cursor: pointer;", 4, "ngIf"], [3, "disabled", "opened"], ["d", "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"], [1, "desc"], [2, "cursor", "pointer"], ["d", "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"], [2, "display", "block"], [2, "display", "inline-block"], [4, "ngIf"], ["class", "person", 4, "ngFor", "ngForOf"], [1, "person"], [1, "home-card-content"], ["mat-card-avatar", "", 1, "avatar"], [1, "flex"], [1, "title"], [1, "subtitle"]],
      template: function DetailsViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsViewComponent_Template_div_click_3_listener() {
            return ctx.toggleRightSidenav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-expansion-panel", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-expansion-panel-header", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-expansion-panel", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-expansion-panel-header", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DetailsViewComponent_mat_expansion_panel_32_Template, 12, 5, "mat-expansion-panel", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-expansion-panel", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function DetailsViewComponent_Template_mat_expansion_panel_opened_33_listener() {
            return ctx.panelOpenState;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-expansion-panel-header", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-panel-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "DIDN'T EXPECT THIS.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixedInViewport", true)("fixedTopGap", 0)("@openClose", ctx.toggleActive ? "open" : "closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrow", ctx.toggleActive ? "open" : "closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 14, ctx.meetingData == null ? null : ctx.meetingData.Subject));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 18, ctx.meetingData == null ? null : ctx.meetingData.StartTime, "EEEE, d.M.yyyy")), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 21, ctx.meetingData == null ? null : ctx.meetingData.StartTime, "HH:mm"), " TO ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 24, ctx.meetingData == null ? null : ctx.meetingData.EndTime, "HH:mm"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.meetingData == null ? null : ctx.meetingData.Participants);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 27, " description "), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.meetingData == null ? null : ctx.meetingData.Description, " ");
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelDescription"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
      styles: ["[_nghost-%COMP%]{\n  z-index: 999;\n  width: inherit;\n}\n\n\n.mat-sidenav[_ngcontent-%COMP%]{\n  width: inherit;\n}\n\n\n.mat-sidenav-container[_ngcontent-%COMP%]{\n  z-index: 999;\n  width: inherit;\n}\n\n\n.rightSidenav[_ngcontent-%COMP%] {\n\tz-index: 999;\n}\n\n\n.desc[_ngcontent-%COMP%]{\n  padding-left: 5vw;\n  padding-right: 5vw;\n  justify-content: space-evenly;\n  text-align: left;\n}\n\n\n.navigation[_ngcontent-%COMP%]{\n  cursor: pointer;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  height: 5rem;\n  color: var(--yellow);\n  background-color: var(--yellow);\n  display: flex;\n}\n\n\n.meeting-subject[_ngcontent-%COMP%]{\n  color:black;\n  font-size:x-large;\n  align-self:center;\n  position:relative;\n  margin-left:3vw;\n}\n\n\n.arrow-back[_ngcontent-%COMP%]{\n  margin: 0.5em;\n  margin-left: 1em !important;\n  z-index: inherit;\n  align-self: center;\n}\n\n\n@media only screen and (max-width: 1420px) {\n  .meeting-subject[_ngcontent-%COMP%]{\n    color: black;\n    font-size: large;\n    align-self: center;\n    position: relative;\n    margin-left: 0;\n  }\n}\n\n\n.desc[_ngcontent-%COMP%]{\n  margin-bottom: 20vh;\n}\n\n\n.row[_ngcontent-%COMP%]{\n  margin-top: 1em;\n  \n}\n\n\n.person[_ngcontent-%COMP%]{\n  padding-left: 3.3vw;\n  padding-right: 5vw;\n  justify-content: space-evenly;\n  text-align: left;\n  grid-template-columns: 2;\n  grid-template-rows: 2;\n}\n\n\n.avatar[_ngcontent-%COMP%]{\n  grid-row: 1/2;\n  grid-column: 1;\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n\n.home-card-content[_ngcontent-%COMP%] {\n\n  grid-row: 2;\n  grid-column: 2;\n  display: flex;\n  justify-content: left;\n\n  margin-left: 1em;\n}\n\n\n.title[_ngcontent-%COMP%]{\n  grid-row: 1;\n  grid-column: 2;\n}\n\n\n.subtitle[_ngcontent-%COMP%]{\n  grid-row: 2;\n  grid-column: 2;\n}\n\n\n.flex[_ngcontent-%COMP%]{\n  margin-left: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2RldGFpbHMtdmlldy9kZXRhaWxzLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOzs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7OztBQUVBO0NBQ0MsWUFBWTtBQUNiOzs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsTUFBTTtFQUNOLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtBQUNGOzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2Y7K0JBQzZCO0FBQy9COzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4Qjs7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2IscUJBQXFCOztFQUVyQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2RldGFpbHMtdmlldy9kZXRhaWxzLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuXG5cbi5tYXQtc2lkZW5hdntcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5tYXQtc2lkZW5hdi1jb250YWluZXJ7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5yaWdodFNpZGVuYXYge1xuXHR6LWluZGV4OiA5OTk7XG59XG5cblxuLmRlc2N7XG4gIHBhZGRpbmctbGVmdDogNXZ3O1xuICBwYWRkaW5nLXJpZ2h0OiA1dnc7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubmF2aWdhdGlvbntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB6LWluZGV4OiAxMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDVyZW07XG4gIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWVldGluZy1zdWJqZWN0e1xuICBjb2xvcjpibGFjaztcbiAgZm9udC1zaXplOngtbGFyZ2U7XG4gIGFsaWduLXNlbGY6Y2VudGVyO1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6M3Z3O1xufVxuXG4uYXJyb3ctYmFja3tcbiAgbWFyZ2luOiAwLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDFlbSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiBpbmhlcml0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQyMHB4KSB7XG4gIC5tZWV0aW5nLXN1YmplY3R7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4uZGVzY3tcbiAgbWFyZ2luLWJvdHRvbTogMjB2aDtcbn1cblxuLnJvd3tcbiAgbWFyZ2luLXRvcDogMWVtO1xuICAvKiBib3JkZXItdG9wOiByZ2JhKDIxOSwgMjE5LCAyMTksIDAuMDg5KTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaW5zZXQ7ICovXG59XG5cbi5wZXJzb257XG4gIHBhZGRpbmctbGVmdDogMy4zdnc7XG4gIHBhZGRpbmctcmlnaHQ6IDV2dztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyO1xufVxuXG4uYXZhdGFye1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5ob21lLWNhcmQtY29udGVudCB7XG5cbiAgZ3JpZC1yb3c6IDI7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG5cbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLnRpdGxle1xuICBncmlkLXJvdzogMTtcbiAgZ3JpZC1jb2x1bW46IDI7XG59XG5cbi5zdWJ0aXRsZXtcbiAgZ3JpZC1yb3c6IDI7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG4uZmxleHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbiJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [// ...
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s ease')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('arrow', [// ...
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s ease-in')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease-in')])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-details-view',
          templateUrl: './details-view.component.html',
          styleUrls: ['./details-view.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('openClose', [// ...
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s ease')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('arrow', [// ...
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s ease-in')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s ease-in')])])]
        }]
      }], function () {
        return [{
          type: _services_sidenav_details_service__WEBPACK_IMPORTED_MODULE_3__["SidenavService"]
        }];
      }, {
        meetingData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['rightSidenav']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layout/footer-view/footer-view.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layout/footer-view/footer-view.component.ts ***!
    \*************************************************************/

  /*! exports provided: FooterViewComponent */

  /***/
  function srcAppLayoutFooterViewFooterViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterViewComponent", function () {
      return FooterViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _services_meetings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/meetings.service */
    "./src/app/services/meetings.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function FooterViewComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@flyInOut", ctx_r0.showMeeting ? "open" : "closed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, ctx_r0.meetingData[i_r2].StartTime, "HH:mm"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 8, ctx_r0.meetingData[i_r2].EndTime, "HH:mm"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.meetingData[i_r2].Subject, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.meetingData[i_r2].Organizer, " ");
      }
    }

    var FooterViewComponent = /*#__PURE__*/function () {
      function FooterViewComponent(meetingsService) {
        _classCallCheck(this, FooterViewComponent);

        this.meetingsService = meetingsService;
      }

      _createClass(FooterViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.meetingSubscription = this.meetingsService.getMeetings().subscribe(function (currentMeetings) {
            _this6.meetingData = currentMeetings.reverse();
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.updateMeetings();
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          return index; // or item.id
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.meetingSubscription.unsubscribe();
        }
      }, {
        key: "updateMeetings",
        value: function updateMeetings() {
          var _this7 = this;

          if (this.meetingData !== undefined) {
            this.meetingData.forEach(function (meeting, index) {
              var endNext = new Date(meeting === null || meeting === void 0 ? void 0 : meeting.EndTime).valueOf();
              var startNext = new Date(meeting === null || meeting === void 0 ? void 0 : meeting.StartTime).valueOf();
              var currentNext = new Date(_this7.TimeIn).valueOf();

              if (currentNext > endNext) {
                _this7.meetingData = _this7.meetingData.filter(function (_, filterIndex) {
                  return filterIndex !== index;
                });
              }

              if (currentNext > startNext && currentNext < endNext) {
                _this7.meetingData = _this7.meetingData.filter(function (_, filterIndex) {
                  return filterIndex !== index;
                });
              }
            });
          }
        }
      }]);

      return FooterViewComponent;
    }();

    FooterViewComponent.ɵfac = function FooterViewComponent_Factory(t) {
      return new (t || FooterViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_meetings_service__WEBPACK_IMPORTED_MODULE_2__["MeetingsService"]));
    };

    FooterViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterViewComponent,
      selectors: [["app-footer-view"]],
      inputs: {
        TimeIn: "TimeIn",
        showMeeting: "showMeeting"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 2,
      consts: [[2, "position", "relative", "width", "100%", "height", "inherit"], [1, "center"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [1, "meetingInFooter"], [1, "clock"], [1, "subject"], [1, "organizer"]],
      template: function FooterViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterViewComponent_ng_template_2_Template, 9, 11, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.meetingData)("ngForTrackBy", ctx.trackByFn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: [".center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  height: inherit;\n  background-color:rgba(0, 0, 0, 0.075);\n  justify-content: flex-end;\n  align-items: center;\n  align-content: center;\n  padding-left: 5vw;\n  \n}\n\n\n.center[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  align-self: center;\n}\n\n\n.meetingInFooter[_ngcontent-%COMP%]{\n  color: rgb(255, 255, 255);\n  min-width: 20vw;\n  max-width: 30vw;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n\n}\n\n\n@media only screen and (max-width: 1400px) {\n\n  .meetingInFooter[_ngcontent-%COMP%]{\n    color: rgb(255, 255, 255);\n    min-width: 18vw;\n    max-width: 30vw;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n  }\n\n}\n\n\n.clock[_ngcontent-%COMP%]{\n  color: rgba(151, 151, 151, 1);\n  font-size: medium;\n  font-weight: 600;\n  margin-bottom: 1vh;\n}\n\n\n.subject[_ngcontent-%COMP%]{\n  font-size: larger;\n  font-weight: bolder;\n  margin-bottom: 1vh;\n}\n\n\n.organizer[_ngcontent-%COMP%]{\n  color: rgba(151, 151, 151, 1);\n  font-size: medium;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci12aWV3L2Zvb3Rlci12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7O0FBRXJCOzs7QUFFQTs7RUFFRTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZUFBZTtJQUNmLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0VBQ3JCOztBQUVGOzs7QUFJQTtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXItdmlldy9mb290ZXItdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNXZ3O1xuICAvKiBwYWRkaW5nLXRvcDogNnZoOyAqL1xufVxuXG5cbi5jZW50ZXIgaDF7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm1lZXRpbmdJbkZvb3RlcntcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgbWluLXdpZHRoOiAyMHZ3O1xuICBtYXgtd2lkdGg6IDMwdnc7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcblxuICAubWVldGluZ0luRm9vdGVye1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgbWluLXdpZHRoOiAxOHZ3O1xuICAgIG1heC13aWR0aDogMzB2dztcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICB9XG5cbn1cblxuXG5cbi5jbG9ja3tcbiAgY29sb3I6IHJnYmEoMTUxLCAxNTEsIDE1MSwgMSk7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxdmg7XG59XG5cbi5zdWJqZWN0e1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xufVxuXG4ub3JnYW5pemVye1xuICBjb2xvcjogcmdiYSgxNTEsIDE1MSwgMTUxLCAxKTtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          offset: 0.3
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          offset: 0.7,
          transform: 'translateY(15vh)',
          opacity: 0.0
        })]))])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer-view',
          templateUrl: './footer-view.component.html',
          styleUrls: ['./footer-view.component.css'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            offset: 0.3
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            offset: 0.7,
            transform: 'translateY(15vh)',
            opacity: 0.0
          })]))])])]
        }]
      }], function () {
        return [{
          type: _services_meetings_service__WEBPACK_IMPORTED_MODULE_2__["MeetingsService"]
        }];
      }, {
        TimeIn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showMeeting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"]], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/clock.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/clock.service.ts ***!
    \*******************************************/

  /*! exports provided: ClockService */

  /***/
  function srcAppServicesClockServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClockService", function () {
      return ClockService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ClockService = /*#__PURE__*/function () {
      function ClockService() {
        _classCallCheck(this, ClockService);

        this.time = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (tick) {
          return new Date();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
      }

      _createClass(ClockService, [{
        key: "getTime",
        value: function getTime() {
          return this.time;
        }
      }]);

      return ClockService;
    }();

    ClockService.ɵfac = function ClockService_Factory(t) {
      return new (t || ClockService)();
    };

    ClockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ClockService,
      factory: ClockService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClockService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/meetings.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/meetings.service.ts ***!
    \**********************************************/

  /*! exports provided: MeetingsService */

  /***/
  function srcAppServicesMeetingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeetingsService", function () {
      return MeetingsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MeetingsService = /*#__PURE__*/function () {
      function MeetingsService(http) {
        _classCallCheck(this, MeetingsService);

        this.http = http;
        this.meetingsUrl = './assets/meetings.json'; // URL to web api

        this.conferenceRoomUrl = './assets/conference-room.json';
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }
      /** GET meetings from the "server" */


      _createClass(MeetingsService, [{
        key: "getMeetings",
        value: function getMeetings() {
          return this.http.get(this.meetingsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return console.log('fetched meetings');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getMeeting', [])));
        }
      }, {
        key: "getRoomName",
        value: function getRoomName() {
          return this.http.get(this.conferenceRoomUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            return console.log('fetched meetings');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getRoomData')));
        }
      }, {
        key: "getMeeting",
        value: function getMeeting() {
          return this.getMeetings();
        }
      }, {
        key: "getConferenceRoomName",
        value: function getConferenceRoomName() {
          return this.getRoomName();
        }
        /**
         * Handle Http operation that failed.
         * Let the app continue.
         * @param operation - name of the operation that failed
         * @param result - optional value to return as the observable result
         */

      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption

            console.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }]);

      return MeetingsService;
    }();

    MeetingsService.ɵfac = function MeetingsService_Factory(t) {
      return new (t || MeetingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    MeetingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MeetingsService,
      factory: MeetingsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MeetingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/sidenav-details.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/sidenav-details.service.ts ***!
    \*****************************************************/

  /*! exports provided: SidenavService */

  /***/
  function srcAppServicesSidenavDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavService", function () {
      return SidenavService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SidenavService = /*#__PURE__*/function () {
      function SidenavService() {
        _classCallCheck(this, SidenavService);
      }

      _createClass(SidenavService, [{
        key: "setSidenav",
        value: function setSidenav(sidenav) {
          this.sidenav = sidenav;
        }
      }, {
        key: "open",
        value: function open() {
          return this.sidenav.open();
        }
      }, {
        key: "isOpen",
        value: function isOpen() {
          return this.sidenav.opened;
        }
      }, {
        key: "close",
        value: function close() {
          return this.sidenav.close();
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.sidenav.toggle();
        }
      }]);

      return SidenavService;
    }();

    SidenavService.ɵfac = function SidenavService_Factory(t) {
      return new (t || SidenavService)();
    };

    SidenavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SidenavService,
      factory: SidenavService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Maiska\Documents\Kouluhommat\SYKSY 2020\OPINNÄYTE\VIIMESET\conference-app-0.9-beta\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map