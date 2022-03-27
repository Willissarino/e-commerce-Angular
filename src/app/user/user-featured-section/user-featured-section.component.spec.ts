import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeaturedSectionComponent } from './user-featured-section.component';

describe('UserFeaturedSectionComponent', () => {
  let component: UserFeaturedSectionComponent;
  let fixture: ComponentFixture<UserFeaturedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFeaturedSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeaturedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
