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




@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  title = 'Equipos';
  displayedColumns: string[] = [
    'noeco',
    'tipomaquina',
    'idunidad',
    'modelo',
    'anio',
    'serie',
    'motor',
    'seriemotor',
    'estatus',
    'atencion',
    'costoPesos',
    'costoDolares',
    'accion'
  ];

  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiequiposService) { }

  ngOnInit(): void {
    this.getAllEquipos();
  }

  OpenDialogAgregarEquipo() {
    this.dialog.open(DialogagregarequipoComponent, {
      // data: {
      //   animal:'PERRO',
      // },
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
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("Error while fetching the records")
        }
      })
  }
  deleteEquipo(id: number) {
    this.api.deleteEquipo(id).subscribe({
      next: (res) => {
        alert("Equipo eliminado!")
        this.getAllEquipos();
      },
      error: () => {
        alert("Error!!!")
      }
    })
  }
  editEquipo(row: any) {
    this.dialog.open(DialogeditarComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'Actualizar') {
        this.getAllEquipos();
      }
    })
  }
  getEquipoByid(row: any) {
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
