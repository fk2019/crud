import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/file-upload.service';
import { FormBuilder, FormGroup,NgForm } from '@angular/forms';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';

import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form:FormGroup;
  progress=0;
  fileName='';
  message='';
  filesInfo?:Observable<any>;
  constructor(private router: Router,
    private fb:FormBuilder, private fileUpload:FileUploadService){
    this.router.events.subscribe((event:Event)=>{

    })
    this.form=this.fb.group({     
      avatar:[null]
    })
  }

  ngOnInit(): void {
   this.filesInfo=this.fileUpload.getFiles();
  }
  
  uploadFile(event:any){
    const file:File= event.target.files[0];
    this.form.patchValue({
      avatar:file
    })
    this.form.get('avatar')?.updateValueAndValidity();
    if(file){
      console.log(this.form.value.avatar)
      this.fileUpload.upload(this.form.value.avatar).subscribe((event:HttpEvent<any>)=>{
          if(event.type===HttpEventType.UploadProgress && event.total){
            this.progress=Math.round(100*(event.loaded/event.total))
          }else if(event instanceof HttpResponse){
            this.message=event.body.message;
            this.filesInfo=this.fileUpload.getFiles();           
          }          
        })      
    }
   
  }
  onSubmit(productsform:NgForm){
    this.fileUpload.postItems(productsform)
  }
}
