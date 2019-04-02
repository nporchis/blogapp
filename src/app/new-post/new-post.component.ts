import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.sass']
})
export class NewPostComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private postService : PostService,
    private router : Router) { }

  newPostForm : FormGroup;

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newPostForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  onValidate(){
    var newPost = new Post(0,'','',0);
    newPost.content = this.newPostForm.get('content').value;
    newPost.title = this.newPostForm.get('title').value;

    this.postService.savePost(newPost);
    this.router.navigate(['/posts']);
  }
}
