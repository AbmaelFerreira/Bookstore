import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoryAppComponent } from './bookstory-app.component';

describe('BookstoryAppComponent', () => {
  let component: BookstoryAppComponent;
  let fixture: ComponentFixture<BookstoryAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstoryAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstoryAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
