import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../services/firebase.service';
import { AuthService } from '../../../services/auth.service';

import { Entrantes } from '../../../models/entrantes';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrantes',
  templateUrl: './entrantes.component.html',
  styleUrls: ['./entrantes.component.css']
})
export class EntrantesComponent implements OnInit {

  entrantes: Observable<Entrantes[]>;
  count: number;
  cartTotal: number;
  user;
  pedidos = ['melocoton', 'carne'];	

  constructor(private firebaseService: FirebaseService, private authService: AuthService, private router: Router) { 

  	this.count = 0;
  	this.cartTotal = 0;

  }

  ngOnInit() {
  	this.entrantes = this.firebaseService.getEntrantes();
  	this.authService.getUser().subscribe( (user) => {
  		console.log(user.email)
  		this.user = user.email;
  	})
  }

  add(){
  	this.count++;
  }

  subtract(){

  	if(this.count > 0) {
  		this.count--;
  	}
  	
  }

  doOrder(starter){
  	this.cartTotal = this.count;
  	console.log('Numero de pedidos: ' + this.cartTotal + ' del producto: ' + starter);

  	this.firebaseService.addCart(this.user, starter, this.cartTotal);
  	this.router.navigate(['/cart']);
  }

}
