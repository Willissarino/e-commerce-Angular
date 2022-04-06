import { AuthAdminService } from './../../auth/auth-admin/auth-admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  errors: any = null;

  constructor(
    public AuthAdminService: AuthAdminService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.AuthAdminService.login(this.adminLogin.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.adminLogin.reset();
        this.router.navigateByUrl('/admin/dashboard/stats');
      }
    );
  }
  

}
