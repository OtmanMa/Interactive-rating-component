import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterRatingComponent } from './after-rating.component';

describe('AfterRatingComponent', () => {
  let component: AfterRatingComponent;
  let fixture: ComponentFixture<AfterRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
