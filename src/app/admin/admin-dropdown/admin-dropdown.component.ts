import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAdminService } from 'src/app/auth/auth-admin/auth-admin.service';

@Component({
  selector: 'app-admin-dropdown',
  templateUrl: './admin-dropdown.component.html',
  styleUrls: ['./admin-dropdown.component.css']
})
export class AdminDropdownComponent implements OnInit {

  constructor(
    private router: Router,
    private AuthAdminService: AuthAdminService,
  ) {}

  ngOnInit(): void {
  }

  logout() {
    this.AuthAdminService.logout();
    this.router.navigate(['/admin']);
  }
}
