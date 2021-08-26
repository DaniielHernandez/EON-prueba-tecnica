import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Persona } from '../../interfaces/persona';
import { PersonaService } from '../../services/persona.service';
import { FormularioPersonaComponent } from '../formulario-persona/formulario-persona.component';

@Component({
  selector: 'app-persona-agregar',
  templateUrl: './persona-agregar.component.html',
  styleUrls: ['./persona-agregar.component.css']
})
export class PersonaAgregarComponent implements OnInit, OnDestroy {

  postSubscription: Subscription;
  @ViewChild(FormularioPersonaComponent,{static: true}) formulario: FormularioPersonaComponent;

  constructor(
    public dialogRef: MatDialogRef<PersonaAgregarComponent>,
    public personaService: PersonaService
  ) { }

  ngOnInit() {
    this.formulario.btnNameForm = 'Agregar';
  }

  agregarClick( personaNueva: Persona ) {
    this.postSubscription = this.personaService.postPersona(personaNueva)
      .subscribe((resp)=>{
        // Se agrego correctamente
        this.dialogRef.close(true);
      },
      (err:Error)=>{
        // Error de la peticion POST
        this.dialogRef.close(false);
      }
    );
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

}
