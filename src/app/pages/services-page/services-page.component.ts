// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { IBasePage } from './../base-page';

@Component({
  selector: 'g-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit, IBasePage
{
  public data: any;

  public constructor() 
  {
    console.log("Home-Page.component - ctor");
  }

  public ngOnInit(): void 
  {
  }

}