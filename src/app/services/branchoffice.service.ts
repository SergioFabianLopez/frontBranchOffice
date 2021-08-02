import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { branchoffice } from '../models/branchoffice/branchoffice.module';

// import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BranchofficeService {
  baseURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getbranchoffice(){
    const url = this.baseURL + '/sucursal/all';
    return this.http.get(url);
  }

  deletebranchoffice(id:number){
    const url = this.baseURL + '/sucursal/delete';
    this.http.post(url,{
      Id:id
    }).toPromise().then((data: any) => {
      return data;
    })
  }
}