import {Component, OnInit} from '@angular/core';
import {ImageResponseDto} from '../../rest/image.response.dto';
import {ImagesService} from '../../rest/images.service';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  images: ImageResponseDto[];

  @LocalStorage('bookmarks')
  bookmarksArray;

  constructor(private imagesService: ImagesService, private storageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.storageService.observe('bookmarks').subscribe(bookmarks => this.images = bookmarks);
    this.images = this.bookmarksArray;
  }
}
