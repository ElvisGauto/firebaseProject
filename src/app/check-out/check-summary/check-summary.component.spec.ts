import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSummaryComponent } from './check-summary.component';

describe('CheckSummaryComponent', () => {
  let component: CheckSummaryComponent;
  let fixture: ComponentFixture<CheckSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
