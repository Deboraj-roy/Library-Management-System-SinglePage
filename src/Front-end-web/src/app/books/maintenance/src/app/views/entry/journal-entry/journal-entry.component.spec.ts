import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEntryComponent } from './journal-entry.component';

describe('JournalEntryComponent', () => {
  let component: JournalEntryComponent;
  let fixture: ComponentFixture<JournalEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
