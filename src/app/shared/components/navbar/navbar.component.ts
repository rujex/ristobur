import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service'
import { FirebaseService } from '../../services/firebase.service';

import { Observable } from 'rxjs';

import { Cart } from '../../../shared/models/cart';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean;
  isOrder: boolean;
  user: string;
  products: Observable<Cart[]>;
  count: number;

  constructor(private authService: AuthService, private firebase: FirebaseService, private router: Router) {
    this.count = 0;
   }
  /*
  * Se controlan las variables isLogged e isOrder en función de las condiciones
  */
  ngOnInit() {
  		this.authService.getUser().subscribe( (user) => {
        this.user = user.email;
  			if(user.email == null || user.email == '' || user.email == undefined) {
          this.isLogged = false;
  			}else{
          this.isLogged = true;
          this.products = this.firebase.getCart(this.user);
          this.products.forEach((data) => {
            this.count = data.length;
            console.log(data.length)
            data.forEach( (element) => {
              if(element.isOrder == true){
                this.isOrder = true;
              }else {
                this.isOrder = false;
              }
            })
          })
  			}
      })
  }

  /*
  * Cierra sesión
  */
  signOut() {
  	this.authService.doLogout();
  	alert('Has cerrado sesión');
  }

  checkShop(){
    if(!this.isOrder){
      alert('No has realizado ningún pedido')
      this.router.navigate(['/menu'])
    }
  }

}
