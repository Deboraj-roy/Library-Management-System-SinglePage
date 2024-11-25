import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEntryComponent } from './note-entry.component';

describe('NoteEntryComponent', () => {
  let component: NoteEntryComponent;
  let fixture: ComponentFixture<NoteEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
