import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router'
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'crud';
  loading=false;
  form:FormGroup;
  progress=0;
  fileName='';

  
  constructor(private router: Router,
    private fb:FormBuilder, private fileUpload:FileUploadService){
    this.router.events.subscribe((event:Event)=>{
      this.navigationHandler(event)
    })
    this.form=this.fb.group({
      name:[''],
      avatar:[null]
    })
  }
  private navigationHandler(event:Event){
    if(event instanceof NavigationStart){
      this.loading=true;
       
    } 
    if(event instanceof NavigationEnd){
      this.loading=false;
     
    }    
  }

  
  
}
