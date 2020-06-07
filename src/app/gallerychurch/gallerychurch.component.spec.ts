import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerychurchComponent } from './gallerychurch.component';

describe('GallerychurchComponent', () => {
  let component: GallerychurchComponent;
  let fixture: ComponentFixture<GallerychurchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerychurchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerychurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
