import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav
  constructor( private observer:BreakpointObserver) { }

  
  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe({
      next:(res)=>{
        if(res.matches){
          this.sidenav.mode='over';
          this.sidenav.close();
        }else{
          this.sidenav.mode='side';
          this.sidenav.open();
        }
      },
      error:(msg)=>{
        console.log(msg)
      }
    })
  }
}
