import {Component, Input, OnInit} from '@angular/core';
import {ImageResponseDto} from '../../rest/image.response.dto';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {
  @Input() images: ImageResponseDto[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
