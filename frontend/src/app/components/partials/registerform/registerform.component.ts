import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent {
  registerForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password1: new FormControl(),
    password2: new FormControl(),
  })

  constructor(private auth: AuthService) {

  }

  register() {
    this.auth.registerUser();
    console.log(this.registerForm.controls);
    
  }

}
