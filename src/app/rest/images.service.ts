import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {ImageDto} from './image.dto';
import {LocalStorageService} from 'ngx-webstorage';
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
    const storedBookmarks = this.storageService.retrieve(this.bookmarks);

    if (storedBookmarks !== null && !storedBookmarks.find(existImage => existImage === image)) {
      this.bookmarksArray.push(image);
      const buffer = this.bookmarksArray;
      this.storageService.store(this.bookmarks, buffer);
    }
  }

  public removeBookmark(image: ImageDto): void {
    this.storageService.clear(this.bookmarks);
    this.storageService.store(this.bookmarks, this.bookmarksArray.filter(bookmark => bookmark !== image));
    this.retrieveBookmarks();
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
