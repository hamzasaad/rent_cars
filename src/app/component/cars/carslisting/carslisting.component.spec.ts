import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarslistingComponent } from './carslisting.component';

describe('CarslistingComponent', () => {
  let component: CarslistingComponent;
  let fixture: ComponentFixture<CarslistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarslistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarslistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
