import { Component } from '@angular/core';
import { Post } from './models/post';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogapp';
  posts: Post[] = [];

  constructor() {

    var config = {
      apiKey: "AIzaSyBPLPbf65h7-KQRRVwSl3VKrZFAiedQYvM",
      authDomain: "blog-b23fe.firebaseapp.com",
      databaseURL: "https://blog-b23fe.firebaseio.com",
      projectId: "blog-b23fe",
      storageBucket: "blog-b23fe.appspot.com",
      messagingSenderId: "822205571809"
    };
    firebase.initializeApp(config);
  }
}