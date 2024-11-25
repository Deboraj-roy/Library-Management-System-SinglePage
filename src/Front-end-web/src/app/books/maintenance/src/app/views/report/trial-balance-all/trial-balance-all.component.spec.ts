import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialBalanceAllComponent } from './trial-balance-all.component';

describe('TrialBalanceAllComponent', () => {
  let component: TrialBalanceAllComponent;
  let fixture: ComponentFixture<TrialBalanceAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialBalanceAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrialBalanceAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
