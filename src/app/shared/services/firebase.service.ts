import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';

import { Menu } from '../models/menu';
import { Entrantes } from '../models/entrantes';
import { Restaurante } from '../models/restaurante';
import { Cart } from '../models/cart';


@Injectable({providedIn: 'root'})
export class FirebaseService {

    private pathRestaurants = '/restaurantes';
    private pathMenu = '/menu';
    private pathEntrantes = '/menu/1/Entrantes';
    private pathCart = '/cart';



	restaurantesRef: AngularFirestoreCollection<Restaurante>;
    menuRef: AngularFirestoreCollection<Menu>;
    private cartDoc: AngularFirestoreDocument<Cart>;
    private cartRef;
    
    constructor(private db: AngularFirestore, private auth: AngularFireAuth ){
    	this.restaurantesRef = db.collection(this.pathRestaurants);
        this.menuRef = db.collection(this.pathMenu);
        this.cartRef = db.collection(this.pathCart);
    }

    /*
	* Devuelve los restaurantes
	* @return AngularFirestoreCollection<Restaurante> restaurantesRef
    */
    getRestaurantesList(): AngularFirestoreCollection<Restaurante> {
    	return this.restaurantesRef;
    }

    /*
    * Devuelve los restaurantes para el buscador
    * @return AngularFirestoreCollection<>
    * @param start, end
    */
    firequery(start, end){
       return this.db.collection(this.pathRestaurants, ref => ref.limit(4).orderBy('ciudad').startAt(start).endAt(end)).valueChanges();
    }

    getMenuList(){
        return this.db.collection<Menu>(this.pathMenu).valueChanges();
    }

    getEntrantes(){
        return this.db.collection<Entrantes>(this.pathEntrantes).valueChanges();
    }

    

    getCart(email){
       console.log('el email' + email);
       return this.db.doc<Cart>('cart/'+email).valueChanges();
    }

    addCart(email,producto, cantidad) {
       this.cartRef.doc(email).set({producto: producto, cantidad: cantidad, });
    }
    
   
}