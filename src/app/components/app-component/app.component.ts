import { Component, OnInit } from '@angular/core';

import { StringsService } from './../../services/strings/strings.service';
import { PagesService }   from './../../services/pages/pages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit 
{
  private _pages: any[];

  public constructor(
    private _stringsService: StringsService,
    private _pagesService: PagesService) 
  {
    console.log("App.component - ctor");
  }
  
  public ngOnInit() 
  {
    this._stringsService.setLocal('en-US');
    this._pages = this._pagesService.getPages();
  }
}