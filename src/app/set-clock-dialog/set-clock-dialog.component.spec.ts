import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetClockDialogComponent } from './set-clock-dialog.component';

describe('SetClockDialogComponent', () => {
  let component: SetClockDialogComponent;
  let fixture: ComponentFixture<SetClockDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetClockDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetClockDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
