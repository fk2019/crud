import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { json } from 'body-parser';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl='http://localhost:8000';
  constructor(private http: HttpClient) { }

  upload(file:File):Observable<any>{
    let formData:any= new FormData();
    
    formData.append('file',file);
    return this.http.post(`${this.baseUrl}/items`,formData,{
      reportProgress:true,    
      // observe:'events' , 
      responseType:'json'
    }).pipe(catchError(this.handleError))
  }
  postItems(products:NgForm):Observable<any>{
    return this.http.post(this.baseUrl,products)
  }
  getFiles():Observable<any>{
    return this.http.get(`${this.baseUrl}/items`)
  }

  handleError(error: HttpErrorResponse){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      // user-side error
      errorMessage=error.error.message;
    } else {
      // server side error
      errorMessage= `Error code :${error.status} \nMessage: ${error.message}`;

    }
    console.log(errorMessage);
    return throwError(()=>{
      return errorMessage
    })
  }

}


