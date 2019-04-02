import { DatePipe, formatDate } from '@angular/common';

export class Post {
  id: number;
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(id : number,title: string, content: string, loveIts: number) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = new Date(formatDate(Date.now(), 'yyyy/MM/dd hh:mm', 'en-US'));
  }
}

