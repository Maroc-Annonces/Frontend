import { Injectable } from '@angular/core';
import {AutoService} from "../Services/Auto/auto.service";
@Injectable({
  providedIn: 'root'
})
export class SosieteService {
  serviceAuto = new AutoService()

  actions: Array<any> = [
    {title: 'Dashboard', "route": "SO/Dashboard",'id':1},
    {title: 'Post', "route": "SO/Post",'id':2},
    {title: 'Postuleur', "route": "SO/Postuleur",'id':3}
  ];
  constructor() {
  }
  setInfo({data}: { data: any }){
    this.actions = data
  }
  getInfo(){
    return this.actions
  }
}
