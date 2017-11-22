import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedPageComponent } from './not-logged-page.component';

describe('NotLoggedPageComponent', () => {
  let component: NotLoggedPageComponent;
  let fixture: ComponentFixture<NotLoggedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotLoggedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotLoggedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
