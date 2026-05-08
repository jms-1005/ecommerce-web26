import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Dummyproduct, DummyproductShape } from '../interfaces/dummyproduct';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dummyproducts',
  imports: [CurrencyPipe, RouterLink, FormsModule],
  templateUrl: './dummyproducts.html',
  styleUrl: './dummyproducts.scss',
})
export class Dummyproducts implements OnInit{
  title:string = '';
  price:number = 0;
  description = '';
  rating = 0;
  stock = 0;
  discountPercentage = 0;
  image = '';
  thumbnail = '';
  products: DummyproductShape[] = [];
  productsURL = "https://dummyjson.com/products";

  constructor(private http: HttpClient, private changeDetect: ChangeDetectorRef){}

  ngOnInit(): void {
    this.http.get<Dummyproduct>(this.productsURL).subscribe( res => {

      this.products = res.products;
      console.log(this.products);
      this.changeDetect.detectChanges();
    })
  }

  addProduct(){
    let data = {
      title: this.title,
      price: this.price,
      description: this.description,
      stock: this.stock,
      discountPercentage: this.discountPercentage,
      image: [this.image],
      thumbnail: this.thumbnail
    }
    this.http.post<DummyproductShape>(this.productsURL + "/add", data).subscribe( res => {
      console.log(res);
      this.products.unshift(res);
      this.changeDetect.detectChanges();
    })
  }

  deleteProduct(event: Event, id:number){
    event.stopPropagation();
    event.preventDefault();
    this.http.delete<DummyproductShape>(this.productsURL + "/" + id).subscribe( res => {
      console.log(res.isDeleted, res.deletedOn, res.id);

      if(res.isDeleted){
          //we have to find the product in the products array with the ID that was deleted
          let index = this.products.findIndex(product => product.id === res.id);
          // alert(index)
          // Once found, remove that product from the products array
          this.products.splice(index, 1);
          this.changeDetect.detectChanges();
      }

    })
  }


  convertTitle(title:string){
    const urlFriendly = decodeURIComponent(title)
    .trim()
    .replace(/[^a-zA-Z0-9\s-]/g, "") // remove special characters
    .replace(/\s+/g, "-")            // replace spaces with dashes
    .replace(/-+/g, "-")             // remove duplicate dashes
    .replace(/^-|-$/g, "")           // remove starting/ending dashes
    .toLowerCase();

    return urlFriendly;
  }


}
