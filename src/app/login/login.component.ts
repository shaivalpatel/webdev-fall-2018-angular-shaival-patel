import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logged;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  login(username: string, password: string) {
    console.log([username, password]);
    const v = this.userService.login(username, password)
      .then(response => response.json()).then(user => this.router.navigate(['course', user.id]) );
  }
}
