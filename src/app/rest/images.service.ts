import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ImageResponseDto} from './image.response.dto';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  public searchImages(searchTerm: string): Observable<ImageResponseDto[]> {
    return this.http
      .get<ImageResponseDto>('https://www.flickr.com/services/rest/', {
        params: {
          tags: searchTerm,
          method: 'flickr.photos.search',
          format: 'json',
          nojsoncallback: '1',
          media: 'photos',
          per_page: '15',
          extras: 'tags, url_q',
          api_key: this.apiKey,
        },
      })
      .pipe(map(response => response.photos.photo));
  }
}
