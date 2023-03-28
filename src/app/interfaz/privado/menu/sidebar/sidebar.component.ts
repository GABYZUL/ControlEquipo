import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/autentificacion/autentificacion.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

 
  public objetounico = {};
  constructor(private aut:AutentificacionService, private router:Router){}

  ngOnInit(): void {
  }
  public cerrarSesion(){
    sessionStorage.clear();
    this.router.navigateByUrl("/publico/sesiones/login");
  }
}
