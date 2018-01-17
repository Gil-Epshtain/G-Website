// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { IBasePage } from './../base-page';

@Component({
  selector: 'g-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, IBasePage
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