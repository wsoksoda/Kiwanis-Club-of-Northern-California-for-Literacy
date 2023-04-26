import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImageSlideshowComponent } from './home-image-slideshow.component';

describe('HomeImageSlideshowComponent', () => {
  let component: HomeImageSlideshowComponent;
  let fixture: ComponentFixture<HomeImageSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeImageSlideshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeImageSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
