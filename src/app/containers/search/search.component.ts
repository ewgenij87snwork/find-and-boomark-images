import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImagesService} from '../../rest/images.service';
import {ImageDto} from '../../rest/image.dto';
import {fromEvent} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {NgModel} from '@angular/forms';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [NgModel]
})
export class SearchComponent implements OnInit {
  pageSizeOptions: number[] = [15, 50, 100];
  images: ImageDto[];
  searchTerm: string;

  @ViewChild('searchInput', {static: true}) searchInput!: ElementRef;
  pageEvent: PageEvent;

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit(): void {
    this.imagesService.searchImages('sun', 2)
      .subscribe(res => this.images = res.photo);

    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1000))
      .subscribe((searchTerm: string) => {
        this.searchTerm = searchTerm;
        this.imagesService.searchImages(searchTerm)
          .subscribe(res => this.images = res.photo);
      });
  }
}
