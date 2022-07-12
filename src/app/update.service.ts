import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UpdateService {
   
  readonly baseUrl='http://localhost:8000';
  
  constructor(private http:HttpClient) { }

  postProduct(product:FormGroup){
    
    return this.http.post(`${this.baseUrl}/api/prods`,product.value)
  }
  getData(){
    return this.http.get(`${this.baseUrl}/api/items`)    
  }
  
}
