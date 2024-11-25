import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSheetComponent } from './balance-sheet.component';

describe('BalanceSheetComponent', () => {
  let component: BalanceSheetComponent;
  let fixture: ComponentFixture<BalanceSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
