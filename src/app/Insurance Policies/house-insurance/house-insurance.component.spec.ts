import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseInsuranceComponent } from './house-insurance.component';

describe('HouseInsurenceComponent', () => {
  let component: HouseInsuranceComponent;
  let fixture: ComponentFixture<HouseInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
