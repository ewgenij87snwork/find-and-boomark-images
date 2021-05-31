import {Component, Input, OnInit} from '@angular/core';
import {ImageDto} from '../../rest/image.dto';
import {ImagesService} from '../../rest/images.service';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input() image: ImageDto;
  @Input() bookmarkIt: boolean;
  public tags: string[];

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit(): void {
    this.tags = this.image.tags
      .split(' ')
      .filter(tag => tag.length < 7)
      .splice(0, 4);
  }


  public onAddBookmark(): void {
    this.imagesService.saveBookmark(this.image);
  }

  public onRemoveBookmark(): void {
    this.imagesService.removeBookmark(this.image);
  }
}
