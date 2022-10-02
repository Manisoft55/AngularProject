import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncCallsComponent } from './async-calls.component';

describe('AsyncCallsComponent', () => {
  let component: AsyncCallsComponent;
  let fixture: ComponentFixture<AsyncCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
