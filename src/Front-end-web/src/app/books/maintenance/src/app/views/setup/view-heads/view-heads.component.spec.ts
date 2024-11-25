import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeadsComponent } from './view-heads.component';

describe('ViewHeadsComponent', () => {
  let component: ViewHeadsComponent;
  let fixture: ComponentFixture<ViewHeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHeadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
