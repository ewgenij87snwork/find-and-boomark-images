import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {LocalStorageService} from 'ngx-webstorage';

import {ImageDto} from './image.dto';
import {ImagesResponseDto} from './images.response.dto';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private apiKey = environment.apiKey;
  private bookmarksArray: ImageDto[] = [];
  public bookmarks = 'bookmarks';

  constructor(
    private http: HttpClient,
    private storageService?: LocalStorageService) {
  }

  public saveBookmark(image: ImageDto): void {
    this.retrieveBookmarks();
    if (this.bookmarksArray !== null && !this.bookmarksArray.find(existImage => existImage === image)) {
      this.bookmarksArray.push(image);
      this.storageService.store(this.bookmarks, this.bookmarksArray);
    }
  }

  public removeBookmark(image: ImageDto): void {
    this.retrieveBookmarks();
    this.storageService.store(this.bookmarks, this.bookmarksArray.filter(bookmark => bookmark !== image));
  }

  retrieveBookmarks(): ImageDto[] {
    return this.bookmarksArray = this.storageService.retrieve(this.bookmarks);
  }

  public searchImages(searchTerm: string, page = 1, perpage = 20): Observable<ImagesResponseDto> {
    return this.http
      .get<ImagesResponseDto>('https://www.flickr.com/services/rest/', {
        params: {
          tags: searchTerm,
          method: 'flickr.photos.search',
          format: 'json',
          nojsoncallback: '1',
          media: 'photos',
          per_page: perpage.toString(),
          page: page.toString(),
          extras: 'tags, url_w',
          api_key: this.apiKey,
        },
      })
      .pipe(map(response => response.photos));
  }
}
