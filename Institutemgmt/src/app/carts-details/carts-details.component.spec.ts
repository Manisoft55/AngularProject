import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsDetailsComponent } from './carts-details.component';

describe('CartsDetailsComponent', () => {
  let component: CartsDetailsComponent;
  let fixture: ComponentFixture<CartsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
