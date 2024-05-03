import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions({
    skipInitialTransition: true,  // salta la 1era transicion
    onViewTransitionCreated(transitionInfo) {
      console.log(transitionInfo);    // muestra el estado de la transition
    }
  }))]
};
