import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsListComponent } from './item-details-list.component';

describe('ItemDetailsListComponent', () => {
  let component: ItemDetailsListComponent;
  let fixture: ComponentFixture<ItemDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
