import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDahabiaComponent } from './fdahabia.component';

describe('FDahabiaComponent', () => {
  let component: FDahabiaComponent;
  let fixture: ComponentFixture<FDahabiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDahabiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FDahabiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
