import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.sass']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() id: number;
  @Input() created_at: Date;
  @Input() loveIts: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  dontLoveIt() {
    this.loveIts = this.loveIts - 1;
    this.postService.updatePostLove(this.id,this.loveIts);
  }

  loveIt() {
    this.loveIts = this.loveIts + 1;
    this.postService.updatePostLove(this.id,this.loveIts);
  }

  onRemovePost(id: number) {
    this.postService.removePost(id);
    this.postService.emitPosts();
  }

}
