import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterControlsComponent } from './master-controls.component';

describe('MasterControlsComponent', () => {
  let component: MasterControlsComponent;
  let fixture: ComponentFixture<MasterControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
