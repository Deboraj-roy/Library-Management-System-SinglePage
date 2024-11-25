import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReturnVoucherDetailsListComponent } from './purchase-return-voucher-details-list.component';

describe('PurchaseReturnVoucherDetailsListComponent', () => {
  let component: PurchaseReturnVoucherDetailsListComponent;
  let fixture: ComponentFixture<PurchaseReturnVoucherDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseReturnVoucherDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseReturnVoucherDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
