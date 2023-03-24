
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValorequiposComponent } from './paginas/admin/valorequipos/valorequipos.component';
import { DialogagregarequipoComponent } from './paginas/admin/equipos/elementos/dialogagregarequipo/dialogagregarequipo.component';
import { DialogdetalleComponent } from './paginas/admin/equipos/elementos/dialogdetalle/dialogdetalle/dialogdetalle.component';
import { DialogeditarComponent } from './paginas/admin/equipos/elementos/dialogeditar/dialogeditar/dialogeditar.component';
import { EquiposComponent } from './paginas/admin/equipos/equipos.component';
import { DisponibilidaddiariaComponent } from './paginas/admin/disponibilidaddiaria/disponibilidaddiaria.component';
import { RouterModule } from '@angular/router';
import { InterfazModule } from 'src/app/interfaz/privado/menu/menu.module';
import { PrincipalComponent } from './principal.component';

import { VermasComponent } from './paginas/admin/disponibilidaddiaria/elementos/vermas/vermas.component';

//IMPORTS DE FORMS
import  {MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
import { EquiposvisitanteComponent } from './paginas/visitante/equiposvisitante/equiposvisitante/equiposvisitante.component';
import { DialogdetallevisitanteComponent } from './paginas/visitante/equiposvisitante/elementos/dialogdetallevisitante/dialogdetallevisitante.component';

//DIALOGS EQUIPOS
//import { DialogagregarequipoComponent } from './equipos/elementos/dialogagregarequipo/dialogagregarequipo.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    //EquiposComponent,
    //ValorequiposComponent,
    //ChecklistComponent,
    //DisponibilidaddiariaComponent,
    //HorometrosComponent,
    //PreventivosComponent,
    //SemanalesComponent,

    //ManpowerComponent,
    //KpisComponent,
    //DialoghoroRegistrarComponent,
    //DialoghoroDetallesComponent,
    //InicioComponent,
    //PreventivosFormComponent,
    //PrimerMantComponent,
    //DetallesPreventivosComponent,
    //ManpowerFormComponent,
    //ManpowerDetallesComponent,
    //SemanalesFormComponent,
    //BitacoraFormComponent,
    //DetallesBitacoraComponent,
    //DialogagregarequipoComponent
    VermasComponent,
    DisponibilidaddiariaComponent,
    EquiposComponent,
    DialogagregarequipoComponent,
    DialogdetalleComponent,
    DialogeditarComponent,
    ValorequiposComponent,
    EquiposvisitanteComponent,
    DialogdetallevisitanteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    InterfazModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatSidenavModule,
    ReactiveFormsModule,
    NgChartsModule,
    MatCardModule
  ],
  exports: [
    PrincipalComponent,
    EquiposComponent,
    DialogagregarequipoComponent,
    DialogdetalleComponent,
    DialogeditarComponent,
    DisponibilidaddiariaComponent,
    VermasComponent
    //EquiposComponent,
    //ValorequiposComponent,
    //ChecklistComponent,
    //DisponibilidaddiariaComponent,
    //HorometrosComponent,
    //PreventivosComponent,
    //SemanalesComponent,
    //ManpowerComponent,
    //KpisComponent,
    //DialoghoroRegistrarComponent,
    //DialoghoroDetallesComponent,
    //DialogagregarequipoComponent



  ]
})
export class PrincipalModule { }
