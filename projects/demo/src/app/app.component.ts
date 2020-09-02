import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  CONFIG: any = {
    BASE_URL: 'https://jsonplaceholder.typicode.com',
    LIMIT: 5,
    SORTBY: 'name',
  };
}
