import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesVoucherMasterComponent } from './sales-voucher-master.component';

describe('SalesVoucherMasterComponent', () => {
  let component: SalesVoucherMasterComponent;
  let fixture: ComponentFixture<SalesVoucherMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesVoucherMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesVoucherMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
