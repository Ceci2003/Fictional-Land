import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOpenComponent } from './book-open.component';

describe('BookOpenComponent', () => {
  let component: BookOpenComponent;
  let fixture: ComponentFixture<BookOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
