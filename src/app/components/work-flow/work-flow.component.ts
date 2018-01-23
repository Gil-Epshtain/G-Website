import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'g-work-flow',
  templateUrl: './work-flow.component.html',
  styleUrls: ['./work-flow.component.scss']
})
export class WorkFlowComponent implements OnInit 
{
  @Input() title: string;
  @Input() text: string;
  @Input() color: string;
  @Input() icon: string;

  public constructor() 
  { 
    console.log("Work-Flow.component - ctor");
  }

  public ngOnInit() 
  {
  }
}