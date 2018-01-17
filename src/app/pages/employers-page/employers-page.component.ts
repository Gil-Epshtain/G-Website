// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { IBasePage } from './../base-page';

@Component({
  selector: 'g-employers-page',
  templateUrl: './employers-page.component.html',
  styleUrls: ['./employers-page.component.scss']
})
export class EmployersPageComponent implements OnInit, IBasePage
{
  public data: any;

  public constructor() 
  {
    console.log("Employers-Page.component - ctor");
  }

  public ngOnInit(): void 
  {
  }

}