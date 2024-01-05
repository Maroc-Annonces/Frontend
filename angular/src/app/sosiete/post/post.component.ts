import {Component, OnInit} from '@angular/core';
import {SosieteServiceService} from "../../Services/Sosiete/sosiete-service.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  implements OnInit{
  posts: Array<any> = [];
  constructor(private serviceSociete: SosieteServiceService) {
  }
  ngOnInit() {
    this.getAllPost()
  }
  getAllPost() {
    this.serviceSociete.getSosieteById(localStorage.getItem('id_societe'))
      .subscribe({
        next: data => {
          //@ts-ignore
          this.posts = data.jobOffers
        },
        error: err => {
          console.error(err);
        }
      });
  }
}
