import {Component, Input, OnInit} from '@angular/core';
import {ImageResponseDto} from '../../rest/image.response.dto';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  @Input() image: ImageResponseDto;

  constructor() {
  }

  ngOnInit(): void {
  }

}
