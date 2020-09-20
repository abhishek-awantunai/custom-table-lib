import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParlorComponent } from './components/parlor/parlor.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'parlor', component: ParlorComponent },
  {
    path: 'custom',
    data: {
      api: 'https://jsonplaceholder.typicode.com',
      tableConfig: {
        limit: 5,
      },
      styleConfig: {
        theme: {
          background: '#3e3c89',
        },
      },
    },
    loadChildren: () =>
      import('@byheart/table').then((m) => m.ByeartTableModule),
  },
];

@NgModule({
  declarations: [AppComponent, HomeComponent, ParlorComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
