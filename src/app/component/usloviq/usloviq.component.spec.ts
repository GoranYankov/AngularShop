import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsloviqComponent } from './usloviq.component';

describe('UsloviqComponent', () => {
  let component: UsloviqComponent;
  let fixture: ComponentFixture<UsloviqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsloviqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsloviqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
