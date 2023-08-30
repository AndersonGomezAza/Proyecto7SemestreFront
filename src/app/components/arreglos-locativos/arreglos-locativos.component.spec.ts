import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArreglosLocativosComponent } from './arreglos-locativos.component';

describe('ArreglosLocativosComponent', () => {
  let component: ArreglosLocativosComponent;
  let fixture: ComponentFixture<ArreglosLocativosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArreglosLocativosComponent]
    });
    fixture = TestBed.createComponent(ArreglosLocativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
