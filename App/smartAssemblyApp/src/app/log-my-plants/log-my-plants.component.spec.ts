import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMyPlantsComponent } from './log-my-plants.component';

describe('LogMyPlantsComponent', () => {
  let component: LogMyPlantsComponent;
  let fixture: ComponentFixture<LogMyPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogMyPlantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogMyPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
