import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../shared/services/firebase.service';
import { AuthService } from '../../../shared/services/auth.service';
import { DataService } from '../../../shared/services/data.service';
import { ToastrService } from 'ngx-toastr';

import { Sandwiches } from '../../../shared/models/sandwiches';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sandwiches',
  templateUrl: './sandwiches.component.html',
  styleUrls: ['./sandwiches.component.css']
})
export class SandwichesComponent implements OnInit {
  sandwiches: Observable<Sandwiches[]>;
  nombreSandwich;
  precioSandwich;
  user: string;
  cantidad: number;
  isOrder: boolean;

  constructor(private firebaseService: FirebaseService, private authService: AuthService,
     private dataService: DataService, private router: Router, private toastr: ToastrService) {
  }
  /*
  * inicializo la variable cantidad
  * texmex contiene el id
  */
  ngOnInit() {
    this.cantidad = 1;
    this.sandwiches = this.firebaseService.getSandwiches();
  	this.authService.getUser().subscribe( (user) => {
  		this.user = user.email;
    })

  }

  /*
  * Guardo el nombre y el precio segun el id
  * @params id
  */
  getSandwich(id){
    this.firebaseService.getSandwich(id).subscribe( (dato) =>{
      this.nombreSandwich = dato.name;
      this.precioSandwich = dato.price;
    })
  }

  doOrder(nombre, precio){
    var total = this.cantidad * precio;
    this.firebaseService.addCart(this.user, nombre, this.cantidad, total);
    //this.dataService.setIsOrder(this.isOrder = true);
    this.router.navigate(['/menu']);
    this.toastr.success(nombre + ' añadido al carro', '', {
      positionClass: 'toast-top-center',
    });
    //this.dataService.setIsOrder(this.isOrder);
  }
}
