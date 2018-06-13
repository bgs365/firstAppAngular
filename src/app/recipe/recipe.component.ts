import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';
import {Router} from '@angular/router';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() recipe:Recipe;
  @Output() deleteEvent: EventEmitter<Recipe> = new EventEmitter();

  expanded = false;

  constructor(private _router:Router,private recipeService: RecipeService) { }

  doSomething(){
    this.expanded = !this.expanded;
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipe.id).subscribe();
    this.deleteEvent.emit(this.recipe);
  }

  ngOnInit() {
  }
}
