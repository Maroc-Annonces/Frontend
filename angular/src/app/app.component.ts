import {Component, OnInit, signal} from '@angular/core';
import { Location } from '@angular/common';
import {AgentService} from "./agent/agent.service";
import {SosieteService} from "./sosiete/sosiete.service";
import {PostuleurService} from "./postuleur/postuleur.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  route = this.location.path()
  UrlPath = this.route.split('/')
  currentURL =this.UrlPath[1]

  constructor(private location: Location) {
  }
  actions: Array<any> = []
  title = 'angular';
  ngOnInit(): void {
    var actionsService:any
    if (this.currentURL == 'AG'){
      actionsService = new AgentService();
    } else if (this.currentURL == 'SO'){
      actionsService = new SosieteService();
    } else {
      actionsService = new PostuleurService()
    }
    this.actions = actionsService.getInfo()
  }
  showNav(){
    var navbarUl = document.getElementById("navbar-default");
    if (navbarUl != null){
      if (navbarUl.getAttribute('class') == "hidden w-full md:block md:w-auto"){
        navbarUl.setAttribute('class', "w-full md:block md:w-auto")
      }else {
        navbarUl.setAttribute('class', "hidden w-full md:block md:w-auto")
      }
    }
  }
}
