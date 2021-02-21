import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInsuranceComponent } from './car-insurance.component';

describe('VehicleInsurenceComponent', () => {
  let component: CarInsuranceComponent;
  let fixture: ComponentFixture<CarInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
