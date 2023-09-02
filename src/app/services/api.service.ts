import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public api:HttpClient) { }

  apiUrl = "https://localhost:7011/api/";

  public async Get (gatewayController: string){
    var respo:any;
    await this.api.get(this.apiUrl+gatewayController).toPromise().then((res=>{
      respo=res;
      console.log(res);
    })
    )
  }

}
