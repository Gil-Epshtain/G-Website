// Angular
import { Injectable } from '@angular/core';
import { Type }       from '@angular/core';

// Application
import { HomePageComponent }        from './../../pages/home-page/home-page.component';
import { AboutPageComponent }       from './../../pages/about-page/about-page.component';
import { ProjectsPageComponent }    from './../../pages/projects-page/projects-page.component';
import { ServicesPageComponent }    from './../../pages/services-page/services-page.component';
import { EmployersPageComponent }   from './../../pages/employers-page/employers-page.component';
import { ContactPageComponent }     from './../../pages/contact-page/contact-page.component';

export interface IPageItem 
{
  ngComponent: Type<any>;
  title: string;
  bgColor?: string;
  data?: any;
};

const pagesList: IPageItem[] = 
[
  {
    title: "Home",
    ngComponent: HomePageComponent,
    data: {}
  },
  {
    title: "About",
    ngComponent: AboutPageComponent,
    bgColor: "rgb(53, 53, 53)"
  },
  {
    title: "Projects",
    ngComponent: ProjectsPageComponent,
    bgColor: "rgb(47, 47, 47)"
  },
  {
    ngComponent: ServicesPageComponent,
    title: "Services",  
    bgColor: "rgb(44, 44, 44)"
  },
  {
    title: "Employers",
    ngComponent: EmployersPageComponent,
    bgColor: "rgb(39, 39, 39)"
  },
  {
    title: "Contact",
    ngComponent: ContactPageComponent,
    bgColor: "rgb(30, 30, 30)"
  }
];

@Injectable()
export class PagesService
{
  public constructor() 
  {
    console.log("Page.component - ctor");
  }

  public getPages(): IPageItem[]
  {
    return pagesList;
  }
}