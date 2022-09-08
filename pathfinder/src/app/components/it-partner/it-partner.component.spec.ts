import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItPartnerComponent } from './it-partner.component';

describe('ItPartnerComponent', () => {
  let component: ItPartnerComponent;
  let fixture: ComponentFixture<ItPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
