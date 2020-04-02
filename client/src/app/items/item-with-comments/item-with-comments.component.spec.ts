import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWithCommentsComponent } from './item-with-comments.component';

describe('ItemWithCommentsComponent', () => {
  let component: ItemWithCommentsComponent;
  let fixture: ComponentFixture<ItemWithCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemWithCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWithCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
