import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableService } from './table.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './components/mobile/mobile.component';
import { LadderComponent } from './components/ladder/ladder.component';

const route: Routes = [
  { path: '', component: TableComponent },
  { path: 'ladder', component: LadderComponent },
  { path: 'mobile', component: MobileComponent },
];

@NgModule({
  declarations: [TableComponent, LadderComponent, MobileComponent],
  imports: [HttpClientModule, CommonModule, RouterModule.forChild(route)],
  providers: [TableService],
  exports: [TableComponent],
})
export class ByeartTableModule {}
