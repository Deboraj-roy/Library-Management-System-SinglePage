import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPaymentVoucherComponent } from './cash-payment-voucher.component';

describe('CashPaymentVoucherComponent', () => {
  let component: CashPaymentVoucherComponent;
  let fixture: ComponentFixture<CashPaymentVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashPaymentVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashPaymentVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
