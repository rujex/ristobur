import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../shared/services/firebase.service';
import { AuthService } from '../../../shared/services/auth.service';
import { DataService } from '../../../shared/services/data.service';
import { ToastrService } from 'ngx-toastr';

import { Postres } from '../../../shared/models/postres';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {

  postres: Observable<Postres[]>;
  nombrePostre;
  precioPostre;
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
    this.postres = this.firebaseService.getPostres();
  	this.authService.getUser().subscribe( (user) => {
  		this.user = user.email;
    })

  }

  /*
  * Guardo el nombre y el precio segun el id
  * @params id
  */
  getPostre(id){
    this.firebaseService.getPostre(id).subscribe( (dato) =>{
      this.nombrePostre = dato.name;
      this.precioPostre = dato.price;
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
