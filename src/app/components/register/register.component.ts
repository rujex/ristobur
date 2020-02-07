import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage;
  successMessage;
  registerForm: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', Validators.required),
    });
  }

  /*
  * Registra un usuario
  */

  tryRegister(value){
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
    //  this.errorMessage = 'Tu cuenta no se ha podido crear';
      this.successMessage = 'Tu cuenta ha sido creada';
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    //  this.successMessage = '';
    })
  }

}
