import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrobAuswertungComponent } from './grob-auswertung.component';

describe('GrobAuswertungComponent', () => {
  let component: GrobAuswertungComponent;
  let fixture: ComponentFixture<GrobAuswertungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrobAuswertungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrobAuswertungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
