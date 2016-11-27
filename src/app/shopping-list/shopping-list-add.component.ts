import { Component, OnChanges, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient'; 
import { ShoppingListService } from './shopping-list.service';
//import { NgForm } from '@angular/forms'

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  isAdd = true; 
  @Input() item: Ingredient; 

  constructor(private sls: ShoppingListService) {

  }

  ngOnChanges(changes){
    if(changes.item.currentValue === null) {
      this.item = new Ingredient(null, null);
      this.isAdd = true;
    } else {
      this.isAdd = false; 
    }
  }

  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd){
      this.sls.editItems(this.item, newIngredient);
    }
    else {
      this.item = newIngredient;
      this.sls.addItem(this.item);
    }
  }

}
