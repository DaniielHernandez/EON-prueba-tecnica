import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PersonaAgregarComponent } from '../persona-agregar/persona-agregar.component';
import { PersonaEditarComponent } from '../persona-editar/persona-editar.component';
import { PersonaEliminarComponent } from '../persona-eliminar/persona-eliminar.component';
import { Persona } from '../../interfaces/persona';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit, OnDestroy {
  personas: Persona[] = [];
  getSubscription: Subscription;
  dialogAddSubscription: Subscription;
  dialogPutSubscription: Subscription;
  dialogDelSubscription: Subscription;

  constructor(public dialog: MatDialog, public personaService: PersonaService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.getSubscription = this.personaService.getPersonas()
      .subscribe( data => {
        // Se consulto correctamente
        this.personas = [];
        this.personas = data;
      });
  }

  modalAgregarPersona() { 
    const dialogAdd = this.dialog.open(PersonaAgregarComponent);
    this.dialogAddSubscription = dialogAdd.afterClosed().subscribe(result => {
      // console.log(`Dialog Add result: ${result}`);
      if (result != undefined) {
        this.cargarUsuarios();
      }
    });
  }

  modalEditarPersona(personaUpdate:Persona) {
    const dialogPut = this.dialog.open(PersonaEditarComponent,{data:personaUpdate});
    this.dialogPutSubscription = dialogPut.afterClosed().subscribe(result => {
      // console.log(`Dialog Put result: ${result}`);
      if (result != undefined) {
        this.cargarUsuarios();
      }
    });
  }
  
  modalEliminarPersona(personaDelete:Persona) {
    const dialogDel = this.dialog.open(PersonaEliminarComponent,{data:personaDelete});
    this.dialogPutSubscription = dialogDel.afterClosed().subscribe(result => {
      // console.log(`Dialog Delete result: ${result}`);
      if (result != undefined) {
        this.cargarUsuarios();
      }
    });
  }

  ngOnDestroy() {
    if (this.getSubscription) {
      this.getSubscription.unsubscribe();
    }
    if (this.dialogAddSubscription) {
      this.dialogAddSubscription.unsubscribe();
    }
    if (this.dialogPutSubscription) {
      this.dialogPutSubscription.unsubscribe();
    }
    if (this.dialogDelSubscription) {
      this.dialogDelSubscription.unsubscribe();
    }
  }
}