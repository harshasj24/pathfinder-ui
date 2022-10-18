import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItpersoneelFitshoringComponent } from './itpersoneel-fitshoring.component';

describe('ItpersoneelFitshoringComponent', () => {
  let component: ItpersoneelFitshoringComponent;
  let fixture: ComponentFixture<ItpersoneelFitshoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItpersoneelFitshoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItpersoneelFitshoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
