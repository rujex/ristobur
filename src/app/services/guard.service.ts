import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  isLogged: boolean;


  constructor(private authService: AuthService, private router: Router) {
  	
  }

  canActivate() {

    return this.authService.userData$.pipe(
      map( user => {
        if(!user){
          alert('No has iniciado sesión');
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
     );
  }
}
