import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Restaurante } from '../models/restaurante';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FirebaseService {

    private ruta = '/restaurantes'; 

	restaurantesRef: AngularFirestoreCollection<Restaurante>;
    
    constructor(private db: AngularFirestore){
    	this.restaurantesRef = db.collection(this.ruta);
    }

    /*
	* Devuelve los restaurantes
	* @ Return AngularFirestoreCollection<Restaurante> restaurantesRef
    */
    getRestaurantesList(): AngularFirestoreCollection<Restaurante> {
    	return this.restaurantesRef;
    }


    firequery(start, end){
       return this.db.collection(this.ruta, ref => ref.limit(4).orderBy('ciudad').startAt(start).endAt(end)).valueChanges();
    }
   
}