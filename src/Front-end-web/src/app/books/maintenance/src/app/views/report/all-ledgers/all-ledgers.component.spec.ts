import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLedgersComponent } from './all-ledgers.component';

describe('AllLedgersComponent', () => {
  let component: AllLedgersComponent;
  let fixture: ComponentFixture<AllLedgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLedgersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLedgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
