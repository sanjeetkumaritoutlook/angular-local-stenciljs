import { Injectable } from '@angular/core';
//Use Angular's HttpClient to manage your HTTP requests.

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//ng generate service api
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Sample public API

  constructor(private http: HttpClient) { }
   // Method to POST JSON data
   postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
