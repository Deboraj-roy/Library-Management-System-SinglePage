import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLedgerDetailsComponent } from './sub-ledger-details.component';

describe('SubLedgerDetailsComponent', () => {
  let component: SubLedgerDetailsComponent;
  let fixture: ComponentFixture<SubLedgerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubLedgerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubLedgerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
