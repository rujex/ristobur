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

	products: Observable<Cart[]>;
	user;
  isOrder: boolean;
  total: number;
  cantidad: number;

  constructor(private firebaseService: FirebaseService, private authService: AuthService,
                      private dataService: DataService, private toastr: ToastrService) {
                this.total = 0;
               }

  ngOnInit() {
     this.isOrder = this.dataService.getIsOrder();

  	 this.authService.getUser().subscribe( user => {
       this.user = user.email;

       this.products = this.firebaseService.getCart(this.user);
       this.products.subscribe( (dato) => {
          dato.forEach(element => {
            this.total += element.total;
            console.log('variable total: ' + this.total);
          })
       })
     })


  }


  deleteProduct(email, product){
    this.total = 0;
    this.firebaseService.deleteProduct(email, product);
  }

}
