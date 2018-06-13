import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from '../recipe/recipes/recipes.component';
import {RecipeShortComponent} from '../recipe/recipe-short/recipe-short.component';
import {RecipeCreateComponent} from '../recipe/recipe-create/recipe-create.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'recipe/create',
    component: RecipeCreateComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeShortComponent
  },
  {
    path:'**',
    redirectTo:'recipes'
  }
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[
  ],
  declarations: []
})
export class AppRoutingModule { }
