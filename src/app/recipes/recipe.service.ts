import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
@Injectable()
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg', [
      new Ingredient('Pork Meat', 2),
      new Ingredient('Bread', 1)
    ]),
    new Recipe('Summer Salad', 'Healthy', 'http://images.media-allrecipes.com/userphotos/250x250/01/26/58/1265880.jpg', [])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  

}
