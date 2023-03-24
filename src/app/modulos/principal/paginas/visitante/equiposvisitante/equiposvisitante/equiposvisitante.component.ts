import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogdetallevisitanteComponent } from '../elementos/dialogdetallevisitante/dialogdetallevisitante.component';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiequiposService } from 'src/app/services/servicesce/apiequipos.service';





@Component({
  selector: 'app-equiposvisitante',
  templateUrl: './equiposvisitante.component.html',
  styleUrls: ['./equiposvisitante.component.css']
})
export class EquiposvisitanteComponent implements OnInit {
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
  getEquipoByid(row: any) {
    this.dialog.open(DialogdetallevisitanteComponent, {
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
