import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VSRecipebookComponent } from './recipes/recipebook/recipebook.component';
import { VSRecipelistComponent } from './recipes/recipelist/recipelist.component';
import { VSRecipeitemComponent } from './recipes/recipeitem/recipeitem.component';
import { VSRecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { VSHeaderComponent} from './header/header.component';
import {VSShopListEditComponent } from './shopping/shop-listedit/shoppinglistedit.component';
import {VSShopListIngredientComponent } from './shopping/shop-ingredient/shoppinglistingredient.component';
import {VSShopListComponent } from './shopping/shop-list/shoppinglist.component';
import {VSRecipesComponent } from './recipes/recipes.component';
import { AppDropDownDirective } from './customdirective/app-drop-down.directive';

@NgModule({
  declarations: [
    AppComponent,
    VSRecipebookComponent,
    VSRecipelistComponent,
    VSRecipeitemComponent,
    VSRecipedetailComponent,VSRecipesComponent,
    VSHeaderComponent,VSShopListEditComponent,VSShopListIngredientComponent,VSShopListComponent, AppDropDownDirective

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
