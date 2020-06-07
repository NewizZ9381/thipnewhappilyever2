import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryprewedComponent } from './galleryprewed.component';

describe('GalleryprewedComponent', () => {
  let component: GalleryprewedComponent;
  let fixture: ComponentFixture<GalleryprewedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryprewedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryprewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
