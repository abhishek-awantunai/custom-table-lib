import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class TableService {
    private _httpClient;
    constructor(_httpClient: HttpClient);
    getTableList(url: any): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDef<TableService, never>;
    static ɵprov: i0.ɵɵInjectableDef<TableService>;
}
