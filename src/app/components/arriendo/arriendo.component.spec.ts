import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriendoComponent } from './arriendo.component';

describe('ArriendoComponent', () => {
  let component: ArriendoComponent;
  let fixture: ComponentFixture<ArriendoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArriendoComponent]
    });
    fixture = TestBed.createComponent(ArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
