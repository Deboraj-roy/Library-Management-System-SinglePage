import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteProfitLossComponent } from './note-profit-loss.component';

describe('NoteProfitLossComponent', () => {
  let component: NoteProfitLossComponent;
  let fixture: ComponentFixture<NoteProfitLossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteProfitLossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteProfitLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
