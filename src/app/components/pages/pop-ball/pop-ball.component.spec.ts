import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopBallComponent } from './pop-ball.component';

describe('PopBallComponent', () => {
  let component: PopBallComponent;
  let fixture: ComponentFixture<PopBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopBallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
