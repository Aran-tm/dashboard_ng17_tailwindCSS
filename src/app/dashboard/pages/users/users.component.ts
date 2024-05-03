import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export default class UsersComponent implements OnInit {

  // injecto el user service en este componente
  public usersService = inject(UserService);

  constructor() { }

  ngOnInit() {
  }

}
