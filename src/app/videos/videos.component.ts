import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  vdos:any = { };

  constructor(private config: ConfigService) { }

  ngOnInit(){
    this.vdos = this.getVdos();
  }

  getVdos(){
    return this.config.getConfig().vdos;
  }

  videoUrl(love){
    document.getElementById("slider").setAttribute( 'src',  love);
    document.getElementById("slider").setAttribute( 'autoplay',  "true");
  }
}
