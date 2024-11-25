import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoaComponent } from './coa.component';

describe('CoaComponent', () => {
  let component: CoaComponent;
  let fixture: ComponentFixture<CoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
