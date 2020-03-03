import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import {combineLatest} from "rxjs/index";

import { DataService } from '../../services/data.service';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
	
  direction: string;
  isCheck: boolean = false;
  restaurantes: any;
  buscador: string;
  ciudades;

  startAt = new Subject();
  endAt = new Subject();

  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();

  constructor(private dataService: DataService, private firebaseService: FirebaseService) { 
  }

  ngOnInit() {

    combineLatest(this.startobs, this.endobs).subscribe((value) => {
        this.firebaseService.firequery(value[0], value[1]).subscribe((ciudades) => {
           this.ciudades = ciudades;
        })
    })

    this.getRestaurantesList();


     this.dataService.variable.subscribe( dato => {
       this.isCheck = dato;
     });


  }

  search($event) {
    let q = $event.target.value;
    if(q != ''){
      this.startAt.next(q);
      this.endAt.next(q + "\uf8ff");
    }
    
  }


  getRestaurantesList(){
    this.firebaseService.getRestaurantesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(restaurantes => {
      this.restaurantes = restaurantes;
    });
  }



  /*
  * Comprobar dirección
  */
    checkDirection(direction: string){
      
  	if( direction == '' || direction == null || direction == undefined ){
  		this.isCheck = true;
  	}else{
  		this.isCheck = false;
  	}
  }


}
