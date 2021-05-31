import {Component, Input, OnInit} from '@angular/core';
import {ImageDto} from '../../rest/image.dto';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {
  @Input() images: ImageDto[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
