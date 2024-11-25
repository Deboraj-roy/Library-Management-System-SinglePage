import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseVoucherComponent } from './purchase-voucher.component';

describe('PurchaseVoucherComponent', () => {
  let component: PurchaseVoucherComponent;
  let fixture: ComponentFixture<PurchaseVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
