import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTestPageComponent } from './angular-test-page.component';

describe('AngularTestPageComponent', () => {
  let component: AngularTestPageComponent;
  let fixture: ComponentFixture<AngularTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
