import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./table.service";
import * as i2 from "@angular/common";
function TableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r0.config == null ? null : ctx_r0.config.styleConfig == null ? null : ctx_r0.config.styleConfig.theme);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", header_r3, " ");
} }
function TableComponent_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r6 = ctx.$implicit;
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r4[header_r6], " ");
} }
function TableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, TableComponent_tr_8_td_1_Template, 2, 1, "td", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.tableHeaders);
} }
function TableComponent_ng_container_9_div_1_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 11);
    i0.ɵɵlistener("click", function TableComponent_ng_container_9_div_1_ng_container_5_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r15); const i_r11 = i0.ɵɵnextContext().index; const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.updatePage(i_r11 + 1); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext();
    const pageFlag_r10 = ctx_r16.$implicit;
    const i_r11 = ctx_r16.index;
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵstyleProp("background", pageFlag_r10 ? ctx_r12.config == null ? null : ctx_r12.config.styleConfig == null ? null : ctx_r12.config.styleConfig.theme == null ? null : ctx_r12.config.styleConfig.theme.background : "");
    i0.ɵɵclassProp("active", pageFlag_r10);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i_r11 + 1, " ");
} }
function TableComponent_ng_container_9_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_9_div_1_ng_container_5_li_1_Template, 2, 5, "li", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r11 >= ctx_r9.page - 2 && i_r11 < ctx_r9.page + 2);
} }
function TableComponent_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵelementStart(3, "li", 11);
    i0.ɵɵlistener("click", function TableComponent_ng_container_9_div_1_Template_li_click_3_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.updatePage("prev"); });
    i0.ɵɵtext(4, " Previous Page ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TableComponent_ng_container_9_div_1_ng_container_5_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementStart(6, "li", 11);
    i0.ɵɵlistener("click", function TableComponent_ng_container_9_div_1_Template_li_click_6_listener() { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.updatePage("next"); });
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
function TableComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_9_div_1_Template, 8, 5, "div", 8);
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
        this.limit = this.config ? this.config['tableConfig']['limit'] : 10;
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
        this._tableService.getTableList(this.config['api']).subscribe((res) => {
            this.tableDataCopy = res;
            this.tableHeaders = Object.keys(this.tableDataCopy[0]);
            this.createPagination();
        });
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(i0.ɵɵdirectiveInject(i1.TableService)); };
TableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["custom-table-lib"]], inputs: { config: "config" }, features: [i0.ɵɵNgOnChangesFeature], decls: 10, vars: 3, consts: [[1, "container-fluid", "table-container"], [1, "row"], [1, "col-sm-12"], [1, "table"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "ngStyle"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "container"], [3, "click"], [3, "active", "background", "click", 4, "ngIf"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.tableHeaders);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.tableData);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.tableData == null ? null : ctx.tableData.length) > 0);
    } }, directives: [i2.NgForOf, i2.NgIf, i2.NgStyle], styles: ["@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\");.table-container[_ngcontent-%COMP%]{background:#fff;padding:30px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border:0;border-collapse:collapse}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:0;color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:0}.pagination[_ngcontent-%COMP%]{margin:15px 0;overflow:hidden;width:100%}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{text-align:center;width:100%}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background:#fff;display:inline-block;list-style-type:none;margin:5px auto;padding:0}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;padding:8px 15px}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border:1px solid #d0d0d0;border-radius:.5rem;border-radius:50%;color:#fff!important;pointer-events:none}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{
                selector: 'custom-table-lib',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss'],
            }]
    }], function () { return [{ type: i1.TableService }]; }, { config: [{
            type: Input,
            args: ['config']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNNNUQsNkJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFGbUMsbUlBQXNDO0lBQzVFLGVBQ0Y7SUFERSwwQ0FDRjs7O0lBS0EsMEJBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQUs7Ozs7SUFESCxlQUNGO0lBREUsbURBQ0Y7OztJQUhGLDBCQUNFO0lBQUEsa0VBQ0U7SUFFSixpQkFBSzs7O0lBSEMsZUFBbUM7SUFBbkMsNkNBQW1DOzs7O0lBY25DLDhCQUdFO0lBRDBDLGdRQUFzQixDQUFDLEtBQUU7SUFDbkUsWUFDRjtJQUFBLGlCQUFLOzs7Ozs7SUFISCwyTkFBMkU7SUFEekUsc0NBQXlCO0lBRzNCLGVBQ0Y7SUFERSwwQ0FDRjs7O0lBTEYsNkJBQ0U7SUFBQSxrR0FHRTtJQUVKLDBCQUFlOzs7O0lBSFgsZUFBeUM7SUFBekMsMEVBQXlDOzs7O0lBVG5ELDhCQUNFO0lBQUEsK0JBQ0U7SUFBQSwwQkFDRTtJQUFBLDhCQUNFO0lBRDhCLDRMQUFvQixNQUFNLEtBQUU7SUFDMUQsK0JBQ0Y7SUFBQSxpQkFBSztJQUNMLHNHQUNFO0lBTUYsOEJBQ0U7SUFEd0QsNExBQW9CLE1BQU0sS0FBRTtJQUNwRiwyQkFDRjtJQUFBLGlCQUFLO0lBQ1AsaUJBQUs7SUFDUCxpQkFBTTtJQUVSLGlCQUFNOzs7SUFoQkksZUFBMkI7SUFBM0IsMkNBQTJCO0lBR2pCLGVBQXdEO0lBQXhELGdEQUF3RDtJQU9sRSxlQUFxRDtJQUFyRCxtSEFBcUQ7OztJ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SixpQkFBSztRQUNQLGlCQUFRO1FBQ1IsNkJBQ0U7UUFBQSw2REFDRTtRQUlKLGlCQUFRO1FBQ1YsaUJBQVE7UUFDUixpRkFDRTtRQXFCSixpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07O1FBckNVLGVBQW1DO1FBQW5DLDBDQUFtQztRQU1yQyxlQUErQjtRQUEvQix1Q0FBK0I7UUFPekIsZUFBNkI7UUFBN0IsZ0ZBQTZCOztrRERYcEMsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEM7K0RBR2tCLE1BQU07a0JBQXRCLEtBQUs7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi90YWJsZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VzdG9tLXRhYmxlLWxpYicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFibGVTZXJ2aWNlOiBUYWJsZVNlcnZpY2UpIHt9XG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnO1xuICB0YWJsZURhdGE7XG4gIHRhYmxlSGVhZGVycztcbiAgdGFibGVEYXRhQ29weTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldFRhYmxlRGF0YSgpO1xuICB9XG5cbiAgY3VycmVudFBhZ2U6IG51bWJlciA9IDE7XG4gIHBhZ2luYXRpb25BcnJheTogQXJyYXk8Qm9vbGVhbj47XG4gIHNob3dQYWdpbmF0aW9uOiBCb29sZWFuID0gZmFsc2U7XG4gIHBhZ2U6IG51bWJlciA9IDE7XG4gIHBhZ2luYXRpb25Db3VudDogbnVtYmVyO1xuICBsaW1pdDogbnVtYmVyO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhjaGFuZ2VzKTtcbiAgfVxuXG4gIGNyZWF0ZVBhZ2luYXRpb24oKSB7XG4gICAgdGhpcy5saW1pdCA9IHRoaXMuY29uZmlnID8gdGhpcy5jb25maWdbJ3RhYmxlQ29uZmlnJ11bJ2xpbWl0J10gOiAxMDtcbiAgICB0aGlzLnNob3dQYWdpbmF0aW9uID0gdGhpcy50YWJsZURhdGFDb3B5Lmxlbmd0aCA+IHRoaXMubGltaXQ7XG4gICAgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb24pIHtcbiAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAodGhpcy5wYWdlIC0gMSkgKiB0aGlzLmxpbWl0O1xuICAgICAgY29uc3QgZW5kSW5kZXggPSB0aGlzLnBhZ2UgKiB0aGlzLmxpbWl0O1xuICAgICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLnRhYmxlRGF0YUNvcHkuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuICAgICAgdGhpcy5wYWdpbmF0aW9uQ291bnQgPSBNYXRoLmZsb29yKHRoaXMudGFibGVEYXRhQ29weS5sZW5ndGggLyB0aGlzLmxpbWl0KTtcbiAgICAgIHRoaXMucGFnaW5hdGlvbkFycmF5ID0gbmV3IEFycmF5KHRoaXMucGFnaW5hdGlvbkNvdW50KS5maWxsKGZhbHNlKTtcbiAgICAgIHRoaXMucGFnaW5hdGlvbkFycmF5W3RoaXMucGFnZSAtIDFdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQYWdlKHBhZ2UpIHtcbiAgICBpZiAocGFnZSA9PT0gJ3ByZXYnKSB7XG4gICAgICB0aGlzLnBhZ2UgLT0gMTtcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT09ICduZXh0Jykge1xuICAgICAgdGhpcy5wYWdlICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMucGFnZSk7XG4gICAgdGhpcy5jcmVhdGVQYWdpbmF0aW9uKCk7XG4gIH1cblxuICBnZXRUYWJsZURhdGEoKSB7XG4gICAgdGhpcy5fdGFibGVTZXJ2aWNlLmdldFRhYmxlTGlzdCh0aGlzLmNvbmZpZ1snYXBpJ10pLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICB0aGlzLnRhYmxlRGF0YUNvcHkgPSByZXM7XG4gICAgICB0aGlzLnRhYmxlSGVhZGVycyA9IE9iamVjdC5rZXlzKHRoaXMudGFibGVEYXRhQ29weVswXSk7XG4gICAgICB0aGlzLmNyZWF0ZVBhZ2luYXRpb24oKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCB0YWJsZS1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGhlYWRlciBvZiB0YWJsZUhlYWRlcnNcIiBbbmdTdHlsZV09XCJjb25maWc/LnN0eWxlQ29uZmlnPy50aGVtZVwiPlxuICAgICAgICAgICAgICB7eyBoZWFkZXIgfX1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0YWJsZURhdGE7XCI+XG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGhlYWRlciBvZiB0YWJsZUhlYWRlcnNcIj5cbiAgICAgICAgICAgICAge3tpdGVtW2hlYWRlcl19fVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0YWJsZURhdGE/Lmxlbmd0aCA+IDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb25cIiAqbmdJZj1cInNob3dQYWdpbmF0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2UgPCAyXCIgKGNsaWNrKT1cInVwZGF0ZVBhZ2UoJ3ByZXYnKVwiPlxuICAgICAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGFnZUZsYWcgb2YgcGFnaW5hdGlvbkFycmF5OyBsZXQgaSA9IGluZGV4O1wiPlxuICAgICAgICAgICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cInBhZ2VGbGFnXCJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cInBhZ2VGbGFnID8gY29uZmlnPy5zdHlsZUNvbmZpZz8udGhlbWU/LmJhY2tncm91bmQgOiAnJ1wiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImkgPj0gKHBhZ2UgLSAyKSAmJiBpIDwgKHBhZ2UgKyAyKVwiIChjbGljayk9XCJ1cGRhdGVQYWdlKGkrMSlcIj5cbiAgICAgICAgICAgICAgICAgIHt7aSArIDF9fVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bGkgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2UgPT09IChwYWdpbmF0aW9uQXJyYXk/Lmxlbmd0aClcIiAoY2xpY2spPVwidXBkYXRlUGFnZSgnbmV4dCcpXCI+XG4gICAgICAgICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+Il19