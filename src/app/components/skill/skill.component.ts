import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'g-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit 
{
  @Input() title: string;
  @Input() text: string;
  @Input() value: string;
  @Input() color: string;

  public constructor() 
  { 
    console.log("Skill.component - ctor");
  }

  public ngOnInit() 
  {
  }
}