import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  part = 'snippet';
  apiKey = 'AIzaSyCM_269Fsu09_YO2Dq9XlOKwsn1BDuxlE4';
  playList = 'UUuaPTYj15JSkETGnEseaFFg';
  nextPageToken = '';

  constructor(private http: HttpClient) {
  }

  getVideos() {
    const url = `${ this.youtubeUrl }/playlistItems`;
    const params = new HttpParams()
          .set('part', this.part)
          .set('key', this.apiKey)
          .set('playlistId', this.playList)
          .set('maxResults', '10')
          .set('pageToken', this.nextPageToken)

    return this.http.get<YoutubeResponse>( url, { params } )
               .pipe(
                 map( response => {
                     this.nextPageToken = response.nextPageToken;
                     return response.items;
                 } ),
                 map( items => items.map( video => video.snippet) )
               );
  }
}
