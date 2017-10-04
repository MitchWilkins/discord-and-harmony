import { Component, OnInit } from '@angular/core';
import { TwitchService } from '../twitch.service';
import { Http, Response } from '@angular/http';
import { TeamModel } from './team.model';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [TwitchService]
})
export class TeamComponent implements OnInit{

  team: TeamModel[] =[];
  constructor(private twitch: TwitchService, private http: Http) { }

  //Create a team model and push results like you would latest component

  ngOnInit(){
    this.twitch.streamStatus('innercooled')
      .subscribe(
        (res: Response) => {
          const data = res.json();
          this.team.push({
            streamer: "Alex Belauste",
            bio: "Alex has been playing video games competitively for several years starting out with Halo 3. Since then he has developed his skills mainly through FPS. Occasionally he enjoys playing rhythm games like Rockband and Guitar Hero.",
            status: null === data.stream ?  'hide' : '',
            pic: "../../assets/images/profile%20alex.png",
            twitchUrl: "https://go.twitch.tv/innercooled"
          });
        });

    this.twitch.streamStatus('itsmitchell')
      .subscribe(
        (res: Response) => {
          const data = res.json();
          this.team.push({
            streamer: "Mitchell Cox",
            bio: "Mitchell has been producing and editing gaming videos for many years. He is the main streamer for Discord and Harmony on Twitch. His competitive career also started with Halo 3 and has continued with Overwatch.",
            status: null === data.stream ?  'hide' : '',
            pic: "../../assets/images/profile%20mitch.png",
            twitchUrl: "https://go.twitch.tv/itsmitchell"
        });
    });

  }




}
