import { UserCategory } from './user-category';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-categories-section',
  templateUrl: './user-categories-section.component.html',
  styleUrls: ['./user-categories-section.component.css']
})
export class UserCategoriesSectionComponent implements OnInit {

  public products = <UserCategory[]>{};

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList()
  {
    this.service.userCategory()
      .subscribe(response => this.products = response);
  }

}
