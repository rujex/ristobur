import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';
import { FirebaseService } from '../../shared/services/firebase.service';

import { Menu } from '../../shared/models/menu';

import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  menu: Observable<Menu[]>;


  constructor(  private authService: AuthService,
                private router: Router,
                private firebase: FirebaseService
             ) { }
  /*
  * Devuelve el menu
  */
  ngOnInit() {
    this.menu = this.firebase.getMenuList();
    this.menu.subscribe(dato => {console.log(dato.forEach(element => {console.log(element.tipo)}))});
  }




}
