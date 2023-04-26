import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBoardOfDirectorsComponent } from './home-board-of-directors.component';

describe('HomeBoardOfDirectorsComponent', () => {
  let component: HomeBoardOfDirectorsComponent;
  let fixture: ComponentFixture<HomeBoardOfDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBoardOfDirectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBoardOfDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
