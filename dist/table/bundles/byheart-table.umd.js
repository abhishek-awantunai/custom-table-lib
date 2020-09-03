(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@byheart/table', ['exports', '@angular/core', '@angular/common/http', '@angular/common'], factory) :
    (global = global || self, factory((global.byheart = global.byheart || {}, global.byheart.table = {}), global.ng.core, global.ng.common.http, global.ng.common));
}(this, (function (exports, i0, i1, i2) { 'use strict';

    var TableService = /** @class */ (function () {
        function TableService(_httpClient) {
            this._httpClient = _httpClient;
        }
        TableService.prototype.getTableList = function (url) {
            return this._httpClient.get(url + '/comments');
        };
        return TableService;
    }());
    TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(i0.ɵɵinject(i1.HttpClient)); };
    TableService.ɵprov = i0.ɵɵdefineInjectable({ token: TableService, factory: TableService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TableService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1.HttpClient }]; }, null);
    })();

    function TableComponent_th_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 7);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var header_r3 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", ctx_r0.config == null ? null : ctx_r0.config.styleConfig == null ? null : ctx_r0.config.styleConfig.theme);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", header_r3, " ");
        }
    }
    function TableComponent_tr_8_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var header_r6 = ctx.$implicit;
            var item_r4 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", item_r4[header_r6], " ");
        }
    }
    function TableComponent_tr_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵtemplate(1, TableComponent_tr_8_td_1_Template, 2, 1, "td", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r1.tableHeaders);
        }
    }
    function TableComponent_ng_container_9_div_1_ng_container_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 11);
            i0.ɵɵlistener("click", function TableComponent_ng_container_9_div_1_ng_container_5_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r15_1); var i_r11 = i0.ɵɵnextContext().index; var ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.updatePage(i_r11 + 1); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext();
            var pageFlag_r10 = ctx_r16.$implicit;
            var i_r11 = ctx_r16.index;
            var ctx_r12 = i0.ɵɵnextContext(3);
            i0.ɵɵstyleProp("background", pageFlag_r10 ? ctx_r12.config == null ? null : ctx_r12.config.styleConfig == null ? null : ctx_r12.config.styleConfig.theme == null ? null : ctx_r12.config.styleConfig.theme.background : "");
            i0.ɵɵclassProp("active", pageFlag_r10);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i_r11 + 1, " ");
        }
    }
    function TableComponent_ng_container_9_div_1_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, TableComponent_ng_container_9_div_1_ng_container_5_li_1_Template, 2, 5, "li", 12);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var i_r11 = ctx.index;
            var ctx_r9 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i_r11 >= ctx_r9.page - 2 && i_r11 < ctx_r9.page + 2);
        }
    }
    function TableComponent_ng_container_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵelementStart(1, "div", 10);
            i0.ɵɵelementStart(2, "ul");
            i0.ɵɵelementStart(3, "li", 11);
            i0.ɵɵlistener("click", function TableComponent_ng_container_9_div_1_Template_li_click_3_listener() { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.updatePage("prev"); });
            i0.ɵɵtext(4, " Previous Page ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, TableComponent_ng_container_9_div_1_ng_container_5_Template, 2, 1, "ng-container", 5);
            i0.ɵɵelementStart(6, "li", 11);
            i0.ɵɵlistener("click", function TableComponent_ng_container_9_div_1_Template_li_click_6_listener() { i0.ɵɵrestoreView(_r18_1); var ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.updatePage("next"); });
            i0.ɵɵtext(7, " Next Page ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("disabled", ctx_r8.page < 2);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r8.paginationArray);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("disabled", ctx_r8.page === (ctx_r8.paginationArray == null ? null : ctx_r8.paginationArray.length));
        }
    }
    function TableComponent_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, TableComponent_ng_container_9_div_1_Template, 8, 5, "div", 8);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.showPagination);
        }
    }
    var TableComponent = /** @class */ (function () {
        function TableComponent(_tableService) {
            this._tableService = _tableService;
            this.currentPage = 1;
            this.showPagination = false;
            this.page = 1;
        }
        TableComponent.prototype.ngOnInit = function () {
            this.getTableData();
        };
        TableComponent.prototype.ngOnChanges = function (changes) {
            console.log(changes);
        };
        TableComponent.prototype.createPagination = function () {
            this.limit = this.config ? this.config['tableConfig']['limit'] : 10;
            this.showPagination = this.tableDataCopy.length > this.limit;
            if (this.showPagination) {
                var startIndex = (this.page - 1) * this.limit;
                var endIndex = this.page * this.limit;
                this.tableData = this.tableDataCopy.slice(startIndex, endIndex);
                this.paginationCount = Math.floor(this.tableDataCopy.length / this.limit);
                this.paginationArray = new Array(this.paginationCount).fill(false);
                this.paginationArray[this.page - 1] = true;
            }
        };
        TableComponent.prototype.updatePage = function (page) {
            if (page === 'prev') {
                this.page -= 1;
            }
            else if (page === 'next') {
                this.page += 1;
            }
            else {
                this.page = page;
            }
            console.log(this.page);
            this.createPagination();
        };
        TableComponent.prototype.getTableData = function () {
            var _this = this;
            this._tableService.getTableList(this.config['api']).subscribe(function (res) {
                _this.tableDataCopy = res;
                _this.tableHeaders = Object.keys(_this.tableDataCopy[0]);
                _this.createPagination();
            });
        };
        return TableComponent;
    }());
    TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(i0.ɵɵdirectiveInject(TableService)); };
    TableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["custom-table-lib"]], inputs: { config: "config" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 3, consts: [[1, "container-fluid", "table-container"], [1, "row"], [1, "col-sm-12"], [1, "table"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "ngStyle"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "container"], [3, "click"], [3, "active", "background", "click", 4, "ngIf"]], template: function TableComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "table", 3);
                i0.ɵɵelementStart(4, "thead");
                i0.ɵɵelementStart(5, "tr");
                i0.ɵɵtemplate(6, TableComponent_th_6_Template, 2, 2, "th", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "tbody");
                i0.ɵɵtemplate(8, TableComponent_tr_8_Template, 2, 1, "tr", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, TableComponent_ng_container_9_Template, 2, 1, "ng-container", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngForOf", ctx.tableHeaders);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.tableData);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", (ctx.tableData == null ? null : ctx.tableData.length) > 0);
            }
        }, directives: [i2.NgForOf, i2.NgIf, i2.NgStyle], styles: ["@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\");.table-container[_ngcontent-%COMP%]{background:#fff;padding:30px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border:0;border-collapse:collapse}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:0;color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:0}.pagination[_ngcontent-%COMP%]{margin:15px 0;overflow:hidden;width:100%}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{text-align:center;width:100%}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background:#fff;display:inline-block;list-style-type:none;margin:5px auto;padding:0}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;padding:8px 15px}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border:1px solid #d0d0d0;border-radius:.5rem;border-radius:50%;color:#fff!important;pointer-events:none}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(TableComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'custom-table-lib',
                        templateUrl: './table.component.html',
                        styleUrls: ['./table.component.scss'],
                    }]
            }], function () { return [{ type: TableService }]; }, { config: [{
                    type: i0.Input,
                    args: ['config']
                }] });
    })();

    var ByeartTableModule = /** @class */ (function () {
        function ByeartTableModule() {
        }
        return ByeartTableModule;
    }());
    ByeartTableModule.ɵmod = i0.ɵɵdefineNgModule({ type: ByeartTableModule });
    ByeartTableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ByeartTableModule_Factory(t) { return new (t || ByeartTableModule)(); }, providers: [TableService], imports: [[i1.HttpClientModule, i2.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ByeartTableModule, { declarations: [TableComponent], imports: [i1.HttpClientModule, i2.CommonModule], exports: [TableComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ByeartTableModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [TableComponent],
                        imports: [i1.HttpClientModule, i2.CommonModule],
                        providers: [TableService],
                        exports: [TableComponent],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of table
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ByeartTableModule = ByeartTableModule;
    exports.TableComponent = TableComponent;
    exports.TableService = TableService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=byheart-table.umd.js.map
