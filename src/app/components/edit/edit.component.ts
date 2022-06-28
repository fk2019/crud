import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
posts=[
  {title:"First post", content:"the first post"},
  {title:"Second post", content:"the second post"},
  {title:"Third post", content:"the third post"}
  ]
  
    constructor() { }

  ngOnInit(): void {
  }

}
