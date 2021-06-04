import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpservice';
import { urlServices } from './serviceUrls';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public urlservices:urlServices,private http:HttpServiceService) { 

  }
   sendGetRequest(){
    return this.http.get(this.urlservices.getCall);
  }
  postRequest(obj:any){
    return this.http.post(this.urlservices.postcall,obj);
  }
  fetchRequest(id:any){
    return this.http.fetch(this.urlservices.fetch+'/'+id);
  }

}
