import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModePayeComponent } from './mode-paye.component';

describe('ModePayeComponent', () => {
  let component: ModePayeComponent;
  let fixture: ComponentFixture<ModePayeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModePayeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModePayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
