import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TableModule } from '@byheart/table';

@NgModule({
  declarations: [AppComponent],
  imports: [TableModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
