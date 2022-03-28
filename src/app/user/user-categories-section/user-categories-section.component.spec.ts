import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCategoriesSectionComponent } from './user-categories-section.component';

describe('UserCategoriesSectionComponent', () => {
  let component: UserCategoriesSectionComponent;
  let fixture: ComponentFixture<UserCategoriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCategoriesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCategoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
