import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
public currentUrl=new BehaviorSubject<string>('');
//  provide current URL and light up active menu item
  constructor(private router:Router) {
    this.router.events.subscribe({
      next:(event)=>{
        if(event instanceof NavigationEnd){
          this.currentUrl.next(event.urlAfterRedirects);
        }
      },
      error:(msg)=>{
        console.log('Error in routing: ',msg)
      }
    })
   }
}
