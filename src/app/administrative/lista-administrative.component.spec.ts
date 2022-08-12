import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdministrativeComponent } from './lista-administrative.component';

describe('ListaAdministrativeComponent', () => {
  let component: ListaAdministrativeComponent;
  let fixture: ComponentFixture<ListaAdministrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAdministrativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
