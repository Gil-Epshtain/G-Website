// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { IBasePage } from './../base-page';
import { StringsService } from './../../services/strings/strings.service';

import { styleObj }       from './../../style/style';

@Component({
  selector: 'g-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit, IBasePage
{
  public data: any;

  private _strings: any;

  private _projects: any[];

  public constructor(private _stringsService: StringsService) 
  {
    console.log("Projects-Page.component - ctor");
  }

  public ngOnInit(): void 
  {
    this._strings = this._stringsService.strings;

    this._initProjects();
  }

  private _initProjects(): void
  {
    this._projects =
    [
      {
      }
    ];
  }
}