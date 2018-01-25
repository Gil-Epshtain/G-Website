// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { IBasePage }      from './../base-page';
import { StringsService } from './../../services/strings/strings.service';

import { styleObj }       from './../../style/style';

@Component({
  selector: 'g-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, IBasePage
{
  public data: any;
  
  private _strings: any;

  private _skills: any[];

  constructor(private _stringsService: StringsService) 
  {
    console.log("About-Page.component - ctor");
  }

  public ngOnInit() 
  {
    this._strings = this._stringsService.strings;

    this._initSkills();
  }

  private _initSkills(): void
  {
    this._skills = 
    [
      {
        title: this._strings._SkillTitle_1_,
        text:  this._strings._SkillText_1_,
        value: this._strings._SkillValue_1_,
        color: styleObj.colors.colorOrange
      },
      {
        title: this._strings._SkillTitle_2_,
        text:  this._strings._SkillText_2_,
        value: this._strings._SkillValue_2_,
        color: styleObj.colors.colorYellow
      },
      {
        title: this._strings._SkillTitle_3_,
        text:  this._strings._SkillText_3_,
        value: this._strings._SkillValue_3_,
        color: styleObj.colors.colorTurquoise
      }
    ];
  }
}