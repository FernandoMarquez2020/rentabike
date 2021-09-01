import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaDevolucionComponent } from './nueva-devolucion.component';

describe('NuevaDevolucionComponent', () => {
  let component: NuevaDevolucionComponent;
  let fixture: ComponentFixture<NuevaDevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaDevolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaDevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
