import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesVoucherComponent } from './sales-voucher.component';

describe('SalesVoucherComponent', () => {
  let component: SalesVoucherComponent;
  let fixture: ComponentFixture<SalesVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
