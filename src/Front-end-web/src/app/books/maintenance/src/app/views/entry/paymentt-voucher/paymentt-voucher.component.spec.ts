import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenttVoucherComponent } from './paymentt-voucher.component';

describe('PaymenttVoucherComponent', () => {
  let component: PaymenttVoucherComponent;
  let fixture: ComponentFixture<PaymenttVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymenttVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymenttVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
