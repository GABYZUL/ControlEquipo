import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PermisosRutasService } from 'src/app/core/permisosRutas/permisos-rutas.service';
//import { EquiposComponent } from './equipos/equipos.component';
//import { ValorequiposComponent } from './valorequipos/valorequipos.component';
//import { ChecklistComponent } from './checklist/checklist.component';
//import { DisponibilidaddiariaComponent } from './disponibilidaddiaria/disponibilidaddiaria.component';
import { EquiposComponent } from './paginas/admin/equipos/equipos.component';
import { ValorequiposComponent } from './paginas/admin/valorequipos/valorequipos.component';
import { ChecklistComponent } from './paginas/admin/checklist/checklist.component';
import { PrincipalComponent } from './principal.component';
import { LoginComponent } from '../login/inicio/login/login.component';
import { DisponibilidaddiariaComponent } from './paginas/admin/disponibilidaddiaria/disponibilidaddiaria.component';

const rutas: Routes = [
  {path:'', component:LoginComponent},
  {path:'administrador',  component: PrincipalComponent, canActivate:[PermisosRutasService],
  children:[
    {path:'equipos', component: EquiposComponent, },
    {path:'administrador', component: EquiposComponent},
    {path:'valorequipos', component: ValorequiposComponent},
    {path:'checklist', component: ChecklistComponent}
    //{path:'equipos', component: EquiposComponent},
    //{path:'valorequipos', component: ValorequiposComponent},
    //{path:'checklist', component:ChecklistComponent},
    //{path:'disponibilidaddiaria', component: DisponibilidaddiariaComponent}

  ]
},
];



@NgModule({
  imports: [CommonModule, RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
