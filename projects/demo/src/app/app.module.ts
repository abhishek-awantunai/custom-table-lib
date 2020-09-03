import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ByeartTableModule } from '@byheart/table';

@NgModule({
  declarations: [AppComponent],
  imports: [ByeartTableModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
