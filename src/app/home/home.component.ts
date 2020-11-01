import { Component, OnInit } from '@angular/core';
import {ApiService} from './../service/api.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  category:any
  dish:any
  filterDish:any
 
  constructor(private apiservice : ApiService) { }

  ngOnInit(): void {
this.getMenuItems()

  }
  getMenuItems(){
    this.apiservice.getMenu().subscribe(res=>{
      this.apiservice.resName.next(res['0']['restaurant_name'])
     this.category =res['0']['table_menu_list']
      
    })
  }
  onCatId(catId){
this.dish = this.category.filter(i =>i.menu_category === catId.tab.textLabel);
this.filterDish =this.dish['0']['category_dishes']

}
 
  change(value: number): void {
   
    this.apiservice.count.next(value)
     console.log(value);

}

}
