import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalVoucherListComponent } from './journal-voucher-list.component';

describe('JournalVoucherListComponent', () => {
  let component: JournalVoucherListComponent;
  let fixture: ComponentFixture<JournalVoucherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalVoucherListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalVoucherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
