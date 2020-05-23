import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { VentasComponent } from './components/ventas/ventas.component';

const routes:Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'ventas',component:VentasComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'nosotros',component:NosotrosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
