import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestCompComponent } from './unit-test-comp.component';

describe('UnitTestCompComponent', () => {
  let component: UnitTestCompComponent;
  let fixture: ComponentFixture<UnitTestCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTestCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
