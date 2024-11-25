import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptPaymentStatementComponent } from './receipt-payment-statement.component';

describe('ReceiptPaymentStatementComponent', () => {
  let component: ReceiptPaymentStatementComponent;
  let fixture: ComponentFixture<ReceiptPaymentStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptPaymentStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptPaymentStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
