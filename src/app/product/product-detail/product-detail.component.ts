import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  //public product = <ProductDetails[]>{};
  categoryTitle = this.route.snapshot.paramMap.get('cate_slug');
  productName = this.route.snapshot.paramMap.get('prod_slug');

  // For single set of data
  product : any = [];

  constructor(
    private service:ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() : void {
    const cate_slug = this.route.snapshot.paramMap.get('cate_slug') ?? "";
    const prod_slug = this.route.snapshot.paramMap.get('prod_slug') ?? "";
    this.service.viewProductDetails(cate_slug,prod_slug)
      .subscribe(response => this.product = response);

  }

}
