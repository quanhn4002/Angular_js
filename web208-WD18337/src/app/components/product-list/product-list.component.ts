import { Component, Input } from '@angular/core';
import { IProduct, IProductLite } from '../../../interface/product';
import axios from 'axios';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  loading: boolean = true;
  productss: IProduct[] = [];
  async ngOnInit() {
    const { data } = await axios.get('https://dummyjson.com/products');
    this.productss = data.products;
    this.loading = false;
  }
}
