import { Component } from '@angular/core';
import { IProduct } from '../../../interface/product';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: IProduct[] = [];
  async ngOnInit() {
    const { data } = await axios.get('https://dummyjson.com/products');
    this.products = data.products;
  }
}
