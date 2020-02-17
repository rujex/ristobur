import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  variable = new EventEmitter<boolean>();

  constructor() { }


}
