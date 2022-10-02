import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSubPageComponent } from './angular-sub-page.component';

describe('AngularSubPageComponent', () => {
  let component: AngularSubPageComponent;
  let fixture: ComponentFixture<AngularSubPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSubPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
