import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaggerComponent } from './stagger.component';

describe('StaggerComponent', () => {
  let component: StaggerComponent;
  let fixture: ComponentFixture<StaggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
