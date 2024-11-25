import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccDashboardToSndComponent } from './acc-dashboard-to-snd.component';

describe('AccDashboardToSndComponent', () => {
  let component: AccDashboardToSndComponent;
  let fixture: ComponentFixture<AccDashboardToSndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccDashboardToSndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccDashboardToSndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
