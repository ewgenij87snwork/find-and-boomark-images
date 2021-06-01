import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';

import {fromEvent} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

import {PageEvent} from '@angular/material/paginator';

import {ImagesService} from '../../rest/images.service';
import {ImagesResponseDto} from '../../rest/images.response.dto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [NgModel]
})
export class SearchComponent implements OnInit {
  public length: number;
  public pageSize: number;
  public pageIndex: number;
  public pageSizeOptions: number[] = [20, 50, 100];
  public imagesData: ImagesResponseDto;
  public pageEvent: PageEvent;

  private searchTerm = '';

  @ViewChild('searchInput', {static: true}) searchInput!: ElementRef;

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit(): void {
    this.initImages();
    this.debounceSearch();
  }

  public initImages(event?: PageEvent): PageEvent {
    if (this.searchTerm.length > 1) {
      this.imagesService.searchImages(this.searchTerm, event?.pageIndex, event?.pageSize)
        .subscribe(res => {
          this.length = res.total;
          this.pageSize = res.perpage;
          this.pageIndex = res.page;
          this.imagesData = res;
        });
    }
    return event;
  }

  private debounceSearch(): void {
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
