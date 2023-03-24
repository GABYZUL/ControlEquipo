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

    // if(this.editData){
    //   this.actionBtn="Update";
    //     this.productForm.controls['tipoAnimal'].setValue(this.editData.tipoAnimal);
    //     this.productForm.controls['tipoAnimal'].disable();

    //     this.productForm.controls['nombreAni'].setValue(this.editData.nombreAni);
    //     this.productForm.controls['nombreAni'].disable();

    //     this.productForm.controls['nombreDueno'].setValue(this.editData.nombreDueno);
    //     this.productForm.controls['nombreDueno'].disable();

    //     this.productForm.controls['problema'].setValue(this.editData.problema);
    //     this.productForm.controls['problema'].disable();

    //     this.productForm.controls['telefono'].setValue(this.editData.telefono);
    //     this.productForm.controls['telefono'].disable();

    //     this.productForm.controls['fhIngreso'].setValue(this.editData.fhIngreso);
    //     this.productForm.controls['fhIngreso'].disable();

    //     this.productForm.controls['fhSalida'].setValue(this.editData.fhSalida);

    //     this.productForm.controls['consulta'].setValue(this.editData.consulta);

    //   }

  }

  postEquipo() {
    if (this.agregarequipoForm.valid) {
      this.api.crearEquipo(this.agregarequipoForm.value).subscribe({
          next: (res) => {
            alert("Equipo añadido de manera exitosa")
            this.agregarequipoForm.reset();
            this.dialogRef.close('Save');
          },
          error: () => {
            window.location.reload();
          }
        })
    }

  }
  // else{
  //   this.updateProduct()
  // }
}
