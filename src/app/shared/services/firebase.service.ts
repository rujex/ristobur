import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { map } from 'rxjs/operators';

import { Menu } from '../models/menu';
import { Entrantes } from '../models/entrantes';
import { Cart } from '../models/cart';
import { Texmex } from '../models/texmex';
import { Carnes } from '../models/carnes';
import { Ensaladas } from '../models/ensaladas';
import { Costillas } from '../models/costillas';
import { Pollos } from '../models/pollos';
import { Sandwiches } from '../models/sandwiches';
import { Hamburguesas } from '../models/hamburguesas';
import { Postres } from '../models/postres';


@Injectable({providedIn: 'root'})
export class FirebaseService {

    private pathRestaurants = '/restaurantes';
    private pathMenu = '/menu';
    private pathEntrantes = '/menu/1/Entrantes';
    private pathTexmex = '/menu/2/TexMex';
    private pathCarnes = '/menu/4/Carnes';
    private pathEnsaladas = '/menu/3/Ensaladas';
    private pathCostillas = '/menu/5/Costillas';
    private pathPollos = '/menu/6/Pollo';
    private pathSandwiches = '/menu/7/Sandwiches';
    private pathHamburguesas = '/menu/8/Hamburguesas';
    private pathPostres = '/menu/9/Postres';
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

    // devuelve las carnes
    getCarnes(){
      return  this.db.collection<Carnes>(this.pathCarnes)
              .snapshotChanges().pipe(
                map(actions => actions.map(a => {
                  const data = a.payload.doc.data() as Carnes;
                  const id = a.payload.doc.id;
                  return {id, ...data};
                }))
              );
    }

    // devuelve las ensaladas
    getEnsaladas(){
      return  this.db.collection<Ensaladas>(this.pathEnsaladas)
              .snapshotChanges().pipe(
                map(actions => actions.map(a => {
                  const data = a.payload.doc.data() as Ensaladas;
                  const id = a.payload.doc.id;
                  return {id, ...data};
                }))
              );
    }

     // devuelve las ensaladas
     getCostillas(){
      return  this.db.collection<Costillas>(this.pathCostillas)
              .snapshotChanges().pipe(
                map(actions => actions.map(a => {
                  const data = a.payload.doc.data() as Costillas;
                  const id = a.payload.doc.id;
                  return {id, ...data};
                }))
              );
     }

     // devuelve las ensaladas
     getPollos(){
      return  this.db.collection<Pollos>(this.pathPollos)
              .snapshotChanges().pipe(
                map(actions => actions.map(a => {
                  const data = a.payload.doc.data() as Pollos;
                  const id = a.payload.doc.id;
                  return {id, ...data};
                }))
              );
     }

     // devuelve las ensaladas
     getSandwiches(){
      return  this.db.collection<Sandwiches>(this.pathSandwiches)
              .snapshotChanges().pipe(
                map(actions => actions.map(a => {
                  const data = a.payload.doc.data() as Sandwiches;
                  const id = a.payload.doc.id;
                  return {id, ...data};
                }))
              );
     }

     // devuelve las ensaladas
     getHamburguesas(){
      return  this.db.collection<Hamburguesas>(this.pathHamburguesas)
              .snapshotChanges().pipe(
                map(actions => actions.map(a => {
                  const data = a.payload.doc.data() as Hamburguesas;
                  const id = a.payload.doc.id;
                  return {id, ...data};
                }))
              );
     }

     // devuelve las ensaladas
     getPostres(){
      return  this.db.collection<Postres>(this.pathPostres)
              .snapshotChanges().pipe(
                map(actions => actions.map(a => {
                  const data = a.payload.doc.data() as Postres;
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

    getCarne(id){
      return this.db.collection('menu').doc('4').collection('Carnes').doc<Carnes>(id)
      .snapshotChanges().pipe(
        map(action => {
          const data = action.payload.data() as Carnes;
          const id = action.payload.id;
          return {id, ...data};
        })
      );
    }

    getEnsalada(id){
      return this.db.collection('menu').doc('3').collection('Ensaladas').doc<Ensaladas>(id)
      .snapshotChanges().pipe(
        map(action => {
          const data = action.payload.data() as Ensaladas;
          const id = action.payload.id;
          return {id, ...data};
        })
      );
    }

    getCostilla(id){
      return this.db.collection('menu').doc('5').collection('Costillas').doc<Costillas>(id)
      .snapshotChanges().pipe(
        map(action => {
          const data = action.payload.data() as Costillas;
          const id = action.payload.id;
          return {id, ...data};
        })
      );
    }

    getPollo(id){
      return this.db.collection('menu').doc('6').collection('Pollo').doc<Pollos>(id)
      .snapshotChanges().pipe(
        map(action => {
          const data = action.payload.data() as Pollos;
          const id = action.payload.id;
          return {id, ...data};
        })
      );
    }

    getSandwich(id){
      return this.db.collection('menu').doc('7').collection('Sandwiches').doc<Sandwiches>(id)
      .snapshotChanges().pipe(
        map(action => {
          const data = action.payload.data() as Sandwiches;
          const id = action.payload.id;
          return {id, ...data};
        })
      );
    }

    getHamburguesa(id){
      return this.db.collection('menu').doc('8').collection('Hamburguesas').doc<Hamburguesas>(id)
      .snapshotChanges().pipe(
        map(action => {
          const data = action.payload.data() as Hamburguesas;
          const id = action.payload.id;
          return {id, ...data};
        })
      );
    }

    getPostre(id){
      return this.db.collection('menu').doc('9').collection('Postres').doc<Postres>(id)
      .snapshotChanges().pipe(
        map(action => {
          const data = action.payload.data() as Postres;
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

    deleteProduct(email, producto){
      this.db.collection(email).doc(producto).delete();
    }



}
