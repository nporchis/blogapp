import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() allPosts : Post[];
  postSubscription : Subscription;

  constructor(
    private postService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe( (posts : Post[]) => {
      this.allPosts = posts;
    })
    this.postService.getPosts();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
