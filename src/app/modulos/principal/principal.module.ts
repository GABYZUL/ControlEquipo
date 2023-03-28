
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValorequiposComponent } from './paginas/admin/valorequipos/valorequipos.component';
import { DialogagregarequipoComponent } from './paginas/admin/equipos/elementos/dialogagregarequipo/dialogagregarequipo.component';
import { DialogdetalleComponent } from './paginas/admin/equipos/elementos/dialogdetalle/dialogdetalle/dialogdetalle.component';
import { DialogeditarComponent } from './paginas/admin/equipos/elementos/dialogeditar/dialogeditar/dialogeditar.component';
import { EquiposComponent } from './paginas/admin/equipos/equipos.component';

import { RouterModule } from '@angular/router';
import { InterfazModule } from 'src/app/interfaz/privado/menu/menu.module';
import { PrincipalComponent } from './principal.component';
//import { EquiposComponent } from './equipos/equipos.component';
//import { ValorequiposComponent } from './valorequipos/valorequipos.component';
//import { ChecklistComponent } from './checklist/checklist.component';
//import { DisponibilidaddiariaComponent } from './disponibilidaddiaria/disponibilidaddiaria.component';
//import { HorometrosComponent } from './horometros/horometros.component';
//import { PreventivosComponent } from './preventivos/preventivos.component';
//import { SemanalesComponent } from './semanales/semanales.component';

//import { ManpowerComponent } from './manpower/manpower.component';
//import { KpisComponent } from './kpis/kpis.component';
//import { DialoghoroRegistrarComponent } from './horometros/elementos/dialoghoro-registrar/dialoghoro-registrar.component';
//import { DialoghoroDetallesComponent } from './horometros/elementos/dialoghoro-detalles/dialoghoro-detalles.component';

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
//import { PreventivosFormComponent } from './preventivos/elementos/preventivos-form/preventivos-form.component';
//import { PrimerMantComponent } from './preventivos/elementos/primer-mant/primer-mant.component';
//import { DetallesPreventivosComponent } from './preventivos/elementos/detalles-preventivos/detalles-preventivos.component';
//import { ManpowerFormComponent } from './manpower/elementos/manpower-form/manpower-form.component';
//import { ManpowerDetallesComponent } from './manpower/elementos/manpower-detalles/manpower-detalles.component';
//import { SemanalesFormComponent } from './semanales/elementos/semanales-form/semanales-form.component';
//import { BitacoraFormComponent } from './bitacora/elementos/bitacora-form/bitacora-form.component';
//import { DetallesBitacoraComponent } from './bitacora/elementos/detalles-bitacora/detalles-bitacora.component';
import {MatCardModule} from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';

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
    EquiposComponent,
    DialogagregarequipoComponent,
    DialogdetalleComponent,
    DialogeditarComponent,
    ValorequiposComponent
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
    DialogeditarComponent
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
