import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpPersonelComponent } from './ip-personel.component';

describe('IpPersonelComponent', () => {
  let component: IpPersonelComponent;
  let fixture: ComponentFixture<IpPersonelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpPersonelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpPersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
