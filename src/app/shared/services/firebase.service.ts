import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    // devuelve los entrantes
    getEntrantes(){
      return  this.db.collection<Entrantes>(this.pathEntrantes)
              .snapshotChanges().pipe(
                map(actions => actions.map(a => {
                  const data = a.payload.doc.data() as Entrantes;
                  const id = a.payload.doc.id;
                  return {id, ...data};
                }))
              );

    }

    getEntrante(id){
      return this.db.collection('menu').doc('1').collection('Entrantes').doc<Entrantes>(id)
      .snapshotChanges().pipe(
        map(action => {
          const data = action.payload.data() as Entrantes;
          const id = action.payload.id;
          return {id, ...data};
        })
      );
    }
    /*
    * Devuelve el documento email de la coleccion carta
    * @return id, data
    */
    getCart(email){
       return  this.db.collection('cart/').doc(email)
       .snapshotChanges().pipe(
        map(action => {
          const data = action.payload.data() as Cart;
          const id = action.payload.id;
          return {id, ...data};
        })
      );
    }
    /*
    * Añade un campo al documento email
    * Añade la cantidad y el total a un documento de la coleccion producto
    * @params email, producto, cantidad, total
    */
    addCart(email,producto,cantidad,total) {

      this.cartRef.doc(email).set({
        isOrder: true
      })

      var pruebaCollection = this.cartRef.doc(email).collection(producto)
      const id = this.db.createId();
      var newDoc = pruebaCollection.doc(id);

      newDoc.set({
        cantidad: cantidad,
        total: total
      }).then(function () {
              console.log('Documento añadido');
      }).catch(function (error) {
              console.error('Error adding document: ', error);
      });
    }




}
