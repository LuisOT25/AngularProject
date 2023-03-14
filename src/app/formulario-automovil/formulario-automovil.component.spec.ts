import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAutomovilComponent } from './formulario-automovil.component';

describe('FormularioAutomovilComponent', () => {
  let component: FormularioAutomovilComponent;
  let fixture: ComponentFixture<FormularioAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAutomovilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
