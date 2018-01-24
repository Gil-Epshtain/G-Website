// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { IBasePage }      from './../base-page';
import { StringsService } from './../../services/strings/strings.service';

import { styleObj }       from './../../style/style';

const icons =
{
  code:   "/assets/images/icons/services/code-icon.png",
  design: "/assets/images/icons/services/design-icon.png",
  plan:   "/assets/images/icons/services/plan-icon.png",
  tools:  "/assets/images/icons/services/tools-icon.png"
};

@Component({
  selector: 'g-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit, IBasePage
{
  public data: any;

  private _strings: any;

  private _services: any[];
  private _workFlows: any[];

  public constructor(private _stringsService: StringsService) 
  {
    console.log("Services-Page.component - ctor");
  }

  public ngOnInit(): void 
  {
    this._strings = this._stringsService.strings;

    this._initServices();
    this._initWorkFlows();
  }

  private _initServices(): void
  {
    this._services =
    [
      {
        title: this._strings._ServiceTitle_1_,
        text: this._strings._ServiceText_1_,
        icon: icons.code,
        color: styleObj.colors.colorOrange
      },
      {
        title: this._strings._ServiceTitle_2_,
        text: this._strings._ServiceText_2_,
        icon: icons.design,
        color: styleObj.colors.colorYellow
      },
      {
        title: this._strings._ServiceTitle_3_,
        text: this._strings._ServiceText_3_,
        icon: icons.plan,
        color: styleObj.colors.colorTurquoise
      },
      {
        title: this._strings._ServiceTitle_4_,
        text: this._strings._ServiceText_4_,
        icon: icons.tools,
        color: styleObj.colors.colorPink
      }
    ];
  }

  private _initWorkFlows(): void
  {
    this._workFlows =
    [
      {
        title: this._strings._WorkProcessTitle_1_,
        text: this._strings._WorkProcessText_1_,
        icon: icons.code,
        color: styleObj.colors.colorOrange
      },
      {
        title: this._strings._WorkProcessTitle_2_,
        text: this._strings._WorkProcessText_2_,
        icon: icons.code,
        color: styleObj.colors.colorYellow
      },
      {
        title: this._strings._WorkProcessTitle_3_,
        text: this._strings._WorkProcessText_3_,
        icon: icons.code,
        color: styleObj.colors.colorTurquoise
      },
      {
        title: this._strings._WorkProcessTitle_4_,
        text: this._strings._WorkProcessText_4_,
        icon: icons.code,
        color: styleObj.colors.colorPink
      },
      {
        title: this._strings._WorkProcessTitle_5_,
        text: this._strings._WorkProcessText_5_,
        icon: icons.code,
        color: styleObj.colors.colorOrange
      },
      {
        title: this._strings._WorkProcessTitle_6_,
        text: this._strings._WorkProcessText_6_,
        icon: icons.code,
        color: styleObj.colors.colorYellow
      }
    ];
  }
}