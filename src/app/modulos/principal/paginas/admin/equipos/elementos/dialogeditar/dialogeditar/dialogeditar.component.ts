import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiequiposService } from 'src/app/services/servicesce/apiequipos.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogeditar',
  templateUrl: './dialogeditar.component.html',
  styleUrls: ['./dialogeditar.component.css']
})
export class DialogeditarComponent implements OnInit{
  editarEquipoForm !: FormGroup;
  actionBtn: String = "Save";
  constructor(private formBuilder: FormBuilder,
    private api: ApiequiposService,
    @Inject (MAT_DIALOG_DATA) public editData:any,
    private dialogRef: MatDialogRef<DialogeditarComponent>){}
    ngOnInit(): void{
      this.editarEquipoForm = this.formBuilder.group({
        tipoequipo: ['', Validators.required],
        noeco: ['', Validators.required],
        unidad: ['', Validators.required],
        modelo: ['', Validators.required],
        anio: ['', Validators.required],
        numeroserie: ['', Validators.required],
        motor: ['', Validators.required],
        seriemotor:['', Validators.required],
        estatus: ['', Validators.required],
        atencion: ['', Validators.required],
        costopesos: ['', Validators.required],
        costodolares: ['', Validators.required]
      })
    }
    actualizarEquipo(){
      this.api.actualizarEquipo(this.editarEquipoForm.value, this.editData.id).subscribe({
        next:(res)=>{
          alert("Cambios hechos");
          this.editarEquipoForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>{
          alert("Error!!!");
        }
      })
    }

}
