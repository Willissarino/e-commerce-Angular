import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { UserFeatured } from './user-featured';

@Component({
  selector: 'app-user-featured-section',
  templateUrl: './user-featured-section.component.html',
  styleUrls: ['./user-featured-section.component.css']
})
export class UserFeaturedSectionComponent implements OnInit {
  public featured = <UserFeatured[]>{};

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList()
  {
    this.service.userFeatured()
      .subscribe(response => this.featured = response);
  }
}
