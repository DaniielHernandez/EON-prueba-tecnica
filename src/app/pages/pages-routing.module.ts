import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { PersonasComponent } from './personas/personas.component';
import { TablePostComponent } from './table-post/table-post.component';


const routes: Routes = [
  {
    path: '',
    component: EmpresaComponent
  },
  {
    path: 'Personas',
    component: PersonasComponent
  },
  {
    path: 'Posts',
    component: TablePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
