import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenExampleComponent } from './view-children-example.component';

describe('ViewChildrenExampleComponent', () => {
  let component: ViewChildrenExampleComponent;
  let fixture: ComponentFixture<ViewChildrenExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildrenExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildrenExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
