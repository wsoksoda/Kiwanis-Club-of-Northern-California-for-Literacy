import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventInfoComponent } from './admin-event-info.component';

describe('AdminEventInfoComponent', () => {
  let component: AdminEventInfoComponent;
  let fixture: ComponentFixture<AdminEventInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEventInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEventInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
