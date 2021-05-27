export class ImageResponseDto {

  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  tags: string;
  // tslint:disable-next-line:variable-name
  url_q: string;
  photos: {
    photo: ImageResponseDto[];
  };

  constructor(data?: ImageResponseDto) {
    this.id = data.id;
    this.owner = data.owner;
    this.secret = data.secret;
    this.server = data.server;
    this.farm = data.farm;
    this.title = data.title;
    this.ispublic = data.ispublic;
    this.isfriend = data.isfriend;
    this.isfamily = data.isfamily;
    this.tags = data.tags;
    this.url_q = data.url_q;
    this.photos = data.photos;
  }
}
