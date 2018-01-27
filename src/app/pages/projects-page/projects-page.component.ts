// Angular
import { Component, OnInit }  from '@angular/core';

// Ng-Bootstrap
import { NgbCarouselConfig }  from '@ng-bootstrap/ng-bootstrap';

// Application
import { IBasePage }          from './../base-page';
import { StringsService }     from './../../services/strings/strings.service';

import { styleObj }           from './../../style/style';

const images =
{
  spaceInvaders:  "/assets/images/photos/projects/spaceinvaders.jpg",
  cellcomTv:      "/assets/images/photos/projects/cellcomtv.jpg",
  visionHub:      "/assets/images/photos/projects/visionhub.jpg"
}

@Component({
  selector: 'g-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ProjectsPageComponent implements OnInit, IBasePage
{
  public data: any;

  private _strings: any;

  private _projects: any[];

  public constructor(
    private _NgbCarouselConfig: NgbCarouselConfig,
    private _stringsService: StringsService) 
  {
    console.log("Projects-Page.component - ctor");
  }

  public ngOnInit(): void 
  {
    this._strings = this._stringsService.strings;

    this._initCarousel();
    this._initProjects();
  }

  private _initCarousel(): void
  {
    this._NgbCarouselConfig.interval = 10000;
    this._NgbCarouselConfig.wrap = false;
    this._NgbCarouselConfig.keyboard = false;
  }

  private _initProjects(): void
  {
    this._projects =
    [
      {
        title: this._strings._ProjectTitle_1_,
        text: this._strings._ProjectText_1_,
        image: images.spaceInvaders,
        color: styleObj.colors.colorOrange
      },
      {
        title: this._strings._ProjectTitle_2_,
        text: this._strings._ProjectText_2_,
        image: images.cellcomTv,
        color: styleObj.colors.colorPurple
      },
      {
        title: this._strings._ProjectTitle_3_,
        text: this._strings._ProjectText_3_,
        image: images.visionHub,
        color: styleObj.colors.colorTurquoise
      }
    ];
  }
}