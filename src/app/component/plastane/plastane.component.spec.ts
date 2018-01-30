import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlastaneComponent } from './plastane.component';

describe('PlastaneComponent', () => {
  let component: PlastaneComponent;
  let fixture: ComponentFixture<PlastaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlastaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlastaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
