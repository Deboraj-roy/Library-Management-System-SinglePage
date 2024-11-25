import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentVoucherListComponent } from './payment-voucher-list.component';

describe('PaymentVoucherListComponent', () => {
  let component: PaymentVoucherListComponent;
  let fixture: ComponentFixture<PaymentVoucherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentVoucherListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentVoucherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
