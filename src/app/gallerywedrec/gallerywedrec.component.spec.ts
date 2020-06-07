import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerywedrecComponent } from './gallerywedrec.component';

describe('GallerywedrecComponent', () => {
  let component: GallerywedrecComponent;
  let fixture: ComponentFixture<GallerywedrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerywedrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerywedrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
