import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductCategory } from './product-category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  public products = <ProductCategory[]>{};
  categoryTitle = this.route.snapshot.paramMap.get('slug');

  constructor(
    private service:ProductService,
    private route: ActivatedRoute  
  ) {}

  data: any = [];

  ngOnInit(): void {
    this.getProductCategoryList();
  }

  getProductCategoryList() : void {
    // get() function return string | string
    const slug = this.route.snapshot.paramMap.get('slug') ?? "";
    this.service.viewCategoryList(slug)
      .subscribe(response => this.data = response);
  }

}
