import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAdministrativeComponent } from './editar-administrative.component';

describe('EditarAdministrativeComponent', () => {
  let component: EditarAdministrativeComponent;
  let fixture: ComponentFixture<EditarAdministrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAdministrativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
