import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { 
  BrowserDynamicTestingModule, 
  platformBrowserDynamicTesting 
} 
from '@angular/platform-browser-dynamic/testing'; 
import { TestComponentComponent } from './test-component.component';

describe('TestComponentComponent', () => {
  let component: TestComponentComponent;
  let fixture: ComponentFixture<TestComponentComponent>;
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
it(`should have as input as 'test-component works!'`, () => {
  const fixture = TestBed.createComponent(TestComponentComponent);
  const app = fixture.componentInstance;
  expect(app.text).toEqual('test-component works!');
  });
  
});
