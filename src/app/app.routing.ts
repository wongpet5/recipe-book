import { Routes, RouterModule } from "@angular/router"; 

import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RECIPE_ROUTES } from "./recipes/recipes.route";

const APP_ROUTE: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'}, 
    { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES}, 
    { path: 'shoppinglist', component: ShoppingListComponent} 
];

export const routing = RouterModule.forRoot(APP_ROUTE); 