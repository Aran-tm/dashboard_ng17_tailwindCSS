import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '@services/user.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export default class UsersComponent implements OnInit {

  // injecto el user service en este componente
  // forma nueva para inyectar servicios o componentes
  public usersService = inject(UserService);

  constructor(

    // esta es otra forma para inyectar un servicio o componente a traves del constructor
    public userServices: UserService,
  ) {
  }

  ngOnInit() {
  }

}
