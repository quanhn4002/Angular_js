import { Component, Input } from '@angular/core';
import { IProductLite } from '../../../interface/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  @Input() addProduct: any
  title:string = ''
  price:number =1000
  thumbnail:string =''
  display:boolean = false
  onAddProduct = ()=>{
    const data:IProductLite = {
      title:this.title,
      price:this.price,
      thumbnail:this.thumbnail
    }
    this.addProduct(data)
  }
}
