import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryallComponent } from './galleryall.component';

describe('GalleryallComponent', () => {
  let component: GalleryallComponent;
  let fixture: ComponentFixture<GalleryallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
