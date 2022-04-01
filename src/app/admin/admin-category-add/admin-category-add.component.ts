import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

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

  constructor(private service:AdminService) { }

  ngOnInit(): void {

  }

  saveData() {
    this.service.addCategory(this.addCategory.value)
      .subscribe((result)=> {console.log(result)});
  }

}
