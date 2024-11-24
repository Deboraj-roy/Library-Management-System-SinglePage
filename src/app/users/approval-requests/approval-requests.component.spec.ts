import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRequestsComponent } from './approval-requests.component';

describe('ApprovalRequestsComponent', () => {
  let component: ApprovalRequestsComponent;
  let fixture: ComponentFixture<ApprovalRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovalRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
