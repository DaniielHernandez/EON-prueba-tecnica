import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Comentario } from '../interfaces/comentario';

const postsUrl = ' https://jsonplaceholder.typicode.com/posts';
const comentariosUrl = 'https://jsonplaceholder.typicode.com/comments';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<Post[]>(postsUrl);
  }

  getComentariosById(postId:number) {
    return this.http.get<Comentario[]>(comentariosUrl+'?postId='+postId);
  }
}
