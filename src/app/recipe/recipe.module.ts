import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StrToArrayPipe} from './str-to-array.pipe';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeComponent} from './recipe.component';
import {CustomMaterialModule} from '../custom-material/custom-material.module';
import { RecipeShortComponent } from './recipe-short/recipe-short.component';
import {RouterModule} from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { RecipeDeleteComponent } from './recipe-delete/recipe-delete.component';


@NgModule({
  declarations: [
    RecipeComponent,
    RecipesComponent,
    StrToArrayPipe,
    RecipeShortComponent,
    RecipeCreateComponent,
    RecipeDeleteComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    MatInputModule,
    FormsModule
  ],
})
export class RecipeModule { }
