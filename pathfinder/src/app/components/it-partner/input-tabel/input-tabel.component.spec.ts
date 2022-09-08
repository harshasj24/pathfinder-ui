import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTabelComponent } from './input-tabel.component';

describe('InputTabelComponent', () => {
  let component: InputTabelComponent;
  let fixture: ComponentFixture<InputTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
