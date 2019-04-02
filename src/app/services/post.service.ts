import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { reject, resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  private savePosts(){
    firebase.database().ref('/posts').set(this.posts).then(
      (data: DataSnapshot) => {
        resolve(data)
      },error => {
        reject(error);
      }
    );
  }

  savePost(newPost) {
    var lastpostid = this.posts.length-1;
    var lastPost = this.posts[lastpostid];
    newPost.id = lastPost.id+1;
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
      );
  }

  updatePostLove(postId :number,loveIts :number)
  {
    const postIndexToUpdate = this.posts.findIndex( a => a.id == postId);
    this.posts[postIndexToUpdate].loveIts = loveIts;
    this.savePosts();
  }

  removePost(id: number) {
    const postIndexToRemove = this.posts.findIndex( a => a.id == id);
     this.posts.splice(postIndexToRemove, 1);
     this.savePosts();
  }

}
