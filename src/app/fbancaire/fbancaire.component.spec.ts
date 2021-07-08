import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FBancaireComponent } from './fbancaire.component';

describe('FBancaireComponent', () => {
  let component: FBancaireComponent;
  let fixture: ComponentFixture<FBancaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FBancaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FBancaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
