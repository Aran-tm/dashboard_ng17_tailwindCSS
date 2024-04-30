import { Component, OnInit } from '@angular/core';
import { routes } from '../../app.routes';  // se importan las rutas

@Component({
 selector: 'app-sidemenu',
 standalone: true,
 templateUrl: './sidemenu.component.html',
 styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  constructor() {
    const dashboardRoutes = routes.
      map(
        route => route.children ?? []
    )

    // muestro por consola todas las rutas de mi aplicacion
    console.log(dashboardRoutes);
  }
 ngOnInit() {
 }
}
