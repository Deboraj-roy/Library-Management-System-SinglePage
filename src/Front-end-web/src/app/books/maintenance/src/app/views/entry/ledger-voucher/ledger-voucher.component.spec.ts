import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerVoucherComponent } from './ledger-voucher.component';

describe('LedgerVoucherComponent', () => {
  let component: LedgerVoucherComponent;
  let fixture: ComponentFixture<LedgerVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgerVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
