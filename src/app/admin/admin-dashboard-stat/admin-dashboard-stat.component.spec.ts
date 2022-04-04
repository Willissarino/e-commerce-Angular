import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardStatComponent } from './admin-dashboard-stat.component';

describe('AdminDashboardStatComponent', () => {
  let component: AdminDashboardStatComponent;
  let fixture: ComponentFixture<AdminDashboardStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
