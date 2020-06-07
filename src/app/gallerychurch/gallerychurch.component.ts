import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-gallerychurch',
  templateUrl: './gallerychurch.component.html',
  styleUrls: ['./gallerychurch.component.css']
})
export class GallerychurchComponent implements OnInit {

  gallery:any = { };

  constructor(private config: ConfigService) { }

  ngOnInit(){
    this.gallery = this.getGallery();
  }

  getGallery(){
    return this.config.getConfig().gallery;
  }
  defaultImage = "https://media.giphy.com/media/26xBBei8OgoNzmMVi/giphy.gif";
  // defaultImage2 = "https://media3.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/1n6FOu976kb1yr5uW5/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/BbI07aAnzzzOw/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/26tPcVAWvlzRQtsLS/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/WiIuC6fAOoXD2/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/3o72EXMO3OZpcvFvzy/giphy.gif";
  // defaultImage2 = "https://media.giphy.com/media/XDSMr8dDUs04dvz3LV/giphy.gif";
  defaultImage2 = "https://media.giphy.com/media/o8kbrEd42tSKc/giphy.gif";


}