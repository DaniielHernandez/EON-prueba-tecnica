import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/persona';

@Component({
  selector: 'app-tarjeta-presentacion',
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrls: ['./tarjeta-presentacion.component.css']
})
export class TarjetaPresentacionComponent implements OnInit {

  @Input() persona: Persona;

  constructor() {
  }

  ngOnInit() {
  }

}
