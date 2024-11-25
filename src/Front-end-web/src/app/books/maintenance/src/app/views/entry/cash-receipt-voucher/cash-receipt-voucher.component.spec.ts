import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashReceiptVoucherComponent } from './cash-receipt-voucher.component';

describe('CashReceiptVoucherComponent', () => {
  let component: CashReceiptVoucherComponent;
  let fixture: ComponentFixture<CashReceiptVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashReceiptVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashReceiptVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
