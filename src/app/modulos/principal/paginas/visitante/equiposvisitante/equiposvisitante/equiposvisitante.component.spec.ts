import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposvisitanteComponent } from './equiposvisitante.component';

describe('EquiposvisitanteComponent', () => {
  let component: EquiposvisitanteComponent;
  let fixture: ComponentFixture<EquiposvisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiposvisitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposvisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
