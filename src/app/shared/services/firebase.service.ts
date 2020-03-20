import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Menu } from '../models/menu';
import { Entrantes } from '../models/entrantes';
import { Cart } from '../models/cart';
import { Texmex } from '../models/texmex';


@Injectable({providedIn: 'root'})
export class FirebaseService {

    private pathRestaurants = '/restaurantes';
    private pathMenu = '/menu';
    private pathEntrantes = '/menu/1/Entrantes';
    private pathTexmex = '/menu/2/TexMex';
    private pathCart = '/cart';

    private menuRef: AngularFirestoreCollection<Menu>;
    private cartDoc: AngularFirestoreDocument<Cart>;
    private cartRef;


    constructor(private db: AngularFirestore, private auth: AngularFireAuth ){
        this.menuRef = db.collection(this.pathMenu);
        this.cartRef = db.collection(this.pathCart);
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
    // devuelve los texmex
    getTexmex(){
      return  this.db.collection<Texmex>(this.pathTexmex)
              .snapshotChanges().pipe(
                map(actions => actions.map(a => {
                  const data = a.payload.doc.data() as Texmex;
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

    getOneTexMex(id){
      return this.db.collection('menu').doc('2').collection('TexMex').doc<Texmex>(id)
      .snapshotChanges().pipe(
        map(action => {
          const data = action.payload.data() as Texmex;
          const id = action.payload.id;
          return {id, ...data};
        })
      );
    }
    /*
    * Devuelve el documento email de la coleccion carta
    * para recuperar el campo isOrder
    * @return id, data
    */
    getIsOrder(email){
      return this.db.collection<Cart>(email).valueChanges();
    }
    getCart(email) {
      return this.db.collection<Cart>(email).valueChanges();
    }
    /*
    * Añade isOrder al documento producto
    * Añade la cantidad, el total y el producto a un documento de la coleccion email
    * @param email, producto, cantidad, total
    */
    addCart(email,producto,cantidad,total) {
      this.db.collection(email).doc(producto).set({
        isOrder: true,
        producto: producto,
        cantidad: cantidad,
        total: total
      });
    }



}
