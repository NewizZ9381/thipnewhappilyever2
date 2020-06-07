import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { GalleryallComponent } from './galleryall/galleryall.component';
import { GallerychurchComponent } from './gallerychurch/gallerychurch.component';
import { GallerywedrecComponent } from './gallerywedrec/gallerywedrec.component';
import { GalleryprewedComponent } from './galleryprewed/galleryprewed.component';


const routes: Routes = [
  // { path: '' , redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home' , component: HeaderComponent },
  { path: 'About' , component: IntroComponent },
  { path: 'Gallery' , component: GalleryComponent },
  { path: '' , component: GalleryallComponent },
  { path: 'GalleryChurch' , component: GallerychurchComponent },
  { path: 'GalleryWedrec' , component: GallerywedrecComponent },
  { path: 'GalleryPrewed' , component: GalleryprewedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
