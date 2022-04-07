import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  //public product = <ProductDetails[]>{};
  categoryTitle = this.route.snapshot.paramMap.get('cate_slug');
  productName = this.route.snapshot.paramMap.get('prod_slug');

  // For single set of data
  product: any = [];

  // Product form
  productForm = new FormGroup({
    product_id: new FormControl(''),
    product_qty: new FormControl(''),
  });

  constructor(
    private service: ProductService,
    private cartService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {
    const cate_slug = this.route.snapshot.paramMap.get('cate_slug') ?? '';
    const prod_slug = this.route.snapshot.paramMap.get('prod_slug') ?? '';
    this.service
      .viewProductDetails(cate_slug, prod_slug)
      .subscribe((response:any) => {
        this.product = response;
        this.productForm = new FormGroup({
          product_id: new FormControl(response.id),
          product_qty: new FormControl(1),
        });
      });
  }

  // Create array from 1 to product qty
  createRange() {
    return new Array(parseInt(this.product.qty));
  }

  // Add to cart
  addToCart() {
    this.cartService.addToCart(this.productForm.value).subscribe((result) => {
      console.log(result);
    });
  }
}
