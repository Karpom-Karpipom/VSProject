import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'vs-recipes',
  templateUrl: './recipes.component.html',
  //styleUrls: ['./recipes.component.css']
})
export class VSRecipesComponent implements OnInit {
  selectedRecipeItem:Recipe;
  constructor() { }

  ngOnInit() {
  }

showRecipeDetail(recipeItmeObj:Recipe)
{
  console.log("-->Recipes Component <--"+recipeItmeObj.name);
this.selectedRecipeItem=recipeItmeObj;
}


}
