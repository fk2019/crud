import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NavItem } from '../../model/nav-item';
import { NavService } from '../service/nav.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.css'],
  animations:[
    trigger('indicatorRotate',[
      state('collapsed',style({transform:'rotate(0deg)'})),
      state('expanded',style({transform:'rotate(180deg)'})),
      transition('expand<=>collapsed',
          animate('225ms cubic-beizer(0.4,0.0,0.2,1)'))
    ])
  ]
})
export class MenuListItemComponent implements OnInit {
  expanded=false;
  // @HostBinding() decorator binds to DOM's 
  // native property while @Input() binds to custom properties in  ts
  @HostBinding('attr.aria-expanded') ariaExpanded=this.expanded;
  @Input()
  item!: NavItem;
  @Input()depth!:number;

  constructor(public navService:NavService,
    public router:Router) {
      if(this.depth===undefined){
        this.depth=0;
      }
     }

  ngOnInit(): void {
    this.navService.currentUrl.subscribe({
      next:(url:string)=>{
        if(this.item.route && url){
          this.expanded=url.indexOf(`/${this.item.route}`)===0;
          this.ariaExpanded=this.expanded;
        }
      },
      error:(msg)=>{
        console.error('Error is',  msg)
      }
    })
  }
  onItemSelected(item:NavItem){
    if(!item.children || !item.children.length){
      this.router.navigate([item.route]);
    }
    if(item.children && item.children.length){
      this.expanded=!this.expanded;
    }
  }

}
