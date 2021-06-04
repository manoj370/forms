import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(public http: HttpClient) { }
  // For Read Operation
  public get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(url, { params });
  }

  // For Create Operation
  public post<T>(url: string, model: T): Observable<T> {
    return this.http.post<T>(url, (model));

  }

  // For Update Operation
  public update<T>(url: string, model: T): Observable<T> {
    return this.http.put<T>(url, JSON.stringify(model));
  }

  // For Delete Operation by ID
  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
  // For fetch Operation by ID
  public fetch<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  // For Delete Operation by Object
  public deleteByObj<T>(url: string, model: T): Observable<T> {
    return this.http.post<T>(url, JSON.stringify(model));
  }
  public postData(url: string, formData: FormData) {
    return this.http.post<any>(url, formData);
  }
  public updateData(url: string, formData: FormData) {
    return this.http.put<any>(url, formData);
  }

}
