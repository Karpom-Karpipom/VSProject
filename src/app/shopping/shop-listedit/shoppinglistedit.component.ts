import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({

selector:'vs-shoplist-edit',
templateUrl:'./shoppinglistedit.component.html',

})

export class VSShopListEditComponent
{

@ViewChild('ingredName') ingredRefName :ElementRef;
@ViewChild('ingredQty') ingredRefQty :ElementRef;

//ingredName:string=this.ingredRefName.nativeElement.value;
//ingredQty:number=this.ingredRefQty.nativeElement.value;

@Output('ingredients') public ingredientNameEvent=new EventEmitter<{ingredName:string,ingredQty:number}>();
//@Output('ingQty') public ingredientQtyEvent=new EventEmitter<string>();

sendObjects()
{
    this.ingredientNameEvent.emit({ingredName:this.ingredRefName.nativeElement.value,ingredQty:this.ingredRefQty.nativeElement.value});
}
}
