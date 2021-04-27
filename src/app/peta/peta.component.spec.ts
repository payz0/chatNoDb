import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetaComponent } from './peta.component';

describe('PetaComponent', () => {
  let component: PetaComponent;
  let fixture: ComponentFixture<PetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
