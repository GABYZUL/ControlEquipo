import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiequiposService } from 'src/app/services/servicesce/apiequipos.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { VermasComponent } from './elementos/vermas/vermas.component';

@Component({
  selector: 'app-disponibilidaddiaria',
  templateUrl: './disponibilidaddiaria.component.html',
  styleUrls: ['./disponibilidaddiaria.component.css'],
})
export class DisponibilidaddiariaComponent implements OnInit {
  title = 'disponibilidad';
  displayedColumns: string[] = [
    'equipo',
    'DescripciondeEquipo',
    'estatus',
    'tiempodeatraso',
    'fechadeSCOC',
    'unidad',
    'acciones',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiequiposService) {}
  ngOnInit(): void {
    this.getAllDisponibilidad();
  }
  getdisponibilidadByid(row: any) {
    this.dialog
      .open(VermasComponent, {
        width: '50%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Aceptar') {
          this.getAllDisponibilidad();
        }
      });
  }
  getAllDisponibilidad() {
    this.api.getDisponibilidad()
    .subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },

      error: (err) => {
        alert('Error while fetching the records');
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
