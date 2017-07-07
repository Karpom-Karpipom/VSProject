import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'vs-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class VSRecipedetailComponent implements OnInit {
  @Input('recipeItem') public recipeItem:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
