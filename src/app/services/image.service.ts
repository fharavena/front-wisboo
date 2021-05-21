import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(public _http: HttpClient) {}

  public get_images_unsplash(query: String) {
    var url =
      global.url_stats + 'images/search?query=' + query + '&page=1&size=8';

      console.log(url);
      
    return this._http.get(url);
  }
}
