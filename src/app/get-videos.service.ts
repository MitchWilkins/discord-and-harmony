import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

const apiKey = '&key=AIzaSyAMUng-OjGEXuYN1Xrq3r_aCOiKg1DdJvo';

@Injectable()
export class GetVideosService {


  constructor(private http: Http) { }


  getVids() {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%20&playlistId=PLTorOsxeEthBo6fCqqmHnChxOplANXUbK&key=AIzaSyAMUng-OjGEXuYN1Xrq3r_aCOiKg1DdJvo&order=date')
  }
}
