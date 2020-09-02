import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./table.service";
import * as i2 from "@angular/common";
function TableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", header_r3, " ");
} }
function TableComponent_tr_10_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r6 = ctx.$implicit;
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r4[header_r6], " ");
} }
function TableComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, TableComponent_tr_10_td_1_Template, 2, 1, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.tableHeaders);
} }
function TableComponent_ng_container_11_div_1_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 9);
    i0.ɵɵlistener("click", function TableComponent_ng_container_11_div_1_ng_container_5_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r15); const i_r11 = i0.ɵɵnextContext().index; const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.updatePage(i_r11 + 1); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext();
    const pageFlag_r10 = ctx_r16.$implicit;
    const i_r11 = ctx_r16.index;
    i0.ɵɵclassProp("active", pageFlag_r10);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i_r11 + 1, " ");
} }
function TableComponent_ng_container_11_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_11_div_1_ng_container_5_li_1_Template, 2, 3, "li", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r11 >= ctx_r9.page - 2 && i_r11 < ctx_r9.page + 2);
} }
function TableComponent_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵelementStart(3, "li", 9);
    i0.ɵɵlistener("click", function TableComponent_ng_container_11_div_1_Template_li_click_3_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.updatePage("prev"); });
    i0.ɵɵtext(4, " Previous Page ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TableComponent_ng_container_11_div_1_ng_container_5_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementStart(6, "li", 9);
    i0.ɵɵlistener("click", function TableComponent_ng_container_11_div_1_Template_li_click_6_listener() { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.updatePage("next"); });
    i0.ɵɵtext(7, " Next Page ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("disabled", ctx_r8.page < 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r8.paginationArray);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("disabled", ctx_r8.page === (ctx_r8.paginationArray == null ? null : ctx_r8.paginationArray.length));
} }
function TableComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_11_div_1_Template, 8, 5, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.showPagination);
} }
export class TableComponent {
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
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(i0.ɵɵdirectiveInject(i1.TableService)); };
TableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["custom-table-lib"]], inputs: { CONFIG: "CONFIG" }, features: [i0.ɵɵNgOnChangesFeature], decls: 12, vars: 3, consts: [[1, "container-fluid", "table-container"], [1, "row"], [1, "col-sm-12"], [1, "table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "container"], [3, "click"], [3, "active", "click", 4, "ngIf"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "A custom angular library for tables");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 0);
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵelementStart(5, "table", 3);
        i0.ɵɵelementStart(6, "thead");
        i0.ɵɵelementStart(7, "tr");
        i0.ɵɵtemplate(8, TableComponent_th_8_Template, 2, 1, "th", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "tbody");
        i0.ɵɵtemplate(10, TableComponent_tr_10_Template, 2, 1, "tr", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, TableComponent_ng_container_11_Template, 2, 1, "ng-container", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.tableHeaders);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.tableData);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.tableData == null ? null : ctx.tableData.length) > 0);
    } }, directives: [i2.NgForOf, i2.NgIf], styles: ["@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\");.table-container[_ngcontent-%COMP%]{background:#fff;padding:30px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border:0;border-collapse:collapse}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#3e3c89;border:0;color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:0}.pagination[_ngcontent-%COMP%]{margin:15px 0;overflow:hidden;width:100%}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{text-align:center;width:100%}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background:#fff;display:inline-block;list-style-type:none;margin:5px auto;padding:0}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;padding:8px 15px}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:#3e3c89;border:1px solid #d0d0d0;border-radius:.5rem;border-radius:50%;color:#fff!important;pointer-events:none}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{
                selector: 'custom-table-lib',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss'],
            }]
    }], function () { return [{ type: i1.TableService }]; }, { CONFIG: [{
            type: Input,
            args: ['CONFIG']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNPNUQsMEJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQUs7OztJQURILGVBQ0Y7SUFERSwwQ0FDRjs7O0lBS0EsMEJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFESCxlQUNGO0lBREUsbURBQ0Y7OztJQUhGLDBCQUNFO0lBQUEsbUVBQ0U7SUFFSixpQkFBSzs7O0lBSEMsZUFBbUM7SUFBbkMsNkNBQW1DOzs7O0lBY25DLDZCQUNFO0lBRHNFLGlRQUFzQixDQUFDLEtBQUU7SUFDL0YsWUFDRjtJQUFBLGlCQUFLOzs7OztJQUZELHNDQUF5QjtJQUMzQixlQUNGO0lBREUsMENBQ0Y7OztJQUhGLDZCQUNFO0lBQUEsbUdBQ0U7SUFFSiwwQkFBZTs7OztJQUhpQixlQUF5QztJQUF6QywwRUFBeUM7Ozs7SUFQL0UsOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLDBCQUNFO0lBQUEsNkJBQ0U7SUFEOEIsNkxBQW9CLE1BQU0sS0FBRTtJQUMxRCwrQkFDRjtJQUFBLGlCQUFLO0lBQ0wsdUdBQ0U7SUFJRiw2QkFDRTtJQUR3RCw2TEFBb0IsTUFBTSxLQUFFO0lBQ3BGLDJCQUNGO0lBQUEsaUJBQUs7SUFDUCxpQkFBSztJQUNQLGlCQUFNO0lBRVIsaUJBQU07OztJQWRJLGVBQTJCO0lBQTNCLDJDQUEyQjtJQUdqQixlQUF3RDtJQUF4RCxnREFBd0Q7SUFLbEUsZUFBcUQ7SUFBckQsbUhBQXFEOzs7SUFaakUsNkJBQ0U7SUFBQSwrRUFDRTtJQWlCSiww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UUFDUCxpQkFBUTtRQUNSLDZCQUNFO1FBQUEsK0RBQ0U7UUFJSixpQkFBUTtRQUNWLGlCQUFRO1FBQ1IsbUZBQ0U7UUFtQkosaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOztRQW5DVSxlQUFtQztRQUFuQywwQ0FBbUM7UUFNckMsZUFBK0I7UUFBL0IsdUNBQStCO1FBT3pCLGVBQTZCO1FBQTdCLGdGQUE2Qjs7a0REWnBDLGNBQWM7Y0FMMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDOytEQUdrQixNQUFNO2tCQUF0QixLQUFLO21CQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlU2VydmljZSB9IGZyb20gJy4vdGFibGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N1c3RvbS10YWJsZS1saWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RhYmxlU2VydmljZTogVGFibGVTZXJ2aWNlKSB7fVxuICBASW5wdXQoJ0NPTkZJRycpIENPTkZJRztcbiAgdGFibGVEYXRhO1xuICB0YWJsZUhlYWRlcnM7XG4gIHRhYmxlRGF0YUNvcHk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5nZXRUYWJsZURhdGEoKTtcbiAgfVxuXG4gIGN1cnJlbnRQYWdlOiBudW1iZXIgPSAxO1xuICBwYWdpbmF0aW9uQXJyYXk6IEFycmF5PEJvb2xlYW4+O1xuICBzaG93UGFnaW5hdGlvbjogQm9vbGVhbiA9IGZhbHNlO1xuICBwYWdlOiBudW1iZXIgPSAxO1xuICBwYWdpbmF0aW9uQ291bnQ6IG51bWJlcjtcbiAgbGltaXQ6IG51bWJlcjtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coY2hhbmdlcyk7XG4gIH1cblxuICBjcmVhdGVQYWdpbmF0aW9uKCkge1xuICAgIHRoaXMubGltaXQgPSB0aGlzLkNPTkZJRyA/IHRoaXMuQ09ORklHWydMSU1JVCddIDogMTA7XG4gICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IHRoaXMudGFibGVEYXRhQ29weS5sZW5ndGggPiB0aGlzLmxpbWl0O1xuICAgIGlmICh0aGlzLnNob3dQYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCBzdGFydEluZGV4ID0gKHRoaXMucGFnZSAtIDEpICogdGhpcy5saW1pdDtcbiAgICAgIGNvbnN0IGVuZEluZGV4ID0gdGhpcy5wYWdlICogdGhpcy5saW1pdDtcbiAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy50YWJsZURhdGFDb3B5LnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4KTtcbiAgICAgIHRoaXMucGFnaW5hdGlvbkNvdW50ID0gTWF0aC5mbG9vcih0aGlzLnRhYmxlRGF0YUNvcHkubGVuZ3RoIC8gdGhpcy5saW1pdCk7XG4gICAgICB0aGlzLnBhZ2luYXRpb25BcnJheSA9IG5ldyBBcnJheSh0aGlzLnBhZ2luYXRpb25Db3VudCkuZmlsbChmYWxzZSk7XG4gICAgICB0aGlzLnBhZ2luYXRpb25BcnJheVt0aGlzLnBhZ2UgLSAxXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUGFnZShwYWdlKSB7XG4gICAgaWYgKHBhZ2UgPT09ICdwcmV2Jykge1xuICAgICAgdGhpcy5wYWdlIC09IDE7XG4gICAgfSBlbHNlIGlmIChwYWdlID09PSAnbmV4dCcpIHtcbiAgICAgIHRoaXMucGFnZSArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnBhZ2UpO1xuICAgIHRoaXMuY3JlYXRlUGFnaW5hdGlvbigpO1xuICB9XG5cbiAgZ2V0VGFibGVEYXRhKCkge1xuICAgIHRoaXMuX3RhYmxlU2VydmljZVxuICAgICAgLmdldFRhYmxlTGlzdCh0aGlzLkNPTkZJR1snQkFTRV9VUkwnXSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnRhYmxlRGF0YUNvcHkgPSByZXM7XG4gICAgICAgIHRoaXMudGFibGVIZWFkZXJzID0gT2JqZWN0LmtleXModGhpcy50YWJsZURhdGFDb3B5WzBdKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQYWdpbmF0aW9uKCk7XG4gICAgICB9KTtcbiAgfVxufVxuIiwiPHA+QSBjdXN0b20gYW5ndWxhciBsaWJyYXJ5IGZvciB0YWJsZXM8L3A+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHRhYmxlLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgaGVhZGVyIG9mIHRhYmxlSGVhZGVyc1wiPlxuICAgICAgICAgICAgICB7eyBoZWFkZXIgfX1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0YWJsZURhdGE7XCI+XG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGhlYWRlciBvZiB0YWJsZUhlYWRlcnNcIj5cbiAgICAgICAgICAgICAge3tpdGVtW2hlYWRlcl19fVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0YWJsZURhdGE/Lmxlbmd0aCA+IDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb25cIiAqbmdJZj1cInNob3dQYWdpbmF0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2UgPCAyXCIgKGNsaWNrKT1cInVwZGF0ZVBhZ2UoJ3ByZXYnKVwiPlxuICAgICAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGFnZUZsYWcgb2YgcGFnaW5hdGlvbkFycmF5OyBsZXQgaSA9IGluZGV4O1wiPlxuICAgICAgICAgICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cInBhZ2VGbGFnXCIgKm5nSWY9XCJpID49IChwYWdlIC0gMikgJiYgaSA8IChwYWdlICsgMilcIiAoY2xpY2spPVwidXBkYXRlUGFnZShpKzEpXCI+XG4gICAgICAgICAgICAgICAgICB7e2kgKyAxfX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPGxpIFtjbGFzcy5kaXNhYmxlZF09XCJwYWdlID09PSAocGFnaW5hdGlvbkFycmF5Py5sZW5ndGgpXCIgKGNsaWNrKT1cInVwZGF0ZVBhZ2UoJ25leHQnKVwiPlxuICAgICAgICAgICAgICAgIE5leHQgUGFnZVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PiJdfQ==