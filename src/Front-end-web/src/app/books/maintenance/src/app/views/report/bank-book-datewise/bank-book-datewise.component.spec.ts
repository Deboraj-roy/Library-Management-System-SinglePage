import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankBookDatewiseComponent } from './bank-book-datewise.component';

describe('BankBookDatewiseComponent', () => {
  let component: BankBookDatewiseComponent;
  let fixture: ComponentFixture<BankBookDatewiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankBookDatewiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankBookDatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
