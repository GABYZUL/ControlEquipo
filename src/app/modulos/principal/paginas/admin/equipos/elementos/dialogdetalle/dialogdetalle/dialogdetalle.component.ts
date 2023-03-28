import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiequiposService } from 'src/app/services/servicesce/apiequipos.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dialogdetalle',
  templateUrl: './dialogdetalle.component.html',
  styleUrls: ['./dialogdetalle.component.css']
})
export class DialogdetalleComponent implements OnInit {
  title = 'Equipos';
  displayedColumns: string[] = [
    'id',
    'noeco',
    'tipoequipo',
    'unidad',
    'modelo',
    'estatus',
    'accion'
  ];
  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog,  private api: ApiequiposService){}
  ngOnInit(): void {
  }
  getEquipoById(id:number){
    this.api.getEquipoById(id).subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      },
      error: (err) => {
        ("Error al acceder a la base de datos")
      }
    })
  }
}
