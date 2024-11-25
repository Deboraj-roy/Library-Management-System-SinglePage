import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReturnVoucherComponent } from './purchase-return-voucher.component';

describe('PurchaseReturnVoucherComponent', () => {
  let component: PurchaseReturnVoucherComponent;
  let fixture: ComponentFixture<PurchaseReturnVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseReturnVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseReturnVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
