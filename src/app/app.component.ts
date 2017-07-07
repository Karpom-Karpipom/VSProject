import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
//My implementation

// recipeLink:boolean=true;
// shoppinglistLink:boolean;


// callLink(link)
// {
//       if(link=='recipe')
//       {
//         this.recipeLink=true;
//         this.shoppinglistLink=false;
//       }
//       if(link=='shopping-list')
//       {
//         this.recipeLink=false;
//         this.shoppinglistLink=true;
//       }
// }

menuitem:string='recipe';

callLink(tmpMenuitem:string)
{
     console.log('------>menuitem<----'+this.menuitem);
      this.menuitem=tmpMenuitem;
 
}


}
