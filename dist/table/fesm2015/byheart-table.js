import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵɵnextContext, ɵɵtemplate, ɵɵproperty, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵclassProp, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵNgOnChangesFeature, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgForOf, NgIf, CommonModule } from '@angular/common';

class TableService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    getTableList(url) {
        return this._httpClient.get(url + '/comments');
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(ɵɵinject(HttpClient)); };
TableService.ɵprov = ɵɵdefineInjectable({ token: TableService, factory: TableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: HttpClient }]; }, null); })();

function TableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const header_r3 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", header_r3, " ");
} }
function TableComponent_tr_10_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const header_r6 = ctx.$implicit;
    const item_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r4[header_r6], " ");
} }
function TableComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, TableComponent_tr_10_td_1_Template, 2, 1, "td", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.tableHeaders);
} }
function TableComponent_ng_container_11_div_1_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 9);
    ɵɵlistener("click", function TableComponent_ng_container_11_div_1_ng_container_5_li_1_Template_li_click_0_listener() { ɵɵrestoreView(_r15); const i_r11 = ɵɵnextContext().index; const ctx_r13 = ɵɵnextContext(3); return ctx_r13.updatePage(i_r11 + 1); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext();
    const pageFlag_r10 = ctx_r16.$implicit;
    const i_r11 = ctx_r16.index;
    ɵɵclassProp("active", pageFlag_r10);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", i_r11 + 1, " ");
} }
function TableComponent_ng_container_11_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableComponent_ng_container_11_div_1_ng_container_5_li_1_Template, 2, 3, "li", 10);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", i_r11 >= ctx_r9.page - 2 && i_r11 < ctx_r9.page + 2);
} }
function TableComponent_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵelementStart(1, "div", 8);
    ɵɵelementStart(2, "ul");
    ɵɵelementStart(3, "li", 9);
    ɵɵlistener("click", function TableComponent_ng_container_11_div_1_Template_li_click_3_listener() { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(2); return ctx_r17.updatePage("prev"); });
    ɵɵtext(4, " Previous Page ");
    ɵɵelementEnd();
    ɵɵtemplate(5, TableComponent_ng_container_11_div_1_ng_container_5_Template, 2, 1, "ng-container", 4);
    ɵɵelementStart(6, "li", 9);
    ɵɵlistener("click", function TableComponent_ng_container_11_div_1_Template_li_click_6_listener() { ɵɵrestoreView(_r18); const ctx_r19 = ɵɵnextContext(2); return ctx_r19.updatePage("next"); });
    ɵɵtext(7, " Next Page ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵclassProp("disabled", ctx_r8.page < 2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r8.paginationArray);
    ɵɵadvance(1);
    ɵɵclassProp("disabled", ctx_r8.page === (ctx_r8.paginationArray == null ? null : ctx_r8.paginationArray.length));
} }
function TableComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableComponent_ng_container_11_div_1_Template, 8, 5, "div", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.showPagination);
} }
class TableComponent {
    constructor(_tableService) {
        this._tableService = _tableService;
        this.currentPage = 1;
        this.showPagination = false;
        this.page = 1;
    }
    ngOnInit() {
        this.getTableData();
    }
    ngOnChanges(changes) {
        console.log(changes);
    }
    createPagination() {
        this.limit = this.CONFIG ? this.CONFIG['LIMIT'] : 10;
        this.showPagination = this.tableDataCopy.length > this.limit;
        if (this.showPagination) {
            const startIndex = (this.page - 1) * this.limit;
            const endIndex = this.page * this.limit;
            this.tableData = this.tableDataCopy.slice(startIndex, endIndex);
            this.paginationCount = Math.floor(this.tableDataCopy.length / this.limit);
            this.paginationArray = new Array(this.paginationCount).fill(false);
            this.paginationArray[this.page - 1] = true;
        }
    }
    updatePage(page) {
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
    }
    getTableData() {
        this._tableService
            .getTableList(this.CONFIG['BASE_URL'])
            .subscribe((res) => {
            this.tableDataCopy = res;
            this.tableHeaders = Object.keys(this.tableDataCopy[0]);
            this.createPagination();
        });
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(ɵɵdirectiveInject(TableService)); };
TableComponent.ɵcmp = ɵɵdefineComponent({ type: TableComponent, selectors: [["custom-table-lib"]], inputs: { CONFIG: "CONFIG" }, features: [ɵɵNgOnChangesFeature], decls: 12, vars: 3, consts: [[1, "container-fluid", "table-container"], [1, "row"], [1, "col-sm-12"], [1, "table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "container"], [3, "click"], [3, "active", "click", 4, "ngIf"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "A custom angular library for tables");
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 0);
        ɵɵelementStart(3, "div", 1);
        ɵɵelementStart(4, "div", 2);
        ɵɵelementStart(5, "table", 3);
        ɵɵelementStart(6, "thead");
        ɵɵelementStart(7, "tr");
        ɵɵtemplate(8, TableComponent_th_8_Template, 2, 1, "th", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "tbody");
        ɵɵtemplate(10, TableComponent_tr_10_Template, 2, 1, "tr", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(11, TableComponent_ng_container_11_Template, 2, 1, "ng-container", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(8);
        ɵɵproperty("ngForOf", ctx.tableHeaders);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.tableData);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", (ctx.tableData == null ? null : ctx.tableData.length) > 0);
    } }, directives: [NgForOf, NgIf], styles: ["@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\");.table-container[_ngcontent-%COMP%]{background:#fff;padding:30px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border:0;border-collapse:collapse}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#3e3c89;border:0;color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:0}.pagination[_ngcontent-%COMP%]{margin:15px 0;overflow:hidden;width:100%}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{text-align:center;width:100%}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background:#fff;display:inline-block;list-style-type:none;margin:5px auto;padding:0}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;padding:8px 15px}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#3e3c89;border:1px solid #d0d0d0;border-radius:.5rem;border-radius:50%;color:#fff!important;pointer-events:none}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{
                selector: 'custom-table-lib',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss'],
            }]
    }], function () { return [{ type: TableService }]; }, { CONFIG: [{
            type: Input,
            args: ['CONFIG']
        }] }); })();

class ByeartTableModule {
}
ByeartTableModule.ɵmod = ɵɵdefineNgModule({ type: ByeartTableModule });
ByeartTableModule.ɵinj = ɵɵdefineInjector({ factory: function ByeartTableModule_Factory(t) { return new (t || ByeartTableModule)(); }, providers: [TableService], imports: [[HttpClientModule, CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ByeartTableModule, { declarations: [TableComponent], imports: [HttpClientModule, CommonModule], exports: [TableComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ByeartTableModule, [{
        type: NgModule,
        args: [{
                declarations: [TableComponent],
                imports: [HttpClientModule, CommonModule],
                providers: [TableService],
                exports: [TableComponent],
            }]
    }], null, null); })();

/*
 * Public API Surface of table
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ByeartTableModule, TableComponent, TableService };
//# sourceMappingURL=byheart-table.js.map
