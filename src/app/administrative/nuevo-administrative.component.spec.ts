import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAdministrativeComponent } from './nuevo-administrative.component';

describe('NuevoAdministrativeComponent', () => {
  let component: NuevoAdministrativeComponent;
  let fixture: ComponentFixture<NuevoAdministrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoAdministrativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoAdministrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
