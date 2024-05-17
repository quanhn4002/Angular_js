import { Component } from '@angular/core';
import { IMenu } from '../../../interface/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menus: IMenu[] = [
    {
      id: 1,
      name: 'Home',
      path: 'home',
      parent: 0,
    },
    {
      id: 2,
      name: 'About us',
      path: 'about-us',
      parent: 0,
    },
    {
      id: 3,
      name: 'Products',
      path: 'product',
      parent: 0,
    },
    {
      id: 4,
      name: 'Fashion',
      path: 'fashion',
      parent: 3,
    },
    {
      id: 5,
      name: 'Jewelry',
      path: 'jewelry',
      parent: 3,
    },
    {
      id: 6,
      name: 'Contact',
      path: 'contact',
      parent: 0,
    },
  ];
  checkChildrent = (menuid: number): boolean => {
    //check menu có chứa menu con không
    let check: boolean = false; //biến check
    for (let item of this.menus) {
      //duyệt qua các menu
      if (item.parent === menuid) {
        //nếu menu đó có parent = menuid thì trả về true
        check = true;
      }
    }
    return check;
  };
}
