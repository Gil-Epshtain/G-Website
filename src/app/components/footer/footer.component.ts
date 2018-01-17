import { Component, OnInit } from '@angular/core';

const socialIcons =
[
  {
    title: "Facebook",
    logo: "/assets/images/icons/social-media/facebook-logo.png",
    url: "https://www.facebook.com/Gil.Epshtain"
  },
  {
    title: "LinkedIn",
    logo: "/assets/images/icons/social-media/linkedin-logo.png",
    url: "https://www.linkedin.com/in/Gil-Epshtain-41134570"
  },
  {
    title: "Google+",
    logo: "/assets/images/icons/social-media/google-plus-logo.png",
    url: "https://plus.google.com/114479878076096432932"
  },
  {
    title: "Stack Overflow",
    logo: "/assets/images/icons/social-media/stack-overflow-logo.png",
    url: "https://stackoverflow.com/users/2658683/Gil-Epshtain"
  },
  {
    title: "GitHub",
    logo: "/assets/images/icons/social-media/github-logo.png",
    url: "https://github.com/Gil-Epshtain"
  }
];

@Component({
  selector: 'g-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit 
{
  private _socialIcons: any[];

  public constructor() 
  {
    console.log("Footer.component - ctor");

    this._socialIcons = socialIcons;
  }

  public ngOnInit() 
  {

  }
}