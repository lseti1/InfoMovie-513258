import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedList } from './searched-list';

describe('SearchedList', () => {
  let component: SearchedList;
  let fixture: ComponentFixture<SearchedList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchedList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
