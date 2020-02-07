import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	errorMessage;
  successMessage;
  loginForm : any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', Validators.required),
    });
  }

  /*
  * Inicia sesión un usuario
  */

  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      console.log(res);
    //  this.errorMessage = 'Tu cuenta no se ha podido crear';
      this.successMessage = 'Has iniciado sesión';
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    //  this.successMessage = '';
    })
  }

}
