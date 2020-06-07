import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-galleryall',
  templateUrl: './galleryall.component.html',
  styleUrls: ['./galleryall.component.css']
})
export class GalleryallComponent implements OnInit {

  gallery:any = { };
  // defaultImage:any = { };
  // defaultImage2:any = { };

  constructor(private config: ConfigService) { }

  ngOnInit(){
    this.gallery = this.getGallery();
    // this.defaultImage = this.getDefaultImage();
    // this.defaultImage2 = this.getDefaultImage2();
  }

  getGallery(){
    return this.config.getConfig().gallery;
  }

  // getDefaultImage(){
  //   return this.config.getConfig().defaultImage;
  // }

  // getDefaultImage2(){
  //   return this.config.getConfig().defaultImage2;
  // }

  defaultImage = "https://media.giphy.com/media/26xBBei8OgoNzmMVi/giphy.gif";
  // defaultImage2 = "https://media3.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/1n6FOu976kb1yr5uW5/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/BbI07aAnzzzOw/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/26tPcVAWvlzRQtsLS/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/WiIuC6fAOoXD2/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/3o72EXMO3OZpcvFvzy/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/XDSMr8dDUs04dvz3LV/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/h8yL4jsAMl42KzHneP/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/j0uzUPHcGP6A9Q0qLK/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/ZdTV3sCK1o64nPWSen/giphy.gif";
  defaultImage2 = "https://media.giphy.com/media/o8kbrEd42tSKc/giphy.gif";

  image1 = "../assets/imgthumbnail/TW0160.jpg";
  image2 = "../assets/imgthumbnail/TW0163.jpg";
  image3 = "../assets/imgthumbnail/TW0180.jpg";
  image4 = "../assets/imgthumbnail/TW0219.jpg";
  image5 = "../assets/imgthumbnail/TW0308.jpg";
  image6 = "../assets/imgthumbnail/TW0352.jpg";
  image7 = "../assets/imgthumbnail/TW0395.jpg";
  image8 = "../assets/imgthumbnail/TW0547.jpg";
  image9 = "../assets/imgthumbnail/TW0572.jpg";
  image10 = "../assets/imgthumbnail/TW0596.jpg";
  image11 = "../assets/imgthumbnail/TW0599.jpg";
  image12 = "../assets/imgthumbnail/TW0603.jpg";
  image13 = "../assets/imgthumbnail/TW0618.jpg";
  image14 = "../assets/imgthumbnail/TW0801.jpg";
  image15 = "../assets/imgthumbnail/TW0813.jpg";
  image16 = "../assets/imgthumbnail/TW0826.jpg";
  image17 = "../assets/imgthumbnail/TW0844.jpg";
  image18 = "../assets/imgthumbnail/TW0861.jpg";

  lazyimg1 = "../assets/img/TW0160.jpg";
  lazyimg2 = "../assets/img/TW0163.jpg";
  lazyimg3 = "../assets/img/TW0180.jpg";
  lazyimg4 = "../assets/img/TW0219.jpg";
  lazyimg5 = "../assets/img/TW0308.jpg";
  lazyimg6 = "../assets/img/TW0352.jpg";
  lazyimg7 = "../assets/img/TW0395.jpg";
  lazyimg8 = "../assets/img/TW0547.jpg";
  lazyimg9 = "../assets/img/TW0572.jpg";
  lazyimg10 = "../assets/img/TW0596.jpg";
  lazyimg11 = "../assets/img/TW0599.jpg";
  lazyimg12 = "../assets/img/TW0603.jpg";
  lazyimg13 = "../assets/img/TW0618.jpg";
  lazyimg14 = "../assets/img/TW0801.jpg";
  lazyimg15 = "../assets/img/TW0813.jpg";
  lazyimg16 = "../assets/img/TW0826.jpg";
  lazyimg17 = "../assets/img/TW0844.jpg";
  lazyimg18 = "../assets/img/TW0861.jpg";

}
