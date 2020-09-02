import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableService } from './table.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class ByeartTableModule {
}
ByeartTableModule.ɵmod = i0.ɵɵdefineNgModule({ type: ByeartTableModule });
ByeartTableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ByeartTableModule_Factory(t) { return new (t || ByeartTableModule)(); }, providers: [TableService], imports: [[HttpClientModule, CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ByeartTableModule, { declarations: [TableComponent], imports: [HttpClientModule, CommonModule], exports: [TableComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ByeartTableModule, [{
        type: NgModule,
        args: [{
                declarations: [TableComponent],
                imports: [HttpClientModule, CommonModule],
                providers: [TableService],
                exports: [TableComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFRL0MsTUFBTSxPQUFPLGlCQUFpQjs7cURBQWpCLGlCQUFpQjtpSEFBakIsaUJBQWlCLG1CQUhqQixDQUFDLFlBQVksQ0FBQyxZQURoQixDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQzt3RkFJOUIsaUJBQWlCLG1CQUxiLGNBQWMsYUFDbkIsZ0JBQWdCLEVBQUUsWUFBWSxhQUU5QixjQUFjO2tEQUViLGlCQUFpQjtjQU43QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLENBQUM7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDekIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi90YWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUYWJsZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtIdHRwQ2xpZW50TW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtUYWJsZVNlcnZpY2VdLFxuICBleHBvcnRzOiBbVGFibGVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBCeWVhcnRUYWJsZU1vZHVsZSB7fVxuIl19