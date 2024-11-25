import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesVoucherReturnDetailsListComponent } from './sales-voucher-return-details-list.component';

describe('SalesVoucherReturnDetailsListComponent', () => {
  let component: SalesVoucherReturnDetailsListComponent;
  let fixture: ComponentFixture<SalesVoucherReturnDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesVoucherReturnDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesVoucherReturnDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
