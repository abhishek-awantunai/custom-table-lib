import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'custom-table-lib',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private _tableService: TableService) {}
  @Input('CONFIG') CONFIG;
  tableData;
  tableHeaders;
  tableDataCopy;

  ngOnInit(): void {
    this.getTableData();
  }

  currentPage: number = 1;
  paginationArray: Array<Boolean>;
  showPagination: Boolean = false;
  page: number = 1;
  paginationCount: number;
  limit: number;

  ngOnChanges(changes: SimpleChanges): void {
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
    } else if (page === 'next') {
      this.page += 1;
    } else {
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
