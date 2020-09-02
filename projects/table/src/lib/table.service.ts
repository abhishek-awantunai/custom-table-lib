import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private _httpClient: HttpClient) {}

  getTableList(url) {
    return this._httpClient.get(url + '/comments');
  }
}
