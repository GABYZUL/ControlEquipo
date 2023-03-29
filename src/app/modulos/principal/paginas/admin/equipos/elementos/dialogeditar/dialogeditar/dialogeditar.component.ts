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
  actionBtn: String = "Actualizar";
  constructor(private formBuilder: FormBuilder,
    private api: ApiequiposService,
    @Inject (MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<DialogeditarComponent>){}
    ngOnInit(): void{
      this.editarEquipoForm = this.formBuilder.group({
        id: [{value: '', disabled: true}],
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
        costodolares: ['', Validators.required],
        nombreactualiza: ['', Validators.required]
      })
      if(this.data){
        this.editarEquipoForm.controls['id'].setValue(this.data.id);
        this.editarEquipoForm.controls['tipoequipo'].setValue(this.data.tipoequipo);
        this.editarEquipoForm.controls['noeco'].setValue(this.data.noeco);
        this.editarEquipoForm.controls['unidad'].setValue(this.data.unidad);
        this.editarEquipoForm.controls['modelo'].setValue(this.data.modelo);
        this.editarEquipoForm.controls['anio'].setValue(this.data.anio);
        this.editarEquipoForm.controls['numeroserie'].setValue(this.data.numeroserie);
        this.editarEquipoForm.controls['motor'].setValue(this.data.motor);
        this.editarEquipoForm.controls['seriemotor'].setValue(this.data.seriemotor);
        this.editarEquipoForm.controls['estatus'].setValue(this.data.estatus);
        this.editarEquipoForm.controls['atencion'].setValue(this.data.atencion);
        this.editarEquipoForm.controls['costopesos'].setValue(this.data.costopesos);
        this.editarEquipoForm.controls['costodolares'].setValue(this.data.costodolares);
        this.editarEquipoForm.controls['nombreactualiza'].setValue(this.data.nombreactualiza);
      }
    }
    
    actualizarEquipo() {
      //const id = this..id;
      
      this.api.actualizarEquipo(this.editarEquipoForm.value,this.data.id).subscribe({
        next:(res)=>{ 
          console.log(this.editarEquipoForm.value)
          console.log(this.data.noeco);
          alert("Cambios hechos");
          this.editarEquipoForm.reset();
          this.dialogRef.close('Actualizar');
        },
        error: (err) => {
          console.log(err);
          alert("Error al actualizar equipo: " + err.message);
        }
      })
  }
}