import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public form;
loggedInUser$;
  constructor(
    private userService:UsersService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: '',
      password: '',
    });
    this.loggedInUser$ = this.userService.loggedInUser$
   }

  ngOnInit(): void {
  }
login(){
const credential = this.form.value;
this.loggedInUser$ = this.userService.login(credential.username, credential.password);
console.log(this.loggedInUser$)
}
logout() {;
    this.userService.logout()
    console.log("logout", this.loggedInUser$)
    }
}
