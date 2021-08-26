import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { Comentario } from '../../interfaces/comentario';
import { MatDialog } from '@angular/material/dialog';
import { ComentariosComponent } from '../comentarios/comentarios.component';

@Component({
  selector: 'app-table-post',
  templateUrl: './table-post.component.html',
  styleUrls: ['./table-post.component.css']
})
export class TablePostComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  comentarios: Comentario[] = [];
  postSubscription: Subscription;
  comentariosSubscription: Subscription;

  constructor(public dialog: MatDialog, private postService: PostService) { }
  
  ngOnInit() {
    this.postSubscription = this.postService.getList()
      .subscribe(resp => {
        this.posts.push( ...resp );
      });
  }

  verComentarios(post:Post) {
    this.comentariosSubscription = this.postService.getComentariosById(post.id)
      .subscribe( data => {
        // Se consulto comentarios correctamente
        this.comentarios = [];
        this.comentarios = data;
        this.modalVerComentarios(this.comentarios);
      });
  }

  modalVerComentarios(comentariosPost:Comentario[]) { 
    this.dialog.open(ComentariosComponent,{data:comentariosPost});
  }
  
  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
    if (this.comentariosSubscription) {
      this.comentariosSubscription.unsubscribe();
    }
  }
}
