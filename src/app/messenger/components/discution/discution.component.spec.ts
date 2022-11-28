import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscutionComponent } from './discution.component';

describe('DiscutionComponent', () => {
  let component: DiscutionComponent;
  let fixture: ComponentFixture<DiscutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
