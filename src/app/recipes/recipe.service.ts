import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg', []),
    new Recipe('Summer Salad', 'Healthy', 'http://images.media-allrecipes.com/userphotos/250x250/01/26/58/1265880.jpg', [])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  

}
