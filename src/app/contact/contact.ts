import { Component } from '@angular/core';
import { Social } from '../social/social';

@Component({
  selector: 'app-contact',
  imports: [Social],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  title:string = "Hello world!";
  test = (10 > 2)? 'yes' : 'no';
  position = "Chairman";

  imgsrc = "https://multimedia.bbycastatic.ca/multimedia/products/250x250/192/19217/19217790.jpg";
  imgalt = "Electric Scooter";

  btnClick(param:string){
    this.imgsrc = "https://multimedia.bbycastatic.ca/multimedia/products/250x250/189/18910/18910935.jpg";
    this.imgalt = "Starlink Dish" + param;
  }


}
