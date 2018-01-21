import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'g-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit
{
  @Input() title: string;
  @Input() years: string;  
  @Input() institution: string;
  @Input() url: string;
  @Input() text: string;
  @Input() color: string;

  public constructor() 
  { 
    console.log("Experience.component - ctor");
  }

  public ngOnInit() 
  {
  }
}