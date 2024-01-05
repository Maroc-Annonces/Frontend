import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService{
  constructor(private http:HttpClient) {
  }
  public getAllPost(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`http://localhost:8080/api/v1/jobOffers`);
  }
  public postuler(id: string | null, chercheur: any) :Observable<any> {
    console.log(id, chercheur)
    return this.http.post(`http://localhost:8080/api/v1/Postulations/postuler/${id}`, chercheur)
  }
}
