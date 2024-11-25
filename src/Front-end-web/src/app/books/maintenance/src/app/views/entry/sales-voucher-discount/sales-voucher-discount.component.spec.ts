import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesVoucherDiscountComponent } from './sales-voucher-discount.component';

describe('SalesVoucherDiscountComponent', () => {
  let component: SalesVoucherDiscountComponent;
  let fixture: ComponentFixture<SalesVoucherDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesVoucherDiscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesVoucherDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
