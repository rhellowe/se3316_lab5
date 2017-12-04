import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullResComponent } from './full-res.component';

describe('FullResComponent', () => {
  let component: FullResComponent;
  let fixture: ComponentFixture<FullResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
