import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCoffeeComponent } from './log-coffee.component';

describe('LogCoffeeComponent', () => {
  let component: LogCoffeeComponent;
  let fixture: ComponentFixture<LogCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
