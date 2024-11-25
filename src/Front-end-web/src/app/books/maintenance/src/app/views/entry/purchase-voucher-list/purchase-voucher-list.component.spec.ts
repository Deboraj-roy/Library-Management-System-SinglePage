import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseVoucherListComponent } from './purchase-voucher-list.component';

describe('PurchaseVoucherListComponent', () => {
  let component: PurchaseVoucherListComponent;
  let fixture: ComponentFixture<PurchaseVoucherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseVoucherListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseVoucherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
