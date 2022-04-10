import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeRatingComponent } from './before-rating.component';

describe('BeforeRatingComponent', () => {
  let component: BeforeRatingComponent;
  let fixture: ComponentFixture<BeforeRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
