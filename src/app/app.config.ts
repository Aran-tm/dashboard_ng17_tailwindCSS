import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({
      skipInitialTransition: true,  // salta la 1era transicion
      // onViewTransitionCreated(transitionInfo) {
      //   console.log(transitionInfo);    // muestra el estado de la transition
      // }
      })
    ),    // importacion de todos los modulos
    importProvidersFrom(
      HttpClientModule
    )
  ]
};
