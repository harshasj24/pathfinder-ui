import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLinechartComponent } from './high-linechart.component';

describe('HighLinechartComponent', () => {
  let component: HighLinechartComponent;
  let fixture: ComponentFixture<HighLinechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighLinechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighLinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
