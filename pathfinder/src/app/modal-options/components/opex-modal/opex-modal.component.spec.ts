import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpexModalComponent } from './opex-modal.component';

describe('OpexModalComponent', () => {
  let component: OpexModalComponent;
  let fixture: ComponentFixture<OpexModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpexModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpexModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
