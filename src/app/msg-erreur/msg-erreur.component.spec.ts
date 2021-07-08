import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgErreurComponent } from './msg-erreur.component';

describe('MsgErreurComponent', () => {
  let component: MsgErreurComponent;
  let fixture: ComponentFixture<MsgErreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgErreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
