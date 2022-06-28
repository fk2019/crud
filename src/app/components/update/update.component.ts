import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Iproducts } from 'src/app/iproducts';
import { UpdateService } from 'src/app/update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  products:Iproducts[]=[];  
  productGroup=this.fb.group({
    pname:new FormControl('',Validators.required),
    price:new FormControl(null, Validators.required),
    code:new FormControl('',Validators.required),
    rdate:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    rating:new FormControl(null,Validators.required),
    file:new FormControl('',Validators.required)

  })

  constructor(public updateService:UpdateService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.resetForm();
    this.getfromApi();  
    console.log(this.productGroup.status)
  }
  get pname(){
    return this.productGroup.get('pname')
  }
  get price(){
    return this.productGroup.get('price')
  }
  get code(){
    return this.productGroup.get('code');
  }
  get rdate(){
    return this.productGroup.get('rdate')
  }
  get description(){
    return this.productGroup.get('description');
  }
  get rating(){
    return this.productGroup.get('rating')
  }
  get file(){
    return this.productGroup.get('file')
  }
  resetForm(form?:FormGroup){
  if(form){
    this.productGroup.reset({
      pname:[''],
      price:[null],
      code:[''],
      rdate:[''],
      desciption:[''],
      rating:[null],
      file:['']
    })   
  }
}
onSubmit(form:FormGroup){ 
  this.updateService.postProduct(form).subscribe({
    next(res){
      console.log('Response is: ',res)
    },
    error(msg){
      console.log('Error is: ',msg)
    }
  })
  this.resetForm(form)
}
uploadFile(event:any){
  if(event.target.files.lenght>0){
    const file=event.targe.files[0];
    this.productGroup.get('file')?.setValue(file)
    console.log(file)
  };

}
getfromApi(){
  this.updateService.getData().subscribe({
    next(res){
    
      console.log('Response is: ',res)
    },
    error(msg){
      console.log('Error is: ',msg)
    }
  })

}
}