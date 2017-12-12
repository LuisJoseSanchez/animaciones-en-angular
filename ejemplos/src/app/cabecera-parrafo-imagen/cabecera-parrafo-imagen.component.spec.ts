import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraParrafoImagenComponent } from './cabecera-parrafo-imagen.component';

describe('CabeceraParrafoImagenComponent', () => {
  let component: CabeceraParrafoImagenComponent;
  let fixture: ComponentFixture<CabeceraParrafoImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraParrafoImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraParrafoImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
