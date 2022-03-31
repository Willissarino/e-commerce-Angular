import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  product: any = [];

  constructor(
    private service:AdminService,
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() : void {
    this.service.getAllProduct()
    .subscribe(response => this.product = response);
  }


}
