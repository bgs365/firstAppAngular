import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Logger} from 'protractor/built/logger';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../ingredient.model';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {

  recipe = new Recipe();
  ingredient = new Ingredient();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  create(){
    console.log(this.recipe)
    this.ingredient.ingredientId = 1;
    this.recipe.ingredients = [];
    this.recipe.ingredients.push(this.ingredient);
    this.recipeService.addRecipe(this.recipe).subscribe();
  }

}
