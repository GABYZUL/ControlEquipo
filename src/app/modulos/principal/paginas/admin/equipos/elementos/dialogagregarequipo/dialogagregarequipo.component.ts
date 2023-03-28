import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiequiposService } from 'src/app/services/servicesce/apiequipos.service';


@Component({
  selector: 'app-dialogagregarequipo',
  templateUrl: './dialogagregarequipo.component.html',
  styleUrls: ['./dialogagregarequipo.component.css']
})
export class DialogagregarequipoComponent implements OnInit {
  agregarequipoForm !: FormGroup;
  actionBtn: String = "Save"

  constructor(private formBuilder: FormBuilder,
    private api: ApiequiposService,
    private dialogRef: MatDialogRef<DialogagregarequipoComponent>, @Inject (MAT_DIALOG_DATA) public editData: any) { }
  ngOnInit(): void {
    this.agregarequipoForm = this.formBuilder.group({
      tipoequipo: ['', Validators.required],
      noeco: ['', Validators.required],
      unidad: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: ['', Validators.required],
      numeroserie: ['', Validators.required],
      motor: ['', Validators.required],
      seriemotor: ['', Validators.required],
      estatus: ['', Validators.required],
      atencion: ['', Validators.required],
      costopesos: ['', Validators.required],
      costodolares: ['', Validators.required]
    })
    if(this.editData){
      this.agregarequipoForm.controls['id'].setValue(this.editData.id);
        this.agregarequipoForm.controls['tipoequipo'].setValue(this.editData.tipoequipo);
        this.agregarequipoForm.controls['noeco'].setValue(this.editData.noeco);
        this.agregarequipoForm.controls['unidad'].setValue(this.editData.unidad);
        this.agregarequipoForm.controls['modelo'].setValue(this.editData.modelo);
        this.agregarequipoForm.controls['anio'].setValue(this.editData.anio);
        this.agregarequipoForm.controls['numeroserie'].setValue(this.editData.numeroserie);
        this.agregarequipoForm.controls['motor'].setValue(this.editData.motor);
        this.agregarequipoForm.controls['seriemotor'].setValue(this.editData.seriemotor);
        this.agregarequipoForm.controls['estatus'].setValue(this.editData.estatus);
        this.agregarequipoForm.controls['atencion'].setValue(this.editData.atencion);
        this.agregarequipoForm.controls['costopesos'].setValue(this.editData.costopesos);
        this.agregarequipoForm.controls['costodolares'].setValue(this.editData.costodolares);

    }

  }

  postEquipo() {
    if(!this.editData){
    if (this.agregarequipoForm.valid) {
      this.api.crearEquipo(this.agregarequipoForm.value).subscribe({
          next: (res) => {
            alert("Equipo añadido de manera exitosa")
            this.agregarequipoForm.reset();
            this.dialogRef.close('Save');
          },
          error: () => {
            alert("Equipo añadido de manera exitosa");
            window.location.reload();
          }
        })
    }
  }else{
    this.actualizarEquipo();
  }

  }
  actualizarEquipo() {
    //const id = this..id;

    this.api.actualizarEquipo(this.agregarequipoForm.value,this.editData.id).subscribe({
      next:(res)=>{
        console.log(res);
        console.log(this.agregarequipoForm.value)
        console.log(this.editData.noeco);
        alert("Cambios hechos");
        this.agregarequipoForm.reset();
        this.dialogRef.close('Actualizar');
      },
      error: (err) => {
        console.log(err);
        alert("Error al actualizar equipo: " + err.message);
      }
    })
}
}
