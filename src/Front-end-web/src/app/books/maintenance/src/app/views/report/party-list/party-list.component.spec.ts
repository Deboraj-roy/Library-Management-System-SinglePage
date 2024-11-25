import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyListComponent } from './party-list.component';

describe('PartyListComponent', () => {
  let component: PartyListComponent;
  let fixture: ComponentFixture<PartyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
