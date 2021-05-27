export class ImageResponseDto {

  id: string;
  title: string;
  tags: string;
  // tslint:disable-next-line:variable-name
  url_q: string;
  photos: {
    photo: ImageResponseDto[];
  };

  constructor(data?: ImageResponseDto) {
    this.id = data.id;
    this.title = data.title;
    this.tags = data.tags;
    this.url_q = data.url_q;
    this.photos = data.photos;
  }
}
