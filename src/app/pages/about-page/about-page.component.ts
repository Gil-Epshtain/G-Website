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
  private _experiences: any[];
  private _education: any;

  constructor(private _stringsService: StringsService) 
  {
    console.log("About-Page.component - ctor");
  }

  public ngOnInit() 
  {
    this._strings = this._stringsService.strings;

    this._initSkills();
    this._initExperiences();
    this._initEducation();
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

  private _initExperiences(): void
  {
    this._experiences = 
    [
      {
        title:        this._strings._ExperiencePosition_6_,
        years:        this._strings._ExperienceYears_6_,
        institution:  this._strings._ExperienceCompany_6_,
        url:          this._strings._ExperienceUrl_6_,
        text:         this._strings._ExperienceText_6_,
        color:        styleObj.colors.colorOrange
      },
      {
        title:        this._strings._ExperiencePosition_5_,
        years:        this._strings._ExperienceYears_5_,
        institution:  this._strings._ExperienceCompany_5_,
        url:          this._strings._ExperienceUrl_5_,
        text:         this._strings._ExperienceText_5_,
        color:        styleObj.colors.colorYellow
      },
      {
        title:        this._strings._ExperiencePosition_4_,
        years:        this._strings._ExperienceYears_4_,
        institution:  this._strings._ExperienceCompany_4_,
        url:          this._strings._ExperienceUrl_4_,
        text:         this._strings._ExperienceText_4_,
        color:        styleObj.colors.colorTurquoise
      },
      {
        title:        this._strings._ExperiencePosition_3_,
        years:        this._strings._ExperienceYears_3_,
        institution:  this._strings._ExperienceCompany_3_,
        url:          this._strings._ExperienceUrl_3_,
        text:         this._strings._ExperienceText_3_,
        color:        styleObj.colors.colorPink
      },
      {
        title:        this._strings._ExperiencePosition_2_,
        years:        this._strings._ExperienceYears_2_,
        institution:  this._strings._ExperienceCompany_2_,
        url:          this._strings._ExperienceUrl_2_,
        text:         this._strings._ExperienceText_2_,
        color:        styleObj.colors.colorOrange
      },
      {
        title:        this._strings._ExperiencePosition_1_,
        years:        this._strings._ExperienceYears_1_,
        institution:  this._strings._ExperienceCompany_1_,
        url:          this._strings._ExperienceUrl_1_,
        text:         this._strings._ExperienceText_1_,
        color:        styleObj.colors.colorYellow
      }
    ];
  }

  private _initEducation(): void
  {
    this._education =     
    {
      title:        this._strings._EducationDegree_,
      years:        this._strings._EducationYears_,
      institution:  this._strings._EducationInstitution_,
      url:          this._strings._EducationUrl_,
      text:         this._strings._EducationText_,
      color:        styleObj.colors.colorTurquoise
    };
  }
}