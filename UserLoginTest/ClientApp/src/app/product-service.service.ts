import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  serviceUrl: string = "api/product/";
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.serviceUrl = baseUrl + this.serviceUrl;
  }

  GetProducts(){
    let apiUrl = this.serviceUrl + 'list';
    return this.http.get(apiUrl);
  }
}
