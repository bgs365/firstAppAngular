import {Ingredient} from './ingredient.model.ts'
export class Recipe {
	name:string;
picture:string;
description:string;
ingredients: Ingredient[];
instructions: string[];
}
