import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productData: any;
  @Output() productDeleted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(): void{
    this.productDeleted.emit(this.productData.id);
  }
}
