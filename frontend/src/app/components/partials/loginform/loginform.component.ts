import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  loginForm: FormGroup;

  constructor(private auth: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    })
  }

  login() {
    // this.auth.loginUser();

    console.log(this.loginForm.controls.username.value);
    
  }
}
