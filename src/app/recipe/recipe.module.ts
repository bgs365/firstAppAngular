import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StrToArrayPipe} from './str-to-array.pipe';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeComponent} from './recipe.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import { RecipeShortComponent } from './recipe-short/recipe-short.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipesComponent,
    StrToArrayPipe,
    RecipeShortComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
})
export class RecipeModule { }
