import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Social } from './social/social';
import { Dummyproducts } from './dummyproducts/dummyproducts';
import { ProductDetails } from './product-details/product-details';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: Home},
  { path: 'contact', component: Contact},
  { path: 'social', component: Social},
  { path: 'dummyproducts', component: Dummyproducts},
  { path: 'dummyproducts/dp/:productID/:productTitle', component: ProductDetails}


];
