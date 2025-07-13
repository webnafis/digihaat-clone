import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() banners: { image: string, alt?: string, link?: string }[] = [];
  currentIndex = 0;
  private intervalId: any;
  private slideInterval = 2000; // 2 seconds
  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide(false);
    }, this.slideInterval);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(autostop: boolean): void {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
    if (autostop) {

      this.stopAutoSlide();
    }
  }

  prevSlide(autostop: boolean): void {
    this.currentIndex = (this.currentIndex - 1 + this.banners.length) % this.banners.length;
    if (autostop) {

      this.stopAutoSlide();
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.stopAutoSlide();
  }
}