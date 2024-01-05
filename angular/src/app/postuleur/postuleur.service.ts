import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostuleurService {

  actions: Array<any> = [
    {title: 'Home', "route": "PO/Home",'id':1}
  ];
  constructor() { }
  setInfo({data}: { data: any }){
    this.actions = data
  }
  getInfo(){
    return this.actions
  }
}
