import {Component, OnInit} from '@angular/core';
import {LocalStorage} from 'ngx-webstorage';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  @LocalStorage()
  bookmarks;

  constructor() {
  }

  ngOnInit(): void {
  }

}
