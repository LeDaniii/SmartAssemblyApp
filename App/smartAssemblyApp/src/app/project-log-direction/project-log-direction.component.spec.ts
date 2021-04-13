import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLogDirectionComponent } from './project-log-direction.component';

describe('ProjectLogDirectionComponent', () => {
  let component: ProjectLogDirectionComponent;
  let fixture: ComponentFixture<ProjectLogDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLogDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLogDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
