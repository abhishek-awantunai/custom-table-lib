import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableService } from './table.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileComponent } from './components/mobile/mobile.component';
import { LadderComponent } from './components/ladder/ladder.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const route = [
    { path: '', component: TableComponent },
    { path: 'ladder', component: LadderComponent },
    { path: 'mobile', component: MobileComponent },
];
export class ByeartTableModule {
}
ByeartTableModule.ɵmod = i0.ɵɵdefineNgModule({ type: ByeartTableModule });
ByeartTableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ByeartTableModule_Factory(t) { return new (t || ByeartTableModule)(); }, providers: [TableService], imports: [[HttpClientModule, CommonModule, RouterModule.forChild(route)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ByeartTableModule, { declarations: [TableComponent, LadderComponent, MobileComponent], imports: [HttpClientModule, CommonModule, i1.RouterModule], exports: [TableComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ByeartTableModule, [{
        type: NgModule,
        args: [{
                declarations: [TableComponent, LadderComponent, MobileComponent],
                imports: [HttpClientModule, CommonModule, RouterModule.forChild(route)],
                providers: [TableService],
                exports: [TableComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7O0FBRXZFLE1BQU0sS0FBSyxHQUFXO0lBQ3BCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO0NBQy9DLENBQUM7QUFRRixNQUFNLE9BQU8saUJBQWlCOztxREFBakIsaUJBQWlCO2lIQUFqQixpQkFBaUIsbUJBSGpCLENBQUMsWUFBWSxDQUFDLFlBRGhCLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7d0ZBSTVELGlCQUFpQixtQkFMYixjQUFjLEVBQUUsZUFBZSxFQUFFLGVBQWUsYUFDckQsZ0JBQWdCLEVBQUUsWUFBWSw4QkFFOUIsY0FBYztrREFFYixpQkFBaUI7Y0FON0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO2dCQUNoRSxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkUsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN6QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tICcuL3RhYmxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNb2JpbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9iaWxlL21vYmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFkZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xhZGRlci9sYWRkZXIuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGU6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBUYWJsZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdsYWRkZXInLCBjb21wb25lbnQ6IExhZGRlckNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdtb2JpbGUnLCBjb21wb25lbnQ6IE1vYmlsZUNvbXBvbmVudCB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVGFibGVDb21wb25lbnQsIExhZGRlckNvbXBvbmVudCwgTW9iaWxlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0h0dHBDbGllbnRNb2R1bGUsIENvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlKV0sXG4gIHByb3ZpZGVyczogW1RhYmxlU2VydmljZV0sXG4gIGV4cG9ydHM6IFtUYWJsZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEJ5ZWFydFRhYmxlTW9kdWxlIHt9XG4iXX0=