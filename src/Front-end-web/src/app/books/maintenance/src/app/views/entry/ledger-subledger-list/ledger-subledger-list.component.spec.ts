import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerSubledgerListComponent } from './ledger-subledger-list.component';

describe('LedgerSubledgerListComponent', () => {
  let component: LedgerSubledgerListComponent;
  let fixture: ComponentFixture<LedgerSubledgerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerSubledgerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgerSubledgerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
