import { AdminService } from 'src/app/services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css']
})
export class AdminProductAddComponent implements OnInit {
  
  product: any = [];

  addProduct = new FormGroup({
    name: new FormControl(''),
    slug: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl(''),
    popular: new FormControl(''),
    meta_title: new FormControl(''),
    meta_keywords: new FormControl(''),
    meta_description: new FormControl(''),
    image: new FormControl(''),
  });

  constructor(private service:AdminService) { }

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
  }

}
