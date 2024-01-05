import {Component, OnInit} from '@angular/core';
import {PostService} from "../../Services/Post/post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  Post: Array<any> = [];
  constructor(private service:PostService) {
  }
  ngOnInit() {
    this.getAllPost()
  }
  getAllPost() {
    this.service.getAllPost()
      .subscribe({
        next: data => {
          var array = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].status == "ACCEPTED") {
                  array.push(data[i])
                }
            }
          this.Post = array
          console.log(data)
        },
        error: err => {
          console.error(err);
        }
      });
  }
}
