import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../shared/services/firebase.service';
import { AuthService } from '../../../shared/services/auth.service';
import { DataService } from '../../../shared/services/data.service';
import { ToastrService } from 'ngx-toastr';

import { Carnes } from '../../../shared/models/carnes';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carnes',
  templateUrl: './carnes.component.html',
  styleUrls: ['./carnes.component.css']
})
export class CarnesComponent implements OnInit {

  carnes: Observable<Carnes[]>;
  nombreCarne;
  precioCarne;
  user: string;
  cantidad: number;
  isOrder: boolean;

  constructor(private firebaseService: FirebaseService, private authService: AuthService,
     private dataService: DataService, private router: Router, private toastr: ToastrService) {
  }
  /*
  * inicializo la variable cantidad
  * carne contiene el id
  */
  ngOnInit() {
    this.cantidad = 1;
    this.carnes = this.firebaseService.getCarnes();
  	this.authService.getUser().subscribe( (user) => {
  		this.user = user.email;
    })
  }

  /*
  * Guardo el nombre y el precio segun el id
  * @params id
  */
  getCarne(id){
    this.firebaseService.getCarne(id).subscribe( (dato) =>{
      this.nombreCarne = dato.name;
      this.precioCarne = dato.price;
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
