import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../shared/services/firebase.service';
import { AuthService } from '../../../shared/services/auth.service';
import { DataService } from '../../../shared/services/data.service';
import { ToastrService } from 'ngx-toastr';

import { Ensaladas } from '../../../shared/models/ensaladas';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ensaladas',
  templateUrl: './ensaladas.component.html',
  styleUrls: ['./ensaladas.component.css']
})
export class EnsaladasComponent implements OnInit {

  ensaladas: Observable<Ensaladas[]>;
  nombreEnsalada;
  precioEnsalada;
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
    this.ensaladas = this.firebaseService.getEnsaladas();
  	this.authService.getUser().subscribe( (user) => {
  		this.user = user.email;
    })

  }

  /*
  * Guardo el nombre y el precio segun el id
  * @params id
  */
  getEnsalada(id){
    this.firebaseService.getEnsalada(id).subscribe( (dato) =>{
      this.nombreEnsalada = dato.name;
      this.precioEnsalada = dato.price;
    })
  }

  doOrder(nombre, precio){
    var total = this.cantidad * precio;
    this.firebaseService.addCart(this.user, nombre, this.cantidad, total);
    this.dataService.setIsOrder(this.isOrder = true);
    this.router.navigate(['/menu']);
    this.toastr.success(nombre + ' añadido al carro', '', {
      positionClass: 'toast-top-center',
    });
    this.dataService.setIsOrder(this.isOrder);
  }

}
