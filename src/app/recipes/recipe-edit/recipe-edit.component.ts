import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from "@angular/forms"; 

import { RecipeService } from "../recipe.service"; 
import { Recipe } from "../recipe";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})

export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup; 
  private recipeIndex: number; 
  private recipe: Recipe; 
  private isNew = true; 
  private subscription: Subscription; 

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    // +params['id'] converts id from a string value to a number value 
    this.subscription = this.route.params.subscribe(
      (params: any) => { 
        if (params.hasOwnProperty('id')){
          this.recipeIndex = +params['id']
          this.isNew = false; 
          this.recipe = this.recipeService.getRecipe(this.recipeIndex); 
        } else {
          this.isNew = true; 
          this.recipe = null; 
        }
        console.log(this.isNew);
      }
    );

    // Initialize the form 
    this.initForm(); 
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); 
  }

  private initForm() {
    let recipeName = ''; 
    let recipeImageUrl = '';
    let recipeContent = ''; 
    let recipeIngredients : FormArray = new FormArray([]);

    if(!this.isNew) {
      for(let i = 0; i < this.recipe.ingredients.length; i++){
        recipeIngredients.push(new FormGroup({
          name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
          amount: new FormControl(this.recipe.ingredients[i].amount, Validators.required)
        })); 
      }

      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description; 
    }

    // Build the actual form 
    this.recipeForm = this.formBuilder.group(
      {
        name: [recipeName, Validators.required],
        imagePath: [recipeImageUrl, Validators.required],
        description: [recipeContent, Validators.required],
        ingredients: recipeIngredients
      }
    );
  }

}
