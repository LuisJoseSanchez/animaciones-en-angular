import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasAnimadasComponent } from './rutas-animadas.component';

describe('RutasAnimadasComponent', () => {
  let component: RutasAnimadasComponent;
  let fixture: ComponentFixture<RutasAnimadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutasAnimadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasAnimadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
