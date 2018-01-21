// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { IBasePage } from './../base-page';
import { StringsService } from './../../services/strings/strings.service';

const icons =
{
  email:    "/assets/images/icons/contact/mail-icon.png",
  phone:    "/assets/images/icons/contact/phone-icon.png",
  address:  "/assets/images/icons/contact/location-icon.png"
};

@Component({
  selector: 'g-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, IBasePage
{
  public data: any;

  private _strings: any;

  private _contactInfo: any[];

  public constructor(private _stringsService: StringsService) 
  {
    console.log("Contact-Page.component - ctor");
  }

  public ngOnInit(): void 
  {
    this._strings = this._stringsService.strings;

    this._initContactInfo();
  }

  private _initContactInfo(): void
  {
    this._contactInfo = 
    [
      {
        title: this._strings._EMail_,
        text:  this._strings._EMailValue_,
        icon: icons.email
      },
      {
        title: this._strings._Phone_,
        text:  this._strings._PhoneValue_,
        icon: icons.phone
      },
      {
        title: this._strings._Address_,
        text:  this._strings._AddressValue_,
        icon: icons.address
      }
    ];
  }
}