import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowAlertComponent } from './window-alert.component';

describe('WindowAlertComponent', () => {
  let component: WindowAlertComponent;
  let fixture: ComponentFixture<WindowAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
