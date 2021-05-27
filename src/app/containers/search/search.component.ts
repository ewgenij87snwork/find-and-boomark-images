import {Component, OnInit} from '@angular/core';
import {ImagesService} from '../../rest/images.service';
import {ImageResponseDto} from '../../rest/image.response.dto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  images: ImageResponseDto[];
  columns: number;

  constructor(private imagesService: ImagesService) {}

  private breakPoints(): void {
    switch (true) {
      case (window.innerWidth <= 820):
        this.columns = 1;
        break;
      case (window.innerWidth > 820 && window.innerWidth <= 1200):
        this.columns = 2;
        break;
      case (window.innerWidth > 1200 && window.innerWidth <= 1700):
        this.columns = 3;
        break;
      default:
        this.columns = 4;
    }
  }

  ngOnInit(): void {
    this.imagesService.searchImages('moon').subscribe(images => {
      this.images = images;
      console.log(this.images);
    });
    this.breakPoints();
  }

  public onResize(): void {
    this.breakPoints();
  }
}
