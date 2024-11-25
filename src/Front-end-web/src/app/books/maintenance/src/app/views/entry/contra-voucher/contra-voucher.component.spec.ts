import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraVoucherComponent } from './contra-voucher.component';

describe('ContraVoucherComponent', () => {
  let component: ContraVoucherComponent;
  let fixture: ComponentFixture<ContraVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContraVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContraVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
