// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { IBasePage } from './../base-page';
import { StringsService } from './../../services/strings/strings.service';

@Component({
  selector: 'g-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, IBasePage
{
  public data: any;

  private _strings: any;
  
  public constructor(private _stringsService: StringsService) 
  {
    console.log("Home-Page.component - ctor");
  }

  public ngOnInit(): void 
  {
    this._strings = this._stringsService.strings;
  }
}