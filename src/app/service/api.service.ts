import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  resName = new Subject<any>();
  count = new Subject<any>();
  constructor(private httpclient:HttpClient) { }
  public getMenu(){
   
    return this.httpclient.get(`https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad`);
  
  }
}
