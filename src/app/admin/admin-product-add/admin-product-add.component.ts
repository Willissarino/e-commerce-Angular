import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css']
})
export class AdminProductAddComponent implements OnInit {
  
  product: any = [];

  addProduct = new FormGroup({
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
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.getProductCategoryList();
  }

  getProductCategoryList() : void {
    this.service.getAllCategory()
      .subscribe(response => this.product = response);
  }

  saveData() {
    this.service.addProduct(this.addProduct.value)
      .subscribe((result)=> {console.log(result)});
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        title: 'Product added successfully',
        toast: true,
        showConfirmButton: false,
        timer: 2500
      })
      this.router.navigate(['/admin/dashboard/product']);
  }

}
