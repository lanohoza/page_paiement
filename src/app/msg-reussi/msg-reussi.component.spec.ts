import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgReussiComponent } from './msg-reussi.component';

describe('MsgReussiComponent', () => {
  let component: MsgReussiComponent;
  let fixture: ComponentFixture<MsgReussiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgReussiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgReussiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
