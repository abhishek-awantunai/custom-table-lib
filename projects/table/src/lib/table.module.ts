import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableService } from './table.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TableComponent],
  imports: [HttpClientModule, CommonModule],
  providers: [TableService],
  exports: [TableComponent],
})
export class TableModule {}
