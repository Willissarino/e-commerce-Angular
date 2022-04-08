import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-category-add',
  templateUrl: './admin-category-add.component.html',
  styleUrls: ['./admin-category-add.component.css']
})
export class AdminCategoryAddComponent implements OnInit {

  addCategory = new FormGroup({
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
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  saveData() {
    this.service.addCategory(this.addCategory.value)
      .subscribe((result)=> {console.log(result)});
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        title: 'Product added successfully',
        toast: true,
        showConfirmButton: false,
        timer: 2500
      })
    this.router.navigate(['/admin/dashboard/category']);
  }

}
