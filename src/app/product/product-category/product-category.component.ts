import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductCategory } from './product-category';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  public products = <ProductCategory[]>{};

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList()
  {
    this.service.categoryList()
      .subscribe(response => this.products = response);
  }

}
