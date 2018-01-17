// Angular
import { 
  Component, 
  Input, 
  ViewChild, 
  OnInit, 
  AfterViewInit,
  ComponentFactoryResolver
} from '@angular/core';

// Application
import { PageHostDirective }  from './../../directives/page-host/page-host.directive';
import { IBasePage }          from '../../pages/base-page';
import { IPageItem }          from '../../services/pages/pages.service';

@Component({
  selector: 'g-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, AfterViewInit 
{
  private _bgColor: string;

  @Input() page: IPageItem;
  @ViewChild(PageHostDirective) pageHost: PageHostDirective;

  public constructor(private _componentFactoryResolver: ComponentFactoryResolver) 
  {
    console.log("Page.component - ctor");
  }

  public ngOnInit(): void 
  {
    this._loadDynamicPage();
  }

  public ngAfterViewInit(): void
  {
   // this._loadDynamicPage();
  }

  private _loadDynamicPage(): void
  {
    console.log(`Page.component::_loadDynamicPage [page: ${this.page.title}]`);

    if (this.page.bgColor)
    {
      this._bgColor = this.page.bgColor;
    }

    //debugger;
    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.page.ngComponent);
    let componentRef = this.pageHost.viewContainerRef.createComponent(componentFactory);

    let page: IBasePage = <IBasePage>componentRef.instance; 
    page.data = this.page.data;
  }
}