import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSpendComponent } from './it-spend.component';

describe('ItSpendComponent', () => {
  let component: ItSpendComponent;
  let fixture: ComponentFixture<ItSpendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItSpendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItSpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
