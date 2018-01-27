// Angular
import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

// Lodash
import * as _ from 'lodash';

// Application
import { PagesService, IPageItem } from '../../services/pages/pages.service';
import { StringsService } from './../../services/strings/strings.service';

@Component({
  selector: 'g-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit
{
  private _strings: any;
  
  private _pages: IPageItem[];
  
  private _activePageId: string; 
  private _isHeaderCollapsed: boolean
  private _isBackgroundTransparent: boolean
  private _isViewRendered: boolean;

  public constructor(
    private _stringsService: StringsService,
    private _pagesService: PagesService) 
  {
    console.log("Header.component - ctor");
    
    this._isViewRendered = false;
    this._isHeaderCollapsed = true
    this._isBackgroundTransparent = true;
  }

  public ngOnInit() 
  {
    this._strings = this._stringsService.strings;
    this._pages = this._pagesService.getPages();
    this._activePageId = this._pages[0].id;
  }
  
  public ngAfterViewInit()
  {
    _.forEach(this._pages, (page: IPageItem) =>
    {
      let pageElement = document.getElementById(page.id);

      page.data.top = pageElement.offsetTop;
      page.data.bottom = pageElement.offsetTop + pageElement.offsetHeight;
    });

    this._isViewRendered = true;
  }

  private _onClickHeaderItem(page: IPageItem): void
  {
    console.log(`Header.component - _onClickHeaderItem [pageId: ${ page.id }]`);

    document.documentElement.scrollTop = page.data.top;
    this._isHeaderCollapsed = true; // close the collapseList
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll = _.debounce(() => 
  {
    console.log("Header.component - onWindowScroll");

    if (this._isViewRendered)
    {
      //In chrome and some browser scroll is given to body tag
      let scrollPos = (document.documentElement.scrollTop || document.body.scrollTop);
      
      this._setHeaderBackgroundByScroll(scrollPos);
      this._setActiveHeaderItemByScroll(scrollPos);
    }
  }, 200); // Listen to Scroll event only once in 200ms

  private _setHeaderBackgroundByScroll(scrollPos: number): void
  {
    // show background image over header only when scroll top is 0
    this._isBackgroundTransparent = (scrollPos === 0);
  }

  private _setActiveHeaderItemByScroll(scrollPos: number): void
  {
    let scrolledPage: IPageItem = _.find(this._pages, (page: IPageItem) =>
    {
      return (scrollPos < page.data.bottom);
    });

    this._activePageId = scrolledPage.id;
  }
}