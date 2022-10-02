import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodmasRuleComponent } from './bodmas-rule.component';

describe('BodmasRuleComponent', () => {
  let component: BodmasRuleComponent;
  let fixture: ComponentFixture<BodmasRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodmasRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodmasRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
