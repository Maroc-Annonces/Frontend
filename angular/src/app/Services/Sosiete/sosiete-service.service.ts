import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SosieteServiceService {

  constructor(private http:HttpClient) { }

  register(societe: any) {
    return this.http.post(`http://localhost:8080/api/v1/companies/auth`, societe)
  }

  validationEmailCode(validation: any) {
    return this.http.post(`http://localhost:8080/api/v1/companies/verify`, validation)
  }

  loginSosiete(login: { login: string; email: string }) {
    return this.http.post(`http://localhost:8080/api/v1/companies/login`, login)
  }

  getSosieteById(idSosiete: string | null) {
    return this.http.get(`http://localhost:8080/api/v1/companies/${idSosiete}`)
  }
}
