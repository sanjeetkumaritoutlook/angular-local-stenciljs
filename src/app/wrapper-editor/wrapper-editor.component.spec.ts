import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperEditorComponent } from './wrapper-editor.component';

describe('WrapperEditorComponent', () => {
  let component: WrapperEditorComponent;
  let fixture: ComponentFixture<WrapperEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
