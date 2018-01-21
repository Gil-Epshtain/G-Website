// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { ContactService } from './../../services/contact/contact.service';
import { StringsService } from './../../services/strings/strings.service';

@Component({
  selector: 'g-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit 
{
  private _strings: any;

  public constructor(
    private _stringsService: StringsService,
    private _contactService: ContactService) 
  {
    console.log("Contact-Form.component - ctor");
  }

  public ngOnInit() 
  {
    this._strings = this._stringsService.strings;
  }

  private _onSubmitForm()
  {
    console.log("Contact-Form.component - _onSubmitForm");
  }
}