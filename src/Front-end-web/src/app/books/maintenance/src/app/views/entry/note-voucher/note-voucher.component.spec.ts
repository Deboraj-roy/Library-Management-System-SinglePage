import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteVoucherComponent } from './note-voucher.component';

describe('NoteVoucherComponent', () => {
  let component: NoteVoucherComponent;
  let fixture: ComponentFixture<NoteVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteVoucherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
