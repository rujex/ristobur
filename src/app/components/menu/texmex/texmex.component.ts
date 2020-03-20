import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../shared/services/firebase.service';
import { AuthService } from '../../../shared/services/auth.service';
import { DataService } from '../../../shared/services/data.service';
import { ToastrService } from 'ngx-toastr';

import { Texmex } from '../../../shared/models/texmex';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-texmex',
  templateUrl: './texmex.component.html',
  styleUrls: ['./texmex.component.css']
})
export class TexmexComponent implements OnInit {

  texmex: Observable<Texmex[]>;
  nombreTexmex;
  precioTexmex;
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
    this.texmex = this.firebaseService.getTexmex();
  	this.authService.getUser().subscribe( (user) => {
  		this.user = user.email;
    })

  }

  /*
  * Guardo el nombre y el precio segun el id
  * @params id
  */
  getTexmex(id){
    this.firebaseService.getOneTexMex(id).subscribe( (dato) =>{
      this.nombreTexmex = dato.name;
      this.precioTexmex = dato.price;
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
