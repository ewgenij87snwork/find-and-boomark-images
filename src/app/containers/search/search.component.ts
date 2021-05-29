import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImagesService} from '../../rest/images.service';
import {ImageResponseDto} from '../../rest/image.response.dto';
import {fromEvent} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [NgModel]
})
export class SearchComponent implements OnInit {

  images: ImageResponseDto[];

  @ViewChild('searchInput', {static: true}) searchInput!: ElementRef;

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService.searchImages('sun', 2)
      .subscribe(images => this.images = images);

    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1500))
      .subscribe((searchTerm: string) => {
        this.imagesService.searchImages(searchTerm)
          .subscribe(images => this.images = images);
      });
  }
}
