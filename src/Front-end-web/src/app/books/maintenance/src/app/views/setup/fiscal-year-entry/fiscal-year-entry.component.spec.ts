import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalYearEntryComponent } from './fiscal-year-entry.component';

describe('FiscalYearEntryComponent', () => {
  let component: FiscalYearEntryComponent;
  let fixture: ComponentFixture<FiscalYearEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiscalYearEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiscalYearEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
