import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingmodelAComponent } from './savingmodel-a.component';

describe('SavingmodelAComponent', () => {
  let component: SavingmodelAComponent;
  let fixture: ComponentFixture<SavingmodelAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingmodelAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingmodelAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
