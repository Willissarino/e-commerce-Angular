import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeroSectionComponent } from './user-hero-section.component';

describe('UserHeroSectionComponent', () => {
  let component: UserHeroSectionComponent;
  let fixture: ComponentFixture<UserHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHeroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
