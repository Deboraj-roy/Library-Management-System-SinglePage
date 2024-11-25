import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBookComponent } from './cash-book.component';

describe('CashBookComponent', () => {
  let component: CashBookComponent;
  let fixture: ComponentFixture<CashBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
