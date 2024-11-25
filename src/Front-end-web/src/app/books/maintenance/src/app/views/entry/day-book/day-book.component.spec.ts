import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayBookComponent } from './day-book.component';

describe('DayBookComponent', () => {
  let component: DayBookComponent;
  let fixture: ComponentFixture<DayBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
