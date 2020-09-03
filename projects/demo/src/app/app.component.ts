import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  config: any = {
    api: 'https://jsonplaceholder.typicode.com',
    tableConfig: {
      limit: 5,
    },
    styleConfig: {
      theme: {
        background: '#3e3c89',
      },
    },
  };
}
