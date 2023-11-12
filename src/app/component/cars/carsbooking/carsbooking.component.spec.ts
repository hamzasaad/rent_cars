import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsbookingComponent } from './carsbooking.component';

describe('CarsbookingComponent', () => {
  let component: CarsbookingComponent;
  let fixture: ComponentFixture<CarsbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
