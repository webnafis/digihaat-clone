import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public bannerImages = [
    { image: 'https://api.digihaat.com.bd/api/upload/images/dahua-products-for-digihaat-banner-01-8bb4.png', alt: 'First banner', link: '/promo1' },
    { image: 'https://api.digihaat.com.bd/api/upload/images/imou-products-for-digihaat-banner-04-fb0d.png', alt: 'Second banner', link: '/promo2' },
    { image: 'https://api.digihaat.com.bd/api/upload/images/tiandy-products-for-digihaat-banner-05-2a97.png', alt: 'Third banner' }
  ];
  public products = [
    { image: 'https://api.digihaat.com.bd/api/upload/images/krs-85-1-500x500-1a7c.jpg', title: 'A4TECH KRS-85 Laser Engraving USB Keyboard With Bangla', discount: 5, price: 300, stock: 10, },
    { image: 'https://api.digihaat.com.bd/api/upload/images/tenda-105-500x500-dca5.jpg', title: 'A4TECH KRS-85 Laser Engraving USB Keyboard With Bangla', discount: 5, price: 300, stock: 10, },
    { image: 'https://api.digihaat.com.bd/api/upload/images/s300-highlihgt-product-image-b66c.png', title: 'A4TECH KRS-85 Laser Engraving USB Keyboard With Bangla', discount: 5, price: 300, stock: 0, },
    { image: 'https://api.digihaat.com.bd/api/upload/images/tl-wr844n-500x500-276b.jpg', title: 'A4TECH KRS-85 Laser Engraving USB Keyboard With Bangla', discount: 5, price: 300, stock: 10, },
    { image: 'https://api.digihaat.com.bd/api/upload/images/imou-st2-128-s1-128gb-memory-card-digihaat-8b95.webp', title: 'A4TECH KRS-85 Laser Engraving USB Keyboard With Bangla', discount: 0, price: 300, stock: 10, },
    // { image: 'https://api.digihaat.com.bd/api/upload/images/whatsapp-image-2025-03-18-at-04-a75a.jpg', title: 'Product 2', discount: 5, price: 3000 },
    // ... more products
  ];
  public dhua: string = "https://api.digihaat.com.bd/api/upload/images/dahua-products-for-digihaat-banner-01-8bb4.png";
  public tiandy: string = "https://api.digihaat.com.bd/api/upload/images/tiandy-products-for-digihaat-banner-05-2a97.png";


}
