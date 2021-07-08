import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FvirementComponent } from './fvirement.component';

describe('FvirementComponent', () => {
  let component: FvirementComponent;
  let fixture: ComponentFixture<FvirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FvirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FvirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
