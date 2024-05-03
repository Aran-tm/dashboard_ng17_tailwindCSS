import { HttpClient } from '@angular/common/http';
import { Injectable, signal, inject, computed } from '@angular/core';
import { User, UsersResponse } from '@interfaces/req-response';
import { delay } from 'rxjs';

interface State {
  users: User[],
  loading: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // inyectando el http request client
  private http = inject(HttpClient);

  // creo un estado privado
  #state = signal<State>({
    loading: true,
    users: []
  })

  // creando una signal computada
  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );

  constructor() {

      // se realiza la peticion http de tipo get
    this.http.get<UsersResponse>(`https://reqres.in/api/users?page=2`)
        .pipe( delay(1500) )    // esperar un segundo y medio
        .subscribe(res => {

          this.#state.set({
            loading: false,
            users: res.data,
          })
      })
   }

}
