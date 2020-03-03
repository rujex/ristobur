import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  variable = new EventEmitter<boolean>();
  //@Output() isOrder = new EventEmitter<boolean>();
  isOrder: boolean;

  constructor() { 
  	this.isOrder = false;
  }

  public getIsOrder() : any{
  	return this.isOrder;
  }

  public setIsOrder(isOrder: any) {
  	this.isOrder = isOrder;
  }

}
