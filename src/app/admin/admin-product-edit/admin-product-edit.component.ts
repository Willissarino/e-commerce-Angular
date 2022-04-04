import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent implements OnInit {

  product: any = [];

  // Update product form
  updateProduct = new FormGroup({
    cate_id:            new FormControl(''),
    name:               new FormControl(''),
    slug:               new FormControl(''),
    small_description:  new FormControl(''),
    description:        new FormControl(''),
    original_price:     new FormControl(''),
    selling_price:      new FormControl(''),
    qty:                new FormControl(''),
    tax:                new FormControl(''),
    status:             new FormControl(''),
    trending:           new FormControl(''),
    meta_title:         new FormControl(''),
    meta_description:   new FormControl(''),
    meta_keywords:      new FormControl(''),
    image:              new FormControl(''),
  });

  constructor(
    private service:AdminService,
    private route:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() : void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? "");
    this.service.editProduct(id)
      .subscribe(
        (product: any) => {
          this.updateProduct = new FormGroup({
            cate_id:            new FormControl(product.cate_id),
            name:               new FormControl(product.name),
            slug:               new FormControl(product.slug),
            small_description:  new FormControl(product.small_description),
            description:        new FormControl(product.description),
            original_price:     new FormControl(product.original_price),
            selling_price:      new FormControl(product.selling_price),
            qty:                new FormControl(product.qty),
            tax:                new FormControl(product.tax),
            status:             new FormControl(product.status),
            trending:           new FormControl(product.trending),
            meta_title:         new FormControl(product.meta_title),
            meta_description:   new FormControl(product.meta_description),
            meta_keywords:      new FormControl(product.meta_keywords),
            image:              new FormControl(product.image),
          });
        }
      );
  }

  saveData() {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? "");
    this.service.updateProduct(id, this.updateProduct.value)
      .subscribe((result)=> {console.log(result)});
  }
  
}
