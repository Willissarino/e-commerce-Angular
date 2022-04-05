import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from '../../auth/auth-user/auth-user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  errors: any = null;

  constructor(
    public AuthUserService: AuthUserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.AuthUserService.login(this.userLogin.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.userLogin.reset();
        this.router.navigateByUrl('/');
      }
    );
  }


}
