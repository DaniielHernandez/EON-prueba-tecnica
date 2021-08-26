import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { EmpresaComponent } from './empresa/empresa.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { FormularioPersonaComponent } from './formulario-persona/formulario-persona.component';
import { PersonaAgregarComponent } from './persona-agregar/persona-agregar.component';
import { PersonaEditarComponent } from './persona-editar/persona-editar.component';
import { PersonaEliminarComponent } from './persona-eliminar/persona-eliminar.component';
import { PersonasComponent } from './personas/personas.component';
import { TablePostComponent } from './table-post/table-post.component';

@NgModule({
  declarations: [
    EmpresaComponent,
    FormularioPersonaComponent,
    PersonasComponent,
    PersonaAgregarComponent,
    PersonaEditarComponent,
    PersonaEliminarComponent,
    TablePostComponent,
    ComentariosComponent
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    MaterialModule
  ],
  entryComponents: [
    ComentariosComponent,
    PersonaAgregarComponent,
    PersonaEditarComponent,
    PersonaEliminarComponent
  ]
})
export class PagesModule { }
