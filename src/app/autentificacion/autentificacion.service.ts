import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private ingresar: boolean = false;

  constructor(private http: HttpClient) {
  }

  public ingresarAplicativo(id:number) {

     return this.http.get<any>("http://localhost:3000/usuarios/"+id);

  }

  getTipoUsuario():string{
    const token = sessionStorage.getItem("token") as string;
    const decodedToken = this.decodificadorJwt(token);
    return decodedToken.tipo;
  }

  private decodificadorJwt(token: string):any{
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c){
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''))
    return JSON.parse(jsonPayload);
  }

  public habilitarlogeo() {
    return this.ingresar;
  }
  public getAutenticationByToken(){
    return sessionStorage.getItem("token");
  }
}
