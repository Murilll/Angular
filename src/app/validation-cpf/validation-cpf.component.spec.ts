import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationCpfComponent } from './validation-cpf.component';

describe('ValidationCpfComponent', () => {
  let component: ValidationCpfComponent;
  let fixture: ComponentFixture<ValidationCpfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationCpfComponent]
    });
    fixture = TestBed.createComponent(ValidationCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
