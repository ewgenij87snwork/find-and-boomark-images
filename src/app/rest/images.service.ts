import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ImageResponseDto} from './image.response.dto';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private apiKey = environment.apiKey;
  private bookmarksArray: ImageResponseDto[] = [];

  constructor(
    private http: HttpClient,
    private storageService?: LocalStorageService) {
  }

  @LocalStorage()
  private bookmarks: 'bookmarks';

  public saveBookmark(image: ImageResponseDto): void {
    if (!this.bookmarksArray.find(existImage => existImage === image)) {
      this.bookmarksArray.push(image);
    }

    this.storageService.store('bookmarks', this.bookmarksArray);
  }

  public removeBookmark(image: ImageResponseDto): void {
    this.storageService.clear(this.bookmarks);
    this.storageService.store(this.bookmarks, this.bookmarksArray.filter(bookmark => bookmark !== image));
  }

  retrieveBookmarks(): void {
    this.bookmarksArray = this.storageService.retrieve(this.bookmarks);
  }

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
          extras: 'tags, url_w',
          api_key: this.apiKey,
        },
      })
      .pipe(map(response => response.photos.photo));
  }
}
