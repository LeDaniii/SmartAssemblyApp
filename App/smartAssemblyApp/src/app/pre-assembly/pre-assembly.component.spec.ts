import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAssemblyComponent } from './pre-assembly.component';

describe('PreAssemblyComponent', () => {
  let component: PreAssemblyComponent;
  let fixture: ComponentFixture<PreAssemblyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreAssemblyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
