import { Component, OnInit } from '@angular/core';

import { IBasePage } from './../base-page';

@Component({
  selector: 'g-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, IBasePage
{
  public data: any;

  public txtAboutTitle = "ABOUT";
  public txtAboutTxt = "Aliquatm porttitor ligula sed diam aliquam, sit amet dapibus ante vestibulum. Fusce finibus, dui nec mattis fermentum, purus arcu auctor elit, at ultricies est odio vel nulla. Quisque accumsan eros quis arcu sagittis, sit amet tempor felis ornare";
  public txtSkillsTitle = "SLILLS";
  public txtExperienceTitle = "EXPERIENCE";

  constructor() 
  {
    console.log("About-Page.component - ctor");
  }

  public ngOnInit() 
  {
  }
}