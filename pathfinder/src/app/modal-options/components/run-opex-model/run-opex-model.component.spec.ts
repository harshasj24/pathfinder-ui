import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunOpexModelComponent } from './run-opex-model.component';

describe('RunOpexModelComponent', () => {
  let component: RunOpexModelComponent;
  let fixture: ComponentFixture<RunOpexModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunOpexModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunOpexModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
