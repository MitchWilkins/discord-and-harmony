import { Component, OnInit } from '@angular/core';
import {Featurette} from "./featurette.model";
import {GetVideosService} from "../get-videos.service";
import { Response } from '@angular/http';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css'],
  providers: [GetVideosService]
})
export class LatestComponent implements OnInit{
  featurette: Featurette[] = [];
  constructor(private getVidService: GetVideosService) {}

  ngOnInit() {
    this.getVidService.getVids()
      .subscribe(
        (res: Response) =>
        {
          for (let i = 3; i > 0; i-- ) {
          const data = res.json().items[i];
            this.featurette.push({
              title: data.snippet.title,
              description: data.snippet.description,
              videoUrl: data.snippet.resourceId.videoId
            });
          }
        },
        (error) => console.log(error)
      )
  }
}



