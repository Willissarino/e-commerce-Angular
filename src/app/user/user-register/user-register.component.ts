import { AuthUserService } from './../../auth/auth-user/auth-user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userRegister = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
  });

  errors: any = null;

  constructor(
    private router: Router,
    public AuthUserService: AuthUserService,
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.AuthUserService.register(this.userRegister.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.userRegister.reset();
        this.router.navigate(['/login']);
      }
    );
  }

}
