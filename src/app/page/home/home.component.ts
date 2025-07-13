import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  bannerImages = [
    { image: 'https://api.digihaat.com.bd/api/upload/images/dahua-products-for-digihaat-banner-01-8bb4.png', alt: 'First banner', link: '/promo1' },
    { image: 'https://api.digihaat.com.bd/api/upload/images/imou-products-for-digihaat-banner-04-fb0d.png', alt: 'Second banner', link: '/promo2' },
    { image: 'https://api.digihaat.com.bd/api/upload/images/tiandy-products-for-digihaat-banner-05-2a97.png', alt: 'Third banner' }
  ];
}
