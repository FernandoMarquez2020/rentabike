import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoBikeComponent } from './listado-bike.component';

describe('ListadoBikeComponent', () => {
  let component: ListadoBikeComponent;
  let fixture: ComponentFixture<ListadoBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoBikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
