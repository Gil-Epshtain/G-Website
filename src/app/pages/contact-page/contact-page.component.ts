// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { IBasePage } from './../base-page';

@Component({
  selector: 'g-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, IBasePage
{
  public data: any;

  public constructor() 
  {
    console.log("Contact-Page.component - ctor");
  }

  public ngOnInit(): void 
  {
  }

}