import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingmodalBComponent } from './savingmodal-b.component';

describe('SavingmodalBComponent', () => {
  let component: SavingmodalBComponent;
  let fixture: ComponentFixture<SavingmodalBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingmodalBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingmodalBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
