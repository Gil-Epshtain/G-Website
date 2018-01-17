import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersPageComponent } from './employers-page.component';

describe('EmployersPageComponent', () => {
  let component: EmployersPageComponent;
  let fixture: ComponentFixture<EmployersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
