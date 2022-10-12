import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItspendrunComponent } from './itspendrun.component';

describe('ItspendrunComponent', () => {
  let component: ItspendrunComponent;
  let fixture: ComponentFixture<ItspendrunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItspendrunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItspendrunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
