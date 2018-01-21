import { Injectable } from '@angular/core';

import* as _ from 'lodash';

import * as enUS from './local/en-US.json';
import * as heIL from './local/he-IL.json';

@Injectable()
export class StringsService
{
  private _string: any;
  private _language: any;

  public constructor() 
  {
    console.log("Strings.service - ctor");

    this._loadStrings();
  }

  private _loadStrings(): void
  {
    this._string = 
    {
      "en-US": enUS,
      "he-IL": heIL
    };

    this._language = null;
  }

  public setLocal(local: string): StringsService
  {
    console.log(`Strings.component - setLocal [local: ${local}]`);

    this._language = _.find(this._string, (value, key) => key == local) || this._language;

    return this;
  }

  public get strings(): any
  {
    return this._language;
  }
}