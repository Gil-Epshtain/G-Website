import { Component, OnInit } from '@angular/core';

import { PagesService } from './../../services/pages/pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit 
{
  private _pages: any[];

  public constructor(private _pagesService: PagesService) 
  {
    console.log("App.component - ctor");
  }
  
  public ngOnInit() 
  {
    this._pages = this._pagesService.getPages();
  }
}