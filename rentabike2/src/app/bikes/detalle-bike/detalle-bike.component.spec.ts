import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBikeComponent } from './detalle-bike.component';

describe('DetalleBikeComponent', () => {
  let component: DetalleBikeComponent;
  let fixture: ComponentFixture<DetalleBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleBikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
