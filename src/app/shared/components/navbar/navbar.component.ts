import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service'
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean;
  isOrder: boolean;
  user: string;

  constructor(private dataService: DataService, private authService: AuthService, private firebase: FirebaseService) { }

  ngOnInit() {

  		this.authService.getUser().subscribe( (user) => {
        this.user = user.email;
  			if(user.email == null || user.email == '' || user.email == undefined) {
          this.isLogged = false;
  			}else{
          this.isLogged = true;
          this.firebase.getCart(this.user).subscribe( (check) => {
            console.log('cantidad:' + check.isOrder)
            if(check.isOrder == null || check.isOrder == undefined){
              this.isOrder = false;
              console.log('isOrder: ' + this.isOrder);
            }else{
              this.isOrder = true;
              console.log('isOrder: ' + this.isOrder);
            }
          })
  			}

      })





  }

  metodo(){
  	  this.dataService.variable.emit(true);
  }

  /*
  * Cierra sesión
  */
  signOut() {
  	this.authService.doLogout();
  	alert('Has cerrado sesión');
  }

}
