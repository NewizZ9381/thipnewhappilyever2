import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
// import { LazyLoadImagesModule } from 'ngx-lazy-load-images2';
import { LazyLoadImageModule} from 'ng-lazyload-image';
// import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ConfigService} from './config.service';
import { AboutComponent } from './about/about.component';
import { VideosComponent } from './videos/videos.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryallComponent } from './galleryall/galleryall.component';
import { GallerychurchComponent } from './gallerychurch/gallerychurch.component';
import { GallerywedrecComponent } from './gallerywedrec/gallerywedrec.component';
import { GalleryprewedComponent } from './galleryprewed/galleryprewed.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    VideosComponent,
    ContactComponent,
    GalleryallComponent,
    GallerychurchComponent,
    GallerywedrecComponent,
    GalleryprewedComponent,
    // LazyLoadImageModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule,
    NgbCollapseModule,
    LazyLoadImageModule,
    // LazyLoadImagesModule,
    // LazyLoadImageModule.forRoot({
    //   preset: scrollPreset // <-- tell LazyLoadImage that you want to use scrollPreset
    // })
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
