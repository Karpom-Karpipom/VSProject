import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'vs-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class VSRecipelistComponent implements OnInit {
  recipes :Recipe[]=[
    new Recipe('Chicken','FriedChicken','https://upload.wikimedia.org/wikipedia/commons/0/09/HK_Fried_Chicken_Leg.jpg'),
    new Recipe('Chicken Briyani','Chettinad-Chicken-Briyani','https://upload.wikimedia.org/wikipedia/commons/f/fe/Chicken_Biryani.jpg')];
   
 @Output('selectedObj') selectedItemObjEmit=new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }


  selectedRecipeDetail(recipeObj:Recipe)
  {
    console.log("RecipeList--->"+recipeObj.name);
   this.selectedItemObjEmit.emit(recipeObj);
  }

}
