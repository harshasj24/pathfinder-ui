import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModalOptionsComponent } from './home-modal-options.component';

describe('HomeModalOptionsComponent', () => {
  let component: HomeModalOptionsComponent;
  let fixture: ComponentFixture<HomeModalOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeModalOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeModalOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
