import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksStoreComponent } from './books-store.component';

describe('BooksStoreComponent', () => {
  let component: BooksStoreComponent;
  let fixture: ComponentFixture<BooksStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
