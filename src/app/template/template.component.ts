import { Component, OnInit } from '@angular/core';
import{ApiService} from './../service/api.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  restaurantName:any
  countNumber:any
  constructor(private apiservice:ApiService) {
    this.apiservice.resName.subscribe(res=>{
      this.restaurantName = res
    })
this.getCount()
   }
   getCount(){
this.apiservice.count.subscribe(res=>{
  this.countNumber = res
})
   }

  ngOnInit(): void {
  }

}
