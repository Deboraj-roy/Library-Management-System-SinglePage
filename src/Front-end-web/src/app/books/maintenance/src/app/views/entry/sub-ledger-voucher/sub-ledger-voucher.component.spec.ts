import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLedgerVoucherComponent } from './sub-ledger-voucher.component';

describe('SubLedgerVoucherComponent', () => {
  let component: SubLedgerVoucherComponent;
  let fixture: ComponentFixture<SubLedgerVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubLedgerVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubLedgerVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
