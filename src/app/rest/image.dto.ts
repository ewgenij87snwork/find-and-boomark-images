export class ImageDto {

  id: string;
  title: string;
  tags: string;
  page: number;
  // tslint:disable-next-line:variable-name
  url_w: string;

  constructor(data?: ImageDto) {
    this.id = data.id;
    this.title = data.title;
    this.tags = data.tags;
    this.page = data.page;
    this.url_w = data.url_w;
  }
}
