import { Component, OnInit } from '@angular/core';
import { UpdateService } from 'src/app/update.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  readData:any;
  constructor(private updateService:UpdateService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.updateService.getData().subscribe({
      next:(res)=>{
        this.readData=res;
        this.readData=this.readData.data
        console.log(this.readData)
      },
      error:(msg)=>{
        console.log('Error is', msg)
      }
    })
  }

}
