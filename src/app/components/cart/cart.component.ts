import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../shared/services/firebase.service';
import { AuthService } from '../../shared/services/auth.service';
import { DataService } from '../../shared/services/data.service';

import { Observable } from 'rxjs';

import { Cart } from '../../shared/models/cart';

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

  	 this.authService.getUser().subscribe( user => {
  	 	this.user = user.email;
  	 	console.log(this.user);
  	 	this.products = this.firebaseService.getCart(this.user);
  	 })
  }

}
