import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  actions: Array<any> = [
    {title: 'Dashboard', "route": "AG/Dashboard",'id':1},
    {title: 'Login', "route": "AG/Login",'id':2}
  ];
  constructor() { }
  setInfo({data}: { data: any }){
    this.actions = data
  }
  getInfo(){
    return this.actions
  }
}
