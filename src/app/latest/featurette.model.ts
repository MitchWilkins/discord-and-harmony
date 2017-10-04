export class Featurette {
  public title: string;
  public description: string;
  public videoUrl: string;


  constructor(title: string, desc: string, URL: string) {
    this.title = title;
    this.description = desc;
    this.videoUrl = URL;
  }
}
