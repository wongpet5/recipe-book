//import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

//@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items; 
  }

  addItems(items: Ingredient[]){
    // pushes all the items in to this.items in 1 line instead of using a for loop
    Array.prototype.push.apply(this.items, items); 
  }

}

