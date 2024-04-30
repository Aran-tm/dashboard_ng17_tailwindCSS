import { Component, OnInit } from '@angular/core';
import { routes } from '../../app.routes';  // se importan las rutas
import { RouterModule } from '@angular/router';

@Component({
 selector: 'app-sidemenu',
 standalone: true,
 imports: [RouterModule],   // se hacen las importaciones debido a que es un Standalone Component
 templateUrl: './sidemenu.component.html',
 styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  public menuItems = routes
    .map(
      route => route.children ?? []
    )
    .flat()
    .filter(route => route && route.path && !route.path.includes('**'))
    .filter(route => !route.path?.includes(':'));

  constructor() {

    // concatena todos los sub arrays
    // const dashboardRoutes = routes.
    //   map(
    //     route => route.children ?? []
    // )
    //   .flat()
    //   .filter( route => route && route.path )
    //   .filter( route => !route.path?.includes(':') )

    // muestro por consola todas las rutas de mi aplicacion
    // console.log(dashboardRoutes);
  }

  ngOnInit() {

    // // muestro por consola todas las rutas de mi aplicacion
    console.log(this.menuItems);
  }
}
