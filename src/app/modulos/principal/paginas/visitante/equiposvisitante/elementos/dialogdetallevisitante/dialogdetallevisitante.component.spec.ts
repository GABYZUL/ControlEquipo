import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdetallevisitanteComponent } from './dialogdetallevisitante.component';

describe('DialogdetallevisitanteComponent', () => {
  let component: DialogdetallevisitanteComponent;
  let fixture: ComponentFixture<DialogdetallevisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogdetallevisitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogdetallevisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
