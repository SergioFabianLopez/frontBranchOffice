import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../models/product/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getproducts(){
    const url = this.baseURL + '/product/all';
    return this.http.get(url);
  }
  creatproduct(pproduct: product)
  {
    const url = this.baseURL + '/product/create';
    this.http.post(url,pproduct).toPromise().then((data: any) => {
      return data;
    })
  }
  getproductsid(id:number){
    const url = this.baseURL + `/product/get?id=${id}`;
    return this.http.get(url);
  }
}
