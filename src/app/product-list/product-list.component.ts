import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: any[];

  constructor(private productListService: ProductListService) {
    this.productList = [];
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productList = [];
    this.productListService.getAllProducts().subscribe((productList: any[]) => {
      this.productList = productList;
    });
  }

  deleteProduct(productId: number): void {
    this.productList = this.productList.filter((product) => product.id !== productId);
  }

  addProduct(productName: string): void{
    this.productList.push({id: this.productList.length + 1,  name: productName});
  }
}
