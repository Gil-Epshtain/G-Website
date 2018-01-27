// Angular
import { Injectable } from '@angular/core';
import { Type }       from '@angular/core';

// Application
import { HomePageComponent }        from './../../pages/home-page/home-page.component';
import { AboutPageComponent }       from './../../pages/about-page/about-page.component';
import { ExperiencePageComponent }  from './../../pages/experience-page/experience-page.component';
import { ProjectsPageComponent }    from './../../pages/projects-page/projects-page.component';
import { ServicesPageComponent }    from './../../pages/services-page/services-page.component';
import { ContactPageComponent }     from './../../pages/contact-page/contact-page.component';

export interface IPageItem 
{
  ngComponent: Type<any>;
  title: string;
  id: string;
  bgColor?: string;
  data: any;
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
    bgColor: "rgb(45, 45, 45)",
    data: {}
  },
  {
    title: "_Experience_",
    ngComponent: ExperiencePageComponent,
    id: 'experienceId',
    bgColor: "rgb(40, 40, 40)",
    data: {}
  },
  {
    title: "_Projects_",
    ngComponent: ProjectsPageComponent,
    id: 'projectsId',
    bgColor: "rgb(35, 35, 35)",
    data: {}
  },
  {
    ngComponent: ServicesPageComponent,
    title: "_Services_",  
    id: 'servicesId',
    bgColor: "rgb(30, 30, 30)",
    data: {}
  },
  {
    title: "_Contact_",
    ngComponent: ContactPageComponent,
    id: 'contactId',
    bgColor: "rgb(25, 25, 25)",
    data: {}
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