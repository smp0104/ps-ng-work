import { Component, OnInit } from '@angular/core';
import {IProduct } from './product.int';

import {ProductService} from './product.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pro-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
pageTitle: string = 'Products List';
imageWidth: number = 50;
imageMargin: number = 2;
imageBorder = {'border': '2px solid black'};
showImage: boolean = false;
_filterText: string;
get filterText(): string {
return this._filterText;
}
set filterText(value: string) {
this._filterText = value;
this.filteredProducts = this._filterText ? this.performFilter(this._filterText) : this.products;
}

filteredProducts: IProduct[];
products: IProduct[] = [

];
toggleImage(): void {
this.showImage = !this.showImage;
}
performFilter(filterBy: string): IProduct[] {
filterBy = filterBy.toLocaleLowerCase();
return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
  constructor(private productService: ProductService) {

  }
  ngOnInit() {
 this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.filterText = '';
  }
  onClickRating(msg: string) {
    console.log(msg);
  }

}
