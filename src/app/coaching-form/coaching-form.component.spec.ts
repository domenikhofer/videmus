import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingFormComponent } from './coaching-form.component';

describe('CoachingFormComponent', () => {
  let component: CoachingFormComponent;
  let fixture: ComponentFixture<CoachingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
