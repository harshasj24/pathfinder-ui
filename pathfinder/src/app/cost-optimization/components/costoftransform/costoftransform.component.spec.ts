import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostoftransformComponent } from './costoftransform.component';

describe('CostoftransformComponent', () => {
  let component: CostoftransformComponent;
  let fixture: ComponentFixture<CostoftransformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostoftransformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostoftransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
