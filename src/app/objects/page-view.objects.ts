export class Page {
  constructor(title?: String, content?: String) {
    this.title = title;
    this.content = content;
  }

  title: String | undefined;
  content: String | undefined;
}