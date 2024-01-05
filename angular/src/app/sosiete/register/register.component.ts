import {Component, OnInit} from '@angular/core';
import {SosieteServiceService} from "../../Services/Sosiete/sosiete-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  societe =  {
    name: '',
    description: '',
    phone: 0,
    email: '',
    login: '',
    image: null
  }
  constructor(private serviceSociete: SosieteServiceService, private router: Router) {
  }
  ngOnInit() {
  }
  register(societe: any) {
    if (societe.name != '' &&

      societe.description != '' &&

      societe.email != '' &&

      societe.phone != 0 &&

      societe.login != '' &&

      societe.image != null ) {
      let arrayImage = societe.image.split('C:\\fakepath\\')
      societe.image = arrayImage[1]
      this.serviceSociete.register(societe)
        .subscribe({
          next: () => {
            this.router.navigate(['SO/Validation/'+societe.email]);
          },
          error: err => {
            console.error(err);
          }
        })
    }
  }
}
