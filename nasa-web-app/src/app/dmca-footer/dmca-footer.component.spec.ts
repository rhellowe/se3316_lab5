import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmcaFooterComponent } from './dmca-footer.component';

describe('DmcaFooterComponent', () => {
  let component: DmcaFooterComponent;
  let fixture: ComponentFixture<DmcaFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmcaFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmcaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
