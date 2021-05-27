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

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit(): void {
    this.imagesService.searchImages('moon').subscribe(images => {
      this.images = images;
      console.log(this.images);
    });
  }

}
