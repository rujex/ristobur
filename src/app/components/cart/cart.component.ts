import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	products: Observable<Cart>;
	user;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  	 this.firebaseService.getUser().subscribe( user => {
  	 	this.user = user.email;
  	 	console.log(this.user);
  	 	this.products = this.firebaseService.getCart(this.user);
  	 })
  	 
  }

}
