import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfallsTabelComponent } from './waterfalls-tabel.component';

describe('WaterfallsTabelComponent', () => {
  let component: WaterfallsTabelComponent;
  let fixture: ComponentFixture<WaterfallsTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterfallsTabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterfallsTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
