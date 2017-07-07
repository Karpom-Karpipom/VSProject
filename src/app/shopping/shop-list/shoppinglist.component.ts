import {Component} from  '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
@Component({

selector:'vs-shoplist',
templateUrl:'./shoppinglist.component.html',
})

export class VSShopListComponent
{
ingredients: Ingredient[]=[new Ingredient("Chicken",2),new Ingredient("Tomatos",7)];


getIngredients(eventObject)
{
    this.ingredients.push(new Ingredient(eventObject.ingredName,eventObject.ingredQty));
}

}
