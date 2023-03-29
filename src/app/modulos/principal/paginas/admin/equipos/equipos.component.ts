import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogagregarequipoComponent } from './elementos/dialogagregarequipo/dialogagregarequipo.component';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiequiposService } from 'src/app/services/servicesce/apiequipos.service';
import { DialogeditarComponent } from './elementos/dialogeditar/dialogeditar/dialogeditar.component';
import { DialogdetalleComponent } from './elementos/dialogdetalle/dialogdetalle/dialogdetalle.component';
import { AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  title = 'Equipos';
  displayedColumns: string[] = [
    'id',
    'noeco',
    'tipoequipo',
    'unidad',
    'modelo',
    'estatus',
    'anio',
    'numeroserie',
    'motor',
    'seriemotor',
    'costopesos',
    'costodolares',
    'accion'
  ];

  estatusOperativo = "";
  estatusInoperativo = "";
  estatusDesconocido = "";

  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor(private dialog: MatDialog, private api: ApiequiposService) { }

  ngOnInit(): void {
    this.getAllEquipos();
  }



  OpenDialogAgregarEquipo() {
    this.dialog.open(DialogagregarequipoComponent, {
      width: '30%',
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getAllEquipos();
      }
    })
  }

  getAllEquipos() {
    this.api.getEquipo()
      .subscribe({
        next: (res) => {
          const equiposOperativos = res.filter((equipo:unknown)=>{
            return (equipo as any).estatus === 'Operativo';
          });
          const equiposInoperativos = res.filter((equipo:unknown)=>{
            return (equipo as any).estatus === 'Inoperativo';
          });
          const equiposDesconocidos = res.filter((equipo:unknown)=>{
            return (equipo as any).estatus === 'Desconocido';
          });

          const totalEquiposOperativos = equiposOperativos.length;
          const totalEquiposInoperativos = equiposInoperativos.length;
          const totalEquiposDesconocidos = equiposDesconocidos.length;

          this.estatusOperativo = totalEquiposOperativos;
          this.estatusInoperativo = totalEquiposInoperativos;
          this.estatusDesconocido = totalEquiposDesconocidos;

          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          ("Error al acceder a la base de datos")
        }
      })
  }

  eliminarEquipo(id:number) {
      this.api.eliminarEquipo(id).subscribe({
      next: (res) => {
        alert("Equipo eliminado!")
        this.getAllEquipos();
      },
      error: () => {
        alert("Recargando la pagina")
        window.location.reload()
      }
    })
  }
  editEquipo(row:any) {
    this.dialog.open(DialogeditarComponent, {
      width: '50%',
      data: row // pasar el objeto completo 'row' a través de la propiedad 'editData'
    }).afterClosed().subscribe(val => {
      if (val === 'Actualizar') {
        this.getAllEquipos();
      }
    });
  }

  getEquipoByid(row:any) {
    this.dialog.open(DialogdetalleComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'Aceptar') {
        this.getAllEquipos();
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}