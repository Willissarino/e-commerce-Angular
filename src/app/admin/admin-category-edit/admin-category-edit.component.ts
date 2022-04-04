import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.css']
})
export class AdminCategoryEditComponent implements OnInit {

  product : any = [];

  // Update category form
  updateCategory = new FormGroup({
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

  constructor(
    private service:AdminService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() : void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? "");
    this.service.editCategory(id)
      .subscribe(response => this.product = response);
  }
}
