export class ImageResponseDto {

  id: string;
  title: string;
  tags: string;
  // tslint:disable-next-line:variable-name
  url_w: string;
  photos: {
    photo: ImageResponseDto[];
  };

  constructor(data?: ImageResponseDto) {
    this.id = data.id;
    this.title = data.title;
    this.tags = data.tags;
    this.url_w = data.url_w;
    this.photos = data.photos;
  }
}
