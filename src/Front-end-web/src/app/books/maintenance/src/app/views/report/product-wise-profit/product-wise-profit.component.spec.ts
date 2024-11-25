import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWiseProfitComponent } from './product-wise-profit.component';

describe('ProductWiseProfitComponent', () => {
  let component: ProductWiseProfitComponent;
  let fixture: ComponentFixture<ProductWiseProfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWiseProfitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductWiseProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
