import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../interfaces/persona';
import { FormularioPersonaComponent } from '../formulario-persona/formulario-persona.component';

@Component({
  selector: 'app-persona-editar',
  templateUrl: './persona-editar.component.html',
  styleUrls: ['./persona-editar.component.css']
})
export class PersonaEditarComponent implements OnInit, OnDestroy {

  putSubscription: Subscription;
  @ViewChild(FormularioPersonaComponent,{static: true}) formulario: FormularioPersonaComponent;

  constructor(
    public dialogRef: MatDialogRef<PersonaEditarComponent>,
    public personaService: PersonaService,
    @Inject(MAT_DIALOG_DATA) public data: Persona
  ) { }
  
  ngOnInit() {
    this.formulario.btnNameForm = 'Actualizar Información';
  }

  editarClick(personaEditada: Persona) {
    this.putSubscription = this.personaService.putPersona(personaEditada)
      .subscribe((resp)=>{
        // Se actualizo correctamente
        this.dialogRef.close(true);
      },(err:Error)=>{
        // Error de la peticion PUT
        this.dialogRef.close(false);
      });
  }

  ngOnDestroy() {
    if (this.putSubscription) {
      this.putSubscription.unsubscribe();
    }
  }
}
