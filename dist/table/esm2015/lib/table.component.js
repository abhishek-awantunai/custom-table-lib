import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./table.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
function TableComponent_th_7_Template(rf, ctx) { if (rf & 1) {
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
function TableComponent_tr_9_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const header_r6 = ctx.$implicit;
    const item_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r4[header_r6], " ");
} }
function TableComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, TableComponent_tr_9_td_1_Template, 2, 1, "td", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.tableHeaders);
} }
function TableComponent_ng_container_10_div_1_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 11);
    i0.ɵɵlistener("click", function TableComponent_ng_container_10_div_1_ng_container_5_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r15); const i_r11 = i0.ɵɵnextContext().index; const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.updatePage(i_r11 + 1); });
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
function TableComponent_ng_container_10_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_10_div_1_ng_container_5_li_1_Template, 2, 5, "li", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", i_r11 >= ctx_r9.page - 2 && i_r11 < ctx_r9.page + 2);
} }
function TableComponent_ng_container_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵelementStart(3, "li", 11);
    i0.ɵɵlistener("click", function TableComponent_ng_container_10_div_1_Template_li_click_3_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.updatePage("prev"); });
    i0.ɵɵtext(4, " Previous Page ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TableComponent_ng_container_10_div_1_ng_container_5_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementStart(6, "li", 11);
    i0.ɵɵlistener("click", function TableComponent_ng_container_10_div_1_Template_li_click_6_listener() { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.updatePage("next"); });
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
function TableComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_10_div_1_Template, 8, 5, "div", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.showPagination);
} }
export class TableComponent {
    constructor(_tableService, activatedRoute) {
        this._tableService = _tableService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
        this.showPagination = false;
        this.page = 1;
    }
    ngOnInit() {
        let idx = this.activatedRoute.pathFromRoot.length - 2;
        console.log(idx);
        while (this.sharedData == null && idx > 0) {
            this.sub = this.activatedRoute.pathFromRoot[idx].data.subscribe((subData) => {
                this.config = subData;
                this.getTableData();
            });
            idx--;
        }
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
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
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(i0.ɵɵdirectiveInject(i1.TableService), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); };
TableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["custom-table-lib"]], inputs: { config: "config" }, features: [i0.ɵɵNgOnChangesFeature], decls: 11, vars: 3, consts: [[1, "container-fluid", "table-container"], [1, "row"], [1, "col-sm-12"], [1, "table"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "ngStyle"], ["class", "pagination", 4, "ngIf"], [1, "pagination"], [1, "container"], [3, "click"], [3, "active", "background", "click", 4, "ngIf"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "let me check this baba reee ");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "table", 3);
        i0.ɵɵelementStart(5, "thead");
        i0.ɵɵelementStart(6, "tr");
        i0.ɵɵtemplate(7, TableComponent_th_7_Template, 2, 2, "th", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "tbody");
        i0.ɵɵtemplate(9, TableComponent_tr_9_Template, 2, 1, "tr", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, TableComponent_ng_container_10_Template, 2, 1, "ng-container", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.tableHeaders);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.tableData);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.tableData == null ? null : ctx.tableData.length) > 0);
    } }, directives: [i3.NgForOf, i3.NgIf, i3.NgStyle], styles: ["@import url(\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\");.table-container[_ngcontent-%COMP%]{background:#fff;padding:30px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border:0;border-collapse:collapse}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:0;color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:0}.pagination[_ngcontent-%COMP%]{margin:15px 0;overflow:hidden;width:100%}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{text-align:center;width:100%}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{background:#fff;display:inline-block;list-style-type:none;margin:5px auto;padding:0}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;display:inline-block;padding:8px 15px}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border:1px solid #d0d0d0;border-radius:.5rem;border-radius:50%;color:#fff!important;pointer-events:none}.pagination[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{
                selector: 'custom-table-lib',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss'],
            }]
    }], function () { return [{ type: i1.TableService }, { type: i2.ActivatedRoute }]; }, { config: [{
            type: Input,
            args: ['config']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDUTVELDZCQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFLOzs7O0lBRm1DLG1JQUFzQztJQUM1RSxlQUNGO0lBREUsMENBQ0Y7OztJQUtBLDBCQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFLOzs7O0lBREgsZUFDRjtJQURFLG1EQUNGOzs7SUFIRiwwQkFDRTtJQUFBLGtFQUNFO0lBRUosaUJBQUs7OztJQUhDLGVBQW1DO0lBQW5DLDZDQUFtQzs7OztJQWNuQyw4QkFHRTtJQUQwQyxpUUFBc0IsQ0FBQyxLQUFFO0lBQ25FLFlBQ0Y7SUFBQSxpQkFBSzs7Ozs7O0lBSEgsMk5BQTJFO0lBRHpFLHNDQUF5QjtJQUczQixlQUNGO0lBREUsMENBQ0Y7OztJQUxGLDZCQUNFO0lBQUEsbUdBR0U7SUFFSiwwQkFBZTs7OztJQUhYLGVBQXlDO0lBQXpDLDBFQUF5Qzs7OztJQVRuRCw4QkFDRTtJQUFBLCtCQUNFO0lBQUEsMEJBQ0U7SUFBQSw4QkFDRTtJQUQ4Qiw2TEFBb0IsTUFBTSxLQUFFO0lBQzFELCtCQUNGO0lBQUEsaUJBQUs7SUFDTCx1R0FDRTtJQU1GLDhCQUNFO0lBRHdELDZMQUFvQixNQUFNLEtBQUU7SUFDcEYsMkJBQ0Y7SUFBQSxpQkFBSztJQUNQLGlCQUFLO0lBQ1AsaUJBQU07SUFFUixpQkFBTTs7O0lBaEJJLGVBQTJCO0lBQTNCLDJDQUEyQjtJQUdqQixlQUF3RDtJQUF4RCxnREFBd0Q7SUFPbEUsZUFBcUQ7SUFBckQsbUhBQXFEOzs7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QUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDcEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzRFQTFFVSxjQUFjO21EQUFkLGNBQWM7UUNWM0IsNENBRUE7UUFBQSw4QkFDRTtRQUFBLDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSxnQ0FDRTtRQUFBLDZCQUNFO1FBQUEsMEJBQ0U7UUFBQSw2REFDRTtRQUVKLGlCQUFLO1FBQ1AsaUJBQVE7UUFDUiw2QkFDRTtRQUFBLDZEQUNFO1FBSUosaUJBQVE7UUFDVixpQkFBUTtRQUNSLG1GQUNFO1FBcUJKLGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTs7UUFyQ1UsZUFBbUM7UUFBbkMsMENBQW1DO1FBTXJDLGVBQStCO1FBQS9CLHVDQUErQjtRQU96QixlQUE2QjtRQUE3QixnRkFBNkI7O2tERFhwQyxjQUFjO2NBTDFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0Qzs0RkFFa0IsTUFBTTtrQkFBdEIsS0FBSzttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tICcuL3RhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N1c3RvbS10YWJsZS1saWInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnO1xuICBkYXRhRnJvbVJvdXRlO1xuICBzaGFyZWREYXRhO1xuICB0YWJsZURhdGE7XG4gIHN1YjogU3Vic2NyaXB0aW9uO1xuICB0YWJsZUhlYWRlcnM7XG4gIHRhYmxlRGF0YUNvcHk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdGFibGVTZXJ2aWNlOiBUYWJsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGxldCBpZHggPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhdGhGcm9tUm9vdC5sZW5ndGggLSAyO1xuICAgIGNvbnNvbGUubG9nKGlkeCk7XG4gICAgd2hpbGUgKHRoaXMuc2hhcmVkRGF0YSA9PSBudWxsICYmIGlkeCA+IDApIHtcbiAgICAgIHRoaXMuc3ViID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXRoRnJvbVJvb3RbaWR4XS5kYXRhLnN1YnNjcmliZShcbiAgICAgICAgKHN1YkRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbmZpZyA9IHN1YkRhdGE7XG4gICAgICAgICAgdGhpcy5nZXRUYWJsZURhdGEoKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGlkeC0tO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBjdXJyZW50UGFnZTogbnVtYmVyID0gMTtcbiAgcGFnaW5hdGlvbkFycmF5OiBBcnJheTxCb29sZWFuPjtcbiAgc2hvd1BhZ2luYXRpb246IEJvb2xlYW4gPSBmYWxzZTtcbiAgcGFnZTogbnVtYmVyID0gMTtcbiAgcGFnaW5hdGlvbkNvdW50OiBudW1iZXI7XG4gIGxpbWl0OiBudW1iZXI7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGNoYW5nZXMpO1xuICB9XG5cbiAgY3JlYXRlUGFnaW5hdGlvbigpIHtcbiAgICB0aGlzLmxpbWl0ID0gdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZ1sndGFibGVDb25maWcnXVsnbGltaXQnXSA6IDEwO1xuICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSB0aGlzLnRhYmxlRGF0YUNvcHkubGVuZ3RoID4gdGhpcy5saW1pdDtcbiAgICBpZiAodGhpcy5zaG93UGFnaW5hdGlvbikge1xuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9ICh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMubGltaXQ7XG4gICAgICBjb25zdCBlbmRJbmRleCA9IHRoaXMucGFnZSAqIHRoaXMubGltaXQ7XG4gICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMudGFibGVEYXRhQ29weS5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCk7XG4gICAgICB0aGlzLnBhZ2luYXRpb25Db3VudCA9IE1hdGguZmxvb3IodGhpcy50YWJsZURhdGFDb3B5Lmxlbmd0aCAvIHRoaXMubGltaXQpO1xuICAgICAgdGhpcy5wYWdpbmF0aW9uQXJyYXkgPSBuZXcgQXJyYXkodGhpcy5wYWdpbmF0aW9uQ291bnQpLmZpbGwoZmFsc2UpO1xuICAgICAgdGhpcy5wYWdpbmF0aW9uQXJyYXlbdGhpcy5wYWdlIC0gMV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBhZ2UocGFnZSkge1xuICAgIGlmIChwYWdlID09PSAncHJldicpIHtcbiAgICAgIHRoaXMucGFnZSAtPSAxO1xuICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gJ25leHQnKSB7XG4gICAgICB0aGlzLnBhZ2UgKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5wYWdlKTtcbiAgICB0aGlzLmNyZWF0ZVBhZ2luYXRpb24oKTtcbiAgfVxuXG4gIGdldFRhYmxlRGF0YSgpIHtcbiAgICB0aGlzLl90YWJsZVNlcnZpY2UuZ2V0VGFibGVMaXN0KHRoaXMuY29uZmlnWydhcGknXSkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgIHRoaXMudGFibGVEYXRhQ29weSA9IHJlcztcbiAgICAgIHRoaXMudGFibGVIZWFkZXJzID0gT2JqZWN0LmtleXModGhpcy50YWJsZURhdGFDb3B5WzBdKTtcbiAgICAgIHRoaXMuY3JlYXRlUGFnaW5hdGlvbigpO1xuICAgIH0pO1xuICB9XG59XG4iLCJsZXQgbWUgY2hlY2sgdGhpcyBiYWJhIHJlZWVcblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCB0YWJsZS1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGhlYWRlciBvZiB0YWJsZUhlYWRlcnNcIiBbbmdTdHlsZV09XCJjb25maWc/LnN0eWxlQ29uZmlnPy50aGVtZVwiPlxuICAgICAgICAgICAgICB7eyBoZWFkZXIgfX1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0YWJsZURhdGE7XCI+XG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGhlYWRlciBvZiB0YWJsZUhlYWRlcnNcIj5cbiAgICAgICAgICAgICAge3tpdGVtW2hlYWRlcl19fVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0YWJsZURhdGE/Lmxlbmd0aCA+IDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2luYXRpb25cIiAqbmdJZj1cInNob3dQYWdpbmF0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGkgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2UgPCAyXCIgKGNsaWNrKT1cInVwZGF0ZVBhZ2UoJ3ByZXYnKVwiPlxuICAgICAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGFnZUZsYWcgb2YgcGFnaW5hdGlvbkFycmF5OyBsZXQgaSA9IGluZGV4O1wiPlxuICAgICAgICAgICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cInBhZ2VGbGFnXCJcbiAgICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cInBhZ2VGbGFnID8gY29uZmlnPy5zdHlsZUNvbmZpZz8udGhlbWU/LmJhY2tncm91bmQgOiAnJ1wiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImkgPj0gKHBhZ2UgLSAyKSAmJiBpIDwgKHBhZ2UgKyAyKVwiIChjbGljayk9XCJ1cGRhdGVQYWdlKGkrMSlcIj5cbiAgICAgICAgICAgICAgICAgIHt7aSArIDF9fVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bGkgW2NsYXNzLmRpc2FibGVkXT1cInBhZ2UgPT09IChwYWdpbmF0aW9uQXJyYXk/Lmxlbmd0aClcIiAoY2xpY2spPVwidXBkYXRlUGFnZSgnbmV4dCcpXCI+XG4gICAgICAgICAgICAgICAgTmV4dCBQYWdlXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+Il19