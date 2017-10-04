export class TeamModel {
  public streamer: string;
  public bio: string;
  public status: string;
  public pic: string;
  public twitchUrl: string;

  constructor(streamer:string , bio:string, status: string, pic: string, twitchUrl: string){
    this.streamer = streamer;
    this.bio = bio;
    this.status = status;
    this.pic = pic;
    this.twitchUrl = twitchUrl;
  }
}
