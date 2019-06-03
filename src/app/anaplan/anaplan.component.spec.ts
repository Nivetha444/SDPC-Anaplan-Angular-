import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaplanComponent } from './anaplan.component';

describe('AnaplanComponent', () => {
  let component: AnaplanComponent;
  let fixture: ComponentFixture<AnaplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
