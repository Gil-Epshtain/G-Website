import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'g-hover-icon',
  templateUrl: './hover-icon.component.html',
  styleUrls: ['./hover-icon.component.scss']
})
export class HoverIconComponent implements OnInit 
{
  @Input() title: string;
  @Input() text: string;
  @Input() icon: string;

  public constructor() 
  {
    console.log("Hover-Icon.component - ctor");
  }

  public ngOnInit() 
  {
  }
}