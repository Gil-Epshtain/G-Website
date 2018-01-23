import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'g-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit 
{
  @Input() title: string;
  @Input() text: string;
  @Input() color: string;
  @Input() icon: string;

  public constructor() 
  { 
    console.log("Service.component - ctor");
  }

  public ngOnInit() 
  {
  }
}