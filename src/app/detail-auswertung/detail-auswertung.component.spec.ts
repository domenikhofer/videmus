import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAuswertungComponent } from './detail-auswertung.component';

describe('DetailAuswertungComponent', () => {
  let component: DetailAuswertungComponent;
  let fixture: ComponentFixture<DetailAuswertungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAuswertungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAuswertungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
