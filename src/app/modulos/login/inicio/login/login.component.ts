import { Component } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/autentificacion/autentificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuarios={
    IdOperador:0,
    numtrabajador:'',
    name:'',
    contra:'',
    tipoUsuario:''
  }

  public myForm!:FormGroup;

  constructor(private fb:FormBuilder, private loginPrd:AutentificacionService,
    private routerprd:Router){}

  ngOnInit():void{
    this.myForm = this.createMyForm();

  }

  private createMyForm():FormGroup{
    return this.fb.group({
      usuarios:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  public submitFormulario(){
    if(this.myForm.invalid){
      Object.values(this.myForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });
      return;
    }

       this.loginPrd.ingresarAplicativo(this.myForm.value.usuarios).subscribe({
        next:(res)=>{

          console.log(res[0].numtrabajador);
          console.log("CONSOLA")

            if((this.myForm.value.usuarios==(res[0].numtrabajador)) && (this.myForm.value.password==(res[0].contra))){
              if(res[0].tipoUsuario=='Administrador'){
                this.routerprd.navigateByUrl("/administrador/equipos")
              }else if(res[0].tipoUsuario=='Visitante'){
                this.routerprd.navigateByUrl("/visitante/equipos")
              }
            }else{
              alert("Credenciales incorrectas")
            }
        },
        error:(err)=>{
          alert("usuarios no encontrado");
        }
       }
       )

    }

  public get f():any{
    return this.myForm.controls;
  }
}
