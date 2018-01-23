// Angular
import { Component, OnInit } from '@angular/core';

// Application
import { ContactService } from './../../services/contact/contact.service';
import { StringsService } from './../../services/strings/strings.service';

const eMailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

@Component({
  selector: 'g-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit 
{
  private _strings: any;

  private _isFormValid: boolean;
  private _formMessage: string;

  private _name: string;
  private _email: string;
  private _phone: string;
  private _message: string;  

  public constructor(
    private _stringsService: StringsService,
    private _contactService: ContactService) 
  {
    console.log("Contact-Form.component - ctor");
  }

  public ngOnInit() 
  {
    this._strings = this._stringsService.strings;

    this._resetForm();
  }

  private _resetForm(): void
  {
    this._formMessage = "";

    this._name = "";
    this._email = "";
    this._phone = "";
    this._message = ""; 

    this._isFormValid = true;
  }

  private _onClickSend(): void
  {
    console.log("Contact-Form.component - _onSubmitForm");

    this._validateForm();
    if (this._isFormValid)
    {
      this._contactService.sendContactMessage(
        this._name,
        this._message,
        this._email,
        this._phone);

      this._resetForm();

      this._formMessage = this._strings._MessageSent_;
    }
  }

  private _validateForm(): void
  {
    this._formMessage = "";

    if (!(2 <= this._name.length && this._name.length <= 32))
    {
      this._formMessage += this._strings._FormInvalidName_ + " ";
    }

    if (!eMailRegEx.test(this._email))
    {
      this._formMessage += this._strings._FormInvalidEMail_ + " ";
    }

    if (!(2 <= this._message.length && this._message.length <= 1024))
    {
      this._formMessage += this._strings._FormInvalidMessage_ + " ";
    }

    this._isFormValid = (this._formMessage.length === 0);
  }
}