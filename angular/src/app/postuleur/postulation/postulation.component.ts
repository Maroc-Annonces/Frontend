import {Component, OnInit} from '@angular/core';
import {PostService} from "../../Services/Post/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
  styleUrls: ['./postulation.component.css']
})
export class PostulationComponent implements OnInit{
  chercheur = {
    firstName : '',
    lastName: '',
    email: '',
    phone: 0,
    city: '',
    educationLevel: '',
    experience: 0,
    skills: '',
    image: ''
  }
  id: string | null ='';
  constructor(private servicePost: PostService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  postuler(chercheur: any) {
     if (chercheur.firstName != '' &&

      chercheur.lastName != '' &&

      chercheur.email != '' &&

      chercheur.phone != 0 &&

      chercheur.city != '' &&

      chercheur.educationLevel != '' &&

      chercheur.experience != 0 &&

      chercheur.skills != '' &&

      chercheur.image != '') {
       let arrayImage = chercheur.image.split('C:\\fakepath\\')
       chercheur.image = arrayImage[1]
      this.servicePost.postuler(this.id, chercheur)
        .subscribe({
          next: () => {
            console.log(this.id, chercheur);
            // todo : display data
          },
          error: err => {
            console.error(err);
          }
        })
    }
  }
}
