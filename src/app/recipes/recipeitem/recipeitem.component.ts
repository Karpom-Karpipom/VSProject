import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'vs-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class VSRecipeitemComponent implements OnInit {
@Input('recipe') public recipeObj1:Recipe;
@Output('recipeObjFromRecipeItemComp') public selectedRecipeEvent=new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }
sendObjToRecipeDetail(recipeObj:Recipe)
{
  console.log("RecipeItem Component--->"+recipeObj.name);
 this.selectedRecipeEvent.emit(recipeObj);
}
}
