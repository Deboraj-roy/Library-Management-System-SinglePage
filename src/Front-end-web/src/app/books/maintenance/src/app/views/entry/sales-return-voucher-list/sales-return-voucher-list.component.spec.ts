import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReturnVoucherListComponent } from './sales-return-voucher-list.component';

describe('SalesReturnVoucherListComponent', () => {
  let component: SalesReturnVoucherListComponent;
  let fixture: ComponentFixture<SalesReturnVoucherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesReturnVoucherListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesReturnVoucherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
