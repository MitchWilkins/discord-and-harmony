import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class FirebaseService {

  constructor(private http: Http) { }
  storeVids(videos: any[]){
    this.http.post('https://discord-and-harmony.firebaseio.com/', videos);
  }

}
