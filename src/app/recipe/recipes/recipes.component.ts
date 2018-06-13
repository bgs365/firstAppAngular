import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;

    })
  }

  onDelete(recipe: Recipe){
    this.recipes.splice((this.recipes.indexOf(recipe)));
  }

}
