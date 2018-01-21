import { Injectable } from '@angular/core';

@Injectable()
export class ContactService 
{
  public constructor()
  {
    console.log("Contact.service - ctor");
  }

  public sendContactMessage(
    name: string,
    message: string,
    email: string,
    phone: string = null)
  {
    console.log(`Contact.service - sendContactMessage [name: ${name}, email: ${email}, phone: ${phone}]`);

    console.warn("sendContactMessage not implemented yet");
  }
}