import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailsEntryComponent } from './note-details-entry.component';

describe('NoteDetailsEntryComponent', () => {
  let component: NoteDetailsEntryComponent;
  let fixture: ComponentFixture<NoteDetailsEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteDetailsEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteDetailsEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
