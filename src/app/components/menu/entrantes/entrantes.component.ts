import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../services/firebase.service';
import { AuthService } from '../../../services/auth.service';
import { DataService } from '../../../services/data.service';

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
  user: string;
  cantidad: number;
  isOrder: boolean;

  constructor(private firebaseService: FirebaseService, private authService: AuthService, private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  	this.entrantes = this.firebaseService.getEntrantes();
  	this.authService.getUser().subscribe( (user) => {
  		this.user = user.email;
  	})
  }

  doOrder(nombre){
    this.firebaseService.addCart(this.user, nombre, this.cantidad);
    this.isOrder = true;
    this.dataService.setIsOrder(this.isOrder);
    this.router.navigate(['/cart']);
  }

}
