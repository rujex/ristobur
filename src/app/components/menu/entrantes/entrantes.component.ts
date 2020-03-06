import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../shared/services/firebase.service';
import { AuthService } from '../../../shared/services/auth.service';
import { DataService } from '../../../shared/services/data.service';
import { ToastrService } from 'ngx-toastr';

import { Entrantes } from '../../../shared/models/entrantes';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entrantes',
  templateUrl: './entrantes.component.html',
  styleUrls: ['./entrantes.component.css']
})
export class EntrantesComponent implements OnInit {

  entrantes: Observable<Entrantes[]>;
  nombreEntrante;
  precioEntrante;
  user: string;
  cantidad: number;
  isOrder: boolean;

  constructor(private firebaseService: FirebaseService, private authService: AuthService, private dataService: DataService, private router: Router, private toastr: ToastrService) {
  }
  /*
  * inicializo la variable cantidad
  * entrantes contiene el id
  */
  ngOnInit() {
    this.cantidad = 1;
    this.entrantes = this.firebaseService.getEntrantes();
  	this.authService.getUser().subscribe( (user) => {
  		this.user = user.email;
    })

  }

  /*
  * Guardo el nombre y el precio segun el id
  * @params id
  */
  getEntrante(id){
    this.firebaseService.getEntrante(id).subscribe( (dato) =>{
      this.nombreEntrante = dato.nombre;
      this.precioEntrante = dato.precio;
    })
  }

  doOrder(nombre, precio){
    var total = this.cantidad * precio;
    this.firebaseService.addCart(this.user, nombre, this.cantidad, total);
    this.isOrder = true;
    this.router.navigate(['/menu']);
    this.toastr.success(nombre + ' añadido al carro', '', {
      positionClass: 'toast-top-center',
    });
    this.dataService.setIsOrder(this.isOrder);
  }

}
