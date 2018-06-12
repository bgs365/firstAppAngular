import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-short',
  templateUrl: './recipe-short.component.html',
  styleUrls: ['./recipe-short.component.scss']
})
export class RecipeShortComponent implements OnInit {

  recipe: Recipe;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeService.getRecipe(this.route.snapshot.paramMap.get('id')).subscribe(recipe => {
      console.log(recipe);
      this.recipe = recipe;
    })
  }

}
