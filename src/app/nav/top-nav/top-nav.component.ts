import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/auth/auth-user/auth-user.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  username = localStorage.getItem('USERNAME');

  constructor(
    public authUserService: AuthUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  logout() {
    this.authUserService.logout();
    this.router.navigate(['/login']);
  }

}
