import {Component, OnInit} from '@angular/core';
import {ImagesService} from '../../rest/images.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit(): void {
    this.imagesService.searchImages('moon').subscribe(images => console.log(images));
  }

}
