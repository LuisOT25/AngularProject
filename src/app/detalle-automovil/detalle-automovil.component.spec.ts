import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAutomovilComponent } from './detalle-automovil.component';

describe('DetalleAutomovilComponent', () => {
  let component: DetalleAutomovilComponent;
  let fixture: ComponentFixture<DetalleAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAutomovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
