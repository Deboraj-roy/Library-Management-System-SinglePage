import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraVoucherListComponent } from './contra-voucher-list.component';

describe('ContraVoucherListComponent', () => {
  let component: ContraVoucherListComponent;
  let fixture: ComponentFixture<ContraVoucherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContraVoucherListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContraVoucherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
