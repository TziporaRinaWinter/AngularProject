import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerDetailsComponent } from './volunteer-details.component';

describe('VolunteerDetailsComponent', () => {
  let component: VolunteerDetailsComponent;
  let fixture: ComponentFixture<VolunteerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolunteerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
