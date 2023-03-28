import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificacionService } from 'src/app/autentificacion/autentificacion.service';

@Injectable({
  providedIn: 'root'
})
export class RutasProtegidasGuard implements CanActivate {

  constructor(private router:Router, private AutentificacionService: AutentificacionService){
    this.tipoDeUsuario(this.AutentificacionService.getTipoUsuario());
  }
  public objetounico: any = {};
  public usuarioTipo: any;
  public redirectUrl: string | undefined;
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = sessionStorage.getItem("token") as string;
      this.objetounico = this.decodificarJwt(token);
      const expectedRole = route.data['expectedRole'];
      this.usuarioTipo = this.AutentificacionService.getTipoUsuario();
      if (this.usuarioTipo == expectedRole) {
        return true;
      } else {
        return this.router.parseUrl("");
      }
    }

  private decodificarJwt(token: string): any {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }

  tipoDeUsuario(tipo:any){
    if (tipo == 'Administrador'){
      this.usuarioTipo = 'Administrador';
      return this.usuarioTipo;
    } else if (tipo == 'Visitante'){
      this.usuarioTipo = 'Visitante';
      return this.usuarioTipo;
    }
  }
}