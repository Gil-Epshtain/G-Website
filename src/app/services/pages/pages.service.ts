// Angular
import { Injectable } from '@angular/core';
import { Type }       from '@angular/core';

// Application
import { HomePageComponent }        from './../../pages/home-page/home-page.component';
import { AboutPageComponent }       from './../../pages/about-page/about-page.component';
import { ProjectsPageComponent }    from './../../pages/projects-page/projects-page.component';
import { ServicesPageComponent }    from './../../pages/services-page/services-page.component';
import { ContactPageComponent }     from './../../pages/contact-page/contact-page.component';

export interface IPageItem 
{
  ngComponent: Type<any>;
  title: string;
  id: string;
  bgColor?: string;
  data?: any;
};

const pagesList: IPageItem[] = 
[
  {
    title: "_Home_",
    ngComponent: HomePageComponent,
    id: 'homeId',
    data: {}
  },
  {
    title: "_About_",
    ngComponent: AboutPageComponent,
    id: 'aboutId',
    bgColor: "rgb(53, 53, 53)"
  },
  {
    title: "_Projects_",
    ngComponent: ProjectsPageComponent,
    id: 'projectsId',
    bgColor: "rgb(47, 47, 47)"
  },
  {
    ngComponent: ServicesPageComponent,
    title: "_Services_",  
    id: 'servicesId',
    bgColor: "rgb(44, 44, 44)"
  },
  {
    title: "_Contact_",
    ngComponent: ContactPageComponent,
    id: 'contactId',
    bgColor: "rgb(30, 30, 30)"
  }
];

@Injectable()
export class PagesService
{
  public constructor() 
  {
    console.log("Page.service - ctor");
  }

  public getPages(): IPageItem[]
  {
    return pagesList;
  }
}