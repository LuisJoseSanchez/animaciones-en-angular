import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyframesComponent } from './keyframes.component';

describe('KeyframesComponent', () => {
  let component: KeyframesComponent;
  let fixture: ComponentFixture<KeyframesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyframesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyframesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
