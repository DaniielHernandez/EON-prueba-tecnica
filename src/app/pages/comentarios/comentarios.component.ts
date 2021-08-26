import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comentario } from '../../interfaces/comentario';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Comentario[]) { }

  ngOnInit() {
  }

}
