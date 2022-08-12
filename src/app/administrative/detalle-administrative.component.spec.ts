import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAdministrativeComponent } from './detalle-administrative.component';

describe('DetalleAdministrativeComponent', () => {
  let component: DetalleAdministrativeComponent;
  let fixture: ComponentFixture<DetalleAdministrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAdministrativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
