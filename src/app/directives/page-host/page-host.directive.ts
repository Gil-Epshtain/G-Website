import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[page-host]'
})
export class PageHostDirective {

  public constructor(public viewContainerRef: ViewContainerRef) 
  {
    console.log("Page-host.directive - ctor");
  }
}