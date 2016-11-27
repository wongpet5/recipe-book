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

  addItem(item: Ingredient){
    this.items.push(item);
  }

  editItems(oldItem: Ingredient, newItem: Ingredient){
    this.items[this.items.indexOf(oldItem)] = newItem; 
  }

  deleteItem(itemToDelete: Ingredient){
    console.log("deleting item from shoppinglist");
    const itemId = this.items.indexOf(itemToDelete);
    this.items.splice(itemId, 1);
  }

}

