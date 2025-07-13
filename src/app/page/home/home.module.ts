import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { BannerComponent } from './banner/banner.component';
import { ComboComponent } from './combo/combo.component';
import { ComputersComponent } from './computers/computers.component';
import { DailyDealsComponent } from './daily-deals/daily-deals.component';
import { FacilityComponent } from './facility/facility.component';
import { FeaturedCatComponent } from './featured-cat/featured-cat.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TelevisionComponent } from './television/television.component';
import { TrendingProductsComponent } from './trending-products/trending-products.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    BannerComponent,
    ComboComponent,
    ComputersComponent,
    DailyDealsComponent,
    FacilityComponent,
    FeaturedCatComponent,
    PopularProductsComponent,
    ProductListComponent,
    TelevisionComponent,
    TrendingProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
