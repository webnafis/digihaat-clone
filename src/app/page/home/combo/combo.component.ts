import { Component } from '@angular/core';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrl: './combo.component.scss'
})
export class ComboComponent {
  public cards: any[] = [
    {
      imageName: "Unit Micro SD Card MEMORY CARD 64GB",
      link: "https://api.digihaat.com.bd/api/upload/images/whatsapp-image-2025-03-18-at-04-fbb9.jpg",
      items: 2,
      price: 3000,
      flatDiscount: 500
    },
    {
      imageName: "Unit Micro SD Card MEMORY CARD 64GB",
      link: "https://api.digihaat.com.bd/api/upload/images/whatsapp-image-2025-03-18-at-04-8b92.jpg",
      items: 2,
      price: 3000,
      flatDiscount: 500
    },
    {
      imageName: "Unit Micro SD Card MEMORY CARD 64GB",
      link: "https://api.digihaat.com.bd/api/upload/images/whatsapp-image-2025-03-18-at-04-a75a.jpg",
      items: 2,
      price: 3000,
      flatDiscount: 500
    },

  ];



}
