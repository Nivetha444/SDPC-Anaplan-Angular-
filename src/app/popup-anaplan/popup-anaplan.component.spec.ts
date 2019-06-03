import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAnaplanComponent } from './popup-anaplan.component';

describe('PopupAnaplanComponent', () => {
  let component: PopupAnaplanComponent;
  let fixture: ComponentFixture<PopupAnaplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAnaplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAnaplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
