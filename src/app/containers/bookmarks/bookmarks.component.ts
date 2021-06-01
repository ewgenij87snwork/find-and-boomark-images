import {Component, OnInit} from '@angular/core';

import {LocalStorage, LocalStorageService} from 'ngx-webstorage';

import {ImageDto} from '../../rest/image.dto';
import {ImagesService} from '../../rest/images.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html'
})
export class BookmarksComponent implements OnInit {
  public images: ImageDto[];

  @LocalStorage('bookmarks')
  bookmarksArray;

  constructor(
    private imagesService: ImagesService,
    private storageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.storageService.observe('bookmarks')
      .subscribe(bookmarks => this.images = bookmarks);

    this.images = this.bookmarksArray;
  }
}
