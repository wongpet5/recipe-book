import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg', []),
    new Recipe('Summer Salad', 'Healthy', 'http://images.media-allrecipes.com/userphotos/250x250/01/26/58/1265880.jpg', [])
  ];
 
  @Output() recipeSelected = new EventEmitter<Recipe>();
 
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe); 
  }

}
