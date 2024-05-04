import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop'
import { TitleComponent } from '@shared/title/title.component';
import { switchMap } from 'rxjs';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  template: `

    <app-title [title]="titleLabel()" />

    <!-- si existe un usuario -->
    @if(user()) {
      <section>
        <img [srcset]="user()!.avatar"
        [alt]='user()!.first_name'
        />

        <div>
          <h3>{{user()?.first_name}} {{user()?.last_name}}</h3>
          <p>{{user()?.last_name}}</p>
        </div>
      </section>
    } @else {
      <p>Loading....</p>
    }
  `,
})
export default class UserComponent implements OnInit {

  // transformar un observable a una signal
  private route = inject(ActivatedRoute);
  private usersService = inject(UserService);

  //public user = signal<User | undefined>(undefined);
  // funcion que permite tomar un observable y recibir una signal
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({id}) => this.usersService.getUserById(id))
    )
  )

  public titleLabel = computed(() => {

    // si hay usuario
    if (this.user()) {
      return `Informacion del usuario ${this.user()?.first_name} ${this.user()?.last_name}`;
    }

    return `Informacion del usaurio`;
  });

  constructor() {

    // este es un obserable
    // this.route.params.subscribe(params => {
    //   console.log({ params });
    // })
  }

  ngOnInit() {
  }
}
