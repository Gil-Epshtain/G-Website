// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { IBasePage } from './../base-page';

@Component({
  selector: 'g-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit, IBasePage
{
  public data: any;

  public constructor() 
  {
    console.log("Projects-Page.component - ctor");
  }

  public ngOnInit(): void 
  {
  }

}