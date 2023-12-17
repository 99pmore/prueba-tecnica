import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersBtnComponent } from './filters-btn.component';

describe('FiltersBtnComponent', () => {
  let component: FiltersBtnComponent;
  let fixture: ComponentFixture<FiltersBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FiltersBtnComponent]
    });
    fixture = TestBed.createComponent(FiltersBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
