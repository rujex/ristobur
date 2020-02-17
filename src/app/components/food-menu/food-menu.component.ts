import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {


  constructor(  private authService: AuthService,
                private router: Router
             ) { }

  ngOnInit() {

  }

  /*
  * Cierra sesión
  */
  signOut() {
  	this.authService.doLogout();
  }

}
