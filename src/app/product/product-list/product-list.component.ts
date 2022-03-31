import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductList } from './product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //public products = <ProductList[]>{};
  products : any = [];

  constructor(
    private service:ProductService,
  ) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() : void {
    this.service.viewProductList()
      .subscribe(response => this.products = response);
  }

}
