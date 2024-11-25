import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadVoucherComponent } from './download-voucher.component';

describe('DownloadVoucherComponent', () => {
  let component: DownloadVoucherComponent;
  let fixture: ComponentFixture<DownloadVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
