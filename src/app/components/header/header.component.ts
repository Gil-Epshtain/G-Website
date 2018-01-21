// Angular
import { Component, OnInit, HostListener } from '@angular/core';

// Application
import { PagesService, IPageItem } from '../../services/pages/pages.service';
import { StringsService } from './../../services/strings/strings.service';

@Component({
  selector: 'g-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
  private _strings: any;

  private _pages: IPageItem[];

  private _activePageId: string; 
  private _isHeaderCollapsed: boolean

  private _isBackgroundTransparent: boolean



  public constructor(
    private _stringsService: StringsService,
    private _pagesService: PagesService) 
  {
    console.log("Header.component - ctor");

    this._isHeaderCollapsed = true
    this._isBackgroundTransparent = true;
  }

  public ngOnInit() 
  {
    this._strings = this._stringsService.strings;
    this._pages = this._pagesService.getPages();
    this._activePageId = this._pages[0].id;
  }

  private _onClickHeaderItem(pageId: string): void
  {
//    (click)="_onClickHeaderItem(page.id)"

    console.log(`Header.component - _onClickHeaderItem [pageId: ${pageId}]`);

    this._activePageId = pageId;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() 
  {
    //In chrome and some browser scroll is given to body tag
    let scrollPos = (document.documentElement.scrollTop || document.body.scrollTop);
    
    // show background image over header only when scroll top is 0
    this._isBackgroundTransparent = (scrollPos === 0);    
  }
}