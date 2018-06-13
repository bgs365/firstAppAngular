import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private  _baseUrl = "http://10.0.1.55:8080/api/v1/recipes";

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this._baseUrl);
  }

  getRecipe(id: string): Observable<Recipe>{
    return this.http.get<Recipe>(`${ this._baseUrl }/${ id }`);
  }

  addRecipe(recipe: Recipe){
     return this.http.post(this._baseUrl, recipe);
  }

  deleteRecipe(id: number){
    return this.http.delete(`${ this._baseUrl }/${ id }`);
  }

}
