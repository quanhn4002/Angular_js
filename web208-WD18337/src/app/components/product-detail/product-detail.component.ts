import { ActivatedRoute, Routes } from '@angular/router';
import { Component, Input, inject } from '@angular/core';
import { IProduct } from '../../../interface/product';
import axios from 'axios';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: IProduct = {} as IProduct;

  route = inject(ActivatedRoute);
  onClick = async () => {
    console.log(this.route.snapshot.params['id']);
  };
  async ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    const { data } = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );
    this.product = data;
  }
  setThumbnail = (url: string) => {
    this.product.thumbnail = url;
  };
}
