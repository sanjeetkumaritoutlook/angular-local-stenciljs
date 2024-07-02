import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidParentComponent } from './fluid-parent.component';

describe('FluidParentComponent', () => {
  let component: FluidParentComponent;
  let fixture: ComponentFixture<FluidParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluidParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluidParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
