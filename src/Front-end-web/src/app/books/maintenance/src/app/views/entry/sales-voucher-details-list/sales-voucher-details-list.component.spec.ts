import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesVoucherDetailsListComponent } from './sales-voucher-details-list.component';

describe('SalesVoucherDetailsListComponent', () => {
  let component: SalesVoucherDetailsListComponent;
  let fixture: ComponentFixture<SalesVoucherDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesVoucherDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesVoucherDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
