import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAdministrativeComponent } from './mostrar-administrative.component';

describe('MostrarAdministrativeComponent', () => {
  let component: MostrarAdministrativeComponent;
  let fixture: ComponentFixture<MostrarAdministrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarAdministrativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
