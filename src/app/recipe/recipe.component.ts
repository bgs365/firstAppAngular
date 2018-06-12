import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() recipe:Recipe;
  expanded = false;

  constructor(private _router:Router) { }

  doSomething(){
    this.expanded = !this.expanded;
  }

  ngOnInit() {
  }

}
