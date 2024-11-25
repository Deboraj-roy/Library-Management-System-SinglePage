import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCashBankComponent } from './daily-cash-bank.component';

describe('DailyCashBankComponent', () => {
  let component: DailyCashBankComponent;
  let fixture: ComponentFixture<DailyCashBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyCashBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyCashBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
