import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';

const routes: Routes = [
  {
    path:"crear",
    component:CrearPersonaComponent
  },
  {
    path:"buscar-producto",
    component:BuscarProductoComponent
  },
  {
    path:"crear-producto",
    component:CrearProductoComponent
  },
  {
    path:"editar-producto/:id",
    component:EditarProductoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
