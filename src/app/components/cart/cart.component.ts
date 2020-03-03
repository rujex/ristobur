import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

import { Observable } from 'rxjs';

import { Cart } from '../../models/cart';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	products: Observable<Cart>;
	user;
  isOrder: boolean;

  constructor(private firebaseService: FirebaseService, private authService: AuthService, private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit() {
     this.isOrder = this.dataService.getIsOrder();

     if(this.isOrder){
       this.toastr.success("El pedido ha sido enviado.")
     }

  	 this.authService.getUser().subscribe( user => {
  	 	this.user = user.email;
  	 	console.log(this.user);
  	 	this.products = this.firebaseService.getCart(this.user);
  	 })
  }

}
