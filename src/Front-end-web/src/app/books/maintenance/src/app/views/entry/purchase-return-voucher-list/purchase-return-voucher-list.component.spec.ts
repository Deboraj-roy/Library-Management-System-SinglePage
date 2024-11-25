import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReturnVoucherListComponent } from './purchase-return-voucher-list.component';

describe('PurchaseReturnVoucherListComponent', () => {
  let component: PurchaseReturnVoucherListComponent;
  let fixture: ComponentFixture<PurchaseReturnVoucherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseReturnVoucherListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseReturnVoucherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
