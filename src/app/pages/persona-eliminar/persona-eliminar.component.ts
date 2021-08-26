import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../interfaces/persona';

@Component({
  selector: 'app-persona-eliminar',
  templateUrl: './persona-eliminar.component.html',
  styleUrls: ['./persona-eliminar.component.css']
})
export class PersonaEliminarComponent implements OnInit, OnDestroy {

  delSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<PersonaEliminarComponent>,
    public personaService: PersonaService,
    @Inject(MAT_DIALOG_DATA) public data: Persona
  ) { }
  
  ngOnInit() {
  }

  eliminarClick(personaEliminada: Persona) {
    this.delSubscription = this.personaService.deletePersona(personaEliminada)
      .subscribe((resp)=>{
        // Se elimino correctamente
        this.dialogRef.close(true);
      },(err:Error)=>{
        // Error de la peticion DELETE
        this.dialogRef.close(false);
      });
  }
  
  ngOnDestroy() {
    if (this.delSubscription) {
      this.delSubscription.unsubscribe();
    }
  }
}
