import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMachinesComponent } from './log-machines.component';

describe('LogMachinesComponent', () => {
  let component: LogMachinesComponent;
  let fixture: ComponentFixture<LogMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogMachinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
