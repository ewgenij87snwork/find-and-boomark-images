import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImagesService} from '../../rest/images.service';
import {fromEvent} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {NgModel} from '@angular/forms';
import {PageEvent} from '@angular/material/paginator';
import {ImagesResponseDto} from '../../rest/images.response.dto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [NgModel]
})
export class SearchComponent implements OnInit {
  length: number;
  pageSize: number;
  pageIndex: number;
  pageSizeOptions: number[] = [20, 50, 100];
  imagesData: ImagesResponseDto;
  searchTerm = '';

  @ViewChild('searchInput', {static: true}) searchInput!: ElementRef;
  pageEvent: PageEvent;

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit(): void {
    this.initImages();
    this.debounceSearch();
  }

  initImages(event?: PageEvent): PageEvent {
    if (this.searchTerm.length > 1) {
      this.imagesService.searchImages(this.searchTerm, event?.pageIndex, event?.pageSize)
        .subscribe(res => {
          console.log(res);
          this.length = res.total;
          this.pageSize = res.perpage;
          this.pageIndex = res.page;
          this.imagesData = res;
        });
    }
    return event;
  }

  debounceSearch(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1000))
      .subscribe((searchTerm: string) => {
        this.searchTerm = searchTerm;
        this.initImages();
      });
  }
}
