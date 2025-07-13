import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCatComponent } from './featured-cat.component';

describe('FeaturedCatComponent', () => {
  let component: FeaturedCatComponent;
  let fixture: ComponentFixture<FeaturedCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
