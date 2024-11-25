import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowsComponent } from './cash-flows.component';

describe('CashFlowsComponent', () => {
  let component: CashFlowsComponent;
  let fixture: ComponentFixture<CashFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashFlowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
