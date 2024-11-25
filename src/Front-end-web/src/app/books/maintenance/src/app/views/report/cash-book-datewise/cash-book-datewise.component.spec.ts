import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBookDatewiseComponent } from './cash-book-datewise.component';

describe('CashBookDatewiseComponent', () => {
  let component: CashBookDatewiseComponent;
  let fixture: ComponentFixture<CashBookDatewiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashBookDatewiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashBookDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
