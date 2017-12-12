import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrafoMenguanteComponent } from './parrafo-menguante.component';

describe('ParrafoMenguanteComponent', () => {
  let component: ParrafoMenguanteComponent;
  let fixture: ComponentFixture<ParrafoMenguanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParrafoMenguanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParrafoMenguanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
