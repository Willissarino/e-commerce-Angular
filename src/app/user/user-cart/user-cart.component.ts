import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  userCart : any = [];

  constructor(
    private service: UserService,
  ) {}

  ngOnInit(): void {
    this.getUserCart();
  }

  // Get user cart
  getUserCart() : void {
    this.service.getCart()
      .subscribe(
        (userCart: any) => {
          this.userCart = userCart;
        }
      );
  }
}
