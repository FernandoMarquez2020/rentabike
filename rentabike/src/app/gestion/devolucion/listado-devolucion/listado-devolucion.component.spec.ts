import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDevolucionComponent } from './listado-devolucion.component';

describe('ListadoDevolucionComponent', () => {
  let component: ListadoDevolucionComponent;
  let fixture: ComponentFixture<ListadoDevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDevolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
