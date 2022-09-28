import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSpendRunComponent } from './it-spend-run.component';

describe('ItSpendRunComponent', () => {
  let component: ItSpendRunComponent;
  let fixture: ComponentFixture<ItSpendRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItSpendRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItSpendRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
