import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriiComponent } from './calorii.component';

describe('CaloriiComponent', () => {
  let component: CaloriiComponent;
  let fixture: ComponentFixture<CaloriiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
