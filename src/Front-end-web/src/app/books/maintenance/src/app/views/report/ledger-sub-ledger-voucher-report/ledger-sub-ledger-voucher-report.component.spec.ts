import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerSubLedgerVoucherReportComponent } from './ledger-sub-ledger-voucher-report.component';

describe('LedgerSubLedgerVoucherReportComponent', () => {
  let component: LedgerSubLedgerVoucherReportComponent;
  let fixture: ComponentFixture<LedgerSubLedgerVoucherReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerSubLedgerVoucherReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgerSubLedgerVoucherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
