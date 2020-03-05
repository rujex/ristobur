import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  isLogged: boolean;


  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {

  }

  canActivate() {

    return this.authService.userData$.pipe(
      map( user => {
        if(!user){
          this.toastr.info('No has iniciado sesión', '', {
            positionClass: 'toast-top-center'
          });
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
     );
  }
}
