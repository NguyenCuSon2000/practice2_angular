import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practice2';
  public menus:any;
  public products:any;
  ngOnInit(): void {
    this.menus = [
      {
        url:'index.html',
        name: 'Home'
      },
      {
        url:'category.html',
        name: 'Categories'
      },
      {
        url:'product.html',
        name: 'Product'
      },
      {
        url:'cart.html',
        name: 'Cart'
      },
      {
        url:'contact.html',
        name: 'Contact'
      }
    ];
    this.products = [
      {
        anh:'https://dummyimage.com/600x400/55595c/fff',
        title:'Title 1',
        description:"1. Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 31.00
      },
      {
        anh:'https://dummyimage.com/600x400/55595c/fff',
        title:'Title 2',
        description:"2. Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 32.00
      },
      {
        anh:'https://dummyimage.com/600x400/55595c/fff',
        title:'Title 3',
        description:"3. Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 33.00
      },
      {
        anh:'https://dummyimage.com/600x400/55595c/fff',
        title:'Title 4',
        description:"4. Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 34.00
      },
      {
        anh:'https://dummyimage.com/600x400/55595c/fff',
        title:'Title 5',
        description:"5. Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 35.00
      },
      {
        anh:'https://dummyimage.com/600x400/55595c/fff',
        title:'Title 6',
        description:"6. Some quick example text to build on the card title and make up the bulk of the card's content.",
        price: 36.00
      },
    
    ]
  }
}
