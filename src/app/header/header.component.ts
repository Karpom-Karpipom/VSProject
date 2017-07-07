import {Component,EventEmitter,Output,ElementRef,ViewChild} from  '@angular/core';

@Component({

selector:'vs-headercomponent',
templateUrl:'./header.component.html',

})

export class VSHeaderComponent
{

@Output('link') public LinkEventEmit =new EventEmitter<string>();
//@Output('shoppinglist') public shoppingEventEmit =new EventEmitter<string>();

// @ViewChild('tmpRecipes') recipes: ElementRef;
// @ViewChild('tmpShoppingList') shoppinglist: ElementRef;

clicked :string;

viewDisplay(navigate:string)
{         
             this.LinkEventEmit.emit(navigate);
                
}


}
