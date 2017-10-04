import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class TwitchService {

  constructor(private http: Http) { }
  streamStatus(streamId: string){
   return this.http.get('https://api.twitch.tv/kraken/streams/' + streamId +'?client_id=ef0medq9deyb9j7cqy4z7ckhhuja07')
  }
}
