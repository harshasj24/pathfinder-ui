import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItRunSpendComponent } from './it-run-spend.component';

describe('ItRunSpendComponent', () => {
  let component: ItRunSpendComponent;
  let fixture: ComponentFixture<ItRunSpendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItRunSpendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItRunSpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
