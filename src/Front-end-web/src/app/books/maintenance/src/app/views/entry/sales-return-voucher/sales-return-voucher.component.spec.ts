import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReturnVoucherComponent } from './sales-return-voucher.component';

describe('SalesReturnVoucherComponent', () => {
  let component: SalesReturnVoucherComponent;
  let fixture: ComponentFixture<SalesReturnVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesReturnVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesReturnVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
