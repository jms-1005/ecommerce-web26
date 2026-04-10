import { Component, signal } from '@angular/core';
import { Social } from './social/social'
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLinkWithHref, Social],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ecommerce');
}
