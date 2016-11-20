import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  ingredientItems: Ingredient[] = [];

  constructor(private sls: ShoppingListService) { 
    this.ingredientItems = sls.getItems(); 
  }

  ngOnInit() {
  }

}
