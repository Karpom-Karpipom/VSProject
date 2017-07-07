import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppDropDown]'
})
export class AppDropDownDirective {


@HostBinding ('class.open') isOpened=false;
  constructor() { }

@HostListener('click') isToggle(){
  this.isOpened=!this.isOpened;
}


}
