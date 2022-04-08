import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() : void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? "");
    this.service.editCategory(id)
      .subscribe(
        (product: any) => {
          this.updateCategory = new FormGroup({
            name: new FormControl(product.name),
            slug: new FormControl(product.slug),
            description: new FormControl(product.description),
            status: new FormControl(product.status),
            popular: new FormControl(product.popular),
            meta_title: new FormControl(product.meta_title),
            meta_keywords: new FormControl(product.meta_keywords),
            meta_description: new FormControl(product.meta_description),
            image: new FormControl(product.image),
          });
        }
      );
  }

  saveData() {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? "");
    this.service.updateCategory(id, this.updateCategory.value)
      .subscribe((result)=> {console.log(result)});
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        title: 'Category updated successfully',
        toast: true,
        showConfirmButton: false,
        timer: 2500
      })
     this.router.navigate(['/admin/dashboard/category']);

  }

}
