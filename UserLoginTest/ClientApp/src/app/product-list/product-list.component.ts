import { ProductServiceService } from './../product-service.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductServiceService]
})
export class ProductListComponent implements OnInit {

  productList: Product;
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    this.productService.GetProducts().subscribe(
      (response:any) => {
        console.log(response);
        this.productList = response;
      }
    );
  }

}
