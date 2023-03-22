import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-vermas',
  templateUrl: './vermas.component.html',
  styleUrls: ['./vermas.component.css'],
})
export class VermasComponent implements OnInit {
  disponibilidadForm!: FormGroup;
  actionBtn: String = 'Guardar';

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public detallesData: any
  ) {}
  ngOnInit(): void {
    this.disponibilidadForm = this.formBuilder.group({
      equipo: [''],
      DescripciondeEquipo: [''],
      tiempodeatraso: [''],
      fechadeSCOC: [''],
    });
    if (this.detallesData) {
      this.actionBtn = 'Aceptar';
      this.disponibilidadForm.controls['equipo'].setValue(
        this.detallesData.equipo
      );
      this.disponibilidadForm.controls['DescripciondeEquipo'].setValue(
        this.detallesData.DescripciondeEquipo
      );
      this.disponibilidadForm.controls['tiempodeatraso'].setValue(
        this.detallesData.tiempodeatraso
      );
      this.disponibilidadForm.controls['fechadeSCOC'].setValue(
        this.detallesData.fechadeSCOC
      );

      this.disponibilidadForm.controls['equipo'].disable();
      this.disponibilidadForm.controls['DescripciondeEquipo'].disable();
      this.disponibilidadForm.controls['tiempodeatraso'].disable();
      this.disponibilidadForm.controls['fechadeSCOC'].disable();
    }
  }
}
