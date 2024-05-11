import { Component, Input } from '@angular/core';
import { Iproduct } from '../../../interfaces/product';
import axios from 'axios';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  onClick = async () => {
    const { data } = await axios.post('http://localhost:3000/products', {
      productname: this.productname,
      thumbnail: this.thumbnail,
      price: this.price,
    });
    console.log(data);
  };
  @Input() product: Iproduct = {} as Iproduct;
  productname: string = '';
  thumbnail: string = '';
  price: string = '0';
}
