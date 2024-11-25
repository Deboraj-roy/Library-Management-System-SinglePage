import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRedirectComponent } from './page-redirect.component';

describe('PageRedirectComponent', () => {
  let component: PageRedirectComponent;
  let fixture: ComponentFixture<PageRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRedirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
