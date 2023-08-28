import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendatariosReadComponent } from './arrendatarios-read.component';

describe('ArrendatariosReadComponent', () => {
  let component: ArrendatariosReadComponent;
  let fixture: ComponentFixture<ArrendatariosReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrendatariosReadComponent]
    });
    fixture = TestBed.createComponent(ArrendatariosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
