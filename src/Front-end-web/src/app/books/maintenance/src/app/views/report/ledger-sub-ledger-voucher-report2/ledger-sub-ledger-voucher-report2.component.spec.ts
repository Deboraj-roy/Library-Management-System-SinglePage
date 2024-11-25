import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerSubLedgerVoucherReport2Component } from './ledger-sub-ledger-voucher-report2.component';

describe('LedgerSubLedgerVoucherReport2Component', () => {
  let component: LedgerSubLedgerVoucherReport2Component;
  let fixture: ComponentFixture<LedgerSubLedgerVoucherReport2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerSubLedgerVoucherReport2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgerSubLedgerVoucherReport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
