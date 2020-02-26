import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
    
	public userData$: Observable<firebase.User>;

	constructor(private router: Router, private auth: AngularFireAuth){
		this.userData$ = this.auth.authState;
	}


    /*
    * Registra un usuario
    * @return devuelve una promesa
    * @param value
    */
    doRegister(value){
	   return firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
	     .then( (result) => {
	       window.alert('¡Te has registrado correctamente!')
	       console.log(result.user.email);
	     }).catch( (error) => {
	     	window.alert(error.message)
	     })
 	}

	/*
    * Inicia sesión un usuario
    * @return devuelve una promesa
    * @param value
    */
 	doLogin(value){
	   return firebase.auth().signInWithEmailAndPassword(value.email, value.password)
	     .then( (result) => {
	       this.router.navigate(['/menu']);
	     }).catch( (error) => {
	     	window.alert(error.message)
	     })
 	}

 	/*
    * Cierra sesión un usuario
    */
 	doLogout(){
 		return firebase.auth().signOut().then( () => {
 			this.router.navigate(['login']);
 		});
 	}

 	getUser(){
        return this.auth.user;
    }
}