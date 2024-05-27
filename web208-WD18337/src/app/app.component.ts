import { Component } from '@angular/core';
import { IProduct, IProductLite } from '../interface/product';
import { IStudent } from '../interface/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: `h1{text-transform:uppercase}`,
})
export class AppComponent {
  title = 'web208';
}
