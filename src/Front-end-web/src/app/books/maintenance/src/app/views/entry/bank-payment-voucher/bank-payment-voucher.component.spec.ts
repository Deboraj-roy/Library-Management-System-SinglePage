import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankPaymentVoucherComponent } from './bank-payment-voucher.component';

describe('BankPaymentVoucherComponent', () => {
  let component: BankPaymentVoucherComponent;
  let fixture: ComponentFixture<BankPaymentVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankPaymentVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankPaymentVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
