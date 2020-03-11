import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service'
import { FirebaseService } from '../../services/firebase.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean;
  isOrder: boolean;
  user: string;

  constructor(private authService: AuthService, private firebase: FirebaseService, private router: Router) { }
  /*
  * Se controlan las variables isLogged e isOrder en función de las condiciones
  */
  ngOnInit() {
  		this.authService.getUser().subscribe( (user) => {
        this.user = user.email;
  			if(user.email == null || user.email == '' || user.email == undefined) {
          this.isLogged = false;
  			}else{
          this.isLogged = true;
          this.firebase.getIsOrder(this.user).subscribe( (check) => {
            if(check.isOrder == null || check.isOrder == undefined){
              this.isOrder = false;
            }else{
              this.isOrder = true;
            }
          })
  			}
      })
  }

  /*
  * Cierra sesión
  */
  signOut() {
  	this.authService.doLogout();
  	alert('Has cerrado sesión');
  }

  checkShop(){
    if(!this.isOrder){
      alert('No has realizado ningún pedido')
      this.router.navigate(['/menu'])
    }
  }

}
