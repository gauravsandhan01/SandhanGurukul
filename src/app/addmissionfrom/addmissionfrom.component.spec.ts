import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmissionfromComponent } from './addmissionfrom.component';

describe('AddmissionfromComponent', () => {
  let component: AddmissionfromComponent;
  let fixture: ComponentFixture<AddmissionfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddmissionfromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddmissionfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
