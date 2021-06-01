import {Component, Input} from '@angular/core';

import {ImageDto} from '../../rest/image.dto';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent {
  @Input() images: ImageDto[];
  @Input() bookmarkIt: boolean;
}
