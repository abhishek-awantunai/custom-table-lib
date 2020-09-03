import { OnInit, SimpleChanges } from '@angular/core';
import { TableService } from './table.service';
import * as i0 from "@angular/core";
export declare class TableComponent implements OnInit {
    private _tableService;
    constructor(_tableService: TableService);
    config: any;
    tableData: any;
    tableHeaders: any;
    tableDataCopy: any;
    ngOnInit(): void;
    currentPage: number;
    paginationArray: Array<Boolean>;
    showPagination: Boolean;
    page: number;
    paginationCount: number;
    limit: number;
    ngOnChanges(changes: SimpleChanges): void;
    createPagination(): void;
    updatePage(page: any): void;
    getTableData(): void;
    static ɵfac: i0.ɵɵFactoryDef<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TableComponent, "custom-table-lib", never, { "config": "config"; }, {}, never, never>;
}
