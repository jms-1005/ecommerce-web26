import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  products:Product[] = [
    {
      pDescription: "Some description",
      pImage: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/193/19392/19392057.jpg",
      pTitle: "Product Title",
      pPrice: 599
    },
    {
      pImage: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/193/19392/19392057.jpg",
      pPrice: 899,
      pDescription: "Description",
      pTitle: "Hello"
    }

  ];

}
