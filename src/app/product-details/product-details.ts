import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyproductShape } from '../interfaces/dummyproduct';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit{

  productURL = "https://dummyjson.com/products";
  product:DummyproductShape = {} as DummyproductShape;

  constructor(private route: ActivatedRoute, private http: HttpClient, private changeDetect: ChangeDetectorRef){}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("productID");
    console.log(id);
    this.http.get<DummyproductShape>(this.productURL + "/" + id).subscribe( res => {
      console.log(res);
      this.product = res;
      this.changeDetect.detectChanges();
    })
  }
}
