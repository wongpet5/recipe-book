import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { RecipeService } from "../recipe.service"; 

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private recipeIndex: number; 
  private subscription: Subscription; 

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    let isNew = true; 

    // +params['id'] converts id from a string value to a number value 
    this.subscription = this.route.params.subscribe(
      (params: any) => { 
        if (params.hasOwnProperty('id')){
          this.recipeIndex = +params['id']
          isNew = false; 
        } else {
          isNew = true; 
        }
        console.log(isNew);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); 
  }

}
