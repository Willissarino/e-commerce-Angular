import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user : any = [];

  // Update user details form
  updateUser = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    country: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipcode: new FormControl(''),
  });

  constructor(
    private service: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  // Get user details
  getUserDetails() : void {
    this.service.getUserDashboard()
      .subscribe(
        (user: any) => {
          this.user = user;
          this.updateUser = new FormGroup({
            fname: new FormControl(user.user_details.name),
            lname: new FormControl(user.user_details.lname),
            email: new FormControl(user.user_details.email),
            phone: new FormControl(user.user_details.phone),
            country: new FormControl(user.user_details.country),
            address1: new FormControl(user.user_details.address1),
            address2: new FormControl(user.user_details.address2),
            city: new FormControl(user.user_details.city),
            state: new FormControl(user.user_details.state),
            zipcode: new FormControl(user.user_details.zipcode),
          });
        }
      );
  }

  saveData() {
    /* this.service.updateUser(this.updateUser.value)
      .subscribe((result)=> {console.log(result)}); */
      console.log(this.updateUser.value);
  }

}
