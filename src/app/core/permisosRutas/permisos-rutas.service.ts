import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificacionService } from 'src/app/autentificacion/autentificacion.service';


@Injectable({
  providedIn: 'root'
})
export class PermisosRutasService implements CanActivate {

  constructor(private router:Router, private autenticacionPrd: AutentificacionService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!Boolean(this.autenticacionPrd.getAutenticationByToken())){
      alert("No ha iniciado sesion.")
      return this.router.parseUrl("")
    }
    return true;
  }
}
