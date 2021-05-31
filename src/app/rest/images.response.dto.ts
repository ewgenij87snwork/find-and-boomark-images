import {ImageDto} from './image.dto';

export class ImagesResponseDto {

  page: number;
  perpage: number;
  pages: number;
  photo: ImageDto[];
  photos: ImagesResponseDto;


  constructor(data?: ImagesResponseDto) {
    if (data) {
      this.page = data.page;
      this.perpage = data.perpage;
      this.pages = data.pages;
      this.photo = data.photo;
      this.photos = data.photos;
    }
  }
}
