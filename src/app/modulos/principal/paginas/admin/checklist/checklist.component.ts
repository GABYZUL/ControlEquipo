import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from 'src/app/services/api.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { ApiequiposService } from 'src/app/services/servicesce/apiequipos.service';



@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})


export class ChecklistComponent implements OnInit {
  title = 'checkList';
  displayedColumns: string[] = [
    'noEquipo',
    'tipoEquipo',
    'status',
    'areaCL',
    'atendidoH',
    'acciones'
  ];

  dataSource !: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiCL: ApiequiposService) { }

  ngOnInit(): void {
    this.getcheckList();
  }

  getcheckList() {
    this.apiCL.getcheckList()
      .subscribe({
        next: (resCL) => {
          this.dataSource = new MatTableDataSource(resCL);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          alert("Error while fetching the records")
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


