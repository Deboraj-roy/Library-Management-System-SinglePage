import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseMasterComponent } from './purchase-master.component';

describe('PurchaseMasterComponent', () => {
  let component: PurchaseMasterComponent;
  let fixture: ComponentFixture<PurchaseMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
