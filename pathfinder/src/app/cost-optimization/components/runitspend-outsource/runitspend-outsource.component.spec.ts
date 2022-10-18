import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunitspendOutsourceComponent } from './runitspend-outsource.component';

describe('RunitspendOutsourceComponent', () => {
  let component: RunitspendOutsourceComponent;
  let fixture: ComponentFixture<RunitspendOutsourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunitspendOutsourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunitspendOutsourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
