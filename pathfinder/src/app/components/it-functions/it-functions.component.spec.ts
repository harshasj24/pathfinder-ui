import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItFunctionsComponent } from './it-functions.component';

describe('ItFunctionsComponent', () => {
  let component: ItFunctionsComponent;
  let fixture: ComponentFixture<ItFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
