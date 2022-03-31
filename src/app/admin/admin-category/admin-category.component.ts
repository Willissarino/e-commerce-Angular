import { ActivatedRoute } from '@angular/router';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  product: any = [];

  constructor(
    private service:AdminService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProductCategoryList();
  }

  getProductCategoryList() : void {
    this.service.getAllCategory()
    .subscribe(response => this.product = response);
  }
}
