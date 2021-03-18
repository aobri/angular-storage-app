import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Output() productAdded = new EventEmitter();

  productName = '';

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(): void{
    this.productAdded.emit(this.productName);
  }
}
