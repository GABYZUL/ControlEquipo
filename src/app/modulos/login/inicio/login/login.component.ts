import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/autentificacion/autentificacion.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = {
    IdOperador: 0,
    numtrabajador: '',
    name: '',
    contra: '',
    tipoUsuario: ''
  }

  public myForm!: FormGroup;

  constructor(private fb: FormBuilder, private loginPrd: AutentificacionService,
    private routerprd: Router) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public submitFormulario(){
    if(this.myForm.valid){
      const {usuario, password} = this.myForm.value;

      this.loginPrd.ingresarAplicativo(usuario).subscribe({
        next:(res)=>{
          const [userData] = res;

          if(usuario == userData.numtrabajador && password == userData.contra){
            const tokenData = {
              usuario: userData.numtrabajador,
              tipo: userData.tipoUsuario
            };
            const token = this.signToken(tokenData, '');
            console.log('token', token);
            sessionStorage.setItem('token', JSON.stringify(token));

            if(userData.tipoUsuario == "Administrador"){
              this.routerprd.navigateByUrl("/administrador/equipos")
            }else if(userData.tipoUsuario == "Visitante"){
              this.routerprd.navigateByUrl("/visitante/equiposvisitante")
            }
          }else{
            alert("Usuario o contraseña incorrectos");
            console.log("VIENTOS")
          }
        },
        error:(err)=>{
          alert("Usuario no encontrado");
        }
      })
    }
  }


  base64url(source: any) {
    let encodedSource = CryptoJS.enc.Base64.stringify(source);
    encodedSource = encodedSource.replace(/=+$/, '');
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');
    return encodedSource;
  }

  encodeToken(payload: any) {
    var header = {
      "alg": "HS256",
      "typ": "JWT"
    };
    var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    var encodedHeader = this.base64url(stringifiedHeader);
    var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
    var encodedData = this.base64url(stringifiedData);

    var token = encodedHeader + "." + encodedData;
    return token;
  }

  signToken(payload: any, key: string) {
    var secret = key;
    let token: any = this.encodeToken(payload);

    var signature: any = CryptoJS.HmacSHA256(token, secret);
    signature = this.base64url(signature);

    var signedToken = token + "." + signature;
    return signedToken;
  }


  handleCredentialResponse(response: any) {
    console.log(response);
    console.log(this.routerprd);
    if (response.credential) {
      sessionStorage.setItem("token", response.credential);
      document.location.href = "sesiones/administrador/equipos";
    }
  }

  public get f(): any {
    return this.myForm.controls;
  }
}
