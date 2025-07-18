import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionComponent } from './television.component';

describe('TelevisionComponent', () => {
  let component: TelevisionComponent;
  let fixture: ComponentFixture<TelevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelevisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
