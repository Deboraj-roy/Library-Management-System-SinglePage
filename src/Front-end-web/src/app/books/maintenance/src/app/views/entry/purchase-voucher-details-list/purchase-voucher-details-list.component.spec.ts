import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseVoucherDetailsListComponent } from './purchase-voucher-details-list.component';

describe('PurchaseVoucherDetailsListComponent', () => {
  let component: PurchaseVoucherDetailsListComponent;
  let fixture: ComponentFixture<PurchaseVoucherDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseVoucherDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseVoucherDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
