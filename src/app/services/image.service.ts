import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(public _http: HttpClient) { }

  public get_images_unsplash(query: String, pagina: Number) {
    var url =
      global.url_stats + 'images/search?query=' + query + '&page=' + pagina + '&size=6';
    return this._http.get(url);
  }

  public save_image(url: String): Observable<any> {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/json"
    );
    var params = { "url": url }

    return this._http.post(global.url_stats + 'insert', params, { headers });
  }

  public get_images_favorite(pagina: Number) {
    var url =
      global.url_stats + 'favpage?page=' + pagina + '&size=6';
    return this._http.get(url);
  }
}
