import {Component, OnInit} from '@angular/core';
import {SosieteServiceService} from "../../Services/Sosiete/sosiete-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginSosieteComponent implements OnInit{
  login={
    email:'',
    login:''
  };
  constructor(private serviceSociete: SosieteServiceService, private router: Router) {
  }
  ngOnInit() {
  }
  loginSosiete(login: { login: string; email: string }) {
    if (login.email != '' && login.login != '') {
      this.serviceSociete.loginSosiete(login)
        .subscribe({
          next: data => {
            //@ts-ignore
            localStorage.setItem('id_societe', data.id);
            localStorage.setItem('id_agent', '');
            this.router.navigate(['SO/Dashboard/']);
          },
          error: err => {
            console.error(err);
          }
        })
    }
  }
}
