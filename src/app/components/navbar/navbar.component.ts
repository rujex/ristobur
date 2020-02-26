import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	isLogged: boolean;

  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {

  		this.authService.getUser().subscribe( (user) => {

  			if(user.email == null || user.email == '' || user.email == undefined) {
  				this.isLogged = false;
  			}else{
  				this.isLogged = true;
  			}
  			
  		})
  }

  metodo(){
  	  this.dataService.variable.emit(true);
  }

  /*
  * Cierra sesión
  */
  signOut() {
  	this.authService.doLogout();
  	alert('Has cerrado sesión');
  }

}
