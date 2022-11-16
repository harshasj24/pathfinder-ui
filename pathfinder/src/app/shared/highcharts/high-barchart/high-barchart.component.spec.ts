import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighBarchartComponent } from './high-barchart.component';

describe('HighBarchartComponent', () => {
  let component: HighBarchartComponent;
  let fixture: ComponentFixture<HighBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighBarchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
