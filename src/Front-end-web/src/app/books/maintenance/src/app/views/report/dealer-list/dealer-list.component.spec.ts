import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerListComponent } from './dealer-list.component';

describe('DealerListComponent', () => {
  let component: DealerListComponent;
  let fixture: ComponentFixture<DealerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
