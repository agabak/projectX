import { Component, OnInit } from '@angular/core';
import { PostService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: any;
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.getPostS();
  }

  getPostS() {
    this.service.getPosts().subscribe((response) => {
            this.posts = response; },
            (error) => {
              console.log(error);
            }
      );
  }
}
