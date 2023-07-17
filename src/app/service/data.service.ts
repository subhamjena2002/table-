import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://192.168.100.113:3021/api/getallpin?_format=json'; 

  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    return this._http.get<any>(this.apiUrl);
  }
}
