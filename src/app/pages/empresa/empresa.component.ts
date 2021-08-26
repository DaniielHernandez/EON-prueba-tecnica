import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../interfaces/persona';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit, OnDestroy {

  personas: Persona[] = [];
  getSubscription: Subscription;

  constructor( private personaService: PersonaService ) {
  }

  ngOnInit() {
    this.getSubscription = this.personaService.getPersonas()
      .subscribe( data => {
        // Se consulto correctamente
        this.personas.push( ...data);
      });
  }

  ngOnDestroy() {
    if (this.getSubscription) {
      this.getSubscription.unsubscribe();
    }
  }

}