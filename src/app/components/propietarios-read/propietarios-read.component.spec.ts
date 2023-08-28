import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropietariosReadComponent } from './propietarios-read.component';

describe('PropietariosReadComponent', () => {
  let component: PropietariosReadComponent;
  let fixture: ComponentFixture<PropietariosReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropietariosReadComponent]
    });
    fixture = TestBed.createComponent(PropietariosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
