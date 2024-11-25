import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerRequestsComponent } from './ledger-requests.component';

describe('LedgerRequestsComponent', () => {
  let component: LedgerRequestsComponent;
  let fixture: ComponentFixture<LedgerRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
