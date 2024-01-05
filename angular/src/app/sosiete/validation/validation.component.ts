import {Component, OnInit} from '@angular/core';
import {SosieteServiceService} from "../../Services/Sosiete/sosiete-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit{
  email: string | null ='';

  validation = {
    email: '',
    code: 0
  }
  constructor(private serviceSociete: SosieteServiceService, private route: ActivatedRoute, private router: Router) {
    this.email = this.route.snapshot.paramMap.get('email')
  }
  ngOnInit() {
  }
  validationEmailCode(validation: any) {
    if (validation.code != 0) {
      validation.email = this.email
      validation.code = parseInt(validation.code)
      console.log(validation)
      this.serviceSociete.validationEmailCode(validation)
        .subscribe({
          next: () => {
            this.router.navigate(['SO/Login']);
          },
          error: err => {
            if(err.error.message == 'Your account is verified successfully'){
              this.router.navigate(['SO/Login']);
            } else {
              alert(err.error.message)
            }
          }
        })
    }
  }
}
