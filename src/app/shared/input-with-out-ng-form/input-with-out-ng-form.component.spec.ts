import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithOutNgFormComponent } from './input-with-out-ng-form.component';

describe('InputWithOutNgFormComponent', () => {
  let component: InputWithOutNgFormComponent;
  let fixture: ComponentFixture<InputWithOutNgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithOutNgFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputWithOutNgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
