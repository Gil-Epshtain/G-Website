// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { StringsService } from './../../services/strings/strings.service';

const logos =
{
  facebook: "/assets/images/icons/social-media/facebook-logo.png",
  linkedIn: "/assets/images/icons/social-media/linkedin-logo.png",
  googlePlus: "/assets/images/icons/social-media/google-plus-logo.png",
  stackOverflow: "/assets/images/icons/social-media/stack-overflow-logo.png",
  gitHub: "/assets/images/icons/social-media/github-logo.png"
};

@Component({
  selector: 'g-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit 
{
  private _strings: any;

  private _socialMedia: any[];

  public constructor(private _stringsService: StringsService) 
  {
    console.log("Footer.component - ctor");
  }

  public ngOnInit() 
  {
    this._strings = this._stringsService.strings;

    this._initSocialMedia();
  }

  private _initSocialMedia(): void
  {
    this._socialMedia = 
    [
      {
        title: this._strings._SocialMediaTitle_1_,
        url: this._strings._SocialMediaUrl_1_,
        logo: logos.facebook
      },
      {
        title: this._strings._SocialMediaTitle_2_,
        url: this._strings._SocialMediaUrl_2_,
        logo: logos.linkedIn
      },
      {
        title: this._strings._SocialMediaTitle_3_,
        url: this._strings._SocialMediaUrl_3_,
        logo: logos.googlePlus
      },
      {
        title: this._strings._SocialMediaTitle_4_,
        url: this._strings._SocialMediaUrl_4_,
        logo: logos.stackOverflow
      },
      {
        title: this._strings._SocialMediaTitle_5_,
        url: this._strings._SocialMediaUrl_5_,
        logo: logos.gitHub
      },
    ];
  }
}