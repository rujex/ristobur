import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
