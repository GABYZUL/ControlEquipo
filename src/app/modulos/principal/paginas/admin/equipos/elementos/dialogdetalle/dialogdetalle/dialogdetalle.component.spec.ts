import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdetalleComponent } from './dialogdetalle.component';

describe('DialogdetalleComponent', () => {
  let component: DialogdetalleComponent;
  let fixture: ComponentFixture<DialogdetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogdetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
