import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogdetallevisitante',
  templateUrl: './dialogdetallevisitante.component.html',
  styleUrls: ['./dialogdetallevisitante.component.css']
})
export class DialogdetallevisitanteComponent  implements OnInit {
  EquipoForm!: FormGroup;
  actionBtn: String = "Guardar"
  constructor(private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public detalle: any) { }
  ngOnInit(): void {
    this.EquipoForm = this.formBuilder.group({
      UnidadNegocio: [''],
      Año: [''],
      Atencion: [''],
      Estatus: [''],
    })
    if (this.detalle) {
      this.actionBtn = "Aceptar";
      this.EquipoForm.controls['UnidadNegocio'].setValue(
        this.detalle.UnidadNegocio
      );
      this.EquipoForm.controls['Año'].setValue(
        this.detalle.Año
      );
      this.EquipoForm.controls['Atencion'].setValue(
        this.detalle.Atencion
      );
      this.EquipoForm.controls['Estatus'].setValue(
        this.detalle.Estatus
      );
      this.EquipoForm.controls['UnidadNegocio'].disable();
      this.EquipoForm.controls['Año'].disable();
      this.EquipoForm.controls['Atencion'].disable();
      this.EquipoForm.controls['Estatus'].disable();

    }
  }
}
