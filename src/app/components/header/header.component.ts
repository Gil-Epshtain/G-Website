// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { PagesService, IPageItem } from '../../services/pages/pages.service';

@Component({
  selector: 'g-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
  public isHeaderCollapsed = true;

  private _pages: IPageItem[];

  public constructor(private _pagesService: PagesService) 
  {
    console.log("Header.component - ctor");
  }

  public ngOnInit() 
  {
    this._pages = this._pagesService.getPages();
  }

}